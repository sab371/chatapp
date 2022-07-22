package dataStore;
import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.Date;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

public class MessageSender extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {
		
		PrintWriter out = response.getWriter();
		HttpSession session = request.getSession();
		JSONObject json = new JSONObject();
		
		String msg = (String)request.getParameter("message");
		String to = (String) session.getAttribute("to");
		String from = (String)session.getAttribute("username");
		
		Row row = new Row ("MessageStore");
		row.set("FROM", from);
		row.set("TO", to);
		row.set("MESSAGE_TYPE", "text");
		row.set("MESSAGE_TEXT", msg);
		
		Date date = new Date();
		Long time = date.getTime();
		
        Timestamp ts = new Timestamp(time);
        row.set("TIME", ts);
        
        DataObject dobj=new WritableDataObject();
        
		try {
			dobj.addRow(row);
			DataAccess.add(dobj);
			json.put("status", 1);
		} 
		catch (DataAccessException e1) {
			e1.printStackTrace();
			json.put("status", 0);
		}
		out.write(json.toString());
	}
}