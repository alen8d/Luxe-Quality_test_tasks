import { $ } from '@wdio/globals'

class LoginTC1{

    get username(){
        return $('#user-name')
    }
    async setUserName (value){
        this.username.addValue(value)
    }
    async getUserName(){
        return this.username.getValue()
    }
    get password(){
        return $('#password')
    }
    async setPassword (value){
        this.password.addValue(value)
    }
    async getPassword(){
        return this.password.getValue()
    }
    async getPasswordFieldType(){
        return (await this.password).getAttribute('type')
    }
    get loginButton(){
        return $('#login-button')
    }
    async clickLoginButton(){
        (await this.loginButton).click();
    }
    get xIconsUsername(){
        //return $('svg[aria-hidden="true"]')
        return $('#login_button_container > div > form > div:nth-child(1) > svg > path')
    }
    async displayedXIconsUsername(){
        return (await this.xIconsUsername).isDisplayed();
    }
    get xIconsPassword(){
        return $('#login_button_container > div > form > div:nth-child(2) > svg')
    }
    async displayedXIconsPassword(){
        return (await this.xIconsPassword).isDisplayed();
    }
    get errorClass(){
        return $('#user-name')
    }
    async getErrorClassColor(){
        const value = await this.errorClass.getCSSProperty("border-bottom-color")
        return await value.parsed.hex
    }
    get errorMessage(){
        return $('#login_button_container > div > form > div.error-message-container.error > h3')
        //return $('button[data-test="error-button"]')
    }
    async getErrorMessage(){
        return (await this.errorMessage).getText();
    }
}

export default new LoginTC1();