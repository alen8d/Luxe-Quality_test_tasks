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
    xit('should check Number near the cart at the top right before adding product', async() =>{
        
    })
    it('should click on the "Add to cart" button near any product', async() =>{
        await InventoryTC1.clickAddtoCartButton();
    })
    it('should click on the "Add to cart" button near any product', async() =>{
        await InventoryTC1.clickAddtoCartButton();
    })
    it('should check Number near the cart at the top right increase by 1', async() =>{
        var productNumber = await InventoryTC1.checkProductNumber();
        const value1 = 1;
        productNumber = parseInt(productNumber, 10);
        console.log("value = "+productNumber);
        await expect(productNumber).toEqual(value1);
    })
    xit('should Click on the "Cart" button at the top right corner', async() =>{
        await InventoryTC1.clickCartButton();    
    })
    xit('check product is added to cart and execute that product name is saved in variable browser.productNameFirst ', async() =>{
        var productName = await CartTC1.getProductName();
        browser.productNameFirst = productName;
        await expect(productName).not.toBeUndefined();
    })
    // it('should click on the "Burger" button at the top left corner', async() =>{
    //     await InventoryTC1.clickBurgerButton();
    // })
    // it('should check Burger Menu is expanded', async() =>{
    //     const bMenuPresence = await InventoryTC1.checkBMenuPresence();
    //     await expect(bMenuPresence).toEqual(true);
    // })
    // it('should check 4 items are displayed', async() =>{
    //     const fourItemsPresence = await InventoryTC1.checkFourItemsPresence();
    //     // console.log("VALUE = " + fourItemsPresence);
    //     await expect(fourItemsPresence).toEqual(4);
    // })
    // it('should click on the "Logout" button', async() =>{
    //     await InventoryTC1.clickLogoutButton();
    // })
    // it('should check User are redirecred to the "Login" page', async() =>{
    //     await expect(browser).toHaveUrl('https://www.saucedemo.com/');
    // })
    // it('should check Username field is empty', async() =>{
    //     const value=await LoginTC1.getUserName();
    //     // console.log(value.length);
    //     await expect(value).toHaveLength(0);
    // })
    // it('should check Password field is empty', async() =>{
    //     const value=await LoginTC1.getPassword();
    //     // console.log(value.length);
    //     await expect(value).toHaveLength(0);
    // })
    // it('should login to the account with the same credentials', async () =>{
    //     const username = 'standard_user';
    //     await LoginTC1.setUserName(username);
    //     await browser.pause(0);
    //     const password = 'secret_sauce';
    //     await LoginTC1.setPassword(password);
    //     await browser.pause(0);
    //     await LoginTC1.clickLoginButton();
    // })
    // it('should check user is redirected to the inventory page', async() =>{
    //     await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    // })
    // it('should check products are displayed', async() =>{
    //     const productPresence = await InventoryTC1.checkProductPresence();
    //     await expect(productPresence).toEqual(true);
    // })
    // it('should check cart is displayed', async() =>{
    //     const cartPresence = await InventoryTC1.checkCartPresence();
    //     // console.log(cartPresence);
    //     await expect(cartPresence).toEqual(true);
    // })
    // it('should Click on the "Cart" button at the top right corner', async() =>{
    //     await InventoryTC1.clickCartButton();    
    // })
    // it('should check Cart page is displayed', async() =>{
    //     await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    // })
    // it('should check product are the same as was added at step 1', async() =>{
    //     const productNameNew = await CartTC1.getProductName();
    //     await expect(productNameNew).toEqual(browser.productNameFirst);
    // })
})