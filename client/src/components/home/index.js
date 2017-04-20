import React from 'react';
import {Text, View, Image } from 'react-native';
import './heroImg.css';
import HomeLink from '../homeLink';
const styles = {
  image: {
    width: null,
    height: 400,
    resizeMode: 'cover',
  }
}
export default function Home(props){
  
  return(
    <View style={{ flex: 1}}>
      <Image source={require('../../images/stock03.jpg')} style={styles.image} >
      <Text className="tagline" >Help a pet in need</Text>
      </Image>
        <div className="home-link-container">
          <HomeLink /> <HomeLink /> <HomeLink />
        </div>
    </View>
  )
}