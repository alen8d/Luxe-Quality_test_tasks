import { expect } from '@wdio/globals'
import Login from '../pageobjects/login.page.js';
import { loginFunctionNegativeCheck } from '../utils/helpers.js';

describe('Login Page Validation Tests', () => {
const testCases = [
    { username: '', password: 'secret_sauce', expectedError: 'Epic sadface: Username is required' },
    { username: 'user', password: '', expectedError: 'Epic sadface: Password is required' },
    { username: 'locked_out_user', password: 'secret_sauce', expectedError: 'Epic sadface: Sorry, this user has been locked out.' },
    { username: 'standard_user', password: 'secret_sauce'.repeat(10), expectedError: 'Epic sadface: Username and password do not match any user in this service' },
    { username: 'user'.repeat(50), password: 'secret_sauce', expectedError: 'Epic sadface: Username and password do not match any user in this service' }
];
testCases.forEach(({ username, password, expectedError }) => {
    it(`should validate for username: "${username}" and password: "${password}" and get appropriate error message`, async () => {
        await loginFunctionNegativeCheck(username, password);
        const errorMessage = await Login.getErrorMessage();
        console.log('error message = '+errorMessage);
        expect(errorMessage).toBe(expectedError);
    });
});

})