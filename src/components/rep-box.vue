<template>
        <div id="rep-box" >
            <p class="hover-before title">{{data.rep_title}}</p>
            <p class="hover-before tag"><img src="@/assets/tag.svg" class="tag-icon" alt="tag标签">{{data.rep_tag}}</p>
            <p class="hover-before star-fork"><span id="star">{{data.rep_star}}<img src="@/assets/star.svg" alt="star标签"></span><span id="fork">{{data.rep_fork}}<img src="@/assets/fork.svg" alt="forks标签"></span></p>
            <div class="hover-active intro"><img src="@/assets/详情.svg"><p>{{data.rep_intro}}</p></div>
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
#rep-box {
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;
    /*border: 1px solid black;*/
    transition: background-color,box-shadow 0.2s ease-in-out;
    border: 1px rgba(200,200,200,0.9) solid;
    border-radius: 10px;
    background: linear-gradient(45deg,rgb(238,244,244),white);
}
/*文字样式设置区*/
p{

}

.hover-before{
    position: absolute;
    transition: color 0.1s ease-in-out;
}

.hover-active{
    width: 90%;
    left: 5%;
    text-align: start;
    position: absolute;
    top: 300px;
    transition: top 0.3s ease-in-out;
}

.title{
    font-weight: 500;
    font-size: 1.2em;
    top: 5%;
    left: 2%;
}

.tag{
    top: 50%;
    transform: translateY(-50%);
    left: 10%;
}

.star-fork{
    left: 6%;
    bottom: 5%;
    position: absolute;
    display: flex;
    flex-direction: row;
    width: 94%;
}

#star{
    flex-grow: 0;
    display: inline-block;
}

#fork{
    display: inline-block;
    margin-left: 50px;
}

.intro > p{
    margin-left: 5%;
    font-weight: 400;
}

/*对icon的设置*/
.tag-icon{
    position: absolute;
    width: 1.3em;
    height: 1.3em;
    left: -30%;
}

#star > img{
    width: 1em;
    height: 1em;
    position: absolute;
    top: 0.1em;
}


#fork > img{
    width: 1.2em;
    height: 1.2em;
    font-weight: 500;
    position: absolute;
}

.intro > img{
    width: 2em;
    height: 2em;
}

/*动态变化区*/
#rep-box:hover{
    cursor: pointer;
    box-shadow: 1px 1px 5px 1px #545c64;
}



/*对简介的hover样式调整*/
#rep-box:hover > .hover-active{
    top: 20%;
}

/*对活动标题，标签，star的hover样式调整*/
#rep-box:hover > .hover-before{
    filter: blur(1px);
    color: rgba(160,160,160,0.8);
}


</style>