//loading node modules that will be used
const {test , expect} = require('@playwright/test')

//importing helper function for 

//test to launch the app
test('launch and login ',async({page})=>{

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
    
})