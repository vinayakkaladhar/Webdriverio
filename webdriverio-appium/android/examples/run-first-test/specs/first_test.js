const LoginPage = require('/Users/vinayakkaladhar/Downloads/webdriverio-appium-app-browserstack-master/android/pageobjects/login.page.js');
var assert = require('assert');
const allureReporter = require('@wdio/allure-reporter').default

describe('Search Wikipedia Functionality', () => {
  it('can find search results', async () => {
    allureReporter.addFeature('Feature')
//For Android
    const login = new LoginPage()
    var allowAccess = await $('android=new UiSelector().text("Allow").className("android.widget.Button")');
    await allowAccess.waitForDisplayed({ timeout: 30000 });
    await allowAccess.click();
    var searchSelector = await login.submitBtn
    searchSelector.waitForDisplayed({timeout: 30000})
    searchSelector.click()
    
    
    
  });
});
