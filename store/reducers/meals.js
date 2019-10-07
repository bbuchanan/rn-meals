import { MEALS } from "../../data/dummy-data";
import { TOGGLE_FAVORITE } from "../actions/meals";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingIndex = state.favoriteMeals.findIndex(
        x => x.id === action.mealId
      );
      if (existingIndex >= 0) {
        const updatedFavMeals = [...state.favoriteMeals];
        updatedFavMeals.splice(existingIndex);
        return { ...state, favoriteMeals: updatedFavMeals };
      } else {
        const favMeal = state.meals.find(x => x.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(favMeal)
        };
      }

    default:
      return state;
  }

  return state;
};

export default mealsReducer;
