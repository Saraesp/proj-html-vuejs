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
        <nav class="navbar bg-body-tertiary">
            <!-- Logo -->
            <div class="container-fluid">
                <a class="navbar-brand" href="#">
                <img src="../assets/image/avadabarbers-logo-x2.png" alt="Logo" width="180" height="60" class="d-inline-block align-text-top">
                </a>
            </div>
            <!-- Burger -->
            <div>
                <AppBurger />
            </div>
        </nav>
    </header>
</template>

<style lang="scss" scoped>
    
</style>