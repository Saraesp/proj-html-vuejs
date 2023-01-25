<script>
export default {
    
}
</script>

<template lang="">
    <div class="bg-image">
        <div class="container text-center">
            <p>WARD WINNING</p>
            <h1 class="title">Pro Barbers</h1>
            <button class="btn-style p-3">MEET YOUR NEW BARBER</button>
        </div>
    </div>
    <div class="container">
        <div class="center-section">
            <p class="text-center">MENS GROOMING</p>
            <h1 class="title text-center">Service</h1>
            <div class="row">
                <div class="col-4 text-center">
                    <img src="../assets/image/avadabarbers-trimcut-icon-before.png" alt="">
                    <h3 class="title">Trim 	&amp; Cut</h3>
                    <p>Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.</p>
                </div>
                <div class="col-4 text-center">
                    <img src="../assets/image/avadabarbers-washndry-icon.png" alt="">
                    <h3 class="title">Trim 	&amp; Cut</h3>
                    <p>Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.</p>
                </div>
                <div class="col-4 text-center">
                    <img src="../assets/image/avadabarbers-beardtrim-icon.png" alt="">
                    <h3 class="title">Trim 	&amp; Cut</h3>
                    <p>Avada Barbers are experts in the lickety split trim and hair cut. Quick but careful and ridiculously good looking.</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss">
    @use '../style/partials/variables' as *;
    .bg-image{
        background-image: url('../assets/image/avadabarbers-about-introbackground.jpg');
        background-size: cover;
        padding: 80px;

       

        button{
            font-weight: 600;
            margin-top: 40px;
        }

        h1{
            color: rgb(159, 156, 156);
            font-size: 70px;
        }
    } 

    p{
        color: $color-beige;
    }

    .center-section{
        padding: 50px;

        h1{
            color: rgb(159, 156, 156);
            font-size: 70px;
        }

        .col-4{
            margin-top: 40px;

            img{
                width: 60px;
                margin-bottom: 20px;
            }

            h3{
                color: $color-beige;
            }

            p{
                color: rgb(159, 156, 156);
                line-height: 2;
                width: 250px;
                margin-left: 65px;
                margin-top: 20px;
            }
        }
    }
</style>