import { FormsTaskPage } from './app.po';

describe('forms-task App', () => {
  let page: FormsTaskPage;

  beforeEach(() => {
    page = new FormsTaskPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
