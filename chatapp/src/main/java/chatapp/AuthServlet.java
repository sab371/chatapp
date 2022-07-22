package chatapp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

import com.google.gson.Gson;

import dataStore.DataCheck;
import dataStore.UserDataHandler;

public class AuthServlet extends HttpServlet{
	public void doGet(HttpServletRequest request, HttpServletResponse response ) throws IOException, ServletException {
		
		String username = request.getParameter("username");
		String password = request.getParameter("password");
		
		PrintWriter out = response.getWriter();
		DataCheck dc = DataCheck.getInstance();
		UserDataHandler data = UserDataHandler.getInstance(); 
		JSONObject json = new JSONObject();
		
		response.setContentType("text/plain");
		response.setCharacterEncoding("UTF-8");
		
		try {
			char status ;
			if(dc.check(username,password)) {
				
				HttpSession session = request.getSession();
				session.setAttribute("username", username);
				session.setAttribute("UserId", data.getId(username));
				
				json.put("status", 1);
			}
			else {
				
				json.put("status", 0);
			}
			response.getWriter().write(json.toString());
		} 
		catch (IOException e) {
			
			e.printStackTrace();
			json.put("status", 0);
		}
	}
}