/// <reference types="cypress" />

import { LoginPage } from "../../pages/loginPage"
import loginData from "../../fixtures/loginData.json"

const loginObj = new LoginPage()

describe('Login test cases', () => {
    it('verify login with valid username and password', () => {
        loginObj.openURL();
        cy.login(loginData.login["valid credentials"].username, 
                loginData.login["valid credentials"].password
        )
        loginObj.clickLogin();
        loginObj.getLogoImage().should('exist');
    })

    it('verify login with invalid username and valid password', () => {
        loginObj.openURL()
        cy.login(loginData.login["invalid credentials"].username,
            loginData.login["valid credentials"].password
        )
        cy.validation() 
    })

    it('verify login with valid username and invalid password', () => {
        loginObj.openURL()
        cy.login(loginData.login["valid credentials"].username, 
            loginData.login["invalid credentials"].password
        )
        cy.validation()    
    })

    it('verify login with invalid username and password', () => {
        loginObj.openURL()
        cy.login(loginData.login["invalid credentials"].username, 
            loginData.login["invalid credentials"].password
        )
        cy.validation()
    })

})