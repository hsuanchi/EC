function sendProductClickDataLayer(price, id, name, page) {
    // Product Click
    dataLayer.push({
        event: "select_item",
        ecommerce: {
            items: [{
                item_id: id,
                item_name: name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(price),
            }]
        }
    });
}

function sendAddToCarDataLayer(id, name, price, quantity) {
    // Add To Cart
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: "NTD",
            value: parseInt(price) * parseInt(quantity),
            items: [{
                item_id: id,
                item_name: name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(price),
                quantity: parseInt(quantity)
            }]
        }
    });
}

function sendremoveCarDataLayer(id, name, price, quantity) {
    // remove To Cart
    dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
            currency: "NTD",
            value: parseInt(price) * parseInt(quantity),
            items: [{
                item_id: id,
                item_name: name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(price),
                quantity: parseInt(quantity)
            }]
        }
    });
}
