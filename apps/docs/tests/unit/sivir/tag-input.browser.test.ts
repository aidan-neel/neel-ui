import { tick } from 'svelte';
import { describe, expect, it, vi } from 'vitest';
import { page, userEvent } from 'vitest/browser';
import { render } from 'vitest-browser-svelte';
import TagInputFormFixture from '../../fixtures/TagInputFormFixture.svelte';

async function flush() {
    await tick();
    await tick();
    await new Promise((r) => setTimeout(r, 20));
}

function form() {
    return document.querySelector<HTMLFormElement>('[data-testid="tag-form"]');
}

function field() {
    return document.querySelector<HTMLInputElement>('[data-ui="tag-input-input"]');
}

describe('TagInput -- native form validation', () => {
    it('blocks submission through `required` when no tags are added', async () => {
        render(TagInputFormFixture, { required: true, tags: [] });
        await flush();

        // Hidden inputs are barred from constraint validation and vanish when
        // the list is empty, so the constraint lives on the visible input.
        expect(form()?.checkValidity()).toBe(false);
    });

    it('reports the custom message rather than the browser default', async () => {
        render(TagInputFormFixture, { required: true, tags: [] });
        await flush();

        expect(field()?.validationMessage).toBe('Add at least one tag.');
    });

    it('releases the constraint once a tag is committed', async () => {
        render(TagInputFormFixture, { required: true, tags: [] });
        await flush();

        await userEvent.fill(page.getByPlaceholder('Add a tag…'), 'alpha');
        await userEvent.keyboard('{Enter}');
        await flush();

        expect(form()?.checkValidity()).toBe(true);
    });

    it('is not satisfied by an uncommitted draft', async () => {
        render(TagInputFormFixture, { required: true, tags: [] });
        await flush();

        await userEvent.fill(page.getByPlaceholder('Add a tag…'), 'typed but not committed');
        await flush();

        // The constraint tracks committed tags, not the input's own value.
        expect(form()?.checkValidity()).toBe(false);
    });

    it('does not constrain a form when `required` is not set', async () => {
        render(TagInputFormFixture, { required: false, tags: [] });
        await flush();

        expect(field()?.validationMessage).toBe('');
        expect(form()?.checkValidity()).toBe(true);
    });
});

describe('TagInput -- Enter and form submission', () => {
    it('commits the draft on Enter without submitting the form', async () => {
        const onSubmit = vi.fn();
        render(TagInputFormFixture, { tags: [], onSubmit });
        await flush();

        await userEvent.fill(page.getByPlaceholder('Add a tag…'), 'alpha');
        await userEvent.keyboard('{Enter}');
        await flush();

        expect(onSubmit).not.toHaveBeenCalled();
        const values = Array.from(
            document.querySelectorAll<HTMLInputElement>('input[type="hidden"][name="tags"]')
        ).map((input) => input.value);
        expect(values).toEqual(['alpha']);
    });

    it('submits the form on Enter when the draft is empty', async () => {
        const onSubmit = vi.fn();
        render(TagInputFormFixture, { tags: ['alpha'], onSubmit });
        await flush();

        await page.getByPlaceholder('Add a tag…').click();
        await userEvent.keyboard('{Enter}');
        await flush();

        expect(onSubmit).toHaveBeenCalledTimes(1);
    });

    it('does not submit on Enter for a whitespace-only draft it would refuse', async () => {
        const onSubmit = vi.fn();
        render(TagInputFormFixture, { tags: ['alpha'], onSubmit });
        await flush();

        await userEvent.fill(page.getByPlaceholder('Add a tag…'), '   ');
        await userEvent.keyboard('{Enter}');
        await flush();

        // A blank draft commits nothing, so Enter falls through to the form.
        expect(onSubmit).toHaveBeenCalledTimes(1);
    });
});

describe('TagInput -- accessible name', () => {
    it('keeps the visible label as the accessible name', async () => {
        render(TagInputFormFixture, { label: 'Recipients', tags: [] });
        await flush();

        // An aria-label would outrank the <label for>, so the visible text
        // would drop out of the accessible name (WCAG 2.5.3).
        expect(field()?.hasAttribute('aria-label')).toBe(false);
        await expect.element(page.getByLabelText('Recipients')).toBeInTheDocument();
    });

    it('falls back to the placeholder when no label is rendered', async () => {
        render(TagInputFormFixture, { tags: [] });
        await flush();

        expect(field()?.getAttribute('aria-label')).toBe('Add a tag…');
    });
});

describe('TagInput -- rejection announcements', () => {
    it('announces a refused duplicate through the live region', async () => {
        render(TagInputFormFixture, { tags: ['alpha'] });
        await flush();

        await userEvent.fill(page.getByPlaceholder('Add a tag…'), 'alpha');
        await userEvent.keyboard('{Enter}');
        await flush();

        const live = document.querySelector('[role="status"][aria-live="polite"]');
        expect(live?.textContent).toBe('"alpha" is already added.');
    });
});
