package xh.springmvc.handlers;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.multipart.MultipartFile;

import com.google.gson.JsonObject;

import net.sf.json.JSONObject;
import xh.func.plugin.DownLoadUtils;
import xh.func.plugin.FlexJSON;
import xh.func.plugin.FunUtil;
import xh.func.plugin.GsonUtil;
import xh.mybatis.bean.EmailBean;
import xh.mybatis.bean.CommunicationSupportBean;
import xh.mybatis.bean.WebLogBean;
import xh.mybatis.bean.WebUserBean;
import xh.mybatis.service.EmailService;
import xh.mybatis.service.CommunicationSupportService;
import xh.mybatis.service.WebLogService;
import xh.mybatis.service.WebUserServices;

@Controller
@RequestMapping(value = "/support")
public class CommunicationSupportController {
	private boolean success;
	private String message;
	private FunUtil funUtil = new FunUtil();
	protected final Log log = LogFactory.getLog(JoinNetController.class);
	private FlexJSON json = new FlexJSON();
	private WebLogBean webLogBean = new WebLogBean();

	/**
	 * 查询所有流程
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/selectAll", method = RequestMethod.GET)
	public void selectAll(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		int start = funUtil.StringToInt(request.getParameter("start"));
		int limit = funUtil.StringToInt(request.getParameter("limit"));
		String user=funUtil.loginUser(request);
		WebUserBean userbean=WebUserServices.selectUserByUser(user);
		int roleId=userbean.getRoleId();
		
		Map<String, Object> map = new HashMap<String, Object>();
		map.put("start", start);
		map.put("limit", limit);
		map.put("user", user);
		map.put("roleId", roleId);

		HashMap result = new HashMap();
		result.put("success", success);
		result.put("items", CommunicationSupportService.selectAll(map));
		result.put("totals", CommunicationSupportService.dataCount(map));
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@RequestMapping(value = "/applyProgress", method = RequestMethod.GET)
	public void applyProgress(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		int id = funUtil.StringToInt(request.getParameter("id"));
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("items", CommunicationSupportService.applyProgress(id));
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		log.debug(jsonstr);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * 保障申请
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/insertNet", method = RequestMethod.POST)
	public void insertNet(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		String jsonData = request.getParameter("formData");
		
		CommunicationSupportBean bean = GsonUtil.json2Object(jsonData, CommunicationSupportBean.class);
		bean.setUserName(funUtil.loginUser(request));
		bean.setTime(funUtil.nowDate());
		log.info("data==>" + bean.toString());

		int rst = CommunicationSupportService.insertSupport(bean);
		if (rst == 1) {
			this.message = "保障申请信息已经成功提交";
			webLogBean.setOperator(funUtil.loginUser(request));
			webLogBean.setOperatorIp(funUtil.getIpAddr(request));
			webLogBean.setStyle(1);
			webLogBean.setContent("保障申请信息，data=" + bean.toString());
			WebLogService.writeLog(webLogBean);
			
			//----发送通知邮件
			sendNotify(bean.getUser_MainManager(), "保障申请信息已经成功提交,请审核。。。", request);
			//----END
		} else {
			this.message = "保障申请信息提交失败";
		}
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("result", rst);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		log.debug(jsonstr);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * 主管部门审核
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/checkedOne", method = RequestMethod.POST)
	public void checkedOne(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		int id = funUtil.StringToInt(request.getParameter("id"));
		int checked = funUtil.StringToInt(request.getParameter("checked"));
		String note1 = request.getParameter("note1");
		String user = request.getParameter("user");
		CommunicationSupportBean bean = new CommunicationSupportBean();
		bean.setId(id);
		bean.setChecked(checked);
		bean.setUser1(funUtil.loginUser(request));
		bean.setTime1(funUtil.nowDate());
		//bean.setNote1(note1);
		log.info("data==>" + bean.toString());

		int rst = CommunicationSupportService.checkedOne(bean);
		if (rst == 1) {
			this.message = "审核提交成功";
			webLogBean.setOperator(funUtil.loginUser(request));
			webLogBean.setOperatorIp(funUtil.getIpAddr(request));
			webLogBean.setStyle(5);
			webLogBean.setContent("审核保障申请，data=" + bean.toString());
			WebLogService.writeLog(webLogBean);
			
			//----发送通知邮件
			sendNotify(user, "保障申请信息审核，请管理部门领导审核并移交经办人，上传。。。", request);
			//----END
		} else {
			this.message = "审核提交失败";
		}
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("result", rst);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		log.debug(jsonstr);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * 经办人审核
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/checkedTwo", method = RequestMethod.POST)
	public void checkedTwo(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		int id = funUtil.StringToInt(request.getParameter("id"));
		String note2 = request.getParameter("note2");
		String user3 = request.getParameter("user");
		CommunicationSupportBean bean = new CommunicationSupportBean();
		bean.setId(id);
		bean.setChecked(3);
		bean.setUser2(funUtil.loginUser(request));
		//bean.setUser3(user3);
		bean.setTime2(funUtil.nowDate());
		//bean.setNote2(note2);

		int rst = CommunicationSupportService.checkedTwo(bean);
		if (rst == 1) {
			this.message = "通知经办人处理成功";
			webLogBean.setOperator(funUtil.loginUser(request));
			webLogBean.setOperatorIp(funUtil.getIpAddr(request));
			webLogBean.setStyle(5);
			webLogBean.setContent("通知经办人处理(保障申请)，data=" + bean.toString());
			WebLogService.writeLog(webLogBean);
			
			//----发送通知邮件
			sendNotify(user3, "保障申请信息审核。。。", request);
			//----END
		} else {
			this.message = "通知经办人处理失败";
		}
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("result", rst);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		log.debug(jsonstr);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	/**
	 * 用户确认
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/sureFile", method = RequestMethod.POST)
	public void sureFile(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;
		int id = funUtil.StringToInt(request.getParameter("id"));
		CommunicationSupportBean bean = new CommunicationSupportBean();
		bean.setId(id);	
		//bean.setTime5(funUtil.nowDate());
		bean.setChecked(4);

		int rst = CommunicationSupportService.sureFile(bean);
		if (rst == 1) {
			this.message = "确认成功";
			webLogBean.setOperator(funUtil.loginUser(request));
			webLogBean.setOperatorIp(funUtil.getIpAddr(request));
			webLogBean.setStyle(5);
			webLogBean.setContent("确认，data=" + bean.toString());
			WebLogService.writeLog(webLogBean);
			
			//----发送通知邮件
			//sendNotify(bean.getUser_MainManager(), "保障申请信息已经成功提交,请审核。。。", request);
			//----END
		} else {
			this.message = "确认失败";
		}
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("result", rst);
		result.put("message", message);
		response.setContentType("application/json;charset=utf-8");
		String jsonstr = json.Encode(result);
		log.debug(jsonstr);
		try {
			response.getWriter().write(jsonstr);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}
	/**
	 * 下载文件
	 * @param request
	 * @param response
	 * @throws Exception
	 */
	@RequestMapping(value = "/download", method = RequestMethod.GET)
	public void downFile(HttpServletRequest request,HttpServletResponse response) throws Exception{
		String path = request.getSession().getServletContext().getRealPath("/Resources/upload");
		String fileName=request.getParameter("fileName");
		fileName = new String(fileName.getBytes("ISO-8859-1"),"UTF-8");
		String downPath=path+"/"+fileName;
		log.info(downPath);
		 File file = new File(downPath);
		 if(!file.exists()){
			 this.success=false;
			 this.message="文件不存在";
		 }
		    //设置响应头和客户端保存文件名
		    response.setCharacterEncoding("utf-8");
		    response.setContentType("multipart/form-data");
		    response.setHeader("Content-Disposition", "attachment;fileName=" + DownLoadUtils.getName(request.getHeader("user-agent"), fileName));
		    //用于记录以完成的下载的数据量，单位是byte
		    long downloadedLength = 0l;
		    try {
		        //打开本地文件流
		        InputStream inputStream = new FileInputStream(downPath);
		        //激活下载操作
		        OutputStream os = response.getOutputStream();

		        //循环写入输出流
		        byte[] b = new byte[2048];
		        int length;
		        while ((length = inputStream.read(b)) > 0) {
		            os.write(b, 0, length);
		            downloadedLength += b.length;
		        }

		        // 这里主要关闭。
		        os.close();
		        inputStream.close();
		    } catch (Exception e){
		        throw e;
		    }
		    //存储记录
	}
	
	/**
	 * 发送邮件
	 * @param recvUser	邮件接收者
	 * @param content	邮件内容
	 * @param request
	 */
	public void sendNotify(String recvUser,String content,HttpServletRequest request){
		//----发送通知邮件
		EmailBean emailBean = new EmailBean();
		emailBean.setTitle("保障申请");
		emailBean.setRecvUser(recvUser);
		emailBean.setSendUser(funUtil.loginUser(request));
		emailBean.setContent(content);
		emailBean.setTime(funUtil.nowDate());
		EmailService.insertEmail(emailBean);
		//----END
	}

}
