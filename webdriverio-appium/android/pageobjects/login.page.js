const Page = require('/Users/vinayakkaladhar/Downloads/webdriverio-appium-app-browserstack-master/android/pageobjects/Page.js');

class LoginPage {

    get username () { return $('#username') }
    get password () { return $('#password') }
    get submitBtn () { return $('android=new UiSelector().text("Log in1").className("android.widget.TextView")') }
    get flash () { return $('#flash') }
    get headerLinks () { return $$('#header a') }

    async submit () {
        await this.submitBtn
    }

}

module.exports = LoginPage