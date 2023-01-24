<script>
export default {
    
}
</script>

<template lang="">
    <footer>
        <!-- impostazione tre colonne e divisione footer in due parti-->
        <!-- PRIMA COLONNA -->
        <div class="card-group">
            <div class="card">
                <img src="../assets/image/avadabarbers_footer_shop_image.png" class="card-img-top" alt="...">
                <div class="card-body">
                    <button class="button btn-style">SHOP OUR RANGE NOW</button>
                </div>
            </div>

             <!-- SECONDA COLONNA -->
            <div class="card">
                <img src="" class="card-img-top" alt="">
                <div class="card-body">
                    <!-- lista importata con un v-for -->
                    <ul>

                    </ul>
                </div>
            </div>
            
            <!-- TERZA COLONNA -->
            <div class="card">
                <img src="" class="card-img-top" alt="...">
                <div class="card-body">
                    <button></button>
                </div>
            </div>
            
        </div>
    </footer>
</template>

<style lang="scss">
    
     @use '../style/partials/variables' as *;

    .button{
        padding: 10px;
        font-size: 14px;
    }
</style>