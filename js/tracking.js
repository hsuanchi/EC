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
};

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
};

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
};

(function () {
    //sendBeginCheckout
    if (location.pathname.includes("/cart")) {
        const data = getCartItems()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
            console.log()
            itemsList.push({
                item_id: data[i].id,
                item_name: data[i].name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(data[i].price),
                quantity: parseInt(data[i].quantity)
            })
            subtotal += parseInt(data[i].price) * parseInt(data[i].quantity)
        }
        dataLayer.push({
            event: "begin_checkout",
            ecommerce: {
                currency: "NTD",
                value: subtotal,
                items: itemsList
            }
        });
        console.log("begin_checkout: ", dataLayer)
    };

    //sendPaymentInfo
    if (location.pathname.includes("/payment")) {
        const data = getCartItems()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
            console.log()
            itemsList.push({
                item_id: data[i].id,
                item_name: data[i].name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(data[i].price),
                quantity: parseInt(data[i].quantity)
            })
            subtotal += parseInt(data[i].price) * parseInt(data[i].quantity)
        }
        dataLayer.push({
            event: "add_payment_info",
            ecommerce: {
                currency: "NTD",
                value: subtotal,
                items: itemsList
            }
        });
        console.log("add_payment_info: ", dataLayer)
    };

    //purchase
    if (location.pathname.includes("/success")) {
        const data = getCartItems()
        const transactionId = generateTransactionId()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
            console.log()
            itemsList.push({
                item_id: data[i].id,
                item_name: data[i].name,
                item_brand: "MaxLab",
                item_category: "-",
                price: parseInt(data[i].price),
                quantity: parseInt(data[i].quantity)
            })
            subtotal += parseInt(data[i].price) * parseInt(data[i].quantity)
        }
        dataLayer.push({
            event: "purchase",
            ecommerce: {
                transaction_id: transactionId,
                value: subtotal,
                shipping: 0,
                currency: "NTD",
                items: itemsList
            }
        });
        console.log("purchase: ", dataLayer)
    };
})();
