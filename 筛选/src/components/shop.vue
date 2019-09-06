<template>
    <div id="bigbox">
      <div id="box">
        <!-- <router-view/> -->
        <div id="label">
            <h3>已选条件</h3>
            <ul id="yxtj">
                <li v-for="(tj,index) of alreadyTj" >
                    {{tj}}
                    <button @click="shanchu(tj,index)">删除</button>
                </li>
            </ul>
            <h3 id="h3" @click="clearAll()">清除所有条件</h3>
        </div>
        <div id="label">
            <h3>商城类型</h3>
             <ul>
                 <li v-for="(i1,index) of shopType" v-text="i1.title" @click="findShopType(index)"></li>
             </ul>
        </div>
        <div id="label">
            <h3>商标类型</h3>
             <ul>
                 <li v-for="(i2,index) of logoType" v-text="i2.title" @click="findLogoType(index)"></li>
             </ul>
        </div>
        <div id="label">
            <h3>所在地区</h3>
             <ul>
                 <li v-for="(i3,index) of area" v-text="i3.title" @click="findArea(index)"></li>
             </ul>
        </div>
        <div id="label">
            <h3>所属行业</h3>
             <ul>
                 <li v-for="(i4,index) of trade" v-text="i4.title" @click="findTrade(index)"></li>
             </ul>
        </div>
        <div id="label" style="border:none;">
            <h3>商品价格</h3>
             <ul>
                 <li v-for="(i5,index) of price" v-text="i5.title" @click="findPrice(index)"></li>
             </ul>
        </div>
        
        </div>
        <div id="shopList">
            <ul id="listUl">
                <li v-for="(item,index) of shopList" >
                    <ul id="itemUl" style="height:60px;">
                        <li>
                            <label id="label-title">所属行业</label>
                            <span id="label-icon" v-text="item.trade"></span>
                        </li>
                        <li>
                            <label id="label-title">商城类型</label>
                            <span id="label-icon" v-text="item.shopType"></span>
                        </li>
                        <li>
                            <label id="label-title">商标类型</label>
                            <span id="label-icon" v-text="item.logoType"></span>
                        </li>
                        <li>
                            <label id="label-title">所在地区</label>
                            <span id="label-icon" v-text="item.area"></span>
                        </li>
                        <li>
                            <label id="label-title">价格</label>
                            <span id="label-icon" v-text="item.price"></span>
                        </li>
                        <li>
                            <label id="label-title">商品名字</label>
                            <span id="label-icon" v-text="item.shopName"></span>
                        </li>
                    </ul>
                  
                </li>
            </ul>
        </div>
    </div>
</template>

<script>


export default {
    data(){
        return{
            shopType:this.$store.state.lineType.shopType,
            logoType:this.$store.state.lineType.logoType,
            area:this.$store.state.lineType.area,
            trade:this.$store.state.lineType.trade,
            price:this.$store.state.lineType.price,
            shopName:this.$store.state.lineType.shopName,
            shopList:[
            ],
            shopList2:[],
            tiaojianA:[],
            tiaojianB:[],
            tiaojianC:[],
            tiaojianD:[],
            tiaojianE:[],
            tiaojianAll:[],
            beifen:[],
            beifen2:[],
            alreadyTj:[],
            existSuoyin:"",
            existSuoyin2:"",
            existSuoyin3:"",
            existSuoyin4:"",
            existSuoyin5:"",
        }
    },
    mounted(){
    this.make();
    this.shopList2=this.shopList.slice();
},
    methods:{
    make:function(){
        var that=this;
        for(var i=0;i<20;i++){
           var a=parseInt(Math.random()*5);
           var b=parseInt(Math.random()*3);
           var c=parseInt(Math.random()*3);
           var d=parseInt(Math.random()*5);
           var e=parseInt(Math.random()*3);
           var f=parseInt(Math.random()*4);
            this.shopList.push({
                id:this.shopList.length,
                trade:that.trade[a].title,
                shopType:that.shopType[b].title,
                logoType:that.logoType[c].title,
                price:that.price[d].title,
                shopName:that.shopName[e].title,
                area:that.area[f].title
            })
        }
    },
  
    findShopType:function(aa){
        this.tiaojianA=[];
        this.tiaojianA.push(
        this.shopType[aa].title);
        this.tiaojianAll=this.tiaojianA.concat(this.tiaojianB,this.tiaojianC,this.tiaojianD,this.tiaojianE)
            
        var exist=0;
       
        for(var i=0;i<this.shopType.length;i++){
            if(this.alreadyTj.indexOf(this.shopType[i].title)!=-1){
                exist++;
            }
        }

        if(exist==0){
               this.alreadyTj.push(this.tiaojianA[0]);        
               this.existSuoyin=this.alreadyTj.indexOf(this.tiaojianA[0]);
               console.log(this.existSuoyin)
        }else{
                      
            this.$set(this.alreadyTj,this.existSuoyin,this.tiaojianA[0]); 

        }
     
       
        this.beifen=[];
        this.shopList=this.shopList2.slice();
        var that=this;
 
        this.common();
    },
    findLogoType:function(bb){

        this.tiaojianB=[];
        this.tiaojianB.push(
            this.logoType[bb].title
        );
        this.tiaojianAll=this.tiaojianA.concat(this.tiaojianB,this.tiaojianC,this.tiaojianD,this.tiaojianE)
        

        var exist=0;
     
        for(var i=0;i<this.logoType.length;i++){
            if(this.alreadyTj.indexOf(this.logoType[i].title)!=-1){
                exist++;
            }
        }
        if(exist==0){
               this.alreadyTj.push(this.tiaojianB[0]);
               this.existSuoyin2=this.alreadyTj.indexOf(this.tiaojianB[0]);
            
        }else{
             this.$set(this.alreadyTj,this.existSuoyin2,this.tiaojianB[0]); 
        }


        this.beifen=[];
        this.shopList=this.shopList2.slice();
        var that=this;


        this.common();
 
    },
    findArea:function(cc){
        this.tiaojianC=[];
        this.tiaojianC.push(
            this.area[cc].title
        );
        this.tiaojianAll=this.tiaojianA.concat(this.tiaojianB,this.tiaojianC,this.tiaojianD,this.tiaojianE)
      
        var exist=0;
     
        for(var i=0;i<this.area.length;i++){
            if(this.alreadyTj.indexOf(this.area[i].title)!=-1){
                exist++;
            }
        }
        if(exist==0){
               this.alreadyTj.push(this.tiaojianC[0]);
               this.existSuoyin3=this.alreadyTj.indexOf(this.tiaojianC[0]);
            
        }else{
             this.$set(this.alreadyTj,this.existSuoyin3,this.tiaojianC[0]); 
        }

        this.beifen=[];
         this.shopList=this.shopList2.slice();
        var that=this;

        this.common();
    },
    findTrade:function(dd){
        this.tiaojianD=[];
        this.tiaojianD.push(
            this.trade[dd].title
        );
        this.tiaojianAll=this.tiaojianA.concat(this.tiaojianB,this.tiaojianC,this.tiaojianD,this.tiaojianE)
      
        
        var exist=0;
     
        for(var i=0;i<this.trade.length;i++){
            if(this.alreadyTj.indexOf(this.trade[i].title)!=-1){
                exist++;
            }
        }
        if(exist==0){
               this.alreadyTj.push(this.tiaojianD[0]);
               this.existSuoyin4=this.alreadyTj.indexOf(this.tiaojianD[0]);         
        }else{
             this.$set(this.alreadyTj,this.existSuoyin4,this.tiaojianD[0]); 
        }


        this.beifen=[];
          this.shopList=this.shopList2.slice();
        var that=this;

        this.common();
    },
    findPrice:function(ee){
         this.tiaojianE=[];
        this.tiaojianE.push(
            this.price[ee].title
        );
        this.tiaojianAll=this.tiaojianA.concat(this.tiaojianB,this.tiaojianC,this.tiaojianD,this.tiaojianE)
      
             
        var exist=0;
     
        for(var i=0;i<this.price.length;i++){
            if(this.alreadyTj.indexOf(this.price[i].title)!=-1){
                exist++;
            }
        }
        if(exist==0){
               this.alreadyTj.push(this.tiaojianE[0]);
               this.existSuoyin5=this.alreadyTj.indexOf(this.tiaojianE[0]);         
        }else{
             this.$set(this.alreadyTj,this.existSuoyin5,this.tiaojianE[0]); 
        }


        this.beifen=[];
        this.shopList=this.shopList2.slice();
        var that=this;


        this.common();
    },
   
    shanchu:function(tj,de){
        this.alreadyTj.splice(de,1);
        var that=this;
        this.tiaojianAll.forEach(function(item,index){
            if(item==tj){
                that.$delete(that.tiaojianAll,index)
                // that.tiaojianAll.splice(index,1);
            }
        })
        console.log(this.tiaojianAll+"asdasd");
      
        this.beifen2=[]
        this.shopList=this.shopList2.slice();
        this.sc();
        if(this.tiaojianAll==""){
            this.tiaojianA=[];
            this.tiaojianB=[];
            this.tiaojianC=[];
            this.tiaojianD=[];
            this.tiaojianE=[];
    }
       
    },
    common:function(){
      var that=this;
      console.log(this.shopList2);
      console.log(this.tiaojianAll);
       this.shopList.forEach(function(item,index){
                var cc=[];  
                for(var i in item){
                    cc.push(item[i]);
                }  
                var count=0;
                for(var i=0;i<that.tiaojianAll.length;i++){
                    for(var j=0;j<cc.length;j++){
                        if(that.tiaojianAll[i]==cc[j]){
                            count++;
                        }
                    }
                }
                if(count==that.tiaojianAll.length){
                    that.beifen.push(item);
                }
        })
        this.shopList=that.beifen;           
    },
    sc:function(){
        var that=this;
        console.log(this.tiaojianAll);
    
        this.shopList.forEach(function(item,index){
                var cc=[];  
                for(var i in item){
                    cc.push(item[i]);
                }  
                var count=0;
                for(var i=0;i<that.tiaojianAll.length;i++){
                    for(var j=0;j<cc.length;j++){
                        if(that.tiaojianAll[i]==cc[j]){
                            count++;
                        }
                    }
                }
                if(count==that.tiaojianAll.length){
                    that.beifen2.push(item);
                }
        })
        this.shopList=that.beifen2;     
    },
},
  
}
</script>

<style>
    #box{
    width: 1200px;
    height: 380px;
    margin:0 auto;
    padding: 15px 26px 0;
    box-sizing: border-box;
    border-radius: 8px;
    background: #fff;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 1px 2px -1px;
    }
    #label{
 
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    height: 60px;
    flex-flow: row wrap;
    }
    #label h3{
    width: auto;
    margin-right: 40px;
    font-size: 14px;
    line-height: 60px;
    color: #999;
    }
    #label li{
     float: left;
    width: 150px;
    font-size: 14px;
    color: #394043;
    line-height: 60px;
    cursor: pointer;
    }
    #shopList{
     width: 1200px;
     margin: 50px auto;
     height: 500px;
     border:1px solid transparent;
     box-sizing: border-box;
    }
    #listUl>li{
    border-bottom: 1px solid #f1f1f1;
    padding: 30px;
    margin-bottom: 20px;
    background: #fff;
    }
    #label-title{
    height: 30px;
    line-height: 30px;
    display: block;
    text-align: center;
    border-bottom: none;
    font-size: 14px;
     color: #999;
    }
    #label-icon{
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    height: 30px;
    line-height: 30px;
    display: block;
    text-align: center;
    border-bottom: none;
    font-size: 14px;
    }
    #itemUl li{
     float: left;
    width: 110px;
    height: 60px;
    font-size: 14px;
    color: #616669;
    margin-bottom: 14px;
    position: relative;
    top: 0;
    left: 0;
    }
    #itemUl li::before{
      content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    height: 40px;
    width: 1px;
    background: #EBEBEB;
    margin: auto;
    }
    #itemUl li::after{
     content: '';
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    height: 40px;
    width: 1px;
    background: #EBEBEB;
    margin: auto;
    }
    #yxtj li{
        margin-left:10px;
        text-align: center;
        line-height: 40px;
        color:#fff !important;
        background: #4C3571;
        /* padding: 2px 10px; */
        width:100px;
        height: 40px;
        border-radius:10px;
    }
     #yxtj button{
         background:skyblue;
         color:rgba(1,1,1,.5);
         border:none;
         margin-left:10px;
          border-radius:2px;
     }
     #h3{
         margin-left:20px;
     }
</style>
