package chatapp;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import com.google.gson.Gson;

import dataStore.DataCheck;

public class AuthServlet extends HttpServlet{
	public void doPost(HttpServletRequest req, HttpServletResponse res ) throws IOException, ServletException {
		String usrname = req.getParameter("username");
		String password = req.getParameter("password");
		PrintWriter out = res.getWriter();
		DataCheck dc = new DataCheck();
		Gson gson = new Gson();
		res.setContentType("text/plain");
//		res.setContentType("application/json");
		res.setCharacterEncoding("UTF-8");
		try {
			String str ;
			if(dc.check(usrname,password)) {
				HttpSession session = req.getSession();
				session.setAttribute("username", usrname);
				session.setAttribute("password", password);
				session.setMaxInactiveInterval(5*60);
				str="valid";
//				str = gson.toJson("valid");
			}
			else {
				str = "invalid";
//				str = gson.toJson("invalid");
				//out.close();
			}
			res.getWriter().write(str);
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
}
