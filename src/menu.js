import { reactive } from 'vue'

export const menu = reactive({
    data(){
        return{
            menuList: [
                {
                   title: "Home",
                   url: "/"
                },
                {
                    title: 'About Us',
                    url: '/'
                 },
                 {
                    title: 'Service',
                    url: '/'
                 },
                 {
                    title: 'Shop',
                    url: '/'
                 },
                 {
                    title: 'Out Team',
                    url: '/'
                 },
                 {
                    title: 'Blog',
                    url: '/'
                 },
                 {
                    title: 'Contact Us',
                    url: '/'
                 },
                 
            ]
        }
    }
});