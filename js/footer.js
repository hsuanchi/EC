(function () {
    const footer = document.createElement('footer');
    footer.innerHTML = `
      <div class="container">
        <div class="row pt-5 pb-4">
          <div class="col-6 col-md" style="text-align:center;">
            <h3 class="setfont">About</h3>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="/">Made with ☕ by Max</a></li>
            </ul>
          </div>
          <div class="col-6 col-md" style="text-align:center;">
            <h3 class="setfont">Explore</h3>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" target="_blank" href="https://maxlist.xyz/">Blog</a></li>
              <li><a class="text-muted" target="_blank"
                  href="https://www.facebook.com/profile.php?id=100002148309560">Facebook</a></li>
              <li><a class="text-muted" target="_blank" href="https://github.com/hsuanchi">GitHub</a></li>
            </ul>
          </div>
          <div class="col-12 col-md" style="text-align:center;">
            <img class="mb-2" src="/img/max.png" alt="max_icon" width="24" height="24">
            <small class="d-block mb-3 text-muted">© since 2018</small>
          </div>
        </div>
      </div>
    `;
    document.body.appendChild(footer);
})()
