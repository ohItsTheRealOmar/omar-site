<template>
    <div class="containor  SkillSetBackground">
        <div class=" row justify-content-evenly">
        <div class="card m-2" style="width: 18rem;">
            <img src="https://t3.ftcdn.net/jpg/03/97/41/46/240_F_397414680_3qcEOgbH7X4pVG7x8x3Uwhx4aB3ru51o.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Dev Stack</h5>
                <p >I have full understanding of all the coding languages neccary to opperate a successful website from the ground up if neccary.</p>
                <p class="CardP">html5</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Certified</div>
                </div>
                <p class="CardP">CSS</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Certified</div>
                </div>
                <p class="CardP">JavaScript</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Certified</div>
                </div>
                <a href="#" class="btn button1 btn-dark">Other Languages</a>
            </div>
        </div>
        <div class="card m-2" style="width: 18rem;">
            <img src="https://t4.ftcdn.net/jpg/03/36/72/27/240_F_336722732_Vnm4EH3fGDR3hCClAam4RaKoMeR1E47a.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">SEO</h5>
                <p>Getting traffic consitently on your site takes consitentcy. Start climbing google page rankings and get your site viewed more offten. </p>

                <p class="CardP">Web Aduit</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Satisfaction</div>
                </div>
                <p class="CardP">Web Traffic</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Satisfaction</div>
                </div>
                <p class="CardP">Word Ranking</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Satisfaction</div>
                </div>                
                <a href="#" class="btn button1 btn-dark">View Audit Sheet</a>
            </div>
        </div>
        <div class="card m-2" style="width: 18rem;">
            <img src="https://t4.ftcdn.net/jpg/03/02/52/41/240_F_302524167_PzTozgwJzPxQeUtUg5BTYm08Yv1JL4Ta.jpg" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Social Media</h5>
                <p>Save on time by out sourcing the work needed to blow up your business's social media accounts. Check out Content Calendar.</p>
                <p class="CardP">Facebook</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Growth</div>
                </div>
                <p class="CardP">Instagram</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Growth</div>
                </div>
                <p class="CardP">Telegram</p>
                <div class="m-2 progress">
                    <div class="progress-bar purple progress-bar-striped " role="progressbar" style="width: 99%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100">100% Growth</div>
                </div>                
                <router-link id="white" class="nav-link active" to="/CalendarPage"><a href="#" class="btn button1 btn-dark">Calendar</a></router-link>
            </div>
        </div>
        </div>
    </div>
</template>
<script>

export default {
   name: "Skillset"
}
</script>

<style>
.SkillSetBackground p{
    color: black;
    font-size: .9em;
}
.CardP{
    color:black;
    margin: 0;
}
.purple{
    background-color:purple;
}
.SkillSetBackground{
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url("https://t4.ftcdn.net/jpg/01/40/87/49/240_F_140874938_f3ggMovuJP6YoDmRimnQmKvKl8W7HKsm.jpg");
}
    .card-title{
        color:black;
    }
.card-text{
    color: black;
}
.button1:hover{
background-color: darkgray;
color:black;
}
</style>
