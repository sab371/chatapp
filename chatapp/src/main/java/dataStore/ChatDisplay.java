package dataStore;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.Timestamp;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

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
	public void service(HttpServletRequest req, HttpServletResponse response) throws IOException, ServletException {

		PrintWriter out = response.getWriter();
		HttpSession session = req.getSession();
		String from = (String) session.getAttribute("username");
		response.setContentType("application/json");

		String path = req.getRequestURI();
		String segments[] = path.split("/");
		String to = segments[segments.length - 1];
		session.setAttribute("to", to);

		SelectQuery query = new SelectQueryImpl(Table.getTable("MessageStore"));
		query.addSelectColumn(Column.getColumn(null, "*"));

		Criteria criteria1 = new Criteria(new Column("MessageStore", "FROM"), from, QueryConstants.EQUAL)
				.and(new Criteria(new Column("MessageStore", "TO"), to, QueryConstants.EQUAL));

		Criteria criteria2 = new Criteria(new Column("MessageStore", "FROM"), to, QueryConstants.EQUAL)
				.and(new Criteria(new Column("MessageStore", "TO"), from, QueryConstants.EQUAL));

		query.setCriteria((criteria1).or(criteria2));

		SortColumn sortcolumn = new SortColumn("MessageStore", "TIME", true);
		query.addSortColumn(sortcolumn);
		DataObject dobj;

		try {

			dobj = DataAccess.get(query);
			Iterator iterator = dobj.getRows("MessageStore");

			String messageContent = null, messageType = null;
			JSONObject fileContent = null;
			Timestamp time;
			Gson gson = new Gson();
			Message message;
			ArrayList<Message> list = new ArrayList<Message>();
			int messageId = 0;

			while (iterator.hasNext()) {

				Row row = (Row) iterator.next();
				messageId++;

				String user = row.getString(2);

				time = row.getTimestamp(4);
				String dt = time.toString();
				Date d = new SimpleDateFormat("yyyy-MM-dd hh:mm:ss").parse(dt);
				String newdt = new SimpleDateFormat("MMM d,yyyy hh:mm aaa").format(d);
				messageType = row.getString(5);

				if (messageType.equals("image") || messageType.equals("file")) {
					fileContent = getFileDetails(row.getString(6));
				}
				else {
					messageContent = row.getString(6);
				}
				
				System.out.println(messageContent);
				message = new Message(messageId, user, messageType, newdt, messageContent,fileContent);
				list.add(message);
			}

			out.write(gson.toJson(list));
		}

		catch (DataAccessException | ParseException e) {
			e.printStackTrace();
		}

	}

	private JSONObject getFileDetails(String fileId) throws DataAccessException {
		
		Criteria criteria = new Criteria(new Column("FileStore", "FILE_ID"), fileId, QueryConstants.EQUAL);
		DataObject dobj;
		
		dobj = DataAccess.get("FileStore",criteria);
		Row row = dobj.getRow("FileStore");
		String fileName = row.getString("FILE_NAME");
		String filePath = row.getString("FILE_PATH");
		String fileSize = row.getString("FILE_SIZE");
		
		JSONObject jobj = new JSONObject();
		jobj.put("FileId", fileId);
		jobj.put("FileName", fileName);
		jobj.put("FilePath", filePath);
		jobj.put("FileSize", fileSize);
		
		return jobj;
	}
}

class Message {
	int id;
	String from, type, time, message;
	JSONObject fileContent;
	

	public Message(int id, String from, String type, String time, String message, JSONObject fileContent) {
		this.id = id;
		this.from = from;
		this.type = type;
		this.time = time;
		this.message = message;
		this.fileContent = fileContent;
	}
}