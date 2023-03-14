import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the link dropdown list page should open',()=>{
    cy.get('#content > ul > li:nth-child(11) > a').click()
    cy.get('#content > div > h3').should('contain','Dropdown List')

    //cy.get('').select('')
})
Then('I should print the all options in console',()=>{
    cy.get('select').each(($el)=>{
        cy.log($el.text());
    })
    // cy.get('#checkboxes > input[type=checkbox]:nth-child(3)').uncheck()
    // cy.get('#checkboxes > input[type=checkbox]:nth-child(1)').check()
})