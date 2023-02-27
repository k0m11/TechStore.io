let shop = document.querySelector("#shop")

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return (shop.innerHTML = HomePageCarts.map((x)=>{
        let {id, name, price, img} = x
        return `
        <div class="card" width="200" id="${id}">
        <div class="info-top">
          <p>${name}</p>
        </div>
        <a href="#"><img width="250" src=${img}  alt=""></a>
        <div class="info-bottom-iMac">
          <p>${price}</p>
          <div class="buy" id="${id}" onclick="increment(id)">
              <p>BUY</p>
          </div>
        </div>
      </div>
        `
    }).join(""))
}

generateShop()

let increment = (id) => {
  let selected = id
  let search = basket.find((x)=> x.id === selected.id)

  if(search === undefined){
    basket.push({
        id: selected.id,
        item: 1
    })
  }
  else {
    search.item += 1
  }
  
  update(selected.id)

  localStorage.setItem("data", JSON.stringify(basket))
}

let update = (id) => {
    let search = basket.find((x)=> x.id === id)
    // Определенный ID Который нужно изменять
    document.querySelector("#AllProd").innerHTML = search.item
    calculation()
}

let calculation = ()=> {
  let cartIcon = document.querySelector("#AllProd")
  
  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y)=>x+y,0)
}

calculation()
