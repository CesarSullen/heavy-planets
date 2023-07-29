<script setup>
	import { defineProps, ref } from "vue";
	const props = defineProps(["result"]);
</script>
<template>
	<div class="module">Your weight is: {{ result }}</div>
</template>
