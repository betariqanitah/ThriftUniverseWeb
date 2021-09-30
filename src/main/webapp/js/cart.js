//BUY
function buy(){
    var productsFirebase=[];
    for (let index = 0; index < products.length; index++) {
        if (products[index].cart) {
            var product ={
                name: products[index].title,
                price: products[index].price,
                quantity: products[index].quantity,
                total: products[index].total,
            }
            productsFirebase.push(product);
        }
        
    }
    firebase.database().ref('cart').push({
        total:total(),
        products: productsFirebase
    });
     swal({
            type: 'successfull',
            title: 'Success',
            text: 'Payment Success', 
        }).then((value) => {
                setTimeout(function(){
                    window.location.replace("product.html");
                }, 1000)
            });
    
}

var products =[
    {
	  id:1,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic1.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:2,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic2.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:3,	
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic3.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
 	  id:4,	
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic4.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:5,
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic5.png",
      cart:false,
      quantity:1,
      total:0
    },
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
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic14.png",
      cart:false,
      quantity:1,
      total:0
    },
    {
	  id:9,	
      title: "Crewneck",
      price: 200.000,
      image: "./images/pic1.png",
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
  
  function total() {
    let total=0;
    for (let index = 0; index < products.length; index++) {
        if (products[index].cart) {
            total+= products[index].total;
        }
        
    }
    return total
}
  
  var con=0;
  var con2=[]; //position at table
  
  function clean() {
    for (let index = 0; index < products.length; index++) {
                products[index].cart=false;
                products[index].quantity=1;
                products[index].total=0;
                con2=[];
                updateCart();
    }
}
  
  function add(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id != id || products[index].cart==true) {
            
        } else {
        	document.getElementById("shop").style.display = "none"
    		document.getElementById("tblCart").style.display = "block"
    		document.getElementById("footerProduct").style.display = "none"
            products[index].cart=true;
            con2.push(products[index].id);           
            document.getElementById('tableProducts').innerHTML+=`
            <tr>
            <th scope="row">${con+1}</th>
            <td><button class="btn btn-danger" onclick="remove(${products[index].id})
            ">X</button></td>
            <td><img style="width: 5rem;" src="${products[index].image}"></td>
            <td>${products[index].title}</td>
            <td>
            <button class="btn btn-primary" onclick="reduceAmount(${products[index].id})
            ">-</button>
            <input style="width: 2rem;" id="${products[index].id}" value="${products
            [index].quantity}" disabled>
            <button class="btn btn-primary" onclick="addAmount(${products[index].id})">
            +</button>
            </td>
            <td>IDR ${products[index].price*products[index].quantity}.000</td>
            </tr>
            `

            con++;
            products[index].total=products[index].price*products[index].quantity
            
        }
        
    }
    document.getElementById('total').innerHTML=`
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <h4>Total: </h4>
        </td>
        <td>
             IDR ${total()}.00
        </td>
        </tr>
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button onclick="hideCart()" class="btn btn-success">Back</button>
        <button onclick="buy()" class="btn btn-success">Buy</button>
        </td>
        </tr>
    `
}

function hideCart(){
    document.getElementById("shop").style.display = "block"
   	document.getElementById("tblCart").style.display = "none"
}

function remove(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            products[index].cart =false;
            products[index].total =0;
            products[index].quantity =1;
            total();
            for (let index2 = 0; index2 < con2.length; index2++) {
                if (products[index].id == con2[index2]) {
                    con2.splice(index2,1);
                } else {
                    
                }
                
            }
            updateCart();
        }else{
            updateCart();
        }
        
    }
}

function updateCart() {
    con=0;
    
    document.getElementById('tableProducts').innerHTML='';
    for (let index = 0; index < con2.length; index++) {
        var position = con2[index];
        for (let index3 = 0; index3 < products.length; index3++) {
                if (position == products[index3].id) {
                    document.getElementById('tableProducts').innerHTML+=`
                    <tr>
                    <th scope="row">${con+1}</th>
                    <td><button class="btn btn-danger" onclick="remove(${products[index3].id})
                    ">X</button></td>
                    <td><img style="width: 5rem;" src="${products[index3].image}"></td>
                    <td>${products[index3].title}</td>
                    <td>
                    <button class="btn btn-primary" onclick="reduceAmount(${products[index3].id})
                    ">-</button>
                    <input style="width: 2rem;" id="${products[index3].id}" value="${products
                    [index3].quantity}" disabled>
                    <button class="btn btn-primary" onclick="addAmount(${products[index3].id})">+</button>
                    </td>
                    <td>IDR ${products[index3].price*products[index3].quantity}.000</td>
                    </tr>
                    `
                    products[index3].total= products[index3].price*products[index3].quantity
                     
                } else {
                    
                }
            
        }
        con=con+1;
        
    }
    if (total()==0) {
        document.getElementById('total').innerHTML='';
    } else {
        document.getElementById('total').innerHTML=`
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td>
            <h4>Total: </h4>
        </td>
        <td>
             IDR ${total()}.000
        </td>
        </tr>
        <tr>
        <th scope="row"></th>
        <td></td>
        <td></td>
        <td></td>
        <td></td>
        <td>
        <button onclick="hideCart()" class="btn btn-success">Back</button>
        <button onclick="buy()" class="btn btn-success">Buy</button>
        </td>
        </tr>
    `
    }
}

function reduceAmount(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            if (products[index].quantity >1) {
                products[index].quantity = products[index].quantity-1;
                updateCart();
            } else {
                
            }
        } else {
            
        }
        
    }
}

function addAmount(id) {
    for (let index = 0; index < products.length; index++) {
        if (products[index].id == id) {
            if (products[index].quantity >0) {
                products[index].quantity = products[index].quantity+1;
                updateCart();
            } else {
                
            }
        } else {
            
        }
        
    }
}

(()=>{
    for (let index = 0; index < products.length; index++) {
        document.getElementById('allProducts').innerHTML+=`
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
              <li>
                <a type="button" onclick="add(${products[index].id})">
                  <i class="bx bx-shopping-bag"></i>
                </a>
              </li>
            </ul>
          </div>
    
        `;
        
    }
})();

