window.onload = function () {

var card1_element = document.getElementById("card1");
var card2_element = document.getElementById("card2");
var card3_element = document.getElementById("card3");
var card4_element = document.getElementById("card4");
var card5_element = document.getElementById("card5");
var card6_element = document.getElementById("card6");
var card7_element = document.getElementById("card7");
var card8_element = document.getElementById("card8");
var card9_element = document.getElementById("card9");

//console.log(card1_element);

card1_element.style.borderColor="#f6f6f6";
card2_element.style.borderColor="#f6f6f6";
card3_element.style.borderColor="#f6f6f6";
card4_element.style.borderColor="#f6f6f6";
card5_element.style.borderColor="#f6f6f6";
card6_element.style.borderColor="#f6f6f6";
card7_element.style.borderColor="#f6f6f6";
card8_element.style.borderColor="#f6f6f6";
card9_element.style.borderColor="#f6f6f6";

  var temp = null;
  card1_element.addEventListener("click", ()=> {
    //console.log("Clicked on 1st card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card1_element;

    card1_element.style.borderColor="red";

  });

  card2_element.addEventListener("click", ()=> {
      //console.log("Clicked on 2 card...");
      //console.log(temp);
      if(temp!=null) {
        temp.style.borderColor="#f6f6f6";
      }
      temp = card2_element;

      card2_element.style.borderColor="red";

  });

  card3_element.addEventListener("click", ()=> {
    //console.log("Clicked on 3 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card3_element;


    card3_element.style.borderColor="red";

  });

  card4_element.addEventListener("click", ()=> {
    //console.log("Clicked on 4 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card4_element;

    card4_element.style.borderColor="red";

  });

  card5_element.addEventListener("click", ()=> {
    //console.log("Clicked on 5 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card5_element;
    card5_element.style.borderColor="red";

  });

  card6_element.addEventListener("click", ()=> {
    //console.log("Clicked on 6 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card6_element;
    card6_element.style.borderColor="red";

  });

  card7_element.addEventListener("click", ()=> {
    //console.log("Clicked on 7 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card7_element;
    card7_element.style.borderColor="red";

  });

  card8_element.addEventListener("click", ()=> {
    //console.log("Clicked on 8 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card8_element;

    card8_element.style.borderColor="red";

  });

  card9_element.addEventListener("click", ()=> {
    //console.log("Clicked on 9 card...");
    //console.log(temp);
    if(temp!=null) {
      temp.style.borderColor="#f6f6f6";
    }
    temp = card9_element;

    card9_element.style.borderColor="red";

  });

};




function pluscrousels(n) {
  showcrousels(crouselIndex += n);
  showcrousels2(crouselIndex2 += n);
  showcrousels3(crouselIndex3 += n);
}
function currentcrousel(n) {
  showcrousels(crouselIndex = n);
  showcrousels2(crouselIndex2 = n);
  showcrousels3(crouselIndex3 = n);
}
function showcrousels(n) {
  var i;
  var crousels = document.getElementsByClassName("crousel1");
  if (n > crousels.length) {crouselIndex = 1}
  if (n < 1) {crouselIndex = crousels.length}
  for (i = 0; i < crousels.length; i++) {
      crousels[i].style.display = "none";
  }
  crousels[crouselIndex-1].style.display = "block";
}
function showcrousels2(n) {
  var i;
  var crousels = document.getElementsByClassName("crousel2");
  if (n > crousels.length) {crouselIndex2 = 1}
  if (n < 1) {crouselIndex2 = crousels.length}
  for (i = 0; i < crousels.length; i++) {
      crousels[i].style.display = "none";
  }
  crousels[crouselIndex2-1].style.display = "block";
}
function showcrousels3(n) {
  var i;
  var crousels = document.getElementsByClassName("crousel3");
  if (n > crousels.length) {crouselIndex3 = 1}
  if (n < 1) {crouselIndex3 = crousels.length}
  for (i = 0; i < crousels.length; i++) {
      crousels[i].style.display = "none";
  }
  crousels[crouselIndex3-1].style.display = "block";
}
