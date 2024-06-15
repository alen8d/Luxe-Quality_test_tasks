import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';

before('', async() =>{
    await LoginTC1.loginFunction('standard_user', 'secret_sauce');
})
afterEach('', async() =>{
    await browser.pause(2000);
})
describe('saucedemo page', () =>{
    it('should click on the List of Sorting selectors', async() =>{
        await InventoryTC1.clickSortSelectorButton();
    })
    it('should click on AZ sort selector', async() =>{
        const azSelector = await InventoryTC1.clickAzSelector();
    })
    it('should check Products are sorted like A-Z', async() =>{
        const productElements = await InventoryTC1.getSortedItems();
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
        const zaSelector = await InventoryTC1.clickZaSelector();
    })
    it('should check Products are sortedas Z-A', async() =>{
        const productElements = await InventoryTC1.getSortedItems();
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
        await InventoryTC1.clickLowHighSelector();
    })
    //begin cycle for()
    it('should check Products are sorted from Low to High Price', async() =>{
        const productElements = await InventoryTC1.getPriceSortedItems();
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
        await InventoryTC1.clickHighLowSelector();
    })
    it('should check Products are sorted from high to low price', async() =>{
        const productElements = await InventoryTC1.getPriceSortedItems();
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