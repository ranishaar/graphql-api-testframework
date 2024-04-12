# graphql-api-testframework
This repository contains an API test framework specifically designed for testing GraphQL queries from graphql.bitquery.io

## Prerequisites

Before you begin, ensure you have the following installed on your local machine:

- Node.js
- npm (Node Package Manager)

## Setup

1. **Install Node.js and npm**: 
   
   - Download and install Node.js from the [official website](https://nodejs.org/).
   - npm is included with Node.js installation.

2. **Clone the Repository**: Clone the repository containing the test code to your local machine:

    ```bash
    git clone https://github.com/ranishaar/graphql-api-testframework.git
    ```

3. **Navigate to the Project Directory**: Open a terminal or command prompt and navigate to the root directory of the cloned repository:

    ```bash
    cd graphql-api-testframework
    ```

4. **Set Up Credentials File**: Create a file named `credentials.json` in the root directory of the project. This file should contain your API key and authorization header for the GraphQL API you are testing. Here's an example of how the `credentials.json` file should be structured:

    ```json
    {
      "apiKey": "YOUR_API_KEY_HERE",
      "authorizationHeader": "YOUR_AUTHORIZATION_HEADER_HERE"
    }
    ```

    Replace `"YOUR_API_KEY_HERE"` with your actual API key and `"YOUR_AUTHORIZATION_HEADER_HERE"` with your authorization header.

5. **Install Dependencies**: Install the required dependencies using npm:

    ```bash
    npm install chai axios fs graphql-request
    ```

    This command will install all the dependencies required for running the tests.

## Running Tests

Once you have installed the dependencies and set up the project, you can run the tests using the following command:

```bash
npm test



