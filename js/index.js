/**
 * Created by zhaimeiling on 2015/8/11.
 */
$(function () {
    $.pageArr={
        index:null,
        list:null,
        listData:[{
            id:'1',
            name:'zhang'
        },{
            id:'2',
            name:'li'
        },{
            id:'3',
            name:'wang'
        },{
            id:'4',
            name:'zhao'
        },{
            id:'5',
            name:'guan'
        },{
            id:'2',
            name:'li'
        },{
            id:'3',
            name:'wang'
        },{
            id:'4',
            name:'zhao'
        },{
            id:'5',
            name:'guan'
        },{
            id:'2',
            name:'li'
        },{
            id:'3',
            name:'wang'
        },{
            id:'4',
            name:'zhao'
        },{
            id:'5',
            name:'guan'
        }],
        detail:null,
        detailData:{
            id:'',
            name:''
        }
    }
    $('#loadList').on('click',function(){
        $.pageArr.list=$.loadTemplate({
            url:'./template/list.html',
            scriptArr:['./js/list.js'],//加载页面对应的js文件
            nameId:'list',
            zIndex:'9',
            animate:'right'
        })
    })
})
