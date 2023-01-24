<script>
import AppBurger from './AppBurger.vue'

export default {
    components: {
        AppBurger,
    }
}
</script>

<template lang="">
    <header>
        <!-- Creo una Navbar dove inserisco il Logo e l'Hamburger -->
        <nav class="navbar">
            <!-- Logo -->
            <div class="container">
                <a class="navbar-brand" href="#">
                <img src="../assets/image/avadabarbers-logo-x2.png" alt="Logo" width="200" height="70" class="logo">
                </a>
            
            <!-- Burger -->
                <div class="burger">
                    <AppBurger />
                </div>
            </div>
        </nav>

        <div class="container">
            <div class="row">
                <div class="col-left">
                    <h1 class="text-light">Barber Shop</h1>
                    <hr>
                    <h4>The pinnacle of Male Grooming</h4>
                    <button type="button" class="btn">LEARN MORE</button> 
                </div>
                <div class="col-right">
                    <img src="../assets/image/avadabarbers_hero_focalmirror.png" alt="" width="520" height="700">
                </div>
            </div>
        </div>

    </header>
</template>

<style lang="scss" scoped>
    @use '../style/partials/variables' as *;
    
    header{
        background-image: url(../assets/image/avadabarbers-homepage-hero-bg.jpg);
        background-size: cover;
        height: 900px;


        nav{
            display: flex;
            justify-content: space-between;
            padding-top: 50px;
        }
        
        .btn{
            background-color: transparent;
            border: 2px solid $color-beige;
            border-radius: 0;
            color: $color-beige;
            padding: 10px 35px;
            font-size: 20px;
            margin-top: 40px;
            
        }
        .btn:hover{
            border-color: rgba(255, 161, 39, 0.528);
            color: rgba(255, 161, 39, 0.528);
        }

        hr{
            width: 220px;
            border: 2px solid $color-beige;
            opacity: 2;
        }

        h1{
            font-size: 90px;
            color: $color-white;
            padding-top: 150px;
        }

        h4{
            color: rgba(128, 128, 128, 0.688);
            margin-top: 35px;
        }

       .row{
            position: relative;

            .col-right{
                position: absolute;
                top: -20px;
                left: 700px;
            }
        }


    }


</style>