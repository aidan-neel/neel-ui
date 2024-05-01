import { redirect } from "@sveltejs/kit";

// redirect on load to alert-dialog
export async function load() {
    throw redirect(303, "/docs/components/alert-dialog");
}
