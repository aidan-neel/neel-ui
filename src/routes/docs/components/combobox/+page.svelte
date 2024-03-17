<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import Seo from '$lib/components/seo.svelte';
    import NextDoc from '$lib/components/next-doc.svelte';

    import * as Combobox from '$lib/components/neel-ui/combobox';
  import CaretSort from 'svelte-radix/CaretSort.svelte';
  import ComboboxExample from '$lib/components/examples/combobox-example.svelte';

    const Companies = [
        { value: "microsoft", label: "Microsoft" },
        { value: "apple", label: "Apple" },
        { value: "google", label: "Google" },
        { value: "facebook", label: "Facebook" },
        { value: "amazon", label: "Amazon" },
        { value: "netflix", label: "Netflix" },
        { value: "tesla", label: "Tesla" },
        { value: "twitter", label: "Twitter" },
        { value: "linkedin", label: "LinkedIn" },
        { value: "uber", label: "Uber" },
        { value: "lyft", label: "Lyft" },
        { value: "airbnb", label: "Airbnb" },
        { value: "snapchat", label: "Snapchat" },
        { value: "slack", label: "Slack" },
        { value: "pinterest", label: "Pinterest" },
        { value: "spotify", label: "Spotify" },
        { value: "dropbox", label: "Dropbox" },
        { value: "zoom", label: "Zoom" },
        { value: "tiktok", label: "TikTok" },
        { value: "discord", label: "Discord" },
        { value: "reddit", label: "Reddit" },
        { value: "twitch", label: "Twitch" },
        { value: "github", label: "GitHub" },
        { value: "stackoverflow", label: "Stack Overflow" },
        { value: "quora", label: "Quora" },
        { value: "medium", label: "Medium" },
        { value: "wordpress", label: "WordPress" },
        { value: "wikipedia", label: "Wikipedia" },
        { value: "yahoo", label: "Yahoo" },
        { value: "bing", label: "Bing" },
        { value: "duckduckgo", label: "DuckDuckGo" },
        { value: "yelp", label: "Yelp" },
        { value: "zillow", label: "Zillow" },
        { value: "craigslist", label: "Craigslist" },
        { value: "etsy", label: "Etsy" },
        { value: "ebay", label: "eBay" },
        { value: "amazon", label: "Amazon" },
        { value: "walmart", label: "Walmart" },
        { value: "target", label: "Target" },
        { value: "bestbuy", label: "Best Buy" },
        { value: "costco", label: "Costco" },
        { value: "homedepot", label: "Home Depot"}
    ]
</script>
 
<Seo name="combobox" />

<div class="doc-card-parent">
    <DocCard 
    component="combobox"
    desc="Autocomplete input field with a list of options to choose from."
    header="Combobox"
    >
        <ComboboxExample />
    </DocCard>
    <NextDoc />
</div>