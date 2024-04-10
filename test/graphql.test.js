let chai;
before(async () => {
  chai = await import('chai');
});

const { request, gql } = require('graphql-request');

const apiURL = 'https://graphql.bitquery.io';
const apiKey = 'BQYzU9vO6Qn026LTYJHWILo5yv315SE9';
const authorizationHeader = 'Bearer ory_at_gwuKBlXBVdL__nEJwRJ1_Npx8b1PUisa4qPuW46bRpk.4S4KyWY3d6-2eDc4p0Co9bkf8b5vhST-zBinxJwvwas';

describe('GET ETH data', function () { // Test suite to GET various coin objects
  it('Return ETH failed transactions count', async function () {
    const query = gql`
      {
         ethereum {
             transactions {
               count(success: false)
             }
           }
      }
    `;
    
    try {
      const data = await request(apiURL, query, null, {
        'X-API-KEY': apiKey,
        'Authorization': authorizationHeader,
      });
      
      console.log('ETH failed transactions count:', JSON.stringify(data, null, 2));// Print response call in json format
      
      // Extract count value from the first transaction
      const transactions = data.ethereum.transactions;
      const count = transactions.length > 0 ? transactions[0].count : undefined;

      console.log('ETH failed transactions count:', count);

      // Assert that count is a number and is greater than 0
      chai.expect(count).to.exist;
      chai.expect(count).to.be.a('number');
      chai.expect(count).to.be.gte(0);
    } catch (error) {
      console.error('Error in first request:', JSON.stringify(error, null, 2));
      throw error; // Rethrow the error to indicate test failure
    }

  }).timeout(5000); // Set timeout to 5000ms (5 seconds) because response sometimes was taking more than 2 seconds and failing test
});
