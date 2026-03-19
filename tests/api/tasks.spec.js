//load all modules that will be used
const {expect,test} = require('@playwright/test')
let token;

//sending data to endpoint to login
test('authenticate and retrieve token', async({request})=>{

    //loggin in
   const response = await request.post('https://reqres.in/api/login',{data:
    {   "email": "eve.holt@reqres.in", 
        "password": "cityslicka" }
   }) 

   // checking status of request
   expect(response.status()).toBe(201);


//    const body = await response.json();
//    token = body.token;
//    expect(token).toBeTruthy;
   
})

//creating a task
test('register a user', async({request})=>{

    //adding new user
    const response = await request.post('https://reqres.in/api/register',{
        data:{
            "email": "eve.holt@reqres.in",
            "password": "pistol"
        }
    });

    expect(response.status()).toBe(201); //successful post request is 201
    //checking whether response is as expected
    const text = await response.text();
    expect(text).toContain('eve.holt@reqres.in');

    //writing response on console
    console.log(await response.json());
})

//verify tasks/user exists
test('verify user', async({request})=>{
    
    const response = await request.get('https://reqres.in/api/users/2')
    //verfiy that the status code of the above call is 200 meaning its ok
    expect(response.status()).toBe(200);

    //check if response contains some text
    const text = await response.text();

    //another verifcation that the endpoint was accessed succesfuly
    expect(text).toContain('eve.holt@reqres.in');

    //writing response on console
    console.log(await response.json());

})


//update tasks completed status
test('update user job', async({request})=>{
    
    const response = await request.put('https://reqres.in/api/users/2',{data :{
        "name": "morpheus",
        "job": "completed"
    }});
    //verfiy that the status code of the above call is 200 meaning its ok
    expect(response.status()).toBe(200);

    //check if response contains some text
    const text = await response.text();

    //writing response on console
    console.log(await response.json());

})


