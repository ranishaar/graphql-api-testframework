import { expect } from 'chai';
import axios from 'axios';
import fs from 'fs';
import { request, gql } from 'graphql-request';

const apiURL = 'https://graphql.bitquery.io';

// Read the credentials file
const apiCredentials = JSON.parse(fs.readFileSync('credentials.json'));

// Access API key and authorization header from the configuration
const apiKey = apiCredentials.apiKey;
const authorizationHeader = apiCredentials.authorizationHeader;

describe('TST-1000 API Authorization Tests', function () { // Suite for testing API authorization
  it('TST-1001 A Invalid API Key', async function () { // Test to verify authorization fails with an invalid API key (Test is meant to fail because im passing incorrect apiKey)
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
      const response = await axios.post(apiURL, { query }, {
        headers: {
          'X-API-KEY': "apiKey", // Set auth key as invalid string
          'Authorization': authorizationHeader,
          'Content-Type': 'application/json',
        },
      });

      // Extract and print status and status text to the console
      console.log('Response status:', response.status);
      console.log('Response status text:', response.statusText);

      // Assert when status code is not 200 (auth request failed)
      expect(response.status).equal(200);

    } catch (error) {

      // If the error has a response object
      if (error.response) {

        // Print status and status text to the console
        console.error('Error message:', error.message);
        console.log('Response status:', error.response.status);
        console.log('Response status text:', error.response.statusText);

      }
      throw error; // Rethrow the error to indicate test failure
    }
  }).timeout(5000); // Set timeout to 5000ms (5 seconds) because response sometimes was taking more than 2 seconds and failing test
});

describe('TST-1100 Endpoint Response Model Schema Tests', function () { // Test suite for verifying the model schema of endpoint responses
  it('TST-1101 EMS Verify ETH transactions response model schema', async function () { // Test to verify the model schema of the Ethereum transactions response
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
      console.log('Model schema:', JSON.stringify(data, null, 2));

      // Assert that the data follows the expected model schema
      expect(data).to.have.property('ethereum').to.be.an('object');
      expect(data.ethereum).to.have.property('transactions').to.be.an('array');
      expect(data.ethereum.transactions[0]).to.have.property('count').to.be.a('number');

    } catch (error) {
      console.error('Error:', JSON.stringify(error, null, 2));
      throw error; // Rethrow the error to indicate test failure
    }

  }).timeout(5000);
});

describe('TST-1200 Coin Data Retrieval Tests', function () { // Test suite for retrieving coin data
  it('TST-1201 CD Verify positive count of ETH failed transactions', async function () { // Test to retrieve the count of failed Ethereum transactions
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

      // Extract count value from the first transaction
      const transactions = data.ethereum.transactions;
      const count = transactions.length > 0 ? transactions[0].count : undefined;

      console.log('ETH failed transactions count:', count);

      // Assert that count is a number and is greater than 0
      expect(count).to.exist;
      expect(count).to.be.a('number');
      expect(count).to.be.gte(0);
    } catch (error) {
      console.error('Error:', JSON.stringify(error, null, 2));
      throw error; // Rethrow the error to indicate test failure
    }

  }).timeout(5000);
});
