import { $ } from '@wdio/globals'
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
        const password = 'secret_sauce';
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
        //await browser.pause(2000)
    })
    it('should check user is redirected to the inventory page', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        await browser.pause(2000)
    })
    it('should check products are displayed', async() =>{
        const productPresence = await InventoryTC1.checkProductPresence()
        await expect(productPresence).toEqual(true)
    })
    it('should check cart is displayed', async() =>{
        const cartPresence = await InventoryTC1.checkCartPresence()
        console.log(cartPresence);
        await expect(cartPresence).toEqual(true)      
        await browser.pause(2000)
    })
})