import { CfmPage } from './app.po';

describe('cfm App', () => {
  let page: CfmPage;

  beforeEach(() => {
    page = new CfmPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
