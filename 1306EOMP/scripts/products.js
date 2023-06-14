function addItemsToTable() {
    var tableBody = document.getElementById("adminTableBody");
    clearTable(); // Clear existing table rows
    var products = JSON.parse(localStorage.getItem('products')) || [];
  
    for (var i = 0; i < products.length; i++) {
      var row = tableBody.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);
  
      cell1.innerHTML = products[i].id;
      cell2.innerHTML = products[i].name;
      cell3.innerHTML = products[i].description;
      cell4.innerHTML = products[i].price;
  
      // Add Edit and Delete buttons if needed
      // ...
    }
  }
  
  function clearTable() {
    var tableBody = document.getElementById("adminTableBody");
    tableBody.innerHTML = "";
  }
  
  function addItemsToProductsContainer() {
    var productsContainer = document.getElementById("productsContainer");
    clearProductsContainer(); // Clear existing cards
    var products = JSON.parse(localStorage.getItem('products')) || [];
  
    for (var i = 0; i < products.length; i++) {
      var product = products[i];
  
      var card = document.createElement("div");
      card.classList.add("card");
      card.style.width = "18rem";
  
      var cardBody = document.createElement("div");
      cardBody.classList.add("card-body");
  
      cardBody.innerHTML =
        "<h5 class='card-title'>" + product.name + "</h5>" +
        "<p class='card-text'><strong>ID:</strong> " + product.id + "</p>" +
        "<p class='card-text'><strong>Description:</strong> " + product.description + "</p>" +
        "<p class='card-text'><strong>Price:</strong> $" + product.price + "</p>";
  
      card.appendChild(cardBody);
      productsContainer.appendChild(card);
    }
  }
  
  function clearProductsContainer() {
    var productsContainer = document.getElementById("productsContainer");
    productsContainer.innerHTML = "";
  }
  
  function saveProduct(product) {
    var products = JSON.parse(localStorage.getItem('products')) || [];
    products.push(product);
    localStorage.setItem('products', JSON.stringify(products));
  }
  
  function addProduct(event) {
    event.preventDefault();
  
    var id = document.getElementById("id").value;
    var name = document.getElementById("name").value;
    var description = document.getElementById("description").value;
    var price = document.getElementById("price").value;
  
    var product = {
      id: id,
      name: name,
      description: description,
      price: price
    };
  
    saveProduct(product);
    clearForm();
    location.reload();
  }
  
  function clearForm() {
    document.getElementById("id").value = "";
    document.getElementById("name").value = "";
    document.getElementById("description").value = "";
    document.getElementById("price").value = "";
  }
  
  window.onload = function() {
    var products = JSON.parse(localStorage.getItem('products')) || [];
    addItemsToTable();
    addItemsToProductsContainer();
  };
  