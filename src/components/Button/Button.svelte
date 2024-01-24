<script lang="ts">
	export let label: string = '';
	export let color: string = '';
	export let onClick: () => void;
</script>

<button
	type="submit"
	on:click={onClick}
	class={`rounded-lg text-base cursor-pointer px-4 py-2 font-medium w-fit text-gray-700 ${color}`}
	>{label}</button
>
