import { createStore } from 'vuex';
import createPersistedState from 'vuex-persistedstate';
import inventoryStore from './modules/inventoryStore.js';


const store = createStore( {
    modules: { inventoryStore },
    plugins: [createPersistedState()],
} )

export default store;