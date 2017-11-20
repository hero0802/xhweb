package xh.mybatis.mapper;

import java.util.List;
import java.util.Map;

public interface GosuncnMapper {
	/**
	 * 添加注册信息
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public int insertLogin(Map<String,String> map)throws Exception;
	
	/**
	 * 查询注册信息用于维持心跳
	 */
	public List<Map<String,String>> selectForGetLogin();
	
	/**
	 * 添加告警信息
	 */
	public int insertAlarm(List<Map<String,String>> list);
	
	/**
	 * 根据FSUID删除对应配置信息
	 */
	public int deleteConfigByFSUID(String FSUID);
	
	/**
	 * 添加FSU配置信息
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public int insertConfig(List<Map<String,String>> list)throws Exception;
	
	/**
	 * 根据FSUID查询对应配置信息
	 */
	public List<String> selectConfigByFSUID(String FSUID);
	
	/**
	 * 添加监控点数据
	 * @param bean
	 * @return
	 * @throws Exception
	 */
	public int insertData(List<Map<String, String>> list)throws Exception;
	
	/**
	 * 添加监控点历史数据
	 */
	public int insertHData(List<Map<String, String>> list)throws Exception;
	
	/**
	 * 根据FSUID查询是否存在数据
	 */
	public int selectByFSUID(String FSUID)throws Exception;
	
	/**
	 * 根据FSUID删除对应数据
	 */
	public int deleteByFSUID(String FSUID)throws Exception;
	
	/*
	 * 环控告警页面部分
	 */
	/**
	 * 告警查询
	 * @return
	 * @throws Exception
	 */
	public List<Map<String,String>> selectEMHAlarm(Map<String,Object> map)throws Exception;
	
	/**
	 * 告警总数
	 * @return
	 * @throws Exception
	 */
	public int countEMHAlarm(Map<String,Object> map)throws Exception;
	
	/**
	 * 根据基站id查询摄像头IP
	 */
	public List<Map<String,String>> selectCameraIpByBsId(Map<String,String> map)throws Exception;
	
}
