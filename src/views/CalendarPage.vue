<template>
    <div class=" content-calendar">
        <h1 class="calendar-page-title">Content Calendar</h1>
    </div>
    <h3 class="month">January</h3>
    <div class="Containor calendar calendar-containor p-1">
    <span class=" day-name">Mon</span><span class="day-name">Tue</span><span class="day-name">Wed</span><span class="day-name">Thu</span><span class="day-name">Fri</span><span class="day-name">Sat</span><span class="day-name">Sun</span>        
    <div class="day day--disabled">27</div>
    <div class="day day--disabled">28</div>
    <div class="day day--disabled">29</div>
    <div class="day day--disabled">30</div>
    <div class="day day--disabled">31</div>
    <div class="day">1</div>
    <div class="day">2</div>
    <div class="day">3</div>
    <div class="day">4</div>
    <div class="day">5</div>
    <div class="day">6</div>
    <div class="day">7</div>
    <div class="day">8</div>
    <div class="day">9</div>
    <div class="day">10</div>
    <div class="day">11</div>
    <div class="day">12</div>
    <div class="day">13</div>
    <div class="day">14</div>
    <div class="day">15</div>
    <div class="day">16</div>
    <div class="day">17</div>
    <div class="day">18</div>
    <div class="day">19</div>
    <div class="day">20</div>
    <div class="day">21</div>
    <div class="day">22</div>
    <div class="day">23</div>
    <div class="day">24</div>
    <div class="day">25</div>
    <div class="day">26</div>
    <div class="day">27</div>
    <div class="day">28</div>
    <div class="day ">29</div>
    <div class="day ">30</div>
    
    <section class="task task--listings listings">Product Listings</section>

    <section class="task task--calls calls">Calls</section>
    <section class="task task--calls2 calls">Calls</section>
    <section class="task task--calls3 calls">Calls</section>
    <section class="task task--calls4 calls">Calls</section>
    <section class="task task--calls5 calls">Calls</section>


    <section class="task task--Info Info">Emails</section>
    <section class="task task--Info2 Info">Emails</section>
    <section class="task task--Info3 Info">Emails</section>
    <section class="task task--Info4 Info">Emails</section>
    <section class="task task--Info5 Info">Emails</section>


    <section class="task task--SEO">SEO</section>
    <section class="task task--SEO2">SEO</section>
    <section class="task task--SEO3">SEO</section>
    <section class="task task--SEO4">SEO</section>
    <section class="task task--SEO5">SEO</section>
    <section class="task task--SEO6">SEO</section>



    <section class="task task--PAndB">Page and Blog Posts</section>
    <section class="task task--PAndB2">Page and Blog Posts</section>
    <section class="task task--PAndB3">Page and Blog Posts</section>
    <section class="task task--PAndB4">Page and Blog Posts</section>
    <section class="task task--PAndB5">Page and Blog Posts</section>
    <section class="task task--PAndB6">Page and Blog Posts</section>


    <section class="task task--SM">Socail Media Postings</section>
    <section class="task task--SM2">Socail Media Postings</section>
    <section class="task task--SM3">Socail Media Postings</section>

    </div>
</template>
<script>
import Calendar from '@/components/TheCalendar.vue'

export default {
    name: 'CalendarPage',
    components: Calendar
    
}

</script>
<style>
.calendar-page-title{
box-shadow: inset 100px 100px 100px rgba(128, 0, 128, 0.486);
position: relative;
top: 30%;
font-size: 5em;
}
.content-calendar{
    box-shadow: inset 1000px 100px 100px rgba(128, 0, 128, 0.349);

    height: 15em;
        text-shadow:  6px 6px 1px rgba(255, 255, 255, 0.651), 12px 12px 2px rgba(255, 255, 255, 0.356),18px 18px 3px rgba(255, 255, 255, 0.24);
    
    background-position-x: 100%;
    background-repeat: no-repeat;
    background-image: url("https://t4.ftcdn.net/jpg/03/24/77/93/240_F_324779347_sBXWJLKRA1d2Ffo87zgfh2M7vNAAsffb.jpg");
}
.month{
    
    text-shadow:  6px 6px 1px rgba(255, 255, 255, 0.651);
    font-size: 3em;
color: rgb(255, 255, 255);
 background-image: linear-gradient(to right, white, black, rgb(0, 0, 0), white);
}
.day{
    font-size: 1.5em;
}
.num{
    text-align: left;
}
.day-box{
    
    border-left: solid white 1px;
    height: 6em;

}
.day-title{
    height: 2em;
}
 .line-par{
    border-top: white 1px solid;
    border-bottom: white 1px solid;

 }
 .calendar {
     box-shadow: inset 100em 0em 0em rgba(0, 0, 0, 0.568);
     background-image: url("https://t3.ftcdn.net/jpg/03/03/32/26/240_F_303322696_Fo2AVa0OteduFMTmp3xP96Mi2AICTcUZ.jpg");
  display: grid;
  width: 100%;
  grid-template-columns: repeat(7, minmax(120px, 1fr));
  grid-template-rows: 50px;
  grid-auto-rows: 120px;
}
</style>
