<template>
    <div class="projects">
        <div v-for="(project, index) in projects" :key="index" class="project" v-on:click="$router.push({name: 'Project detail', params: {slug: project.slug}})">
            <div class="thumbnail" v-bind:style="{ backgroundImage: 'url('+ $baseURL + project.headerImage +')'}">
                <div class="title"><h3>{{ project.title }}</h3></div>
            </div>
            <div class="description">
                {{ project.tagline}}<br>
                <Tags :tags="project.tags.slice(0,3)"/>
            </div>
        </div>
    </div>

</template>

<style>
    .project {
        height: 350px;
        font-size: 1rem;
        transition: all .4s ease-out;
        cursor: pointer;
        text-decoration: none;
        flex: 0 1 46%;
        background-color: #fff;
        margin-top: 25px;
        margin-bottom: 25px;
    }

    .project:hover {
        box-shadow: 0 0 36px 4px rgba(0,0,0,.33);
        transform: scale(1.06);
    }

    .thumbnail{
        height: 70%;
        background: no-repeat 50%;
        background-size: cover;
        transition: all .6s ease-out;
    }

    .title{
        color: #fff;
        height: 100%;
        padding: 12px 20px;
        background-size: 100% 40%;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        box-sizing: border-box;
    }

    h3{
        margin: 0;
    }

    .description{
        padding: 12px 20px;
        height: 30%;
        color: #000;
        background-color: #fff;
    }
    .projects {
        grid-template-columns: repeat(1,100%);
        display: grid;
    }

    @media (min-width: 600px){
        .projects{
            grid-template-columns: repeat(2, 46%);
            grid-column-gap: 8%;
        }
    }

    @media (min-width: 1000px){
        .projects{
            grid-template-columns: repeat(3,30%);
            grid-column-gap: 5%;
        }
    }

    .project .tag {
        color: #fff;
        background-color: #cc0133;
    }

    .project .tag a {
        color: #fff;
    }
    .project .tag a:hover {
        color: #fff;
    }

    .project .tag:hover {
        background-color: #ff6468;
    }
</style>

<script>
    import API from "./../API";
    import Tags from "./Tags";

    export default {
        name: "Projects",
        props: ['projects'],
        components: {
            Tags
        }
    }
</script>

<style scoped>

</style>