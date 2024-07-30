import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'HomeView',
    setup() {
        const msg = ref('Home');
        
        return {
            msg
        }
    }
});