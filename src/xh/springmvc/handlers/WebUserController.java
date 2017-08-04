package xh.springmvc.handlers;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.apache.poi.ss.formula.ptg.FuncPtg;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import xh.func.plugin.FlexJSON;
import xh.func.plugin.FunUtil;
import xh.mybatis.bean.WebLogBean;
import xh.mybatis.bean.WebUserBean;
import xh.mybatis.bean.WebUserRoleBean;
import xh.mybatis.service.BsstationService;
import xh.mybatis.service.DataBaseUtilService;
import xh.mybatis.service.WebLogService;
import xh.mybatis.service.WebUserRoleService;
import xh.mybatis.service.WebUserServices;

@Controller
@RequestMapping("/web")
public class WebUserController {
	private boolean success;
	private String message;
	private FunUtil funUtil=new FunUtil();
	protected final Log log = LogFactory.getLog(WebUserController.class);
	private FlexJSON json=new FlexJSON();
	private WebLogBean webLogBean=new WebLogBean();
	WebUserBean userBean=new WebUserBean();
	
	
	/**
	 * 根据传入的roleID得到用户列表
	 * @param request
	 * @param response
	 */
	@RequestMapping("/user/getUserList")
	public void userlist10002(HttpServletRequest request, HttpServletResponse response){
		this.success=true;
		int roleId=funUtil.StringToInt(request.getParameter("roleId"));
		System.out.println("---------传入的RoleID为：" + roleId);
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("totals",WebUserServices.userlistByRoleId(roleId).size());
		result.put("items", WebUserServices.userlistByRoleId(roleId));
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	
	
	/**
	 * 用户列表
	 * @param request
	 * @param response
	 */
	@RequestMapping("/user/userList")
	public void userList(HttpServletRequest request, HttpServletResponse response){
		this.success=true;
		int start=funUtil.StringToInt(request.getParameter("start"));
		int limit=funUtil.StringToInt(request.getParameter("limit"));
		Map<String, Object> map=new HashMap<String, Object>();
		map.put("start", start);
		map.put("limit", limit);
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("totals",WebUserServices.userAllCount());
		result.put("items", WebUserServices.userList(map));
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	/**
	 * 添加用户
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/user/add",method = RequestMethod.POST)
	public void addUser(HttpServletRequest request, HttpServletResponse response){
		String user=request.getParameter("user");
		String userPass=funUtil.MD5(request.getParameter("userPass"));
		String userName=request.getParameter("userName");
		String sex=request.getParameter("sex");
		String tel=request.getParameter("tel");
		String createTime=funUtil.nowDate();
		String roleId=request.getParameter("roleId");
		WebUserBean bean=new WebUserBean();
		WebUserRoleBean webUserRoleBean=new WebUserRoleBean();
		
		bean.setUser(user);
		bean.setUserPass(userPass);
		bean.setUserName(userName);
		bean.setSex(sex);
		bean.setTel(tel);
		bean.setCreateTime(createTime);
		int flag=WebUserServices.insertUser(bean);
		if (flag==0) {
			
			int userId=WebUserServices.userIdByUser(user);
			if (userId>0) {
				webUserRoleBean.setRoleId(funUtil.StringToInt(roleId));
				webUserRoleBean.setUserId(userId);
				WebUserRoleService.addUserToRole(webUserRoleBean);
			}
			try {
				webLogBean.setOperator(funUtil.getCookie(request, funUtil.readXml("web", "cookie_prefix")+"username"));
				webLogBean.setOperatorIp(funUtil.getIpAddr(request));
				webLogBean.setStyle(1);
				webLogBean.setContent("新增web登录用户，username="+user);
				webLogBean.setCreateTime(funUtil.nowDate());
				WebLogService.writeLog(webLogBean);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			this.success=true;
			this.message="添加用户成功";
		}else if(flag==1){
			this.success=false;
			this.message="用户已经存在";
		}else {
			this.success=false;
			this.message="添加用户失败";
		}
		this.success=true;
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	/**
	 * 修改用户
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/user/update",method = RequestMethod.POST)
	public void updateUser(HttpServletRequest request, HttpServletResponse response){
		String user=request.getParameter("user");
		String userPass=request.getParameter("userPass")==""?"":funUtil.MD5(request.getParameter("userPass"));
		String userName=request.getParameter("userName");
		String sex=request.getParameter("sex");
		String tel=request.getParameter("tel");
		String createTime=funUtil.nowDate();
		String roleId=request.getParameter("roleId");
		WebUserBean bean=new WebUserBean();
		bean.setUser(user);
		bean.setUserPass(userPass);
		bean.setUserName(userName);
		bean.setSex(sex);
		bean.setTel(tel);
		bean.setCreateTime(createTime);
		int flag=WebUserServices.updateUser(bean);
		if (flag==1) {
			this.success=true;
			WebUserRoleBean webUserRoleBean=new WebUserRoleBean();
			int userId=WebUserServices.userIdByUser(user);
			if (userId>0) {
				webUserRoleBean.setRoleId(funUtil.StringToInt(roleId));
				webUserRoleBean.setUserId(userId);
				WebUserRoleService.updateUserRole(webUserRoleBean);
			}
			try {
				webLogBean.setOperator(funUtil.getCookie(request, funUtil.readXml("web", "cookie_prefix")+"username"));
				webLogBean.setOperatorIp(funUtil.getIpAddr(request));
				webLogBean.setStyle(2);
				webLogBean.setContent("修改web登录用户，username="+user);
				webLogBean.setCreateTime(funUtil.nowDate());
				WebLogService.writeLog(webLogBean);
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			this.message="修改用户成功";
		}else {
			this.success=false;
			this.message="修改用户失败";
		}
		this.success=true;
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	/**
	 * 删除用户
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/user/del",method = RequestMethod.POST)
	public void deleteByUserId(HttpServletRequest request, HttpServletResponse response){
		String userId=request.getParameter("userId");
		List<String> list = new ArrayList<String>();
		String[] ids=userId.split(",");
		for (String str : ids) {
			list.add(str);
		}
		int rslt=WebUserServices.deleteByUserId(list);
		try {
			webLogBean.setOperator(funUtil.getCookie(request, funUtil.readXml("web", "cookie_prefix")+"username"));
			webLogBean.setOperatorIp(funUtil.getIpAddr(request));
			webLogBean.setStyle(3);
			webLogBean.setContent("删除web登录用户，userId="+userId);
			webLogBean.setCreateTime(funUtil.nowDate());
			WebLogService.writeLog(webLogBean);
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		HashMap result = new HashMap();
		this.success=true;
		result.put("success", success);
		result.put("result", rslt);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
			log.debug("删除用户==>"+jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}
	/**
	 *  启用，禁用账号
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/user/lock",method = RequestMethod.POST)
	public void lockUser(HttpServletRequest request, HttpServletResponse response){
		String userId=request.getParameter("userId");
		int lock=funUtil.StringToInt(request.getParameter("lock"));
		Map<String,Object> map=new HashMap<String, Object>();
		map.put("id", userId);map.put("lock", lock);
		int rslt=WebUserServices.lockUser(map);
		
		if(rslt==1){
			try {
				webLogBean.setOperator(funUtil.getCookie(request, funUtil.readXml("web", "cookie_prefix")+"username"));
				webLogBean.setOperatorIp(funUtil.getIpAddr(request));
				webLogBean.setStyle(3);
				webLogBean.setContent("更新账号状态，userId="+userId+",lock="+lock);
				webLogBean.setCreateTime(funUtil.nowDate());
				WebLogService.writeLog(webLogBean);
				message="更新用户状态成功";
			} catch (UnsupportedEncodingException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}else{
			message="更新用户状态失败";
		}
		HashMap result = new HashMap();
		this.success=true;
		result.put("message", message);
		result.put("result", rslt);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
