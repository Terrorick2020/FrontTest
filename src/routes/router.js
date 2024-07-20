import { createRouter, createWebHashHistory } from "vue-router";
import InventoryPage from '../view/InventoryPage.vue';


const router = createRouter( {
    history: createWebHashHistory(),
    routes: [
        { path: '/inventory', alias: '/', component: InventoryPage, meta: { title: 'Инвентарь' } }
    ]
} );

router.beforeEach( (to, from, next) => {
    document.title = to.meta.title || 'Ошибка';
    next();
} )

export default router;