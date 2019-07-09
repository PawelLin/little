<template>
    <ul class="slide-menu">
        <li v-for="item in list" :class="active === item.route ? 'active' : ''">
            <router-link :to="{ name: item.route }">{{item.name}}</router-link>
        </li>
    </ul>
</template>

<script>
export default {
    name: 'SideMenu',
    props: {
        list: {
            type: Array,
            default: () => []
        }
    },
    computed: {
        active () {
            return this.$route.name
        }
    }
}
</script>

<style lang="less" scoped>
.slide-menu {
    width: 200px;
    flex-shrink: 0;
    border-right: 1px solid #FFF;
    > li {
        transition: .3s all;
        &:hover {
            background-color: #FFF;
        }
        &.active {
            background-color: #FFF;
        }
        > a {
            display: block;
            padding: 10px 30px;
        }
    }
}
</style>

