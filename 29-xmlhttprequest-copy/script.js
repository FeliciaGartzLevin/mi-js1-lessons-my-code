/**
 * XMLHttpRequest
 *
 */

// console.log(1)
// console.log(2)

// setTimeout(() => {
//     console.log(3)
// }, 2000);

// console.log(4)
// console.log(5)

const getUsers = (callback) => {
    // Create a new XML Http Request
const request = new XMLHttpRequest();

request.addEventListener('readystatechange', () =>{
    //Check status of request
    // console.log("Request:", request);
    // console.log("Request readystate:", request.readyState);
    // console.log("Request responseText:", request.responseText);

    if(request.readyState === 4) {
        //YAY DONE!
        

        //Was the request sucessful?
        if(request.status === 200){
            //200 OK
            // console.log('Great success');

            //take the string in response text and parse it into JavaScript object

            const data = JSON.parse(request.responseText);
            // console.log("Gots me sum data:", data);
            // console.table(data);

            // invoke (call) callback function
            callback(undefined, data);


        } else {
            console.log('Something went wrong.');

            // invoke (call) callback function
            callback("Could not get data");


        }
    }

});

//Set request to GET data from 'https://jsonplaceholder.typicode.com/users'
request.open('GET', 'https://jsonplaceholder.typicode.com/users');

//Send the request
request.send();

// //Done?
// console.log("Request sent!");
// console.log(request);
}

//Get users and output to DOM
getUsers( (err, users) => {
    console.log("Hello, I am going to output to DOM");

    if(err) {
        //something went wrong
        alert(err);
    } else {
        //loop over all users 
        users.forEach( user => {
           // and output their names to DOM
           document.querySelector('#users').innerHTML += `<li>${user.name}</li>`;
           // console.log(user.name);
   
       });
    }
});





console.log("All requests sent!");


