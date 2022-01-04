import React from 'react';
import { View, Text,StyleSheet, TextInput, TouchableOpacity } from "react-native"


const App=()=>{
  return(
    <>

<View style={styles.all}>
    <View>
      <Text style={styles.container}>
        LOGIN 
      </Text>
    </View>

     <View style={styles.container2}>
    <TextInput placeholder="Enter Username"/>
    </View>
    <View style={styles.container3}>
    <TextInput  placeholder="Enter Password"/>
    </View>

    <TouchableOpacity>
      <Text style={styles.addBtn}>
        SUBMIT
      </Text>
    </TouchableOpacity>
    </View>


    </>
  )
}

const styles= StyleSheet.create({
  container:{
    marginTop:140,
    marginLeft:120,
    color:'black',
    fontFamily: 'Times New Roman , Times, serif',
    fontWeight:'bold',
    fontSize:25 
  },
  container2:{
    marginTop:10,
    marginLeft:80,
    borderWidth:2,
    width:150,
    height:40,
    borderColor:'black',
    color:'white',
    borderRadius:10
  },

  container3:{
    borderRadius:10,
    marginLeft:80,
    borderWidth:2,
    width:150,
    height:40,
    marginTop:10,
    borderColor:'black',
    color:'blue',
    
      },


  addBtn:{

    color:'black',
    marginTop:10,
    width: 130,
    padding:10,
    borderWidth:2,
    borderColor:'black',
    marginLeft:90,
    textAlign:'center',
    borderRadius:20,
    fontWeight:'bold'
  },

 
  all:{
    backgroundColor:'lightblue',
    height:500,
    marginTop:110,
    width:300,
    marginLeft:30,
    borderWidth:3,
    borderRadius:10,
  },


})

export default App;