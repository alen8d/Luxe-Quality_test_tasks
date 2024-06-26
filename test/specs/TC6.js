import Inventory from '../pageobjects/inventory.page.js';
import { loginFunction, checkSortingFunction } from '../utils/helpers.js';

before('precondition - login', async() =>{
    await loginFunction();
})
afterEach('', async() =>{
    await browser.pause(2000);
})
describe('Sorting', () =>{
    var selectorName;
    it('should click on the List of Sorting selectors', async() =>{
        await Inventory.clickSortSelectorButton();
    })
    it('should click on AZ sort selector', async() =>{
        selectorName = await Inventory.clickAzSelector();
    })
    it('should check Products are sorted like A-Z', async() =>{
        await checkSortingFunction(selectorName);
    })
    it('should click on ZA sort selector', async() =>{
        selectorName = await Inventory.clickZaSelector();
    })
    it('should check Products are sortedas Z-A', async() =>{
        await checkSortingFunction(selectorName);
    })
    it('should click on the third of Sorting selectors Low to high Price', async() =>{
        selectorName = await Inventory.clickLowHighSelector();
    })
    it('should check Products are sorted from Low to High Price', async() =>{
        await checkSortingFunction(selectorName);
    })
    it('should click on the fourth of Sorting selectors Price high to low', async() =>{
        selectorName = await Inventory.clickHighLowSelector();
    })
    it('should check Products are sorted from high to low price', async() =>{
        await checkSortingFunction(selectorName);
    })    
})
