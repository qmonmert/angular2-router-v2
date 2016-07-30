import { Angular2RouterV2Page } from './app.po';

describe('angular2-router-v2 App', function() {
  let page: Angular2RouterV2Page;

  beforeEach(() => {
    page = new Angular2RouterV2Page();
  })

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('angular2-router-v2 works!');
  });
});
