'use strict';
const AWS = require('aws-sdk');
const dynamodb = new AWS.DynamoDB({
    apiVersion: '2012-08-10'
});

module.exports.bWord = async (event, context, callback) => {
    // do some alexa stuff
    const user = event.request.intent.slots.User.value;
    const word = event.request.intent.slots.Bword.value;
    let response = {
        version: '1.0',
        response: {
            outputSpeech: {
                type: 'PlainText',
                text: `did not update user ${user} to word ${word}.`,
            },
            shouldEndSession: true,
        },
    };;

    dynamodb.putItem({
        TableName: "Bigelow_Boys",
        Item: {
            "name": {
                S: user
            },
            "word": {
                S: word
            }
        }
    }, (err, data) => {
        if (err) {
            console.log(err, err.stack);
            response = {
                version: '1.0',
                response: {
                    outputSpeech: {
                        type: 'PlainText',
                        text: `Sorry, I could not update user ${user} to word ${word}.`,
                    },
                    shouldEndSession: true,
                }
            };
        } else {
            response = {
                version: '1.0',
                response: {
                    outputSpeech: {
                        type: 'PlainText',
                        text: `updated user ${user} to word ${word}.`,
                    },
                    shouldEndSession: true,
                },
            };
        }
        callback(null, response);
    })
};

module.exports.doBigelow = async (event) => {


    var params = {
        TableName: 'Bigelow_Boys'
    };

    let words = [];
    let message = 'The hunter decides that the meal is not worth the fight.';
    let statusCode;


    dynamodb.scan(params, (err, data) => {
        if (err) {
            console.log("Error", err);
            statusCode = 500;
            message = 'Failed to retrieve words.';
        } else {
            statusCode = 200;
            data.Items.forEach(function(element, index, array) {
                console.log(element.name.S + " (" + element.word.S + ")");
                words.push({
                    name: element.name.S,
                    word: element.word.S
                });
            });
        }

        return {
            statusCode: statusCode,
            body: JSON.stringify({
                message: message,
                words: words,
                input: event,
            }, null, 2),
        };
    });
};