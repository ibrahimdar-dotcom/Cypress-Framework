export class loginPage {

    webElements = {
        username_textbox : "#user-name",
        password_textbox : "#password",
        login_button : "#login-button",
        error_message_box : "form > h3",
        logo_image : ".app_logo"
    }

    openURL(){
        cy.visit(Cypress.env('URL'))
    }

    setUsername(username){
        cy.get(this.webElements.username_textbox).type(username)
    }

    setPassword(password){
        cy.get(this.webElements.password_textbox).type(password)
    }

    clickLogin(){
        cy.get(this.webElements.login_button).click()
    }

    getLogoImage(){
        return cy.get(this.webElements.logo_image)
    }

    getErrorBox(){
        return cy.get(this.webElements.error_message_box)
    }

}