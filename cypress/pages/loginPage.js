export class LoginPage {

    constructor () {
        this.username_textbox = "#user-name",
        this.password_textbox = "#password",
        this.login_button = "#login-button",
        this.error_message_box = "form > h3",
        this.logo_image = ".app_logo"
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    setUsername(username){
        cy.get(this.username_textbox).type(username)
    }

    setPassword(password){
        cy.get(this.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.login_button).click()
    }

    getLogoImage(){
        return cy.get(this.logo_image)
    }

    getErrorBox(){
        return cy.get(this.error_message_box)
    }

}