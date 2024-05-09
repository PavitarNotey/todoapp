import { browser, by, element } from 'protractor';

describe('ToDo Application', () => {
  it('should add a new item', () => {
    browser.get('/');
    const input = element(by.css('input.new-item'));
    const addButton = element(by.css('button.add-item'));

    input.sendKeys('New Task');
    addButton.click();

    const lastItem = element.all(by.css('.item')).last();
    // expect(lastItem.getText()).toEqual();
  });

  it('should remove an item correctly', () => {
    const firstItem = element.all(by.css('.item')).first();
    const firstItemText = firstItem.getText();
    firstItem.element(by.css('button.remove-item')).click();

    const newFirstItem = element.all(by.css('.item')).first();
    expect(newFirstItem.getText()).not.toEqual(firstItemText);
  });
});
