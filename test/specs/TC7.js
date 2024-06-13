import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import LoginTC1 from '../pageobjects/login_TC1.page.js';
import InventoryTC1 from '../pageobjects/inventory_TC1.page.js';


describe('saucedemo page', () =>{
    let arrLinks;
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
    
    it ('should get list of the links',async() =>{
        //get list of links
        arrLinks = await InventoryTC1.getLinksList();
    //})
        //console.log('Array with list of links to check'+arrLinks.length);
        //await InventoryTC1.checkLinks(arrLinks);
         for (let i=0;i<arrLinks.length;i++){
            //it('should get the list of links to check', async() =>{
    
            await InventoryTC1.checkLinks(arrLinks, i);
              //  })    //     const linkItem = arrLinks[i];
        //     const linkItemText = await linkItem.getText();
        //     var linkItemLink = await linkItem.getAttribute("href");
        //     //console.log('Link = '+linkItemLink);
        //     //console.log(`Menu Item ${i + 1}: ${linkItemText}`);
        //     //get list of all opened tabs            
        //     const initialWindowHandles = await browser.getWindowHandles();
        //     // Perform click on the menu item, e.g., click
        //     //it('Perform click on the menu item', async() =>{
        //     await linkItem.click();
        //     await browser.pause(2000);
        //     //})
        //     //get updated list of all opened tabs 
        //     const updatedWindowHandles = await browser.getWindowHandles();
        //     // Find the new tab handle
        //     const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
            
        //     if (newWindowHandle) {
        //         // Switch to the new tab
        //         await browser.switchToWindow(newWindowHandle);
        //         // Verify the URL
        //         const newTabUrl = await browser.getUrl();
        //         if(linkItemText=='Twitter') linkItemLink='https://x.com/saucelabs'
        //         await expect(newTabUrl).toContain(linkItemLink);
        //         await browser.switchToWindow(initialWindowHandles[0]);
        //     } else {
        //         console.error('No new tab was opened.');
        //     }
         }
    })
})