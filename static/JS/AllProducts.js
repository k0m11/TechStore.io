let products = document.querySelector("#prod")

let basket = JSON.parse(localStorage.getItem("data")) || []

let generateShop = () => {
    return(products.innerHTML = AllDataCarts.map((x)=>{
        let {id,name,price,img} = x
        return `
        <div class="ProdCart" id="${id}">
        <img src="${img}" width="230px" alt="#">
        <div class="about">
        <div class="Title">
            <p>${name}</p>
        </div>
        <div class="prices">
            <p>${price}</p>
        </div>
        <div class="buy" onclick="increment(id)">
          <p>BUY</p>
        </div>
        </div>
        </div> 
        `
    }).join(" "))
}

generateShop()

let increment = (id) => {
  let selected = id

  let search = basket.find((x)=> id === selected.id)

  if (search === undefined){
    basket.push({
      item: 1,
      id: selected.id
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

  document.querySelector("#AllProd").innerHTML = search.item
  calculation()
}

let calculation = () => {
  let cartIcon = document.querySelector("#AllProd")

  cartIcon.innerHTML = basket.map((x)=>x.item).reduce((x,y) => x+y,0)
}

calculation()
