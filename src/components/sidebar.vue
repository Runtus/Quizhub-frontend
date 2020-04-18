<template>
    <transition name="sidebar">
<!--        <button v-on:click="sidebarshow">-->
<!--            gogo-->
<!--        </button>-->
        <div class="sidebar-component"  v-on:mouseleave="mouseleave" v-show="is_mouse_on">

        </div>
    </transition>
</template>

<script>
    export default {
        name: "sidebar",
        data(){
            return {
                is_mouse_on : false
            }
        },
        methods:{
            sidebarshow(){
                this.is_mouse_on = true;
            },
            mouseleave(){
                this.is_mouse_on = false;
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

.sidebar-leave,.sidebar-enter-to{
    margin-left: 0;
}

.sidebar-leave-active.sidebar-enter-active{
    transition: margin-left 0.2s ease-in-out;
}

.sidebar-leave-to,.sidebar-enter{
    margin-left: -100px;
}
</style>