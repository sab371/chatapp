
import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.annotation.WebFilter;
import javax.servlet.http.HttpFilter;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.json.JSONObject;

//@WebFilter("/*")
public class SessionCheckFilter extends HttpFilter {

	public SessionCheckFilter() {
		super();
	}

	public void destroy() {
	}

	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		
		System.out.println("Filter called");
		
		PrintWriter out = response.getWriter();
		HttpSession session = ((HttpServletRequest) request).getSession();
		
		String name = (String) session.getAttribute("username");
		
		if (name == null) {
			
			System.out.println("name is "+name);
			request.getRequestDispatcher("/").forward(request, response);
			
		} else {
			
			String path = ((HttpServletRequest) request).getRequestURI();
			
			if(path.contains("checkSession")) {
				
				System.out.println("checking session data");
				JSONObject json = new JSONObject();
				
				response.setContentType("application/json");
				
				json.put("status", 1);
				out.write(json.toString());
			}
			else {
				System.out.println("from else condition");
				chain.doFilter(request, response);
			}
			
		}

	}

	public void init(FilterConfig fConfig) throws ServletException {
	}

}