import { reactive } from 'vue'

export const menu = reactive({
    data(){
        return{
            menuList: [
                {
                   title: "Home",
                   url: "/",
                   image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                },
                {
                    title: 'About Us',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 {
                    title: 'Service',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 {
                    title: 'Shop',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 {
                    title: 'Out Team',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 {
                    title: 'Blog',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 {
                    title: 'Contact Us',
                    url: '/',
                    image: 'assets/image/avadabarbers-homepage-hero-bg.jpg'
                 },
                 
            ]
        }
    }
});