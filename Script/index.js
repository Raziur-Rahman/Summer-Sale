// Modal Button Actions 

document.getElementById('modal-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})

const cartList = document.getElementById("cart-list");
function addToCart(target){
    const cardName = target.childNodes[3].childNodes[3].innerText;
    const li = document.createElement('li');
    li.innerText = cardName;
    cartList.appendChild(li);
    // target.childNodes[3].childNodes[5].childNodes[0].innerText
    console.log(cardName);
}