import { $ } from '@wdio/globals'

class CheckoutTwo{

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
    //for TC8
    get totalPrice(){
        return $('.summary_total_label')
    }
    async getTotalPrice(){
        return await this.totalPrice.getText();
    }
}

export default new CheckoutTwo();