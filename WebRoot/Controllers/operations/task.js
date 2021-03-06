if (!("xh" in window)) {
	window.xh = {};
};
var frist = 0;
toastr.options = {
	"debug" : false,
	"newestOnTop" : false,
	"positionClass" : "toast-top-center",
	"closeButton" : true,
	/* 动态效果 */
	"toastClass" : "animated fadeInRight",
	"showDuration" : "300",
	"hideDuration" : "1000",
	/* 消失时间 */
	"timeOut" : "1000",
	"extendedTimeOut" : "1000",
	"showMethod" : "fadeIn",
	"hideMethod" : "fadeOut",
	"progressBar" : true,
};
var appElement = document.querySelector('[ng-controller=xhcontroller]');
xh.load = function() {
	var app = angular.module("app", []);
	var pageSize = $("#page-limit").val();
	
	app.filter('weekly', function() {
		return function(text) {
			return text + "  " + xh.weekly(text);
		}
	})
	app.filter('textArea', function() {
		return function(text) {
			
			var encodedStr = "" ;
		    if (text=="") {
		    	return encodedStr ;
		    }
		    else {
		    	var str = text.replace(/<br>/g,"<br />");
		        for (var i = 0 ; i < str.length ; i ++){
		            encodedStr += "&#" + str.substring(i, i + 1).charCodeAt().toString(10) + ";" ;
		        }
		    }
		    return encodedStr ;
		}
	})

	app.controller("xhcontroller", function($scope, $http) {
		xh.maskShow();
		$scope.count = "20";// 每页数据显示默认值;
		$scope.NO="";
		$scope.sendUnit="";
		$scope.page=1;
		$scope.type="通信保障";
		
		
		/* 获取用户权限 */
		$http.get("../../web/loginUserPower").success(function(response) {
			$scope.up = response;
			
		});
		$scope.nowDate = xh.today();
		// 获取登录用户
		$http.get("../../web/loginUserInfo").success(function(response) {
			xh.maskHide();
			$scope.loginUser = response;
			/*$scope.loginUser=JSON.parse(getLocalData("user"));
			$scope.up=JSON.parse(getLocalData("up"));*/
			if($scope.loginUser.roleType==2){
				$scope.sendUnit="成都市软件产业发展中心（成都信息化技术应用发展中心）"
			}else if($scope.loginUser.roleType==3 || $scope.loginUser.roleType==0){
				$scope.sendUnit="成都亚光电子股份有限公司"
			}
		});
		$http.get("../../WorkContact/list?&start=0&limit=" + pageSize).success(
				function(response) {
					xh.maskHide();
					$scope.data = response.items;
					$scope.totals = response.totals;
					xh.pagging(1, parseInt($scope.totals), $scope);
				});

		/* 刷新数据 */
		$scope.refresh = function() {
			$scope.search($scope.page);
		};
		/*获取编号*/
		$scope.CodeNum = function() {
			$http.get("../../WorkContact/codeNum").success(function(response) {
				$scope.NO = response.code;
				
			});
		}
		
		$scope.select=function(){
			$http.get("../../select/workcontact").success(function(response) {
				$scope.select_data = response.items;
				
			});
		}
		/* 显示详细信息 */
		$scope.detail = function(id) {
			$("#detail").modal('show');
			$scope.detailData = $scope.data[id];
			//text.replace(/<br>/g,"<br />");
			var str=$scope.detailData.content;
			str=str.replace(/<br>/g,"<br />");
			str=str.replace(/" "/g,"&nbsp;")
			$("#df").html(str)
		};
		
		$scope.showEdit= function(id) {
			$("#edit").modal('show');
			$scope.editData = $scope.data[id];
			var str=$scope.editData.content;
			str=str.replace(/<br>/g,"\r\n");
			str=str.replace(/" "/g," ")
			$("#content").html(str)
		};
		$scope.showAdd= function(id) {
			$("#add").modal('show');
			$scope.editData = $scope.data[id];
			var str=$scope.editData.content;
			str=str.replace(/<br>/g,"\r\n");
			str=str.replace(/" "/g," ")
			$("#add-content").html(str)
		};
		$scope.showCheck = function(id) {
			$("#checkWin").modal('show');
			$scope.detailData = $scope.data[id];
		};
		$scope.download = function(path) {
			var index=path.lastIndexOf("/");
			var name=path.substring(index+1,path.length);	
			var downUrl = "../../uploadFile/downfile?filePath="+path+"&fileName=" + name;
			if(xh.isfile(path)){
				window.open(downUrl, '_self',
				'width=1,height=1,toolbar=no,menubar=no,location=no');
			}else{
				toastr.error("文件不存在", '提示');
			}
			
		};
		$scope.showFileWin=function(){
			$("input[name='pathName']").click();
		}
		$scope.showHandle_file_upload_Win=function(){
			$("#handle_file_upload").click();
		}
		$scope.showSummary_file_upload_Win=function(){
			$("#summary_file_upload").click();
		}
		$scope.showUpdateFileWin=function(){
			$("input[name='pathName2']").click();
		}
		$("input[name='pathName']").change(function(){
			console.log($(this).val());
		});
		$scope.openWord = function(tag,id) {
			$scope.detailData = $scope.data[id];
			if(tag==1){
				POBrowser.openWindowModeless('../../office/openWord?path='+$scope.detailData.file_path,'width=1200px;height=800px;');
			}
			
		};
		$scope.previewDoc=function(path){
			console.log(path)
			if(path.toLowerCase().indexOf("doc")!=-1){
				console.log("doc")
				POBrowser.openWindowModeless(xh.getUrl()+'/office/previewWord?path='+
						path,'width=1200px;height=800px;');
			}else if(path.toLowerCase().indexOf("xls")!=-1){
				console.log("xls")
				POBrowser.openWindowModeless(xh.getUrl()+'/office/previewExcel?path='+
						path,'width=1200px;height=800px;');
			}else if(path.toLowerCase().indexOf("pdf")!=-1){
				console.log("pdf")
				POBrowser.openWindowModeless(xh.getUrl()+'/office/previewPDF?path='+
						path,'width=1200px;height=800px;');
			}else if(path.toLowerCase().indexOf("jpeg")!=-1){
				$("#showPicWin").modal('show');
				$scope.img_src=xh.getUrl()+"/"+path;
			}else if(path.toLowerCase().indexOf("jpg")!=-1){
				$("#showPicWin").modal('show');
				$scope.img_src=xh.getUrl()+"/"+path;
			}else if(path.toLowerCase().indexOf("png")!=-1){
				$("#showPicWin").modal('show');
				$scope.img_src=xh.getUrl()+"/"+path;
			}else{
				alert("该文件类型不支持在线预览")
			}
			
		}
		/*审核*/
		$scope.check = function(tag) {
			$.ajax({
				url : '../../WorkContact/check',
				type : 'POST',
				dataType : "json",
				async : true,
				data : {
					note:$("#checkWin").find("textarea[name='note']").val(),
					state:tag,
					data : JSON.stringify($scope.detailData)
				},
				success : function(data) {

					if (data.success) {
						xh.refresh();
						$("#checkWin").modal('hide');
						toastr.success(data.message, '提示');
						/*if(data.bean.status==1){
							//POBrowser.openWindowModeless(xh.getUrl()+'/Views/jsp/workcontact_doc_update.jsp?bean='+JSON.stringify(data.bean),'width=300px;height=200px;');
							POBrowser.openWindowModeless(xh.getUrl()+'/Views/jsp/workcontact_doc_update.jsp?bean='+JSON.stringify(data.bean),'width=400px;height=300px;');
						}*/
						
					} else {
						toastr.error(data.message, '提示');
					}
				},
				error : function() {
					toastr.success("系统错误", '提示');
				}
			});

		};
		/*撤销*/
		$scope.cancelTask = function(index) {
			var id = $scope.data[index].id;
			swal({
				title : "提示",
				text : "确定要撤销工作联系单吗？",
				type : "info",
				showCancelButton : true,
				confirmButtonColor : "#DD6B55",
				confirmButtonText : "确定",
				cancelButtonText : "取消",
			    closeOnConfirm : true, 
			    closeOnCancel : true,
			    }, function(isConfirm) {
				    if (isConfirm) {
				    	$.ajax({
							url : '../../WorkContact/cancel',
							type : 'post',
							dataType : "json",
							data : {
								id:id
							},				
							async : false,
							success : function(data) {
								xh.maskHide();
								if (data.success) {
									toastr.success(data.message, '提示');
									$scope.refresh();
								} else {
									toastr.error(data.message, '提示');
								}
							},
							error : function() {
								xh.maskHide();
								toastr.error("系统错误", '提示');
							}
						});
				    }
			});

		};

		/*删除文件*/
		$scope.delTaskFile= function(id) {
			$.ajax({
				url : '../../WorkContact/delFile',
				type : 'post',
				dataType : "json",
				data : {
					id:id
				},				
				async : false,
				success : function(data) {
					xh.maskHide();
					if (data.success) {
						toastr.success("成功", '提示');
						$scope.refresh();
					} else {
						toastr.error("失败", '提示');
					}
				},
				error : function() {
					xh.maskHide();
					toastr.error("系统错误", '提示');
				}
			});
		};

		/* 签收 */
		$scope.showReplyWin=function(index){
			$scope.editData= $scope.data[index];
			$("#replyWin").modal("show");
		}
		/* 处理结果 */
		$scope.showHandleWin=function(index){
			$scope.editData= $scope.data[index];
			$("#handleWin").modal("show");
		}
		/* 总结 */
		$scope.showSummaryWin=function(index){
			$scope.editData= $scope.data[index];
			$("#summaryWin").modal("show");
		}
		$scope.sign = function() {
			var id =$scope.editData.taskId;
			$.ajax({
				url : '../../WorkContact/sign',
				type : 'POST',
				dataType : "json",
				async : true,
				data : {
					taskId : id,
					addUser : $scope.editData.addUser,
					check_person : $scope.editData.check_person,
					reply:$("#replyWin").find("textarea[name='reply']").val()
				},
				success : function(data) {

					if (data.success) {
						xh.refresh();
						toastr.success(data.message, '提示');
						$("#replyWin").modal("hide");
					} else {
						toastr.error(data.message, '提示');
					}
				},
				error : function() {
					toastr.success("系统错误", '提示');
				}
			});

		};
		$scope.handle = function() {
			var id =$scope.editData.taskId;
			var files=[];
			
			
			$("#handle_file_area ul li").each(function(){
			    var name = $(this).children().first().text();
			    var path = $(this).children(".path").text();
			    if(name!="" && path!=""){
			    	var a={
			    			fileName:name,
			    			filePath:path
			    	}
			    	files.push(a);
			    }			   
			});
			$.ajax({
				url : '../../WorkContact/handle',
				type : 'POST',
				dataType : "json",
				async : true,
				data : {
					taskId : id,
					addUser : $scope.editData.addUser,
					checkUser : $scope.editData.checkUser,
					type:$scope.editData.type,
					note:$("#handleWin").find("textarea[name='handle']").val(),
					files: JSON.stringify(files)
					
				},
				success : function(data) {

					if (data.success) {
						xh.refresh();
						 $("#handle_file_area ul").children().remove();
						 $("#handleWin").find("textarea[name='handle']").val("")
						toastr.success(data.message, '提示');
						$("#handleWin").modal("hide");
					} else {
						toastr.error(data.message, '提示');
					}
				},
				error : function() {
					toastr.success("系统错误", '提示');
				}
			});

		};
		$scope.summary = function() {
			var id =$scope.editData.taskId;
			var note=$("#summaryWin").find("textarea[name='summary_note']").val();
            var files=[];
			
			
			$("#summary_file_area ul li").each(function(){
			    var name = $(this).children().first().text();
			    var path = $(this).children(".path").text();
			    if(name!="" && path!=""){
			    	var a={
			    			fileName:name,
			    			filePath:path
			    	}
			    	files.push(a);
			    }			   
			});
			if(files.length==0 && note==""){
				alert("未填写内容或者上传文件，禁止提交");
				return
			}
			$.ajax({
				url : '../../WorkContact/summary',
				type : 'POST',
				dataType : "json",
				async : true,
				data : {
					taskId : id,
					addUser : $scope.editData.addUser,
					checkUser : $scope.editData.checkUser,
					ensure_time : $scope.editData.ensure_starttime,
					type:$scope.editData.type,
					summary_note:$("#summaryWin").find("textarea[name='summary_note']").val(),
					fileName:$("#summaryWin").find("input[name='fileName2']").val(),
					filePath:$("#summaryWin").find("input[name='filePath2']").val(),
					person_num:$("#summaryWin").find("input[name='person_num']").val(),
					satellite_time:$("#summaryWin").find("input[name='satellite_time']").val(),
					bus_num:$("#summaryWin").find("input[name='bus_num']").val(),
					files: JSON.stringify(files)
				},
				success : function(data) {

					if (data.success) {
						xh.refresh();
						$("#summary_file_form")[0].reset();
						$("#summary_file_area ul li").remove();
						toastr.success(data.message, '提示');
						$("#summaryWin").find("input[name='ensure_starttime_edit']").val("");
						$("#summaryWin").find("input[name='type_edit']").val("");
						$("#summaryWin").find("span[id='uploadResult2']").text("");
						$("#summaryWin").find("textarea[name='summary_note']").val("");
						$("#summaryWin").modal("hide");
					} else {
						toastr.error(data.message, '提示');
					}
				},
				error : function() {
					toastr.success("系统错误", '提示');
				}
			});

		};
		$scope.del=function(id){
			$scope.oneData = $scope.data[id];
			swal({
				title : "提示",
				text : "确定要删除记录吗？",
				type : "info",
				showCancelButton : true,
				confirmButtonColor : "#DD6B55",
				confirmButtonText : "确定",
				cancelButtonText : "取消",
			    closeOnConfirm : true, 
			    closeOnCancel : true,
			    }, function(isConfirm) {
				    if (isConfirm) {
				    	$.ajax({
							url : '../../WorkContact/del',
							type : 'post',
							dataType : "json",
							data : {
								id:$scope.oneData.id
							},				
							async : false,
							success : function(data) {
								xh.maskHide();
								//$("#btn-mbs").button('reset');
								if (data.success) {
									toastr.success(data.message, '提示');
									$scope.refresh();
								} else {
									toastr.error(data.message, '提示');
								}
							},
							error : function() {
								xh.maskHide();
								toastr.error("系统错误", '提示');
							}
						});
				    }
			});
			
			
		}

		/* 查询数据 */
		$scope.search = function(page) {
			var pageSize = $("#page-limit").val();
			var start_time = $("#start_time").val();
			var end_time = $("#end_time").val();
			var type = $("#type").val();
			var key = $("#key").val();
			var status = $("#status").val();
			
			var send_user = $("#send_user").val();
			var check_user = $("#check_user").val();
			var sign_user = $("#sign_user").val();
			
			var start = 1, limit = pageSize;
			frist = 0;
			page = parseInt(page);
			if (page <= 1) {
				start = 0;

			} else {
				start = (page - 1) * pageSize;
			}
			xh.maskShow();
			$http.get(
					"../../WorkContact/list?sign_user="+sign_user+"&check_user="+check_user+"&send_user="+send_user+"&key="+key+"&status="+status+"&start_time="+start_time+"&end_time="+end_time+"&type="+type+"&start=" + start + "&limit="
							+ pageSize).success(function(response) {
				xh.maskHide();
				$scope.data = response.items;
				$scope.totals = response.totals;
				$scope.page=page;
				xh.pagging(page, parseInt($scope.totals), $scope);
			});
		};
		// 分页点击
		$scope.pageClick = function(page, totals, totalPages) {
			var pageSize = $("#page-limit").val();
			var start_time = $("#start_time").val();
			var end_time = $("#end_time").val();
			var type = $("#type").val();
			var key = $("#key").val();
			var status = $("#status").val();
			
			
			var send_user = $("#send_user").val();
			var check_user = $("#check_user").val();
			var sign_user = $("#sign_user").val();
			
			var start = 1, limit = pageSize;
			page = parseInt(page);
			if (page <= 1) {
				start = 0;
			} else {
				start = (page - 1) * pageSize;
			}
			xh.maskShow();
			$http.get(
					"../../WorkContact/list?sign_user="+sign_user+"&check_user="+check_user+"&send_user="+send_user+"&key="+key+"&status="+status+"&start_time="+start_time+"&end_time=end_time&type="+type+"&start=" + start + "&limit="
							+ pageSize).success(function(response) {
				xh.maskHide();
				$scope.start = (page - 1) * pageSize + 1;
				$scope.lastIndex = page * pageSize;
				if (page == totalPages) {
					if (totals > 0) {
						$scope.lastIndex = totals;
					} else {
						$scope.start = 0;
						$scope.lastIndex = 0;
					}
				}
				$scope.data = response.items;
				$scope.totals = response.totals;
				$scope.page=page;
			});

		};
		$scope.CodeNum();
		$scope.select();
		setInterval(function(){
			$scope.CodeNum();
		}, 1000)
	});
};

// 刷新数据
xh.refresh = function() {
	var $scope = angular.element(appElement).scope();
	// 调用$scope中的方法
	$scope.refresh();
	$scope.CodeNum();
};
xh.typeChange=function(){
	var $scope = angular.element(appElement).scope();
	$scope.type=$("#addForm").find("select[name='type']").val();
}
/* 删除 */
xh.del_summary_file=function(name,path){
	$.ajax({
		url : '../../WorkContact/del_summary_file',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			name:name,
			path:path
		// 将表单序列化为JSON对象
		},
		success : function(data) {
			
		},
		error : function() {
		}
	});
}
xh.add = function() {
	var $scope = angular.element(appElement).scope();
	var files=[];
	$("#fileArea ul li").each(function(){
	    var name = $(this).children().first().text();
	    var path = $(this).children(".path").text();
	    if(name!="" && path!=""){
	    	var a={
	    			fileName:name,
	    			filePath:path
	    	}
	    	files.push(a);
	    }
	   
	});
	$.ajax({
		url : '../../WorkContact/add',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			formData : xh.serializeJson($("#addForm").serializeArray()),
			files: JSON.stringify(files)
		// 将表单序列化为JSON对象
		},
		success : function(data) {
			$("#add_btn").button('reset');
			if (data.success) {
				$('#add').modal('hide');
				xh.refresh();
				 $("#fileArea ul").children().remove();
				 toastr.success(data.message, '提示');
				//toastr.success(data.message, '提示');
				//POBrowser.openWindowModeless(xh.getUrl()+'/Views/jsp/workcontact_doc.jsp?bean='+JSON.stringify(data.bean),'width=300px;height=200px;');
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
			toastr.error("参数错误", '提示');
			$("#add_btn").button('reset');
		}
	});
};
xh.edit = function() {
	var $scope = angular.element(appElement).scope();
	var files=[];
	$(".file-div ul li").each(function(){
	    var name = $(this).children().first().text();
	    var path = $(this).children(".path").text();
	    if(name!="" && path!=""){
	    	var a={
	    			fileName:name,
	    			filePath:path
	    	}
	    	files.push(a);
	    }
	   
	});
	$.ajax({
		url : '../../WorkContact/update',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			formData : xh.serializeJson($("#editForm").serializeArray()),
			files: JSON.stringify(files)
		// 将表单序列化为JSON对象
		},
		success : function(data) {
			$("#edit_btn").button('reset');
			if (data.success) {
				$('#edit').modal('hide');
				xh.refresh();
				$(".file-div ul").children().remove();
				toastr.success(data.message, '提示');
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
			toastr.error("参数错误", '提示');
			$("#edit_btn").button('reset');
		}
	});
};
/* 数据分页 */
xh.pagging = function(currentPage, totals, $scope) {
	var pageSize = $("#page-limit").val();
	var totalPages = (parseInt(totals, 10) / pageSize) < 1 ? 1 : Math
			.ceil(parseInt(totals, 10) / pageSize);
	var start = (currentPage - 1) * pageSize + 1;
	var end = currentPage * pageSize;
	if (currentPage == totalPages) {
		if (totals > 0) {
			end = totals;
		} else {
			start = 0;
			end = 0;
		}
	}
	$scope.start = start;
	$scope.lastIndex = end;
	$scope.totals = totals;
	if (totals > 0) {
		$(".page-paging").html('<ul class="pagination"></ul>');
		$('.pagination').twbsPagination({
			totalPages : totalPages,
			visiblePages : 10,
			version : '1.1',
			startPage : currentPage,
			onPageClick : function(event, page) {
				if (frist == 1) {
					$scope.pageClick(page, totals, totalPages);
				}
				frist = 1;

			}
		});
	}

};
xh.weekly = function(dateStr) {

	var weekDay = [ "星期天", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六" ];

	if (dateStr != null && dateStr != "") {
		var myDate = new Date(Date.parse(dateStr.replace(/-/g, "/")));
		return weekDay[myDate.getDay()];
	} else {
		return "";
	}

}
xh.today = function() {
	var today = new Date();
	var h = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	var week = today.getDay();
	
	var str = '';
	if (week == 0) {
		str = "星期日";
	} else if (week == 1) {
		str = "星期一";
	} else if (week == 2) {
		str = "星期二";
	} else if (week == 3) {
		str = "星期三";
	} else if (week == 4) {
		str = "星期四";
	} else if (week == 5) {
		str = "星期五";
	} else if (week == 6) {
		str = "星期六";
	}
	m = m < 10 ? "0" + m : m; // 这里判断月份是否<10,如果是在月份前面加'0'
	d = d < 10 ? "0" + d : d; // 这里判断日期是否<10,如果是在日期前面加'0'
	return h + "-" + m + "-" + d +" "+str;
}
xh.No = function() {
	var today = new Date();
	var y = today.getFullYear();
	var m = today.getMonth() + 1;
	var d = today.getDate();
	var h=today.getHours();
	var m2=today.getMinutes();
	var s=today.getSeconds();
	var str='CDYJW-';
	m = m < 10 ? "0" + m : m; // 这里判断月份是否<10,如果是在月份前面加'0'
	d = d < 10 ? "0" + d : d; // 这里判断日期是否<10,如果是在日期前面加'0'
	h = h < 10 ? "0" + h : h; // 这里判断日期是否<10,如果是在日期前面加'0'
	m2 = m2 < 10 ? "0" + m2 : m2; // 这里判断日期是否<10,如果是在日期前面加'0'
	s = s < 10 ? "0" + s : s; // 这里判断日期是否<10,如果是在日期前面加'0'

	return str+y+m+d+h+m2+s;
}
