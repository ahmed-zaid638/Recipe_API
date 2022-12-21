let search_input = document.querySelector(".search-input");
let search_btn = document.querySelector(".search-btn");
let results_area = document.querySelector(".results-area");
let recipe_details = document.querySelector(".recipe-details");

// Events
search_btn.addEventListener("click", getRecipe);
results_area.addEventListener("click", getRecipeDetails);

// Get Recipe 
function getRecipe() {
  let inputValue = search_input.value;
  let api_url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${inputValue}`;
  fetch(api_url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
    })
    .then((data) => {
      displayRecips(data);
      console.log(data);
    });
}
// Display Recips 
function displayRecips(recipes) {
  results_area.innerHTML = "";
  if (recipes.meals == null) {
    // `<div class ="empty-data> No Recipes Founded</p>`
    results_area.innerHTML = `No Matched Recipes Founded`
    return;
  }
  recipes.meals.forEach((recipe) => {
    results_area.innerHTML += `
    <div class="card">
    <div class="card-img">
      <img src=${recipe.strMealThumb} alt="">
    </div>
    <div class="card-info">
    <h2>${recipe.strMeal}</h2>
    <a href="#" class ="recipe-btn"data-id = ${recipe.idMeal}>Get Recipe</a>
    </div>
   `;
  });
}
// Get Recipe Detils
function getRecipeDetails(e) {
  console.log(e.target);
  if (e.target.classList.contains("recipe-btn")) {
    let id = e.target.getAttribute("id-meal");
    let api_url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=`;
    fetch(api_url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        displayRecipeDetails(data);
      });
  }
}
// Display Recipe Detils
function displayRecipeDetails() {
  console.log("recipe-details");
  recipe_details.innerHTML = `
  <i class="fa-solid fa-times"></i>
  <div class="info">
    <h2>tile</h2>
    <div class="instruction"></div>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum,
      quam?
    </p>
    <a href="">Watch a video</a>
  `;
}
