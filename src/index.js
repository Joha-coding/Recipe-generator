function displayRecipe(response) {
  new Typewriter("#recipe", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
    pauseFor: 200000,
  });
}

function generateRecipe(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "0f2927e433a46b3d557tea1356do18c7";
  let prompt = `User instructions : Generate a recipe based on the following ingredients and dietary restrictions ${instructionsInput.value}`;
  let context =
    "You are a gastronomy expect and love to use ingredients to cook great recipes. Your mission is to generate a short and easy recipe in basic HTML with the name of the recipe as a title. Make sure to follow the user instructions";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(displayRecipe);
}

let recipeFormElement = document.querySelector("#recipe-generator-form");
recipeFormElement.addEventListener("submit", generateRecipe);
