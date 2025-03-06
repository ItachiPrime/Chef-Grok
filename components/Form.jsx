import React from "react";
import Recipe from "./Recipe";
import Ingredients from "./Ingredients";
import { getRecipeFromLlama } from "../ai";

export default function Form() {
  const [ingredients , setIngredients] = React.useState([]);
  const [recipeshown, setRecipeshown] = React.useState(false);
  const [reply, setReply] = React.useState("");

  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredients( prev => [...prev , newIngredient])
  }

  async function handleRecipe() {
    const response = await getRecipeFromLlama(ingredients);
    setReply(response); // Store AI-generated recipe
    setRecipeshown(true); // Show the recipe
  }

  return (
    <main>
    <form className="form" action={addIngredient}>
      <input type="text" aria-label="Add Ingredient" placeholder="e.g. oregano" name="ingredient"/>
      <button >+ Add Ingredient</button>
    </form>
    { (ingredients.length > 0 ) && <Ingredients ingredients={ingredients} status={recipeshown} onclick={handleRecipe} />}
    {recipeshown && <Recipe response={reply} />}
    </main>
  )
}
