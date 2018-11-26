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
				<p>Nested Counter: {{counter2}}</p>

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
<script lang="ts">
  import OwHeader         from './shared/overwolf/ow.header.vue';
  import { CounterMixin } from './counter/counter.mixin';

  export default {
    mixins    : [CounterMixin],
    components: {
      OwHeader
    },
    data      : () => {
      return {};
    },

    watch: {
      counter(...args: any[]) {
        console.log('counter watch triggered', args);
      }
    },
    // created() {
    //   // this.counter  = this.counterService.counter;
    //   // this.counter2 = this.counterService.counter2;
    //   this.counterService.watchCounter((newCounter) => {this.counter = newCounter;});
    //   this.counterService.watchCounter2((newCounter) => {this.counter2 = newCounter;});
    // },
    updated(...args: any[]) {
      console.log('something was updated', args);
    }
  };
</script>
<style src="./assets/scss/style.scss" lang="scss"></style>
