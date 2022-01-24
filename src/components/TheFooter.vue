<template>
    <div class="footer">
        <div class="container">
  <footer class="py-5">
    <div class="row">
      <div class="col">
        <h5>Hompage</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><router-link class="nav-link" to="CalendarPage">Scheduel Meeting</router-link></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Content Calendar</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About Me</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Dev Stack</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">SEO</a></li>
          <li class="nav-item mb-2">Social Media</li>

        </ul>
      </div>

      <div class="col">
        <h5>Articles</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">What's an SEO Audit?</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Growing Your Social Media</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Why Get A Website?</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">The importance of SEO</a></li>
        </ul>
      </div>

      <div class="col">
        <h5>Section</h5>
        <ul class="nav flex-column">
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Home</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Features</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">Pricing</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">FAQs</a></li>
          <li class="nav-item mb-2"><a href="#" class="nav-link p-0 text-muted">About</a></li>
        </ul>
      </div>

      <div class="col offset-1">
        <form>
          <h5>Subscribe to our newsletter</h5>
          <p>Monthly digest of whats new and exciting from us.</p>
          <div class="d-flex w-100 gap-2">
            <label for="newsletter1" class="visually-hidden">Email address</label>
            <input id="newsletter1" type="text" class="form-control" placeholder="Email address">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </form>
      </div>
    </div>

    <div class="d-flex justify-content-between py-4 my-4 border-top">
      <p>© 2021 Company, Inc. All rights reserved.</p>
      <ul class="list-unstyled d-flex">
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#twitter"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#instagram"></use></svg></a></li>
        <li class="ms-3"><a class="link-dark" href="#"><svg class="bi" width="24" height="24"><use xlink:href="#facebook"></use></svg></a></li>
      </ul>
    </div>
  </footer>
</div>
    </div>
</template>
<script>

export default {
    name: 'thefooter'
}
</script>
<style>
.nav-link{
  font-size: .8em;
}
.footer{
  background-color: black;
}
</style>
