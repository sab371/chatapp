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

import dataStore.DisplayList;
import dataStore.UserListFormatter;

public class PeopleServlet extends HttpServlet {
	public void service(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		HttpSession session = request.getSession();
		PrintWriter out = response.getWriter();
		DisplayList displayList = DisplayList.getInstance(); 
		Gson gson = new Gson();
		
		String name = (String) session.getAttribute("username");
		
		
		try {
			ArrayList<UserListFormatter> userList = displayList.getUserList(name);
			response.setContentType("application/json");
			
			out.write(gson.toJson(userList));
			
		} catch (DataAccessException e) {
			
			e.printStackTrace();
			
		}
			
	}

}