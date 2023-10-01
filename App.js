import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Button } from 'react-native';
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
// import { faCircle as faCircleSolid } from '@fortawesome/free-solid-svg-icons';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      <StatusBar style="auto" />

      <View style={styles.center}>
          {/* <FontAwesomeIcon  icon={faCircle} style={{ height : '100px', width:'100px' }} /> */}
          <Image source={require('./assets/ellipse-8.png')}    style={styles.image} />
       
         
      </View>
    
      <View style={styles.center1}>
       <Text style={styles.h2text} ><b> GROW</b>  </Text>
       <Text style={styles.h2text} ><b> YOUR BUSINESS</b>  </Text>
       
        
      </View>

      <View style={styles.center2}>
        <text style={styles.center2text}> We will help you to grow your business using online server</text>
       

          
      </View>
      <View style={styles.center3}>
        <Button style={[styles.btn, styles.loginBtn]} >LOGIN</Button>
        <Button  style={[styles.btn, styles.signUpBtn]} >SIGN UP</Button>
        
      </View>


     
    </View>
    
  
  );
}
// const windowWidth = Dimensions.get('window').width;
// const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#00FFFF',
    alignItems: 'center',
    justifyContent: 'center',

    // màu tuyến tính 

  },
  center:{
    flex: 2,
    // backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
   
  },
  center1:{
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'top',
    alignItems: 'center',
    width: '100%',

  },

  center2:{
    flex: 1,
    // backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
  },

  // vòng tron, phải set size cho ảnh , ảnh mới hiện ra :))
  image: {
    width: 200, // Điều chỉnh chiều rộng của hình ảnh theo ý muốn
    height: 200, // Điều chỉnh chiều cao của hình ảnh theo ý muốn
  },

  h2text:{
    fontWeight: 'bold',
    fontSize: 24,
    marginVertical: 2, // Điều chỉnh khoảng cách giữa các phần tử 
  },

  center2text:{
    fontWeight: 'bold',
    justifyContent: 'top',
    textAlign: 'center',
   
    
  },

  /// BUTTON
  center3:{
    flex: 1,
    backgroundColor: 'green',
    // justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center', // Canh giữa theo chiều ngang
    alignItems: 'center', // canh giữa chiều dọc
  },
  // loginBtn: {
  //   // Điều chỉnh kiểu dáng của nút LOGIN
  //   width: 200, // Điều chỉnh chiều rộng của nút LOGIN
  // },
  // signUpBtn: {
  //   // Điều chỉnh kiểu dáng của nút SIGN UP
  //   width: 120, // Điều chỉnh chiều rộng của nút SIGN UP
  // },

  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    fontSize: 20, // Điều chỉnh kích thước chữ của các nút
  },
  loginBtn: {
    width: 120,
  },
  signUpBtn: {
    width: 120,
  },

 


});


