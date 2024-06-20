import { useLayoutEffect } from 'react';
import { View, Image, Text, StyleSheet, ScrollView} from 'react-native';
import { MEALS } from '../data/dummydata';
import MealDetails from '../components/MealDetails';
import Subtitle from '../components/Subtitle';
import List from '../components/List';
import IconButton from '../components/IconButton';

function DetailPageScreen( { route, navigation }) {
    const favoriteMealsCtx = useContext(FavoritesContext);

    const mealIsFavorite = favoriteMealsCtx.ids.includes(mealId);


    const mealId = route.params.mealId;

    const selectedMeal = MEALS.find((meal) => meal.id === mealId);

    function favoriteStatusHandler() {
        if (mealIsFavorite) {
            favoriteMealsCtx.removeFavorite(mealId);
        } else {
            favoriteMealsCtx.addFavorite(mealId);
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => {
                return (
                <IconButton 
                    icon={mealIsFavorite ? 'star' : 'star-outline'} 
                    color="white" 
                    onTap={favoriteStatusHandler}/>
                )
            }
        });
    }, [navigation, favoriteStatusHandler]);

    return (
        <ScrollView style={styles.rootContainer}>
            <Image source={{uri: selectedMeal.imageUrl}} style={styles.image}/>
                <Text style={styles.title}>{selectedMeal.title}</Text>
                <View>
                    <MealDetails 
                        duration={selectedMeal.duration} 
                        complexity={selectedMeal.complexity} 
                        affordability={selectedMeal.affordability}
                        textStyle={styles.detailText}
                    />
                </View>
                <View style={styles.subtitleContainer}>
                    <Text style={styles.subtitle}>Ingredients</Text>
                </View>
                <View style={styles.listOuterContainer}>
                    <View style={styles.listContainer}>
                        <Subtitle>Ingredients</Subtitle>
                        <List data={selectedMeal.ingredients}/>
                        <Subtitle>Steps</Subtitle>
                        <List data={selectedMeal.steps}/>
                    </View>
                </View>
        </ScrollView>
    )
}

export default DetailPageScreen; 

const styles = StyleSheet.create({
    rootContainer: {
        marginBottom: 32
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: '#ffffff'
    },
    detailText: {
        color: 'white'
    },
    listContainer: {
        maxWidth: '80%'
    },
    listOuterContainer: {
        alignItems: 'center'
    }
})