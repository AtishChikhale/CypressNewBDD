///<reference types="cypress"/>
import { Given, Then, When } from "@badeball/cypress-cucumber-preprocessor";

Given('Visit Green-Kart Site', () => {
    cy.visit('https://rahulshettyacademy.com/seleniumPractise/#/')
})

When('Search product which is start from ca', () => {
    cy.get("[class='search-keyword']").type('ca')
    cy.get('[type="submit"]').click()
})

When('Add carrot to the carrot', () => { 
    cy.get('[class="product-name"]').each((el, i) => {
        if(el.text().replace('- 1 Kg', ' ').trim() == "Carrot"){
            cy.get('.product-action> button ').eq(i).click()
        }
    })
})

When('Place order and select country', () => { 
    cy.get('.cart-icon > img').click()
    cy.get('.cart-icon > img').click()
    cy.get('.cart-preview > .action-block > button').click({force: true})
    cy.get(':nth-child(14)').click()
    cy.get('select').select("India")
    cy.get('.chkAgree').check()
    cy.get('button').click()
})

Then('Validate the Thank you message', () => { 
    cy.get('[style="color:green;font-size:25px"]').should('be.visible')
})
