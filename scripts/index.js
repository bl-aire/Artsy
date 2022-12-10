let img = document.getElementById("img");/*
let name = document.getElementById("");
let price = document.getElementById("");
*/

  let carouselUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";
  let auctionUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json";
  let dropsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json";
  let productsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json";

  // Defining async function
  async function getapi(productsUrl) {

    // Storing response
    const response = await fetch(productsUrl);

    // Storing data in form of JSON
    var data = await response.json();
    console.log(data);
    //if (response) {
      //hideloader();
    //}
    show(data);

  }
  // Calling that async function
  getapi(productsUrl);

  // Function to hide the loader
  //function hideloader() {
    //.getElementById('loading').style.display = 'none';
  //}
  // Function to define innerHTML for HTML table
  function show(data) {
    /*let card =
      `<div>
        <img id="img" src="" alt="">
        <p id="name">hi</p>
        <h3 id="price"></h3>
      </div>`;*/
      let card = ''

    // Loop to access all rows
    for (let a of data.products) {
      card += 
      `<div class="col-md-4">
        <img id="img" src= ${a.url} alt="">
        <p id="name">${a.name}</p>
        <h3 id="price">$${a.price.usd}</h3>
      </div>`;
    }
    // Setting innerHTML as tab variable
    document.getElementById("products").innerHTML = card;
  }
//};


