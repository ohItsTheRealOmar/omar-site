<template>
    <form class="form cool-pillars" action="https://formsubmit.co/omarcrespomclain@gmail.com" method="POST">
    <input type="hidden" name="_next" value="http://localhost:8080/thanks">
     <input class="form-question" type="text" name="name" placeholder="First***" required>
     <input class="form-question" type="text" name="name" placeholder="Last***" required>
     <br>
     <input class="form-question " type="email" name="email" placeholder="Email***" required>
     <input class="form-question" type="phone" name="phone" placeholder="Phone Number" required>
     <br>
     <input class="form-question" type="file" name="attachment" accept="image/png, image/jpeg">

     <br>
     <button class="button2 summit btn-outline-light btn" type="submit">Send</button>
     
    </form>
</template>
<style>

.summit{
    border: white 5px solid;
    width: 8em;
}
.form-question{
 height: 3em;
 margin: .1em;
 width: 20em;
 border-radius: .5em;
}
.cool-pillars{
box-shadow: inset 100px 1000px 1000px rgba(0, 0, 0, 0.548);
height: 14em ;
background-image: url("https://t4.ftcdn.net/jpg/04/24/22/43/240_F_424224326_Sm2DsL4fbzXXGdaS3wI26gvsIG7jMILe.jpg");
}
</style>
<script>
export default {
    name: "TheForm"
}
</script>
