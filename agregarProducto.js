
  const products = document.querySelectorAll('.addToCart');
  const thead = document.querySelector('table tbody');


  products.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const item = e.target.parentNode
        const productName = item.querySelector(".item-title").textContent
        const productPrice = item.querySelector(".item-price").textContent

        console.log(item)
        console.log(productName)
        console.log(productPrice)

        const tr = document.createElement('tr');
        const tdName = document.createElement('td');
        const tdPrice = document.createElement('td')

        const tdQty = document.createElement('td')
        const inputQty = document.createElement("input")
        inputQty.type = 'text'
        inputQty.classList.add('form-control')

        tdQty.append(inputQty)

        tdName.textContent = productName
        tdPrice.textContent = productPrice

        tr.append(tdName)
        tr.append(tdPrice)
        tr.append(tdQty)
        thead.append(tr)
      })
  })

  function addDeleteBtn() {
    const deleteBtn = document.createElement("button");

    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";

    deleteBtn.addEventListener("click", (e) => {
      const item = e.target.parentElement;
      ul.removeChild(item);

      const items = document.querySelectorAll("li");

      if (items.length === 0) {
        empty.style.display = "block";
      }
    });

    return deleteBtn;
  }