import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';
import Cart from '../pageobjects/cart.page.js';
import { loginFunction } from '../utils/helpers.js';

before('precondition - login', async() =>{
    await loginFunction();
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Saving the card after logout ', () =>{
    var number;
    //name of the product which was added on the step 1
    var productName;
    it('should define start quantity of products in the cart', async() =>{
        var productNumber = await Inventory.checkProductNumber();
        if(productNumber=="") {number=0;
        }else {number = parseInt(productNumber, 10);
        }
    })
    it('should click on the "Add to cart" button near any product and save the name of added product', async() =>{
        productName = await Inventory.clickAddtoCartButton();
    })
    it('should check Number near the cart at the top right increase by 1', async() =>{
        var newNumber;
        var productNumber = await Inventory.checkProductNumber();
        if(productNumber=="") {newNumber=0;
        } else {newNumber = parseInt(productNumber, 10);
        }var difference = newNumber-number;
        await expect(difference).toEqual(1);
    })
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await Inventory.clickCartButton();    
    })
    it('check product is added to cart ', async() =>{
        var newProductName = await Cart.getProductName();
        await expect(newProductName).toEqual(productName);
    })
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
    it('should login to the account with the same credentials', async () =>{
        await loginFunction();
    })
    it('should check user is redirected to the inventory page', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('should check products are displayed', async() =>{
        const productPresence = await Inventory.checkProductPresence();
        await expect(productPresence).toEqual(true);
    })
    it('should check cart is displayed', async() =>{
        const cartPresence = await Inventory.checkCartPresence();
        await expect(cartPresence).toEqual(true);
    })
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await Inventory.clickCartButton();    
    })
    it('should check Cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it('should check product are the same as was added at step 1', async() =>{
        const productNameNew = await Cart.getProductName();
        await expect(productNameNew).toEqual(productName);
    })
})