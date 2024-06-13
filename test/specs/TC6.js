import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';

describe('saucedemo page', () =>{
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
    it('should click on the List of Sorting selectors', async() =>{
        await InventoryTC1.clickSortSelectorButton();
        await browser.pause(2000)
    })
    it('should check all sort type in cycle', async() =>{
        //get list of sort type
        const arrSelectors = await InventoryTC1.getSelectorList()
        //enter to the cycle
        for (let i=0; i<arrSelectors.length; i++){
                const sortItem = arrSelectors[i];
                const sortItemText = await sortItem.getText();
                console.log(`Menu Item ${i + 1}: ${sortItemText}`);
                // Perform click on the menu item, e.g., click
                await sortItem.click();
                
                //get sorted items list (text) and put in first array
                const firstArray = await InventoryTC1.getSortedItems()
                console.log(firstArray.length)
                for (let j=0;j<firstArray.length;j++){
                    const firstSortedItem = firstArray[j];
                    const firstSortedItemText = await firstSortedItem.getText();
                    console.log(`Menu Sorted Item ${j + 1}: ${firstSortedItemText}`);
                }
                //sort this array by sortItemText and put in second array
                
                //compare firstArray with secondArray. Expect they are the same

                await browser.pause(2000)
            }
        //console.log("selectors = "+arrSelectors)
    })
    xit('should click on the second of Sorting selectors', async() =>{
        await InventoryTC1.clickSelectorButton();
        await browser.pause(2000)
    })
    //begin cycle for()
    xit('should check Products are sorted', async() =>{
    })

    
})