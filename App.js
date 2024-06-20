import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import DetailPageScreen from './screens/DetailPageScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './store/context/favorites-context';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <DrawerNavigator screenOptions={{
      headerStyle: { backgroundColor: '#351401' },
      headerTintColor: 'white',
      sceneContainerStyle: { backgroundColor: '#3f2f25' },
      drawerContentStyle: {backgroundColor: '#351401'},
      drawerInactiveTintColor: 'white',
      drawerActiveTintColor: '#351401',
      drawerActiveBackgroundColor: '#351401'
    }}  >
      <Drawer.Screen 
        name="Categories" 
        component={CategoriesScreen} 
        options={{
          title: 'All Categories',
          drawerIcon: ({color, size}) => (<Ionicons name="star" color={color} size={size}/>
          ),
        }}
        />
      <Drawer.Screen name="Favorites" component={DetailPageScreen}/>
    </DrawerNavigator>
  );
}

export default function App() {
  return (
    <>
    <StatusBar style='light'/>
    <FavoritesContextProvider>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: '#351401' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#3f2f25' }
          }}  
        >
          <Stack.Screen 
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false
            }}
            />
          <Stack.Screen
          name="MealDetail" 
          component={DetailPageScreen}
          />
          <Stack.Screen 
          name="MealsOverview" 
          component={MealsOverviewScreen}
          options={({ route, navigation }) => {
            const catID = route.params.categoryId;
            return {
              title: catID
            };
          }}
          />
          <Stack.Screen name="DetailPage"component={DetailPageScreen}/>
        </Stack.Navigator>
      </NavigationContainer>
    </FavoritesContextProvider>
    
    
    </>
  );
}

const styles = StyleSheet.create({
  
});
