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
        { "type": "fax", "number": "1234567" }
    ]
}

Object.keys(person).forEach(function(key) {
    console.log(key, person[key]);
});

console.log(person.address);
var phonenumers = person.phoneNumber;
console.log(phonenumers);
console.log(phonenumers[0]);
console.log(phonenumers[0].number);
