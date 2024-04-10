/*let chai;
before(async () => {
  chai = await import('chai');
});*/

const { request, gql } = require('graphql-request');

const apiURL = 'https://graphql.bitquery.io';
const apiKey = 'BQYzU9vO6Qn026LTYJHWILo5yv315SE9';
const authorizationHeader = 'Bearer ory_at_gwuKBlXBVdL__nEJwRJ1_Npx8b1PUisa4qPuW46bRpk.4S4KyWY3d6-2eDc4p0Co9bkf8b5vhST-zBinxJwvwas';

describe('GraphQL Test Cases', function () {
  it('Return failed ETH transactions count', async function () {
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
      
      console.log('Response 1:', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error in first request:', error);
      throw error; // Rethrow the error to indicate test failure
    }

      // Write assertions to validate the response data
      //chai.expect(data).to.have.property('ethereum');
     // chai.expect(data.ethereum).to.have.property('dexTrades');
     // chai.expect(data.ethereum.dexTrades).to.have.lengthOf.at.least(1);
      // Add more assertions as needed


  }).timeout(5000); // Set timeout to 5000ms (5 seconds)

  it('Return failed ETH transaction count2', async function () {
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
      
      console.log('Response 2:', JSON.stringify(data, null, 2));
    } catch (error) {
      console.error('Error in second request:', error);
      throw error; // Rethrow the error to indicate test failure
    }

    

  }).timeout(5000); // Set timeout to 5000ms (5 seconds)
});
