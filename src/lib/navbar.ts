export const new_labeled_components = ["Dropdown Menu", "Context Menu", "Toggle", "Shortcut", "Command" ]

export const components = [
    "alert",
    "badge",
    "breadcrumb",
    "button",
    "card",
    "command",
    "confirm",
    "context-menu",
    "dropdown-menu",
    "input",
    "link-preview",
    "select",
    "sheet",
    "tabs",
    "toggle",
    "tooltip"
]

export function sanitizeComponent(comp: string) {
    // Capitalize each word, and replace hyphens with spaces
    return comp.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
}