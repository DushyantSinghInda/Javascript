const accountId = 144553;
let accountEmail = "dushyant@gmail.com";
var accountPassword = "123456";
accountCity = "Jodhpur";
let accountState;


// accountId = 2 // not allowed

accountEmail = "ds@ds.com"
accountPassword = "654321"
accountCity = "Chandigarh"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);