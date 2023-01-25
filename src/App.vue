<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
import AppContent from './components/AppContent.vue';

export default {
    components: {
      AppHeader,
      AppFooter,
      AppContent
    }
}
</script>

<template lang="">
    <AppHeader />
    <AppContent />
    <AppFooter />
</template>

<style lang="scss">
   @use './style/generals.scss' as *;
</style>