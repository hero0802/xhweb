<%@ page language="java" 
    import="java.util.*,
    com.zhuozhengsoft.pageoffice.*,
    com.zhuozhengsoft.pageoffice.wordwriter.*,
    xh.func.plugin.*,
    java.net.*,
    xh.mybatis.bean.ScoreBean" 
    pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

%>
<%
    
        WordDocument doc = new WordDocument();

        Map<String,Object> map=(Map<String,Object>)request.getSession().getAttribute(request.getSession().getId()+"meet_doc");
        String doc_name=map.get("doc_name").toString();
        String meet_name=map.get("meet_name").toString();
        String meet_path=map.get("meet_path").toString();
        System.out.println("name->"+map);
        //String str=month.split("-")[0]+"��"+month.split("-")[0]+"��";
        doc.setEnableAllDataRegionsEditing(true); // �����Կ����������ύģʽ��docSubmitForm���£����е�����������Ա༭

        /* if(type==3){
        	doc.openDataRegion("PO_Name").setValue("�ɶ���Ӧ��ָ�ӵ�������ͨ�������ڹ��̷�����Ŀ\r\n"+bean.getTime()+"��Ŀ����۷ֱ�");
        	
        }else{
        	doc.openDataRegion("PO_Name").setValue("�ɶ���Ӧ��ָ�ӵ�������ͨ�������ڹ��̷�����Ŀ\r\n"+bean.getTime()+"��Ŀ����۷ֱ�");
        } */
        doc.openDataRegion("PO_Name").setValue(doc_name);
       
        String name=URLEncoder.encode(meet_path, "utf-8");
      

        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        fmCtrl.setServerPage(basePath+"poserver.zz");
        fmCtrl.setWriter(doc);
        fmCtrl.setJsFunction_OnProgressComplete("OnProgressComplete()");
        fmCtrl.setSaveFilePage(basePath+"office/save_page?path="+name);
        fmCtrl.fillDocumentAs(request.getSession().getServletContext().getRealPath("/")+meet_path, DocumentOpenType.Word, meet_name);
      
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
     <script type="text/javascript">
        function OnProgressComplete() {
           // window.parent.hideGif();// ����Defaultҳ�е�loadingͼƬ
             window.external.close(); 
             window.external.CallParentFunc("xh.createMeetDocSussess()");
        }
    </script>

</head>
<body>
<p>���ڴ��������Ҫ�ļ��������ĵȴ�</p>
    <div>
        <%=fmCtrl.getHtmlCode("FileMakerCtrl1")%>
    </div>
</body>
</html>