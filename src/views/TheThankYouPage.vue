<template>
    <div class="thank-you-page-title-containor containor">
        <div class="row"> 
            <div class="col-3">
                <img class="julius" src="../assets/julies-drawing.png">
            </div>
            <div class="col">
                <h1 class="thank-you-page-title">Thank You</h1>
                <h2>Check your email for response</h2>
            </div>
            <div class="col-3">

            </div>
        </div>
    </div>
</template>
<style>
.thank-you-page-title{
    font-size: 10em;
    text-shadow: 6px 6px 1px rgba(255, 255, 255, 0.76),12px 12px 2px rgba(255, 255, 255, 0.5),18px 18px 3px rgba(255, 255, 255, 0.5);
}
.julius{
    height: 30em;
}
.thank-you-page-title-containor{
    box-shadow: inset 100px 1000px 10px rgba(128, 0, 128, 0.521);
    background-image: url("https://t4.ftcdn.net/jpg/04/03/12/73/240_F_403127375_Njb3InoFUov5lui2pKyF55Vr8J1DdDhq.jpg");
}
</style>
<script>
export default {
    name: "ThankYouPage"
}
</script>
