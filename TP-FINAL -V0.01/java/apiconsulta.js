

const ApiURL='https://api.weatherbit.io/v2.0/current?lat=20.924472695815183&lon=-156.69381264787737&key=7893b5fbf8df49b0bf23d58a38355747'

async function obtenerClima() {
    try {
      console.log("SE CARGO ESTO");

        const response = await fetch(ApiURL)
        const data = await response.json()
      
        console.log("SE CARGO ESTO");

        console.log(data);
    
        console.log(data["data"]["0"]["app_temp"]);
        console.log(data["data"]["0"]["weather"]["icon"]);

        document.getElementById("Ubication").innerHTML = data["data"]["0"]["city_name"]
        document.getElementById("tempWidg1").innerHTML = data["data"]["0"]["app_temp"]
        
        let imagenClim = data["data"]["0"]["weather"]["icon"]
        let ImgSRC="./iconos/weather/"+imagenClim+".png"
        document.getElementById("ImgCliPic").src=ImgSRC;
        

    } catch (error) {
        console.log("ErrorOcurrido");

        //IMPORTANTE: !!!!!!LEER 


        //Para los fines de demostrar conocimiento de como obtener los valroes y hacer el display
        //correspondiente en HTML se fija un parametro fijo llamado json

        const data = await json
      

        console.log(data);
  
        console.log(data["data"]["0"]["app_temp"]);
        console.log(data["data"]["0"]["weather"]["icon"]);

        document.getElementById("Ubication").innerHTML = data["data"]["0"]["city_name"]
        document.getElementById("tempWidg1").innerHTML = data["data"]["0"]["app_temp"]
        
        let imagenClim = data["data"]["0"]["weather"]["icon"]
        let ImgSRC="./iconos/weather/"+imagenClim+".png"
        document.getElementById("ImgCliPic").src=ImgSRC;

        
    }
        



    }

json={
    "count": 1,
    "data": [
      {
        "app_temp": 99.9,
        "aqi": 16,
        "city_name": "ERROR EN API",
        "clouds": 0,
        "country_code": "US",
        "datetime": "2022-10-17:22",
        "dewpt": 18.9,
        "dhi": 122.17,
        "dni": 935.08,
        "elev_angle": 59.25,
        "ghi": 917.72,
        "gust": 3.1054688,
        "h_angle": 0,
        "lat": 20.9245,
        "lon": -156.6938,
        "ob_time": "2022-10-17 22:13",
        "pod": "d",
        "precip": 0,
        "pres": 1007.5,
        "rh": 68,
        "slp": 1015.5,
        "snow": 0,
        "solar_rad": 917.7,
        "sources": [
          "analysis",
          "AR427"
        ],
        "state_code": "HI",
        "station": "AR427",
        "sunrise": "16:22",
        "sunset": "04:00",
        "temp": 25.6,
        "timezone": "Pacific/Honolulu",
        "ts": 1666044811,
        "uv": 8.896405,
        "vis": 16,
        "weather": {
          "code": 800,
          "icon": "error",
          "description": "Clear sky"
        },
        "wind_cdir": "ENE",
        "wind_cdir_full": "east-northeast",
        "wind_dir": 73,
        "wind_spd": 3.6130412
      }
    ]
  }

  obtenerClima()