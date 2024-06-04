package com.itwill.lab05.web;

import java.io.IOException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itwill.lab05.repository.User;
import com.itwill.lab05.service.UserService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

	@WebServlet(name = "userPageContorller", urlPatterns = { "/user/mypage" })
	public class UserPageContorller extends HttpServlet {
	    private static final long serialVersionUID = 1L;
	    private static final Logger log = LoggerFactory.getLogger(UserPageContorller.class);
	    
	    private final UserService userService = UserService.INSTANCE;
	    
	    @Override
	    protected void doGet(HttpServletRequest request, HttpServletResponse response) 
	            throws ServletException, IOException {
	        log.debug("doGet()");
	        
	        String userid = request.getParameter("userid");
	        		log.debug("userid={}", userid);
	        		
	        User user = userService.read(userid);
	        request.setAttribute("user", user);
	        
	        request.getRequestDispatcher("/WEB-INF/views/home.jsp")
	            .forward(request, response);
	    }

}
