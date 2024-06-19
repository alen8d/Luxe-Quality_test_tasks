import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Valid Login', () =>{
    it('should enter data to the userName field', async () =>{
        await browser.url('https://www.saucedemo.com/')
        const username = 'standard_user';
        await Login.setUserName(username);
    })
    it('should check data is entered to the userName field', async () =>{
        const value=await Login.getUserName();
        await expect(value).not.toHaveLength(0)
    })
    it('should enter data to the password field', async () =>{
        const password = 'secret_sauce';
        await Login.setPassword(password);
    })
    it('should check data is entered to the password field', async() =>{
        const value = await Login.getPassword();
        await expect(value).not.toHaveLength(0)
        })
    it('should check data is reprresented as dots instead of characters', async() =>{
        const value = await Login.getPasswordFieldType();
        await expect(value).toEqual('password')
    })
    it('should click Login Button', async() =>{
        await Login.clickLoginButton();
    })
    it('should check user is redirected to the inventory page', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
    })
    it('should check products are displayed', async() =>{
        const productPresence = await Inventory.checkProductPresence()
        await expect(productPresence).toEqual(true)
    })
    it('should check cart is displayed', async() =>{
        const cartPresence = await Inventory.checkCartPresence()
        console.log(cartPresence);
        await expect(cartPresence).toEqual(true)      
    })
})