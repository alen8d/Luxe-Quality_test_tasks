import { $ } from '@wdio/globals'
//import { document } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';


describe('saucedemo page', () =>{
    it('should enter data to the userName field', async () =>{
        await browser.url('https://www.saucedemo.com/')
        const username = 'standard_user';
        await LoginTC1.setUserName(username);
    })
    it('should check data is entered to the userName field', async () =>{
        const value=await LoginTC1.getUserName();
        console.log(value.length);
        await expect(value).not.toHaveLength(0)
    })
    it('should enter data to the password field', async () =>{
        const password = Math.random().toString(36).substr(2, 10);
        console.log(password);
        await LoginTC1.setPassword(password);
    })
    it('should check data is entered to the password field', async() =>{
        const value = await LoginTC1.getPassword();
        console.log(value.length);
        await expect(value).not.toHaveLength(0)
        })
    it('should check data is reprresented as dots instead of characters', async() =>{
        const value = await LoginTC1.getPasswordFieldType();
        await expect(value).toEqual('password')
        console.log('password value '+value)
    })
    it('should click Login Button', async() =>{
        await LoginTC1.clickLoginButton();
        await browser.pause(5000)
    })
    it('should check X icons are displayed on the "Login" fields', async() =>{
        const XIconUsernamePresence = await LoginTC1.displayedXIconsUsername();
        console.log(XIconUsernamePresence);
        await expect(XIconUsernamePresence).toEqual(true) 
    })
    it('should check X icons are displayed on the "Password" fields', async() =>{
        const XIconPasswordPresence = await LoginTC1.displayedXIconsPassword();
        console.log(XIconPasswordPresence);
        await expect(XIconPasswordPresence).toEqual(true) 
    })
    it('should check this fields are highlighted with red', async() =>{
        const borderColor = await LoginTC1.getErrorClassColor()
        console.log('value el = '+ borderColor);
        await expect(borderColor).toEqual('#e2231a')
    })
    it('should check epic sadface: Username and password do not match any user in this service error message are displayed', async() =>{
        const value = await LoginTC1.getErrorMessage();
        console.log("value=== "+value);
        await expect(value).toEqual('Epic sadface: Username and password do not match any user in this service')
    })
})