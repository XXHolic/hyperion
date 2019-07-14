import Vue from 'vue';
import Router from 'vue-router';
import Message from '../page/message/Message';
import Find from '../page/find/Find';
import Mine from '../page/mine/Mine';
import AddressBook from '../page/addressBook/AddressBook';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Message',
      component: Message,
    },
    {
      path: '/address',
      name: 'AddressBook',
      component: AddressBook,
    },
    {
      path: '/find',
      name: 'Find',
      component: Find,
    },
    {
      path: '/mine',
      name: 'Mine',
      component: Mine,
    },
  ],
});
