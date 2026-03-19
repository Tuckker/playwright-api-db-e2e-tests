//loading modules that will be used
const {test, expect} = require('@playwright/test');

//import helper functions
import { login } from '../../helpers/auth';
import { addtocart } from '../../helpers/cart';



//user is checking out
test('user checkout', async({page}) =>{

    //logging in and calling helper function
    await login(page)

    //adding bolt shirt to cart 
    await addtocart(page)
    
    //click on checkout button
    await page.locator('[data-test="checkout"]').click();

    //input checkout details 
    await page.locator('[data-test="firstName"]').click();
    await page.locator('[data-test="firstName"]').fill('Tony');
    await page.locator('[data-test="lastName"]').click();
    await page.locator('[data-test="lastName"]').fill('Stark');
    await page.locator('[data-test="postalCode"]').click();
    await page.locator('[data-test="postalCode"]').fill('456123');

    //complete checkout process 
    await page.locator('[data-test="continue"]').click();
    await page.locator('[data-test="finish"]').click();

    //verify that it was a succesful checkout and verify status
    await expect(page.locator('[data-test="title"]')).toContainText('Complete');
  
})
