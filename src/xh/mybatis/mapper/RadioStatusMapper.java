package xh.mybatis.mapper;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import xh.mybatis.bean.RadioStatusBean;

public interface RadioStatusMapper {
	/**
	 * 查询基站下的注册终端列表
	 * @return
	 * @throws Exception
	 */
	public List<HashMap<String,Object>>oneBsRadio(Map<String,Object> map) throws Exception;	
	/**
	 * 查询基站下的注册终端总数
	 * @return
	 * @throws Exception
	 */
	public int oneBsRadioCount(int bsId) throws Exception;

}
