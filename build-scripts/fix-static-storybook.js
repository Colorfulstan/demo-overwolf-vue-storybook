// https://github.com/storybooks/vue-cli-plugin-storybook/issues/27#issuecomment-424662238

const fs = require('fs-extra')
const path = require('path')

fs.copy(path.resolve(__dirname, '../public/svg'), path.resolve(__dirname, '../storybook-static/svg'), err => {
  if (err) return console.error(err)

  console.log('success!')
})

const pathToHtml = path.resolve(__dirname, '../storybook-static/iframe.html');
const getLinkTag = (path) => `<link rel="stylesheet" href="${path}">`

const replaceContents = (contents, matchR) => {
  const match = contents.match(matchR)

  if (!match) {
    return contents
  }

  let correctContents = contents;

  match.forEach(m => {
    const source = m.match(/css(.*)?\.css/)
    if (!source) {
      return
    }

    correctContents = correctContents.replace(m, getLinkTag(source[0]));
  })

  return correctContents
}

fs.readFile(pathToHtml, {encoding: 'utf8'}, function(error, contents) {
  if (error) {
    console.error(error)
    return
  }

  const correctContents = replaceContents(contents, /<script(.*)?\.css(.*)?script>/g)
  fs.writeFileSync(pathToHtml, correctContents, {encoding: 'utf8'})
})
