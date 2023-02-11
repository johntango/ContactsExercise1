// generate json with 10 contacts data with fields id, name, email, phone, address, company, jobTitle, notes
// and save it to contacts.json file
var faker = require('faker');
var fs = require('fs');

function readContacts() {
    var contacts = [];
    for (var i = 0; i < 10; i++) {
        contacts.push({
            id: i,
            name: faker.name.findName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber(),
            address: faker.address.streetAddress(),
            company: faker.company.companyName(),
            jobTitle: faker.name.jobTitle(),
            notes: faker.lorem.sentence()
        });
    }
    return contacts;
}
var contacts = readContacts();
fs.writeFile('contacts.json', JSON.stringify(contacts), function (err) {
    if (err) {
        console.log(err);
    }
    console.log('contacts.json file generated');
}
);
