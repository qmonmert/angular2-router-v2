export class Angular2RouterV2Page {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('angular2-router-v2-app h1')).getText();
  }
}
