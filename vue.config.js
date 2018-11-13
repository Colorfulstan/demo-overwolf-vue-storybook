// TODO: feat: add custom build:dev step to vue cli service (Plugin)
// a) only write files coming from /public while in development
// b) (DONE - chaining CopyWebpackPlugin) make it possible to manipulate manifest.json
// b2) include manifest.json in build process with easier and robust config + sensible defaults or presets
// b3) connect manifest.json windows to pages. single source of truth + reuse for manifest + vue pages config

const path = require('path')
const fs = require('fs')

//region Pages setup
// these are the different Overwolf windows.
// entry.filename needs to be set in manifest.json as manifest.data.windows['WindowName'].file
let pages = {
  MainWindow: {
    owIsStartWindow: true,
    owConfig: {
      "file": "main.window.html",
      "transparent": true,
      "resizable": true,
      "use_os_windowing": true,
      "size": {
        "width": 700,
        "height": 400
      },
      "min_size": {
        "width": 400,
        "height": 400
      }
    },
    // entry for the page
    entry: 'src/Main.window.ts',
    // the source template
    template: 'windows/main.window.html',
    // output as dist/index.html
    filename: 'main.window.html',
    // when using title option,
    // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Main Window',
    // chunks to include on this page, by default includes
    // extracted common chunks and vendor chunks.
    chunks: ['chunk-vendors', 'chunk-common', 'MainWindow']
  },
  SubWindow: {
    owConfig: {
      "file": "sub.window.html",
      "transparent": true,
      "resizable": false,
      "size": {
        "width": 400,
        "height": 300
      }
    },
    // entry for the page
    entry: 'src/Sub.window.ts',
    // the source template
    template: 'windows/sub.window.html',
    // output as dist/index.html
    filename: 'sub.window.html',
    // when using title option,
    // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
    title: 'Sub Window',
    // chunks to include on this page, by default includes
    // extracted common chunks and vendor chunks.
    chunks: ['chunk-vendors', 'chunk-common', 'SubWindow']
  }
  // when using the entry-only string format,
  // template is inferred to be `windows/subpage.html`
  // and falls back to `public/index.html` if not found.
  // Output filename is inferred to be `subpage.html`.
  // subpage: 'src/subpage/main.js'
}

if (process.env.NODE_ENV === 'development') {
  const adminWindowFileName = 'index.html'
  pages['AdminWindow'] = {
    owConfig: {
      "file": adminWindowFileName,
      "transparent": true,
      "resizable": true,
      "use_os_windowing": true,
      "size": {
        "width": 400,
        "height": 300
      }
    },
    entry: 'src/Admin.window.ts',
    template: 'windows/admin.window.html',
    filename: adminWindowFileName,
    title: 'Administration',
    chunks: ['chunk-vendors', 'chunk-common', 'AdminWindow']
  }
}

const overwolfWindows = Object.keys(pages).reduce((result, windowName) => {
  result[windowName] = pages[windowName].owConfig
  return result
}, {})
//endregion

const publicDir = 'public'
const outDir = 'out'

const chainWebpack = (config) => {
  config
    .plugin('copy')
    .tap(args => {
      const pluginArgs = args[0]
      console.log(args)
      pluginArgs[0].ignore.push('manifest.json')
      pluginArgs.push({
        from: path.resolve(__dirname, publicDir, 'manifest.json'),
        to: path.resolve(__dirname, outDir, 'manifest.json'),
        toType: 'file',
        transform(content, path) {
          const manifest = JSON.parse(content.toString())
          const pckg = JSON.parse(fs.readFileSync('package.json').toString())

          // set app version based on package version, for easier release tooling
          manifest.meta.version = pckg.version

          // set windows config
          manifest.data.windows = overwolfWindows
          // set start window
          let startWindow = Object.keys(pages)[0] // default if not given explicitly
          const startWindowConfig = Object.keys(pages).find((windowName) => {
            if (pages[windowName].owIsStartWindow) {
              startWindow = windowName
              return true
            }
          })
          manifest.data.start_window = startWindow

          return Buffer.from(JSON.stringify(manifest))
        }
      })
      return args
    })
}

module.exports = {
  chainWebpack,
  pages,
  baseUrl: process.env.VUE_APP_HOST,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  outputDir: 'out'
}
