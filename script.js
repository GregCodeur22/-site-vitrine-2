let arr = ["samsung1", "samsung2", "samsung3"];
let nav = document.querySelector(".nav");
let input = document.getElementById("input");
let btnAdd = document.getElementById("btnAdd");
let btnDelete = document.getElementById("btnDelete");
let panier = document.querySelector(".panier");
let logo = document.getElementById("logo");
let arr2 = [];

let removeIphone = () => {
  let lis = document.querySelectorAll("li");
  lis.forEach((lis) => {
    lis.remove();
  });
};
removeIphone();

let addItems = () => {
  nav.innerHTML += arr
    .map(
      (li) =>
        `
      <ul class="liste">
        <li><a href="#" onclick="addToCard('${li}')" ('${li}')" onmousemove="mouve('${li}')">${li}</a></li>
      </ul>
    `
    )
    .join("");
};
addItems();

let initialisation = () => {
  removeIphone();
  addItems();
};

let addItemArr = () => {
  btnAdd.addEventListener("click", () => {
    if (arr.includes(input.value)) {
      alert("le produit existe déja");
    } else {
      arr.push(input.value);
      console.log(arr);
    }
    initialisation();
  });
};
addItemArr();

let deleteItems = () => {
  btnDelete.addEventListener("click", () => {
    for (let i = 0; i < arr.length; i++) {
      let produits = arr[i];
      if (produits === input.value) {
        arr.splice(i, 1);
      }
      console.log(produits);
      initialisation();
    }
  });
};
deleteItems();

function mouve(name) {
  input.value = name;
}

function addToCard(name) {
  if (arr2.includes(name)) {
    alert("vous possédé déja ce produit dans votre panier ");
  } else {
    arr2.push(name);
    console.log(arr2);
  }

  if (arr2.length > 1) {
    panier.textContent = `il y a ${arr2.length} produits dans le panier`;
  } else {
    panier.textContent = `il y a ${arr2.length} produit dans le panier`;
  }
}

logo.addEventListener("click", () => {
  panier.textContent = "il y à 0 produits dans le panier";
  arr2 = [];
});
