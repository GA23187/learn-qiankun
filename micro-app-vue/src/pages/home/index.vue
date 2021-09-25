<template>
    <div class="home">
        home
        <!-- <el-button @click="toVue">tovue</el-button>
        <el-button @click="toChild">toChild</el-button> -->
    </div>
</template>
<script>
export default {
    name: 'Home',
    data(){
        return {}
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
        }
    }
}
</script>
<style scoped>
.home {
    width: 800px;
    color: black;
    background-color: pink;
}
</style>