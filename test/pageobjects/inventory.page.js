import { $ } from '@wdio/globals'

class Inventory{

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
    //TC4, TC5 - block burger menu is expended
    get bMenu(){
        return $('#menu_button_container > div > div.bm-menu-wrap > div.bm-menu')
    }
     async checkBMenuPresence (){
         return this.bMenu.isDisplayed();
     }
     //TC4, TC5 - block four items in burger menu
     get fourItems(){
        return $$('a[class="bm-item menu-item"]')
    }
    async checkFourItemsPresence (){         
        return await this.fourItems.length
        }
    //TC4, TC5
    get logoutButton(){
        return $('#logout_sidebar_link')
    }
    async clickLogoutButton(){
        (await this.logoutButton).click();
    }
    //TC5, TC8
    get addtoCartButton(){
        return $('//*[contains(text(),"Add to cart")]');
        //return $('#add-to-cart')
        //return $('.btn btn_primary btn_small btn_inventory ')
    }
    async clickAddtoCartButton(){
        (await this.addtoCartButton).click();
        return (await browser.$('.inventory_item_name')).getText();
    }
    //TC8
    async clickAddtoCartButton_1(){
        (await this.addtoCartButton).click();
        const productName = await browser.$('.inventory_item_name').getText();
        const productPrice = await browser.$('.inventory_item_price').getText();
        return [ productName, productPrice ];
    }
    //TC5, TC8, TC9
    get cartButton(){
        return $('#shopping_cart_container')
    }
    async clickCartButton(){
        (await this.cartButton).click();
    }
//check is it used !!!!!!!!!!!
    // get productNumber(){
    //     return $('#shopping_cart_container')
    //     //return $('.shopping_cart_badge')
    // }
    // async checkProductNumber(){
    //     return (await this.productNumber).getText();
    // }

    get sortSelectorButton(){
        return $('.product_sort_container')
    }
    async clickSortSelectorButton(){
        (await this.sortSelectorButton).click();
    }
    //check is it used !!!!!!!!!!!!!!!!
    // get selectorOptions(){
    //     return $$('option')
    // }
    // async getSelectorList(){
    //     return (await this.selectorOptions);
    // }
    //TC7 -click on the first link
    get selectorLinkTwitter(){
        //return $('#page_wrapper > footer > ul > li.social_twitter > a')
        return $('a[target]')
    }
    async clickTwitterLink(){
        (await this.selectorLinkTwitter).click();
    }
    async getTwitterAddr(){
        return (await this.selectorLinkTwitter).getAttribute('href');
    }
    async getTwitterText(){
        return (await this.selectorLinkTwitter).getText();
    }
    //TC7 click on the link FACEBOOK
    get selectorLinkFacebook(){
        return $('#page_wrapper > footer > ul > li.social_facebook > a')
    }
    async clickFacebookLink(){
        (await this.selectorLinkFacebook).click();
    }
    async getFacebookAddr(){
        return (await this.selectorLinkFacebook).getAttribute('href');
    }
    async getFacebookText(){
        return (await this.selectorLinkFacebook).getText();
    }
     //TC7 click on the link linkedin
    get selectorLinkLinkedin(){
        return $('#page_wrapper > footer > ul > li.social_linkedin > a')
    }
    async clickLinkedinLink(){
        (await this.selectorLinkLinkedin).click();
    }
    async getLinkedinAddr(){
        return (await this.selectorLinkLinkedin).getAttribute('href');
    }
    async getLinkedinText(){
        return (await this.selectorLinkLinkedin).getText();
    }


    //check is it used !!!!!!!!!!!!! get all selectors option
    // get selector(){
    //     return $$('option');
    // }
    // async clickSelector(){
    //     await this.selector.click();
    // } 
    // TC6
    get azSelector(){
        return $('option[value="az"]');
    }
    async clickAzSelector(){
        (await this.azSelector).click();
        return await this.azSelector.getValue();
    } 
    // TC6
    get zaSelector(){
        return $('option[value="za"]');
    }
    async clickZaSelector(){
        (await this.zaSelector).click();
        return await this.zaSelector.getValue();
    } 
    // TC6
    get lohiSelector(){
        return $('option[value="lohi"]');
    }
    async clickLowHighSelector(){
        (await this.lohiSelector).click();
        return await this.lohiSelector.getValue();
    }
    // TC6
    get hiloSelector(){
        return $('option[value="hilo"]');
    }
    async clickHighLowSelector(){
        (await this.hiloSelector).click();
        return await this.hiloSelector.getValue();
    }
    //TC6 - for function checkSortingFunction
    get sortedItems(){
        return $$('.inventory_item_name');
    }
    async getSortedItems(){
        return (await this.sortedItems);
    }
    //TC6 - for function checkSortingFunction
    get priceSortedItems(){
        return $$('.inventory_item_price');
    }
    async getPriceSortedItems(){
        return (await this.priceSortedItems);
    } 
    // TC6 - function to check sorting
    async checkSortingFunction(optionValue){
        if (optionValue=='lohi' ||optionValue=='hilo'){
             var productElements = await this.getPriceSortedItems();}
            else {var productElements = await this.getSortedItems();}
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
                console.log('productNames :' +productNames);
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
}

export default new Inventory();