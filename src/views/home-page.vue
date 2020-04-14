<template>
    <div class="home-page">
        <headbar></headbar>
        <div class="inf">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
    import Headbar from "../components/headbar";
    export default {
        name: "home-page",
        components: {Headbar}
    }
</script>

<style scoped>
.inf{
    border: 1px solid black;
    width: 70%;
    margin: 30px auto;
}
</style>