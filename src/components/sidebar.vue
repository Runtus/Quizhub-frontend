<template>
    <div class="sidebar-component" :style="{height : `${screenY * 0.8}px`}">

    </div>
</template>

<script>
    export default {
        name: "sidebar",
        methods:{

        },
        data(){
            return {
                screenY : window.innerHeight
            }
        },
        created() {
            console.log(this.screenY)
        },
        mounted() {
            var that = this;
            window.onresize = () => {
                that.screenY = window.innerHeight;
            }
        }

    }
</script>

<style scoped>
.sidebar-component{
    height: 600px;
    width: 100px;
    background-color: greenyellow;


}




</style>