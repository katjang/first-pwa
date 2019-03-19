<template>
    <div class="project-detail" v-if="project">
        <div class="banner" v-bind:style="{ backgroundImage: 'url('+ $baseURL + project.headerImage +')'}">
            <h1>{{project.title}}</h1>
        </div>
        <h2>{{project.tagline}}</h2>
        <p>{{project.description}}</p>
        <small>{{project.author}}, {{project.dateUpdated}}</small>
        <Tags :tags="project.tags"/>
    </div>
</template>

<script>
    import API from "./../API";
    import Tags from "@/components/Tags";
    import localforage from 'localforage';
    export default {
        name: "Project",
        data() {
            return {
                project: null
            }
        },
        components: {
            Tags
        },
        mounted() {
            API.fetchProject(this.$route.params.slug).then(json => {
                this.project = json;
                localforage.setItem('project_'+this.project.slug, this.project);
            }).catch(error => {
                localforage.getItem('project_' + this.$route.params.slug, (err, value) => {
                    this.project = value;
                });
            });
        },
    }
</script>

<style scoped>
.project-detail{

}
    h1, p, h2, small{
        color: white;
    }
    .banner{
        height: 400px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        padding: 20px;
    }

</style>