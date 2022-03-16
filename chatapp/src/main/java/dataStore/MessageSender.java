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

import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

public class MessageSender extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		PrintWriter out = res.getWriter();
		HttpSession session = req.getSession();
		String msg = (String)req.getParameter("message");
		String to = (String) session.getAttribute("to");
		String from = (String)session.getAttribute("username");
		
		Row r = new Row ("MessageStore");
		r.set("FROM", from);
		r.set("TO", to);
		r.set("MESSAGE", msg);
		Date d = new Date();
		Long time = d.getTime();
        Timestamp ts = new Timestamp(time);
        r.set("TIME", ts);
        DataObject d1=new WritableDataObject();
		try {
			d1.addRow(r);
		} catch (DataAccessException e1) {
			// TODO Auto-generated catch block
			e1.printStackTrace();
		}

		try {
			DataAccess.add(d1);
			out.write("success");
		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
