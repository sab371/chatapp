package chatapp;


import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
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

public class RequestServlet extends HttpServlet{
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		HttpSession session = req.getSession();
		PrintWriter out = res.getWriter();
		String name = (String)session.getAttribute("username");
		
		if(name == null) {
			out.write("time out");
		}
		else {
//	*		out.println("<b>Your Requests!!!</b><br>");
			SelectQuery q1 = new SelectQueryImpl(Table.getTable("FriendsList"));
			q1.addSelectColumn(Column.getColumn("FriendsList","*"));
			Criteria c4 = new Criteria(new Column("FriendsList", "STATUS"),"Requested", QueryConstants.EQUAL).and(new Criteria(new Column("FriendsList","FRIEND"),name,QueryConstants.EQUAL));
			q1.setCriteria(c4);
			DataObject dob2;
			Requester obj;
			ArrayList<Requester> list=new ArrayList<Requester>();
			Gson gson = new Gson();
			res.setContentType("application/json");
			res.setCharacterEncoding("UTF-8");
			try {
				dob2 = DataAccess.get(q1);
				int k=0;
				Iterator i = dob2.getRows("FriendsList");
//				out.write(gson.toJson(i));
				String requestFrom = null;
				while(i.hasNext()) {
					Row r = (Row)i.next();
					requestFrom = r.getString(2);
					k++;
					obj = new Requester(k,requestFrom);
					list.add(obj);
//					out.write(requestFrom);
//					out.write(gson.toJson(requestFrom));
//					out.println(" "+"<a href=\"welcome/acceptrequest/"+requestFrom+"\">accept friend request</a><br>");
				}
				out.write(gson.toJson(list));
			} catch (DataAccessException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}
}
class Requester {    
int id;    
String name;    
public Requester(int id, String name) {    
    this.id = id;    
    this.name = name;    
}    
} 