<template>
    <div class="card-list">
        <div class="card-item" v-for="item in list" :style="{ backgroundImage: `url(${item.image})` }">
            <p>{{item.title}}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardList',
    props: {
        list: {
            type: Array,
            default: () => [
                { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                // { title: '五角星', image: 'http://pic25.nipic.com/20121205/10197997_003647426000_2.jpg' },
                ]
        }
    }
}
</script>

<style lang="less" scoped>
.card-list {
    display: flex;
    flex-wrap: wrap;
    > .card-item {
        margin-right: 20px;
        margin-bottom: 20px;
        padding-top: 220px;
        width: 300px;
        background-size: cover;
        background-color: #FFF;
        border: 6px solid #eee;
        outline: 1px solid #FFF;
        > p {
            height: 28px;
            line-height: 30px;
            text-align: center;
            background-color: #eee;
        }
    }
}
</style>
