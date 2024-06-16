import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

before('precondition - login', async() =>{
    await Login.loginFunction('standard_user', 'secret_sauce');
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('Footer Links', () =>{
    let arrLinks;
    it ('should get list of the links',async() =>{
        //get list of links
        arrLinks = await Inventory.getLinksList();
    })
        console.log('Array with list of links to check'+arrLinks.length);
        //await Inventory.checkLinks(arrLinks);
         for (let i=0;i<arrLinks.length;i++){
            it('should get the list of links to check', async() =>{
    
            await Inventory.checkLinks(arrLinks, i);
        })    //                 const linkItem = arrLinks[i];
            const linkItemText = linkItem.getText();
            var linkItemLink = linkItem.getAttribute("href");
            console.log('Link = '+linkItemLink);
            console.log(`Menu Item ${i + 1}: ${linkItemText}`);
            //get list of all opened tabs            
            const initialWindowHandles = browser.getWindowHandles();
            // Perform click on the menu item, e.g., click
            it('Perform click on the menu item', async() =>{
            await linkItem.click();
            await browser.pause(2000);
            })
            //get updated list of all opened tabs 
            const updatedWindowHandles = browser.getWindowHandles();
            // Find the new tab handle
            const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
            
            if (newWindowHandle) {
                // Switch to the new tab
                browser.switchToWindow(newWindowHandle);
                // Verify the URL
                const newTabUrl = browser.getUrl();
                if(linkItemText=='Twitter') linkItemLink='https://x.com/saucelabs'
                expect(newTabUrl).toContain(linkItemLink);
                browser.switchToWindow(initialWindowHandles[0]);
            } else {
                console.error('No new tab was opened.');
            }
         }
    })
