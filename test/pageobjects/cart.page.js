import { $ } from '@wdio/globals'

class Cart{


    get productName(){
        return $('#item_4_title_link > div')
    }
    async getProductName (){
        const productName = await this.productName.getText()
        return productName
    }
    //TC9, click Checkout button
    get checkoutButton(){
        return $('#checkout')
    }
    async clickCheckoutButton(){
        (await this.checkoutButton).click();
    }
    
    get cartErrorMessage(){
        return $("//*[contains(text(),'Cart is empty')]")
    }
    //TC9, check appearence of error message when cart is empty
    async getCartErrorMessage(){
        return await this.cartErrorMessage;
    }
    get productList(){
        return $$('.cart_item')
    }
    //TC9, check products are not displayed in cart
    async getProductList (){
        const productName = await this.productList.length
        return productName
    }
}

export default new Cart();