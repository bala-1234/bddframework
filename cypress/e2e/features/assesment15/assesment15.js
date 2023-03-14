import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })
import 'cypress-iframe';
import 'cypress-react-selector';

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on sortable data table and verify the example 2 table available or not.',()=>{
    cy.get('#content > ul > li:nth-child(41) > a').click()
    cy.get('#content > div > h4:nth-child(6)').should('contain',"Example 2")
    
   
      
})
  Then('Print the example 2 table data in console',()=>{

    cy.get('#table2').find('tr').each(($row, index, $rows) => {
            if (index !== 0) {
              cy.wrap($row).find('td').each(($cell, index, $cells) => {
                console.log($cell.text());
              })
            }
          })
        })
