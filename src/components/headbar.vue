<template>
    <div class="headbar">
        <div class="sub-up"><!--头像+简介+编辑按钮-->
            <el-row class="el-box-1" type="flex" align="middle" >
                <el-col :span="4" class="col-1 head">
                    <div class="card-1">
                        <div class="image-box">
                            <img alt="头像" src="@/assets/tem.png">
                        </div>
                        <p id="nickname">{{username}}</p>
                    </div>
                </el-col>
<!--                简介-->
                <el-col :span="12" class="col-1 self-intro" :offset="2">
                    <div class="card-2">
                        <img src="@/assets/个人信息.svg" >
                        <p id="self-intro">{{intro}}</p>
                    </div>
                    <div class="card-3">
                        <img src="@/assets/链接.svg">
                        <p id="contact">{{contact}}</p>
                    </div>
                </el-col>
<!--                按钮，后期要增添功能-->
                <el-col :span="4" class="col-1 edit" :offset="2">
                    <el-tooltip class="item" effect="dark" content="修改信息" placement="right">
                        <el-button icon="el-icon-edit" circle class="button"></el-button>
                    </el-tooltip>
                </el-col>
            </el-row>
        </div>
        <div class="router-links"><!--路由按钮-->
            <el-menu id="el-menu-demo" mode="horizontal" :default-active="$route.path" background-color="#545c64" active-text-color="#ffd04b" text-color="#B6EAFF" router>
                <el-menu-item index="/home-page/main" class="item"  id="special">主页</el-menu-item>
                <el-menu-item index="/home-page/rep" class="item">社交</el-menu-item>
                <el-menu-item index="/home-page/xxxxx" class="item">仓库</el-menu-item>
                <el-menu-item index="/home-page/xxxx" class="item">stars</el-menu-item>
                <el-menu-item index="/home-page/xxx" class="item">团队</el-menu-item>
            </el-menu>
        </div>
    </div>
</template>

<script>
    export default {
        name: "headbar",
        data(){
            return {
                username : "RuntuS",
                intro : "爱前端，爱生活",
                contact : "https://laolan-runtu.xyz"
            }
        },
        created() {
            console.log(this.$route)
        }
    }
</script>

<style scoped>



/*辅助样式，调试用*/



.sub-up{
    height: 200px;
}





/**公共样式**/
div{
    box-sizing: border-box;
}

.headbar{
    width: 70%;
    margin: 0 auto;
    background-color: rgba(217,233,234,0.4);
    box-shadow: 0 0 5px #545c64;
    border-radius: 10px;
    /*border-bottom-right-radius: 10px;*/
    z-index: 1;
}

.col-1{
    height: 80%;
}


.el-box-1{
    height: 100%;
}

.router-links{
    height: 60px;

}

.item{
    width: 100px;
}

/*装有头像的盒子*/
/* head > .image-box > img*/

.head{
    position: relative;
}

.card-1{
    border-radius: 10px;
    height: 100%;
    padding: 10px;
    position: absolute;
    width: 60%;
    min-width: 120px;
    right: 0;
    box-shadow: 2px 1px 10px rgba(200,200,200,1);
    background-color: white;
}

.image-box{
    width: 100%;
    height: 70%;

}

.image-box > img{
    height: 100%;
    width: 100px;
    border-radius: 80px;
}


#nickname{
    font-size: 2em;
    font-weight: 500;
    /*text-align: left;*/

}


/*    可编辑按钮*/
.edit{
    position: relative;
}


.button{
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 50px;
    height: 50px;
}
/*    文本区*/
.self-intro{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background-color: white;
    box-shadow: 2px 0px 10px rgba(200,200,200,1);
    border-radius: 10px;

}
.card-2{
    text-align: left;
    height: 60%;
    padding: 15px;
    display: flex;
    flex-direction: row;
}
.card-2 > img{
    width: 1em;
    height: 1em;
    margin-top: 0.2em;

}
.card-2 > p{
    width: 50%;
    margin-left: 2%;
    font-size: 20px;
}

.card-3{
    padding-top: 2px;
    padding-left: 15px;
    text-align: left;
    height: 30%;
    display: flex;
    flex-direction: row;
}
.card-3 > img{
    width: 1em;
    height: 1em;
}
.card-3 > p{
    margin-left: 1em;
}


/*    路由区域*/
#el-menu-demo{
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
}

#special{
    border-bottom-left-radius: 10px;
}

</style>
