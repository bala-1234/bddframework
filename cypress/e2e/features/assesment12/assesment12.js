import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

//1)java Script alert: it will have some text and an 'Ok' button
Given('I am on the basic authentication page',()=>{
 cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
 cy.get("button[onclick='jsAlert()']").click()

 cy.on('Window:alert',(t)=>{
 expect(t).to.contains('I am a JS Alert')
})
cy.get("#result").should('have.text','You successfully clicked an alert')
})

When('I click on JavaScript Alerts and it should open the JavaScript Alerts page',()=>{
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
 cy.get("button[onclick='jsConfirm()']").click()
 cy.on('Window:confirm',(t)=>{
 expect(t).to.contains('I am a JS Confirm')
 }) 
})
Then('I should validate all 3 allerts on the Page',()=>{
cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
 
 cy.window().then((win)=>{
 cy.stub(win,'prompt').returns('Balakrishna');
 
 cy.get("button[onclick='jsPrompt()']").click()
 cy.get("#result").should('have.text','You entered: Balakrishna')
 }) 
})



