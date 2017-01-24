import { ItPsmPage } from './app.po';

describe('it-psm App', function() {
  let page: ItPsmPage;

  beforeEach(() => {
    page = new ItPsmPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
