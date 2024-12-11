import { LoginPage } from "../pages/loginPage"

const loginObj = new LoginPage()

Cypress.Commands.add('login', (username, password) => {
    loginObj.setUsername(username);
    loginObj.setPassword(password);
})

Cypress.Commands.add('validation', () => {
    loginObj.clickLogin()
    loginObj.getErrorBox().should('exist')
    loginObj.getErrorBox().should('contain', 'Username and password do not match any user in this service')
})


//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })