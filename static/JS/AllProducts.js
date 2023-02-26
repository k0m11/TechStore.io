let products = document.querySelector("#prod")

let generateShop = () => {
    return(products.innerHTML = AllDataCarts.map((x)=>{
        let {id,name,price,img} = x
        return `
        <div class="ProdCart">
        <img src="${img}" width="230px" alt="#">
        <div class="about">
        <div class="Title">
            <p>${name}</p>
        </div>
        <div class="prices">
            <p>${price}</p>
        </div>
        <div class="buy">
        <a href="#" onclick="Progress()">
          <p>BUY</p>
        </a>
        </div>
        </div>
        </div> 
        `
    }).join(" "))
}

generateShop()