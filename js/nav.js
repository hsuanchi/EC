// nav 相關設定
(function () {
  var navbarText = document.getElementById("navbarText");
  var email = getCookie("email");
  if (email === "") {
    // 如果 email cookie 不存在，則顯示未登入狀態的導覽列
    navbarText.innerHTML = `
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a data-toggle="modal" href="#signUpModal" class="nav-link">註冊</a>
          </li>
          <li class="nav-item">
            <a data-toggle="modal" href="#loginModal" class="nav-link">會員登入</a>
          </li>
        </ul>
      `;
  } else {
    // 如果 email cookie 存在，則顯示已登入狀態的導覽列
    navbarText.innerHTML = `
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <a class="nav-link" href="/cart">購物車</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button"
              data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              ${email}
            </a>
            <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
              <a data-toggle="modal" href="#gtmModal" href="" class="dropdown-item">GTM 設定</a>
              <a onclick="logout()" href="" class="dropdown-item">logout</a>
            </div>
          </li>
        </ul>
      `;

    // 從 cookie 中獲取 gtmId
    const gtmId = document.cookie.replace(/(?:(?:^|.*;\s*)gtmId\s*\=\s*([^;]*).*$)|^.*$/, "$1");

    // 如果找到了 gtmId，就將其設置為 gtmConfig 輸入欄位的值
    if (gtmId) {
      const gtmConfigInput = document.getElementById("gtmConfig");
      if (gtmConfigInput) {
        gtmConfigInput.value = gtmId;
      }
    }
  }
})()


function gtmSetting(event) {

  // 取消瀏覽器重整畫面的行為
  event.preventDefault();
  // 取得填寫 GTM ID
  const gtmId = document.getElementById('gtmConfig').value.trim();

  // 設置 cookie 的過期時間，這裡設置為 30 天後過期
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  // 將 GTM ID 儲存在 cookie 中
  document.cookie = "gtmId=" + gtmId + ";expires=" + expirationDate.toUTCString() + ";path=/";

  Swal.fire({
    title: 'GTM 設定成功',
    text: 'success',
    type: 'success',
    onClose: () => {
      // 重整畫面
      location.reload()
    }
  })
}

// 登入函數
function login(event) {
  // 取消瀏覽器重整畫面的行為
  event.preventDefault();
  // 取得填寫Email, 密碼
  const email = document.getElementById('loginEmail').value,
    password = document.getElementById('loginPassword').value

  // 設置 cookie 的過期時間，這裡設置為 30 天後過期
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  // 將 email 和 password 儲存在 cookie 中
  document.cookie = "email=" + email + ";expires=" + expirationDate.toUTCString() + ";path=/";
  document.cookie = "password=" + password + ";expires=" + expirationDate.toUTCString() + ";path=/";

  Swal.fire({
    title: '登入成功',
    text: 'success',
    type: 'success',
    onClose: () => {
      // 重整畫面
      location.reload()
    }
  })
}


// 登出函數
function logout() {
  document.cookie = "email=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
  location = '/'
}

// 註冊
function signUp(event) {

  // 取消瀏覽器重整畫面的行為
  event.preventDefault();
  // 取得填寫 Email, 密碼
  const email = document.getElementById('signUpEmail').value,
    password = document.getElementById('signUpPassword').value

  // 設置 cookie 的過期時間，這裡設置為 30 天後過期
  var expirationDate = new Date();
  expirationDate.setDate(expirationDate.getDate() + 30);

  // 將 email 和 password 儲存在 cookie 中
  document.cookie = "email=" + email + ";expires=" + expirationDate.toUTCString() + ";path=/";
  document.cookie = "password=" + password + ";expires=" + expirationDate.toUTCString() + ";path=/";

  Swal.fire({
    title: '註冊成功',
    text: 'success',
    type: 'success',
    onClose: () => {
      // 重整畫面
      location.reload()
    }
  })
}
