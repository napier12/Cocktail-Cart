/** @format */
const cocktail = [{
    name: "Aperol Spritz",
    ingredients: "Aperol, Prosecco, Soda water",
    recipe: "1. Add the prosecco, Aperol and club soda to a wine glass filled with ice and stir. 2.Garnish with an orange slice.",
    calories: "145 calories"
},
{
    name: "Mojito",
    ingredients: "Rum, Lime juice, Simple syrup, Mint",
    recipe: "1. Lightly muddle the mint with the simple syrup in a shaker. 2. Add the rum, lime juice and ice, and give it a brief shake, then strain into a highball glass over fresh ice. Alternatively, you can use pebble ice instead and gently swizzle it all together. 3.Top with the club soda. 4. Garnish with a mint sprig and lime wheel.",
    calories: "200 calories"
},
{
    name: "Cosmo",
    ingredients: "Vodka, Cointreau, Cranberry juice, Lime juice",
    recipe: "1. Add the vodka, Cointreau, lime juice, and cranberry juice cocktail into a shaker with ice and shake until well-chilled. 2. Strain into a chilled cocktail glass. 3. Garnish with a lime wedge.",
    calories: "160 calories"
},
{
    name: "Old Fashioned",
    ingredients: "Sugar, Bitters, Bourbon, Orange",
    recipe: "1. Add the sugar and bitters into a mixing glass, then add the water, and stir until the sugar is nearly dissolved. 2. Fill the mixing glass with ice, add the bourbon, and stir until well-chilled. 3. Strain into a rocks glass over one large ice cube. 4. Express the oil of an orange twist over the glass, then drop into the glass to garnish.",
    calories: "180 calories" 
},
{
    name: "Shirley Temple",
    ingredients: "Ginger ale, Grenadine, Lemon, Cherries",
    recipe: "1. Fill a Collins glass with cubed ice. 2. Add the grenadine and lime juice. 3. Top with the ginger ale and gently stir to combine. 4. Garnish with two or three skewered Luxardo maraschino cherries.",
    calories: "250 calories"
},
];

const createCards = () => {
    cocktail.forEach((cocktail, index) => {
      $("#cardContainer").append(`
        <div class="box" data-index="${index}">
          <img src="${cocktail.name}.jpg" alt="${cocktail.name}">
          <div class="text">
            <strong>${cocktail.name}</strong><br>${cocktail.ingredients}
          </div>
        </div>
      `);
    });
  };
 const showInformation = () => {
  createCards();

  $(".box").each(function () {
    const $box = $(this);
    const index = $box.data("index");
    const drink = cocktail[index];
    const $text = $box.find(".text");

    $box.on("mouseover", function () {
      $text.html(`<strong>Recipe:</strong><br>${drink.recipe}`);
    });

    $box.on("click", function () {
      $text.html(`<strong>Calories:</strong><br>${drink.calories}`);
    });

    $box.on("mouseout", function () {
      $text.html(`<strong>${drink.name}</strong><br>${drink.ingredients}`);
    });
  });
};

showInformation();