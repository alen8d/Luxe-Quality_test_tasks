import { $ } from '@wdio/globals'

class InventoryTC1{

    get product(){
        return $('.inventory_item')  //selector = class name
    }
    async checkProductPresence (){
         return this.product.isDisplayed();
     }
    get cart(){
        return $('.shopping_cart_link')
    }
    async checkCartPresence (){
         return this.cart.isDisplayed();
     }
    get burgerButton(){
        return $('#react-burger-menu-btn')
    }
    async clickBurgerButton(){
        (await this.burgerButton).click();
    }
    //block to check burger menu is extended
    get bMenu(){
        return $('#menu_button_container > div > div.bm-menu-wrap > div.bm-menu')
    }
     async checkBMenuPresence (){
         return this.bMenu.isDisplayed();
     }
     //block to check four items in burger menu
     get fourItems(){
        return $$('a[class="bm-item menu-item"]')
    }
    async checkFourItemsPresence (){         
        return await this.fourItems.length
        }
    get logoutButton(){
        return $('#logout_sidebar_link')
    }
    async clickLogoutButton(){
        (await this.logoutButton).click();
    }
    get addtoCartButton(){
        return $('//*[contains(text(),"Add to cart")]');
        //return $('#add-to-cart')
        //return $('.btn btn_primary btn_small btn_inventory ')
    }
    async clickAddtoCartButton(){
        (await this.addtoCartButton).click();
        return (await browser.$('.inventory_item_name')).getText();
    }
    
    async clickAddtoCartButton_1(){
        (await this.addtoCartButton).click();
        const productName = await browser.$('.inventory_item_name').getText();
        const productPrice = await browser.$('.inventory_item_price').getText();
        return [ productName, productPrice ];
    }
    get cartButton(){
        return $('#shopping_cart_container')
    }
    async clickCartButton(){
        (await this.cartButton).click();
    }
    get productNumber(){
        return $('#shopping_cart_container')
        //return $('.shopping_cart_badge')
    }
    async checkProductNumber(){
        return (await this.productNumber).getText();
    }
    get sortSelectorButton(){
        return $('.product_sort_container')
    }
    async clickSortSelectorButton(){
        (await this.sortSelectorButton).click();
    }
    get selectorOptions(){
        return $$('option')
    }
    async getSelectorList(){
        return (await this.selectorOptions);
    }
    get sortedItems(){
        return $$('.inventory_item_name');
    }
    async getSortedItems(){
        return (await this.sortedItems);
    }
    get selectorLinks(){
        return $$('a[target="_blank"]')
    }
    async getLinksList(){
        return await this.selectorLinks;
    }
    //get all selectors option
    get selector(){
        return $$('option');
    }
    async returnSelectorArray(){
        return await this.selector;
    }
    async clickSelector(){
        await this.selector.click();
    } 


    get azSelector(){
        return $('option[value="az"]');
    }
    async clickAzSelector(){
        (await this.azSelector).click();
    } 
    get zaSelector(){
        return $('option[value="za"]');
    }
    async clickZaSelector(){
        (await this.zaSelector).click();
    } 
    get lohiSelector(){
        return $('option[value="lohi"]');
    }
    async clickLowHighSelector(){
        (await this.lohiSelector).click();
    }
    get hiloSelector(){
        return $('option[value="hilo"]');
    }
    async clickHighLowSelector(){
        (await this.hiloSelector).click();
    }
    get priceSortedItems(){
        return $$('.inventory_item_price');
    }
    async getPriceSortedItems(){
        return (await this.priceSortedItems);
    } 

    //TC7
    async checkLinks(arrLinks, i){
        //for (let i=0;i<arrLinks.length;i++){
            const linkItem = arrLinks[i];
            const linkItemText = await linkItem.getText();
            var linkItemLink = await linkItem.getAttribute("href");
            //console.log('Link = '+linkItemLink);
            //console.log(`Menu Item ${i + 1}: ${linkItemText}`);
            //get list of all opened tabs            
            const initialWindowHandles = await browser.getWindowHandles();
            // Perform click on the menu item, e.g., click
            //it('Perform click on the menu item', async() =>{
            await linkItem.click();
            await browser.pause(2000);
            //})
            //get updated list of all opened tabs 
            const updatedWindowHandles = await browser.getWindowHandles();
            // Find the new tab handle
            const newWindowHandle = updatedWindowHandles.find(handle => !initialWindowHandles.includes(handle));
            
            if (newWindowHandle) {
                // Switch to the new tab
                await browser.switchToWindow(newWindowHandle);
                // Verify the URL
                const newTabUrl = await browser.getUrl();
                if(linkItemText=='Twitter') linkItemLink='https://x.com/saucelabs'
                await expect(newTabUrl).toContain(linkItemLink);
                await browser.switchToWindow(initialWindowHandles[0]);
            } else {
                console.error('No new tab was opened.');
            }
        //}
    }
}

export default new InventoryTC1();