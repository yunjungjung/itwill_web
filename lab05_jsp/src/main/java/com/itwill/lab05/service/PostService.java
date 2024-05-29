package com.itwill.lab05.service;

import java.util.List;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import com.itwill.lab05.repository.Post;
import com.itwill.lab05.repository.PostDao;

//MVC 웹 아키텍쳐에서 Service(Business) 계층을 담당하는 클래스.
// Persistenct(Repository) 계층의 기능(메서드를 호출해서)을 사용해서 비즈니스 로직을 구현하는 객체
// Controller(Web) 계층에게 비즈니스 로직 결과를 리턴.
public enum PostService {
   INSTANCE;


   private static final Logger log = LoggerFactory.getLogger(PostService.class);
   
    // Persistence(Repository) 계층의 기능(메서드)들을 사용하기 위해서.
   private final PostDao postDao = PostDao.INSTANCE;
   
   
   
   
   public List<Post> read() {
      log.debug("read()");
      
      List<Post> list = postDao.select();
       log.debug("list size = {}", list.size());
      
      //return postDao.select();
      return list;
   }
   
   public int create(Post post) {
      log.debug("create(post={})",post); //{}에 2번째넣은 아규먼트가 들어감?? 맞나?
      
      //Repository 계층의 메서드를 사용해서 DB 테이블에 행을 삽입(insert)
      int result = postDao.insert(post);
      
      //로그는 프로그램 동작에 필요없고 실행 흐름 보기 위해서 추가한 코드..
      log.debug("insert result = {}", result);
      
      return result;//insert된 행의 개수를 리턴.
   }
   
   public Post read(int id) {
      log.debug("read(id={})",id);
      
      // 영속성 계층의 메서드르 호출해서 DB테이블에서 id로 검색하는 sql을 실행.
      Post post = postDao.select(id);//아규먼트로 전달받은 아이디 그대로 넘겨줌
      
      log.debug("{}",post);
      
      return post; //검색한 Post객체(제목,내용,작성자)를 리턴 //-> 이 서비스를 컨트롤러에서 호출(포스트 디테일컨트롤러에서)
   }
   
}