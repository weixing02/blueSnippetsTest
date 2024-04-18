const chalk = require('chalk')
const path = require('path')
const ora = require('ora')

const updateFiles = require('./lib/updateFiles')
const runCmdSync = require('./utils/runCmdSync')

const rootDir = path.join(__dirname, '../')

const nDir = path.join(rootDir, '') // 目标文件地址

const nSrc = `${nDir}src` // 新src

let spinner = ora().start()

const migrate = async () => {
  spinner.succeed(chalk.green(`开始迁移`))
  await updateFiles(`${nDir}src`)

  // 格式化代码
  runCmdSync('npx prettier --write . --log-level silent', `${nSrc}`)
}

migrate()
