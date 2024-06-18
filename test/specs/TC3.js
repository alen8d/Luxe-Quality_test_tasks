import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';

afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Login with invalid login', () =>{
    it('should enter data to the userName field', async () =>{
        await browser.url('https://www.saucedemo.com/');
        const username = 'standarD_user';
        await Login.setUserName(username);
    })
    it('should check data is entered to the userName field', async () =>{
        const value=await Login.getUserName();
        await expect(value).not.toHaveLength(0);
    })
    it('should enter data to the password field', async () =>{
        const password = 'secret_sauce';
        await Login.setPassword(password);
    })
    it('should check data is entered to the password field', async() =>{
        const value = await Login.getPassword();
        await expect(value).not.toHaveLength(0);
        })
    it('should check data is reprresented as dots instead of characters', async() =>{
        const value = await Login.getPasswordFieldType();
        await expect(value).toEqual('password');
        })
    it('should click Login Button', async() =>{
        await Login.clickLoginButton();
    })
    it('should check X icons are displayed on the "Login" fields', async() =>{
        const XIconUsernamePresence = await Login.displayedXIconsUsername();
        await expect(XIconUsernamePresence).toEqual(true);
    })
    it('should check X icons are displayed on the "Password" fields', async() =>{
        const XIconPasswordPresence = await Login.displayedXIconsPassword();
        await expect(XIconPasswordPresence).toEqual(true); 
    })
    it('should check this fields are highlighted with red', async() =>{
        const borderColor = await Login.getErrorClassColor();
        await expect(borderColor).toEqual('#e2231a');
    })
    it('should check epic sadface: Username and password do not match any user in this service error message are displayed', async() =>{
        const value = await Login.getErrorMessage();
        await expect(value).toEqual('Epic sadface: Username and password do not match any user in this service');
        
    })
})