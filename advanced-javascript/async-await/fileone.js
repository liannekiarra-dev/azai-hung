//async and await

// asynch adn await promises are two fundamental concepts in javascript that enbale developers
//to write asynchronoous code that is easier to read an maintain

//Promise: object that represents the result of an asynchronous operation, pending, resolved and rejected.



//example one
const promise= new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Hello there, this is keira");
    }, 2000);
});

promise.then((value) =>{
    console.log(value); //logs the string after two seconds.
})

//async function 


async function hellothere(){
    const value = await new Promise((resolve, reject) =>{
        setTimeout(() =>{
            resolve("Hello there, I am here, a full grown tiger that is awaken and hungry RAWWWWR");
        }, 5000);//logs after 5 seconds
    });
    console.log(value);
}

hellothere();