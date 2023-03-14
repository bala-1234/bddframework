import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })
import 'cypress-iframe';
import 'cypress-react-selector';

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on Notification Message and it should open notification message page.',()=>{
    cy.get('#content > ul > li:nth-child(35) > a').click()
   
      
})
  Then('Get the notification message available on the page or not',()=>{

    cy.get('#flash').should('contain',"Action unsuccesful")
   
      })
