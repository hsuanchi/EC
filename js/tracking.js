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
    console.log("select_item: ", JSON.stringify(dataLayer.filter(item => item.event === 'select_item')))
};

function sendAddToCarDataLayer(id, name, price, quantity) {
    // Add To Cart
    dataLayer.push({
        event: "add_to_cart",
        ecommerce: {
            currency: "TWD",
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
    console.log("add_to_cart: ", JSON.stringify(dataLayer.filter(item => item.event === 'add_to_cart')))
};

function sendremoveCarDataLayer(id, name, price, quantity) {
    // remove To Cart
    dataLayer.push({
        event: "remove_from_cart",
        ecommerce: {
            currency: "TWD",
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
    console.log("remove_from_cart: ", JSON.stringify(dataLayer.filter(item => item.event === 'remove_from_cart')))
};

(function () {
    //sendView_item
    if (location.pathname.includes("/product/")) {
        dataLayer.push({
            event: "view_item",
            ecommerce: {
                currency: "TWD",
                value: data.price,
                items: [{
                    item_id: data.id,
                    item_name: data.name,
                    item_brand: "MaxLab",
                    item_category: "-",
                    price: data.price,
                    quantity: 1
                }]
            }
        });
        console.log("view_item: ", JSON.stringify(dataLayer.filter(item => item.event === 'view_item')))
    };

    //sendBeginCheckout
    if (location.pathname.includes("/cart")) {
        const data = getCartItems()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
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
                currency: "TWD",
                value: subtotal,
                items: itemsList
            }
        });
        console.log("begin_checkout: ", JSON.stringify(dataLayer.filter(item => item.event === 'begin_checkout')))
    };

    //sendPaymentInfo
    if (location.pathname.includes("/payment")) {
        const data = getCartItems()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
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
                currency: "TWD",
                value: subtotal,
                items: itemsList
            }
        });
        console.log("add_payment_info: ", JSON.stringify(dataLayer.filter(item => item.event === 'add_payment_info')))
    };

    //purchase
    if (location.pathname.includes("/success")) {
        const data = getCartItems()
        const transactionId = generateTransactionId()
        itemsList = []
        subtotal = 0
        for (i = 0; i < data.length; i++) {
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
                currency: "TWD",
                items: itemsList
            }
        });
        console.log("purchase: ", JSON.stringify(dataLayer.filter(item => item.event === 'purchase')))
    };
})();
