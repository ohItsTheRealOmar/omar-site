<template>
    <div  class="  containor">
        <nav  class=" navbar navbar-expand-lg navbar-light bg-light">
            <div class="bitch container-fluid">
                <h1 id="" class=" navbar-brand" ><router-link class="title" to="/">Omar Crespo-McLain</router-link></h1>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link id="white" class="nav-link active" to="/CalendarPage">Calendar</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/FormPage" id="white" class="nav-link active">Schedule Meeting</router-link>
                        </li>
                        <li class="nav-item dropdown">
                            <a  class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Services Offers
                            </a>
                            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <li><a class="dropdown-item" href="#">Action</a></li>
                                <li><a class="dropdown-item" href="#">Another action</a></li>
                                <li><a class="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        
                    </ul>
                    <form class="d-flex">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
                        <button class="btn btn-outline-light" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
        
    </div>
</template>
<script>
export default {
    name: 'Navbar'
}
</script>
<style>
@media screen and (min-width:1000px){
  .title{
    color: blue;
  }
}
.dropdown-item{
    background-color: white;
    color: black;
}
.nav-link{
    font-size: 6em;
    color: white;
}
.nav-item{
    font-size: 1.3em;
}
#white:hover{
    color: purple;


}
.title{
    text-decoration: none;
    color: white;
    font-size: 2em;
}
.title:hover{
    color: purple;
}
#navbarDropdown{

    color: white;
}
#white{
    color: white;
}
.bg-black{
    background-color: rgb(46, 45, 45);
}
p{
    color: white;
}
.navbar{
    padding: 0;
}
 
.bitch{
    border-radius: 1em;
    padding: 2em;
    border: rgb(1, 0, 2) solid 2px;
    margin: 0%;
    background-image: linear-gradient(to bottom, rgb(67, 6, 124), rgb(0, 0, 0), rgb(67, 6, 124))  ;
}
</style>