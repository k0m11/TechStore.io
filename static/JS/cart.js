let shoppingCart = document.querySelector("#shop-cart")

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateCart = ()=>{
    if(basket.length !== 0){
        console.log(basket)
        return shoppingCart.innerHTML = basket
        .map((x)=> {
            let {id,item} = x
            // Проверка если ID из Basket Соответствует с ID из Data.js
            let search = AllDataCarts.find((y)=>y.id === id) || []
            let {img, name, price} = search
            return `
            <div class="cart-item">
                <img  width="100" src="${img}" alt="">
                <div class="details">

                    <div class="title-price-x">
                        <h4 class="title-price">
                            <p>${name}</p>
                            <p class="cart-item-price">${"$ " + price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg"></i>
                    </div>

                    <div class="cart-buttons"></div>
                        <div class="buttons">
                        <button onclick="decrement(${id})" id="minus">-</button>
                        <div id=${id} class="quantity">${item}</div>
                        <button onclick="increment(${id})" id="plus">+</button>
                    </div>
                    <h3>${"$ " + item * price}</h3>
                </div>
            </div>
            `
        })
        .join("")
    }
    else {
        shoppingCart.innerHTML = ``
        label.innerHTML = `
        <h2>Cart is Empty</h2>
        <a href="index.html">
        <button class="HomeBtn">Back to Home</button>
        </a>
        `
        
    }
}
generateCart()