package xh.mybatis.bean;

public class OperationsCheckBean {
	private int id;
	private String applyId;
	private int userId;
	private String user;
	private String userName;
	private String tel;
	private String createTime;
	private String checkUser;
	private String checkTime;
	private int status;
	
	
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getApplyId() {
		return applyId;
	}
	public void setApplyId(String applyId) {
		this.applyId = applyId;
	}
	public int getUserId() {
		return userId;
	}
	public void setUserId(int userId) {
		this.userId = userId;
	}
	public String getUser() {
		return user;
	}
	public void setUser(String user) {
		this.user = user;
	}
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getCreateTime() {
		return createTime;
	}
	public void setCreateTime(String createTime) {
		this.createTime = createTime;
	}
	public String getCheckUser() {
		return checkUser;
	}
	public void setCheckUser(String checkUser) {
		this.checkUser = checkUser;
	}
	public String getCheckTime() {
		return checkTime;
	}
	public void setCheckTime(String checkTime) {
		this.checkTime = checkTime;
	}
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	@Override
	public String toString() {
		return "OperationsCheckBean [applyId=" + applyId + ", userId=" + userId
				+ ", user=" + user + ", userName=" + userName + ", tel=" + tel
				+ ", createTime=" + createTime + ", checkUser=" + checkUser
				+ ", checkTime=" + checkTime + ", status=" + status + "]";
	}
	
	

}
