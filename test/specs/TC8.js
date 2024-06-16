import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';
import Cart from '../pageobjects/cart.page.js';
import CheckoutOne from '../pageobjects/checkoutOne.page.js';
import CheckoutTwo from '../pageobjects/checkoutTwo.page.js';
import CheckoutComplete from '../pageobjects/checkoutComplete.page.js';

before('precondition - login', async() =>{
    await Login.loginFunction('standard_user', 'secret_sauce');
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Valid Checkout', () =>{
    var number;
    var productName;
    var productPrice;
    xit('should define start quantity of products in the cart', async() =>{
        var productNumber = await Inventory.checkProductNumber();
        if(productNumber=="") {number=0;
        }else {number = parseInt(productNumber, 10);
        }
    })
    xit('should click on the "Add to cart" button near any product and save the name of added product', async() =>{
        productName = await Inventory.clickAddtoCartButton();
        // console.log('11name of the added product = '+productName);
    })
    it('should click on the "Add to cart" button near any product and save the name of added product', async() =>{
        const [ productName1, productPrice1 ] = await Inventory.clickAddtoCartButton_1();
        productName = productName1;
        productPrice = productPrice1;
        // console.log('11name of the added product = '+productName);
        // console.log('11price of the added product = '+productPrice);
    })
    
    it('should check Number near the cart at the top right increase by 1', async() =>{
        var newNumber;
        var productNumber = await Inventory.checkProductNumber();
        if(productNumber=="") {newNumber=0;
        } else {newNumber = parseInt(productNumber, 10);
        }var difference = newNumber-number;
        // console.log('difference = '+difference);
        await expect(difference).not.toEqual(0);
    })
    it('should Click on the "Cart" button at the top right corner', async() =>{
        await Inventory.clickCartButton();    
    })
    it('should check cart page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    })
    it('check product are the same as was added at step 1', async() =>{
        var newProductName = await Cart.getProductName();
        // console.log('22productName = '+productName);
        // console.log('22newProductName = '+newProductName);
        await expect(newProductName).toEqual(productName);
    })
    it('should click on the checkout button', async() =>{
        await Cart.clickCheckoutButton(); 
    })
    it('should check checkout form is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-one.html');
    })
    it('should Fill the "First Name" field with valid data', async() =>{
        const firstName = await CheckoutOne.generateRandomName();
        // console.log('first name first time = '+firstName);
        await CheckoutOne.setFirstName(firstName);
    })
    it('should check data is entered to the firstName field', async () =>{
        const value=await CheckoutOne.getFirstName();
        // console.log(value.length);
        await expect(value).not.toHaveLength(0);
    })
    it('should Fill the "Last Name" field with valid data', async() =>{
        const lastName = await CheckoutOne.generateRandomLastName();
        //console.log('first name first time = '+lastName);
        await CheckoutOne.setLastName(lastName);
    })
    it('should check data is entered to the lastName field', async () =>{
        const value=await CheckoutOne.getLastName();
        // console.log(value.length);
        await expect(value).not.toHaveLength(0);
    })
    it('should Fill the "Postal Code" field with valid data', async() =>{
        const postalCode = await CheckoutOne.generateRandomPostalCode();
        await CheckoutOne.setPostalCode(postalCode);
    })
    it('should check data is entered to the Postal code field', async () =>{
        const value=await CheckoutOne.getPostalCode();
        await expect(value).not.toHaveLength(0);
    })
    it('should click on the continue button', async() =>{
        await CheckoutOne.clickContinueButton();  
    })
    it('should check Overview page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-step-two.html');
    })
    it('check product are the same as was added at step 1', async() =>{
        var newProductName = await Cart.getProductName();
        // console.log('22productName = '+productName);
        // console.log('22newProductName = '+newProductName);
        await expect(newProductName).toEqual(productName);
    })
    it('check Total price = price of products from step 1', async() =>{
        var totalPrice = await CheckoutTwo.getTotalPrice();
        totalPrice = totalPrice.replace(/Total: /g, '');
        // console.log('total price = '+totalPrice);
        // console.log('product price = '+productPrice);
        await expect(totalPrice).toEqual(productPrice);
    })
    it('should click on the finish button', async() =>{
        await CheckoutTwo.clickFinishButton();    
    })
    it('should check Checkout complete page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/checkout-complete.html');
    })
    it('should check Success message "Thank you for your order!" are displayed', async() =>{
        var value = await CheckoutComplete.getSuccessMessage();
        await expect(value).toBePresent();
    })
    it('should click on the Back Home button', async() =>{
        await CheckoutTwo.clickBackHomeButton(); 
    })
    it('should check Inventory page is displayed', async() =>{
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    })
    it('should check products are displayed', async() =>{
        const productPresence = await Inventory.checkProductPresence();
        await expect(productPresence).toEqual(true);
    })
    it('should check cart is empty', async() =>{
        const productNumber = await Inventory.checkProductNumber();
        await expect(productNumber).toEqual("");
    })
})