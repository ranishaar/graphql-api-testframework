let chai;
before(async () => {
  chai = await import('chai');
});

const { request, gql } = require('graphql-request');

const endpoint = 'https://graphql.bitquery.io/';
const apiKey = 'BQYzU9vO6Qn026LTYJHWILo5yv315SE9';
const authorizationHeader = 'Bearer ory_at_ELdU4qbYct3YrgI52LeLUTeuVQAFkaQUzUMK9iBBMCQ.UMjvcDGwgJMJ8wkJl84Fvr9k6wPRxMNfjeYCa6bQzdU';

describe('GraphQL Queries', function () {
  it('should return data for Query 1', function (done) {
    const query = gql`
      {
        ethereum(network: ethereum) {
          dexTrades(
            options: { limit: 5, desc: ["timeInterval.minute"] }
            date: { since: "2022-03-01" }
          ) {
            timeInterval {
              minute(count: 5)
            }
            baseCurrency {
              symbol
            }
            quoteCurrency {
              symbol
            }
            baseAmount
            quoteAmount
            trades: count
            quotePrice
            maximum_price: quotePrice(calculate: maximum)
            minimum_price: quotePrice(calculate: minimum)
          }
        }
      }
    `;

    request(endpoint, query, null, {
      'x-api-key': apiKey,
      Authorization: authorizationHeader,
    }).then(data => {
      console.log(data); // Display the returned data

      // Write assertions to validate the response data
      chai.expect(data).to.have.property('ethereum');
      chai.expect(data.ethereum).to.have.property('dexTrades');
      chai.expect(data.ethereum.dexTrades).to.have.lengthOf.at.least(1);
      // Add more assertions as needed

      done(); // Call done() to indicate test completion
    }).catch(error => {
      done(error); // Call done() with error to indicate test failure
    });
  }).timeout(5000); // Set timeout to 5000ms (5 seconds)
});
