import {React,useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default function App() {

  const [username , setUsername] = useState("");

  return (
    <View style={styles.container}>
        <View style={styles.login_container}>
          <Text style={styles.login_header}>Please Login To Continue</Text>
          <Text style={styles.user_passName}>Username: </Text>
          <TextInput placeholder='Harinath Weds Surya' style={{borderWidth:0.5, height: 40, padding : 5}} onChangeText={newText => setUsername(newText)}></TextInput>
          <Text style={styles.user_passName}>Password: </Text>
          <TextInput secureTextEntry={true} placeholder='Enter your password' style={{borderWidth:0.5, height: 40, padding : 5}}></TextInput>
          <TouchableOpacity style={styles.button} onclick={() => {Loadings}}><Text>Login</Text></TouchableOpacity>
        </View>
    </View>
  );
}

const Loading = () => {
  return (
    <View style={load_comp.loading_screen}>
        <Image></Image>
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    backgroundColor : "#71c7ec",
  },
  login_container: {
    height : 340,
    width : '70%',
    marginLeft : "15%",
    marginRight : "15%",
    marginTop : '60%',
    marginBottom : "60%",
    backgroundColor : "#FFFFFF",
    elevation : 10,
    shadowColor : '#000000',
    borderRadius : 20,
    padding : "5%",
  },
  login_header : {
    fontSize : 18,
    textDecorationLine: 'underline',
    paddingBottom : 25,
  },
  user_passName : {
    fontSize : 16,
    paddingBottom : 10,
    paddingTop : 10,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#009E60',
    padding: 10,
    marginTop : 20,
  },
});

const load_comp = StyleSheet.create({
  loading_screen : {
    backgroundColor : "#71c7ec",
  },
});