describe("Understanding iframe", () => {
  it("iFrame related test cases", async () => {
    await browser.url("/iframe-sample/");
    //access the iframe
    const iFrameId = await $("#advanced_iframe");
    await browser.switchToFrame(iFrameId);
    //verify the logo exist
    await expect($("#site-logo")).toExist();
    //switch to parent frame
    await browser.switchToParentFrame();
    //verify page title
    await expect($("h1.tg-page-header__title")).toHaveText("IFrame Sample");
  });
});
