import { AngularCalculatorPage } from './app.po';

describe('angular-calculator App', () => {
  let page: AngularCalculatorPage;

  beforeEach(() => {
    page = new AngularCalculatorPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
