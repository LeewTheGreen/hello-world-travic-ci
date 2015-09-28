
function Controller() {                       // class controller

    //private variables
    var city = "";
    var country = "";

    //public methods
    this.setCity = function ( city ){
    	this.city = city;
    }
    
    this.setCountry = function ( country ){
    	this.city = country;
    }    

    this.getWeather = function (city, country){

    	this.setCity(city);	
    	this.setCountry( country );
		
		if ( city == "" ){
			alert("The value for city is not valid");
			return;
		}
   	
		if ( country == "" ){
			alert("The value for country is not valid");
			return;
		}    				
	    
	    var service = document.getElementById("getLink");
		// Create HTTP request
		var xmlHttp;
		xmlHttp = new XMLHttpRequest();

		//create the URL
		//http://openweathermap.org/current
		var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country; // api.openweathermap.org/data/2.5/weather?q=London,uk

		//open the connection and send the service
		xmlHttp.open("GET", url, true);	
		xmlHttp.send( );	

		//this will be executed when the function be returned
		//just to note. this is an asycronous function!
		xmlHttp.onreadystatechange = function( ){
				
				if ( xmlHttp.readyState == 4 ){				

					var result = JSON.parse(xmlHttp.responseText);	
										
					try {

						humidity = result.main.humidity;
						wind = result.wind.speed;
						weatherdesc = result.weather[0].description;
						weather = result.weather[0].main;

						document.getElementById("inputGetHumidity").value = humidity;
						document.getElementById("inputGetWind").value = wind;
						document.getElementById("inputGetWeatherDesc").value = weatherdesc;
						document.getElementById("inputGetWeather").value = weather;	

					} catch (e){

						if( e instanceof TypeError ){
							alert("An TypeError happened during the exection");
						}
						else{
							alert("An anomaly happened");
						}
					}
					
				}
		} 

		return xmlHttp;   	
    }
}


Controller.prototype.constructor = Controller;




	  		/*function callWeather( ){

	  				  			
				var city= document.getElementById("inputGetCity").value;
				var country= document.getElementById("inputGetCountry").value;
	  			getWeather( city, country );

	  			var service = document.getElementById("getLink");
	  			// Create HTTP request
				var xmlHttp;
				xmlHttp = new XMLHttpRequest();
				
				//retrieve screen data

				
				//create the URL
				//http://openweathermap.org/current
				var url = "http://api.openweathermap.org/data/2.5/weather?q="+city+","+country; // api.openweathermap.org/data/2.5/weather?q=London,uk

				//open the connection and send the service
				xmlHttp.open("GET", url, true);	
				xmlHttp.send( );	

				//this will be executed when the function be returned
				//just to note. this is an asycronous function!
				xmlHttp.onreadystatechange= function( ){
     				if ( xmlHttp.readyState == 4 ){
         				 document.getElementById( "inputGetAnswer" ).value = xmlHttp.responseText;
     				}
				}
	  		} */