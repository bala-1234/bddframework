import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })

Given('I open website',()=>{
    cy.visit('http://the-internet.herokuapp.com/basic_auth',{
      auth:{
        username: 'admin',
        password: 'admin'
      }
      
       
    })
    
})
  When('I enter user name and password as admin it should open the Basuc auth page',()=>{
     //cy.get('#content > ul > li:nth-child(3) > a').click()
    // cy.location ('pathname').should('eq','http://the-internet.herokuapp.com/basic_auth')
    // cy.get('input[type="text"]').type('uid')
    // cy.get('input[type="password"]').type('pwd')
    cy.get('#content > div > p').should('contain',"Congratulations! You must have the proper credentials")
    //.should('have.contain',"Congratulations! You must have the proper credentials.")
    
})
//Then('text uid pwd and signin',()=>{
  
   
 //})