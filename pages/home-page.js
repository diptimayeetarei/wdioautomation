import NavComponent from "../components/nav-comp";
class HomePage {
  open() {
    return browser.url("/");
  }
  get btnGetStarted() {
    return $(`#get-started`);
  }
  get customLogoClick() {
    return $(`//a[@class='custom-logo-link']`);
  }
  get elementContainer() {
    return $(`.elementor-widget-container h1`);
  }
  get navComponent() {
    return NavComponent;
  }
}
export default new HomePage();
