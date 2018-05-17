package xh.func.plugin;
import java.io.BufferedReader;    
import java.io.IOException;    
import java.io.InputStream;    
import java.io.InputStreamReader;    
import java.util.List;
import java.util.Map;

import xh.mybatis.service.GosuncnService;
     
/**  
 * 判断网络连接状况.  
 *  
 */   
public class NetState {    
     
    public boolean isConnect(String IP){    
        boolean connect = false;    
        Runtime runtime = Runtime.getRuntime();    
        Process process;    
        try {    
            process = runtime.exec("ping " + IP);    
            InputStream is = process.getInputStream();     
            InputStreamReader isr = new InputStreamReader(is);     
            BufferedReader br = new BufferedReader(isr);     
            String line = null;     
            StringBuffer sb = new StringBuffer();     
            while ((line = br.readLine()) != null) {     
                sb.append(line);     
            }     
            //System.out.println("返回值为:"+sb);      
            is.close();     
            isr.close();     
            br.close();     
     
            if (null != sb && !sb.toString().equals("")) {     
                String logString = "";     
                if (sb.toString().indexOf("TTL") > 0) {     
                    // 网络畅通      
                    connect = true;    
                } else {     
                    // 网络不畅通      
                    connect = false;    
                }     
            }     
        } catch (IOException e) {    
            e.printStackTrace();    
        }     
        return connect;    
    }    
         
    public static void main(String[] args) {    
    	List<Map<String,String>> list = GosuncnService.selectNVRStatus();
    	System.out.println(list);
    	
    	
    	
        /*NetState netState = new NetState();    
        System.out.println(netState.isConnect("192.168.120.175"));*/    
     
    }    
}