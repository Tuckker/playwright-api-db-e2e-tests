//loading modules that will be used
const {test, expect} = require('@playwright/test');

//calling login helper function
import { login } from '../../helpers/auth';

//testing adding to cart feature
test('add item to cart', async({page})=>{

    //logging in and calling helper
    await login(page);
    

    //add item and verify it has been added to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText('Remove');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');

})