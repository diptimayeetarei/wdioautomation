import HomePage from "../../pages/home-page";
describe(`Navigation menu`, () => {
  it(`Get all navigation menu items and assert them`, async () => {
    // await browser.url("/");
    await HomePage.open();

    const expectedLinks = [
      "Home",
      "About",
      "Shop",
      "Blog",
      "Contact",
      "My account",
    ];
    const actualList = [];
    // const navLinks = await $(`#primary-menu`).$$(`li[id*=menu]`); //it will give all 6 items
    // const navLinks = await $$(`#primary-menu li[id*=menu]`); //it will give all 6 items
    const navLinks = await HomePage.navComponent.linksNavMenu;

    for (const link of navLinks) {
      actualList.push(await link.getText());
    }
    await expect(expectedLinks).toEqual(actualList);
  });
});
