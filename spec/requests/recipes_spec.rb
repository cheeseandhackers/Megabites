require 'rails_helper'

RSpec.describe "Recipes", type: :request do
  describe "GET /index" do
    it "returns empty array if there are no recipes" do 
      get "/recipes.json"
        expect(response.body).to eq "[]"
    end

    it "returns a recipe" do
      recipe = Recipe.create title: "this is a title", image: "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fimages.media-allrecipes.com%2Fuserphotos%2F3423132.jpg", ingredients: "1 (12 ounce) box Barilla® Gluten Free Spaghetti
      * ½ pound ground beef 1 slice gluten free bread ⅓ cup milk Salt and black pepper to taste 1 egg yolk  ½ cup grated Parmigiano Reggiano cheese.", instructions: 'In a large bowl, combine gluten free bread and milk. Let bread soak, then squeeze out excess milk. In the same bowl, add bread, egg, ground beef, 1/2 the parsley, 1/2 the cheese, and season with salt and pepper. Roll into 3/4 inch balls &amp; set aside. In a large skillet, gently cook the garlic and chili flakes in olive oil. Add meatballs and cook thoroughly. Add the cherry tomatoes and saute for 2 minutes, then season with salt and pepper to taste. Deglaze with wine and reduce mixture by half. Cook the pasta according to package directions, then reserve 1/2 cup of the cooking liquid. Drain the pasta then toss with the sauce and add the reserved cooking liquid. Cook the pasta in the sauce for one minute, remove the skillet from the heat and fold in the remaining cheese and parsley.', ready_in_minutes: 25,cooking_minutes: 15,  diet_type: "Gluten-Free"
        get "/recipes.json"
          result = JSON.parse(response.body)
          expect(result[0]["title"]).to eq  "this is a title"
    end

  end
end
