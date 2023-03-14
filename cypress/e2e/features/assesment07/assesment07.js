import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the link Checkboxes page should open',()=>{
    cy.get('#content > ul > li:nth-child(6) > a').click()
    cy.get('#content > div > h3').should('contain','Checkboxes')
})
Then('I should uncheck the option 2 and check the option 1',()=>{
    cy.get('#checkboxes > input[type=checkbox]:nth-child(3)').uncheck()
    cy.get('#checkboxes > input[type=checkbox]:nth-child(1)').check()
})