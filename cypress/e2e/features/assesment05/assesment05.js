import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the link "Broken Images"',()=>{
    cy.get('#content > ul > li:nth-child(4) > a').click()
})
Then('I should count the images',()=>{
    cy.get('img').then((images)=>{
        const count=images.length;
        cy.log('there are the images count on this page.');
    })

  
})