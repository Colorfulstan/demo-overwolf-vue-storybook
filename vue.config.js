// TODO: feat: add custom build:dev step to vue cli service (Plugin)
// a) only write files coming from /public
// b) make it possible to manipulate manifest.json
// b2) include manifest.json in build process with easier and robust config + sensible defaults or presets
// b3) connect manifest.json windows to pages. single source of truth + reuse for manifest + vue pages config

//region Pages setup
// these are the different Overwolf windows.
// entry.filename needs to be set in manifest.json as manifest.data.windows['WindowName'].file
let pages = {
  MainWindow: {
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
  pages['AdminWindow'] = {
    entry: 'src/Admin.window.ts',
    template: 'windows/admin.window.html',
    filename: 'index.html',
    title: 'Administration',
    chunks: ['chunk-vendors', 'chunk-common', 'AdminWindow']
  }
}
//endregion

module.exports = {
  pages,
  baseUrl: process.env.VUE_APP_HOST,
  devServer: {
    headers: {
      'Access-Control-Allow-Origin': '*'
    }
  },
  outputDir: 'out'
}
