import { $ } from '@wdio/globals'

class LoginTC1{

    get username(){
        return $('#user-name');
    }
    //enter the username to the field
    async setUserName (value){
        this.username.addValue(value);
    }
    //get the data from the field
    async getUserName(){
        return this.username.getValue();
    }
    get password(){
        return $('#password');
    }
    //enter the password to the field
    async setPassword (value){
        this.password.addValue(value);
    }
    //get the password from the field
    async getPassword(){
        return this.password.getValue();
    }
    //get the value of attribute TYPE for field password
    async getPasswordFieldType(){
        return (await this.password).getAttribute('type');
    }
    get loginButton(){
        return $('#login-button');
    }
    async clickLoginButton(){
        (await this.loginButton).click();
    }
    get xIconsUsername(){
        return $('#login_button_container > div > form > div:nth-child(1) > svg > path');
    }
    async displayedXIconsUsername(){
        return (await this.xIconsUsername).isDisplayed();
    }
    get xIconsPassword(){
        return $('#login_button_container > div > form > div:nth-child(2) > svg');
    }
    async displayedXIconsPassword(){
        return (await this.xIconsPassword).isDisplayed();
    }
    get errorClass(){
        return $('#user-name');
    }
    //get color of bottom border
    async getErrorClassColor(){
        const value = await this.errorClass.getCSSProperty("border-bottom-color");
        return value.parsed.hex;
    }
    get errorMessage(){
        return $('#login_button_container > div > form > div.error-message-container.error > h3');
    }
    async getErrorMessage(){
        return (await this.errorMessage).getText();
    }
}

export default new LoginTC1();