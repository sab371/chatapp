package chatapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;

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
import com.adventnet.ds.query.Table;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.google.gson.Gson;

public class PeopleServlet extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {

		HttpSession session = req.getSession();
		PrintWriter out = res.getWriter();
		String name = (String) session.getAttribute("username");

		if (name == null) {
			out.write("time out");
		}

		else {
			try {
				SelectQuery q = new SelectQueryImpl(Table.getTable("UserAuthentication"));
				q.addSelectColumn(Column.getColumn("UserAuthentication", "*"));
				q.setCriteria(
						new Criteria(new Column("UserAuthentication", "USER_NAME"), name, QueryConstants.NOT_EQUAL));

				DataObject dob1;
				dob1 = DataAccess.get(q);
				Iterator i = dob1.getRows("UserAuthentication");
//				Map<String,Object> users = new HashMap<>();
				Gson gson = new Gson();
				String user = null;
				int k=0;
				ArrayList<Users> list=new ArrayList<Users>();
				while (i.hasNext()) {
					Row r = (Row) i.next();
					user = r.getString(2);
					SelectQuery q2 = new SelectQueryImpl(Table.getTable("FriendsList"));
					q2.addSelectColumn(Column.getColumn("FriendsList", "*"));
					q2.setCriteria(new Criteria(new Column("FriendsList", "USER_NAME"), name, QueryConstants.EQUAL)
							.and(new Criteria(new Column("FriendsList", "FRIEND"), user, QueryConstants.EQUAL)));
					DataObject dob3 = DataAccess.get(q2);
					Iterator i1 = dob3.getRows("FriendsList");
					Users obj;
					if (!(i1.hasNext())) {
						k++;
						obj = new Users(k, user,"user");
						list.add(obj);
//					out.println(" "+"<a href=\"welcome/sendrequest/"+user+"\">send friend request</a>"+"<a href=\"chat/"+user+"\">chat</a><br>");
					}
					while (i1.hasNext()) {
						Row r1 = (Row) i1.next();
//						out.write(gson.toJson(r1));
						String status = r1.getString("STATUS");
						if (status.equals("Accepted")) {
							k++;
							obj = new Users(k, user,"frienda");
							list.add(obj);
//					out.println("<a href=\"chat/"+user+"\">chat</a><br>");
						} else if (status.equals("Requested")) {
							k++;
							obj = new Users(k, user,"friendr");
							list.add(obj);
//					out.println("Request sent<a href=\"chat/"+user+"\">chat</a><br>");
						}

					}
					
				}
				out.write(gson.toJson(list));
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
		}
	}
}
class Users {    
int id;    
String name,type;    
public Users(int id, String name, String type) {    
    this.id = id;    
    this.name = name;    
    this.type = type;    
}    
} 