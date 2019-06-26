// 默认已经定义了main模块

var params="";
var userL=JSON.parse(getSessionData("user"));
var up=JSON.parse(getSessionData("up"));
loader.define(function(require,exports,module){


    var pageview = {};

    // 主要业务初始化
    pageview.init = function() {
        // 这里写main模块的业务
        params = router.getPageParams();
        var html="";
        for(var i=0;i<params.files.length;i++){
        	html+='<p><a href="#" style="color:blue;" b-click="page.download('+i+')" >'+params.files[i].fileName+'</a></p>'
        	//$("#file-div").append(html)
        }
        $("#file-div").html(html)
        
        
        
        var checkDialog = bui.dialog({
            id: "#check-dg",
            fullscreen: true,
            mask: false,
            effect: "fadeInRight"
        });
        console.log("dd->"+(userL.roleType!=params.user_type && params.status==1))
        var bs=bui.store({
            scope:'page',
            data:{
                list:params,
                showCheckBtn:(userL.roleType=params.user_type && up.o_task=='on' && params.status==0)?true:false,
                showSignBtn:(userL.roleType!=params.user_type && params.status==1)?true:false,
                showUpdateBtn:(roleType=params.user_type && params.status==-1)?true:false,
            },
            methods:{
            	sure:function(e){
            		console.log(JSON.stringify(gl_para.userL))
            		$.ajax({
        				url : xh.getUrl()+'WorkContact/sign',
        				type : 'POST',
        				dataType : "json",
        				async : true,
        				data : {
        					taskId : params.taskId,
        					addUser : params.addUser
        				},
        				success : function(data) {

        					if (data.success) {
        						toastr.success(data.message, '提示');
        						bui.back({
        							callback:function(){
        								loader.require(["pages/workcontact/table"],function(res){
        									res.refresh();
        									res.init();
        			                    })
        							}
        						});
        						
        					} else {
        						toastr.error(data.message, '提示');
        					}
        				},
        				error : function() {
        					toastr.success("系统错误", '提示');
        				}
        			});
            	},
            	download:function(path1){
            		var path=params.files[path1].filePath;
            		if(path!=null && path!=""){
            			var index=path.lastIndexOf("/");
            			var name=path.substring(index+1,path.length);	
            			var downUrl = xh.getUrl()+"uploadFile/downfile?filePath="+path+"&fileName=" + name;
            			if(xh.isfileapp(path)){
            				window.open(downUrl, '_self',
            				'width=1,height=1,toolbar=no,menubar=no,location=no');
            			}else{
            				toastr.error("文件不存在", '提示');
            			}
            		}
            	}
            	
            }
        });
        var content=params.content.replace(/<br>/g,"<br />");
        content=content.replace(/" "/g,"&nbsp;")
        $("#content").html(content);
        
        var checkDialog = bui.dialog({
            id: "#check-dg",
            fullscreen: true,
            mask: false,
            effect: "fadeInRight"
        });
        $("#check").click(function() {
        	checkDialog.open();
        });

        // 接收页面参数
        var getParams = bui.getPageParams();
        getParams.done(function(result){
        })
    }

    // 事件绑定
    pageview.bind = function() {

    }

    // 初始化
    pageview.init();
    // 绑定事件
    pageview.bind();

    return pageview;
})
function check(tag){
	//router.load({ url: "pages/workcontact/check.html", param: {} });
	 bui.ajax({
	        url: xh.getUrl()+"WorkContact/check",
	        method:'POST',
	        dataType:'JSON',
	        data: {
	        	note:$("#check-dg").find("textarea[name='note']").val(),
				state:tag,
				data : JSON.stringify(params)
	        }
	    }).then(function(res){
	    	toastr.success(res.message, '提示');
	    	bui.back({
				callback:function(){
					loader.require(["pages/workcontact/table"],function(res){
						res.refresh();
						res.init();
                    })
				}
			});
	    },function(res,status){
	        console.log(status);
	    })
}