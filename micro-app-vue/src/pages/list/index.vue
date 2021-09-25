<template>
    <div class="vue">
        vue
        <div class="test">{{test}}</div>
        <el-button @click="add">{{test}}</el-button>
        <el-button @click="toTest">toTest</el-button>
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data(){
        return {
            test: '123'
        }
    },
    mounted(){
        console.log('vue')
    },
    methods:{
        toHome(){
            this.$router.push({
                name: 'home'
            })
        },
        toTest(){
            this.$router.push({
                name: 'test'
            })
        },
        add(){
            this.test = this.test + 111
        }
    }
}
</script>