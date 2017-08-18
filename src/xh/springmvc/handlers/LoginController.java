package xh.springmvc.handlers;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import cn.com.scca.signgw.api.SccaGwSDK;
import xh.func.plugin.FlexJSON;
import xh.func.plugin.FunUtil;
import xh.mybatis.bean.GlobalVarBean;
import xh.mybatis.bean.WebLogBean;
import xh.mybatis.bean.WebUserBean;
import xh.mybatis.service.DataBaseUtilService;
import xh.mybatis.service.WebLogService;
import xh.mybatis.service.WebRoleService;
import xh.mybatis.service.WebUserServices;
import xh.org.listeners.SingLoginListener;

@Controller
public class LoginController {
	private String username;
	private String password;
	private String code;
	private boolean success;
	private String message;
	private FunUtil funUtil = new FunUtil();
	protected final Log log = LogFactory.getLog(LoginController.class);
	private FlexJSON json = new FlexJSON();
	private WebLogBean webLogBean = new WebLogBean();

	@RequestMapping(value = "/web/login", method = RequestMethod.GET)
	@ResponseBody
	public void Login(HttpServletRequest request, HttpServletResponse response,
			HttpSession session) throws UnsupportedEncodingException {
		this.username = request.getParameter("username");
		this.password = request.getParameter("password");
		/*String toSign = request.getParameter("ToSign");
		String signedData = request.getParameter("Signature");*/
		Map<String,Object> map=new HashMap<String, Object>();
		map = WebUserServices.selectUserByRootAndPass(username, funUtil.MD5(password));

		// 初始化接口地址
		String ip = funUtil.readXml("ca", "ip");
		int port = funUtil.StringToInt(funUtil.readXml("ca", "port"));
		// 验证
		String projectId = "test";
		String opType = "系统登陆";
		String reqId = "1";
		/*SccaGwSDK.init("http://125.69.77.63:6080/sign-gw");
        String rs = SccaGwSDK.certLogin(projectId, toSign, signedData,reqId);	
		int startPos = rs.indexOf("code");
		int endPos = 0 ;
		String code = rs.substring(startPos + 6 ,startPos + 9);*/
		String code="200";
		/*log.info("登陆签名验证返回数据如下:");
		log.info(rs);*/
		if ( code.equals("200") ) {
			
			/*startPos = rs.indexOf("subjectDN");
			endPos = rs.length();
			String certCN = rs.substring(startPos + 12 ,endPos - 3);
			log.info("主题项信息为:"+certCN);*/
			
			
			if (map!=null) {
				log.info("loginmap:"+map);
				if (map.get("status").toString().equals("1")) {
					this.success = true;
					this.message = "登录系统成功";
					SingLoginListener.isLogin(session, username);					

					webLogBean.setOperator(funUtil.loginUser(request));
					webLogBean.setOperatorIp(funUtil.getIpAddr(request));
					webLogBean.setStyle(4);
					webLogBean.setContent("登录系统");
					WebLogService.writeLog(webLogBean);
				} else {
					this.message = "该账号已经被禁用，请联系管理员";
					this.success = false;
				}

			} else {
				this.success = false;
				this.message = "用户名或者密码错误!";

			}
		}else{
			this.message = "证书登录验证失败";
			this.success = true;
		}
	
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
	 * 退出登录
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/web/loginOut")
	public String LoginOut(HttpServletRequest request,
			HttpServletResponse response) {
		webLogBean.setOperator(funUtil.loginUser(request));
		webLogBean.setOperatorIp(funUtil.getIpAddr(request));
		webLogBean.setStyle(4);
		webLogBean.setContent("登录系统");
		WebLogService.writeLog(webLogBean);
		SingLoginListener.getLogUserMap().remove(request.getSession().getId());
		return "redirect:/Views/login.html";

	}

	@RequestMapping(value = "/web/loginUserInfo")
	@ResponseBody
	public void LoginUser(HttpServletRequest request,
			HttpServletResponse response) {
		String user = "", role = "";
		int roleId = 0;
		if (SingLoginListener.isOnline(request.getSession())) {
			user = funUtil.loginUser(request);
			role = SingLoginListener.getLogUserInfoMap()
					.get(request.getSession().getId()).get("role").toString();
			roleId = WebUserServices.selectUserByUser(user).getRoleId();
		}
		HashMap result = new HashMap();
		result.put("success", true);
		result.put("user", user);
		result.put("role", role);
		result.put("roleId", roleId);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public boolean isSuccess() {
		return success;
	}

	public void setSuccess(boolean success) {
		this.success = success;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
