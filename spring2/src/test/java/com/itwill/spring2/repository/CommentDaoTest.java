package com.itwill.spring2.repository;

import java.util.List;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import lombok.extern.slf4j.Slf4j;

@Slf4j
@ExtendWith(SpringExtension.class)
@ContextConfiguration(
        locations = { "file:src/main/webapp/WEB-INF/application-context.xml" }
)
public class CommentDaoTest {

    @Autowired // 스프링 컨테이너가 생성/관리하는 빈을 주입받음.
    private CommentDao commentDao;
    
//    @Test
    public void testSelect() {
        Assertions.assertNotNull(commentDao);
        
        List<Comment> list = commentDao.selectByPostId(102);
        for (Comment c : list) {
            log.debug(c.toString());
        }
    }
    
    @Test
    public void testInsert() {
        Comment comment = Comment.builder()
                .postId(102).username("guest").ctext("아이고 배불러")
                .build();
        int result = commentDao.insert(comment);
        Assertions.assertEquals(1, result);
    }
    
//    @Test
    public void testUpdate() {
        Comment comment = Comment.builder()
                .ctext("ㅋㅋㅋㅋ").id(5)
                .build();
       int result = commentDao.update(comment);
       Assertions.assertEquals(1, result);
    }
    
//    @Test
    public void testDeleteById() {
      int result = commentDao.deleteById(3);
      Assertions.assertEquals(1, result);
  }
  
//    @Test
    public void testDeleteByPostId() {
      int result = commentDao.deleteByPostId(102);
      log.debug("result = {}", result);
  }
    
//   @Test
   public void testselectCommentCount() {
       Assertions.assertNotNull(commentDao);
       
       List<Comment> list = commentDao.selectByPostId(102);
       for (Comment c : list) {
           log.debug(c.toString());
       }
   }
    
}