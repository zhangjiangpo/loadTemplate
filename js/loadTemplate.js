/**
 * Created by zhaimeiling on 2015/8/11.
 */
;(function ($,doc) {
    var lt=null;
    $.loadTemplate = function (opt) {
        lt=new loadTemplate(opt);
        return lt;
    }
    function loadTemplate(opt){
        var detaultData={
            url:'',
            scriptArr:['list.js'],
            nameId:'',
            zIndex:'',
            loadAnimate:'right',//left、top、bottom、right
            removeAnimate:'right',
            loadComplete: function () {
                
            }//加载页面完毕
        };
        this.setting= $.extend({},detaultData,opt);
        this.init();
    }
    loadTemplate.prototype={
        init: function () {
            var addStr='<section id="'+this.setting.nameId+'" style="z-index:'+this.setting.zIndex+';" class="page-container page-load-'+this.setting.animate+'">';
            var _this=this;
            this.loadTem(this.setting.url, function (res) {
                addStr+=res+'</section>';
                $(doc.body).append(addStr);
                _this.setting.loadComplete();
                var inter=setInterval(function () {
                    if($('#'+_this.setting.nameId).length){
                        clearInterval(inter);
                        for(var i=0;i<_this.setting.scriptArr.length;i++){
                            var scri=doc.createElement('script');
                            scri.setAttribute('src',_this.setting.scriptArr[i]+'?v='+Math.random());
                            scri.setAttribute('scrname',_this.setting.nameId+'_'+Math.floor(Math.random()*1000));
                            doc.body.appendChild(scri);
                            //$(doc.body).append('<script type="text/javascript" src="'+_this.setting.scriptArr[i]+'"></script>')
                        }
                    }
                },10)
            });
        },
        getPage: function () {
            return $('#'+this.setting.nameId);
        },
        loadTem: function (url,ck) {
            $.get(url, function (response) {
                if(ck)ck(response);
            });
        },
        remove: function (tempObj,animate) {
            var _this=this;
            this.hide(animate);
            setTimeout(function(){
                $('script[scrname^="'+_this.setting.nameId+'_"]').remove();
                $('#'+_this.setting.nameId).remove();
                tempObj=null;
            },500);
        },
        hide: function (animate) {
            this.setting.removeAnimate=animate?animate:'right';
            $('#'+this.setting.nameId).removeClass('page-load-'+this.setting.animate)
                .addClass('page-remove-'+this.setting.removeAnimate);
        },
        show: function (animate) {
            this.setting.loadAnimate=animate?animate:'right';
            $('#'+this.setting.nameId).removeClass('page-remove-'+this.setting.removeAnimate)
                .addClass('page-load-'+this.setting.loadAnimate);
        }
    }
    var fnArr=['getPage','remove','hide'];
    for(var i=0;i<fnArr.length;i++){
        $.loadTemplate[fnArr[i]]= function () {
            lt[fnArr[i]].apply(lt,[].slice.call(arguments,0));
        }
    }
})(Zepto||jQuery,document)
