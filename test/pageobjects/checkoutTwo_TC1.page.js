import { $ } from '@wdio/globals'

class CheckoutTwoTC1{

    get finishButton(){
        return $('#finish')
    }
    async clickFinishButton(){
        (await this.finishButton).click();
    }
    get backHomeButton(){
        return $('#back-to-products')
    }
    async clickBackHomeButton(){
        (await this.backHomeButton).click();
    }
}

export default new CheckoutTwoTC1();