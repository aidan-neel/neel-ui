import Button from "./button.svelte";

interface DataBuilderType {
    key: string;
    type: "tooltip" | "link-preview" | "sheet";
}

export {
    Button,
    type DataBuilderType
};