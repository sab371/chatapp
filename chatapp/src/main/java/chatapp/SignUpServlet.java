package chatapp;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.Iterator;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;

import com.adventnet.ds.query.Column;
import com.adventnet.ds.query.Criteria;
import com.adventnet.ds.query.QueryConstants;
import com.adventnet.persistence.DataAccess;
import com.adventnet.persistence.DataAccessException;
import com.adventnet.persistence.DataObject;
import com.adventnet.persistence.Row;
import com.adventnet.persistence.WritableDataObject;

import dataStore.UserDataHandler;

public class SignUpServlet extends HttpServlet {
	public void doPost(HttpServletRequest request, HttpServletResponse response) throws IOException, ServletException {

		PrintWriter out = response.getWriter();
		JSONObject json = new JSONObject();
		UserDataHandler userData = UserDataHandler.getInstance();
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		boolean isUserExist = userData.setUserData(username, password);
		
		if(isUserExist) {
			json.put("status", 0);
		}
		else {
			json.put("status", 1);
		}
		out.write(json.toString());

	}
}