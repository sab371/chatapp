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

public class FriendServlet extends HttpServlet {
	public void service(HttpServletRequest req, HttpServletResponse res) throws IOException, ServletException {
		HttpSession session = req.getSession();
		PrintWriter out = res.getWriter();
		String name = (String)session.getAttribute("username");
		
		if(name == null) {
			out.write("time out");
		}
		else {
			SelectQuery query = new SelectQueryImpl(Table.getTable("FriendsList"));
			query.addSelectColumn(Column.getColumn("FriendsList","*"));
			Criteria c = new Criteria(new Column("FriendsList", "STATUS"),"Accepted", QueryConstants.EQUAL).and(new Criteria(new Column("FriendsList","USER_NAME"),name,QueryConstants.EQUAL));
			query.setCriteria(c);
			DataObject dob;
			Gson gson = new Gson();
			ArrayList<Friend> list=new ArrayList<Friend>();
			try {
				int k=0;
				Friend obj;
				dob = DataAccess.get(query);
				Iterator i = dob.getRows("FriendsList");
				String user = null;
				while(i.hasNext()) {
					Row r = (Row)i.next();
					user = r.getString(3);
					k++;
					obj = new Friend(k,user);
					list.add(obj);
//				out.write(" "+"<a href=\"chat/"+user+"\">chat</a><br>");
				}
				out.write(gson.toJson(list));
			} catch (DataAccessException e) {
				e.printStackTrace();
			}
		}
	}
}
class Friend {    
int id;    
String name;    
public Friend(int id, String name) {    
    this.id = id;    
    this.name = name;     
}    
} 