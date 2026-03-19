//helper function to add one specific item to cart(the bolt t shirt)
// loading modules that will be used
const {expect} = require('@playwright/test')



export async function addtocart(page){


    //add item and verify it has been added to cart
    await page.locator('[data-test="add-to-cart-sauce-labs-bolt-t-shirt"]').click();
    await expect(page.locator('[data-test="remove-sauce-labs-bolt-t-shirt"]')).toContainText('Remove');
    await page.locator('[data-test="shopping-cart-link"]').click();
    await expect(page.locator('[data-test="inventory-item-name"]')).toContainText('Sauce Labs Bolt T-Shirt');
}