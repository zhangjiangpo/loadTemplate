/**
 * Created by zhaimeiling on 2015/8/12.
 */
$('#userid').html($.pageArr.detailData.id);
$('#username').html($.pageArr.detailData.name);
$('#goListBack').on('click',function(){
    $.pageArr.detail.remove();
});
