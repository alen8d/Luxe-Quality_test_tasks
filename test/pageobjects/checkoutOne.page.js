import { $ } from '@wdio/globals'

class CheckoutOne{

    async generateRandomName() {
        const firstNames = ["John", "Jane", "Alex", "Emily", "Chris", "Katie"];
        //const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Davis", "Wilson"];
        
        const randomFirstName = firstNames[Math.floor(Math.random() * firstNames.length)];
        //const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        
        return randomFirstName;
    }
    async generateRandomLastName() {
        const lastNames = ["Smith", "Doe", "Johnson", "Brown", "Davis", "Wilson"];
        const randomLastName = lastNames[Math.floor(Math.random() * lastNames.length)];
        return randomLastName;
    }
    async generateRandomPostalCode() {
        const randomPostalCode = Math.random().toString(10).substr(5, 5);
        //const randomPostalCode = Math.floor(Math.random() * 9999)+0;
        return randomPostalCode;
    }    

    get firstName(){
        return $('#first-name')
    }
    async setFirstName (value){
        //console.log('First name = '+value);
        this.firstName.addValue(value)
    }
    async getFirstName(){
        return this.firstName.getValue()
    }
    get lastName(){
        return $('#last-name')
    }
    async setLastName (value){
        this.lastName.addValue(value)
    }
    async getLastName(){
        return this.lastName.getValue()
    }
    get postalCode(){
        return $('#postal-code')
    }
    async setPostalCode (value){
        this.postalCode.addValue(value)
    }
    async getPostalCode(){
        return this.postalCode.getValue()
    }
    get continueButton(){
        return $('#continue')
    }
    async clickContinueButton(){
        await this.continueButton.scrollIntoView();
        await this.continueButton.click();
    }
    
}

export default new CheckoutOne();