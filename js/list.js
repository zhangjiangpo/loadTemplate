/**
 * Created by zhaimeiling on 2015/8/11.
 */
$(document.body).on('click','#goBackIndex', function () {
    $.pageArr.list.remove($.pageArr.list);
});
var listArr=[];
for(var i=0;i< $.pageArr.listData.length;i++){
    listArr.push('<li><a href="javascript:;" userid="'+ $.pageArr.listData[i].id+'" username="'+ $.pageArr.listData[i].name+'">'+$.pageArr.listData[i].name+'</a></li>');
}
$('#goDetail').html(listArr.join(''));
$('#goDetail').on('click', 'li a',function () {
    var id=$(this).attr('userid'),name=$(this).attr('username');
    $.pageArr.detail=$.loadTemplate({
        url:'./template/detail.html',
        scriptArr:['./js/detail.js'],//加载页面对应的js文件
        nameId:'detail',
        zIndex:'9',
        animate:'right',
        loadComplete: function () {
            $.extend($.pageArr.detailData,{id:id,name:name});
        }
    })
})
