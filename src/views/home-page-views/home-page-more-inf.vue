<!--主页中的主要信息-->
<template>
    <div id="home-page-more-inf">

<!--        仓库-->

        <!--            仓库块的最外层-->
        <div class="rep-box-1">
<!--        每个仓库的实际外部盒子-->
            <div class="rep-box-2">
                <p>仓库概览</p>
                <div id="line1"><!--分割线辅助--></div>
<!--                循环-->
                <div v-for="item in rep_inf_arr" class="every-rep-box">
                    <rep-box v-bind:data="item"></rep-box>
                </div>
            </div>
        </div>

<!--        时间轴-->
        <div class="time-axis">
            <p>活动记录</p>
            <div id="line2"></div>
            <img src="@/assets/history.svg" alt="历史记录" >
            <time-axis class="component-time-axis" v-bind:active_data="time_axis"></time-axis>
        </div>


    </div>
</template>

<script>
    import RepBox from "../../components/rep-box";
    import TimeAxis from "../../components/time-axis";
    export default {
        name: "home-page-more-inf",
        components: {TimeAxis, RepBox},
        data(){
            return {
                rep_inf_arr : [
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "你是真的牛皮你是真的牛皮你是真的牛皮你是真的牛皮你是真的牛皮",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"
                    },
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "仓库介绍",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"},
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "仓库介绍",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"
                    },
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "仓库介绍",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"
                    },
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "仓库介绍",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"
                    },
                    {
                        rep_title : "仓库标题",
                        rep_proto : "仓库属性",
                        rep_intro : "仓库介绍",
                        rep_fork : 1 ,
                        rep_star : 2 ,
                        rep_tag : "仓库标签"
                    }
                ],
                time_axis : [
                    {
                        time : "2020-01-01",
                        active_inf : [
                            {
                                id : "1",
                                inf : "update something"
                            },
                            {
                                id : "2",
                                inf : "delete something"
                            }
                        ]
                    },
                    {
                        time : "2020-01-01",
                        active_inf : [
                            {
                                id : "1",
                                inf : "update something"
                            },
                            {
                                id : "2",
                                inf : "delete something"
                            }
                        ]
                    },
                    {
                        time : "2020-01-01",
                        active_inf : [
                            {
                                id : "1",
                                inf : "update something"
                            },
                            {
                                id : "2",
                                inf : "delete something"
                            }
                        ]
                    }
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
    /*background-color: #D9FFFF;*/
    /*z-index: -2;*/
    border: 1px solid rgb(238,244,244);
    padding-bottom: 20px;
    position: relative;
}

/*仓库*/
.rep-box-1{
    display: flex;
    flex-direction: column;
    margin-top: 100px;
}


/*分割线*/
#line1{
    position: absolute;
    height: 1px;
    border-top: 1px solid rgb(200,200,200);
    width: 100%;

}


/*    仓库设置*/
.rep-box-2{

    width: 85%;
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
    top: -1.5em;
}
.every-rep-box{
    margin-top: 30px;
    width: 30%;
    height: 200px;

}


/*  时间轴  */
.time-axis{
    position: relative;
    /*border:1px solid black;*/
    width: 85%;
    margin: 10% auto;

}

.time-axis > p{
    text-align: left;
    font-weight: 500;
    font-size: 30px;
}


#line2{
    height: 1px;
    border-top: 1px solid rgb(200,200,200);
    width: 100%;

}

.time-axis > img{
    width: 2em;
    position: absolute;
    left: 3em;
    top: 7em;
}

.component-time-axis{

}
</style>