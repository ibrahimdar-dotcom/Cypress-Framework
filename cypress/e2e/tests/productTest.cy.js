/// <reference types="cypress" />

import { ProductPage } from "../../pages/productPage"
import { LoginPage } from "../../pages/loginPage"
import loginData from "../../fixtures/loginData.json"

const loginObj = new LoginPage()
const productObj = new ProductPage()

describe('Product test cases', () => {
    beforeEach('', () => {
        loginObj.openURL()
        cy.login(loginData.login["valid credentials"].username, 
            loginData.login["valid credentials"].password
        )
        loginObj.clickLogin();
    })
    
    it('verify the opening of product page on login', () => {
        productObj.getProductLabel().should("have.text", "Products")
    })

    it('verify the opening of product page from link', () => {
        productObj.clickMenuBtn()
        productObj.clickInventoryLink()
        productObj.getProductLabel().should("have.text", "Products")
    })

    it('verify count of display products on login', () => {
        productObj.getProductListing().should('have.length', 6)
    })

    it('filter products on name in ascending order', () => {
        productObj.clickProductFilter().select("Name (A to Z)")
        .invoke('val').should('deep.equal', 'az')

        productObj.getProductName().should('have.length', 6)
        .then(($item) => {
            const unsorted_names = [...$item].map((item) => item.innerText);
            //[...unsorted_names] is to avoid mutation in original array
            const sorted_names = [...unsorted_names].sort((a,b) => a.localeCompare(b));
            
            expect(unsorted_names).to.deep.equal(sorted_names)
            expect(unsorted_names[0]).to.deep.include("Backpack")
            expect(unsorted_names[unsorted_names.length - 1]).to.deep.include("allTheThings()")
        })

    })

    it('filter products on name in descending order', () => {
        productObj.clickProductFilter().select("Name (Z to A)")
        .invoke('val').should('deep.equal', 'za')

        productObj.getProductName().should('have.length', 6)
        .then(($item) => {
            const unsorted_names = [...$item].map((item) => item.innerText);
            const sorted_names = [...unsorted_names].sort((a,b) => b.localeCompare(a));

            expect(unsorted_names).to.deep.equal(sorted_names)
            expect(unsorted_names[1]).to.deep.include("Onesie")
            expect(unsorted_names[3]).to.deep.include("Bolt")
        })

    })

    it('filter products on price in ascending order', () => {
        productObj.clickProductFilter().select("Price (low to high)")
        .invoke('val').should('deep.equal', 'lohi')

        productObj.getProductPrice().should('have.length', 6)
        .then(($price) => {
            const unsorted_prices = [...$price].map((price) => {
                /*use regex replace func to extract digits with floating
                  point and 'g' is to globally applying it since comparison
                  need to be made between numbers*/
                return parseFloat(price.innerText.replace(/[^0-9.]/g,''));
            });

            const sorted_prices = [...unsorted_prices].sort((a,b) => a-b)

            expect(sorted_prices).to.deep.equal(unsorted_prices)
            expect(unsorted_prices[unsorted_prices.length - 1]).to.deep.equal(49.99)
        })
    })

    it('filter products on price in descending order', () => {
        productObj.clickProductFilter().select("Price (high to low)")
        .invoke('val').should('deep.equal', 'hilo')

        productObj.getProductPrice().should('have.length', 6)
        .then(($price) => {
            const unsorted_prices = [...$price].map((price) => {
                return parseFloat(price.innerText.replace(/[^0-9.]/g,''));
            });

            const sorted_prices = [...unsorted_prices].sort((a,b) => b-a)

            expect(sorted_prices).to.deep.equal(unsorted_prices)
            expect(unsorted_prices[unsorted_prices.length - 1]).to.deep.equal(7.99)
        })
    })

})