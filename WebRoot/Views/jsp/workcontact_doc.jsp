<%@ page language="java" 
    import="java.util.*,
    com.zhuozhengsoft.pageoffice.*,
    com.zhuozhengsoft.pageoffice.wordwriter.*,
    xh.func.plugin.*,
    xh.mybatis.bean.WorkContactBean" 
    pageEncoding="gb2312"%>
<%
String path = request.getContextPath();
String basePath = request.getScheme()+"://"+request.getServerName()+":"+request.getServerPort()+path+"/";

String str=request.getParameter("bean");
WorkContactBean bean=GsonUtil.json2Object(str, WorkContactBean.class);
%>
<%
    
        WordDocument doc = new WordDocument();
        doc.setEnableAllDataRegionsEditing(true); // �����Կ����������ύģʽ��docSubmitForm���£����е�����������Ա༭

        doc.openDataRegion("PO_Reason").setValue(bean.getReason());
        doc.openDataRegion("PO_Type").setValue(bean.getType());
        doc.openDataRegion("PO_SendUnit").setValue(bean.getSendUnit());
        doc.openDataRegion("PO_RecvUnit").setValue(bean.getRecvUnit());
        doc.openDataRegion("PO_CopyUnit").setValue(bean.getCopyUnit());
        doc.openDataRegion("PO_Time").setValue(bean.getTime());
        doc.openDataRegion("PO_Code").setValue(bean.getCode());
        doc.openDataRegion("PO_Content").setValue(bean.getContent());
        doc.openDataRegion("PO_AddUser").setValue(bean.getAddUser());
      

        FileMakerCtrl fmCtrl = new FileMakerCtrl(request);
        fmCtrl.setServerPage(basePath+"poserver.zz");
        fmCtrl.setWriter(doc);
        fmCtrl.setJsFunction_OnProgressComplete("OnProgressComplete()");
        fmCtrl.setSaveFilePage(basePath+"office/save_page?path="+bean.getFile_path());
        fmCtrl.fillDocumentAs(basePath+"doc/template/������ϵ��.doc", DocumentOpenType.Word, bean.getFile_name());
      
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
    <title></title>
     <script type="text/javascript">
        function OnProgressComplete() {
           // window.parent.hideGif();// ����Defaultҳ�е�loadingͼƬ
             window.external.close(); 
        }
    </script>

</head>
<body>
<p>���ڲ������ݡ������ĵȴ�</p>
    <div>
        <%=fmCtrl.getHtmlCode("FileMakerCtrl1")%>
    </div>
</body>
</html>