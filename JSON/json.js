var person = {
    "firstName": "John",
    "lastName": "Smith",
    "age": 25,
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": "10021"
    },
    "phoneNumber": [
        { "type": "home", "number": "1234567" },
        { "type": "fax", "number": "23423424234" }
    ]
}
/*
for (const key of Object.keys(person)) {
    console.log(key, person[key]);
}

Object.keys(person).forEach(function(key) {
    console.log(key, person[key]);
});
*/
//let personAddress = person.address;
//console.log(personAddress.streetAddress);
let phonenumbers = person.phoneNumber;
//console.log(phonenumbers);
console.log(phonenumbers[0]);
console.log(phonenumbers[0].number);
console.log(person.phoneNumber[1].number);
