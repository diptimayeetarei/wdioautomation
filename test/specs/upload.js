const path = require("path");
describe("Uload a file Text Case", () => {
  it("Simple upload test", async () => {
    //open url
    await browser.url(`https://the-internet.herokuapp.com/upload`);
    //store test fil path
    console.log("the current directory is", __dirname);
    //store test file path
    const filePath = path.join(__dirname, "../../data/download.png");
    console.log("the current directory is filePath", filePath);
    //upload test file
    const remoteFilePath = await browser.uploadFile(filePath);
    //set file path value in the input field
    await $("#file-upload").setValue(remoteFilePath);
    browser.pause(7000);
    await $("#file-submit").click(); //click the submit button
    browser.pause(7000);
    //assertion
    await expect($("h3")).toHaveText("File Uploaded!");
    browser.pause(15000);
  });
  it.only("upload a hidden input field", async () => {
    await browser.url("/cart/");
    //store test fil path
    const filePath = path.join(__dirname, "../../data/download.png");
    console.log("the current directory is filePath", filePath);
    //upload test file
    const remoteFilePath = await browser.uploadFile(filePath);
    //remove hidden class
    await browser.execute("document.querySelector('#upfile_1').className=''");
    //set file path value in the input field
    await $("#upfile_1").setValue(remoteFilePath);
    browser.pause(7000);
    await $("#upload_1").click(); //click the submit button
    browser.pause(7000);
    //assertion
    await expect($("#wfu_messageblock_header_1_label_1")).toHaveTextContaining(
      "File download.png uploaded successfully"
    );
  });
});
