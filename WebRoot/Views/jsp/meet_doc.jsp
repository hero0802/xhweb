<%@ page language="java" 
    import="java.util.*,
    com.zhuozhengsoft.pageoffice.*,
    com.zhuozhengsoft.pageoffice.wordwriter.*,
    xh.func.plugin.*,
    xh.mybatis.bean.MeetBean" 
    pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

String str=request.getParameter("bean");
MeetBean bean=GsonUtil.json2Object(str, MeetBean.class);
%>
<%
    
        WordDocument doc = new WordDocument();
        doc.setEnableAllDataRegionsEditing(true); // �����Կ����������ύģʽ��docSubmitForm���£����е�����������Ա༭

        doc.openDataRegion("PO_Name").setValue(bean.getName());
        doc.openDataRegion("PO_Time").setValue(bean.getMeet_time());
        doc.openDataRegion("PO_Address").setValue(bean.getAddress());
        doc.openDataRegion("PO_Person").setValue(bean.getPerson());
        doc.openDataRegion("PO_Content").setValue(bean.getContent());
       

        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        fmCtrl.setServerPage(basePath+"poserver.zz");
        fmCtrl.setWriter(doc);
        fmCtrl.setJsFunction_OnProgressComplete("OnProgressComplete()");
        fmCtrl.setSaveFilePage(basePath+"office/save_page?path="+bean.getFile_path());
        fmCtrl.fillDocumentAs(request.getSession().getServletContext().getRealPath("doc/template/meet.doc"), DocumentOpenType.Word, bean.getFile_name());
      
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
     <script type="text/javascript">
        function OnProgressComplete() {
           // window.parent.hideGif();// ����Defaultҳ�е�loadingͼƬ
             window.external.close(); 
             window.external.CallParentFunc("xh.addSuccess()");
        }
    </script>

</head>
<body>
<p>���������ļ��������ĵȴ�</p>
    <div>
        <%=fmCtrl.getHtmlCode("FileMakerCtrl1")%>
    </div>
</body>
</html>