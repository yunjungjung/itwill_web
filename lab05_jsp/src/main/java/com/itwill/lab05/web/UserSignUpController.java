package com.itwill.lab05.web;

import java.io.IOException;
import java.sql.SQLException;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itwill.lab05.repository.User;
import com.itwill.lab05.repository.UserDao;
import com.itwill.lab05.service.UserService;

import jakarta.servlet.ServletException;
import jakarta.servlet.annotation.WebServlet;
import jakarta.servlet.http.HttpServlet;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@WebServlet(name = "userSignUpController", urlPatterns = { "/user/signup" })
public class UserSignUpController extends HttpServlet {
    private static final long serialVersionUID = 1L;
    private static final Logger log = LoggerFactory.getLogger(UserSignUpController.class);
    
    private final UserService userService = UserService.INSTANCE;
    
    // TODO: 회원 가입에 필요한 요청 처리 메서드.
    
    @Override //회원가입을 하게하는 것은 get 방식
    protected void doGet(HttpServletRequest req, HttpServletResponse resp) 
    		throws ServletException, IOException {
        log.debug("doGet()");
        
        // 새 글 작성 폼(양식)을 작성하는 뷰(JSP)로 이동.
        req.getRequestDispatcher("/WEB-INF/views/user/signup.jsp")
            .forward(req, resp);
    }
    
    
    @Override // 회원가입을 제출하는 post 방식
    protected void doPost(HttpServletRequest req, HttpServletResponse resp) 
            throws ServletException, IOException {
        log.debug("doPost()");
        
        // 요청(request)에 포함된 정보들(제목, 내용, 작성자)을 읽음.
        // request.getParameter(arg) 메서드의 아규먼트는 요청 파라미터 이름(name 속성의 값).
        String userid = req.getParameter("userid");
        String password = req.getParameter("password");
        String email = req.getParameter("email");
        User user = User.builder()
                .userid(userid).password(password).email(email)
                .build();
        log.debug("user={}", user);
        
        // 서비스 객체의 메서드를 호출해서 DB 저장.
        userService.signUp(user);

        
        // 포스트 목록 페이지 이동.
        String url = req.getContextPath() + "";
        log.debug("redirect: " + url);
        resp.sendRedirect(url);
        // PRG(Post-Redirect-Get)
    }

}