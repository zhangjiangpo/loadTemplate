/**
 * Created by zhaimeiling on 2015/8/11.
 */
$(function () {
    $.pageArr={
        index:null,
        list:null
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
