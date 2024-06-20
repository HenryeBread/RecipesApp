import { useLayoutEffect } from 'react';
import { View, StyleSheet, FlatList} from 'react-native';
import {} from '@react-navigation/native'

import { MEALS, CATEGORIES } from "../data/dummydata";
import MealItem from '../components/MealItem';
import MealsList from '../components/MealsList';

function MealsOverviewScreen({ route, navigation }) {
    const catID = route.params.categoryID

    const DisplayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catID) >= 0;
    });

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find(
        (category) => category.id === catID
        ).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, [catID, navigation])

    return <MealsList items={DisplayedMeals}/>
    
};

export default MealsOverviewScreen;

