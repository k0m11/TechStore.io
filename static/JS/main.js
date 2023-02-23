let shop = document.querySelector("#shop")

let generateShop = () => {
    return (shop.innerHTML = AllDataCarts.map((x)=>{
        let {id, name, price, img} = x
        return `
        <div class="card" width="200px" id="${id}">
        <div class="info-top">
          <p>${name}</p>
        </div>
        <a href="#"><img height="400px" src=${img}  alt=""></a>
        <div class="info-bottom-iMac">
          <p>${price}</p>
          <div class="buy">
            <a href="#" onclick="Progress()">
              <p>BUY</p>
            </a>
          </div>
        </div>
      </div>
        `
    }).join(""))
}

generateShop()
console.log("sus")
