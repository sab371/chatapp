package dataStore;

import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.io.PrintWriter;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.sql.Blob;
import java.sql.SQLException;
import java.sql.Timestamp;
import java.util.Date;
import java.util.UUID;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.servlet.http.Part;
import javax.sql.rowset.serial.SerialBlob;

import org.apache.commons.io.FileUtils;
import org.apache.commons.io.IOUtils;
import org.json.JSONObject;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.ds.query.SelectQuery;
import com.adventnet.ds.query.SelectQueryImpl;
import com.adventnet.ds.query.Table;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

@WebServlet("/sendImage")
@javax.servlet.annotation.MultipartConfig
public class ImageHandler extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		
		HttpSession session = request.getSession();
		JSONObject json = new JSONObject();
		PrintWriter out = response.getWriter();
		
		Part filePart = request.getPart("fileUpload");
        String filePath = filePart.getSubmittedFileName();
        Path path = Paths.get(filePath);
        String fileName = path.getFileName().toString();
        String fileId = generateFileId();
        String fileSize = getFileSize(filePart.getSize());
        
        System.out.println(fileSize);
        System.out.println(fileId);
        System.out.println(fileName);
        System.out.println(filePart.getSize());
        System.out.println(filePart.getContentType());
        
        boolean isImage = filePart.getContentType().contains("image");
        
        InputStream fileContent = filePart.getInputStream();
        String to = (String) session.getAttribute("to");
		String from = (String)session.getAttribute("username");
        
        String newFilePath = "/Chat_Images/" + to + "/" + fileId;
        File file = new File(getServletContext().getInitParameter("StoragePath")+newFilePath);
        FileUtils.copyInputStreamToFile(fileContent, file);
        System.out.println(newFilePath);
		
        try {
			setFileDetails(fileId, fileName, newFilePath, fileSize);
		} catch (DataAccessException e) {
			e.printStackTrace();
			json.put("status", 0);
		}
        
		Row row = new Row ("MessageStore");
		row.set("FROM", from);
		row.set("TO", to);
		if(isImage) {
			row.set("MESSAGE_TYPE", "image");
		}
		else {
			row.set("MESSAGE_TYPE", "file");
		}
        row.set("MESSAGE_TEXT", fileId);

        Date date = new Date();
		Long time = date.getTime();
		
        Timestamp ts = new Timestamp(time);
        row.set("TIME", ts);
        
        DataObject dobj=new WritableDataObject();
        
		try {
			dobj.addRow(row);
			DataAccess.add(dobj);
			json.put("FileId",fileId);
			json.put("FileSize", fileSize);			
			json.put("status", 1);
		} 
		catch (DataAccessException e1) {
			e1.printStackTrace();
			json.put("status", 0);
		}
		out.write(json.toString());

	}
	
	private String generateFileId() {
		return UUID.randomUUID().toString();
	}
	
	private void setFileDetails(String fileId, String fileName, String filePath, String fileSize) throws DataAccessException {
		
		Row row = new Row("FileStore");
		row.set("FILE_ID",fileId);
		row.set("FILE_NAME",fileName);
		row.set("FILE_PATH",filePath);
		row.set("FILE_SIZE",fileSize);
		
		DataObject dobj=new WritableDataObject();
		dobj.addRow(row);
		DataAccess.add(dobj);
	}
	
	private String getFileSize(double size) {
		String fileSize = null;
		int num=0;
		
		while(size >= 1000) {
			size = Math.round(size * 10.0 / 1000.0) / 10.0;
			num++;
		}		
		fileSize = size + ""+ getValue(num) ;
		return fileSize;
	}
	
	private String getValue(int num) {
		String value = null;
		switch(num) {
		case 0:
			value = "B";
			break;
		case 1:
			value = "kB";
			break;
		case 2:
			value = "MB";
			break;
		case 3:
			value = "GB";
			break;	
		}
		return value;
	}
}