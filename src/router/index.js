import Vue from 'vue';
import Router from 'vue-router';

import DashBoard from '../components/DashBoard.vue'

import News from '../components/News.vue'
import NewsList from '../components/NewsList.vue'
import NewsForm from '../components/NewsForm.vue'

import Category from '../components/Category.vue'
import CategoryList from '../components/CategoryList.vue'
import CategoryForm from '../components/CategoryForm.vue'

Vue.use(Router);

export default new Router({
  routes: [
    { path: '/', name: 'home', component: DashBoard },
    {
      path: '/news', name: 'news', component: News, children: [
        { path: 'list', name: 'news-list', component: NewsList },
        { path: 'form', name: 'news-form', component: NewsForm }
      ]
    },
    {
      path: '/category', name: 'category', component: Category, children: [
        { path: 'list', name: 'category-list', component: CategoryList },
        { path: 'form', name: 'category-form', component: CategoryForm }
      ]
    }
  ]
});