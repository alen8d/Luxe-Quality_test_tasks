import { $ } from '@wdio/globals'
//import { document } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Login with invalid password', () =>{
    it('should enter data to the userName field', async () =>{
        await browser.url('https://www.saucedemo.com/');
        const username = 'standard_user';
        await Login.setUserName(username);
    })
    it('should check data is entered to the userName field', async () =>{
        const value=await Login.getUserName();
        //console.log(value.length);
        await expect(value).not.toHaveLength(0);
    })
    it('should enter data to the password field', async () =>{
        const password = Math.random().toString(36).substr(2,10); //generate random pwd [0-9a-z]{8,10}
        // console.log('PASSWORD = '+password);
        await Login.setPassword(password);
    })
    it('should check data is entered to the password field', async() =>{
        const value = await Login.getPassword();
        //console.log(value.length);
        await expect(value).not.toHaveLength(0);
        })
    it('should check data is reprresented as dots instead of characters', async() =>{
        const value = await Login.getPasswordFieldType();
        await expect(value).toEqual('password');
        // console.log('password value '+value)
    })
    it('should click Login Button', async() =>{
        await Login.clickLoginButton();
    })
    it('should check X icons are displayed on the "Login" fields', async() =>{
        const XIconUsernamePresence = await Login.displayedXIconsUsername();
        // console.log(XIconUsernamePresence);
        await expect(XIconUsernamePresence).toEqual(true);
    })
    it('should check X icons are displayed on the "Password" fields', async() =>{
        const XIconPasswordPresence = await Login.displayedXIconsPassword();
        // console.log(XIconPasswordPresence);
        await expect(XIconPasswordPresence).toEqual(true);
    })
    it('should check this fields are highlighted with red', async() =>{
        const borderColor = await Login.getErrorClassColor();
        // console.log('value el = '+ borderColor);
        await expect(borderColor).toEqual('#e2231a');
    })
    it('should check epic sadface: Username and password do not match any user in this service error message are displayed', async() =>{
        const value = await Login.getErrorMessage();
        // console.log("value=== "+value);
        await expect(value).toEqual('Epic sadface: Username and password do not match any user in this service');
    })
})