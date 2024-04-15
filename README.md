# graphql-api-testframework
This repository contains an API test framework specifically designed for testing GraphQL queries from graphql.bitquery.io

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

## Setup

1. **Install Git**: If you haven't already, you need to install Git on your machine. You can download Git from the [official website](https://git-scm.com/).

2. **Install Node.js and npm**: 
   
   - Download and install Node.js from the [official website](https://nodejs.org/).
   - npm is included with Node.js installation.

3. **Clone the Repository**: Clone the repository containing the test code to your local machine:

    ```bash
    git clone https://github.com/ranishaar/graphql-api-testframework.git
    ```

4. **Navigate to the Project Directory**: Open a terminal or command prompt and navigate to the root directory of the cloned repository:

    ```bash
    cd graphql-api-testframework
    ```

5. **Set Up Credentials File**: Create a file named `credentials.json` in the root directory of the project. This file should contain your API key and authorization header for the GraphQL API you are testing. Here's an example of how the `credentials.json` file should be structured:

    ```json
    {
      "apiKey": "YOUR_API_KEY_HERE",
      "authorizationHeader": "YOUR_AUTHORIZATION_HEADER_HERE"
    }
    ```

    Replace `"YOUR_API_KEY_HERE"` with your actual API key and `"YOUR_AUTHORIZATION_HEADER_HERE"` with your authorization header.

    To obtain the API key and authorization header:
    
    - Go to the [GraphQL playground](https://ide.bitquery.io/).
    - Create a free account or log in if you already have one.
    - Select **API V1** to obtain correct credentials.
    - Click on the `</>` button at the top right corner of the playground.
    - You will find your API key and authorization header in the code snippet that appears.

6. **Install Dependencies**: Install the required dependencies using npm:

    ```bash
    npm install chai axios fs graphql-request
    ```

    This command will install all the dependencies required for running the tests.

## Running Tests

Once you have installed the dependencies and set up the project, you can run the tests using the following command:

   ```bash
   npm test
   ```

Ultimately, you can run individual test cases by using grep as follows:

   ```bash
   npm test -- -g TST-XXXX
   ```
Replace X values by the desired test case number to run which can be found in the `it` block of each test case.
i.e. TST-1201

Test results are logged in the terminal window and also in the mochawesome html report generated and found in mochawesome-report directory.

## Test Descriptions

1. **API Authorization Tests**: This suite tests the authorization process for the API.
   - Test 1: Verifies that authorization fails with an invalid API key.

2. **Endpoint Response Model Schema Tests**: This suite verifies the model schema of endpoint responses.
   - Test 1: Verifies the model schema of Ethereum transactions response.

3. **Coin Data Retrieval Tests**: This suite retrieves coin data and verifies it.
   - Test 1: Verifies the count of failed Ethereum transactions.


