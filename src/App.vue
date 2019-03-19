<template>
  <div>
    <header>
      <div class="container">
        <ul>
          <li v-for="(link, index) in links" :key="index">
            <router-link :to="link.to">{{ link.name }}</router-link>
          </li>
        </ul>
        <img src="/192.png">
      </div>
    </header>

    <main class="container">
      <router-view :key="$route.fullPath"/>
    </main>
  </div>
</template>

<style scoped>
  ul {
    list-style: none;
    display: flex;
    padding: 0;
  }
  li {
    padding: 5px 15px 5px 0;
  }
  li a {
    text-decoration: none;
    color: black;
  }
  li a:hover {
    color: #404040;
  }
  .container{
    max-width: 1000px;
    margin: 0 auto;
    padding: 15px;
  }
  header{
    background-color: white;
  }

  header .container{
    display: flex;
    justify-content: space-between;
  }

  header img{
    max-height: 64px;
  }
</style>

<script>
export default {
  data: () => ({
    links: [
      {
        name: 'Home',
        to: '/'
      },
      {
        name: 'Bad Link',
        to: '/random-bad-url'
      }
    ]
  })
}
</script>