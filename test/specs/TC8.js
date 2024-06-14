import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';
import CartTC1 from '../pageobjects/cart_TC1.page.js';
import CheckoutOneTC1 from '../pageobjects/checkoutOne_TC1.page.js';
import CheckoutTwoTC1 from '../pageobjects/checkoutTwo_TC1.page.js';
import CheckoutCompleteTC1 from '../pageobjects/checkoutComplete_TC1.page.js';
import checkoutTwo_TC1Page from '../pageobjects/checkoutTwo_TC1.page.js';

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
    var number;
    var productName;
    var productPrice;
    xit('should define start quantity of products in the cart', async() =>{
        var productNumber = await InventoryTC1.checkProductNumber();
        if(productNumber=="") {number=0;
        }else {number = parseInt(productNumber, 10);
        }
    })
    xit('should click on the "Add to cart" button near any product and save the name of added product', async() =>{
        productName = await InventoryTC1.clickAddtoCartButton();
        // console.log('11name of the added product = '+productName);
    })
    it('should click on the "Add to cart" button near any product and save the name of added product', async() =>{
        const [ productName1, productPrice1 ] = await InventoryTC1.clickAddtoCartButton_1();
        productName = productName1;
        productPrice = productPrice1;
        // console.log('11name of the added product = '+productName);
        // console.log('11price of the added product = '+productPrice);
    })
    
    it('should check Number near the cart at the top right increase by 1', async() =>{
        var newNumber;
        var productNumber = await InventoryTC1.checkProductNumber();
        if(productNumber=="") {newNumber=0;
        } else {newNumber = parseInt(productNumber, 10);
        }var difference = newNumber-number;
        // console.log('difference = '+difference);
        await expect(difference).not.toEqual(0);
    })
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await InventoryTC1.clickCartButton();    
    })
    it('should check cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it('check product are the same as was added at step 1', async() =>{
        var newProductName = await CartTC1.getProductName();
        // console.log('22productName = '+productName);
        // console.log('22newProductName = '+newProductName);
        await expect(newProductName).toEqual(productName);
    })
    it('should click on the checkout button', async() =>{
        await CartTC1.clickCheckoutButton(); 
    })
    it('should check checkout form is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
    it('should Fill the "First Name" field with valid data', async() =>{
        const firstName = await CheckoutOneTC1.generateRandomName();
        // console.log('first name first time = '+firstName);
        await CheckoutOneTC1.setFirstName(firstName);
    })
    it('should check data is entered to the firstName field', async () =>{
        const value=await CheckoutOneTC1.getFirstName();
        // console.log(value.length);
        await expect(value).not.toHaveLength(0);
    })
    it('should Fill the "Last Name" field with valid data', async() =>{
        const lastName = await CheckoutOneTC1.generateRandomLastName();
        //console.log('first name first time = '+lastName);
        await CheckoutOneTC1.setLastName(lastName);
    })
    it('should check data is entered to the lastName field', async () =>{
        const value=await CheckoutOneTC1.getLastName();
        // console.log(value.length);
        await expect(value).not.toHaveLength(0);
    })
    it('should Fill the "Postal Code" field with valid data', async() =>{
        const postalCode = await CheckoutOneTC1.generateRandomPostalCode();
        await CheckoutOneTC1.setPostalCode(postalCode);
    })
    it('should check data is entered to the Postal code field', async () =>{
        const value=await CheckoutOneTC1.getPostalCode();
        await expect(value).not.toHaveLength(0);
    })
    it('should click on the continue button', async() =>{
        await CheckoutOneTC1.clickContinueButton();  
    })
    it('should check Overview page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
    it('check product are the same as was added at step 1', async() =>{
        var newProductName = await CartTC1.getProductName();
        // console.log('22productName = '+productName);
        // console.log('22newProductName = '+newProductName);
        await expect(newProductName).toEqual(productName);
    })
    it('check Total price = price of products from step 1', async() =>{
        var totalPrice = await checkoutTwo_TC1Page.getTotalPrice();
        totalPrice = totalPrice.replace(/Total: /g, '');
        // console.log('total price = '+totalPrice);
        // console.log('product price = '+productPrice);
        await expect(totalPrice).toEqual(productPrice);
    })
    it('should click on the finish button', async() =>{
        await CheckoutTwoTC1.clickFinishButton();    
    })
    it('should check Checkout complete page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    })
    it('should check Success message "Thank you for your order!" are displayed', async() =>{
        var value = await CheckoutCompleteTC1.getSuccessMessage();
        await expect(value).toBePresent();
    })
    it('should click on the Back Home button', async() =>{
        await CheckoutTwoTC1.clickBackHomeButton(); 
    })
    it('should check Inventory page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('should check products are displayed', async() =>{
        const productPresence = await InventoryTC1.checkProductPresence();
        await expect(productPresence).toEqual(true);
    })
    it('should check cart is empty', async() =>{
        const productNumber = await InventoryTC1.checkProductNumber();
        await expect(productNumber).toEqual("");
    })
})