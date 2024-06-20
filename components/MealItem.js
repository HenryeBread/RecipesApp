import { View, Text, Pressable, Image, StyleSheet, Platform } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import MealDetails from './MealDetails';

function MealItem({ id, title, imageUrl, duration, complexity, affordability }) {
    const navigation = useNavigation();

    function selectMealItemHandler() {
        navigation.navigate('MealDetail', {
            mealId: id,
        });
    }

    navigation.navigate('DetailPage', {
        mealId: id
    });

    return (
        <View style={styles.mealItem}>
            <Pressable 
                style={({ pressed }) => (styles.button,pressed ? styles.buttonPressed : null)}
            >
                <View>
                    <View style={styles.innerContainer}>
                    <Image source={{uri: imageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{title}</Text>
                </View>
                <MealDetails 
                    duration={duration} 
                    affordability={affordability} 
                    complexity={complexity}/>
                </View>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    mealItem: {
        margin: 16,
        borderRadius: 8,
        overflow: 'hidden',
        backgroundColor: 'white',
        shadow: 'black',
        shaowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },  
    innerContainer: {
        borderRadius: 8,
        overflow: 'hidden'
    },  
    image: {
        width: '100%',
        height: 200
    },
    title: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        padding: 8
    },
    
    buttonPressed: {
        opacity: 0.5
    }
})