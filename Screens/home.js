import React from "react"
import {View,Text,StyleSheet,TouchableOpacity} from "react-native"
import axios from "axios"

 export default class HomeScreen extends React.Component{
     constructor(){
         super()
         this.state = {movieDetails:{}}
     }

    componentDidMount(){
        this.getMovie()
    }
    getMovie=()=>{
        const url = "#"//the api url generated through ngrok
        axios.get(url).then(Response=>{let details = Response.data.data;
        details["duration"]=this.timeConvert(details.duration);
        this.setState({movieDetails:details})
    }).catch(error=>console.log(error.message));
    }
    likedMovie=()=>{
        const url = "#"//the api url generated through ngrok
        axios.post(url).then(Response=>{this.getMovie()})
    .catch(error=>console.log(error.message));
    }
    unlikedMovie=()=>{
        const url = "#"//the api url generated through ngrok
        axios.post(url).then(Response=>{this.getMovie()})
        .catch(error=>console.log(error.message));
    }
    DidNotWatch=()=>{
        const url = "#"//the api url generated through ngrok
        axios.get(url).then(Response=>{this.getMovie()})
        .catch(error=>console.log(error.message));
    }
render(){
    const {movieDetails}= this.state
    if (movieDetails.poster_link){
        const {
            poster_link,title,release_date,duration,overview,rating
        }= movieDetails
        return(
            <View style = {styles.container}>
                <View style = {styles.headerContainer}>
                    <Header centreComponent = {{text:"Movie Recommended",style:styles.headerTitle}} rightComponent = {{icon:"search",color:"#fff"}} backgroundColor = {"#d5009"} containerStyle = {{flex:1}}/>
                </View>
                <View style = {styles.subContainer}>
                    <View style = {styles.subTopContainer}>
                        <Image style = {styles.posterImage} source = {{uri:poster_link}}/>
                    </View>
                    <View style = {styles.subBottomContainer}>
                        <Text>title</Text>
                        <Text>duration</Text>
                    </View>
                </View>
            </View>
            
        )
    }
}
}