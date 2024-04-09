let chai;
before(async () => {
  chai = await import('chai');
});

const { request, gql } = require('graphql-request');

const endpoint = 'https://graphql.bitquery.io';
const apiKey = 'BQYzU9vO6Qn026LTYJHWILo5yv315SE9';
const authorizationHeader = 'Bearer ory_at_gwuKBlXBVdL__nEJwRJ1_Npx8b1PUisa4qPuW46bRpk.4S4KyWY3d6-2eDc4p0Co9bkf8b5vhST-zBinxJwvwas';

describe('GraphQL Queries', function () {
  it('should return data for Query 1', function (done) {
    const query = gql`
      {
         ethereum {
             transactions {
               count(success: false)
             }
           }
      }
    `;

    request(endpoint, query, null, {
      'X-API-KEY': apiKey,
      'Authorization': authorizationHeader,
    }).then(data => {
      console.log('Response:', data); // Display the returned data

      // Write assertions to validate the response data
      //chai.expect(data).to.have.property('ethereum');
     // chai.expect(data.ethereum).to.have.property('dexTrades');
     // chai.expect(data.ethereum.dexTrades).to.have.lengthOf.at.least(1);
      // Add more assertions as needed

      done(); // Call done() to indicate test completion
    }).catch(error => {
      done(error); // Call done() with error to indicate test failure
    });
  }).timeout(5000); // Set timeout to 5000ms (5 seconds)
});
