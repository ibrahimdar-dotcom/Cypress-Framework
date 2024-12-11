export class ProductPage{

    constructor(){
        this.product_text = ".product_label",
        this.menu_button = ".bm-burger-button > button",
        this.inventory_link = "#inventory_sidebar_link",
        this.product_listing_filter = "select.product_sort_container",
        this.product_list = ".inventory_list > .inventory_item",
        this.product_item_image = ".inventory_item_img",
        this.product_item_name = ".inventory_item_name",
        this.product_item_price = ".pricebar > .inventory_item_price"
    }

    getProductLabel(){
        return cy.get(this.product_text)
    }

    clickMenuBtn(){
        cy.get(this.menu_button).click()
    }

    clickInventoryLink(){
        cy.get(this.inventory_link).click()
    }

    clickProductFilter(){
        return cy.get(this.product_listing_filter)
    }

    getProductListing(){
        return cy.get(this.product_list)
    }

    getProductImage(){
        return cy.get(this.product_item_image)
    }

    getProductName(){
        return cy.get(this.product_item_name)
    }

    getProductPrice(){
        return cy.get(this.product_item_price)
    }

}