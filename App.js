import React , {useState} from 'react';
import { View, Text, TextInput, Button , TouchableOpacity , Alert } from 'react-native';
import { NavigationContainer , useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CallingSreen from "./CallingScreen"


function HomeScreen() {
  // Function for making a random meeting id 
  const [userName , setUserName] = useState('');
  const [randomId , setRandomId] = useState('');

  const navigation = useNavigation();

  const generateRandomId = () =>{
    return `${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}-${Math.floor(Math.random() * 10000)}`
  }


  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{width : "90%"}}>

        <TextInput value={userName} placeholder={"Enter Your Name"} onChange={(text)=>setUserName(text)} style={{borderWidth : 1 , borderColor : "black" , marginBottom: 20}} />

        <TextInput value={randomId} placeholder={"Enter Meeting Id"} onChange={(text)=>setRandomId(text)} style={{borderWidth : 1 , borderColor : "black" , marginBottom: 20}} />

        <Button title='Join Meeting' onPress={()=>{
          if(randomId.length > 5 && 
            userName.length >= 5 && 
            userName.indexOf(' ') == -1){
            navigation.navigate("CallingSreen" , {callId: randomId , name: userName} );
          }
          else{
            Alert.alert("Enter Valid Id or Valid User Name" , userName);
          }
        }} />

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
        <Stack.Screen name="CallingSreen" component={CallingSreen} options={{
          headerShown : false
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;