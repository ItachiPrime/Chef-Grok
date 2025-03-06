/* eslint-disable react/prop-types */
export default function Ingredients(props) {
  console.log(props)

  const ingredientList = props.ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ))

  return (
    <section className="ingredientList">
        <h2>Ingredients on hand:</h2>
        <ul className="ingredients-list" aria-live="polite">{ingredientList}</ul>
        {(ingredientList.length > 3) && <div className="get-recipe-container">
          <div>
            <h3>Ready for a recipe?</h3>
            <p>Generate a recipe from your list of ingredients.</p>
          </div>
          <button onClick={props.onclick}>Get a recipe</button>
        </div>}
    </section>
  )
}
