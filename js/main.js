// 交易函數
function purchase(event) {
    // 取消瀏覽器重整畫面的行為
    event.preventDefault();
    Swal.fire({
        title: '交易完成',
        text: 'success',
        type: 'success',
        onClose: () => {
            // 回到首頁
            location = '/success'
        }
    })
}


function addToCart(productName, productPrice, qty, img, id) {
    // 讀取現有的購物車內容
    const cart = getCartItems();

    // 檢查購物車內是否已有相同商品，若有則增加數量，否則新增商品
    let existingItem = cart.find(item => item.name === productName);
    if (existingItem) {
        existingItem.quantity += parseInt(qty);
    } else {
        cart.push({
            name: productName,
            price: productPrice,
            quantity: parseInt(qty),
            image: img,
            id: id
        });
    }

    // 將更新後的購物車內容存回 cookie
    const cartJSON = JSON.stringify(cart);
    document.cookie = `cart=${cartJSON}; path=/`;
}

function removeCartItem(productName) {
    // 讀取現有的購物車內容
    const cart = getCartItems();
    // 找到要刪除的商品
    let existingItemIndex = cart.findIndex(item => item.name === productName);
    if (existingItemIndex !== -1) {
        // 從陣列中刪除該商品
        cart.splice(existingItemIndex, 1);
        // 將更新後的購物車內容存回 cookie
        const cartJSON = JSON.stringify(cart);
        document.cookie = `cart=${cartJSON}; path=/`;
    }
}

function getCartItems() {
    // 讀取 cookie 中的購物車內容
    const cookies = document.cookie.split(';');
    const cartCookie = cookies.find(cookie => cookie.trim().startsWith('cart='));
    if (cartCookie) {
        const cartJSON = decodeURIComponent(cartCookie.split('=')[1]);
        return JSON.parse(cartJSON);
    } else {
        const tid = generateTransactionId();
        const tidJSON = JSON.stringify({
            tid: tid
        });
        document.cookie = `tid=${tidJSON}; path=/`;
        return [];
    }
}

function generateTransactionId() {
    // 取得現在的時間戳記
    const timestamp = new Date().getTime();

    // 生成一個隨機的四位數字
    const randomNumber = Math.floor(Math.random() * 9000) + 1000;

    // 組合成交易ID
    const transactionId = `TX${timestamp}${randomNumber}`;

    return transactionId;
}
