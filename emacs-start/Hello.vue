<template>
<p>{{ greeting }} <i>world!</i></p>
</template>

<script>
module.exports = {
	data: function () {
		return {
			greeting: 'hello'
		}
	}
}
</script>

<style scoped>
p {
	font-size: 2em;
	text-align: center;
}
</style>
