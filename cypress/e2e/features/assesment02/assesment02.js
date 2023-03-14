import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I open website',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on Add remove element',()=>{
    cy.get('#content > ul > li:nth-child(2) > a').click()
})
Then('I should be in add remove page',()=>{
    cy.get('#content > h3').should('contain',"Add/Remove Elements")
    cy.get('#content > div > button').click()
    cy.wait(2000)
    cy.get('#elements > button').click()
    cy.wait(2000)

})