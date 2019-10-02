import React from "react";
import { View, Text, StyleSheet, Button, Platform } from "react-native";

import Colors from "../constants/Colors";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The Category Meal Screen</Text>
      <Button
        title="Go to Details"
        onPress={() =>
          props.navigation.navigate({
            routeName: "MealDetail"
          })
        }
      ></Button>
      <Button title="Go back" onPress={() => props.navigation.goBack()} />
    </View>
  );
};

CategoryMealScreen.navigationOptions = navigationData => {
  const catId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return {
    headerTitle: selectedCategory.title,
    headerStyle: {
      backgroundColor: Platform.OS === "android" ? Colors.primaryColor : "white"
    },
    headerTintColor: Platform.OS === "android" ? "white" : Colors.primaryColor
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealScreen;
