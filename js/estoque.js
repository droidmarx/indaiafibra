var stock = {};

function clearStock() {
  stock = {};
  localStorage.removeItem("stock"); 
  console.log("Estoque Removido do Local.");
  alert("Estoque Removido do Local.");
}

function toggleStock() {
  var stockForm = document.getElementById("stockForm");
  var openButton = document.getElementById("openButton");

  if (stockForm.style.display === "none") {
    stockForm.style.display = "block";
    openButton.innerText = "Fechar meu Estoque";
    populateStockInputs();
  } else {
    stockForm.style.display = "none";
    openButton.innerText = "Lançar itens";
  }
}

function populateStockInputs() {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    var itemId = input.id;

    if (stock.hasOwnProperty(itemId)) {
      input.value = stock[itemId];
    }
  }
}

function updateStock() {
  var inputs = document.getElementsByTagName("input");

  for (var i = 0; i < inputs.length; i++) {
    var input = inputs[i];
    stock[input.id] = parseInt(input.value);
  }

  localStorage.setItem("stock", JSON.stringify(stock));
  console.log("Estoque atualizado e armazenado no Local.");
  alert("Estoque atualizado e armazenado no Local.");
}

function showCurrentStock() {
  var savedStock = localStorage.getItem("stock");
  var stockDisplay = document.getElementById("stockDisplay");
  stockDisplay.style.display = (stockDisplay.style.display === "block") ? "none" : "block";

  if (savedStock) {
    var currentStock = JSON.parse(savedStock);
    stockDisplay.innerText = "Estoque Atual:\n\n";

    for (var item in currentStock) {
      if (currentStock.hasOwnProperty(item)) {
        var formattedItem = item.charAt(0).toUpperCase() + item.slice(1);
        stockDisplay.innerText +=
          formattedItem + ": " + currentStock[item] + "\n";
      }
    }
  } else {
    stockDisplay.innerText = "Nenhum estoque encontrado.";
  }
}

var savedStock = localStorage.getItem("stock");
if (savedStock) {
  stock = JSON.parse(savedStock);
}

function copyToClipboard() {
  var stockDisplay = document.getElementById("stockDisplay");
  var stockText = stockDisplay.innerText;

  navigator.clipboard
    .writeText(stockText)
    .then(function () {
      console.log("Estoque atual copiado para a área de transferência.");
      alert("Estoque atual copiado para a área de transferência.");
    })
    .catch(function (error) {
      console.error("Erro ao copiar o estoque: ", error);
      alert("Erro ao copiar o estoque: ", error);
    });
}

const btnMobile = document.getElementById("btn-mobile");

function toggleMenu(event) {
  if (event.type === "touchstart") event.preventDefault();
  const nav = document.getElementById("nav");
  nav.classList.toggle("active");
  const active = nav.classList.contains("active");
  event.currentTarget.setAttribute("aria-expanded", active);
  if (active) {
    event.currentTarget.setAttribute("aria-label", "Fechar Menu");
  } else {
    event.currentTarget.setAttribute("aria-label", "Abrir Menu");
  }
}

btnMobile.addEventListener("click", toggleMenu);
btnMobile.addEventListener("touchstart", toggleMenu);

if (localStorage.getItem("token") == null) {
  alert("Você precisa estar logado para acessar essa página");
  window.location.href = "./index.html";
}

function handleLogout() {
  localStorage.removeItem("token");
  setTimeout(() => {
    window.location.href = "./index.html";
  }, 200);
}

