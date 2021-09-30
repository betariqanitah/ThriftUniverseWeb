var products =[
    {
	  id:7,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic8.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:8,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic7.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:10,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic13.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:11,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic10.png",
      cart:false,
      quantity:1,
      total:0
    }
  ];

var productsPop =[
    {
      id:6,	
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic6.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:7,	
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic14.png",
      cart:false,
      quantity:1,
      total:0
    },
  ];

(()=>{
    for (let index = 0; index < products.length; index++) {
        document.getElementById('newProduct').innerHTML+=`
             <div class="product">
            <div class="product-header">
              <img src=${products[index].image} alt="product">
            </div>
            <div class="product-footer">
              <h3>${products[index].title}</h3>
              <div class="product-price">
                <h4>IDR${products[index].price}</h4>
              </div>
            </div>
            <ul>
              <li>
                <a href="productDetails.html">
                  <i class="bx bx-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-heart"></i>
                </a>
              </li>
            </ul>
          </div>
    
        `;
        
    }
})();

(()=>{
    for (let index = 0; index < productsPop.length; index++) {
        document.getElementById('popProduct').innerHTML+=`
             <div class="product">
            <div class="product-header">
              <img src=${products[index].image} alt="product">
            </div>
            <div class="product-footer">
              <h3>${products[index].title}</h3>
              <div class="product-price">
                <h4>IDR${products[index].price}</h4>
              </div>
            </div>
            <ul>
              <li>
                <a href="productDetails.html">
                  <i class="bx bx-search"></i>
                </a>
              </li>
              <li>
                <a href="#">
                  <i class="bx bx-heart"></i>
                </a>
              </li>
            </ul>
          </div>
    
        `;
        
    }
})();
