<template>
<div class="containor">
    <div class="jumbotron">
  <div class="container">
    <h1 class="headline">Cleveland's Own Professional Web Development</h1>
    <h4>Born and raised in Cleveland, Ohio </h4>
    <br>
    <router-link class="m-1 w-auto" to="/FormPage"><a class="btn btn-primary btn-lg" href="#" role="button">Content Calendar &raquo;</a></router-link>
    <router-link class="m-1 w-auto" to="/CalendarPage"><a class="btn btn-primary btn-lg" href="#" role="button">Scheduel Meeting &raquo;</a></router-link>
  </div>
</div>

<section class="call-to-action">
  <div class="container">
    <div class="row">
      <div class="col-md-4">
        <span class="glyphicon glyphicon-cloud glyphicon-large" aria-hidden="true"></span>
        <h3 class="Bannerh3">Fast Production</h3>
        <p class="t-left">Fast paste web assembly with a great care and attention to detail. Making sure online projects are finished and maintained at a resonible time, helps any website succed.</p>
      </div>
      <div class="col-md-4">
        <span class="glyphicon glyphicon-floppy-disk glyphicon-large" aria-hidden="true"></span>
        <h3 class="Bannerh3">Great Quilety...</h3>
        <ul class="NoTextDec">
            <li>Websites</li>
            <li>Online Courses</li>
            <li>Media Postings</li>
            <li>Traffic Building</li>

        </ul>
      </div>
      <div class="col-md-4">
        <span class="glyphicon glyphicon-console glyphicon-large" aria-hidden="true"></span>
        <h3 class="Bannerh3">Very Unique... </h3>
        <p class="t-left">...layouts sure grab user attention and web page engament. Having a unique websites helps your website stay membrable increasing </p>
      </div>
    </div>
  </div>
</section>
</div>
</template>
<style>
.NoTextDec{
    list-style-type: none;
    color: white;
}
body {
	background: #3E4649;
	color: #f7f7f7;
	font-family: 'Montserrat', sans-serif;
}
h1,
h2,
h3 {
	font-weight: bold;
}
.Bannerh3{
    color: #ffffff;
}
.t-left {
    text-align: left;
	font-size: 16px;
	color: #ffffff;
}
.navbar {
	margin-bottom: 0;
}
.jumbotron {
	background: #381357;
	color: white;
	text-align: center;
}
.jumbotron p {
	color: white;
	font-size: 26px;
}
.navbar-inverse {
	background: #2E2F31;
	border: 0;
}
.dropdown-menu {
	background: #2E2F31;
	border-radius: 0;
	border: 0;
}
.navbar-inverse .navbar-nav li a {
	color: #f7f7f7;
	font-size: 16px;
}
.navbar-inverse .navbar-nav li a:hover {
	background: #27A967;
}
.navbar-inverse .navbar-nav .dropdown-menu li a:hover {
	background: #2C463C;
}
.dropdown-menu li a {
	padding: 10px;
}
.btn-primary {
	color: #fff;
	background-color: transparent;
	border-color: white;
	margin-bottom: 5px;
}
.btn-primary:hover {
	color: #000000;
	background-color: white;
	border-color: white;
}
.glyphicon-large {
	font-size: 100px;
}
.call-to-action {
	text-align: center;
}
.call-to-action p {
	margin-bottom: 30px;
	font-family: sans-serif;
}
</style>
<script>
export default {
    name:"Slide2"
}
</script>
