<script setup>
	import { ref } from "vue";
	import Result from "../components/Result.vue";
	const earthWeight = ref(null);
	const selected = ref("");
	const isCalculating = ref(false);
	let otherPlanetWeight;

	// Gravity of each planet
	const planets = [
		{
			name: "mercury",
			gravity: 3.7,
		},
		{
			name: "venus",
			gravity: 8.87,
		},
		{
			name: "earth",
			gravity: 9.807,
		},
		{
			name: "mars",
			gravity: 3.721,
		},
		{
			name: "jupiter",
			gravity: 24.79,
		},
		{
			name: "saturn",
			gravity: 10.44,
		},
		{
			name: "uranus",
			gravity: 8.87,
		},
		{
			name: "neptune",
			gravity: 11.15,
		},
		{
			name: "pluto", //IT'S NOT A PLANET!!
			gravity: 0.62,
		},
	];

	function calculate() {
		isCalculating.value = true;
		const findEarth = planets.find((planet) => planet.name === "earth");
		planets.forEach((planet) => {
			if (selected.value == planet.name) {
				otherPlanetWeight =
					Math.floor(
						((earthWeight.value * planet.gravity) / findEarth.gravity) * 100
					) / 100;
			}
		});
		console.log(otherPlanetWeight);
	}
</script>

<template>
	<h1>Calculate your weight on another planet</h1>

	<h2>Write your weight on Earth here:</h2>
	<input type="number" v-model="earthWeight" />

	<form>
		<h2>Select the planet from the list</h2>
		<div class="planets-list">
			<input type="radio" v-model="selected" value="mercury" /><span
				class="planet"
				>Mercury</span
			>
			<input type="radio" v-model="selected" value="venus" /><span
				class="planet"
				>Venus</span
			>
			<input type="radio" v-model="selected" value="mars" /><span class="planet"
				>Mars</span
			>
			<input type="radio" v-model="selected" value="jupiter" /><span
				class="planet"
				>Jupiter</span
			>
			<input type="radio" v-model="selected" value="saturn" /><span
				class="planet"
				>Saturn</span
			>
			<input type="radio" v-model="selected" value="uranus" /><span
				class="planet"
				>Uranus</span
			>
			<input type="radio" v-model="selected" value="neptune" /><span
				class="planet"
				>Neptune</span
			>
			<input type="radio" v-model="selected" value="pluto" /><span
				class="planet"
				>Pluto</span
			>
		</div>
	</form>
	<button @click="calculate">Calculate!!</button>

	<div id="result" v-show="isCalculating">
		<Result :result="otherPlanetWeight"></Result>
	</div>
	<p>And remember, Pluto isn't a planet, don't ask why I put it here :v</p>
</template>
