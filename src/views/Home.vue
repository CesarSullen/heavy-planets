<script setup>
	import { ref, computed, watchEffect } from "vue";
	import Result from "../components/Result.vue";
	const earthWeight = ref(null);
	const selectedOption = ref(null);
	const isCalculating = ref(false);
	const otherPlanetWeight = ref(null);

	const planets = [
		{
			id: 1,
			name: "Mercury",
			gravity: 3.7,
		},
		{
			id: 2,
			name: "Venus",
			gravity: 8.87,
		},
		{
			id: 3,
			name: "Earth",
			gravity: 9.807,
		},
		{
			id: 4,
			name: "Mars",
			gravity: 3.721,
		},
		{
			id: 5,
			name: "Jupiter",
			gravity: 24.79,
		},
		{
			id: 6,
			name: "Saturn",
			gravity: 10.44,
		},
		{
			id: 7,
			name: "Uranus",
			gravity: 8.87,
		},
		{
			id: 8,
			name: "Neptune",
			gravity: 11.15,
		},
		{
			id: 9,
			name: "Pluto", //IT'S NOT A PLANET!!
			gravity: 0.62,
		},
	];

	const filteredPlanets = planets.filter((planet) => planet.id != 3);

	function selectRadio(id) {
		selectedOption.value = id;
		const labels = document.querySelectorAll(".planet");
		labels.forEach((label) => {
			if (label.getAttribute("for") == id) {
				label.classList.add("selected");
			} else {
				label.classList.remove("selected");
			}
		});
	}

	function calculate() {
		isCalculating.value = true;
		const findEarth = planets.find((planet) => planet.id === 3);
		planets.forEach((planet) => {
			if (selectedOption.value === planet.name) {
				otherPlanetWeight.value =
					Math.floor(
						((earthWeight.value * planet.gravity) / findEarth.gravity) * 100
					) / 100;
			}
		});
		console.log(otherPlanetWeight.value);
	}
</script>

<template>
	<div id="app">
		<div class="function">
			<h1>Calculate your weight on another planet</h1>
			<h2>Write your weight on Earth here:</h2>
			<input type="number" v-model="earthWeight" />

			<form>
				<h2>Select the planet from the list:</h2>

				<div class="planets-list">
					<span v-for="planet in filteredPlanets" :key="planet.id">
						<input
							type="radio"
							:id="planet.id"
							:value="planet.name"
							v-model="selectedOption"
						/>
						<label
							class="planet"
							:for="planet.id"
							@click="selectRadio(planet.id)"
							>{{ planet.name }}</label
						>
					</span>
				</div>
			</form>
			<button @click="calculate">Calculate!!</button>
			<div class="advice">
				<span>ℹ</span
				><span>
					And remember, Pluto isn't a planet, don't ask why I put it here :v
				</span>
			</div>
		</div>
		<div class="result">
			<div v-show="isCalculating">
				<Result :result="otherPlanetWeight"></Result>
			</div>
		</div>
	</div>
</template>
