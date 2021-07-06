import axios from "axios"
 const  api  ={
    data(){
      return{
        citySearch:"",
        visible: false,

        chuva: false,
        sol: false,
        nublado: false,
        nuvens: false,
        trovoadas: false,
        poucasNuvens: false,
        nuvensQuebradas: false,
        nevoa: false,

        
        weather:{
          cityName:"",
          country:"",
          temperature:"",
          description:"",
          lowTemp:"",
          humidity:""
      }
    }
  },
    methods:{
     addClima: async function(){
     //console.log(this.citySearch)  
      
     try{       
     const {data} = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${"609fc700c65094241a5964808f1e52e4"}&units=metric&lang=pt`)
      //console.log(data)  
     this.citySearch = ""
     this.weather.cityName = data.name
     this.weather.country = data.sys.country
     this.weather.temperature = Math.round(data.main.temp_max)
     this.weather.description = data.weather[0].description
     this.weather.lowTemp = Math.round(data.main.temp_min)
     this.weather.humidity = Math.round(data.main.humidity)

     const mainWeather = data.weather[0].main
     const weatherDes = data.weather[0].description
     //"Thunderstorm"

     if(mainWeather.includes("Rain")){
        this.chuva = true
        this.sol = false
        this.nublado = false
        this.nuvens = false
        this.trovoadas = false
        this.nevoa = false
        this.nuvensQuebradas = false
      
     }
     if(mainWeather.includes("Thunderstorm")){
      this.chuva = false
      this.sol = false
      this.nublado = false
      this.nuvens = false 
      this.trovoadas = true
      this.nuvensQuebradas = false
    
    }
     if(mainWeather.includes("Clear")){
        this.chuva = false
        this.sol = true
        this.nublado = false
        this.nuvens = false
        this.trovoadas = false
        this.nevoa = false
        this.nuvensQuebradas = false
      
     }
     if(mainWeather.includes("Fog") || (mainWeather.includes("Mist"))){
      this.chuva = false
      this.sol = false
      this.nublado = false
      this.nuvens = false
      this.trovoadas = false
      this.nevoa = true
      this.nuvensQuebradas = false
    
   }
    
    if(mainWeather.includes("Clouds")){
        this.chuva = false
        this.sol = false
        this.nublado = false
        this.nuvens = true
        this.trovoadas = false
        this.nevoa = false
        this.nuvensQuebradas = false
      

        if(weatherDes.includes("nublado")){
            this.nublado = true
            this.chuva = false
            this.sol = false
            this.nuvens = false    
            this.trovoadas = false  
            this.nevoa = false
            this.nuvensQuebradas = false
        }
        if(weatherDes.includes("nuvens quebradas")){
          this.nublado = false
          this.chuva = false
          this.sol = false
          this.nuvens = false    
          this.trovoadas = false  
          this.nevoa = false
          this.nuvensQuebradas = true
      }
    }     
    this.visible = true
    
    }catch(error){
      //console.log("Erro ao puxar dados")
      alert("[ERROR] Digite um Local válido")
      this.visible = false
      this,this.citySearch = ""

   }
  }
 }
}
 export default api



   // ** fetch **
/*
      addClima: async function(){
      console.log(this.citySearch)
      const key = "609fc700c65094241a5964808f1e52e4"
      const baseUrl = `http://api.openweathermap.org/data/2.5/weather?q=${this.citySearch}&appid=${key}&units=metric&lang=pt`
     
      try{
        const response = await  fetch(baseUrl)
        const data = await response.json()
        console.log(data)
        this.citySearch =""
        
      } catch(error){
        console.log(error)
      }     
}

*/
