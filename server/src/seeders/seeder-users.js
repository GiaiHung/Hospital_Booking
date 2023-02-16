'use strict'

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
        email: 'example@example.com',
        password: 'example@example.com',
        firstName: 'Hung',
        lastName: 'Truong Giai',
        address: '111 Address Street',
        gender: 1,
        roleId: '',
        phonenumber: '',
        image: '',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ])
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Users', null, {})
  },
}
