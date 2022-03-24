import HomePage from "../../pages/home-page";
import allureReporter from "@wdio/allure-reporter";
describe("Title Validation", () => {
  before(async () => {
    console.log("This Could be used for Test setup");
    //open url
  });
  beforeEach(async () => {
    console.log("This runs before each test");
    await HomePage.open();
  });
  after(async () => {
    console.log("This could be used for test cleansure");
  });
  afterEach(async () => {
    console.log("This runs after each test");
    //we can do logs
  });
  it(`Open url and assert the title`, async () => {
    allureReporter.addDescription("Login");
    allureReporter.addSeverity("critical");
    // await browser.url(`https://practice.automationbro.com/`);
    // await HomePage.open();
    await expect(browser).toHaveTitle(
      `Practice E-Commerce Site – Automation Bro`
    );
  });
  it(`Open About page and assert the Url`, async () => {
    await browser.url(`https://practice.automationbro.com/about`);
    await expect(browser).toHaveUrl(
      `https://practice.automationbro.com/about/`
    );
  });

  it(`click get-started buttion and valiade the url contains get-started text`, async () => {
    // await browser.url(`https://practice.automationbro.com/`);
    await HomePage.open();

    // await $(`#get-started`).click();
    await HomePage.btnGetStarted.click();
    await expect(browser).toHaveUrlContaining(`get-started`);
  });
  it(`click logo buttion and valiade the  home page url which does not contain get-started text`, async () => {
    await browser.url(`https://practice.automationbro.com/`);
    // await $(`//a[@class='custom-logo-link']`).click();
    await HomePage.customLogoClick.click();
    await expect(browser).not.toHaveUrlContaining(`get-started`);
  });
  it(`find element and assert the get text `, async () => {
    // await browser.url(`https://practice.automationbro.com/`);
    // await HomePage.open();

    //    const pageValue= await  $(`.elementor-widget-container`).getText()
    //      await expect(pageValue).toEqual(`Think different. Make different.`)
    // const pageValue = await $(`.elementor-widget-container`);
    const pageValue = await HomePage.elementContainer;
    await expect(pageValue).toHaveText(`Think different. Make different.`);
  });
});
