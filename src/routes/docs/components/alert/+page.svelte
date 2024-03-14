<script lang="ts"> 
    import { Button } from '$lib/components/neel-ui/button';
    import * as Alert from '$lib/components/neel-ui/alert';
    import DocCard from '$lib/components/doc-card.svelte';
    import Person from 'svelte-radix/Person.svelte'
    import ExclamationTriangle from 'svelte-radix/ExclamationTriangle.svelte'
    import CheckCircled from 'svelte-radix/CheckCircled.svelte'
    import { Breadcrumb } from '$lib/components/neel-ui/breadcrumb';
    import { Input } from '$lib/components/neel-ui/input'
    import VariantCard from '$lib/components/variant-card.svelte';
    import { alertExamples } from './alert';
    import { examples } from '$lib/examples';
    import Seo from '$lib/components/seo.svelte';
import NextDoc from '$lib/components/next-doc.svelte';</script>

<Seo name="alert" />

<div class="doc-card-parent">
    <DocCard 
    component="alert"
    desc="Displays a callout message to the user."
    header="Alert"
    >
        <Alert.Root type="default" class="w-full">
            <Person class="w-5 h-5 flex-shrink-0" />
            <Alert.Content>
                <Alert.Title>
                    Your email has been verified.
                </Alert.Title>
                <Alert.Description>
                    You can now access all the features of this site.
                </Alert.Description>
            </Alert.Content>
        </Alert.Root>
    </DocCard>
    
    <h1 class="pb-4 mt-8 border-b header_2nd">
        Variants
    </h1>
    


    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Default
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={examples["alert"]}>
            <Alert.Root type="default" class="w-full">
                <Person class="w-5 h-5 flex-shrink-0" />
                <Alert.Content>
                    <Alert.Title>
                        Your email has been verified.
                    </Alert.Title>
                    <Alert.Description>
                        You can now access all the features of this site.
                    </Alert.Description>
                </Alert.Content>
            </Alert.Root>
        </VariantCard>
    </div>



    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Destructive
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={alertExamples["destructive"]}>
            <Alert.Root type="destructive" class="w-full">
                <ExclamationTriangle class="w-5 h-5 flex-shrink-0" />
                <Alert.Content>
                    <Alert.Title>
                        Error
                    </Alert.Title>
                    <Alert.Description>
                        Your session has expired. Please log in again.
                    </Alert.Description>
                </Alert.Content>
            </Alert.Root>
        </VariantCard>
    </div>



    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Warning
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={alertExamples["warning"]}>
            <Alert.Root type="warning" class="w-full">
                <ExclamationTriangle class="w-5 h-5 flex-shrink-0" />
                <Alert.Content>
                    <Alert.Title>
                        Warning
                    </Alert.Title>
                    <Alert.Description>
                        You have an un-used coupon in your cart.
                    </Alert.Description>
                </Alert.Content>
            </Alert.Root>
        </VariantCard>
    </div>



    <div class="mt-4"></div>
    <h3 class="text-xl font-semibold">
        Success
    </h3>
    <div class="w-full flex items-center justify-center bg-secondary-muted shadow-class relative rounded-lg border mt-4">
        <VariantCard code={alertExamples["success"]}>
            <Alert.Root type="success" class="w-full">
                <CheckCircled class="w-5 h-5 flex-shrink-0" />
                <Alert.Content>
                    <Alert.Title>
                        Success
                    </Alert.Title>
                    <Alert.Description>
                        Your email has been verified.
                    </Alert.Description>
                </Alert.Content>
            </Alert.Root>
        </VariantCard>
    </div>

    <NextDoc />
</div>