//loading all modules that will be used 
const {test, expect} = require('@playwright/test');

//importing helper function
import { login } from '../../helpers/auth';


//user loggin out

test('user log out', async({page}) =>{

    //calling login function and logging in
    await login(page);

    
    //launching side menu
    await page.getByRole('button', { name: 'Open Menu' }).click();
   
    //click on logout 
    await page.locator('[data-test="logout-sidebar-link"]').click();
   
    //verify succesful log out
    await expect(page.locator('[data-test="login-button"]')).toContainText('Login');
})