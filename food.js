const foodData = [
  {
    name: "BOILED EGG",
    price: 10,
    text: "Simple boiled eggs rich in protein and nutrients.",
    image: "https://images.unsplash.com/photo-1582169296194-e4d644c48063?w=600&auto=format&fit=crop&q=60",
    type: "breakfast",
  },
  {
    name: "PANCAKES",
    price: 20,
    text: "Fluffy pancakes served with syrup and butter.",
    image: "https://images.unsplash.com/photo-1565299543923-37dd37887442?q=80&w=781&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    type: "breakfast",
  },
  {
    name: "FRENCH TOAST",
    price: 22,
    text: "Golden toasted bread with cinnamon flavor.",
    image: "https://images.unsplash.com/photo-1589985270826-4b7bb135bc9d?w=600&auto=format&fit=crop&q=60",
    type: "breakfast",
  },
  {
    name: "OMELETTE",
    price: 18,
    text: "Soft omelette cooked with fresh herbs.",
    image: "https://images.unsplash.com/photo-1613376023733-0a73315d9b06?w=600&auto=format&fit=crop&q=60",
    type: "breakfast",
  },
  {
    name: "WAFFLES",
    price: 22,
    text: "Crispy waffles topped with honey and fruits.",
    image: "https://images.unsplash.com/photo-1562376552-0d160b0b6c8c?w=600&auto=format&fit=crop&q=60",
    type: "breakfast",
  },

  {
    name: "BURGER",
    price: 25,
    text: "Juicy burger layered with cheese and veggies.",
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=600&auto=format&fit=crop&q=60",
    type: "lunch",
  },
  {
    name: "PIZZA",
    price: 40,
    text: "Cheesy pizza topped with fresh ingredients.",
    image: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGl6emF8ZW58MHx8MHx8fDA%3D",
    type: "lunch",
  },
  {
    name: "RAMEN",
    price: 30,
    text: "Hot ramen noodles in savory broth.",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?w=600&auto=format&fit=crop&q=60",
    type: "lunch",
  },
  {
    name: "PASTA",
    price: 35,
    text: "Creamy Italian pasta with rich flavors.",
    image: "https://images.unsplash.com/photo-1525755662778-989d0524087e?w=600&auto=format&fit=crop&q=60",
    type: "lunch",
  },
  {
    name: "SANDWICH",
    price: 20,
    text: "Fresh sandwich filled with veggies and cheese.",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&auto=format&fit=crop&q=60",
    type: "lunch",
  },

  {
    name: "GRILLED CHICKEN",
    price: 45,
    text: "Herb-marinated grilled chicken.",
    image: "https://images.unsplash.com/photo-1598514982841-7d8b8e1c8d15?w=600&auto=format&fit=crop&q=60",
    type: "dinner",
  },
  {
    name: "STEAK",
    price: 60,
    text: "Juicy steak grilled to perfection.",
    image: "https://images.unsplash.com/photo-1551183053-bf91a1d81141?w=600&auto=format&fit=crop&q=60",
    type: "dinner",
  },
  {
    name: "FRIED RICE",
    price: 28,
    text: "Stir-fried rice with vegetables and spices.",
    image: "https://images.unsplash.com/photo-1603133872878-684f208fb84b?w=600&auto=format&fit=crop&q=60",
    type: "dinner",
  },
  {
    name: "SALMON",
    price: 55,
    text: "Pan-seared salmon with lemon butter.",
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=600&auto=format&fit=crop&q=60",
    type: "dinner",
  },
  {
    name: "SOUP",
    price: 18,
    text: "Warm vegetable soup for a healthy meal.",
    image: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&auto=format&fit=crop&q=60",
    type: "dinner",
  },

  {
    name: "CAKE",
    price: 18,
    text: "Soft cake topped with creamy frosting.",
    image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&auto=format&fit=crop&q=60",
    type: "dessert",
  },
  {
    name: "DONUT",
    price: 12,
    text: "Fresh donut glazed with chocolate.",
    image: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=600&auto=format&fit=crop&q=60",
    type: "dessert",
  },
  {
    name: "ICE CREAM",
    price: 15,
    text: "Creamy vanilla ice cream scoop.",
    image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGljZSUyMGNyZWFtfGVufDB8fDB8fHww",
    type: "dessert",
  },
  {
    name: "TACOS",
    price: 32,
    text: "Mexican tacos filled with meat and salsa.",
    image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?w=600&auto=format&fit=crop&q=60",
    type: "lunch",
  },
  {
    name: "FRUIT SALAD",
    price: 16,
    text: "Healthy bowl of fresh seasonal fruits.",
    image: "https://images.unsplash.com/photo-1641642400143-6be68f1a0918?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZnJ1aXQlMjBzYWxhZHxlbnwwfHwwfHx8MA%3D%3D",
    type: "breakfast",
  },
];
let dinner = foodData.filter((tpye, index) => foodData[index].type == "dinner")
let lunch = foodData.filter((tpye, index) => foodData[index].type == "lunch")
let breakfast = foodData.filter((tpye, index) => foodData[index].type == "breakfast")
// console.log(dinner);
//  for (const key in foodData) { 
//     CreateMenu(foodData[key].name,foodData[key].price,foodData[key].text,foodData[key].type,foodData[key].image);
//    }   
let btns = document.querySelector(".btns");

btns.addEventListener("click", (e) => {
  let value = e.target.value
  main.innerHTML = ""
  if (value == "Dinner") {
    for (const key in foodData) {
      CreateMenu(dinner[key].name, dinner[key].price, dinner[key].text, dinner[key].type, foodData[key].image);
    }
  }
  if (value == "Lunch") {
    for (const key in foodData) {
      CreateMenu(lunch[key].name, lunch[key].price, lunch[key].text, lunch[key].type, foodData[key].image);
    }
  }
  if (value == "BreakFast") {
    for (const key in foodData) {
      CreateMenu(breakfast[key].name, breakfast[key].price, breakfast[key].text, breakfast[key].type, foodData[key].image);
    }
  }
  if (value == "all") {
    for (const key in foodData) {
      CreateMenu(foodData[key].name, foodData[key].price, foodData[key].text, foodData[key].type, foodData[key].image);
    }
  }
})
let main = document.querySelector(".main");
for (const key in foodData) {
  CreateMenu(foodData[key].name, foodData[key].price, foodData[key].text, foodData[key].type, foodData[key].image);
}
function CreateMenu(name, price, text, tpye, image) {
  let NewMenu = document.createElement("div");
  NewMenu.className = "menus";
  NewMenu.id = `${tpye}`
  let Details = document.createElement("div");
  Details.className = "details";
  let images = document.createElement("div");
  images.className = "images";
  let FoodDtl = document.createElement("div");
  FoodDtl.className = "fooddetail"
  let Price = document.createElement("div");
  Price.className = "price"

  NewMenu.append(Details, Price);
  Details.append(images, FoodDtl);
  main.append(NewMenu);
  images.innerHTML = `<img src="${image}" alt="Food-image">`
  FoodDtl.innerHTML = `<h2>${name}</h2>
  <p>${text}</p>`
  Price.innerHTML = `<button >$${price}</button>`
}

// let fliter =foodData.filter((tpye, index)=> foodData[index].name)
// console.log(fliter);



arr = [];
for (const key in foodData) {
  arr.push(foodData[key].name);
}


// let single_word = [];
// for (const element of arr) {
//   for (const word of element) {
//     single_word.push(word);
//    // console.log(word);
//   }
// }
//console.log(single_word.includes("B"));

let input = document.querySelector(".input");

//let str = arr.toString();
input.addEventListener("keyup", (e) => {
  let searchValue = e.target.value.toUpperCase();
  let menus = document.querySelectorAll(".menus")
  console.log(searchValue);
  menus.forEach(menu => {
    let foodName = menu.querySelector(".fooddetail h2").innerText.toUpperCase();
    //const foodName = text.innertext;
    //console.log(foodName);
    if (foodName.includes(searchValue)) {
      menu.style.display = "block"
    }
    else {
      menu.style.display = "none"
    }
  });
})



// let text = "The ,rain ,in, SPAIN ,stays mainly in the plain";
// let str = arr.toString();
// console.log(str);
// let strlower = str.toLowerCase();
// console.log(strlower.match("egg"))

const toggle = document.getElementById("menuToggle");
const menu = document.getElementById("menu");

toggle.addEventListener("click", () => {
  toggle.classList.toggle("active"); // 👈 THIS LINE
  menu.classList.toggle("active");
});
