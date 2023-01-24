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
                    <img src="../assets/image/avadabarbers_hero_focalmirror.png" alt="" width="500" height="700">
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




        nav{
            display: flex;
            justify-content: space-between;
        }
        
        .btn{
            background-color: transparent;
            border: 2px solid $color-beige;
            color: $color-beige;
            padding: 20px;
            font-size: 15px;
            
        }
        .btn:hover{
            border-color: rgb(200, 115, 5);
            color: rgb(200, 115, 5);
        }

        hr{
            width: 200px;
            color: $color-beige;
        }

        h1{
            font-size: 55px;
            color: $color-white;
        }

        h4{
            color: $color-grey;
        }

       .row{
            position: relative;

            .col-right{
                position: absolute;
                top: 0;
                left: 750px;
            }
        }


    }


</style>