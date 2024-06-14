import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';

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
    await browser.pause(2000);
})
describe('saucedemo page', () =>{
    it('should click on the List of Sorting selectors', async() =>{
        await InventoryTC1.clickSortSelectorButton();
    })
    it('should click on AZ sort selector', async() =>{
        const azSelector = await InventoryTC1.clickAzSelector();
    })
    it('should check Products are sorted', async() =>{
        //var productElements = await InventoryTC1.getSortedItems();
        const productElements = await browser.$$('.inventory_item_name');
        const productNames = [];
        //console.log('product list = '+productList);
        console.log(productElements.length);
                for (const productElement of productElements){
                    //const firstSortedItem = productElements[j];
                    const productName = await browser.$$('.inventory_item_name').getText();
                    console.log('One Sorted Item :' +productName);
                    productNames.push(productName);
                    console.log('Menu Sorted Item :' +productNames);
                }
        const sortedProductList = Array(firstSortedItemText).sort();
        await expect(firstSortedItemText).toEqual(sortedProductList);
    })
    xit('should click on ZA sort selector', async() =>{
        const zaSelector = await InventoryTC1.clickZaSelector();
    })
    xit('should check Products are sorted', async() =>{
    
    })
    xit('should check all sort type in cycle', async() =>{
        //get list of sort type
        const arrSelectors = await InventoryTC1.getSelectorList();
        //enter to the cycle
        for (let i=0; i<arrSelectors.length; i++){
                const sortItem = arrSelectors[i];
                const sortItemText = await sortItem.getText();
                console.log(`Menu Item ${i + 1}: ${sortItemText}`);
                // Perform click on the menu item, e.g., click
                await sortItem.click();
                
                //get sorted items list (text) and put in first array
                const firstArray = await InventoryTC1.getSortedItems();
                console.log(firstArray.length);
                for (let j=0;j<firstArray.length;j++){
                    const firstSortedItem = firstArray[j];
                    const firstSortedItemText = await firstSortedItem.getText();
                    console.log(`Menu Sorted Item ${j + 1}: ${firstSortedItemText}`);
                }
                //sort this array by sortItemText and put in second array
                
                //compare firstArray with secondArray. Expect they are the same
            }
        //console.log("selectors = "+arrSelectors)
    })
    xit('should click on the second of Sorting selectors', async() =>{
        await InventoryTC1.clickSelectorButton();
    })
    //begin cycle for()
    xit('should check Products are sorted', async() =>{
    })

    
})