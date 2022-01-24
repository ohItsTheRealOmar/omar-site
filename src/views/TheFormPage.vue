<template>

    <div class="contact-form-banner pillars ">
        <div class="row">
        <div class="col-3">
        <img class="cool-statue-1" src="@/assets/roman-statue.png">
        </div>
        <div class="col">
        <h1 class="form-title">Contact Form</h1>
        </div>
        <div class="col-3">
        </div>
        </div>
    </div>
    <TheForm/>
</template>
<script>
import TheForm from '@/components/TheForm.vue'
export default {
    name: "TheFormPage",
    components: { TheForm
    }
}
</script>
<style>
.contact-form-banner{
    box-shadow: inset 100px -100px 90px rgb(52, 9, 61);

}
.cool-statue-1{
    height: 15em;
}
.form-title{
    font-size: 5em;
    color: rgb(255, 255, 255);
    text-shadow: 6px 6px 1px rgba(255, 255, 255, 0.726),12px 12px 2px rgba(255, 255, 255, 0.521),18px 18px 3px rgba(255, 255, 255, 0.233);
}
.pillars{
    background-image: url("https://t3.ftcdn.net/jpg/04/27/74/66/240_F_427746618_fhoeOp6r3h4NBFkuiwgPISElO8czJAIo.jpg");
    height: 15em;
}
</style>
