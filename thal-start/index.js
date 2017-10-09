const puppeteer = require('puppeteer')
const CREDS = require('./creds')
const siteUrl = 'https://github.com'

const USERNAME_SELECTOR = '#login_field'
const PASSWORD_SELECTOR = '#password'
const BUTTON_SELECTOR = '#login > form > div.auth-form-body.mt-3 > input.btn.btn-primary.btn-block'

async function run() {
  const browser = await puppeteer.launch({
    // headless: false
  })
  const page = await browser.newPage()

  await page.goto(siteUrl + '/login')

  await page.click(USERNAME_SELECTOR)
  await page.type(CREDS.username)

  await page.click(PASSWORD_SELECTOR)
  await page.type(CREDS.password)

  await page.click(BUTTON_SELECTOR)

  await page.waitForNavigation()

  const userToSearch = 'lisiur'

  const searchUrl = 'https://github.com/search?q=' + userToSearch + '&type=Users&utf8=%E2%9C%93'

  await page.goto(searchUrl)
  await page.waitFor(2*1000)

  const USER_LIST_INFO_SELECTOR = '.user-list-item'
  const USER_LIST_USERNAME_SELECTOR = '.user-list-info>a:nth-child(1)'
  const USER_LIST_EMAIL_SELECTOR = '.user-list-info>.user-list-meta .muted-link'

  const users = await page.evaluate((sInfo, sName, sEmail) => {
    return Array.prototype.slice.apply(document.querySelectorAll(sInfo))
      .map($userListItem => {
        const username = $userListItem.querySelector(sName).innerText
        const $email = $userListItem.querySelector(sEmail)
        const email = $email ? $email.innerText : undefined
        return { username, email, }
      })
      .filter(u => !!u.email)
  }, USER_LIST_INFO_SELECTOR, USER_LIST_USERNAME_SELECTOR, USER_LIST_EMAIL_SELECTOR)

  // await page.screenshot({path: 'screenshots/github.png'})
  console.log(users)


  browser.close()
}

run()