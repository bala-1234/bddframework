import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { should } from "chai";
Cypress.on("uncaught:exception", () => { return false })
import 'cypress-iframe';
import 'cypress-react-selector';

Given('I open website',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('Validate the page opened or not',()=>{
    cy.get('#content > ul > li:nth-child(1) > a').click()

})
Then('I should be in AB test page',()=>{
    cy.get('#content > div > p').should('contain',"Also known as split testing. This is a way in which businesses are able to simultaneously test and learn different versions of a page to see which text and/or functionality works best towards a desired outcome (e.g. a user action such as a click-through).")
cy.wait(2000)
    cy.go('back')
    //cy.go(1)
    cy.get('#content > ul > li:nth-child(2) > a').click()
    cy.get('#content > h3').should('contain',"Add/Remove Elements")
    cy.get('#content > div > button').click()
    cy.get('button,Delete').should('be.visible')
    
    cy.get('#elements > button').should('not.be.visible').click()
    //cy.get('button,Delete').should('not.be.visible')
   
    
})