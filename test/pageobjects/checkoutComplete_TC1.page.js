import { $ } from '@wdio/globals'

class CheckoutCompleteTC1{

//check appearence of Success message when order was payed TC8
get successMessage(){
    //return $('.complete-header')
    return $("//*[contains(text(),'Thank you for your order!!')]")
}
async getSuccessMessage(){
    return await this.successMessage;
}

}

export default new CheckoutCompleteTC1();