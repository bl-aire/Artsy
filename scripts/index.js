
/*let slideIndex = 0;
//showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  //let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  //for (i = 0; i < dots.length; i++) {
  //dots[i].className = dots[i].className.replace(" active", "");
  //}
  slides[slideIndex - 1].style.display = "block";
  //dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}*/




let img = document.getElementById("test");/*
let name = document.getElementById("");
let price = document.getElementById("");
*/

let carouselUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/439bc2dd8693b490539eae236918f4a53dd17457/carousel.json";
let auctionUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/auction.json";
let dropsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/drops.json";
let productsUrl = "https://gist.githubusercontent.com/eniiku/65a95533de1f005eee35d5eb91f3e141/raw/c7188e070a8670a86883ff57224dcad277814761/products.json";

window.onload = (event) => {

  fetch(productsUrl)
      .then(res => res.json())
      .then(result => {
        console.log(result);
        img.src = result.products[0].url;
      })
      .catch(err=>console.log(err))


  fetch(auctionUrl)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        /* img.src = result.message */
      })
      .catch(err=>console.log(err))


      fetch(dropsUrl)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        /* img.src = result.message */
      })
      .catch(err=>console.log(err))


      fetch(carouselUrl)
      .then(res => res.json())
      .then(result => {
        console.log(result)
        /* img.src = result.message */
      })
      .catch(err=>console.log(err))
};


