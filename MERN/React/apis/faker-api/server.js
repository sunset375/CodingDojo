const express = require("express");
const faker = require("faker");
const port = 8000;

app = express();

randomName = faker.name.findName();

class Person{
    constructor() {
        this.fristname = faker.name.firstName();
        this.lastname = faker.name.lastName();
        this.phoneNumber = faker.phone.phoneNumber();
        this.email = faker.internet.email();
        this.password = faker.internet.password();
    }
}
class Company{
    constructor(){
        this.name = faker.company.companyName();
        this.address = {


            street : faker.address.streetAddress(), 
            city : faker.address.city(),
            state : faker.address.state(),
            zipCode :faker.address.zipCode(),
            country :faker.address.country()
        }
    }
}

app.get("/api/companies/new", (req, res) => {

    res.json({newCompany: new Company()});
});
app.get("/api/users/new", (req, res) => {
    newPerson = new Person();
    res.json({newPerson});
});

app.get("/api/user/company", (req, res) => {
    newCompany = new Company();
    newPerson = new Person();
    res.json({newPerson, newCompany});
});

app.listen(port, () => console.log(`listening on port ${port}`));