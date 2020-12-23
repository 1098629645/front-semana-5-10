<template>
    <div>
        <!-- carousel -->
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
            <ol class="carousel-indicators">
                <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="1" class=""></li>
                <li data-target="#carouselExampleCaptions" data-slide-to="2" class=""></li>
            </ol>
            <div class="carousel-inner">
                <div class="carousel-item active" style="height: 80vh">
                        <img class="d-block img-fluid" src="https://i.imgur.com/OZlJR9f.jpg" alt="First slide">

                    <div class="carousel-caption d-none d-md-block">
                        <h1>¡A TIEMPO!</h1>
                        <h3>Realizamos nuestras entregas en el menor tiempo posible</h3>
                    </div>
                </div>
                <div class="carousel-item" style="height: 80vh"> 
                    
                        <img class="d-block img-fluid" src="https://i.imgur.com/C8omxwk.jpg" alt="Second slide">

                    <div class="carousel-caption d-none d-md-block">
                        <h1>¡Flexible!</h1>
                        <h3>Servicios conforme tus necesidades y las de tu empresa</h3>
                    </div>
                </div>
                <div class="carousel-item" style="height: 86vh">
                    
                    <title>Placeholder</title>
                        <img class="d-block img-fluid" src="https://i.imgur.com/As1tTy5.jpg" alt="Third slide">

                    <div class="carousel-caption d-none d-md-block">
                        <h1>Servicio de calidad</h1>
                        <h3>Calidad, rentabilidad y comodidad es lo que ofrecemos con nuestros servicios</h3>
                    </div>
                </div>
            </div>
            <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="sr-only">Previous</span>
            </a>
            <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="sr-only">Next</span>
            </a>
        </div>
    </div>
    
</template>

<script>


export default {
  
  name: "Intro",

  components: {
    
    },
    
    data(){
        return{
        }
    },

    methods:{
    }
}
</script>