<script lang="ts">
	import welcome from '$lib/images/svelte-welcome.webp';
	import welcome_fallback from '$lib/images/svelte-welcome.png';

	import Counter from '$components/Counter/Counter.svelte';
	import Button from '$components/Button/Button.svelte';

	import toast, { Toaster } from 'svelte-french-toast';

	interface CounterItem {
		inputValue: string;
		count: number;
	}

	let counters: CounterItem[] = [{ inputValue: 'new', count: 0 }];

	const addCounter = () => {
		counters = [...counters, { inputValue: 'new', count: 0 }];
		toast.success('Created!');
	};

	const increaseCount = (index: number) => {
		counters[index].count += 1;
	};

	const decreaseCount = (index: number) => {
		if (counters[index].count - 1 < 0) return;
		counters[index].count -= 1;
	};

	const initCount = (index: number) => {
		counters[index].count = 0;
	};

	const removeCounter = (index: number) => {
		counters = counters.filter((_, currentIndex) => currentIndex !== index);
		toast.success('Removed!', {
			icon: '👏'
		});
	};

	$: titleList = counters.map((counter) => counter.inputValue).join(', ');
	$: sumOfCount = counters.reduce((sum, counter) => sum + counter.count, 0);
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<Toaster />
<section class="flex flex-col w-full justify-start items-center">
	<h1>
		<span class="welcome">
			<picture>
				<source srcset={welcome} type="image/webp" />
				<img src={welcome_fallback} alt="Welcome" />
			</picture>
		</span>
	</h1>
	<div class="flex flex-col items-center gap-4">
		<div class="flex flex-col items-center justify-center w-full text-gray-700 text-5xl">
			Multiple Counter
		</div>

		<div class="flex flex-col gap-4 items-center">
			{#each counters as counter, index}
				<Counter
					key={index}
					bind:counter
					increase={() => increaseCount(index)}
					decrease={() => decreaseCount(index)}
					init={() => initCount(index)}
					remove={() => removeCounter(index)}
				/>
			{/each}
			<Button label="New Counter" onClick={addCounter} color="bg-red-500" />
		</div>

		<div class="flex flex-row gap-2">
			<span class="text-gray-700">Title list:</span>
			<span class="text-gray-700"> {titleList}</span>
		</div>
		<div class="flex flex-row gap-2">
			<span class="text-gray-700">Sum of count:</span>
			<span class="text-gray-700">{sumOfCount}</span>
		</div>
	</div>
</section>
