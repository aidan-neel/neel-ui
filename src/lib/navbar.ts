export const new_labeled_components = ["Combobox"]

export const components = [
    "alert",
    "badge",
    "breadcrumb",
    "button",
    "card",
    "checkbox",
    "combobox",
    "command",
    "confirm",
    "context-menu",
    "dialog",
    "dropdown-menu",
    "expand-text",
    "file-trigger",
    "input",
    "keycode",
    "link-preview",
    "popout",
    "select",
    "sheet",
    "switch",
    "tabs",
    "toast",
    "toggle",
    "tooltip",
]

export function sanitizeComponent(comp: string) {
    // Capitalize each word, and replace hyphens with spaces
    return comp.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}