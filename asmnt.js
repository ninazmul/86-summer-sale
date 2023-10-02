function cardOne(cardName, price){
    totalItems++;
    totalPrice += price;

    updateTotalFields();
    addToTotalItem('K. Accessories 1')
}
function cardTwo(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('K. Accessories 2')
}
function cardThree(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Home Cooker')
}
function cardFour(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Sports Back Cap')
}
function cardFive(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Full Jersey Set')
}
function cardSix(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Sports cates')
}
function cardSeven(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Single Relax Chair')
}
function cardEight(cardName, price){ 
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Children play')
}
function cardNine(cardName, price){
  totalItems++;
  totalPrice += price;

  updateTotalFields();
  addToTotalItem('Flexible Sofa')
}


function addToTotalItem(itemName){
    console.log(itemName)
    const itemEntry = document.getElementById('item-entry');

    const count = itemEntry.childElementCount;

    const p = document.createElement('p');
    p.classList.add('my-4')
    p.innerHTML = `${count+1}. ${itemName}`;

    itemEntry.appendChild(p);
}

let totalItems = 0;
let totalPrice = 0;
let discountAmount = 0;

function addToTotal(cardName, price) {
    totalItems++;
    totalPrice += price;
    updateTotalFields();
    updateButtonStates();
}

function updateTotalFields() {
    document.getElementById("totalItems").textContent = totalItems;
    document.getElementById("total-price").textContent = totalPrice.toFixed(2);
    updateTotalPayment();
}

function updateTotalPayment() {
  const totalPayment = totalPrice - discountAmount;
    document.getElementById("all-total").textContent = totalPayment.toFixed(2);
    updateButtonStates();
}

function useCode() {
  const promoCodeInput = document.getElementById('promoCodeInput');
  promoCodeInput.value = 'SELL200';
  updateButtonStates();
  updateDiscount();
  updateTotalPayment();
}

function applyCode() {
  const promoCodeInput = document.getElementById('promoCodeInput').value;

  if (promoCodeInput === 'SELL200') {
      if (totalPrice >= 200) {
          const discountPercentage = 0.2; // 20%
          discountAmount = totalPrice * discountPercentage;
          document.getElementById("discount-price").textContent = discountAmount.toFixed(2);
          updateTotalPayment();
      } else {
          window.alert("Discount can only be applied when the item total is TK 200 or more.");
      }
      
      document.getElementById('promoCodeInput').value = "";
  } else {
      window.alert("Invalid promo code. Please enter a valid code.");
      document.getElementById('promoCodeInput').value = "";
  }
}

function updateButtonStates() {
  const makePurchaseButton = document.getElementById("buy-btn");
  const applyCodeButton = document.getElementById("applyCodeButton");
  const totalPayment = parseFloat(document.getElementById("all-total").textContent);
  const itemTotal = parseFloat(document.getElementById("total-price").textContent);

  if (totalPayment <= 0) {
      makePurchaseButton.disabled = true;
  } else {
      makePurchaseButton.disabled = false;
  }

  if (itemTotal < 200) {
      applyCodeButton.disabled = true;
  } else {
      applyCodeButton.disabled = false;
  }
}

function goHome() {
  totalItems = 0;
  totalPrice = 0;
  discountAmount = 0;

  document.getElementById("totalItems").textContent = "";
  document.getElementById("item-entry").textContent = "";
  document.getElementById("total-price").textContent = "00.00";
  document.getElementById("discount-price").textContent = "00.00";
  document.getElementById("all-total").textContent = "00.00";
  
  const modal = document.getElementById("my_modal_1");
  if (modal.open) {
      modal.close();
  }
  updateButtonStates();
}


