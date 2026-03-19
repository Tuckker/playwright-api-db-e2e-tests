//these functions here will help with login into SWAG LABS, made static because its for one app at the moment.
//loading modules that will be used
const {expect} = require('@playwright/test')


export async function login(page){

    //launching app
    await page.goto('https://www.saucedemo.com/');
    await expect(page.locator('#root')).toContainText('Swag Labs');
    
    //enter username
    await page.locator('[data-test="username"]').click();
    await page.locator('[data-test="username"]').fill('standard_user');
    

    //enter password
    await page.locator('[data-test="password"]').click();
    await page.locator('[data-test="password"]').fill('secret_sauce');

    //click login button
    await page.locator('[data-test="login-button"]').click();

    //verify successful login
    await expect(page.locator('[data-test="title"]')).toContainText('Products');
}