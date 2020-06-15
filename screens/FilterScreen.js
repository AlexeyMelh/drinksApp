import { Ionicons } from '@expo/vector-icons';
import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { StyleSheet, Text, View, Button, TouchableOpacity } from 'react-native';
import { RectButton, ScrollView } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';
import Checkbox from 'react-native-custom-checkbox';
import PropTypes from 'prop-types';

import DrinksScreen from './DrinksScreen'; 
//<Button color="rgb(100,149,237)"  title="APPLY" ></Button>
function myFunction(name, checked){
  if(name=="Cocktail" && checked ==true){
    setShowCocktail("true")
  }
  if(name=="Cocktail" && checked ==false){
    setShowCocktail("false")
  }
  if(name=="Shot" && checked ==true){
    setShot("true")
  }
  if(name=="Shot" && checked ==false){
    setShot("false")
  }
  if(name=="Ordinary Drink" && checked ==true){
    setOrdinaryDrink("true")
  }
  if(name=="Ordinary Drink" && checked ==false){
    setOrdinaryDrink("false")
  }
  
  if(name=="Milk \/ Float \/ Shake" && checked ==true){
    setMiltEtc("true")
  }
  if(name=="v" && checked ==false){
    setMiltEtc("false")
  }
}

class Filter extends React.Component{
  
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
   
  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list')
    .then((response) => response.json())
    .then((responseJson) =>{
        this.setState({
          isLoading:false,
          dataSource:responseJson.drinks,
        })
    });
  }
  
  render(){
    
    
    let movies = this.state.dataSource.map((val, key) =>{
      return  (
        
        
        <View key={key} style={styles.item}>
          
          
        <Text style={styles.category}>{val.strCategory}</Text >
          <Checkbox name={val.strCategory} size={27} checked={false}
           //style={{backgroundColor: 'rgb(255,255,255)', color:'black', borderWidth: 0, } }  onChange={(name, checked) => myFunction(name, checked)} />
            style={{backgroundColor: 'rgb(255,255,255)', color:'black', borderWidth: 0, } }  onChange={(name, checked) => myFunction(name, checked)}/> 
          
            
        </View>
        
        )
       
    })
    return (
    <View style={styles.container}>
      {movies}
      <View style={styles.btn}>
        
      </View>
      
    </View>)
      
  } 
  

}
export default function FilterScreen({route, navigation})  {
  
  const{showCocktail, setShowCocktail}=route.params
  navigation.setOptions({ headerTitle: "F I L T E R S" });
  navigation.setOptions({ headerStyle:{ borderBottomWidth:4} });
  navigation.setOptions({ headerTintColor:"rgb(19, 0, 0)" });
  
  return <Filter/>;
}



const styles = StyleSheet.create({
  category:{
    //flexDirection:"row",
    fontSize: 19,
    
  },
  CheckBox:{
    //alignSelf: "center",
    backgroundColor: "red",
  
    paddingRight:10,
    paddingLeft:10,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)',
    
  },
  item:{
    flexDirection:"row",
    height: 45,
    //marginLeft: 20,
    paddingLeft:26,
   // justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#eee",
    paddingTop: 10
  },
  btn:{
      marginTop:50,
      width:"50%",
      width: 220,
      alignSelf:'center',
      fontSize: 30,
      justifyContent: "center",
      
  }
  
 
  
});
