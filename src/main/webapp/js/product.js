const getProducts = async () => {
const res = await fetch("json/products.json");
    const data = await res.json();
    const products = data.products;
    return products;

  };


  
  // Display Product
  const displayProducts = (products, center) => {
    let display = products.map(
      ({ title, image, price }) => `<div class="product">
            <div class="product-header">
              <img src=${image} id="imgProduct" alt="product">
            </div>
            <div class="product-footer">
              <h3 id="titleProduct">${title}</h3>
              <div class="product-price">
                <h4 id="priceProduct">IDR${price}</h4>
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
          </div>`
    );
  
    display = display.join("");
    center.innerHTML = display;
  };


const productCenter = document.querySelector(".product-center");
const latestCenter = document.querySelector(".latest-center");
const recentCenter = document.querySelector(".recent-center");
const shopCenter = document.querySelector(".shop-center");

const filterArray = async type => {
  const products = await getProducts();
  return products.filter(product => product.category === type);
};

window.addEventListener("DOMContentLoaded", async () => {
  const products = await getProducts();
  const defaultProducts = await filterArray("trend");
  const latestProducts = await filterArray("latest");
  const recentProducts = await filterArray("recent");
  displayProducts(defaultProducts, productCenter);
  displayProducts(latestProducts, latestCenter);
  displayProducts(recentProducts, recentCenter);
  displayProducts(products, shopCenter);
});



function addToCart(){
    var titleProduct = document.getElementById("titleProduct").value;
    var priceProduct = document.getElementById("priceProduct").value;

    var user = firebase.auth().currentUser;
    var uid;
    if (user != null) {
        uid = user.uid;
    }
    var firebaseRef = firebase.database().ref('/cart');
    var userData = {
        titleProduct: titleProduct,
        priceProduct: priceProduct
    }
    firebaseRef.child(uid).push(userData);
    swal('Added to cart',
    ).then((value) => {
        setTimeout(function(){
            window.location.replace("product.jsp");
        }, 1000)
    });
}