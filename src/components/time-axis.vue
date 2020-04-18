<template>
    <div class="time-axis">
            <!--        循环从下面开始-->
        <div class="every-box" v-for="item in active_data">
            <div class="time">
                <span>{{item.time}}</span>
            </div>
            <div class="inf" >
                <div v-for="small_item in item.active_inf" class="active_inf">
                    {{small_item.inf}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "time-axis",
        props: ["active_data"],
        data(){
            return {

            }
        }
    }
</script>

<style scoped>


/*本来组件根目录有着最好不要使用margin的原则。但是这里不好调整，就只能使用margin*/
.time-axis{
    /*border: 1px solid black;*/
}

.align-line{

}

.every-box{
    position: relative;
    border-left: 2px solid #eaecef;
    height: 200px;
    width: 100%;

}

.every-box:first-child{
    margin-top: 150px;
}


.time{
    text-align: left;
    position: absolute;
    top: -20px;
    left: -5%;
    width: 100%;
}

.time > span{
    display: inline-block;
    background-color:rgb(244,244,244);
    line-height: 1.5em;


}
.time > span:after{
    z-index: -1;
    position: absolute;
    height: 2px;
    display: inline-block;
    width: 100%;
    top: 0.7em;
    content: "";
    left: 0;
    background-color: #eaecef;
}

.inf{
    text-align: left;

    padding-left: 20px;
    padding-top: 20px;
}


</style>