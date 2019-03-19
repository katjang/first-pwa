import Vue from 'vue'
import Router from 'vue-router'

// Page content
import Home from '@/components/Home';
import Project from '@/components/Project';
import Tag from '@/components/Tag';

// Fallback page
import PageNotFound from '@/components/PageNotFound'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/tags/:tagId',
            name: 'Tag filter',
            component: Tag
        },
        {
            path: '/projects/:slug',
            name: 'Project detail',
            component: Project
        },
        {
            path: '**',
            name: 'PageNotFound',
            component: PageNotFound
        }
    ]
})