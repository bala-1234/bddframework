import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })


Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the link challenging dom and page should open',()=>{
    cy.get('#content > ul > li:nth-child(5) > a').click()
    cy.get('#content > div > h3').should('contain','Challenging DOM')
    
})
