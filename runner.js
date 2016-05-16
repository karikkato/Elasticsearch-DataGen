var _ = require('lodash');
var axios = require('axios');
var faker = require('faker');
var elasticsearch = require('elasticsearch');

var config = {
    host: 'localhost:9200',
    index: 'data',
    type: 'data',
    bulk: true,
    bulkSize: 10000

}

var client = new elasticsearch.Client({
    host: config.host
});

var k = 0;
var run = function() {
    if (config.bulk) {
        var bulkPost = [];
        for (var i = 0; i < config.bulkSize; i++) {
            bulkPost.push({
                'create': {
                    '_index': config.index,
                    '_type': config.type
                }
            });
            bulkPost.push({
                userName: faker.internet.userName(),
                firstName: faker.name.firstName(),
                lastName: faker.name.lastName(),
                isSubscribed: faker.random.boolean(),
                photos: {
                    icon: faker.internet.avatar()
                },
                timeStamp: faker.date.past()
            });
        }

        client.bulk({
            body: bulkPost
        }, function(err, resp) {
            // console.log(err);
            // console.log(resp);
            console.log('1-' + k++);
            run();
        });
    } else {

    }
};

var j = 0;
var run2 = function() {
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
            console.log('2-' + j++);
            run2();
        })
        .catch(function(response) {
            console.log(response);
        });
};

run();
run2();