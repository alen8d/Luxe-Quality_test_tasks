import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

before('precondition - login', async() =>{
    await Login.loginFunction('standard_user', 'secret_sauce');
})
afterEach('', async() =>{
    await browser.pause(2000);
})
describe('Sorting', () =>{
    var selectorNames = [];
    it('should click on the List of Sorting selectors', async() =>{
        await Inventory.clickSortSelectorButton();
    })
    it('should click on AZ sort selector', async() =>{
        const azSelector = await Inventory.clickAzSelector();
    })
    it('should check Products are sorted like A-Z', async() =>{
        const productElements = await Inventory.getSortedItems();
        //create array
        var productNames = [];
        //filling the array with products
                for (const productElement of productElements){
                    const productName = await productElement.getText();
                    productNames.push(productName);
                }
                var sortedProductNames = productNames;
                productNames = productNames.toString();
                console.log('productNames :' +productNames);
                //sort the array and convert to string for comparing
                sortedProductNames = sortedProductNames.sort().toString();
                console.log('sortedProductNames :' +sortedProductNames);
                await expect(productNames).toEqual(sortedProductNames);
    })
    it('should click on ZA sort selector', async() =>{
        const zaSelector = await Inventory.clickZaSelector();
    })
    it('should check Products are sortedas Z-A', async() =>{
        const productElements = await Inventory.getSortedItems();
        var productNames = [];
                for (const productElement of productElements){
                    const productName = await productElement.getText();
                    productNames.push(productName);
                }
                var sortedProductNames = productNames;
                productNames = productNames.toString();
                console.log('productNames :' +productNames);
                sortedProductNames = sortedProductNames.sort();
                sortedProductNames = sortedProductNames.reverse().toString();
                console.log('sortedProductNames :' +sortedProductNames);
                await expect(productNames).toEqual(sortedProductNames);
    })
    it('should click on the third of Sorting selectors Low to high Price', async() =>{
        await Inventory.clickLowHighSelector();
    })
    it('should check Products are sorted from Low to High Price', async() =>{
        const productElements = await Inventory.getPriceSortedItems();
        var productNames = [];
                for (const productElement of productElements){
                    var productName = await productElement.getText();
                    productName = productName.replace(/\$/g, '');
                    productName = parseFloat(productName, 10);
                    productNames.push(productName);
                }
                var sortedProductNames = productNames;
                productNames = productNames.toString();
                 console.log('productNames :' +productNames);
                sortedProductNames = sortedProductNames.sort((a,b) =>a-b).toString();
                 console.log('sortedProductNames :' +sortedProductNames);
                await expect(productNames).toEqual(sortedProductNames);
    })
    it('should click on the fourth of Sorting selectors Price high to low', async() =>{
        await Inventory.clickHighLowSelector();
    })
    it('should check Products are sorted from high to low price', async() =>{
        const productElements = await Inventory.getPriceSortedItems();
        var productNames = [];
            for (const productElement of productElements){
                var productName = await productElement.getText();
                productName = productName.replace(/\$/g, '');
                productName = parseFloat(productName, 10);
                productNames.push(productName);
            }
                var sortedProductNames = productNames;
                productNames = productNames.toString();
                 console.log('productNames :' +productNames);
                sortedProductNames = sortedProductNames.sort((a,b) =>b-a).toString();
                 console.log('sortedProductNames :' +sortedProductNames);
                await expect(productNames).toEqual(sortedProductNames);
        
    })
    
})