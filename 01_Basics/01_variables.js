const accountId=14553;
let accountEmail="kun@gmail.com"
var accountPassword="123456"
accountCity="Pune";
let accountState;

//accountId=2;//not allowed
/*
prefer not use var because of block scope and functional scope
*/
accountEmail="kp@gmail.com"
accountPassword="987654321"
accountCity="Mumbai"
console.log(accountId);
console.table({accountId,accountEmail,accountPassword,accountCity,accountState})


