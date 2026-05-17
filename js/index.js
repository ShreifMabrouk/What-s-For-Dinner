// var meal = document.getElementById("meal")

// var image = [

// { src: "./images/Greek Moussaka.avif", alt: "Fried samosas on a wooden tray" }

// ]

// var cartona = ""

// for (var i = 0; i < image.length; i++ ) {
//   cartona += `

//   <img
//                   class="w-100 h-100"
//                   src="${image[i].src}"
//                   alt="${image[i].alt}"
//                 />

//   `
// }

// document.getElementById("img").innerHTML = cartona

// var review = [

// { rate: "4.8", reviews: "(234 reviews)" }

// ]

// var cartona = ""

// for (var i = 0; i < review.length; i++ ) {
//   cartona += `

//   <i class="fa-solid fa-star text-warning"></i>
//   <span class="rate fw-bold">${review[i].rate}</span>
//                   <span class="reviews text-muted">${review[i].reviews}</span>

//   `
// }

// document.getElementById("review").innerHTML = cartona

// var recipeTimes = [
//   { title: "Prep Time", time: 30 + " min", icon: "fa-clock" },
//   { title: "Cook Time", time: 60 + " min", icon: "fa-fire-burner" },
//   { title: "Servings", time: 4 + " people", icon: "fa-users" },
// ];

// var cartona = "";

// for (var i = 0; i < recipeTimes.length; i++) {
//   cartona += `

//     <div class="item">
//                   <i class="fa-solid fs-3 ${recipeTimes[i].icon} ms-3 me-3 mb-0"></i>
//                   <p class="title mb-0 text-nowrap">${recipeTimes[i].title}</p>
//                   <p class="time mb-0">${recipeTimes[i].time}</p>
//                 </div>

//     `;
// }

// document.getElementById("imageBottom").innerHTML = cartona;

// var info = [
//   { greencolor: "Intermediate", bluecolor: "Mediterranean", title: "Greek Moussaka", para: "Traditional layered eggplant casserole with lamb" }
// ];

// var cartona = "";

// for (var i = 0; i < info.length; i++) {
//   cartona += `

//      <div class="d-flex align-items-center gap-3 mb-3">
//                       <span class="greencolor">${info[i].greencolor}</span>
//                       <span class="bluecolor">${info[i].bluecolor}</span>
//                     </div>
//                     <h3 class="">${info[i].title}</h3>
//                     <p class="m-0">
//                       ${info[i].para}
//                     </p>

//     `;
// }

// document.getElementById("topInfo").innerHTML = cartona;

// var ingredients = [
//   { num: "1", info: "3 large eggplants, sliced" },
//   { num: "2", info: "500g ground lamb" },
//   { num: "3", info: "400g canned tomatoes" },
//   { num: "4", info: "1 onion, diced" },
//   { num: "5", info: "3 cloves garlic, minced" },
//   { num: "6", info: "500ml béchamel sauce" },
//   { num: "7", info: "100g parmesan cheese" },
//   { num: "8", info: "Cinnamon and oregano" },
//   { num: "9", info: "Olive oil" },
// ];

// var cartona = "";

// for (var i = 0; i < ingredients.length; i++) {
//   cartona += `

//     <div class="item d-flex gap-2">
//       <span class="number rounded-circle text-white d-flex justify-content-center align-items-center">${ingredients[i].num}</span>
//       <span class="info text-muted">${ingredients[i].info}</span>
//     </div>

//     `;
// }

// document.getElementById("ingredientsItems").innerHTML = cartona;

// var instructions = [
//   {
//     num: "1",
//     info: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
//   },
//   {
//     num: "2",
//     info: "Brush eggplant slices with olive oil, grill or bake until softened.",
//   },
//   {
//     num: "3",
//     info: "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
//   },
//   { num: "4", info: "Preheat oven to 180°C (350°F)." },
//   {
//     num: "5",
//     info: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
//   },
//   {
//     num: "6",
//     info: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
//   },
// ];

// var cartona = "";

// for (var i = 0; i < instructions.length; i++) {
//   cartona += `

//     <div class="item d-flex align-items-center gap-3">
//                         <span
//                           class="number rounded-4 text-white d-flex justify-content-center align-items-center"
//                           >${instructions[i].num}</span
//                         >
//                         <span class="info text-muted d-flex align-items-center"
//                           >${instructions[i].info}</span
//                         >
//                       </div>

//     `;
// }

// document.getElementById("instructionsItems").innerHTML = cartona;

// var nutrition = [
//   {
//     item1: "Calories",
//     item2: "Protein",
//     num1: "580 kcal",
//     num2: "36g",
//     icon1: "fa-fire",
//     icon2: "fa-dumbbell",
//   },
//   {
//     item1: "Carbohydrates",
//     item2: "Fat",
//     num1: "32g",
//     num2: "32g",
//     icon1: "fa-wheat-awn",
//     icon2: "fa-droplet",
//   },
//   {
//     item1: "Fiber",
//     item2: "Sodium",
//     num1: "8g",
//     num2: "820mg",
//     icon1: "fa-seedling",
//     icon2: "fa-cube",
//   },
// ];

// var cartona = "";

// for (var i = 0; i < nutrition.length; i++) {
//   cartona += `

//   <div class="row w-100 d-flex m-auto">

//                       <div class="col-12 col-lg-6 mb-3">
//                         <div class="item calories d-flex justify-content-between align-items-center text-nowrap">
//                       <div class="color1 left d-flex align-items-center gap-2">
//                         <i class="fa-solid ${nutrition[i].icon1} rounded-3 d-flex justify-content-center align-items-center"></i>
//                       <span class="title text-muted">${nutrition[i].item1}</span>
//                       </div>
//                       <span class="number">${nutrition[i].num1}</span>
//                     </div>
//                       </div>

//                       <div class="col-12 col-lg-6 mb-3">
//                         <div class="item protein d-flex justify-content-between align-items-center text-nowrap">
//                       <div class="color2 left d-flex align-items-center gap-2">
//                         <i class="fa-solid ${nutrition[i].icon1} rounded-3 d-flex justify-content-center align-items-center"></i>
//                       <span class="title text-muted">${nutrition[i].item2}</span>
//                       </div>
//                       <span class="number">${nutrition[i].num2}</span>
//                     </div>
//                       </div>

//                     </div>

//   `;
// }

// document.getElementById("nutritionitems").innerHTML = cartona;

// var tips = [
//   { info: "Salt eggplant to remove bitterness" },
//   { info: "Don't skip the resting time - it helps set the layers" },
//   { info: "Use ground beef if lamb is unavailable" },
//   { info: "Make ahead and reheat for easier serving" },
// ];

// var cartona = "";

// for (var i = 0; i < tips.length; i++) {
//   cartona += `

//    <div class="item d-flex align-items-baseline gap-2">
//                       <i class="fa-solid fa-circle-check"></i>
//                       <p class="info m-0">${tips[i].info}</p>
//                     </div>

//     `;
// }

// document.getElementById("tipsItems").innerHTML = cartona;

//============================================================
// ================================================================

var cards = [
  {
    id: "meal1",
    src: "./images/Greek Moussaka.avif",
    alt: "Fried samosas on a wooden tray",

    rate: "4.8",
    reviews: "(234 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 30 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 60 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Mediterranean",
    title: "Greek Moussaka",
    para: "Traditional layered eggplant casserole with lamb",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "3 large eggplants, sliced" },
      { num: "2", info: "500g ground lamb" },
      { num: "3", info: "400g canned tomatoes" },
      { num: "4", info: "1 onion, diced" },
      { num: "5", info: "3 cloves garlic, minced" },
      { num: "6", info: "500ml béchamel sauce" },
      { num: "7", info: "100g parmesan cheese" },
      { num: "8", info: "Cinnamon and oregano" },
      { num: "9", info: "Olive oil" },
    ],

    instructions: [
      {
        num: "1",
        info: "Slice eggplants, salt them, and let sit for 30 minutes. Rinse and pat dry.",
      },
      {
        num: "2",
        info: "Brush eggplant slices with olive oil, grill or bake until softened.",
      },
      {
        num: "3",
        info: "Cook ground lamb with onion and garlic. Add tomatoes, cinnamon, oregano. Simmer 20 minutes.",
      },
      { num: "4", info: "Preheat oven to 180°C (350°F)." },
      {
        num: "5",
        info: "Layer in baking dish: eggplant, meat sauce, eggplant, meat sauce. Top with béchamel and parmesan.",
      },
      {
        num: "6",
        info: "Bake for 45 minutes until golden. Let rest 15 minutes before serving.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "580 kcal",
        num2: "36g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "32g",
        num2: "32g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "8g",
        num2: "820mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Salt eggplant to remove bitterness" },
      { info: "Don't skip the resting time - it helps set the layers" },
      { info: "Use ground beef if lamb is unavailable" },
      { info: "Make ahead and reheat for easier serving" },
    ],
  },

  {
    id: "meal2",
    src: "./images/Margherita Pizza.avif",
    alt: "Fresh margherita pizza",

    rate: "4.9",
    reviews: "(512 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 90 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 12 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Italian",
    title: "Margherita Pizza",
    para: "Classic Italian pizza with fresh mozzarella and basil",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "300g pizza dough" },
      { num: "2", info: "200g crushed tomatoes" },
      { num: "3", info: "250g fresh mozzarella" },
      { num: "4", info: "Fresh basil leaves" },
      { num: "5", info: "2 tablespoons olive oil" },
      { num: "6", info: "2 cloves garlic, minced" },
      { num: "7", info: "Salt and pepper to taste" },
      { num: "8", info: "Parmesan cheese for topping" },
    ],

    instructions: [
      {
        num: "1",
        info: "Let pizza dough come to room temperature and rest for 1 hour.",
      },
      {
        num: "2",
        info: "Preheat oven to maximum temperature (usually 250°C/480°F).",
      },
      {
        num: "3",
        info: "Mix crushed tomatoes with olive oil, garlic, salt, and pepper for the sauce.",
      },
      { num: "4", info: "Roll out dough on a floured surface to desired thickness." },
      {
        num: "5",
        info: "Spread tomato sauce, add torn mozzarella pieces, and drizzle with olive oil.",
      },
      {
        num: "6",
        info: "Bake for 10-12 minutes until crust is golden. Top with fresh basil and parmesan.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "580 kcal",
        num2: "24g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "68g",
        num2: "22g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "920mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use a pizza stone for crispier crust" },
      { info: "Don't overload with toppings - less is more" },
      { info: "Add basil after baking to keep it fresh" },
      { info: "Let dough rest properly for best texture" },
    ],
  },

  {
    id: "meal3",
    src: "./images/Creamy Spaghetti Carbonara.avif",
    alt: "Plate of spaghetti carbonara",

    rate: "4.8",
    reviews: "(234 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 20 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Italian",
    title: "Creamy Spaghetti Carbonara",
    para: "A classic Italian pasta dish with eggs, cheese, and pancetta",

    ingredients: [
      { num: "1", info: "400g spaghetti pasta" },
      { num: "2", info: "200g pancetta or guanciale, diced" },
      { num: "3", info: "4 large eggs" },
      { num: "4", info: "100g Pecorino Romano cheese, grated" },
      { num: "5", info: "50g Parmesan cheese, grated" },
      { num: "6", info: "Freshly ground black pepper" },
      { num: "7", info: "Salt for pasta water" },
    ],

    instructions: [
      {
        num: "1",
        info: "While pasta cooks, heat a large skillet over medium heat. Add diced pancetta and cook until crispy, about 5-7 minutes.",
      },
      {
        num: "2",
        info: "In a bowl, whisk together eggs, grated Pecorino Romano, and Parmesan cheese. Add plenty of freshly ground black pepper.",
      },
      {
        num: "3",
        info: "Reserve 1 cup of pasta cooking water before draining. Drain pasta and immediately add to the skillet with pancetta.",
      },
      { num: "4", info: "Remove skillet from heat. Quickly pour in egg mixture while tossing pasta vigorously. Add reserved pasta water as needed to create a creamy sauce." },
      {
        num: "5",
        info: "Serve immediately with extra cheese and black pepper on top. Enjoy your authentic carbonara!",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "520 kcal",
        num2: "28g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "62g",
        num2: "18g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "3g",
        num2: "680mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use room temperature eggs for a smoother sauce consistency" },
      { info: "Work quickly when mixing eggs with hot pasta to avoid scrambling" },
      { info: "Reserve extra pasta water - it's the secret to perfect creaminess" },
      { info: "Freshly grated cheese makes all the difference in flavor" },
      { info: "Never add cream - authentic carbonara is made with eggs only" },
    ],
  },

  {
    id: "meal4",
    src: "./images/Vegetable Curry.avif",
    alt: "Bowl of vegetable curry",

    rate: "4.6",
    reviews: "(289 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 20 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 30 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Asian",
    title: "Vegetable Curry",
    para: "Hearty vegetarian curry with coconut milk",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "2 potatoes, cubed" },
      { num: "2", info: "1 cauliflower, florets" },
      { num: "3", info: "2 carrots, sliced" },
      { num: "4", info: "1 can chickpeas" },
      { num: "5", info: "400ml coconut milk" },
      { num: "6", info: "3 tablespoons curry powder" },
      { num: "7", info: "1 onion, diced" },
      { num: "8", info: "3 cloves garlic, minced" },
      { num: "9", info: "Fresh spinach" },
    ],

    instructions: [
      {
        num: "1",
        info: "Heat oil in a large pot. Sauté onion until soft, add garlic and curry powder, cook for 1 minute.",
      },
      {
        num: "2",
        info: "Add potatoes and carrots, cook for 5 minutes.",
      },
      {
        num: "3",
        info: "Pour in coconut milk and 1 cup water. Bring to simmer.",
      },
      { num: "4", info: "Add cauliflower and chickpeas. Cook for 20 minutes until vegetables are tender." },
      {
        num: "5",
        info: "Stir in fresh spinach and cook until wilted.",
      },
      {
        num: "6",
        info: "Serve hot over basmati rice or with naan bread.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "380 kcal",
        num2: "14g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "48g",
        num2: "16g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "12g",
        num2: "480mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Add vegetables in order of cooking time needed" },
      { info: "Adjust curry powder amount to taste" },
      { info: "Use full-fat coconut milk for creamier curry" },
      { info: "Add protein like tofu or paneer if desired" },
    ],
  },

  {
    id: "meal5",
    src: "./images/Caesar Salad.avif",
    alt: "Caesar salad with croutons",

    rate: "4.4",
    reviews: "(198 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 0 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Mediterranean",
    title: "Caesar Salad",
    para: "Classic salad with crispy romaine and creamy dressing",

    ingredients: [
      { num: "1", info: "1 large romaine lettuce" },
      { num: "2", info: "1/2 cup Caesar dressing" },
      { num: "3", info: "1/2 cup parmesan cheese, shaved" },
      { num: "4", info: "1 cup croutons" },
      { num: "5", info: "2 anchovy fillets (optional)" },
      { num: "6", info: "Lemon wedges" },
      { num: "7", info: "Black pepper" },
    ],

    instructions: [
      {
        num: "1",
        info: "Wash and dry romaine lettuce thoroughly. Tear into bite-sized pieces.",
      },
      {
        num: "2",
        info: "Place lettuce in a large salad bowl.",
      },
      {
        num: "3",
        info: "Add Caesar dressing and toss until evenly coated.",
      },
      { num: "4", info: "Add croutons and half the parmesan cheese. Toss gently." },
      {
        num: "5",
        info: "Top with remaining parmesan shavings and anchovies if using!",
      },
      {
        num: "6",
        info: "Serve immediately with lemon wedges and fresh black pepper.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "320 kcal",
        num2: "12g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "18g",
        num2: "22g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "3g",
        num2: "680mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use cold, crisp lettuce for best texture" },
      { info: "Make homemade croutons for better flavor" },
      { info: "Add grilled chicken for a complete meal" },
      { info: "Don't dress salad until ready to serve" },
    ],
  },

  {
    id: "meal6",
    src: "./images/Classic Beef Burger.avif",
    alt: "Juicy homemade burger with all the fixings",

    rate: "4.6",
    reviews: "(421 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 20 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "American",
    title: "Classic Beef Burger",
    para: "Juicy homemade burger with all the fixings",

    ingredients: [
      { num: "1", info: "500g ground beef (80/20)" },
      { num: "2", info: "4 burger buns" },
      { num: "3", info: "4 slices cheddar cheese" },
      { num: "4", info: "Lettuce leaves" },
      { num: "5", info: "Tomato slices" },
      { num: "6", info: "Red onion, sliced" },
      { num: "7", info: "Pickles" },
      { num: "8", info: "Burger sauce or condiments" },
    ],

    instructions: [
      {
        num: "1",
        info: "Divide ground beef into 4 equal portions. Form into patties, making a small indent in the center.",
      },
      {
        num: "2",
        info: "Season patties generously with salt and pepper on both sides.",
      },
      {
        num: "3",
        info: "Heat a grill or skillet over high heat. Cook patties for 4-5 minutes per side for medium.",
      },
      { num: "4", info: "Add cheese slices in the last minute of cooking and cover to melt." },
      {
        num: "5",
        info: "Toast burger buns lightly on the grill or in a pan.",
      },
      {
        num: "6",
        info: "Assemble burgers with lettuce, tomato, onion, pickles, and your favorite sauce.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "650 kcal",
        num2: "38g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "42g",
        num2: "35g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "2g",
        num2: "920mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Don't press down on burgers while cooking - keeps them juicy" },
      { info: "Make indent in center to prevent burger from puffing up" },
      { info: "Let patties rest for 2-3 minutes before serving" },
      { info: "Toast buns for better texture and flavor" },
    ],
  },

  {
    id: "meal7",
    src: "./images/Chicken Tikka Masala.avif",
    alt: "Rich and creamy Indian curry with tender chicken pieces",

    rate: "4.7",
    reviews: "(389 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 20 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 30 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Asian",
    title: "Chicken Tikka Masala",
    para: "Rich and creamy Indian curry with tender chicken pieces",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "600g chicken breast, cubed" },
      { num: "2", info: "1 cup plain yogurt" },
      { num: "3", info: "2 tablespoons tikka masala paste" },
      { num: "4", info: "400ml coconut cream" },
      { num: "5", info: "1 onion, diced" },
      { num: "6", info: "4 cloves garlic, minced" },
      { num: "7", info: "2 tablespoons ginger, grated" },
      { num: "8", info: "400g canned tomatoes" },
      { num: "9", info: "Fresh cilantro for garnish" },
    ],

    instructions: [
      {
        num: "1",
        info: "Marinate chicken in half the yogurt and 1 tablespoon tikka paste for at least 30 minutes.",
      },
      {
        num: "2",
        info: "Heat oil in a large pan, cook marinated chicken until browned. Remove and set aside.",
      },
      {
        num: "3",
        info: "In the same pan, sauté onion until soft. Add garlic and ginger, cook for 1 minute.",
      },
      { num: "4", info: "Add remaining tikka paste and canned tomatoes. Simmer for 10 minutes." },
      {
        num: "5",
        info: "Stir in coconut cream and remaining yogurt. Add chicken back to the pan.",
      },
      {
        num: "6",
        info: "Simmer for 15 minutes until sauce thickens. Garnish with cilantro and serve with rice.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "450 kcal",
        num2: "38g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "24g",
        num2: "22g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "760mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Marinate chicken overnight for deeper flavor" },
      { info: "Use full-fat coconut cream for richest sauce" },
      { info: "Adjust spice level by varying the tikka paste amount" },
      { info: "Serve with naan bread and basmati rice" },
    ],
  },

  {
    id: "meal8",
    src: "./images/Pad Thai.avif",
    alt: "Pad Thai with shrimp",

    rate: "4.8",
    reviews: "(445 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 20 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 15 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Asian",
    title: "Pad Thai",
    para: "Popular Thai stir-fried noodles with shrimp and peanuts",

    ingredients: [
      { num: "1", info: "200g rice noodles" },
      { num: "2", info: "200g shrimp, peeled" },
      { num: "3", info: "2 eggs" },
      { num: "4", info: "3 tablespoons tamarind paste" },
      { num: "5", info: "2 tablespoons fish sauce" },
      { num: "6", info: "1 tablespoon palm sugar" },
      { num: "7", info: "Bean sprouts" },
      { num: "8", info: "Crushed peanuts" },
      { num: "9", info: "Lime wedges and cilantro" },
    ],

    instructions: [
      {
        num: "1",
        info: "Soak rice noodles in warm water for 30 minutes. Drain and set aside.",
      },
      {
        num: "2",
        info: "Mix tamarind paste, fish sauce, and palm sugar to make the sauce.",
      },
      {
        num: "3",
        info: "Heat wok over high heat. Scramble eggs and set aside.",
      },
      { num: "4", info: "Cook shrimp until pink. Add noodles and sauce, toss for 2-3 minutes." },
      {
        num: "5",
        info: "Add scrambled eggs and bean sprouts. Toss everything together.",
      },
      {
        num: "6",
        info: "Serve topped with crushed peanuts, lime wedges, and cilantro.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "540 kcal",
        num2: "32g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "62g",
        num2: "16g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "1120mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Don't oversoak noodles or they'll be mushy" },
      { info: "Cook on high heat for authentic wok flavor" },
      { info: "Balance sweet, sour, and salty flavors" },
      { info: "Prepare all ingredients before starting to cook" },
    ],
  },

  {
    id: "meal9",
    src: "./images/Caprese Sandwich.avif",
    alt: "Caprese sandwich with tomato and basil",

    rate: "4.5",
    reviews: "(189 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 10 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 5 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Italian",
    title: "Caprese Sandwich",
    para: "Fresh Italian sandwich with mozzarella, tomato, and basil",

    ingredients: [
      { num: "1", info: "1 ciabatta bread" },
      { num: "2", info: "200g fresh mozzarella, sliced" },
      { num: "3", info: "2 large tomatoes, sliced" },
      { num: "4", info: "Fresh basil leaves" },
      { num: "5", info: "3 tablespoons pesto" },
      { num: "6", info: "2 tablespoons balsamic glaze" },
      { num: "7", info: "Olive oil" },
      { num: "8", info: "Salt and pepper" },
    ],

    instructions: [
      {
        num: "1",
        info: "Slice ciabatta bread in half horizontally.",
      },
      {
        num: "2",
        info: "Toast bread lightly until just crispy.",
      },
      {
        num: "3",
        info: "Spread pesto on both sides of bread.",
      },
      { num: "4", info: "Layer mozzarella slices, tomato slices, and fresh basil leaves." },
      {
        num: "5",
        info: "Drizzle with olive oil and balsamic glaze. Season with salt and pepper.",
      },
      {
        num: "6",
        info: "Close sandwich, cut in half, and serve immediately.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "480 kcal",
        num2: "22g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "48g",
        num2: "22g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "3g",
        num2: "680mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use ripe, in-season tomatoes for best flavor" },
      { info: "Buffalo mozzarella is traditional but harder to slice" },
      { info: "Toast bread lightly - not too crispy" },
      { info: "Add prosciutto or salami for a heartier sandwich" },
    ],
  },

  {
    id: "meal10",
    src: "./images/BBQ Pulled Pork.avif",
    alt: "Sliced juicy grilled steak on a wooden board",

    rate: "4.7",
    reviews: "(412 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 240 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "American",
    title: "BBQ Pulled Pork",
    para: "Slow-cooked tender pork in smoky barbecue sauce",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "1kg pork shoulder" },
      { num: "2", info: "1 cup BBQ sauce" },
      { num: "3", info: "1/2 cup apple cider vinegar" },
      { num: "4", info: "2 tablespoons brown sugar" },
      { num: "5", info: "1 tablespoon paprika" },
      { num: "6", info: "1 tablespoon garlic powder" },
      { num: "7", info: "Burger buns" },
      { num: "8", info: "Coleslaw for serving" },
    ],

    instructions: [
      {
        num: "1",
        info: "Mix paprika, garlic powder, brown sugar, salt and pepper. Rub all over pork shoulder.",
      },
      {
        num: "2",
        info: "Place pork in slow cooker with apple cider vinegar and 1/2 cup water.",
      },
      {
        num: "3",
        info: "Cook on low for 8 hours or high for 4 hours until meat is very tender.",
      },
      { num: "4", info: "Remove pork and shred with two forks. Discard excess fat." },
      {
        num: "5",
        info: "Return shredded pork to slow cooker, mix with BBQ sauce.",
      },
      {
        num: "6",
        info: "Serve on toasted buns with coleslaw on top.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "620 kcal",
        num2: "48g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "52g",
        num2: "22g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "3g",
        num2: "1180mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use pork shoulder for best results - it stays moist" },
      { info: "Let pork rest before shredding for juicier meat" },
      { info: "Make your own BBQ sauce for better flavor" },
      { info: "Leftovers freeze well for up to 3 months" },
    ],
  },

  {
    id: "meal11",
    src: "./images/Thai Green Curry.avif",
    alt: "Thai green curry bowl",

    rate: "4.7",
    reviews: "(312 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 25 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Asian",
    title: "Thai Green Curry",
    para: "Vibrant and aromatic curry with vegetables and coconut milk",

    ingredients: [
      { num: "1", info: "2 tablespoons green curry paste" },
      { num: "2", info: "400ml coconut milk" },
      { num: "3", info: "300g chicken breast, sliced" },
      { num: "4", info: "1 red bell pepper, sliced" },
      { num: "5", info: "100g green beans" },
      { num: "6", info: "1 eggplant, cubed" },
      { num: "7", info: "2 tablespoons fish sauce" },
      { num: "8", info: "1 tablespoon palm sugar" },
      { num: "9", info: "Fresh Thai basil leaves" },
    ],

    instructions: [
      {
        num: "1",
        info: "Heat a large pot or wok over medium heat. Add curry paste and cook for 1 minute until fragrant.",
      },
      {
        num: "2",
        info: "Add half the coconut milk and stir to combine with the curry paste.",
      },
      {
        num: "3",
        info: "Add sliced chicken and cook until no longer pink, about 5 minutes.",
      },
      { num: "4", info: "Add remaining coconut milk, vegetables, fish sauce, and palm sugar." },
      {
        num: "5",
        info: "Simmer for 15-20 minutes until vegetables are tender and sauce has thickened.",
      },
      {
        num: "6",
        info: "Stir in fresh Thai basil leaves. Serve hot with jasmine rice.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "420 kcal",
        num2: "26g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "22g",
        num2: "26g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "5g",
        num2: "890mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Adjust spice level by using more or less curry paste" },
      { info: "Add vegetables in stages based on cooking time needed" },
      { info: "Fresh Thai basil is essential for authentic flavor" },
      { info: "Use full-fat coconut milk for richest, creamiest sauce" },
    ],
  },

  {
    id: "meal12",
    src: "./images/French Onion Soup.avif",
    alt: "Onion soup with melted cheese",

    rate: "4.7",
    reviews: "(267 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 60 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Mediterranean",
    title: "French Onion Soup",
    para: "Rich beef broth with caramelized onions and melted cheese",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "4 large onions, thinly sliced" },
      { num: "2", info: "4 tablespoons butter" },
      { num: "3", info: "1 liter beef broth" },
      { num: "4", info: "1/2 cup white wine" },
      { num: "5", info: "2 bay leaves" },
      { num: "6", info: "Fresh thyme" },
      { num: "7", info: "Baguette slices" },
      { num: "8", info: "200g Gruyère cheese, grated" },
    ],

    instructions: [
      {
        num: "1",
        info: "Melt butter in a large pot. Add onions and cook slowly for 40 minutes, stirring occasionally until caramelized.",
      },
      {
        num: "2",
        info: "Add white wine and deglaze the pot, scraping up brown bits.",
      },
      {
        num: "3",
        info: "Pour in beef broth, add bay leaves and thyme. Simmer for 20 minutes.",
      },
      { num: "4", info: "Meanwhile, toast baguette slices until golden." },
      {
        num: "5",
        info: "Ladle soup into oven-safe bowls. Top with toasted bread and cheese.",
      },
      {
        num: "6",
        info: "Broil for 3-5 minutes until cheese is melted and bubbly. Serve hot.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "380 kcal",
        num2: "18g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "36g",
        num2: "18g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "980mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Patience is key - don't rush the onion caramelization" },
      { info: "Use good quality beef broth for best flavor" },
      { info: "Gruyère can be substituted with Swiss cheese" },
      { info: "Watch carefully when broiling to avoid burning" },
    ],
  },

  {
    id: "meal13",
    src: "./images/Chicken Stir-Fry.avif",
    alt: "Chicken stir-fry with vegetables",

    rate: "4.5",
    reviews: "(324 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 15 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Asian",
    title: "Chicken Stir-Fry",
    para: "Quick and healthy stir-fry with colorful vegetables",

    ingredients: [
      { num: "1", info: "500g chicken breast, sliced" },
      { num: "2", info: "2 bell peppers, sliced" },
      { num: "3", info: "1 broccoli head, florets" },
      { num: "4", info: "2 carrots, julienned" },
      { num: "5", info: "3 tablespoons soy sauce" },
      { num: "6", info: "2 tablespoons oyster sauce" },
      { num: "7", info: "1 tablespoon sesame oil" },
      { num: "8", info: "2 cloves garlic, minced" },
      { num: "9", info: "Fresh ginger, grated" },
    ],

    instructions: [
      {
        num: "1",
        info: "Mix soy sauce, oyster sauce, and sesame oil for the sauce.",
      },
      {
        num: "2",
        info: "Heat wok over high heat with oil. Cook chicken until golden, remove and set aside.",
      },
      {
        num: "3",
        info: "Add more oil if needed. Stir-fry garlic and ginger for 30 seconds.",
      },
      { num: "4", info: "Add vegetables, starting with hardest ones (carrots, broccoli). Cook for 3-4 minutes." },
      {
        num: "5",
        info: "Return chicken to wok, add bell peppers and sauce. Toss for 2 minutes.",
      },
      {
        num: "6",
        info: "Serve immediately over steamed rice or noodles.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "320 kcal",
        num2: "34g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "18g",
        num2: "12g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "5g",
        num2: "840mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Cut all ingredients before starting to cook" },
      { info: "Keep heat high for authentic stir-fry texture" },
      { info: "Don't overcrowd the wok or vegetables will steam" },
      { info: "Add cashews or peanuts for extra crunch" },
    ],
  },

  {
    id: "meal14",
    src: "./images/Mediterranean Quinoa Bowl.avif",
    alt: "Quinoa bowl with vegetables",

    rate: "4.5",
    reviews: "(156 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 20 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 35 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Mediterranean",
    title: "Mediterranean Quinoa Bowl",
    para: "Healthy bowl with quinoa, vegetables, and tahini dressing",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "1 cup quinoa" },
      { num: "2", info: "Cherry tomatoes, halved" },
      { num: "3", info: "Cucumber, diced" },
      { num: "4", info: "Red onion, sliced" },
      { num: "5", info: "Kalamata olives" },
      { num: "6", info: "Feta cheese, crumbled" },
      { num: "7", info: "Fresh parsley" },
      { num: "8", info: "Tahini dressing" },
    ],

    instructions: [
      {
        num: "1",
        info: "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
      },
      {
        num: "2",
        info: "While quinoa cooks, prepare all vegetables and set aside.",
      },
      {
        num: "3",
        info: "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
      },
      { num: "4", info: "Fluff cooked quinoa with a fork and let cool slightly." },
      {
        num: "5",
        info: "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives.",
      },
      {
        num: "6",
        info: "Sprinkle with feta cheese and fresh parsley. Drizzle with tahini dressing.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "480 kcal",
        num2: "18g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "58g",
        num2: "20g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "10g",
        num2: "540mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Rinse quinoa well to remove bitter coating" },
      { info: "Let quinoa cool before adding fresh ingredients" },
      { info: "Make extra tahini dressing - it keeps well in the fridge" },
      { info: "Add grilled chicken or chickpeas for extra protein" },
    ],
  },

  {
    id: "meal15",
    src: "./images/Teriyaki Chicken Bowl.avif",
    alt: "Teriyaki chicken with rice",

    rate: "4.7",
    reviews: "(367 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 20 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Asian",
    title: "Teriyaki Chicken Bowl",
    para: "Sweet and savory chicken over rice with vegetables",

    ingredients: [
      { num: "1", info: "400g chicken thighs, sliced" },
      { num: "2", info: "1/2 cup teriyaki sauce" },
      { num: "3", info: "2 cups cooked rice" },
      { num: "4", info: "1 broccoli head, florets" },
      { num: "5", info: "1 carrot, julienned" },
      { num: "6", info: "Sesame seeds" },
      { num: "7", info: "Green onions, sliced" },
      { num: "8", info: "1 tablespoon sesame oil" },
    ],

    instructions: [
      {
        num: "1",
        info: "Heat sesame oil in a pan. Cook chicken until browned on all sides.",
      },
      {
        num: "2",
        info: "Add teriyaki sauce to chicken, simmer for 5 minutes until sauce thickens.",
      },
      {
        num: "3",
        info: "Meanwhile, steam broccoli and carrots until tender-crisp.",
      },
      { num: "4", info: "Divide rice between bowls." },
      {
        num: "5",
        info: "Top with teriyaki chicken and steamed vegetables.",
      },
      {
        num: "6",
        info: "Garnish with sesame seeds and green onions. Serve hot.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "540 kcal",
        num2: "42g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "58g",
        num2: "14g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "1240mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Use chicken thighs for juicier meat" },
      { info: "Make homemade teriyaki sauce for better flavor control" },
      { info: "Add edamame for extra protein" },
      { info: "Meal prep by cooking rice and chicken ahead" },
    ],
  },

  {
    id: "meal16",
    src: "./images/Honey Garlic Salmon.avif",
    alt: "Cooked salmon with lemon",

    rate: "4.9",
    reviews: "(187 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 10 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 15 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Seafood",
    title: "Honey Garlic Salmon",
    para: "Pan-seared salmon with a sweet and savory glaze",

    ingredients: [
      { num: "1", info: "2 salmon fillets (6oz each)" },
      { num: "2", info: "3 tablespoons honey" },
      { num: "3", info: "2 tablespoons soy sauce" },
      { num: "4", info: "4 cloves garlic, minced" },
      { num: "5", info: "1 tablespoon olive oil" },
      { num: "6", info: "1 teaspoon fresh ginger, grated" },
      { num: "7", info: "Sesame seeds for garnish" },
      { num: "8", info: "Green onions, sliced" },
    ],

    instructions: [
      {
        num: "1",
        info: "Pat salmon fillets dry with paper towels. Season with salt and pepper.",
      },
      {
        num: "2",
        info: "In a small bowl, whisk together honey, soy sauce, minced garlic, and grated ginger.",
      },
      {
        num: "3",
        info: "Heat olive oil in a large skillet over medium-high heat.",
      },
      { num: "4", info: "Place salmon fillets skin-side up in the pan. Cook for 4-5 minutes until golden." },
      {
        num: "5",
        info: "Flip salmon and pour honey garlic sauce over the top. Cook for another 4-5 minutes.",
      },
      {
        num: "6",
        info: "Garnish with sesame seeds and sliced green onions. Serve with steamed vegetables or rice.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "380 kcal",
        num2: "35g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "28g",
        num2: "14g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "0g",
        num2: "720mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Don't overcook salmon - it should be slightly pink in the center" },
      { info: "Use wild-caught salmon for best flavor and nutrition" },
      { info: "Let the sauce caramelize slightly for deeper flavor" },
      { info: "Pair with steamed broccoli or asparagus for a complete meal" },
    ],
  },

  {
    id: "meal17",
    src: "./images/Lasagna Bolognese.avif",
    alt: "Slice of layered lasagna",

    rate: "4.9",
    reviews: "(478 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 30 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 90 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Intermediate",
    bluecolor: "Italian",
    title: "Lasagna Bolognese",
    para: "Layered Italian pasta with rich meat sauce and béchamel",

    warningtitle: "Extended Preparation Time",
    warninginfo:
      "This recipe requires more than 45 minutes to prepare. Plan accordingly!",

    ingredients: [
      { num: "1", info: "12 lasagna sheets" },
      { num: "2", info: "500g ground beef" },
      { num: "3", info: "400g canned tomatoes" },
      { num: "4", info: "1 onion, diced" },
      { num: "5", info: "2 carrots, diced" },
      { num: "6", info: "500ml béchamel sauce" },
      { num: "7", info: "200g mozzarella, grated" },
      { num: "8", info: "100g parmesan cheese" },
      { num: "9", info: "Fresh basil" },
    ],

    instructions: [
      {
        num: "1",
        info: "Cook ground beef with onion and carrots until browned. Add tomatoes and simmer for 30 minutes.",
      },
      {
        num: "2",
        info: "Cook lasagna sheets according to package directions. Drain and set aside.",
      },
      {
        num: "3",
        info: "Preheat oven to 180°C (350°F).",
      },
      { num: "4", info: "In a baking dish, layer: meat sauce, lasagna sheets, béchamel sauce. Repeat 3-4 times." },
      {
        num: "5",
        info: "Top final layer with béchamel, mozzarella, and parmesan cheese.",
      },
      {
        num: "6",
        info: "Bake for 45 minutes until golden and bubbly. Let rest 10 minutes before serving.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "680 kcal",
        num2: "42g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "58g",
        num2: "28g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "6g",
        num2: "920mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Make bolognese sauce a day ahead for better flavor" },
      { info: "Don't skip the resting time after baking" },
      { info: "Use fresh pasta sheets for best texture" },
      { info: "Freeze leftovers in individual portions" },
    ],
  },

  {
    id: "meal18",
    src: "./images/Shrimp Scampi.avif",
    alt: "Shrimp scampi pasta",

    rate: "4.8",
    reviews: "(356 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 10 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 15 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 2 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "Seafood",
    title: "Shrimp Scampi",
    para: "Garlicky shrimp in white wine butter sauce",

    ingredients: [
      { num: "1", info: "400g large shrimp, peeled" },
      { num: "2", info: "300g linguine pasta" },
      { num: "3", info: "6 cloves garlic, minced" },
      { num: "4", info: "1/2 cup white wine" },
      { num: "5", info: "4 tablespoons butter" },
      { num: "6", info: "2 tablespoons olive oil" },
      { num: "7", info: "Fresh parsley, chopped" },
      { num: "8", info: "Lemon juice and zest" },
      { num: "9", info: "Red pepper flakes" },
    ],

    instructions: [
      {
        num: "1",
        info: "Cook linguine according to package directions. Reserve 1 cup pasta water.",
      },
      {
        num: "2",
        info: "Heat olive oil and 2 tablespoons butter in a large pan. Add garlic and red pepper flakes, cook for 1 minute.",
      },
      {
        num: "3",
        info: "Add shrimp, cook until pink on both sides, about 3-4 minutes. Remove and set aside.",
      },
      { num: "4", info: "Add white wine to pan, simmer for 2 minutes. Add remaining butter and lemon juice." },
      {
        num: "5",
        info: "Return shrimp to pan, add cooked pasta and toss. Add pasta water if needed.",
      },
      {
        num: "6",
        info: "Garnish with parsley, lemon zest, and serve immediately.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "520 kcal",
        num2: "36g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "54g",
        num2: "18g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "3g",
        num2: "620mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Don't overcook shrimp - they cook very quickly" },
      { info: "Use good quality white wine for best flavor" },
      { info: "Toss pasta in sauce for maximum flavor absorption" },
      { info: "Add extra lemon for bright, fresh taste" },
    ],
  },

  {
    id: "meal19",
    src: "./images/Beef Tacos.avif",
    alt: "Three beef tacos with lime",

    rate: "4.6",
    reviews: "(278 reviews)",

    recipeTimes: [
      { title: "Prep Time", time: 15 + " min", icon: "fa-clock" },
      { title: "Cook Time", time: 20 + " min", icon: "fa-fire-burner" },
      { title: "Servings", time: 4 + " people", icon: "fa-users" },
    ],

    greencolor: "Easy",
    bluecolor: "American",
    title: "Beef Tacos",
    para: "Flavorful Mexican tacos with seasoned ground beef",

    ingredients: [
      { num: "1", info: "500g ground beef" },
      { num: "2", info: "8 taco shells" },
      { num: "3", info: "1 onion, diced" },
      { num: "4", info: "2 tablespoons taco seasoning" },
      { num: "5", info: "Shredded lettuce" },
      { num: "6", info: "Diced tomatoes" },
      { num: "7", info: "Shredded cheddar cheese" },
      { num: "8", info: "Sour cream" },
      { num: "9", info: "Salsa" },
    ],

    instructions: [
      {
        num: "1",
        info: "Heat a large skillet over medium-high heat. Cook ground beef until browned.",
      },
      {
        num: "2",
        info: "Add diced onion and cook until softened, about 5 minutes.",
      },
      {
        num: "3",
        info: "Stir in taco seasoning and 1/2 cup water. Simmer for 10 minutes.",
      },
      { num: "4", info: "Warm taco shells according to package directions." },
      {
        num: "5",
        info: "Fill each shell with seasoned beef.",
      },
      {
        num: "6",
        info: "Top with lettuce, tomatoes, cheese, sour cream, and salsa. Serve immediately.",
      },
    ],

    nutrition: [
      {
        item1: "Calories",
        item2: "Protein",
        num1: "420 kcal",
        num2: "26g",
        icon1: "fa-fire",
        icon2: "fa-dumbbell",
      },
      {
        item1: "Carbohydrates",
        item2: "Fat",
        num1: "32g",
        num2: "20g",
        icon1: "fa-wheat-awn",
        icon2: "fa-droplet",
      },
      {
        item1: "Fiber",
        item2: "Sodium",
        num1: "4g",
        num2: "780mg",
        icon1: "fa-seedling",
        icon2: "fa-cube",
      },
    ],

    tips: [
      { info: "Drain excess fat from beef for healthier tacos" },
      { info: "Warm shells in oven for better texture" },
      { info: "Prepare all toppings before cooking beef" },
      { info: "Use ground turkey for a lighter option" },
    ],
  },
];

var currentCard = cards[0]

function displayCard(cards) {
  
document.getElementById("img").innerHTML = `

<img
                  class="w-100 h-100"
                  src="${cards.src}"
                  alt="${cards.alt}"
                />

`;

document.getElementById("review").innerHTML = `

<i class="fa-solid fa-star text-warning"></i>
  <span class="rate fw-bold">${cards.rate}</span>
                  <span class="reviews text-muted">${cards.reviews}</span>


`;

var imageBottomHtml = "";

for (var i = 0; i < cards.recipeTimes.length; i++) {
  imageBottomHtml += `
    
     <div class="item">
                  <i class="fa-solid fs-3 ${cards.recipeTimes[i].icon} ms-3 me-3 mb-0"></i>
                  <p class="title mb-0 text-nowrap">${cards.recipeTimes[i].title}</p>
                  <p class="time mb-0">${cards.recipeTimes[i].time}</p>
                </div>

    `;
}

document.getElementById("imageBottom").innerHTML = imageBottomHtml;

document.getElementById("topInfo").innerHTML = `

<div class="d-flex align-items-center gap-3 mb-3">
                      <span class="greencolor">${cards.greencolor}</span>
                      <span class="bluecolor">${cards.bluecolor}</span>
                    </div>
                    <h3 class="">${cards.title}</h3>
                    <p class="m-0">
                      ${cards.para}
                    </p>



`;

document.getElementById("warning").innerHTML = `

    <div class="warning d-flex align-items-center gap-3">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="m-0 title">${cards.warningtitle}</p>
                    <p class="m-0 text-danger info">
                      ${cards.warninginfo}
                    </p>
                  </div>
                </div>
`;

if (cards.warningtitle && cards.warninginfo) {
  document.getElementById("warning").innerHTML = `

    <div class="warning d-flex align-items-center gap-3">
                  <i class="fa-solid fa-triangle-exclamation"></i>
                  <div class="d-flex flex-column justify-content-center">
                    <p class="m-0 title">${cards.warningtitle}</p>
                    <p class="m-0 text-danger info">
                      ${cards.warninginfo}
                    </p>
                  </div>
                </div>
`;
}
else {
  document.getElementById("warning").innerHTML = ""
}

var ingredientsItemsHtml = "";

for (var i = 0; i < cards.ingredients.length; i++) {
  ingredientsItemsHtml += `
    
     <div class="item d-flex gap-2">
      <span class="number rounded-circle text-white d-flex justify-content-center align-items-center">${cards.ingredients[i].num}</span>
      <span class="info text-muted">${cards.ingredients[i].info}</span>
    </div>

    `;
}

document.getElementById("ingredientsItems").innerHTML = ingredientsItemsHtml;

var instructionsItemsHtml = "";

for (var i = 0; i < cards.instructions.length; i++) {
  instructionsItemsHtml += `
    
     <div class="item d-flex align-items-center gap-3">
                        <span
                          class="number rounded-4 text-white d-flex justify-content-center align-items-center"
                          >${cards.instructions[i].num}</span
                        >
                        <span class="info text-muted d-flex align-items-center"
                          >${cards.instructions[i].info}</span
                        >
                      </div>

    `;
}

document.getElementById("instructionsItems").innerHTML = instructionsItemsHtml;

var nutritionitemsHtml = "";

for (var i = 0; i < cards.nutrition.length; i++) {
  nutritionitemsHtml += `
    

<div class="row w-100 d-flex m-auto">


                      <div class="col-12 col-lg-6 mb-3">
                        <div class="item calories d-flex justify-content-between align-items-center text-nowrap">
                      <div class="color1 left d-flex align-items-center gap-2">
                        <i class="fa-solid ${cards.nutrition[i].icon1} rounded-3 d-flex justify-content-center align-items-center"></i>
                      <span class="title text-muted">${cards.nutrition[i].item1}</span>
                      </div>
                      <span class="number">${cards.nutrition[i].num1}</span>
                    </div>
                      </div>

                      <div class="col-12 col-lg-6 mb-3">
                        <div class="item protein d-flex justify-content-between align-items-center text-nowrap">
                      <div class="color2 left d-flex align-items-center gap-2">
                        <i class="fa-solid ${cards.nutrition[i].icon2} rounded-3 d-flex justify-content-center align-items-center"></i>
                      <span class="title text-muted">${cards.nutrition[i].item2}</span>
                      </div>
                      <span class="number">${cards.nutrition[i].num2}</span>
                    </div>
                      </div>
                      
                    </div>

    `;
}

document.getElementById("nutritionitems").innerHTML = nutritionitemsHtml;

var tipsItemsHtml = "";

for (var i = 0; i < cards.tips.length; i++) {
  tipsItemsHtml += `
    

<div class="item d-flex align-items-baseline gap-2">
                      <i class="fa-solid fa-circle-check"></i>
                      <p class="info m-0">${cards.tips[i].info}</p>
                    </div>

    `;
}

document.getElementById("tipsItems").innerHTML = tipsItemsHtml;



}

var randomIndex = Math.trunc(Math.random() * cards.length)

displayCard(cards[randomIndex])

function tryAgain() {

  

do {
  randomIndex = Math.trunc(Math.random() * cards.length)
}
while (cards[randomIndex] === currentCard )

  currentCard = cards[randomIndex]

  displayCard(currentCard)
}