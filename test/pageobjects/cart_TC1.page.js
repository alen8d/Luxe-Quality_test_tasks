import { $ } from '@wdio/globals'

class CartTC1{


    get productName(){
        return $('#item_4_title_link > div')
    }
    async getProductName (){
        const productName = await this.productName.getText()
        return productName
    }
    //click Checkout button TC9
    get checkoutButton(){
        return $('#checkout')
    }
    async clickCheckoutButton(){
        (await this.checkoutButton).click();
    }
    //check appearence of error message when cart is empty TC9
    get cartErrorMessage(){
        return $("//*[contains(text(),'Cart is empty')]")
    }
    async getCartErrorMessage(){
        return await this.cartErrorMessage;
    }
    //check products are not displayed in cart TC9
    get productList(){
        return $$('.cart_item')
    }
    async getProductList (){
        const productName = await this.productList.length
        return productName
    }
}

export default new CartTC1();