const { faker } = require("@faker-js/faker");

function createFakeUser() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();

  return {
    name: `${firstName} ${lastName}`,

    email: `qa_${faker.internet.email().toLowerCase()}`,
    password: faker.internet.password({ length: 10 }),

    account: {
      password: null,
      birthDate: {
        day: "10",
        month: "May",
        year: "1998",
      },
    },

    personal: {
      firstName,
      lastName,
      company: "Automation Company",
    },

    address: {
      address1: "Main Street 123",
      address2: "Apt 4",
      country: "Canada",
      state: "Ontario",
      city: "Toronto",
      zipcode: "10106",
    },

    contact: {
      mobile: "83030040",
    },
  };
}

module.exports = { createFakeUser };
