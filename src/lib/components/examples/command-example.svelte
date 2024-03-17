<script lang="ts">
    import Calendar from 'svelte-radix/Calendar.svelte'
    import Rocket from 'svelte-radix/Rocket.svelte'
    import EnvelopeClosed from 'svelte-radix/EnvelopeClosed.svelte'
    import Person from 'svelte-radix/Person.svelte'
    import Gear from 'svelte-radix/Gear.svelte'
    import GithubLogo from 'svelte-radix/GithubLogo.svelte'
    import * as Command from '$lib/components/neel-ui/command';
    import { Label } from '$lib/components/neel-ui/shortcut';
  import { cn } from '$lib/utils';
    
    let className: string | undefined = undefined;
    export { 
        className as class
    }

    function handleClick() {
        console.log('clicked');
    }
</script>

<Command.Root>
    <Command.Trigger shortcut="CTRL+O" class={cn(className, `w-[20rem]`)}>
        Search documentation...
        <Label>CTRL+O</Label>
    </Command.Trigger>
    <Command.Content>
        <Command.Search />
        <Command.Results>
            <!-- <Command.Empty /> -->
            <Command.Group heading="Suggestions">
                <Command.Item icon={Calendar} name="calendar" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <Calendar class=    "mr-2 h-4 w-4" />
                        Calendar
                    <span/>
                </Command.Item>
                <Command.Item icon={Rocket} name="launch" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <Rocket class="mr-2 h-4 w-4" />
                        Launch
                    <span/>
                </Command.Item>
                <Command.Item icon={EnvelopeClosed} name="mail" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <EnvelopeClosed class="mr-2 h-4 w-4" />
                        Mail
                    <span/>
                </Command.Item>
            </Command.Group>
            <Command.Seperator />
            <Command.Group heading="Settings">
                <Command.Item icon={Person} shortcut="CTRL+P" name="profile" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <Person class="mr-2 h-4 w-4" />
                        Profile
                    </span>
                    <Label>CTRL+P</Label>
                </Command.Item>
                <Command.Item icon={GithubLogo} shortcut="CTRL+G" name="github" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <GithubLogo class="mr-2 h-4 w-4" />
                        GitHub
                    </span>
                    <Label>CTRL+G</Label>
                </Command.Item>
                <Command.Item icon={Gear} shortcut="CTRL+S" name="settings" callback={handleClick}>
                    <span class="flex flex-row items-center justify-center">
                        <Gear class="mr-2 h-4 w-4" />
                        Settings
                    </span>
                    <Label>CTRL+S</Label>
                </Command.Item>
            </Command.Group>
        </Command.Results>
    </Command.Content>
</Command.Root>