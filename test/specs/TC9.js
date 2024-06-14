import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';
import CartTC1 from '../pageobjects/cart_TC1.page.js';

before('', async() =>{
    await browser.url('https://www.saucedemo.com');
    const username = 'standard_user';
    await LoginTC1.setUserName(username);
    await browser.pause(0);
    const password = 'secret_sauce';
    await LoginTC1.setPassword(password);
    await browser.pause(0);
    await LoginTC1.clickLoginButton();
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('saucedemo page', () =>{
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await InventoryTC1.clickCartButton(); 
    })
    it('should check Cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it('check products are not displayed ', async() =>{
        var productList = await CartTC1.getProductList();
        await expect(productList).toEqual(0);
    })
    it('should Click on the "Checkout" button', async() =>{
        await CartTC1.clickCheckoutButton();    
    })
    it('should check User is located on the "Cart" Page and if yes check if there is the text "Cart is empty"', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await browser.pause(1000);
    })
    it('should check if there is the text "Cart is empty"', async() =>{
        const value = await CartTC1.getCartErrorMessage();
        await expect(value).toBePresent();
    }) 
})