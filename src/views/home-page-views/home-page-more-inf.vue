<!--主页中的主要信息-->
<template>
    <div id="home-page-more-inf">
        <div class="rep-box-1">

            <div class="rep-box-2">
                <p>仓库</p>
<!--                循环-->
                <div v-for="item in rep_inf_arr" class="every-rep-box">
                   <rep-box v-bind:data="item"></rep-box>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import RepBox from "../../components/rep-box";
    export default {
        name: "home-page-more-inf",
        components: {RepBox},
        data(){
            return {
                rep_inf_arr : [
                    {a : 1},
                    {a : 1},
                    {a : 1},
                    {a : 1},
                    {a : 1},
                    {a : 1},
                ]
            }
        }

    }
</script>

<style scoped>
div{
    box-sizing: border-box;
}
#home-page-more-inf{
    padding-bottom: 20px;
    padding-top: 40px;
}

.rep-box-1{
    display: flex;
    flex-direction: column;
}



/*    仓库设置*/
.rep-box-2{
    border: 1px solid red;
    width: 80%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    flex-wrap: wrap;
    padding-bottom: 30px;
    position: relative;
}


.rep-box-2 > p{
    position: absolute;
    left: 0;
    font-size: 30px;
    font-weight: 500;
    top: -1.2em;
}
.every-rep-box{
    margin-top: 30px;
    width: 30%;
    height: 200px;
}

</style>