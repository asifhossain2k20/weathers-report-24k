const API_KEY=`0c129c39e6af5a541dafcf7dc066356c`
const loadTemperature=city=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(res=>res.json())
    .then(data=>{
        displayTemperature(data)
    })
}
const displayTemperature=data=>{
            // const temperature=document.getElementById('temperature')
            // temperature.innerText=data.main.temp;

            setInnertextById('temperature',data.main.temp)
            setInnertextById('condition',data.weather[0].main)
}

const setInnertextById=(id,text)=>{
    const temperature=document.getElementById(id)
    temperature.innerText=text;
}

document.getElementById('btn-search').addEventListener('click',function(){
    const searchFeild=document.getElementById('search-field');
    const city=searchFeild.value;
    document.getElementById('city').innerText=city;
    loadTemperature(city)
})

