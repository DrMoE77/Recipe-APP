var formEl = document.querySelector("#form-input");
var searchQuery = document.querySelector("#search-query");
var dietRequirement = document.querySelector("#diet");
var mealType = document.querySelector("#meal-type");
var searchResults = document.querySelector("#recipe-results");
var veganCheckboxEl = document.querySelector("#vegan");
var glutenFreeCheckboxEl = document.querySelector("#gluten-free");
var vegeterianCheckboxEl = document.querySelector("#vegetarian");
var dairyFreeCheckboxEl = document.querySelector("#dairy-free");
var randomPokemon = document.querySelector(".random-pokemon");
var pokemonImgEl = document.querySelector("#pokemon-img");
var pokemonBtnEl = document.querySelector("#pokemon-rng");

var apiID = "bf7ef27c";
var apiKey = "f26b311cc0cf67ce4f322e55dca05398";

var veganOption;
var glutenOption;
var vegetarianOption;
var dairyOption;

var favRecipesList = [];

var formSubmitHandler = function (event) {
  event.preventDefault();

  searchResults.innerHTML = "";

  if (veganCheckboxEl.checked) {
    veganOption = "vegan";
  } else {
    veganOption;
  }

  if (glutenFreeCheckboxEl.checked) {
    glutenOption = "gluten-free";
  } else {
    glutenOption;
  }

  if (vegeterianCheckboxEl.checked) {
    vegetarianOption = "vegetarian";
  } else {
    vegetarianOption;
  }

  if (dairyFreeCheckboxEl.checked) {
    dairyOption = "dairy-free";
  } else {
    dairyOption;
  }

  var query = searchQuery.value;

  if (query) {
    searchAPi(query, veganOption, glutenOption, vegetarianOption, dairyOption);
  }
};

var searchAPi = function (query, vegan, glutenFree, vegetarian, dairy) {

  var apiUrl =
    "https://api.edamam.com/api/recipes/v2?" +
    "q=" +
    query +
    "&app_key=" +
    apiKey +
    "&app_id=" +
    apiID +
    "&type=public";

  //logical function to determine which paramaters are added to API url
  if (vegan) {
    apiUrl += "&health=" + vegan;
  }

  if (vegetarian) {
    apiUrl += "&health=" + vegetarian;
  }

  if (dairy) {
    apiUrl += "&health=" + dairy;
  }

  if (glutenFree) {
    apiUrl += "&health=" + glutenFree;
  }

  console.log(apiUrl);

  var resultsInt = 10;

  fetch(apiUrl, {
    mode: "cors",
  }).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {

        //loop until there are 20 results displayed on page
        for (var i = 0; i < resultsInt; i++) {
          var recipeResults = {
            label: data.hits[i].recipe.label,
            url: data.hits[i].recipe.url,
            image: data.hits[i].recipe.images.REGULAR.url,
          };
          displayResults(
            recipeResults.label,
            recipeResults.url,
            recipeResults.image
          );
        }
      });
    }
  });
};


// display data on page in cards
var displayResults = function (label, url, image) {
  var cardEl = document.createElement("div");
  var cardSectionEl = document.createElement("div");
  var subtitleEl = document.createElement("h4");
  var descriptionEl = document.createElement("p");
  var linkEl = document.createElement("a");
  var linkImageEl = document.createElement("a");
  var cardImageEl = document.createElement("img");
  var favButton = document.createElement("i");

  cardEl.setAttribute("class", "card");
  cardSectionEl.setAttribute("class", "card-section");
  subtitleEl.textContent = label;
  cardImageEl.src = image;
  linkEl.setAttribute("href", url);
  linkEl.setAttribute("target", "_blank");
  linkEl.setAttribute("class", "card-link");
  linkImageEl.setAttribute("href", url);
  linkImageEl.setAttribute("target", "_blank");
  descriptionEl.className = "description";
  favButton.setAttribute("class", "far fa-heart");

  searchResults.appendChild(cardEl);
  linkEl.appendChild(subtitleEl);
  cardEl.appendChild(cardSectionEl);
  cardSectionEl.appendChild(linkImageEl);
  linkImageEl.appendChild(cardImageEl);
  cardSectionEl.appendChild(descriptionEl);
  cardSectionEl.appendChild(linkEl);
  cardSectionEl.appendChild(favButton);


  //when heart icon is clicked, it saves data from card into local storage.
  favButton.addEventListener("click", function () {
    var favRecipes = {
      name: "",
      url: "",
      imageUrl: "",
    };

    favRecipes.name = this.parentElement.querySelector("h4").textContent;
    favRecipes.imageUrl =
      this.parentElement.firstChild.querySelector("img").src;
    favRecipes.url = this.parentElement.querySelector(".card-link").href;
    favRecipesList.push(favRecipes);
    localStorage.setItem("favourites", JSON.stringify(favRecipesList));
    var testLocal = JSON.parse(localStorage.getItem("favourites"));
    favButton.classList.add("saved-recipe", "fas");
    favButton.classList.remove("far");

    console.log(testLocal);


  });




};

formEl.addEventListener("submit", formSubmitHandler);


//Second API
var getPokemon = function () {

  var pokeInt = 898;
  var pokeRandomIndex = Math.floor(Math.random() * pokeInt);
  var pokemonApiUrl = "https://pokeapi.co/api/v2/pokemon/" + pokeRandomIndex;


  fetch(pokemonApiUrl).then(function (
    response
  ) {
    if (response.ok) {
      response.json().then(function (data) {
        console.log(data);

        var originalPokemonStr = capitalizeFirstLetter(data.name)

        function capitalizeFirstLetter(string) {
          return string.charAt(0).toUpperCase() + string.slice(1);
        }

        randomPokemon.textContent = originalPokemonStr;
        pokemonImgEl.setAttribute("src", data.sprites.front_default)

      });
    }
  });
};

pokemonBtnEl.addEventListener("click", function () {
  getPokemon()
});


getPokemon();
