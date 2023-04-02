function renderCartTable() {
  const cart = JSON.parse(getCookie('cart') || '[]');

  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML = '';

  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const {
      name,
      price,
      quantity,
      image,
      id,
    } = cart[i];
    console.log(name, price, quantity, image, id)

    const tr = document.createElement('tr');

    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = image;
    img.width = 40;
    img.height = 40;
    imgTd.appendChild(img);
    tr.appendChild(imgTd);

    const idTd = document.createElement('td');
    // idTd.style.display = 'none';
    idTd.classList.add('text-center');
    idTd.textContent = id;
    tr.appendChild(idTd);

    const nameTd = document.createElement('td');
    nameTd.classList.add('text-center');
    nameTd.textContent = name;
    tr.appendChild(nameTd);

    const availTd = document.createElement('td');
    availTd.classList.add('text-center');
    availTd.textContent = 'In stock';
    tr.appendChild(availTd);

    const qtyTd = document.createElement('td');
    qtyTd.classList.add('text-center');
    qtyTd.textContent = quantity;
    tr.appendChild(qtyTd);

    price_str = price.toString().replace(/(?!^)(?=(\d{3})+($|\.))/g, ",");
    const priceTd = document.createElement('td');
    priceTd.classList.add('number', 'text-center');
    priceTd.textContent = price_str;
    tr.appendChild(priceTd);

    const removeTd = document.createElement('td');
    removeTd.classList.add('text-right');
    const removeBtn = document.createElement('button');
    removeBtn.classList.add('remove', 'btn', 'btn-sm', 'btn-danger');
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.addEventListener('click', () => {
      removeCartItem(name);
      renderCartTable();
    });
    removeTd.appendChild(removeBtn);
    tr.appendChild(removeTd);



    tbody.appendChild(tr);

    subtotal += price * quantity;
    console.log(subtotal)
  }

  subtotal_str = subtotal.toString().replace(/(?!^)(?=(\d{3})+($|\.))/g, ",");
  const subTotalRow = document.createElement('tr');
  subTotalRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Sub-Total (NTD)</td>
    <td class="number text-right">${subtotal_str}</td>
  `;
  tbody.appendChild(subTotalRow);

  const shippingRow = document.createElement('tr');
  shippingRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Shipping (NTD)</td>
    <td class="text-right">0</td>
  `;
  tbody.appendChild(shippingRow);

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><strong>Total (NTD)</strong></td>
    <td class="number text-right"><strong>${subtotal_str}</strong></td>
  `;
  tbody.appendChild(totalRow);
}

function renderSuccessTable() {
  const cart = JSON.parse(getCookie('cart') || '[]');

  const tbody = document.querySelector('.table tbody');
  tbody.innerHTML = '';

  let subtotal = 0;

  for (let i = 0; i < cart.length; i++) {
    const {
      name,
      price,
      quantity,
      image,
      id
    } = cart[i];
    console.log(name, price, quantity, image, id)

    const tr = document.createElement('tr');

    const imgTd = document.createElement('td');
    const img = document.createElement('img');
    img.src = image;
    img.width = 40;
    img.height = 40;
    imgTd.appendChild(img);
    tr.appendChild(imgTd);

    const idTd = document.createElement('td');
    idTd.classList.add('text-center');
    idTd.textContent = id;
    tr.appendChild(idTd);

    const nameTd = document.createElement('td');
    nameTd.classList.add('text-center');
    nameTd.textContent = name;
    tr.appendChild(nameTd);

    const availTd = document.createElement('td');
    availTd.classList.add('text-center');
    availTd.textContent = 'In stock';
    tr.appendChild(availTd);

    const qtyTd = document.createElement('td');
    qtyTd.classList.add('text-center');
    qtyTd.textContent = quantity;
    tr.appendChild(qtyTd);

    price_str = price.toString().replace(/(?!^)(?=(\d{3})+($|\.))/g, ",");
    const priceTd = document.createElement('td');
    priceTd.classList.add('number', 'text-center');
    priceTd.textContent = price_str;
    tr.appendChild(priceTd);

    tbody.appendChild(tr);

    subtotal += price * quantity;
    console.log(subtotal)
  }

  subtotal_str = subtotal.toString().replace(/(?!^)(?=(\d{3})+($|\.))/g, ",");
  const subTotalRow = document.createElement('tr');
  subTotalRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Sub-Total (NTD)</td>
    <td class="number text-center">${subtotal_str}</td>
  `;
  tbody.appendChild(subTotalRow);

  const shippingRow = document.createElement('tr');
  shippingRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>Shipping (NTD)</td>
    <td class="text-center">0</td>
  `;
  tbody.appendChild(shippingRow);

  const totalRow = document.createElement('tr');
  totalRow.innerHTML = `
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td><strong>Total (NTD)</strong></td>
    <td class="number text-center"><strong>${subtotal_str}</strong></td>
  `;
  tbody.appendChild(totalRow);
}
