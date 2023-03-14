import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })
import 'cypress-iframe';
import 'cypress-react-selector';

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click on multiple windows and click on new wihdow link',()=>{
    cy.get('#content > ul > li:nth-child(33) > a').click()
    cy.wait(2000)
    cy.get('#content > div > h3').should('contain',"Opening a new window")
      
})
  Then('Get the title of the window',()=>{
    // cy.get('#content > div > a').click()
    // cy.window().then((win)=>{
    //     cy.wrap(win.document.querySelector('h3')).should('have.text','New Window')
   
        cy.get('#content > div > a').invoke('removeAttr', 'target').click()
        cy.url()
          .should('include', '/windows/new')
        cy.get('h3')
          .should('have.text', 'New Window')
      })

   
      
    

   