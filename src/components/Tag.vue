<template>
    <div>
        <Projects :projects="projects" />
    </div>
</template>

<script>
    import Projects from './Projects';
    import API from '../API';
    export default {
        name: "Tag",
        components: {
            Projects
        },
        data() {
            return {
                projects: null,
            }
        },
        mounted() {
            API.fetchProjects(this.$route.params.tagId).then(json => {
                this.projects = json['projects'];
            });
        },
    }
</script>

<style scoped>

</style>