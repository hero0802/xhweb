package xh.func.plugin;

import java.beans.BeanInfo;
import java.beans.Introspector;
import java.beans.PropertyDescriptor;
import java.io.BufferedWriter;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.OutputStreamWriter;
import java.io.Writer;
import java.lang.reflect.Method;
import java.util.HashMap;
import java.util.Map;

import freemarker.template.Configuration;
import freemarker.template.Template;
import freemarker.template.TemplateException;

public class FormToWord {
	private Configuration configuration = null;
	
	public FormToWord(){
		configuration = new Configuration();  
        configuration.setDefaultEncoding("UTF-8"); 
	}
	
	public boolean fillWord(Object obj,String path){  
        Map<String,Object> dataMap= getData(obj);
        configuration.setClassForTemplateLoading(this.getClass(), "");//模板文件所在路径
        Template t=null;  
        try {  
            t = configuration.getTemplate(path); //获取模板文件
        } catch (IOException e) {  
            e.printStackTrace();  
        }  
        File outFile = new File("D:/outFile"+Math.random()*10000+".doc"); //导出文件
        Writer out = null;  
        try {  
            out = new BufferedWriter(new OutputStreamWriter(new FileOutputStream(outFile)));  
        } catch (FileNotFoundException e1) {  
            e1.printStackTrace();  
        }  
           
        try {
        	//将填充数据填入模板文件并输出到目标文件 
            t.process(dataMap, out); 
            return true;
        } catch (TemplateException e) {  
            e.printStackTrace();  
        } catch (IOException e) {  
            e.printStackTrace();  
        }
        return false;
    }  
  
    private Map<String, Object> getData(Object obj) {  
    	if(obj == null){  
            return null;  
        }          
        Map<String, Object> map = new HashMap<String, Object>();  
        try {  
            BeanInfo beanInfo = Introspector.getBeanInfo(obj.getClass());  
            PropertyDescriptor[] propertyDescriptors = beanInfo.getPropertyDescriptors();  
            for (PropertyDescriptor property : propertyDescriptors) {  
                String key = property.getName();  
  
                // 过滤class属性  
                if (!key.equals("class")) {  
                    // 得到property对应的getter方法  
                    Method getter = property.getReadMethod();  
                    Object value = getter.invoke(obj);  
  
                    map.put(key, value);
                }  
  
            }  
        } catch (Exception e) {  
            System.out.println("transBean2Map Error " + e);  
        }  
  
        return map;  
    }  
}
