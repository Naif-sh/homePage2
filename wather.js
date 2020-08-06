window.addEventListener('load', ()=> {
    let long;
    let lat;
   		
	var apiid = "appid=8e1880f460a20463565be25bc573bdc6";
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition
        (position => {
          long = position.coords.longitude;
          lat = position.coords.latitude;
     
         //lat +0.15, long +1.15
          
          const api = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&${apiid}`;           
        
            fetch(api)
        .then(response =>{
          return response.json();
        })
       .then(obj => {
        console.log(obj);
        
           //tempf.textContent = obj.main.temp;
         
        var temperature = obj.main.temp;
                                 
		var tempc = Math.round(temperature -273.15 )
          tempf.textContent = `${tempc}c°`;
        //   loca.textContent = obj.sys.country+'/';
          city.textContent = obj.name;
          desc.innerHTML = obj.weather[0].description;
        
        //   var id = obj.weather[0].id;
        //  icon.innerHTML = `<i class="wi wi-owm-${id}"></i>`;
        
        
         var temperature = obj.main.temp_min;
                                
		var tempc = Math.round(temperature  -274.15 )
          tempMin.textContent = `${tempc}c°Min`;
          
          var temperature = obj.main.temp_max;
          
        var tempc = Math.round(temperature  -272.15)
        tempMax.textContent = `${tempc}c°Max`;

        // var humidity = obj.main.humidity;
        //   humidity1.textContent = (humidity - 10)+'%humidity';
      
        // var windspeed =  obj.wind.speed;
        // var winds = Math.round(windspeed);
        // windSpeed1.textContent = `${winds}km/h `;
         
          	
      });
      });
    }
  });
    //ICon darksky API

  window.addEventListener('load', ()=> {
    let long;
    let lat;

    if(navigator.geolocation) {
      navigator.geolocation.getCurrentPosition
      (position => {
        long = position.coords.longitude;
        lat = position.coords.latitude;
  
        const proxy ="https://cors-anywhere.herokuapp.com/"
        const api = `${proxy}https://api.darksky.net/forecast/601b2e3e10dcd4de07f4f98e55c9d9c4/${lat},${long}`;
  
        fetch(api)
        .then(response =>{
          return response.json();
        })
        .then(data => {
          console.log(data);
          const { icon } = data.currently;

            //set icon
            setIcons(icon, document.querySelector(".icon"));
        });
      });
    }
    function setIcons(icon, iconID){
        const skycons = new Skycons({color: "#9200af"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }
  });
