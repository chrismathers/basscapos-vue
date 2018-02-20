<template>
  <div id="app" itemscope>
      <nav class="nav-collapse">
        <ul>
          <router-link to="/">Home</router-link>
          <router-link to="/installers">Installers Page</router-link>
          <router-link to="/faq">FAQ Page</router-link>
          <router-link to="/installation">Installation Page</router-link>
          <router-link to="/other">Other Page</router-link>
          <router-link to="/robpin">Robpin Page</router-link>
          <router-link to="/contactus">Contact Us Page</router-link>
        </ul>
      </nav>
      <header>
        <div class="blue">
          <h2>ATTENTION DOUBLE BASSISTS:</h2>
          <h3>Have a fingered 'C' Extension? &nbsp; Considering getting one?</h3>
          <h1 itemprop="name" class="tk-museo-sans">Anzellotti Bass Capos</h1>
        </div>
        <div class="brown">
          <h2 class="tk-museo-sans">The ultimate solution for 'C' Extension chromatic latches or gates!</h2>
          <div class="flex-box" v-on:click.prevent>
            <span><router-link to="/" class="nav-link" active-class="active" exact>Home</router-link></span>
            <span><router-link to="/installers" class="nav-link" active-class="active">Installers Page</router-link></span>
            <span><router-link to="/faq" class="nav-link" active-class="active">FAQ Page</router-link></span>
            <span><router-link to="/installation" class="nav-link" active-class="active">Installation Page</router-link></span>
            <span><router-link to="/other" class="nav-link" active-class="active">Other Page</router-link></span>
            <span><router-link to="/robpin" class="nav-link" active-class="active">Robpin Page</router-link></span>
            <span><router-link to="/contactus" class="nav-link" active-class="active">Contact Us Page</router-link></span>
          </div>
        </div>

        <div class="mobile-blue">
          <h1 itemprop="name" class="tk-museo-sans">Anzellotti Bass Capos</h1>
        </div>
      </header>

      <router-view/>
    </div>

</template>

<script>
export default {
  name: 'App'
}
</script>
