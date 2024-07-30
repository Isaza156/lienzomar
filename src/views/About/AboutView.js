import { defineComponent, ref } from 'vue';

export default defineComponent({
    name: 'AboutView',
    setup() {
        const msg = ref('About');
        
        return {
            msg
        }
    }
});