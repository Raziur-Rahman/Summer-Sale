// Univarsel Script Works by Default

let applyBtn = document.getElementById('coupon-btn');
applyBtn.disabled = true;
let makePurchase = document.getElementById('makePurchase-btn');
makePurchase.disabled = true;
// modals script 
document.getElementById('modal-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})

// JS functions 

function couponApply(){
    // Getting Elements by id
    const discountField = document.getElementById('discount-field');
    const priceTotalText = document.getElementById('Total-price').innerText;
    const priceTotal = parseFloat(priceTotalText);
    const totalField = document.getElementById('total');
    let total = parseFloat(totalField.innerText);
    const inputField = document.getElementById('coupon-input');
    const inputValueText = inputField.value;

    // Updating Elements value
    if(inputValueText === 'SELL200'){
        const discount = priceTotal*.20;
        total = priceTotal-discount;
        discountField.innerText = discount.toFixed(2);
        totalField.innerText = total.toFixed(2);
        inputField.value = '';
        return discount;
    }
    else{
        alert("Wrong coupon. Enter a valid Coupon")
        inputField.value = '';
    }
    

}

let totalPrice = 0;
function addToCart(target){
    const cardName = target.childNodes[3].childNodes[3].innerText;

    // Creating list item and adding

    const cartList = document.getElementById("cart-list");
    const li = document.createElement('li');
    li.innerText = cardName;
    cartList.appendChild(li);

    // Total price update
    const priceText = target.childNodes[3].childNodes[5].childNodes[0].innerText;
    const price = parseFloat(priceText);
    totalPrice += price;
    const priceTotal = document.getElementById('Total-price');
    priceTotal.innerText = totalPrice.toFixed(2);
    
    // Cart Total
    const totalField = document.getElementById('total');
    totalField.innerText = totalPrice.toFixed(2);

    // Buttons condition
    if(totalPrice >= 200){
        
        applyBtn.disabled = false;
        applyBtn.onclick = couponApply;
        
    }
    if(totalPrice > 0){
        makePurchase.disabled = false;

    }

}