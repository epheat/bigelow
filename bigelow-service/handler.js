'use strict';

module.exports.do_bigelow = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'The hunter decides that the meal is not worth the fight.',
      words: [
        { name: 'Evan', word: 'hello' },
        { name: 'Scott', word: 'darkness' },
        { name: 'John', word: 'myold' },
        { name: 'Blake', word: 'friend' },
      ],
      input: event,
    }, null, 2),
  };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
};
