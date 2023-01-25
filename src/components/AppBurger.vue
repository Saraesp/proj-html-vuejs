<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

import { menu } from '../menu.js';

export default {
    data(){
        return{
            menu
        }
    }
}
</script>

<template lang="">
        <div>
            <font-awesome-icon icon="fa-brands fa-twitter" />
        </div>

        <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
            <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5>
                <button type="button" class="btn-close color-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div class="offcanvas-body color-light" >
                <ul v-for="item in menuList">
                    <li>{{ item }}</li>
                </ul>
            </div>
        </div>
        <nav class="navbar navbar-dark">
            <div class="container">   
                <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="navbarToggleExternalContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </nav>


        
</template>

<style lang="scss" scoped>
     @use '../style/partials/variables' as *;

    #offcanvasRight{
        width: 100%;
        background-color: black;
    }

    .color-btn{
       background-color: $color-beige;
    }
</style>