import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';


describe('saucedemo page', () =>{
    it('should login the user with correct credentials', async () =>{
    await browser.url('https://www.saucedemo.com')
    const username = 'standard_user';
    await LoginTC1.setUserName(username);
    await browser.pause(0)
    const password = 'secret_sauce';
    await LoginTC1.setPassword(password);
    await browser.pause(0)
    await LoginTC1.clickLoginButton();
    })
    it('should click on the "Burger" button at the top left corner', async() =>{
        await InventoryTC1.clickBurgerButton();
    })
    it('should check Burger Menu is expanded', async() =>{
        const bMenuPresence = await InventoryTC1.checkBMenuPresence()
        await expect(bMenuPresence).toEqual(true)
        //await browser.pause(1000)
    })
    it('should check 4 items are displayed', async() =>{
        const fourItemsPresence = await InventoryTC1.checkFourItemsPresence()
        console.log("VALUE = " + fourItemsPresence)
        await expect(fourItemsPresence).toEqual(4)
    })
    it('should click on the "Logout" button', async() =>{
        await InventoryTC1.clickLogoutButton();
        await browser.pause(2000)
        
    })
    it('should check User are redirecred to the "Login" page', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/')
        await browser.pause(2000)
    })
    it('should check Username field is empty', async() =>{
        const value=await LoginTC1.getUserName();
        console.log(value.length);
        await expect(value).toHaveLength(0)
    })
    it('should check Password field is empty', async() =>{
        const value=await LoginTC1.getPassword();
        console.log(value.length);
        await expect(value).toHaveLength(0)
    })
})