package xh.mybatis.bean;

public class TempBean {
	private String bsId;
	private String name;
	
	
	private String level;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getBsId() {
		return bsId;
	}
	public void setBsId(String bsId) {
		this.bsId = bsId;
	}
	public String getLevel() {
		return level;
	}
	public void setLevel(String level) {
		this.level = level;
	}
	@Override
	public String toString() {
		return "TempBean [bsId=" + bsId + ", level=" + level + "]";
	}
	
}
