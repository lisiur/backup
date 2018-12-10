const chokidar = require('chokidar')
const path = require('path')
const util = require('util')
const exec = util.promisify(require('child_process').exec)

async function tsc() {
  const { stdout, stderr } = await exec('npx tsc')
  if (!stderr) {
    console.clear()
    console.log('build success')
  }
}
chokidar
  .watch('./src', { ignored: /(^|[\/\\])\../ })
  .on('all', (event, path) => tsc())
