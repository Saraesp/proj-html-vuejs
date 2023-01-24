<script>
export default {
    
}
</script>

<template lang="">
    <footer>
        <!-- impostazione tre colonne e divisione footer in due parti-->
        <!-- PRIMA COLONNA -->
        <div class="card-group backg-black">
            <div class="card text-center">
                <img src="../assets/image/avadabarbers_footer_shop_image.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="button btn-style">SHOP OUR RANGE NOW</button>
                </div>
            </div>

             <!-- SECONDA COLONNA -->
            <div class="card card-center">
                <img src="../assets/image/avadabarbers-logo-x2.png" class="card-img-top" alt="">
                <div class="card-body">
                    <!-- lista -->
                    <div class="list-style">
                        <ul class="list-unstyled text-center">
                            <li>Avada Barbers</li>
                            <li>123 New York</li> 
                            <li>New York City</li>
                            <li>info@yourwebsite.com</li>
                            <li>+1 (555) 555-1212</li>
                        </ul>
                    </div>
                    <div class="list-follow">
                        <p class="text-center mt-5">FOLLOW US</p>
                        <ul class="list-unstyled d-flex justify-content-center">
                            <li class="m-3">t</li>
                            <li class="m-3">a</li>
                            <li class="m-3">l</li>
                            <li class="m-3">b</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <!-- TERZA COLONNA -->
            <div class="card text-center">
                <img src="../assets/image/avadabarbers_footer_appointment_image.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="button btn-style">SHOP OUR RANGE NOW</button>
                </div>
            </div>
            
        </div>

        <div>
            <p></p>
        </div>
    </footer>
</template>

<style lang="scss">
     @use '../style/partials/mixins' as *;
     @use '../style/partials/variables' as *;

     .backg-black{
        background-color: rgb(19, 19, 19);
        border: none;
     }

    .card-group .card{
        background-color: rgb(19, 19, 19);
     }
     
    
    .card img{
        width: 350px;
        margin-left: 55px;
        margin-top: 30px;
    }

    .card-center img{
        width: 200px;
        margin-left: 120px;
        margin-top: 50px
    }

    .button{
        padding: 10px;
        font-size: 14px;
    }

    .list-style{
        color: grey;
    }

    .list-follow p{
        color: $color-beige;
        font-weight: 600;
    }

</style>