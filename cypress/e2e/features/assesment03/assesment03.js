import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I open website',()=>{
    cy.visit('http://the-internet.herokuapp.com/add_remove_elements/')
})
When('I click on Add element',()=>{
    cy.get('#content > div > button').click()
})
Then('I should be able to see delete button',()=>{
    cy.get('#elements > button').should('be.visible')
    cy.get('#elements > button').click()
    cy.wait(40000)
    cy.get('#elements > button').should('not.be.visible')
})