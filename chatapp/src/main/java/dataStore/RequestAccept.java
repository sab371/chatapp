package dataStore;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.ds.query.UpdateQuery;
import com.adventnet.ds.query.UpdateQueryImpl;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

public class RequestAccept extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response)
			throws IOException, ServletException {

		HttpSession session = request.getSession();
		String name = (String) session.getAttribute("username");
		String path = request.getRequestURI();
		String segments[] = path.split("/");
		String frndname = segments[segments.length - 1];
		JSONObject json = new JSONObject();
		UserDataHandler dataHandler = UserDataHandler.getInstance();
		long id = dataHandler.getId(name);

		try {
			Criteria criteria = (new Criteria(Column.getColumn("FriendsList", "USER_NAME"), frndname, QueryConstants.EQUAL))
					.and(new Criteria(Column.getColumn("FriendsList", "FRIEND"), name, QueryConstants.EQUAL));

			UpdateQuery updatequery = new UpdateQueryImpl("FriendsList");
			updatequery.setUpdateColumn("STATUS", "Accepted");
			updatequery.setCriteria(criteria);

			Row row = new Row("FriendsList");
			row.set("USER_ID", id);
			row.set("USER_NAME", name);
			row.set("FRIEND", frndname);
			row.set("STATUS", "Accepted");

			DataObject dobj = new WritableDataObject();

			DataAccess.update(updatequery);
			dobj.addRow(row);
			DataAccess.add(dobj);
			json.put("status", 1);

		} 
		catch (DataAccessException e) {
			e.printStackTrace();
			json.put("status", 0);
		}
		
		PrintWriter out = response.getWriter();
		out.write(json.toString());
	}
}