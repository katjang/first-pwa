<template>
  <div>
    <div v-if="allTags">
      <span>zoek op tags</span>
      <Tags :tags="allTags" />
    </div>
    <div v-if="tagError">
      <span class="error">{{ tagError }}</span>
    </div>
    <h1>
      Projects
    </h1>
    <Projects :projects="projects" />
  </div>
</template>

<style scoped>
h1 {
  color: white
}
  .error{
    color: white;
  }
</style>

<script>
  import Tags from './Tags';
  import Projects from './Projects';
  import API from '../API';
  import localforage from 'localforage';
  export default {
    components: {
      Tags,
      Projects
    },
    data() {
      return {
        projects: null,
        allTags: null,
        tagError: null
      }
    },
    mounted() {
      API.fetchProjects().then(json => {
        this.projects = json['projects'];
        localforage.setItem('projects', this.projects);
      }).catch(error => {
        console.log('not getting projects from network');
        localforage.getItem('projects', (err, value) => {
          this.projects = value;
        })
      });

      API.fetchTags().then(json => {
        this.allTags = json['tags']
      }).catch(error => {
        this.tagError = "Tags couldn't be loaded, currently in offline modus"
      });
    },
  }
</script>

