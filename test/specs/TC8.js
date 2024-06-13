import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';
import CartTC1 from '../pageobjects/cart_TC1.page.js';
import CheckoutOneTC1 from '../pageobjects/checkoutOne_TC1.page.js';
import CheckoutTwoTC1 from '../pageobjects/checkoutTwo_TC1.page.js';
import CheckoutCompleteTC1 from '../pageobjects/checkoutComplete_TC1.page.js';

describe('saucedemo page', () =>{
    //let ptoductNumber;
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
    xit('should check Number near the cart at the top right before adding product', async() =>{
        browser.productNumber = await InventoryTC1.checkProductNumber()
        
        // const value1 = '1';
        // //const value = value1.toString();
        console.log("valueBefore = "+productNumber);
        // await expect(productNumber).toEqual(value1)
    })
    it('should click on the "Add to cart" button near any product', async() =>{
        await InventoryTC1.clickAddtoCartButton();
        //await browser.pause(2000)
    })
    xit('should check Number near the cart at the top right increase by 1', async() =>{
        const productNumberNew = await InventoryTC1.checkProductNumber()
        const value1 = '1'
        //const value = value1.toString();
        // console.log("valueAfter = "+value1); 
        // console.log("valueNew = "+productNumberNew);
        await expect(productNumberNew).toEqual(value1)
    })
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await InventoryTC1.clickCartButton();    
        //await browser.pause(2000)
    })
    xit('should check cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html')
        //await browser.pause(2000)
    })
    xit('', async() =>{

    })
    it('should click on the checkout button', async() =>{
        await CartTC1.clickCheckoutButton();    
        await browser.pause(2000)
    })
    xit('should check checkout form is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html')
        //await browser.pause(2000)
    })
    it('should Fill the "First Name" field with valid data', async() =>{
        const firstName = await CheckoutOneTC1.generateRandomName();
        console.log('first name first time = '+firstName);
        await CheckoutOneTC1.setFirstName(firstName);
        //await browser.pause(2000);
    })
    it('should check data is entered to the firstName field', async () =>{
        const value=await CheckoutOneTC1.getFirstName();
        console.log(value.length);
        await expect(value).not.toHaveLength(0)
    })
    it('should Fill the "Last Name" field with valid data', async() =>{
        const lastName = await CheckoutOneTC1.generateRandomLastName();
        console.log('first name first time = '+lastName);
        await CheckoutOneTC1.setLastName(lastName);
        //await browser.pause(2000);
    })
    it('should check data is entered to the lastName field', async () =>{
        const value=await CheckoutOneTC1.getLastName();
        console.log(value.length);
        await expect(value).not.toHaveLength(0)
    })
    it('should Fill the "Postal Code" field with valid data', async() =>{
        const postalCode = await CheckoutOneTC1.generateRandomPostalCode();
        await CheckoutOneTC1.setPostalCode(postalCode);
        //await browser.pause(2000);
    })
    it('should check data is entered to the lastName field', async () =>{
        const value=await CheckoutOneTC1.getPostalCode();
        console.log(value.length);
        await expect(value).not.toHaveLength(0)
    })
    it('should click on the continue button', async() =>{
        await CheckoutOneTC1.clickContinueButton();    
        await browser.pause(2000)
    })
    it('should check Overview page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html')
        //await browser.pause(2000)
    })
    it('should click on the finish button', async() =>{
        await CheckoutTwoTC1.clickFinishButton();    
        //await browser.pause(2000)
    })
    it('should check Checkout complete page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html')
        //await browser.pause(2000)
    })
    it('should check Success message "Thank you for your order" are displayed', async() =>{
        var value = await CheckoutCompleteTC1.getSuccessMessage();
        console.log('Success message = '+value);
        //await expect(value).toEqual('Thank you for your order!')
        await expect(value).toBePresent();
    })
    it('should click on the Back Home button', async() =>{
        await CheckoutTwoTC1.clickBackHomeButton();    
        //await browser.pause(2000)
    })
    it('should check Inventory page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html')
        //await browser.pause(2000)
    })
    it('should check products are displayed', async() =>{
        const productPresence = await InventoryTC1.checkProductPresence()
        await expect(productPresence).toEqual(true)
    })
    it('should check cart is empty', async() =>{
        const productNumber = await InventoryTC1.checkProductNumber();
        console.log("productNumber = "+productNumber);
        await expect(productNumber).toEqual("")
    })
})