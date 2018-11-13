<template>
	<div id="app">
		<div class="content" onmousedown="dragMove();">
			<ow-header></ow-header>

			<main>
				<!--<div>-->
					<!--<div id="nav">-->
						<!--<router-link to="/">Manifest</router-link>-->
						<!--|-->
						<!--<router-link to="/about">About</router-link>-->
					<!--</div>-->
					<!--<router-view />-->
				<!--</div>-->

				<h1>Hello, word!</h1>
				<p>You can drag from anywhere you want, and resize from the edges</p>

				<div class="btn-group">
					<button class="btn" id="close" onclick="closeWindow();">Close</button>
					<button class="btn" id="run-teamspeak" onclick="runTeamSpeak();">Run TeamSpeak</button>
					<button class="btn" onclick="takeScreenshot();">Take Screenshot</button>
					<button class="btn" id="open-subwindow" onclick="openSubWindow();">Open Sub-Window</button>
				</div>


				<img id="screenshot" width="300px"/>
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
  import OwHeader from './shared/overwolf/ow.header.vue'

  export default {
    components: {
      OwHeader
    }
  }
</script>
<style src="./assets/scss/style.scss" lang="scss"></style>
