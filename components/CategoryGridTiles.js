import { View, Pressable, Text, StyleSheet, Platform } from 'react-native';

function CategoryGridTiles({title, color, onPress}) {
    return (
        <View style={styles.outerView}>
            <Pressable
             style={({ pressed }) => [
                styles.button,
                pressed ? styles.buttonPressed : null
                ]}
                onPress={onPress}
                >
                <View style={[styles.innerView, {backgroundColor: color}]}>
                    <Text style={styles.title}>{title}</Text>
                </View>
            </Pressable>
        </View>
    );   
}

export default CategoryGridTiles;

const styles = StyleSheet.create({
    outerView: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        shadow: 'black',
        shaowOpacity: 0.25,
        shadowOffset: { width: 0, height: 2},
        shadowRadius: 8,
        backgroundColor: 'white',
        overflow: Platform.OS === 'android' ? 'hidden' : 'visible'
    },
    button: {
        flex: 1
    },
    buttonPressed: {
        opacity: 0.5
    },
    innerView: {
        flex: 1,
        padding: 16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 8
    },
    title: {
        fontWeight: 'bold',
        fontSize: 18
    }
})