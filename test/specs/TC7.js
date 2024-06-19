import { loginFunction, checkLinkFunction } from '../utils/helpers.js';

before('precondition - login', async() =>{
    await loginFunction();
})
describe('footer links ', () =>{
    it('check twitter link', async() =>{
        await checkLinkFunction('twitter');
    })
    it('check facebook link', async() =>{
        await checkLinkFunction('facebook');
    })
    it('check linkedin link', async() =>{
        await checkLinkFunction('linkedin');
    })
})