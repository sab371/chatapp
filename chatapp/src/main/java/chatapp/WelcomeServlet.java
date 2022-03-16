package chatapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;

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

public class WelcomeServlet extends HttpServlet {
public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		
		HttpSession session = req.getSession();
		PrintWriter out = res.getWriter();
		String name = (String)session.getAttribute("username");
		
		if(name == null) {
			out.write("time out");
		}
		
		else {
			out.write(name+"\n");
//	*		out.println("<b>Your Requests!!!</b><br>");
			SelectQuery q1 = new SelectQueryImpl(Table.getTable("FriendsList"));
			q1.addSelectColumn(Column.getColumn("FriendsList","*"));
			Criteria c4 = new Criteria(new Column("FriendsList", "STATUS"),"Requested", QueryConstants.EQUAL).and(new Criteria(new Column("FriendsList","FRIEND"),name,QueryConstants.EQUAL));
			q1.setCriteria(c4);
			DataObject dob2;

			Gson gson = new Gson();
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			try {
				dob2 = DataAccess.get(q1);
				
				Iterator i = dob2.getRows("FriendsList");
//				out.write(gson.toJson(i));
				String requestFrom = null;
				while(i.hasNext()) {
					Row r = (Row)i.next();
					requestFrom = r.getString(2);
//					out.write(requestFrom);
//					out.write(gson.toJson(requestFrom));
//					requestFrom = r.getString(2); 
//					out.print(requestFrom);
//					out.println(" "+"<a href=\"welcome/acceptrequest/"+requestFrom+"\">accept friend request</a><br>");
				}
			} catch (DataAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
//	*		out.println("<b>Your Friends</b><br>");
			SelectQuery query = new SelectQueryImpl(Table.getTable("FriendsList"));
			query.addSelectColumn(Column.getColumn("FriendsList","*"));
			Criteria c = new Criteria(new Column("FriendsList", "STATUS"),"Accepted", QueryConstants.EQUAL).and(new Criteria(new Column("FriendsList","USER_NAME"),name,QueryConstants.EQUAL));
			query.setCriteria(c);
			DataObject dob;
			try {
				dob = DataAccess.get(query);
//				out.print(gson.toJson(dob));
				Iterator i = dob.getRows("FriendsList");
//				out.print(i);
//				out.print(gson.toJson(i));
				String user = null;
				while(i.hasNext()) {
					Row r = (Row)i.next();
//					out.write(gson.toJson(r));
//				out.write(" "+"<a href=\"chat/"+user+"\">chat</a><br>");
				}
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			
//	*		out.println("<b>People </b><br>");
			try {
				SelectQuery q= new SelectQueryImpl(Table.getTable("UserAuthentication"));
				q.addSelectColumn(Column.getColumn("UserAuthentication", "*"));
				q.setCriteria(new Criteria(new Column("UserAuthentication","USER_NAME"),name,QueryConstants.NOT_EQUAL));
				
				DataObject dob1;
				dob1 = DataAccess.get(q);
				Iterator i = dob1.getRows("UserAuthentication");
				//getting other users
				String user = null;
				while(i.hasNext()) {
					Row r = (Row)i.next();
					user = r.getString(2); 
//	*				out.print(user);
					SelectQuery q2 = new SelectQueryImpl(Table.getTable("FriendsList"));
					q2.addSelectColumn(Column.getColumn("FriendsList", "*"));
					q2.setCriteria(new Criteria(new Column("FriendsList","USER_NAME"),name,QueryConstants.EQUAL).and(new Criteria(new Column("FriendsList","FRIEND"),user,QueryConstants.EQUAL)));
					DataObject dob3 = DataAccess.get(q2);
					Iterator i1 = dob3.getRows("FriendsList");
					
					if(!(i1.hasNext())) {
						out.write(gson.toJson(r));
//						out.println(" "+"<a href=\"welcome/sendrequest/"+user+"\">send friend request</a>"+"<a href=\"chat/"+user+"\">chat</a><br>");
					}
					while(i1.hasNext()) {
						Row r1 =(Row)i1.next();
						out.write(gson.toJson(r1));
						String status = r1.getString("STATUS");
						if(status.equals("Accepted")) {
//						out.println("<a href=\"chat/"+user+"\">chat</a><br>");
						}
						else if(status.equals("Requested")) {
//							out.write(gson.toJson(r1));
//						out.println("Request sent<a href=\"chat/"+user+"\">chat</a><br>");
						}
						
					}
				}
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
			
//	*		out.println("<br><a href=\"logout\">Logout</a>");
		}
	}
}
