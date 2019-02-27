package xh.mybatis.bean;

public class WorkContactBean {
	private String taskId;
	private String reason;
	private String type;
	private String sendUnit;
	private String recvUnit;
	private String copyUnit;
	private String time;
	private String code;
	private String content;
	private String addUser;
	private int user_type;
	private String checkUser;
	private String checkTime;
	private String userName;
	private String filePath;
	private String fileName;
	private int status;
	public int getStatus() {
		return status;
	}
	public void setStatus(int status) {
		this.status = status;
	}
	public String getTaskId() {
		return taskId;
	}
	public void setTaskId(String taskId) {
		this.taskId = taskId;
	}
	public String getReason() {
		return reason;
	}
	public void setReason(String reason) {
		this.reason = reason;
	}
	public String getType() {
		return type;
	}
	public void setType(String type) {
		this.type = type;
	}
	public String getSendUnit() {
		return sendUnit;
	}
	public void setSendUnit(String sendUnit) {
		this.sendUnit = sendUnit;
	}
	public String getRecvUnit() {
		return recvUnit;
	}
	public void setRecvUnit(String recvUnit) {
		this.recvUnit = recvUnit;
	}
	public String getCopyUnit() {
		return copyUnit;
	}
	public void setCopyUnit(String copyUnit) {
		this.copyUnit = copyUnit;
	}
	public String getTime() {
		return time;
	}
	public void setTime(String time) {
		this.time = time;
	}
	public String getCode() {
		return code;
	}
	public void setCode(String code) {
		this.code = code;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getAddUser() {
		return addUser;
	}
	public void setAddUser(String addUser) {
		this.addUser = addUser;
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
	public int getUser_type() {
		return user_type;
	}
	public void setUser_type(int user_type) {
		this.user_type = user_type;
	}
	
	public String getUserName() {
		return userName;
	}
	public void setUserName(String userName) {
		this.userName = userName;
	}
	public String getFilePath() {
		return filePath;
	}
	public void setFilePath(String filePath) {
		this.filePath = filePath;
	}
	public String getFileName() {
		return fileName;
	}
	public void setFileName(String fileName) {
		this.fileName = fileName;
	}
	@Override
	public String toString() {
		return "WorkContactBean [taskId=" + taskId + ", reason=" + reason
				+ ", type=" + type + ", sendUnit=" + sendUnit + ", recvUnit="
				+ recvUnit + ", copyUnit=" + copyUnit + ", time=" + time
				+ ", code=" + code + ", content=" + content + ", addUser="
				+ addUser + ", checkUser=" + checkUser + ", checkTime="
				+ checkTime + ", status=" + status + "]";
	}
	
	
	
	

}
