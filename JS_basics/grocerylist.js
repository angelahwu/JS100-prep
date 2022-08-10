"use strict";

let groceryList = [
  "paprika",
  "tofu",
  "garlic",
  "quinoa",
  "carrots",
  "broccoli",
  "hummus",
];

for (let i = groceryList.length; i >= 0; i--) {
  console.log(groceryList.pop());
}

// Your code.

// logs:
// paprika
// tofu
// garlic
// quinoa
// carrots
// broccoli
// hummus

groceryList; // []
