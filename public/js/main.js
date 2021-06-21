const submitbtn = document.getElementById("search_btn");
const cityname = document.getElementById("cityName");
const city_output = document.getElementById('city_output');
const temp = document.getElementById("temp");
const temp_status = document.getElementById("temp_status");
const date = document.getElementById("date");
const day = document.getElementById("day");

const datahiding = document.querySelector('.middle_layer');

var date_object = new Date();

const getCurrentDay = ()=>{
    let weekday = ["Sunday","Monday", "Tuesday", "Wednesday", "Thrusday", "Friday", "Saturday"]
    let date_object = new Date();
    let dayy = weekday[date_object.getDay()];
    return dayy;
}
day.innerText = getCurrentDay();

const getCurrentDate = ()=>{
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"]
    let date_object = new Date();
    var month = months[date_object.getMonth() +1];
    return month;

}
date.innerText = `${date_object.getDate()} ${getCurrentDate()}`;


const getInfo = async(e)=>{
    e.preventDefault();
    
    let cityval = cityname.value;
    if(cityval===""){
        city_output.innerText = `Please enter a valid city`;
        datahiding.classList.add('data_hide');
    }
    else{
        try{
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityval}&units=metric&appid=d1e078b33dd791a9d6dd2cd31af5ddaf`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            temp.innerText = arrData[0].main.temp;
            city_output.innerText = `${arrData[0].name} ${arrData[0].sys.country}`;
            temp_mood = arrData[0].weather[0].main;
            switch (temp_mood) {
                case "Clear":
                    temp_status.innerHTML = "<i class = 'fas fa-sun' style ='color: #eccc68;'></i>"
                    break;
                case "Clouds":
                    temp_status.innerHTML = "<i class = 'fas fa-cloud' style ='color: #f1f2f6;'></i>"   
                    break;
                case "Rain":
                    temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style ='color: #a4b0be;'></i>"   
                    break;
                default:
                    temp_status.innerHTML = "<i class = 'fas fa-cloud-rain' style ='color: #a4b0be;'></i>"
                    break;
            }
            datahiding.classList.remove('data_hide');

        }
        catch{
            city_output.innerText = `Please enter a valid city`;
            datahiding.classList.add('data_hide');
        }
        

    }

}

submitbtn.addEventListener('click', getInfo);

