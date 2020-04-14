<template>
    <div id="rep-box">
        {{data.a}}
    </div>
</template>

<script>
    export default {
        name: "rep-box",
        props: ["data"],
        data(){
            return {

            }
        },created() {

        }

    }
</script>

<style scoped>
#rep-box{
    width: 100%;
    height: 100%;
    /*border: 1px solid black;*/
    border: 1px solid black;
}
</style>