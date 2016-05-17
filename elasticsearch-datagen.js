var faker = require('faker');
var elasticsearch = require('elasticsearch');
var dateFormat = require('dateformat');
var format = 'yyyy/dd/mm HH:MM:ss.l';

var config = {
    host: 'localhost:9200',
    index: 'data',
    type: 'data',
    bulkSize: 10000,
    totalData: 100000
}

var createData = function() {
    return {
        userName: faker.internet.userName(),
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        isSubscribed: faker.random.boolean(),
        photos: {
            icon: faker.internet.avatar()
        },
        timeStamp: faker.date.past()
    };
}

var client = new elasticsearch.Client({
    host: config.host
});

var k = 0;
var run = function() {
    var bulkPost = [];
    for (var i = 0; i < config.bulkSize; i++) {
        bulkPost.push({
            'create': {
                '_index': config.index,
                '_type': config.type
            }
        });
        bulkPost.push(createData());
    }

    client.bulk({
        body: bulkPost
    }, function(err, resp) {
        if (err != null) {
            console.log(dateFormat(new Date(), format) + ' - an error has occured during data entry');
            console.log(err);
        } else {
            var currentTotal = ++k * config.bulkSize;
            if (currentTotal < config.totalData) {
                console.log(dateFormat(new Date(), format) + ' - ' + currentTotal + ' items inserted');
                run();
            } else {
                console.log(dateFormat(new Date(), format) + ' - ' + currentTotal + ' items have been inserted successfully');
            }
        }
    });

};

console.log(dateFormat(new Date(), format) + ' - Started inserting data')
run();