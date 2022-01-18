# Introduction 
QA Engineer role | Miele X - Technical Assessment

# Getting Started
Follow the instructions below to setup project
1.  Software dependencies 
    -  Ensure the following software is installed on your machine: NodeJS, node package manager (npm), Visual Studio Code (VSCode), Chrome browser
2.	Installation process
    - Clone the project from the [Repository](https://github.com/Uwakmfon-Edet/mieleX.git)
    - Open the cloned project folder on VSCode or another text editor of choice
    - Open terminal on project directory and run the command ```npm install```
    (This will install all project dependencies)
  
# Build and Test
1.  Run tests in headful mode
    - Open terminal on project directory and run the command ```npm run cy:open``` OR ```npx cypress open```
    This will open the Cypress-UI. Click on the orders.feature file to execute the tests
2. Run tests in headless mode
    - Open terminal on project directory and run the command ```npm run cy:run``` OR ```npx cypress run```
     This will run tests headless on CLI

# Notes
1. The framework used is Cypress with BDD. A page Object Model  (POM) was adopted, so page elements can be found in ```/integration/mieleX/orders/ordersPage.js```   
2. App requires users to be logged in to place order successfully, hence the need to generate random emails for each test runs. These entries are cleared out daily from the DB