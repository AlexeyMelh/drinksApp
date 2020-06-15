import * as React from 'react';
import { ImageBackground, Platform, StyleSheet, Text, TouchableOpacity, View, Image, Button, Linking, ScrollView } from 'react-native';
import * as Font from 'expo-font'
import {useState} from 'react';
import {AppLoading} from 'expo'
import { HeaderTitle } from '@react-navigation/stack';
import { createStackNavigator } from '@react-navigation/stack';

import FilterScreen from './FilterScreen';
import { Link } from '@react-navigation/native';

class LoadCocktails extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
   
  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail')
    .then((response) => response.json())
    .then((responseJson) =>{
        this.setState({
          isLoading:false,
          dataSource:responseJson.drinks,
        })
    });
  }
  
  render(){
    
    
    let cocktails = this.state.dataSource.map((val1, val2, key) =>{
      
      
      return  (
        
        <View key={key} style={styles.item}>
        
        <Image
        style={styles.tinyLogo}
        source={{
          uri: val1.strDrinkThumb,
        }}
      />
        <Text style={styles.category}>{val1.strDrink}</Text >
        
          
            
        </View>
        
      )
    })
    
    return (
    <ScrollView style={styles.container}>
      <Text style={styles.category2}>Cockteils</Text>
      {cocktails}
    </ScrollView>)
      
  } 
   
 
}

class LoadOrdinaryDrinks extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
   
  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Ordinary Drink')
    .then((response) => response.json())
    .then((responseJson) =>{
        this.setState({
          isLoading:false,
          dataSource:responseJson.drinks,
        })
    });
  }
  
  render(){
    
    
    let cocktails = this.state.dataSource.map((val1, val2, key) =>{
      
      
      return  (
        
        <View key={key} style={styles.item}>
        
        <Image
        style={styles.tinyLogo}
        source={{
          uri: val1.strDrinkThumb,
        }}
      />
        <Text style={styles.category}>{val1.strDrink}</Text >
        
          
            
        </View>
        
      )
    })
    
    return (
    <ScrollView style={styles.container}>
      <Text style={styles.category2}>Ordinary Drinks</Text>
      {cocktails}
    </ScrollView>)
      
  } 
   
 
}


class LoadMilcEtc extends React.Component{ 
  constructor(props) {
    super(props);
    this.state = {
      loading: true,
      dataSource:[]
     };
   }
   
  componentDidMount(){
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Milk \/ Float \/ Shake')
    .then((response) => response.json())
    .then((responseJson) =>{
        this.setState({
          isLoading:false,
          dataSource:responseJson.drinks,
        })
    });
  }
  
  render(){
    
    
    let cocktails = this.state.dataSource.map((val1, val2, key) =>{
      
      
      return  (
        
        <View key={key} style={styles.item}>
        
        <Image
        style={styles.tinyLogo}
        source={{
          uri: val1.strDrinkThumb,
        }}
      />
        <Text style={styles.category}>{val1.strDrink}</Text >
        
          
            
        </View>
        
      )
    })
    
    return (
    <ScrollView style={styles.container}>
      <Text style={styles.category2}>Milk / Float / Shake</Text>
      {cocktails}
    </ScrollView>)
      
  } 
   
 
}




class Drinks extends React.Component{ 
   render(){
     
    if(showOrdinaryDrink=="true" && showCocktail=="true"){
      return <LoadCocktails/> && <LoadOrdinaryDrinks/>
    }
    if(showCocktail=="true"){
      return <LoadCocktails/>
    }
    
    if(showOrdinaryDrink=="true"){
      return <LoadOrdinaryDrinks/>
    }
    
    
    return(

      <Text></Text>
    )
    
  }
  
}


export default function DrinksScreen({navigation}) {
  

  


  const [showCocktail, setShowCocktail] = useState(true);
  global.setShowCocktail = setShowCocktail;
  global.showCocktail = showCocktail;

  const [showOrdinaryDrink, setOrdinaryDrink] = useState(false);
  global.showOrdinaryDrink = showOrdinaryDrink;
  global.setOrdinaryDrink = setOrdinaryDrink;

  const [showCocoa, setCocoa] = useState(false);
  global.setCocoa = setCocoa;
  global.showCocoa = showCocoa;

  const [showShot, setShot] = useState(false);
  global.setShot = setShot;
  global.showShot = showShot;

  const [showMiltEtc, showMiltEtc] = useState(false);
  global.setMiltEtc = setMiltEtc;
  global.showMiltEtc = showSMiltEtc;
  
  navigation.setOptions({ headerTitle: "D R I N K S" });
  navigation.setOptions({ headerStyle:{ borderBottomWidth:4} });
  navigation.setOptions({ headerRight: () => (
    <TouchableOpacity activeOpacity = { .9 } onPress={()=>navigation.navigate('FilterScreen', {
      showCocktail:showCocktail,
      setShowCocktail:setShowCocktail
    })}>
    <Image source={require('../src/img/filterBtn.png')} style={styles.info} ></Image>
    </TouchableOpacity>   
  ) });
    
      
  return <Drinks/>;
  
}
  




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255,255,255)'
  },
  info:{
    width:25,
    height:25,
    marginRight:25
  },
  item:{
    flexDirection:"row",
    height: 50,
    //marginLeft: 20,
    paddingLeft:16,
    justifyContent: "flex-start",
    //borderBottomWidth: 1,
    borderBottomColor: "#eee",
   // paddingTop: 10,
    marginTop:35
  },
  category2:{
    paddingLeft:16,
    paddingTop:10,
    marginBottom: -20,
    fontWeight:"bold",
    
    
    fontSize: 20,
    color: "rgb(176,196,222)"
  },
  tinyLogo: {
    width: 80,
    height: 80,
    paddingLeft:7,
    //marginLeft: 10,
    justifyContent: "flex-start",
  },
  category:{
    //flexDirection:"row",
    paddingLeft:40,
    //height: 50,
    paddingTop:25
    
  },
  
});
