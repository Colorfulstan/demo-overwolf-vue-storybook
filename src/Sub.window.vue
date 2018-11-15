<template>
	<div class="content" onmousedown="dragMove();">
		<main>
			<h1>Hello World, again!</h1>
			<p>This is the sub window. You can drag from anywhere you want, but you can't resize it</p>
			<button class="btn" onclick="closeWindow();">Close</button>
			<button class="btn" @click="increment()">Increment</button>
			<button class="btn" @click="decrement()">Decrement</button>
			<p>Counter: {{counter}}</p>
			<p>Nested Counter: {{counter2}}</p>
		</main>
	</div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import store from './store';

  export default {
    computed: {
      ...mapState('CounterStore', {
        counter: state => state.counter,
		counter2: state => state.nested.counter2
	  })
    },
    methods: {
      ...mapActions('CounterStore', [
        'increment',
        'decrement'
      ])
    }
  }
</script>
<style src="./assets/scss/style.scss" lang="scss"></style>
