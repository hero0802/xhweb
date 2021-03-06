package xh.mybatis.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.apache.ibatis.session.SqlSession;

import xh.mybatis.bean.RecordCommunicationBean;
import xh.mybatis.bean.RecordEmergencyBean;
import xh.mybatis.bean.RecordTrainBean;
import xh.mybatis.bean.UserNeedBean;
import xh.mybatis.bean.WorkContactBean;
import xh.mybatis.mapper.RecordTrainMapper;
import xh.mybatis.mapper.UserNeedMapper;
import xh.mybatis.tools.MoreDbTools;

public class UserNeedService {

	public static List<UserNeedBean> data_all(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		List<UserNeedBean> list=new ArrayList<UserNeedBean>();
		try{
			list=mapper.data_all(map);
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static int data_all_count(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.data_all_count(map);
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int add(UserNeedBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.add(bean);
			sqlSession.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int update(UserNeedBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.update(bean);
			sqlSession.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int del(List<String> list){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.del(list);
			sqlSession.commit();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	
	
	
	
	
	public static List<RecordCommunicationBean> communication_list(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		List<RecordCommunicationBean> list=new ArrayList<RecordCommunicationBean>();
		try{
			list=mapper.communication_list(map);
			if(list.size()>0){
				for(int i=0;i<list.size();i++){
					RecordCommunicationBean bean=new RecordCommunicationBean();
					bean=list.get(i);
					bean.setFiles(WorkContactService.searchSummaryFile(bean.getTaskId()));
					list.set(i, bean);
				}
			}
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static int communication_list_count(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.communication_list_count(map);
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int add_communication(RecordCommunicationBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.add_communication(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int update_communication(RecordCommunicationBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.update_communication(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int update_communication_by_task(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.update_communication_by_task(map);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int upload_communication(RecordCommunicationBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.upload_communication(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int del_communication(List<String> list){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.del_communication(list);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	
	
	
	public static List<RecordEmergencyBean> emergency_list(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		List<RecordEmergencyBean> list=new ArrayList<RecordEmergencyBean>();
		try{
			list=mapper.emergency_list(map);
			int i=0;
			for (RecordEmergencyBean recordEmergencyBean : list) {
				List<Map<String, Object>> m=mapper.searchFile(recordEmergencyBean.getId());
				recordEmergencyBean.setFiles(m);
				list.set(i, recordEmergencyBean);
				i++;
				
			}
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return list;
	}
	public static int emergency_list_count(Map<String, Object> map){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.slave);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.emergency_list_count(map);
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int add_emergency(RecordEmergencyBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.add_emergency(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int update_emergency(RecordEmergencyBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.update_emergency(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int upload_emergency(RecordEmergencyBean bean){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.upload_emergency(bean);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int del_emergency(List<String> list){
		SqlSession sqlSession=MoreDbTools.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper=sqlSession.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.del_emergency(list);
			sqlSession.commit();
			sqlSession.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
	public static int addFile(List<Map<String,Object>> list) {
		SqlSession session = MoreDbTools
				.getSession(MoreDbTools.DataSourceEnvironment.master);
		UserNeedMapper mapper = session
				.getMapper(UserNeedMapper.class);
		int count=0;
		try {
			count = mapper.addFile(list);
			session.commit();
			session.close();
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return count;
	}
}
