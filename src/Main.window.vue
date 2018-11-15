<template>
	<div id="app">
		<div class="content" onmousedown="dragMove();">
			<ow-header></ow-header>

			<main>
				<!--
				<div>
					<div id="nav">
						<router-link to="/">Manifest</router-link>
						|
						<router-link to="/about">About</router-link>
					</div>
					<router-view />
				</div>
				-->

				<h1>Hello, word!</h1>
				<p>You can drag from anywhere you want, and resize from the edges</p>

				<div class="btn-group">
					<button class="btn" id="close" onclick="closeWindow();">Close</button>
					<button class="btn" id="run-teamspeak" onclick="runTeamSpeak();">Run TeamSpeak</button>
					<button class="btn" onclick="takeScreenshot();">Take Screenshot</button>
					<button class="btn" id="open-subwindow" onclick="openSubWindow();">Open Sub-Window</button>

					<button class="btn" @click="increment()">Increment</button>
					<button class="btn" @click="decrement()">Decrement</button>
				</div>

				<p>Counter: {{counter}}</p>
				<p>Nested Counter: {{nested.counter2}}</p>

				<img id="screenshot" width="300px" />
				<img alt="Vue logo" src="./assets/logo.png">

			</main>
		</div>

		<div class="resize horizontal top" onmousedown="dragResize('Top');"></div>
		<div class="resize vertical left" onmousedown="dragResize('Left');"></div>
		<div class="resize vertical right" onmousedown="dragResize('Right');"></div>
		<div class="resize horizontal bottom" onmousedown="dragResize('Bottom');"></div>

		<div class="resize corner top-left" onmousedown="dragResize('TopLeft');"></div>
		<div class="resize corner top-right" onmousedown="dragResize('TopRight');"></div>
		<div class="resize corner bottom-left" onmousedown="dragResize('BottomLeft');"></div>
		<div class="resize corner bottom-right" onmousedown="dragResize('BottomRight');"></div>
	</div>
</template>
<script>
  import {mapActions, mapState} from 'vuex'
  import OwHeader from './shared/overwolf/ow.header.vue'

  export default {
    components: {
      OwHeader
    },
    computed: {
      ...mapState('CounterStore', ['counter', 'nested'])
    },
    methods: {
      ...mapActions('CounterStore', [
        'increment',
        'decrement'
      ])
    },
    watch: {
      counter(...args) {
        console.log('counter watch triggered', args)
      }
    },
    created() {
      // THIS WILL ONLY WORK WITHIN THE RESPECTIVE WINDOW
      // this.mutationSubscriptionUnsub = this.$store.subscribeAction((mutation, state) => {
      //   console.log(this.name, 'mutation subscription - mutation:', mutation);
      //   console.log(this.name, 'mutation subscription - state:', state);
      // });

      // no idea how this works tbh, doesn't do anything right now
      // this.unwatch = this.$store.watch((state)=>state.CounterStore.counter, (...args)=>{
      //   console.log('watcher on store triggered', args)
      // })
    },
    updated(...args) {
      console.log('something was updated', args)
    },
    destroyed() {
      // this.mutationSubscriptionUnsub();
      // this.unwatch()
    }
  }
</script>
<style src="./assets/scss/style.scss" lang="scss"></style>
