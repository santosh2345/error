
// Array to store the books and information and display to the home page    


console.log("hello how are you babe ?");

// you can add array to store more books with its properties and image source in img key
const booksInfo = [{
    id: 1,
    img: "images/Book 1.jpg",
    ISBN: 35353531,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 2,
    img: "images/Book 2.jpg",
    ISBN: 35353532,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"

}, {
    id: 3,
    img: "images/Book 3.jpg",
    ISBN: 35353533,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"

}, {
    id: 4,
    img: "images/Book 4.jpg",
    ISBN: 35353534,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 5,
    img: "images/Book 5.jpg",
    ISBN: 35353535,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 6,
    img: "images/Book 6.jpg",
    ISBN: 353535356,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 7,
    img: "images/Book 7.jpg",
    ISBN: 35353537,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 8,
    img: "images/Book 8.jpg",
    ISBN: 35353538,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 9,
    img: "images/Book 9.jpg",
    ISBN: 35353539,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 10,
    img: "images/Book 10.jpg",
    ISBN: 353535310,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 11,
    img: "images/Book 11.jpg",
    ISBN: 353535311,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}, {
    id: 12,
    img: "images/Book 12.jpg",
    ISBN: 35353512,
    Title: "name1",
    Authors: "Author",
    Price: "AU$500",
    Description: "Lorem ipsum .",
    Category: "fiction"
}
    // you can add moreeeeeeeeeeeeeeeeee
]




//  selecting the div of id books where we have to store books items

//for new render function
let bookel = document.querySelector("#books");
const cartItemsEl = document.querySelector(".cart-items");

//for old render function
// let bookname = document.getElementById('books')


// function to append each books inside the div of id books


bookrender = () => {
    booksInfo.forEach((book) => {

        //creating a div for each books and for appending inside div of id books
        bookel.innerHTML += ` // when i'm on cart.html the error is that bookel is null 
    <div class="col-4">
    <img src="${book.img}">
    <p> ISBN:${book.ISBN} </p>
    <p> Title:${book.Title} </p>
    <p> Authors:${book.Authors} </p>
    <p> Price:${book.Price} </p>
    <p> Description:${book.Description} </p>
    <p> Category:${book.Category} </p>
    <div>
    <button class="add-to-cart" onclick="addtocart(${book.id})">Add To Cart</button>
    </div>
    </div>

`
    })
}


// bookrender=()=>{
//     booksInfo.forEach((title)=>{

//         //creating a div for each books and for appending inside div of id books
//         const maindiv = document.createElement('div')
//         maindiv.className = 'col-4'

//         // creating all elements for each of books properties and image
//         const image = document.createElement('img')
//         const ISBN = document.createElement('p')
//         const titletext  = document.createElement('p')
//         const Authors = document.createElement('p')
//         const price = document.createElement('p')
//         const description = document.createElement('p')
//         const category = document.createElement('p')
//         const addToCart = document.createElement('button')

//         //providing classNames
//         addToCart.className = 'add-to-cart'

//         //providing the values of book properties from array 
//         image.src = title.img
//         ISBN.textContent =`ISBN: ${title.ISBN}`;
//         titletext.textContent = `Title: ${title.Title}`;
//         Authors.textContent = `Authors: ${title.Authors}`;
//         price.textContent = `Price: ${title.Price}`;
//         description.textContent=`Description: ${title.Description}`;
//         category.textContent = `Category: ${title.Category}`;
//         addToCart.textContent = 'Add To Cart';

//         //Appending all the book attributes to the maindiv 
//         maindiv.appendChild(image)
//         maindiv.appendChild(ISBN)
//         maindiv.appendChild(titletext)
//         maindiv.appendChild(Authors)
//         maindiv.appendChild(price)
//         maindiv.appendChild(description)
//         maindiv.appendChild(category)
//         maindiv.appendChild(addToCart)

//         //appending the maindiv inside the div of id books from index.html
//         bookname.appendChild(maindiv)


//     })
// }



//calling function to render the books 
bookrender();


//cart array
let cart = [];
let idarray = []; // for storing the id ;


const onLoadCartCount = () => {

    let previousItemCount = localStorage.getItem('itemCount');
    previousItemCount = parseInt(previousItemCount)

    if (previousItemCount) {
        document.querySelector('.cart-count').innerHTML = previousItemCount;
        // const cartCountElements = document.querySelectorAll(".cart-count");
        // cartCountElements.forEach(function(element) {
        //   element.innerHTML = previousItemCount;
        // });
        

    }
    else {
        document.querySelector('.cart-count').innerHTML = "";
        // const cartCountElements = document.querySelectorAll(".cart-count");
        // cartCountElements.forEach(function(element) {
        //   element.innerHTML = "";
        // });
        
        console.log('nothing was there')
    }
}
//calling the function that initiates the value of cart-count from local storage on page load
onLoadCartCount();

//cart update function

updateCart = () => {
    renderCartItems();
    // renderSubtotal();
}

//getting cart items from local storage

const cartItemFromLocalstorage=()=>{
    cart = localStorage.getItem("cart")
if(cart){
    cart = JSON.parse(localStorage.getItem("cart"));

}
else{
    cart = [];
}
return cart
}

// render cart items



// render cart items on adding items to cart

renderCartItems = () => {
    const getid = localStorage.getItem('id')

    let item = cartItemFromLocalstorage();
    console.log(item)
    
    cart.forEach((item) => {
        cartItemsEl.innerHTML += ` // when i'm on index.html the error is that this cartItemsEl is null 
        <div class="cart-item">
        <div class="item-info">
            <img src="${item.img}">
            <h4>${item.Title}</h4>
        </div>
        <div class="unit-price">
            <small>$</small>${item.Price}
        </div>
        <div class="units">
            <div class="btn minus">-</div>
            <div class="number">1</div>
            <div class="btn plus">+</div>
        </div>
    </div>
    `;
    })
}








//add to cart function 
addtocart = (id) => {
   let getid = [];  // initializing the getid as an array that will take the array from localstorage
    

    if (localStorage.getItem('id')) { // only parse the json if there is any item in the local storage of id
        getid = JSON.parse(localStorage.getItem('id')) // parse the localstorage id so that we can achieve the data in the form of array
    }

    idarray = getid  // assigning getid to idarray so that later we can add or combine the array items for page reload so that previous items also can be added to the new array of id

    const existid = getid.some((item) => item === id)  //it returns the id from localstorage id if any id matches to the current id clicked by user
    // console.log("id from local storage"+getid)
    // console.log(existid)
    // if(cart.some((item)=>item.id===id) || existid){ // check if there is already item inside localstorage id or already the item with id that is just clicked by user we can only use the item ===id
    if (existid) {
        alert("product already exist in cart")
    }
    else {
        const item = booksInfo.find((book) => book.id === id);
        cart.push({
            ...item,
            numberOfUnits: 1,
        });
        
// now storing cart items in local storage in array of object form
        localStorage.setItem("cart", JSON.stringify(cart))

        let previousItemCount = localStorage.getItem('itemCount');
        previousItemCount = parseInt(previousItemCount)

        if (previousItemCount) {
            localStorage.setItem('itemCount', previousItemCount + 1);
            document.querySelector('.cart-count').innerHTML = previousItemCount + 1;
//             const cartCountElements = document.querySelectorAll(".cart-count");
// cartCountElements.forEach(function(element) {
//   element.innerHTML = previousItemCount + 1;
// });
        }
        else {
            localStorage.setItem('itemCount', 1);
            

            document.querySelector('.cart-count').innerHTML = 1;
//             const cartCountElements = document.querySelectorAll(".cart-count");
// cartCountElements.forEach(function(element) {
//   element.innerHTML = 1;
// });

        }
        idarray.push(id)
        // console.log(idarray)
        localStorage.setItem('id', JSON.stringify(idarray));

    }
    // console.log(typeof(cart))
  
    updateCart();

}

renderCartItems()






 


