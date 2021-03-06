package xh.mybatis.service;
 
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import xh.func.plugin.FunUtil;
import xh.mybatis.bean.EastBsCallDataBean;
import xh.mybatis.bean.EastVpnCallBean;
import xh.mybatis.bean.RecordCommunicationBean;
import xh.mybatis.bean.UserNeedBean;
import xh.mybatis.mapper.ToWordFileMapper;
import xh.mybatis.tools.MoreDbTools;

public class ToWorkFileServices {
	public static Map<String,Object> system_call(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		Map<String,Object> rsmap=new HashMap<String, Object>();
		try {
			rsmap=mapper.system_call(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rsmap;
	}
	
	public static List<Map<String,Object>> system_call_year(String year){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		try {
			list=mapper.system_call_year(year);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static List<Map<String,Object>> system_gps_year(String year){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		try {
			list=mapper.system_gps_year(year);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static List<EastBsCallDataBean> system_call_level(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_level(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static List<EastBsCallDataBean> system_call_year_level(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_year_level(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static List<EastBsCallDataBean> system_call_area(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_area(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static List<EastBsCallDataBean> system_call_year_area(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_year_area(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static List<EastBsCallDataBean> system_call_zone_top10(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_zone_top10(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static List<EastBsCallDataBean> system_call_bs_top10(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_bs_top10(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static List<EastBsCallDataBean> system_call_queue_top10(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.system_call_queue_top10(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static List<EastVpnCallBean> system_call_vpn_top10(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastVpnCallBean> list=new ArrayList<EastVpnCallBean>();
		try {
			list=mapper.system_call_vpn_top10(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	
	public static  Map<String,Object> system_bs_call(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.system_bs_call(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static List<EastBsCallDataBean> chart_bs_userreg_top10(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.gps_voice_slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<EastBsCallDataBean> list=new ArrayList<EastBsCallDataBean>();
		try {
			list=mapper.chart_bs_userreg_top10(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static Map<String,Object> xj_bs_all_type_num(int period){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		Map<String,Object> map=new HashMap<String, Object>();
		try {
			map=mapper.xj_bs_all_type_num(period);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}
	public static Map<String,Object> xj_bs_num(Map<String,Object> mapstr){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		Map<String,Object> map=new HashMap<String, Object>();
		try {
			map=mapper.xj_bs_num(mapstr);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}
	public static Map<String,Object> fault_num(Map<String,Object> mapstr){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		Map<String,Object> map=new HashMap<String, Object>();
		try {
			map=mapper.fault_num(mapstr);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return map;
	}
	public static List<Map<String,Object>> fault_level(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		try {
			list=mapper.fault_level(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static List<Map<String,Object>> fault_level_pie(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<Map<String,Object>> list=new ArrayList<Map<String,Object>>();
		try {
			list=mapper.fault_level_pie(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static  Map<String,Object> xj_dispatch(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.xj_dispatch(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static  Map<String,Object> xj_net(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.xj_net(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static  Map<String,Object> xj_room(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.xj_room(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static  Map<String,Object> xj_vertical(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.xj_vertical(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static  Map<String,Object> xj_bs(Map<String,Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		 Map<String,Object> rs=new HashMap<String, Object>();
		try {
			rs=mapper.xj_bs(map);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static List<UserNeedBean> user_need(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<UserNeedBean> rs=new ArrayList<UserNeedBean>();
		try {
			rs=mapper.user_need(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}
	public static List<RecordCommunicationBean> RecordCommunication(String time){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		ToWordFileMapper mapper=sqlSession.getMapper(ToWordFileMapper.class);
		List<RecordCommunicationBean> rs=new ArrayList<RecordCommunicationBean>();
		try {
			rs=mapper.RecordCommunication(time);
			sqlSession.close();					
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return rs;
	}


}
