# demo-overwolf

## Prerequisites
1. Install node
2. globally install vue-cli 3 `npm install -g @vue/cli`

If you're using yarn instead of npm, you need to know how they differ
regarding dependency installation and script execution.

## Project setup
1. install project dependencies
```
npm install
```
2. build project at least once (`npm run build` or `npm run dev`
3. Load `/out` as unpacked extension in Overwolf

### Compiles and runs overwolf app with hot reloading
```
npm run dev
```
NOTES:
* If changes are made to `vue.config.js`, `/public` or `/windows`, stop and rerun `npm run dev` (TODO: add better way to recompile only the html files and manifest)
* If manifest.json changed, disable and reenable app in Overwolf dev-tools

### runs vue-devtools
```
npm run vue-devtools
```
NOTES:
In the current iteration (0.2.0), only one window is supported.
The latest window, that calls `devtools.connect` will be connected by vue-devtools.
A way to get around this is one of the following:
* start multiple dev-tools servers on different ports and connect to them in each window
* hack dev-tools to support multiple connections on the same server :D

Because in this demo the store only really lives on the main-window,
time-travel and generally vuex debugging only works for that window.

### Compiles and minifies overwolf app for production
```
npm run build
```

### Compiles and runs storybook with hot reloading
```
npm run serve:storybook
```

### Compiles storybook-static for external deployment
```
npm run build:storybook
```
This will create the folder `/storybook-static`, which can be deployed to a webserver for external access

### Lints and fixes files
```
npm run lint
```

### Run your tests (TODO: still on default setup)
```
npm run test
```

### Run your unit tests (TODO: still on default setup)
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
