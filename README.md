# demo-overwolf

## Prerequisites
1. Install node
2. globally install vue-cli 3 `npm install -g @vue/cli`

## Project setup
1. install project dependencies
```
npm install
```
2. build project at least once
3. Load `/out` as unpacked package in Overwolf

### Compiles and runs overwolf app with hot reloading
```
npm run dev
```
NOTES:
* If changes are done to `vue.config.js`, `/public` or `/windows`, stop and rerun `npm run dev`
* If manifest.json changed, disable and reenable app in Overwolf dev-tools

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


### Run your tests (TODO: still on default setup)
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

### Run your unit tests (TODO: still on default setup)
```
npm run test:unit
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
