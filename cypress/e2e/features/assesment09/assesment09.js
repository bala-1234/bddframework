import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor";
Cypress.on("uncaught:exception", () => { return false })
import 'cypress-iframe'

Given('I am on the basic authentication page',()=>{
    cy.visit('http://the-internet.herokuapp.com/')
})
When('I click the frames it should open the frames page and i click on Nested Frames',()=>{
    cy.get('#content > ul > li:nth-child(22) > a').click()
    cy.get('#content > div > h3').should('contain','Frames')
    cy.get('#content > div > ul > li:nth-child(1) > a').click()

    //cy.get('').select('')
})
 Then('I should get the available text in all frames',()=>{
    cy.get('frame,iframe,frameset').then(frames =>{
        frames.each((index, iframe)=>{
            cy.wrap(frame)
            .its('contentDocument').should('exist')
            .then(doc =>{
                const text = doc.documentElement.textContent.trim();
                
                cy.log('Frame ${index}: ${text}')
               
            })
        })
    })
  })
