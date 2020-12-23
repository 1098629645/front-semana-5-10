import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';


Vue.use(Vuetify);

export default new Vuetify({
    theme: { dark: true },
});
// You can manually turn dark on and off by changing this.$vuetify.theme.dark to true or false.