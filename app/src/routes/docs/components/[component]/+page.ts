async function getDoc(slug: string) {
    const modules = import.meta.glob("/src/lib/docs/components/*.svelte");
    const module = modules[`/src/lib/docs/components/${slug}.svelte`];
    if (!module) {
        throw new Error(`No such component: ${slug}`);
    }

    const doc = await module();
    const metadata = doc.metadata;
    const source = doc.default;

    return {
        metadata: metadata,
        source: source,
    };
}

// redirect on load to alert-dialog
export async function load({ params }) {
    const { component } = params;

    // Find the respective component in $lib/docs/components, then return it to render the entire .svelte file
    const doc = await getDoc(component);
    return {
        component: doc.source,
    };
}
