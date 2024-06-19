import { expect } from '@wdio/globals'
import Inventory from '../pageobjects/inventory.page.js';
import Cart from '../pageobjects/cart.page.js';
import { loginFunction } from '../utils/helpers.js';

before('precondition - login', async() =>{
    await loginFunction();
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Checkout without products', () =>{
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await Inventory.clickCartButton(); 
    })
    it('should check Cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it('check products are not displayed ', async() =>{
        var productList = await Cart.getProductList();
        await expect(productList).toEqual(0);
    })
    it('should Click on the "Checkout" button', async() =>{
        await Cart.clickCheckoutButton();    
    })
    it('should check User is located on the "Cart" Page"', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
        await browser.pause(1000);
    })
    it('should check if there is the text "Cart is empty"', async() =>{
        const value = await Cart.getCartErrorMessage();
        await expect(value).toBePresent();
    }) 
})