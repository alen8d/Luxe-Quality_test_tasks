import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';
import { loginFunction } from '../utils/helpers.js';

before('precondition - login', async() =>{
    await loginFunction();
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Logout', () =>{
    it('should click on the "Burger" button at the top left corner', async() =>{
        await Inventory.clickBurgerButton();
    })
    it('should check Burger Menu is expanded', async() =>{
        const bMenuPresence = await Inventory.checkBMenuPresence();
        await expect(bMenuPresence).toEqual(true);
    })
    it('should check 4 items are displayed', async() =>{
        const fourItemsPresence = await Inventory.checkFourItemsPresence();
        await expect(fourItemsPresence).toEqual(4);
    })
    it('should click on the "Logout" button', async() =>{
        await Inventory.clickLogoutButton();
    })
    it('should check User are redirecred to the "Login" page', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    })
    it('should check Username field is empty', async() =>{
        const value=await Login.getUserName();
        await expect(value).toHaveLength(0);
    })
    it('should check Password field is empty', async() =>{
        const value=await Login.getPassword();
        await expect(value).toHaveLength(0);
    })
})