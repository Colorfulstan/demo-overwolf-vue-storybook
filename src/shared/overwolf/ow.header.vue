<template>
	<header>
		<div class="window-controls-group">
			<button class="window-control" @click="showSupport">
				<svg class="svg-icon-fill">
					<use xlink:href="./svg/sprite.svg#window-control_support" />
				</svg>
			</button>

			<button class="window-control">
				<svg class="svg-icon-fill">
					<use xlink:href="./svg/sprite.svg#window-control_settings" />
				</svg>
			</button>

			<button class="window-control" @click="minimize">
				<svg class="svg-icon-fill">
					<use xlink:href="./svg/sprite.svg#window-control_minimize" />
				</svg>
			</button>

			<button class="window-control" @click="toggleMaximize">
				<input type="checkbox" class="maximize-restore-selector toggle-icons" checked />
				<svg class="svg-icon-fill svg-icon-restore">
					<use xlink:href="./svg/sprite.svg#window-control_restore" />
				</svg>
				<svg class="svg-icon-fill svg-icon-maximize">
					<use xlink:href="./svg/sprite.svg#window-control_maximize" />
				</svg>
			</button>

			<button class="window-control window-control-close" @click="closeWindow">
				<svg class="svg-icon-fill">
					<use xlink:href="./svg/sprite.svg#window-control_close" />
				</svg>
			</button>
		</div>
	</header>
</template>
<script>
  function showSupport() {
    window.location.href = 'overwolf://settings/support';
  }

  function minimize() {
    overwolf.windows.getCurrentWindow((result) => {
      if (result.status === 'success') {
        overwolf.windows.minimize(result.window.id)
      }
    })
  }

  function toggleMaximize() {
    const element = document.querySelector('.maximize-restore-selector')
    const root = document.documentElement

    overwolf.windows.getCurrentWindow((result) => {
      if (result.status !== 'success') {
        return
      }

      if (element.checked) {
        overwolf.windows.restore(result.window.id)
        root.classList.remove('maximized')
      } else {
        overwolf.windows.maximize(result.window.id)
        root.classList.add('maximized')
      }
    })
  }

  function closeWindow() {
    overwolf.windows.getCurrentWindow((result) => {
      if (result.status === 'success') {
        overwolf.windows.close(result.window.id)
      }
    })
  }

  export default {
    created() {
      // @ts-ignore
      // this.$injector.get('test').hi();
    },
    methods: {
      closeWindow,
      minimize,
      showSupport,
      toggleMaximize
    }
  }
</script>
