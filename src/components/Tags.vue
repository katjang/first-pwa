<template>
  <div>
    <li v-for="(tag, index) in tags" :key="index" class="tag">
      <router-link :to="{ name: 'Tag filter', params: { tagId: tag }}">{{ tag }}</router-link>
    </li>
  </div>
</template>

<style scoped>
  .tag {
    display: inline-block;
    background-color: #fff;
    border-radius: 14px;
    padding: 3px 10px;
    cursor: pointer;
    margin: 2px 5px;
    word-break: keep-all;
    white-space: nowrap;
    font-size: 16px;
    font-weight: 700;
  }
  .tag:hover{
    background-color: #eeeeee;
  }

  .tag a{
    text-decoration: none;
    color: #cc0133;
  }

  .tag a:hover{
    text-decoration: none;
    color: #cc0133;
  }
</style>

<script>
  export default{
    props: ["tags"]
}
</script>