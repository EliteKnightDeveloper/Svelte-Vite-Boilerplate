<script lang="ts">
	import Button from '../Button/Button.svelte';

	export let key: number = 0;
	export let counter: { inputValue: string; count: number };
	export let increase: (key: number) => void;
	export let decrease: (key: number) => void;
	export let init: (key: number) => void;
	export let remove: (index: number) => void;
</script>

<div
	class="flex flex-row gap-8 items-center rounded-lg text-base bg-white p-4 font-medium w-fit shadow-2xl shadow-gray-500/50"
>
	<input bind:value={counter.inputValue} class="p-2 text-gray-500" />
	<span class="w-16">{counter.count}</span>
	<div class="flex flex-row cursor-pointer">
		<Button color="bg-red-500" label="+" onClick={() => increase(key)} />
		<Button color="bg-cyan-500" label="-" onClick={() => decrease(key)} />
		<Button color="bg-yellow-500" label="0" onClick={() => init(key)} />
	</div>
	<!-- svelte-ignore a11y-click-events-have-key-events -->
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<span class="text-gray-500 p-1 cursor-pointer bg-cyan" on:click={() => remove(key)}>x</span>
</div>
