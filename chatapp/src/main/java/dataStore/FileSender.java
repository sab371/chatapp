package dataStore;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.PrintWriter;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;

import javax.servlet.ServletException;
import javax.servlet.ServletOutputStream;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;

@WebServlet("/Chat_Images/*")
public class FileSender extends HttpServlet {
	private static final long serialVersionUID = 1L;

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		HttpSession session = request.getSession();
		String user = (String) session.getAttribute("username");
		String path = request.getRequestURI();
		
		System.out.println(path);
		String segments[] = path.split("/");
		String fileId = segments[segments.length - 1];
		System.out.println(fileId);
		
		boolean isAccessible;
		try {
			isAccessible = checkAccess(user, fileId);
			
			if(isAccessible) {
				ServletOutputStream out = response.getOutputStream();
				File file = new File(getServletContext().getInitParameter("StoragePath") + path);
				FileInputStream fis = new FileInputStream(file);
				FileChannel fc = fis.getChannel();
				ByteBuffer content = ByteBuffer.allocate(1024);
				int i;
				int l = (int) fc.position();
				while ((i = fc.read(content)) > 0) {
					l = (int) fc.position();
					content.flip();
					out.write(content.array(),0,i);
				}
				out.close();
				fc.close();
				fis.close();
			}
			else {
				
				response.getWriter().write("You have no access to this file");
			}
		} catch (DataAccessException e) {
			e.printStackTrace();
		}
		
	}
	private boolean checkAccess(String user, String fileId) throws DataAccessException {
		Criteria criteria1 = new Criteria(Column.getColumn("MessageStore", "MESSAGE_TEXT"), fileId, QueryConstants.EQUAL);
		Criteria criteria2 = new Criteria(Column.getColumn("MessageStore", "FROM"), user, QueryConstants.EQUAL).or(Column.getColumn("MessageStore", "TO"), user, QueryConstants.EQUAL);
		Criteria criteria = criteria1.and(criteria2);
		
		DataObject dobj = DataAccess.get("MessageStore", criteria);
		if(!dobj.isEmpty()) {
			return true;
		}
		else {
			return false;
		}
	}
}
