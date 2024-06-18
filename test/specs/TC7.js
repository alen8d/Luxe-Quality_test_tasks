import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

before('precondition - login', async() =>{
    await Login.loginFunction();
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('footer links ', () =>{
    // var initialWindowHandles;
    var linkAddr;
    var linkText;
    var newTabUrl;
    it('click twitter link', async() =>{
        //get list of opened windows
        const initialWindowHandles =  await browser.getWindowHandles();
        console.log('initialWindowHandles = '+ initialWindowHandles);
        await Inventory.clickFacebookLink();
        linkAddr = await Inventory.getFacebookAddr();
        console.log('linkAddr = '+linkAddr);
        linkText = await Inventory.getFacebookText();
        console.log('linkText = '+linkText);
        await browser.pause(2000);
    // })
    // it('get new window to check', async()=> {
        //get updated list of windows
        const updatedWindowHandles = await browser.getWindowHandles();
        console.log('updatedWindowHandles = '+ updatedWindowHandles);
        // Find just opened window
        const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
        //const newWindowHandle = updatedWindowHandles.find(handle => handle !== initialWindowHandles);
        console.log('newWindowHandle = '+ newWindowHandle);
        // if (newWindowHandle)
        await browser.switchToWindow(newWindowHandle);
    // })
    // it('get new url ', async()=> {
            await browser.pause(2000);
            // Verify the URL
            newTabUrl = await browser.getUrl();
            //await browser.pause(2000);
    // })
    // it('check new url', async()=> {   
            // console.log('newTabUrl = '+newTabUrl)
            //if(linkText=='Twitter') {linkAddr='https://x.com/saucelabs'}
            //await expect(browser).toHaveUrl(linkAddr);
            await expect(newTabUrl).toContain(linkAddr);
            // console.log('newTabUrl = '+newTabUrl);
            // console.log('linkAddr = '+linkAddr);
            await browser.switchToWindow(initialWindowHandles);
            //} else {console.error('No new tab was opened.');}
        })
        
    xit('check facebook link', async() =>{
        initialWindowHandles =  await browser.getWindowHandles();
        const facebook = await Inventory.clickFacebookLink();
    })
    xit('check linkedinlink ', async() =>{
        initialWindowHandles =  await browser.getWindowHandles();
        const linkedin = await Inventory.clickLinkedinLink();
    })

    xit('should fill the array with the links', async() =>{
        const linkElements = await Inventory.getLinksList();
        //filling the array with links on twitter, linkedin, facebook and with text
                for (const linkElement of linkElements){
                    console.log('link element = '+linkElement);
                    var linkAddr = await linkElement.getAttribute('href');
                    linkAddrs.push(linkAddr);
                    console.log('links names = '+linkAddrs);
                    const linkText = await linkElement.getText();
                    linkTexts.push(linkText);
                    console.log('links texts = '+linkTexts);
                    initialWindowHandles =  await browser.getWindowHandles();
                    await linkElement.click();
                    const updatedWindowHandles = await browser.getWindowHandles();
                    // Find the new tab handle
                    const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
                    if (newWindowHandle) {
                    // Switch to the new tab
                    await browser.switchToWindow(newWindowHandle);
                    // Verify the URL
                    const newTabUrl = await browser.getUrl();
                    if(linkText=='Twitter') {linkAddr="https://x.com/saucelabs"}
                    await expect(newTabUrl).toEqual(linkAddr);
                    console.log('newTabUrl = '+newTabUrl);
                    console.log('linkAddr = '+linkAddr);
                    await browser.switchToWindow(initialWindowHandles[0]);
                    } else {
                        console.error('No new tab was opened.');
                            }
                }
    })
})