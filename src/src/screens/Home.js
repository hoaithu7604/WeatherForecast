import React, {Component} from 'react';
import {View,Text,StatusBar,Button} from 'react-native';
import {Container} from '../components/Container';
import {InputWithText} from '../components/TextInput';

const CITY_TEXT =  'City';

class Home extends Component {
    getWeather(city){
        var url = 'https://api.openweathermap.org/data/2.5/weather?units=metric&appid=3a9cdaa1fe9c72bdebc6bf16c711f838';
        url = url + '&q='+city;
        fetch(url)
		.then(response => response.json())
		.then(data => {
            if (data.cod!=200) 
            {
                console.log(data.message);
                console.log('-----------------------');
            }
            else{
                console.log('City: '+data.name);
                console.log('Weather: '+data.weather[0].main);
                console.log('Temp: '+data.main.temp);
                console.log('Wind speed: '+data.wind.speed);
                console.log('-----------------------');
            }
		})
	}
    render(){
        return (
            <Container>
                <StatusBar barStyle="light-content"/>
                <InputWithText 
                buttonText = {CITY_TEXT}
                onChangeText = {this.getWeather}
                />
            </Container>
        );
    }
}
export default Home;