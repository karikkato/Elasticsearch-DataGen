var axios = require('axios');
var faker = require('faker');

var i = 0;

var run = function() {
    axios.post('http://localhost:9200/users/userData', {
    	userName: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        isSubscribed: faker.random.boolean(),
        photos: {
        	icon: faker.internet.avatar()
        }
    }, {})
        .then(function(response) {
            console.log(i++);
            run();
        })
        .catch(function(response) {
            console.log(response);
        });
}

run();