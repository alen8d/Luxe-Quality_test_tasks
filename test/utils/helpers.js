import Login from '../pageobjects/login.page.js';
import Inventory from '../pageobjects/inventory.page.js';

//login function for TC4, TC5, TC6, TC7, TC8, TC9
export async function loginFunction(){
    await browser.url('https://www.saucedemo.com');
    const username = 'standard_user';
    await Login.setUserName(username);
    await browser.pause(0);
    const password = 'secret_sauce';
    await Login.setPassword(password);
    await browser.pause(0);
    await Login.clickLoginButton();
}
// TC6 - function to check sorting
export async function checkSortingFunction(optionValue){
    if (optionValue=='lohi' ||optionValue=='hilo'){
         var productElements = await Inventory.getPriceSortedItems();}
        else {var productElements = await Inventory.getSortedItems();}
    //create array
    var productNames=[];
    var sortedProductNames;
    //filling the array with products
            for (const productElement of productElements){
                var productName = await productElement.getText();
                //productName = productName.toString();
                if (optionValue=='lohi' || optionValue=='hilo'){
                productName = productName.replace(/\$/g, '');
                productName = parseFloat(productName, 10);
                }
                productNames.push(productName);
            }
            sortedProductNames = productNames;
            productNames = productNames.toString();
            // console.log('productNames :' +productNames);
            //sort the array and convert to string for comparing
            //sortedProductNames = sortedProductNames.sort().toString();
            switch (optionValue) {
                case 'az':
                    sortedProductNames = sortedProductNames.sort().toString();
                  break;
                case 'za':
                    sortedProductNames = sortedProductNames.sort();
                    sortedProductNames = sortedProductNames.reverse().toString();
                  break;
                case 'lohi':
                    sortedProductNames = sortedProductNames.sort((a,b) =>a-b).toString();
                  break;
                case 'hilo':
                    sortedProductNames = sortedProductNames.sort((a,b) =>b-a).toString();
                  break;
                }
            console.log('productNames :' +productNames);
            console.log('sortedProductNames :' +sortedProductNames);
            await expect(productNames).toEqual(sortedProductNames);
}

//TC7 - function to check links in the footer
export async function checkLinkFunction(value){
    //get list of opened windows
    const initialWindowHandles =  await browser.getWindowHandles();
    //transfer to the main window
    await browser.switchToWindow(initialWindowHandles[0]);
    switch (value) {
        case 'twitter':
            await Inventory.clickTwitterLink();
        break;
        case 'facebook':
            await Inventory.clickFacebookLink();
        break;
        case 'linkedin':
            await Inventory.clickLinkedinLink();
        break;
        }
    await browser.pause(3000);
    const updatedWindowHandles = await browser.getWindowHandles();
    // define just opened window
    const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
    //expect(newWindowHandle).toBeDefined();
    //swutch to the new window 
    await browser.switchToWindow(newWindowHandle);
    //get the url of just opened window
    var newTabUrl = await browser.getUrl();
    //compare url of the opened window and 
    var newTabUrlSauce1 = newTabUrl.includes('saucelabs');
    var newTabUrlSauce2 = newTabUrl.includes('sauce-labs');
    await expect(newTabUrlSauce1 || newTabUrlSauce2).toBe(true);
}