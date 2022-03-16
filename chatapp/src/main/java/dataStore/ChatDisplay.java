package dataStore;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.Iterator;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.ds.query.SelectQuery;
import com.adventnet.ds.query.SelectQueryImpl;
import com.adventnet.ds.query.SortColumn;
import com.adventnet.ds.query.Table;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.google.gson.Gson;


public class ChatDisplay extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		PrintWriter out = res.getWriter();
		HttpSession session = req.getSession();
		String from = (String) session.getAttribute("username");
		String path = req.getRequestURI();
		String segments[] = path.split("/");
		String to = segments[segments.length - 1];
		session.setAttribute("to", to);
		SelectQuery q = new SelectQueryImpl(Table.getTable("MessageStore"));
		q.addSelectColumn(Column.getColumn(null, "*"));
		Criteria c = new Criteria(new Column("MessageStore", "FROM"), from, QueryConstants.EQUAL)
				.and(new Criteria(new Column("MessageStore", "TO"), to, QueryConstants.EQUAL));
		Criteria c1 = new Criteria(new Column("MessageStore", "FROM"), to, QueryConstants.EQUAL)
				.and(new Criteria(new Column("MessageStore", "TO"), from, QueryConstants.EQUAL));
		q.setCriteria(c.or(c1));
		SortColumn sc = new SortColumn("MessageStore", "TIME", true);
		q.addSortColumn(sc);
		DataObject dob;

		try {
			dob = DataAccess.get(q);
			Iterator i = dob.getRows("MessageStore");
			String message = null;
			Timestamp t;
			Gson gson = new Gson();
			Message obj;
			ArrayList<Message> list = new ArrayList<Message>();
			int k = 0;
			while (i.hasNext()) {
				Row r = (Row) i.next();
				k++;
				String user = r.getString(2);
//				out.write("<i>From " + user + ":</i><br>");
				t = r.getTimestamp(4);
				String time = t.toString();
//				out.write(time + "<br>");
				message = r.getString(5);
//				out.write(message + "<br>");
				obj = new Message(k, user, time, message);
				list.add(obj);
			}
			out.write(gson.toJson(list));
		} catch (DataAccessException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		

	}
}

class Message {
	int id;
	String from, time, message;

	public Message(int id, String from, String time, String message) {
		this.id = id;
		this.from = from;
		this.time = time;
		this.message = message;
	}
}
