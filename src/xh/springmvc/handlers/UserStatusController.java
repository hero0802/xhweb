package xh.springmvc.handlers;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import xh.func.plugin.FlexJSON;
import xh.func.plugin.FunUtil;
import xh.mybatis.service.ChartService;
import xh.mybatis.service.UserStatusService;
import xh.org.listeners.SingLoginListener;

@Controller
@RequestMapping("/operations")
public class UserStatusController {
	private boolean success;
	private String message;
	private FunUtil funUtil=new FunUtil();
	protected final Log log = LogFactory.getLog(WebLogController.class);
	private FlexJSON json=new FlexJSON();
	
	/**
	 * 终端状态
	 * @param request
	 * @param response
	 */
	@RequestMapping(value="/data/userstatus",method = RequestMethod.GET)
	public void userstatus(HttpServletRequest request, HttpServletResponse response){
		this.success=true;
		String userId=request.getParameter("userId");
		int regStatus=funUtil.StringToInt(request.getParameter("regStatus"));
		int start=funUtil.StringToInt(request.getParameter("start"));
		int limit=funUtil.StringToInt(request.getParameter("limit"));
		Map<String,Object> usermap=SingLoginListener.getLogUserInfoMap().get(request.getSession().getId());
		String vpnId=usermap.get("vpnId").toString();
		Map<String, Object> map=new HashMap<String, Object>();
		
		map.put("userId", userId);
		map.put("regStatus", regStatus);
		map.put("vpnId", vpnId);
		map.put("start", start);
		map.put("limit", limit);
		HashMap result = new HashMap();
		result.put("success", success);
		result.put("totals",UserStatusService.userstatusCount(map));
		result.put("items", UserStatusService.userstatus(map));
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
	 * 终端在线状态统计
	 * 
	 * @param request
	 * @param response
	 */
	@RequestMapping(value = "/data/userstatusChart", method = RequestMethod.GET)
	public void userStatusByChart(HttpServletRequest request,
			HttpServletResponse response) {
		this.success = true;

		List<HashMap> list = new ArrayList<HashMap>();
		List<Map<String,Object>> list1 = new ArrayList<Map<String,Object>>();
		Map<String,Object> usermap=SingLoginListener.getLogUserInfoMap().get(request.getSession().getId());
		String vpnId=usermap.get("vpnId").toString();
        Map<String, Object> map=new HashMap<String, Object>();
		map.put("vpnId", vpnId);
		list = UserStatusService.userStatusByChart(map);
		int offline=0,online=0;
		for (int i = 0; i < list.size(); i++) {
			String status = list.get(i).get("name").toString();
			if (status.equals("0") || status.equals("4")) {
				offline+=Integer.parseInt(list.get(i).get("value").toString());
			}else{
				online+=Integer.parseInt(list.get(i).get("value").toString());
			}
		}
		Map<String,Object> map1=new HashMap<String, Object>();
		map1.put("name", "离线");
		map1.put("value", offline);
		
		Map<String,Object> map2=new HashMap<String, Object>();
		map2.put("name", "在线");
		map2.put("value", online);
		list1.add(map1);list1.add(map2);
		
		HashMap result = new HashMap();
		result.put("items", list1);
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
	@RequestMapping(value="/data/userOnlineByBs",method = RequestMethod.GET)
	public void userOnlineByBs(
			@RequestParam("bsId") int bsId,
			HttpServletRequest request, HttpServletResponse response){
		
		HashMap result = new HashMap();
		result.put("items", UserStatusService.userOnlineByBs(bsId));
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
