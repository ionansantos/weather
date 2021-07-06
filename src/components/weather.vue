<template>
    <div class="container">
        <div class="content bg-light">
            <h3 class="text-center title">Digite sua Cidade aqui:</h3>

            <div class="d-flex justify-content-center mt-2">
                <input type="text" class="input" v-model="citySearch" @keyup.enter="addClima">
               <!-- <button class="btn btn-primary" @click="addClima"><i class="fa fa-search"></i></button> -->
            </div>

        <!-- cards Tempo-->
        <div v-if="visible">
        <!--dia chuvoso-->
        
        <div v-if="chuva">
            <img src="@/assets/chuva.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

          <!--trovoadas-->

            <div v-if="trovoadas">
            <img src="@/assets/trovao.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

                <!-- ceu limpo-->
            <div v-if="sol">
            <img src="@/assets/sol.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

                <!-- ceu nublado-->
            <div v-if="nublado">
            <img src="@/assets/nublado.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

                <!-- nuvens-->
            <div v-if="nuvens">
            <img src="@/assets/vento.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

                 <!-- nuvensQuebradas-->
            <div v-if="nuvensQuebradas">
            <img src="@/assets/nuvens.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>

                <!-- nevoa-->
            <div v-if="nevoa">
            <img src="@/assets/nevoa.png" class="mt-4"/>
            <h2 class="title text-center">{{weather.cityName}}</h2>
            <h2 class="title text-center">{{weather.country}}</h2>
            <h1 class="text-center">{{weather.temperature}}ºC</h1>
            <p class="text-center">{{weather.description}}</p>

            <div class="d-flex justify-content-center">
               <div class="me-4  text-center">
                   <h2 class="temp">{{weather.lowTemp}}ºC</h2>
                   <p>Min</p>
               </div>
               <div class="text-center">
                   <h2 class="temp">{{weather.humidity}}%</h2>
                   <p>Umidade</p>
               </div>
            </div>
          </div>
        </div>

       </div>
    </div>
</template>

<script>
import api from "../store/index"
export default {
    name:"weather",
    mixins:[api]
}
</script>

<style>

</style>