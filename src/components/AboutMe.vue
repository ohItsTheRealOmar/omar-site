<template>
    <div class="AboutMe">
        <div class="container my-5">
            <div class="row p-4 pb-0 pe-lg-0 pt-lg-5 align-items-center rounded-3 border shadow-lg">
                <div class="col-lg-7 p-3 p-lg-5 pt-lg-3">
                    <h1 class="display-4 black fw-bold lh-1">A Little About Omar Crespo-McLain</h1>
                    <p class="TLeft TS20px lead AboutParahraph">Being Cleveland born and raised tought me opportunity is everywhere you just got want to take the steps to get there. I've been coding and learning about web development since I was 18 and since then have taken part in many online projects. </p>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-start mb-4 mb-lg-3">
                        <router-link class="m-1 w-auto" to="/About"><button type="button" class="btn btn-lg raise btn-dark">More About Me</button></router-link>
                        <router-link class="m-1 w-auto" to="/FormPage"><button type="button" class="btn tblack raise btn-outline-light btn-lg px-4">Schedule Meeting</button></router-link>
                    </div>
                </div>
                <div class="col-lg-4 offset-lg-1 p-0 overflow-hidden shadow-lg">
                    <img class="" src="@/assets/MeAndWinryInCar.png" alt="" width="400" height="300">
                </div>
            </div>
        </div>
    </div>
</template>
<script>

export default {
    
    name: "AboutMe"    
    
}
</script>
<style>
.tblack:hover{
    background-color: white;
    color: black;
    border: black 1px solid;

}
.tblack{
    color: black;
    border: black 1px solid;
}
.TS20px{
    font-size: 1.2em;
}
.TLeft{
    text-align: left;
}
.black{
    color: black;
}
.my-5{
    border:rgb(81, 9, 148) 10px solid;
    background-color: white;
    border-radius: 10px;
}
.AboutParahraph{
    color:black;
}
.AboutMe{
    background-color: black;
}
</style>