/**
 * 资产管理
 */
if (!("xh" in window)) {
	window.xh = {};
};

var frist = 0;
var appElement = document.querySelector('[ng-controller=xhcontroller]');
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
xh.load = function() {
	var app = angular.module("app", []);
	/*
	 * var type = $("#type").val(); var name = $("#name").val(); var model =
	 * $("#model").val(); var serialNumber = $("#serialNumber").val(); var from =
	 * $("#from").val(); var status = $("#status").val(); var pageSize =
	 * $("#page-limit").val();
	 */

	var pageSize = $("#page-limit").val();
	app.config([ '$locationProvider', function($locationProvider) {
		$locationProvider.html5Mode({
			enabled : true,
			requireBase : false
		});
	} ]);
	app.controller("xhcontroller",function($scope, $http, $location) {
		xh.maskShow();
		$scope.count = "15";// 每页数据显示默认值

		// 获取登录用户
		$http.get("../../web/loginUserInfo").success(function(response) {
			xh.maskHide();
			$scope.loginUser = response.user;
			$scope.loginUserRoleId = response.roleId;
		});

		/* 获取申请记录表 */
		$http.get("../../net/selectAll?start=0&limit="+ pageSize).success(function(response) {
			xh.maskHide();
			$scope.data = response.items;
			$scope.totals = response.totals;
			xh.pagging(1,
					parseInt($scope.totals),
					$scope);
		});

		/* 获取主管部门领导列表 */
		$http.get("../../web/user/getUserList?roleId=10001").success(
			function(response) {
				$scope.userData_MainManager = response.items;
				$scope.userTotals_MainManager = response.totals;
				if ($scope.userTotals_MainManager > 0) {
					$scope.user_M = $scope.userData_MainManager[0].user;
				}
			});
		/* 刷新数据 */
		$scope.refresh = function() {
			$scope.search(1);
			$("#table-checkbox").prop("checked", false);
		};
		/* 跳转到申请进度页面 */
		$scope.toProgress = function(id) {
			$scope.editData = $scope.data[id];
			/*
			 * $http.get("../../net/applyProgress?id="+$scope.editData.id).
			 * success(function(response){ $scope.progressData =
			 * response.items;
			 * 
			 * });
			 */
			$scope.progressData = $scope.editData;
			
			$("#progress").modal('show');
		};
		/* 显示协议签署窗口 */
		$scope.checkSign = function(id) {
			$scope.signData = $scope.data[id];
			$("#joinNet_register").modal('show');
		};
		/* 显示添加用户窗口 */
		$scope.addUser = function(id) {
			$scope.joinNetProcessId = $scope.data[id].id;
			// 获取无线用户业务属性
			$http.get("../../radiouserbusiness/list?start=0&limit="+ pageSize).success(
				function(response) {
					$scope.userbusinessData = response.items;
					$scope.userbusinessTotals = response.totals;
					if ($scope.userbusinessTotals > 0) {
						$scope.userbusinessName = $scope.userbusinessData[0].id;
					}
				});
			// 获取无线用户互联属性
			$http.get("../../radiouserseria/list?start=0&limit="+ pageSize).success(function(response) {
				$scope.userseriaData = response.items;
				$scope.userseriaTotals = response.totals;
				if ($scope.userseriaTotals > 0) {
					$scope.userseriaName = $scope.userseriaData[0].name;
				}
			});

			$("#add").modal('show');
		};
		/* 显示添加组窗口 */
		$scope.addGroup = function(id) {
			$scope.joinNetProcessId = $scope.data[id].id;
			// 获取无线用户业务属性
			$http.get("../../radiouserbusiness/list?start=0&limit="+ pageSize)
					.success(function(response) {
						$scope.userbusinessData = response.items;
						$scope.userbusinessTotals = response.totals;
						if ($scope.userbusinessTotals > 0) {
							$scope.userbusinessName = $scope.userbusinessData[0].id;
						}
					});
			// 获取无线用户互联属性
			$http.get("../../radiouserseria/list?start=0&limit="+ pageSize)
					.success(function(response) {
							$scope.userseriaData = response.items;
							$scope.userseriaTotals = response.totals;
							if ($scope.userseriaTotals > 0) {
								$scope.userseriaName = $scope.userseriaData[0].name;
							}
						});
			$("#addTalkGroup").modal('show');
		};
		$scope.download = function(id,type) {
			xh.download(id,type);
		}
		/* 显示审核窗口（有线接入） */
		$scope.checkWinYX = function(id,type) {
			$scope.checkData = $scope.data[id];
			$http.get("../../web/user/getUserList?roleId=10002")
			.success(function(response) {
				$scope.userData = response.items;
				$scope.userTotals = response.totals;
				if ($scope.userTotals > 0) {
					$scope.user = $scope.userData[0].user;
				}
			});
			//上传技术方案
			if(type == 1){
				$scope.divTitle = "上传技术方案"
				$("#checkForm11 input").val('');
				$(".span_result_GH").html('');
				$("#checkWin11").modal('show');
			}
			//主管部门指定经办人
			else if (type == 2) {
				$("#checkWin12").modal('show');
			}
			//评估技术方案
			else if (type == 3) {
				$("#checkWin13").modal('show');
			}
			//主管部门根据评估技术方案，审核申请
			else if (type == 4) {
				$("#checkWin14").modal('show');
			}
			//上传编制资源配置技术方案
			else if (type == 5) {
				$("#checkWin15").modal('show');
			}
			//内审资源配置技术方案
			else if (type == 6) {
				$("#checkWin16").modal('show');
			}
			//用户上传协议文件
			else if (type == 7) {
				$("#checkWin17").modal('show');
			}
			//审核全部文件
			else if (type == 8) {
				$("#checkWin18").modal('show');
			}
		}
		
		/* 显示审核窗口（无线接入） */
		$scope.checkWin = function(id) {
			$scope.checkData = $scope.data[id];
			// $http.get("../../web/user/userlist10002").
			$http.get("../../web/user/getUserList?roleId=10002")
					.success(function(response) {
						$scope.userData = response.items;
						$scope.userTotals = response.totals;
						if ($scope.userTotals > 0) {
							$scope.user = $scope.userData[0].user;
						}
					});
			if ($scope.loginUserRoleId == 10001
					&& $scope.checkData.checked == 0) {
				$("#checkWin1").modal('show');
			}
			else if ($scope.loginUserRoleId == 10002
					&& $scope.checkData.checked == 1) {
				$("#checkWin2").modal('show');
			}
			//经办人上传编组方案
			else if ($scope.loginUserRoleId == 10002
					&& $scope.loginUser == $scope.checkData.user3
					&& ($scope.checkData.checked == 2 || $scope.checkData.checked == -2)) {
				$("#checkWin3").modal('show');
			}
			//经办人审核编组方案
			else if ($scope.loginUserRoleId == 10002
					&& $scope.loginUser == $scope.checkData.user4
					&& $scope.checkData.checked == 3) {
				$("#checkWin4").modal('show');
			}
			//确认编组方案
			else if ($scope.loginUser == $scope.checkData.userName
					&& $scope.checkData.checked == 4) {
				$("#checkWin5").modal('show');
			}
			//上传公函
			else if ($scope.loginUser == $scope.checkData.userName
					&& ($scope.checkData.fileName_GH == '' || $scope.checkData.fileName_GH == null) && $scope.checkData.checked == 0) {
				$("#checkForm6 input").val('');
				$(".span_result_GH").html('');
				$("#checkWin6").modal('show');
			}
			//上传通知函
			else if ($scope.loginUserRoleId == 10001 && ($scope.checkData.fileName_Note == '' || $scope.checkData.fileName_Note == null)) {
				$("#checkWin7").modal('show');
			}
			//上传合同附件
			else if ($scope.loginUser == $scope.checkData.userName && ($scope.checkData.checked == 5 || $scope.checkData.checked == -3)) {
				$("#checkForm8 input").val('');
				$(".span_result_HT").html('');
				$("#checkWin8").modal('show');
			}
			//审核合同附件
			else if ($scope.loginUser == $scope.checkData.user3 && $scope.checkData.checked == 6) {
				$("#checkWin9").modal('show');
			}
			//上传采购设备信息
			else if ($scope.loginUser == $scope.checkData.userName && $scope.checkData.checked == 7) {
				$("#checkWin10").modal('show');
			}
			//交付终端
			else if ($scope.loginUser == $scope.checkData.user3 && $scope.checkData.checked == 8) {
				xh.updateCheckById($scope.checkData.id, 9);
			}
			//终端接受确认
			else if ($scope.loginUser == $scope.checkData.userName && $scope.checkData.checked == 9) {
				xh.updateCheckById($scope.checkData.id, 10);
			}
			//用户使用培训完成请求
			else if ($scope.loginUser == $scope.checkData.user3 && $scope.checkData.checked == 10) {
				xh.updateCheckById($scope.checkData.id, 11);
			} 	
			//培训确认
			else if ($scope.loginUser == $scope.checkData.userName && $scope.checkData.checked == 11) {
				xh.updateCheckById($scope.checkData.id, 12);
			}
		};
		/* 查询数据 */
		$scope.search = function(page) {
			var pageSize = $("#page-limit").val();
			var start = 1, limit = pageSize;
			frist = 0;
			page = parseInt(page);
			if (page <= 1) {
				start = 0;

			} else {
				start = (page - 1) * pageSize;
			}
			xh.maskShow();
			$http.get("../../net/selectAll?start=0&limit="+ limit)
					.success(function(response) {
						xh.maskHide();
						$scope.data = response.items;
						$scope.totals = response.totals;
						xh
								.pagging(
										page,
										parseInt($scope.totals),
										$scope);
					});
		};
		// 分页点击
		$scope.pageClick = function(page, totals, totalPages) {
			var pageSize = $("#page-limit").val();
			var start = 1, limit = pageSize;
			page = parseInt(page);
			if (page <= 1) {
				start = 0;
			} else {
				start = (page - 1) * pageSize;
			}
			xh.maskShow();
			$http.get("../../net/selectAll?start=" + start+ "&limit=" + limit).success(function(response) {
				xh.maskHide();
				$scope.start = (page - 1) * pageSize
						+ 1;
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
			});

		};
	});

};
/* 申请入网 */
xh.addJoinNet = function() {
	$.ajax({
		url : '../../net/insertNet',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			formData : xh.serializeJson($("#addForm").serializeArray())
		// 将表单序列化为JSON对象
		},
		success : function(data) {
			if (data.result == 1) {
				$('#addJoinNet').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 主管部门审核 */
xh.check1 = function() {
	$.ajax({
		url : '../../net/checkedOne',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm1").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin1').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 管理方审核 */
xh.check2 = function() {
	$.ajax({
		url : '../../net/checkedTwo',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm2").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin2').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传编组方案 */
xh.check3 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传编组方案不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadFile',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm3").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin3').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 审核编组方案 */
xh.check4 = function() {
	$.ajax({
		url : '../../net/checkFile',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm4").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin4').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 用户确认编组方案 */
xh.check5 = function() {
	$.ajax({
		url : '../../net/sureFile',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm5").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin5').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传公函 */
xh.check6 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传公函不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadGH',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm6").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin6').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传通知函 */
xh.check7 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传通知函不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadNote',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm7").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin7').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传合同附件 */
xh.check8 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传合同不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadHT',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm8").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin8').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
 
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 审核样机入网送检申请（合同附件） */
xh.check9 = function() {
	$.ajax({
		url : '../../net/sureHT',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm9").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin9').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传采购设备信息 */
xh.check10 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传采购设备信息不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadCG',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm10").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin10').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 交付终端 */
xh.updateCheckById = function(id,checkedNum) {
	$.ajax({
		url : '../../net/updateCheckById',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			id:id,
			checkNum:checkedNum
		},
		success : function(data) {

			if (data.result == 1) {
				//$('#checkWin2').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传技术方案 */
xh.check11 = function() {
	if (parseInt($("input[name='result']").val()) !== 1) {
		toastr.error("你还没有上传文件不能提交", '提示');
		return;
	}
	$.ajax({
		url : '../../net/uploadGH',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm11").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin11').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 主管部门审核 */
xh.check12 = function() {
	$.ajax({
		url : '../../net/checkedOne',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm12").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin12').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 评估技术方案 */
xh.check13 = function() {
	$.ajax({
		url : '../../net/uploadNote',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm13").serializeArray(),
		success : function(data) {

			if (data.result == 1) {
				$('#checkWin13').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 根据评估技术方案，审核申请 */
xh.check14 = function() {
	$.ajax({
		url : '../../net/YXcheckOne',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm14").serializeArray(),
		success : function(data) {
			
			if (data.result == 1) {
				$('#checkWin14').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
				
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传编制资源配置技术方案 */
xh.check15 = function() {
	$.ajax({
		url : '../../net/uploadFile',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm15").serializeArray(),
		success : function(data) {
			
			if (data.result == 1) {
				$('#checkWin15').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
				
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 审核资源配置技术方案 */
xh.check16 = function() {
	$.ajax({
		url : '../../net/checkFile',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm16").serializeArray(),
		success : function(data) {
			
			if (data.result == 1) {
				$('#checkWin16').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
				
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 用户上传协议文件*/
xh.check17 = function() {
	$.ajax({
		url : '../../net/uploadHT',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm17").serializeArray(),
		success : function(data) {
			
			if (data.result == 1) {
				$('#checkWin17').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
				
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 安排应用接入*/
xh.check18 = function() {
	$.ajax({
		url : '../../net/applicationAccess',
		type : 'POST',
		dataType : "json",
		async : true,
		data : $("#checkForm18").serializeArray(),
		success : function(data) {
			
			if (data.result == 1) {
				$('#checkWin18').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');
				
			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};
/* 上传文件 */
xh.upload = function(index) {
	if (index == 1) {
		path = 'filePathBZ';
		note = 'uploadResultBZ';
	}
	if (index == 2) {
		path = 'filePathGH';
		note = 'uploadResultGH';
	}
	if (index == 3) {
		path = 'filePathNote';
		note = 'uploadResultNote';
	}
	if (index == 4) {
		path = 'filePathHT';
		note = 'uploadResultHT';
	}
	if (index == 5) {
		path = 'filePathCG';
		note = 'uploadResultCG';
	}
	if (index == 6) {
		path = 'filePathJS';
		note = 'uploadResultJS';
	}
	if (index == 7) {
		path = 'filePathFJ';
		note = 'uploadResultFJ';
	}
	if (index == 8) {
		path = 'filePathBZ1';
		note = 'uploadResultBZ1';
	}
	if (index == 9) {
		path = 'filePathXY';
		note = 'uploadResultXY';
	}
	if ($("#" + path).val() == "") {
		toastr.error("你还没选择文件", '提示');
		return;
	}

	xh.maskShow();
	$.ajaxFileUpload({
		url : '../../net/upload', // 用于文件上传的服务器端请求地址
		secureuri : false, // 是否需要安全协议，一般设置为false
		fileElementId : path, // 文件上传域的ID
		dataType : 'json', // 返回值类型 一般设置为json
		type : 'POST',
		success : function(data, status) // 服务器成功响应处理函数
		{
			// var result=jQuery.parseJSON(data);
			console.log(data.filePath)
			xh.maskHide();
			if (data.success) {
				$("#"+note).html(data.message);
				$("input[name='result']").val(1);
				$("input[name='fileName']").val(data.fileName);
				$("input[name='path']").val(data.filePath);
			} else {
				$("#"+note).html(data.message);
			}

		},
		error : function(data, status, e)// 服务器响应失败处理函数
		{
			alert(e);
		}
	});
};

/* 经办人添加无线用户 */
xh.addUser = function() {
	$.ajax({
		url : '../../radiouser/add',
		type : 'POST',
		dataType : "json",
		async : false,
		data : $("#addUserForm").serializeArray(),
		success : function(data) {

			if (data.result == 0) {
				$('#add').modal('hide');

				for (var i = 1; i < 10; i++) {
					console.log(1);
				}
				toastr.success("添加无线用户成功", '提示');
				xh.refresh();
			} else {
				toastr.error("添加无线用户失败", '提示');
			}
		},
		error : function() {
		}
	});
}
/* 经办人添加组 */
xh.addTGroup = function() {
	$.ajax({
		url : '../../talkgroup/add',
		type : 'POST',
		dataType : "json",
		async : false,
		data : $("#addTalkGroupForm").serializeArray(),
		success : function(data) {

			if (data.result == 0) {
				$('#addTalkGroup').modal('hide');

				for (var i = 1; i < 10; i++) {
					console.log(1);
				}
				toastr.success("添加用户组成功", '提示');
				xh.refresh();
			} else {
				toastr.error("添加用户组失败", '提示');
			}
		},
		error : function() {
		}
	});
}
/* 经办人编写入网登记表 */
xh.regist = function() {

	$.ajax({
		url : '../../net/registNet',
		type : 'POST',
		dataType : "json",
		async : true,
		data : {
			formData : xh.serializeJson($("#registerForm").serializeArray())
		},
		success : function(data) {
			if (data.result == 1) {
				$('#joinNet_register').modal('hide');
				xh.refresh();
				toastr.success(data.message, '提示');

			} else {
				toastr.error(data.message, '提示');
			}
		},
		error : function() {
		}
	});
};

xh.download = function(id,type) {
	var $scope = angular.element(appElement).scope();
	var filename = null;
	//如果ID为0 表示 下载编组方案
	if(type == 0){
		filename = $scope.checkData.fileName;
	}
	//如果ID为-1 表示 下载合同
	else if(type==-1){
		filename = $scope.checkData.fileName_HT;
	}
	//如果ID为-2 表示 下载技术方案
	else if(type==-2){
		filename = $scope.checkData.fileName_GH;
	}
	//如果ID为-3 表示 下载评估方案
	else if(type==-3){
		filename = $scope.checkData.fileName_Note;
	}
	//如果ID为-4表示 下载协议文件
	else if(type==-4){
		filename = $scope.checkData.fileName_HT;
	}
	else{
		//如果type为1 那么表示下载公函。
		$scope.checkData = $scope.data[id];
		if(type == 1 && $scope.checkData.fileName_GH != null && $scope.checkData.fileName_GH != ''){
			filename = $scope.checkData.fileName_GH;
		}
		//如果type为2 那么表示下载通知函。
		else if(type == 2 && $scope.checkData.fileName_Note != null && $scope.checkData.fileName_Note != ''){
			filename = $scope.checkData.fileName_Note;
		}
		//如果type为3 那么表示下载签署协议。
		else if(type == 3 && $scope.checkData.fileName_Doc != null && $scope.checkData.fileName_Doc != ''){
			filename = $scope.checkData.fileName_Doc;
		}
		//如果type为4 那么表示下载合同。
		else if(type == 4 && $scope.checkData.fileName_HT != null && $scope.checkData.fileName_HT != ''){
			filename = $scope.checkData.fileName_HT;
		}
		//如果type为5 那么表示下载合同。
		else if(type == 5 && $scope.checkData.fileName_CG != null && $scope.checkData.fileName_CG != ''){
			filename = $scope.checkData.fileName_CG;
		}
	}
	console.log("filename=>" + filename);
	var downUrl = "../../net/download?fileName=" + filename + "&type=" + type;
	window.open(downUrl, '_self',
			'width=1,height=1,toolbar=no,menubar=no,location=no');
};

// 刷新数据
xh.refresh = function() {
	var $scope = angular.element(appElement).scope();
	// 调用$scope中的方法
	$scope.refresh();

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
