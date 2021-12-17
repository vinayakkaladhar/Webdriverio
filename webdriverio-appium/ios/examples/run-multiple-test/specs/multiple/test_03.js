var assert = require('assert');

describe('Text Verification', () => {
  it('should match displayed text with input text', async () => {
    var textButton = await $(`~Text Button`);
    await textButton.waitForDisplayed({ timeout: 30000 });
    await textButton.click();

    var textInput = await $(`~Text Input`);
    await textInput.waitForDisplayed({ timeout: 30000 });
    await textInput.click()
    await textInput.addValue("hello03@browserstack.com"+"\n");

    var textOutput = await $(`~Text Output`);
    await textOutput.waitForDisplayed({ timeout: 30000 });
    var value = await textOutput.getText();

    if (value === "hello03@browserstack.com")
      assert(true)
    else
      assert(false)
    
    var back = await $('~UI Elements');
    await back.click();
  });
});
