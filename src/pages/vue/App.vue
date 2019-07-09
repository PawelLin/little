<template>
    <section id="container">
        <side-menu :list="list"/>
        <router-view />
    </section>
</template>

<script>

import SideMenu from '@/components/side-menu.vue'

export default {
    // name: 'vue-app',
    components: {
        SideMenu
    },
    data () {
        return {
            list: [
                { name: '组件', route: 'vue-components' }
            ]
        }
    },
}
</script>
