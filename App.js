// In App.js in a new project

import React , {useState} from 'react';
import { View, Text, TextInput, Button , TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeScreen() {
  // Function for making a random meeting id 
  const generateRandomId = () =>{
    return `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`
  }

  const [randomId , setRandomId] = useState("");

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width : "90%"}}>
        <TextInput value={randomId} onChange={(text)=>setRandomId(text)} style={{borderWidth : 1 , borderColor : "black" , marginBottom: 20}} />

        <Button title='Join Meeting' />

        <TouchableOpacity onPress={()=>{
          const id = generateRandomId();
          setRandomId(id);
          // console.warn(id);
        }} style={{marginTop: 30 , alignItems: "center"}}>
          <Text style={{color : "blue"}}>Generating Meeting id</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;