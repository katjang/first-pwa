import Vue from 'vue';

class APIWrapper{

    constructor(){
        Vue.prototype.$baseURL = 'https://cmgt.hr.nl:8000/';
        this.config = {};
        this.config.baseURL = 'https://cmgt.hr.nl:8000/';

        this.config.endpoints = {};
        this.config.endpoints.weWereHere = this.config.baseURL + 'api/we-were-here';
        this.config.endpoints.tags = this.config.baseURL + 'api/tags';
        this.config.endpoints.projects = this.config.baseURL + 'api/projects';
    }
    fetchTags(){
        return this.request(this.config.endpoints.tags);
    }

    fetchProjects(tag = '', page = 1){
        let limit = 12;
        let url = this.config.endpoints.projects+'?page='+page+'&limit='+limit;

        if(tag !== ''){
            url += '&tag='+tag;
        }

        return this.request(url);
    }

    fetchProject(slug){
        let url = this.config.endpoints.projects+'/'+slug;
        return this.request(url);
    }

    request(url){
        return fetch(url)
            .then(response => {
                return response.json();
            })
    }
}

export default new APIWrapper;