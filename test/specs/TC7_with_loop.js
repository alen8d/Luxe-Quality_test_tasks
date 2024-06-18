import { $ } from '@wdio/globals'
import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';
import Cart from '../pageobjects/cart.page.js';

before('precondition - login', async() =>{
    await Login.loginFunction('standard_user', 'secret_sauce');
})
afterEach('', async() =>{
    await browser.pause(1000);
})
describe('footer links ', () =>{
    var linkAddrs = [];
    var linkTexts = [];
    var initialWindowHandles = [];
    it('should fill the array with the links', async() =>{
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