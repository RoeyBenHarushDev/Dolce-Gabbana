
  function hideLoader(){
    loader.style.visibility = 'hidden';
    loader.style.opacity = 0;
    page.style.opacity = 1;
  }



document.body.onload = hideLoader;

let shippingDiscount = document.querySelector('.shippingDiscount')
exitModal.addEventListener('click', openModal)
let plus = document.querySelector('.fa-plus')
plus.addEventListener('click',openModal)
function openModal(e)
{
  shippingDiscount.classList.toggle('active')
}


  let Countact = document.querySelector('.Contact')

  if(Countact)
{
  openContact.addEventListener('click', openContact1)
  Con.addEventListener('click',openContact1)
  function openContact1(e)
  {
    Countact.classList.toggle('active')
    SideNav.classList.toggle('active')
  }
}

let SideNav = document.querySelector('.SideNav')

if(SideNav)
{
  Navigation.addEventListener('click', openNavBar)
  exitNav.addEventListener('click', openNavBar)
function openNavBar(e)
{
  SideNav.classList.toggle('active')
}

let Search = document.querySelector('.Search')

if(Search)
{
  openSearch.addEventListener('click', searchOpen)
  exitSearch.addEventListener('click', searchOpen)
function searchOpen(e)
{
  Search.classList.toggle('active')}
}
let likeItems = document.querySelector('.likeItems')

if(likeItems)
{
  openWish.addEventListener('click', wishOpen)
  CloseLikeItems.addEventListener('click', wishOpen)
function wishOpen(e)
{
  likeItems.classList.toggle('active')
}
}
let BuyItems = document.querySelector('.BuyItems')

if(BuyItems)
{
  openBag.addEventListener('click', buyOpen)
  CloseBuyItems.addEventListener('click', buyOpen)
function buyOpen(e)
{
  BuyItems.classList.toggle('active')
}
}


let Pay = document.querySelector('.PaymentPage')

  if(Pay)
{
  buttonPay.addEventListener('click', openPay)
  paymoney.addEventListener('click',openPay)
  function openPay(e)
  {
    Pay.classList.toggle('active')
    BuyItems.classList.toggle('active')
  }
}

  window.onscroll = function () {
    scrollFunction()
};
  let iconNav = document.querySelectorAll('.navbar i');
  function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
       document.querySelector('.navbar').style.position = 'sticky';
       document.querySelector('.navbar').style.top = 0;
      
       for (let i = 0; i < iconNav.length; i++)
      {
        iconNav[i].classList.add('active');
        
       }
       
  
    } else {
      for (let i = 0; i < iconNav.length; i++)
      {
        iconNav[i].classList.remove('active');
        
       }
  
    }
  
  
  }

let divLeft = document.getElementById('divLeft')
let divRight =document.getElementById('divRight')
if(divLeft,divRight)
{
  divLeft.addEventListener('click', slidernext)
  divRight.addEventListener('click', sliderback)

  let i = 0;

  let imageArray = document.querySelectorAll('.image_slider')

  function slidernext(event) {
    if( i == imageArray.length-1)
    {
        imageArray[i].style.display = 'none'

        i=0
        imageArray[i].style.display = 'block'


     return
    }
    imageArray[i].style.display = 'none'
    imageArray[i+1].style.display = 'block'
    i++

    }



function sliderback(event) {
    if( i == 0)
    {
        imageArray[i].style.display = 'none'

        i=imageArray.length-1
        imageArray[i].style.display = 'block'


     return
    }
    imageArray[i].style.display = 'none'
    imageArray[i-1].style.display = 'block'
    i--



}
}
let leftShoes = document.querySelector('#leftShoes')
let rightShoes = document.querySelector('#rightShoes')

if(leftShoes,rightShoes)
{
  leftShoes.addEventListener('click', shoesnext)
  rightShoes.addEventListener('click', shoesback)
  
  let j = 0;
  
  let shoesArray = document.querySelectorAll('.shoes_slider')
  let texttoDisplay = document.querySelectorAll('.textH4')
  let pricetoDisplay = document.querySelectorAll('.priceH4')
  
  function shoesnext(event) {
    if( j == shoesArray.length-1)
    {
      shoesArray[j].style.display = 'none'
      texttoDisplay[j].style.display = 'none'
      pricetoDisplay[j].style.display = 'none'
  
        j=0
        shoesArray[j].style.display = 'block'
        texttoDisplay[j].style.display = 'block'
        pricetoDisplay[j].style.display = 'block'
  
  
     return
    }
    shoesArray[j].style.display = 'none'
    texttoDisplay[j].style.display = 'none'
    pricetoDisplay[j].style.display = 'none'
    shoesArray[j+1].style.display = 'block'
    texttoDisplay[j+1].style.display = 'block'
    pricetoDisplay[j+1].style.display = 'block'
    j++
  
    }
  
  
  
  function shoesback(event) {
    if( j == 0)
    {
        shoesArray[j].style.display = 'none'
        texttoDisplay[j].style.display = 'none'
        pricetoDisplay[j].style.display = 'none'
  
        j = shoesArray.length-1
        shoesArray[j].style.display = 'block'
        texttoDisplay[j].style.display = 'block'
        pricetoDisplay[j].style.display = 'block'
  
  
     return
    }
    shoesArray[j].style.display = 'none'
    texttoDisplay[j].style.display = 'none'
    pricetoDisplay[j].style.display = 'none'
    shoesArray[j-1].style.display = 'block'
    texttoDisplay[j-1].style.display = 'block'
    pricetoDisplay[j-1].style.display = 'block'
    j--
  
  }
  
}



let NewArray = document.querySelectorAll('.collectionIcon ul li')

for (let i = 0; i < NewArray.length; i++) {
  NewArray[i].addEventListener('click', FilterItem)


}

function FilterItem(event) {

  eventDataSet = event.target.dataset.toggle
  let items = document.querySelectorAll('.product')

  
  for (let i = 0; i < items.length; i++) {
    items[i].style.display = 'none'
  }


  for (let j = 0; j < items.length; j++) {
    if(eventDataSet == items[j].dataset.filter )
    {
      items[j].style.display = 'block'

    }
    
  }
}

let buttonMinus = document.querySelector('#minus')
let buttonPlus = document.querySelector('#plus')
if(buttonMinus,buttonPlus)
{
  buttonMinus.addEventListener('click',minus)
  buttonPlus.addEventListener('click',plus)
  
  
  let count = 0;
  let counter = document.querySelector("#count");
  function plus(){
      count++;
      counter.value = count;
  }
  function minus(){
    if (count > 1) {
      count--;
      counter.value = count;
    }  
  }
  
}


let single = document.querySelector('.single')

if(single)
$('.image-product').ready(function() {
  $('#zoom_01').elevateZoom();
});



let nameuser = document.querySelector('#namewcomm')
let commentssend = document.querySelector('#commuser')
let sendcommbutton = document.querySelector('#sendcomm')
let allcomments = document.querySelector('.comments')
let d = new Date();

if(sendcommbutton)
{
  
sendcommbutton.addEventListener('click', sendcomm)

function sendcomm() {
    let commtamplate = `
<div class="container">
<div class="comm">
<div class="headcomments">
    <div class="imagecomm">
        <i class="fas fa-users"></i>
    </div>
    <div class="name_date">
        <p class="namecomm1">"${nameuser.value}"</p>
        <p class="datecomm">${d.toDateString()}</p>
    </div>
</div>
<div class="footercomm">
    <p class="comm1">
       "${commentssend.value}"
    </p>
</div>
</div>
</div>

`;

    allcomments.innerHTML += commtamplate
}
}
}

 

let wishcarts = document.querySelectorAll('#addToWish');
let buyCarts = document.querySelectorAll('#buttonPay');

let products = 
[
  women = 
  [    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (1)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (8)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (10)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (13)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (7)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (15)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (3)" 
    },
    {
      name: "FLORAL-PRINT CREPE DE CHINE",
      price: 1950 ,
      inCart: 0 ,
      tag:"SHIRTWOMEN (16)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (1)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (2)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (2)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (3)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (4)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (5)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (6)" 
    },
    {
      name: "SHOES DE CHINE ALLSTARS",
      price: 590 ,
      inCart: 0 ,
      tag:"SHOESWOMEN (7)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (1)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (2)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (3)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (4)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (5)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (6)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (8)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (9)" 
    },
    {
      name: "BAGS STYLE FALL WEEKEND",
      price: 680 ,
      inCart: 0 ,
      tag:"BAGSWOMEN (10)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (1)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (2)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (3)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (4)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES(6)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (5)" 
    },
    {
      name: "SUNGLASSES - LET THE SUN RISE",
      price: 350 ,
      inCart: 0 ,
      tag:"SUNGLASSES (8)" 
    }
],
man = 
[    {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (1)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (2)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (3)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (4)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (5)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (6)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (7)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"manClothing (8)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (1)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (2)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (3)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (4)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (5)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (6)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (7)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"manShoes (8)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (1)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (2)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (3)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (4)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (5)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (6)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (7)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (8)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manSunglasses (1)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (2)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (3)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (4)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (5)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (6)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (7)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (8)" 
  }
],
child = 
[    {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (1)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (2)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (3)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (4)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (5)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (6)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (7)" 
  },
  {
    name: "FLORAL-PRINT CREPE DE CHINE",
    price: 1950 ,
    inCart: 0 ,
    tag:"childClothing (8)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (1)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (2)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (3)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (4)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (5)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (6)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (7)" 
  },
  {
    name: "SHOES DE CHINE ALLSTARS",
    price: 590 ,
    inCart: 0 ,
    tag:"childShoes (8)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (1)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (2)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (3)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (4)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (5)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (6)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (7)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manBags (8)" 
  },
  {
    name: "BAGS STYLE FALL WEEKEND",
    price: 680 ,
    inCart: 0 ,
    tag:"manSunglasses (1)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (2)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (3)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (4)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (5)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (6)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (7)" 
  },
  {
    name: "SUNGLASSES - LET THE SUN RISE",
    price: 350 ,
    inCart: 0 ,
    tag:"manSunglasses (8)" 
  }
]   
]

let WOMEN = document.querySelector('.WOMEN')
let MAN = document.querySelector('.MAN')
let CHILD = document.querySelector('.CHILD')
let SINGLE = document.querySelectorAll('.single')
for (let i = 0; i < wishcarts.length; i++)
{
  if(WOMEN)
  {
    wishcarts[i].addEventListener('click', () => 
  {
    cartNumbers(women[i])
    totalCost(women[i])
  })
  }
  if(MAN)
  {
    wishcarts[i].addEventListener('click', () => 
    {
      cartNumbers(man[i])
      totalCost(man[i])
    })

  }
  if(CHILD)
  {
    wishcarts[i].addEventListener('click', () => 
    {
      cartNumbers(child[i])
      totalCost(child[i])
    })
  }
  
}

function onLoadCartNumbers()
{
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers)
  {
    document.querySelector('.container #openWish span').textContent = productNumbers
  }
}

function cartNumbers(product)
{
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers)
  if(productNumbers)
  {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.container #openWish span').textContent = productNumbers + 1
  }
  else
  {
    localStorage.setItem('cartNumbers', 1)
    document.querySelector('.container #openWish span').textContent = 1
  }

  setItem(product)
  
}
function setItem(product)
{
  let cartItems = localStorage.getItem('productsInCart')
  cartItems = JSON.parse(cartItems)

  if(cartItems != null)
  {
    if(cartItems[product.tag] == undefined)
    {
      cartItems = 
      {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1 
  }
  else
  {
    product.inCart = 1;
    cartItems = 
    {
      [product.tag]: product 
    }
  }


  localStorage.setItem("productsInCart", JSON.stringify(cartItems))
}

function totalCost(product)
{
  let cartCost = localStorage.getItem('totalCost')

  if(cartCost != null)
  {
    cartCost = parseInt(cartCost)
    localStorage.setItem("totalCost", cartCost + product.price)
    document.querySelector(".moneyButton .totalPrice").innerHTML =''
    displayCart()
  }
  else
  {
    localStorage.setItem("totalCost", product.price)
    displayCart()
  }
}


function displayCart()
{
  let cartItems = localStorage.getItem("productsInCart")
  cartItems = JSON.parse(cartItems)
  let productContainer = document.querySelector(".prodectss")
  let Payments = document.querySelector(".moneyButton .totalPrice")
  let cartCost = localStorage.getItem('totalCost')
  
  if(cartItems && productContainer)
  {
    productContainer.innerHTML = ''
    Object.values(cartItems).map(item =>
      {
        productContainer.innerHTML += `
        <div class ="product-item">
        <i class="fas fa-times" id="delete"></i>
        <div class = "image">
        <img src="/images/${item.tag}.jpg" width="100" alt="">
        </div>
        <div class="description">
        <div class="title">${item.name}</div>
        <div class="Price">Price: €${item.price}</div>
        <div class="Quantity">Quantity: ${item.inCart}</div>
        </div>
        </div>
        `
      })
      Payments.innerHTML +=`
      <div class ="BasketTotalContainer">
      <h4 class="basketTotalTitel">
      Basket Total
      </h4>
      <h4 class="BasketTotal">
      €${cartCost},00
      </h4>
      </div>
      `
  }
}
function displayBuyCart()
{
  let cartItems = localStorage.getItem("productsInCart")
  cartItems = JSON.parse(cartItems)
  let productContainer = document.querySelector(".buyProducts")
  let Payments = document.querySelector(".moneyButton .totalPrice")
  let cartCost = localStorage.getItem('totalCost')
  
  if(cartItems && productContainer)
  {
    productContainer.innerHTML = ''
    Object.values(cartItems).map(item =>
      {
        productContainer.innerHTML += `
        <div class ="product-item">
        <i class="fas fa-times" id="delete"></i>
        <div class = "image">
        <img src="/images/${item.tag}.jpg" width="100" alt="">
        </div>
        <div class="description">
        <div class="title">${item.name}</div>
        <div class="Price">Price: €${item.price}</div>
        <div class="Quantity">Quantity: ${item.inCart}</div>
        </div>
        </div>
        `
      })
      Payments.innerHTML +=`
      <div class ="BasketTotalContainer">
      <h4 class="basketTotalTitel">
      Basket Total
      </h4>
      <h4 class="BasketTotal">
      €${cartCost},00
      </h4>
      </div>
      `
  }
}


items = localStorage.getItem("productsInCart")

if(items)
{
  displayCart()
}
onLoadCartNumbers()


