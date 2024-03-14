const API_KEY ='4a0a50de5d14e48d10e2e42f7014de98';
const makeIconURL=(iconId)=>`https://cdn-icons-png.flaticon.com/128/3845/3845731.png`
const getFormattedWeatherData=async(city,units='metric')=>{
              const URL=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`;

              const data=await fetch(URL)
              .then((res)=>res.json())
              .then((data) =>data);
              
const{
weather,
main:{temp, feels_like,temp_max,pressure,humidity},
wind:{speed},
sys:{country},
name,
}=data;
const{ description, icon}=weather[0];


return{
description,
iconURL:makeIconURL(icon),
temp,
feels_like,
temp_max,
pressure,
humidity,
speed,
country,
name,


}
};
export{getFormattedWeatherData};