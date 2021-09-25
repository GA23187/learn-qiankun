<template>
    <div class="vue">
        test
        <div class="test">{{test}}</div>
        <el-button @click="add">{{test}}</el-button>
        <el-button @click="toVue">toVue</el-button>
        <el-button @click="toChild">toChild</el-button>
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
        console.log('test')
    },
    methods:{
        toVue(){
            this.$router.push({
                name: 'vue'
            })
        },
        toChild(){
            this.$router.push({
                name: 'child'
            })
        },
        add(){
            this.test = this.test + 111
        }
    }
}
</script>