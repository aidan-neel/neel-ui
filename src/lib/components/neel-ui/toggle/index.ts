import Root from './toggle.svelte'

const toggleVariants = {
    "primary": "h-10 px-4 border border-transparent text-[14px] rounded-lg duration-100 text-muted-foreground hover:bg-secondary",
    "primary-checked": "h-10 px-4 border border-transparent bg-secondary duration-100 text-[14px] rounded-lg",

    "secondary": "h-10 px-4 border shadow-class bg-background text-[14px] rounded-lg duration-100 text-muted-foreground",
    "secondary-checked": "h-10 px-4 bg-secondary border text-[14px] rounded-lg duration-100",
}

export {
    Root as Toggle,
    toggleVariants
}