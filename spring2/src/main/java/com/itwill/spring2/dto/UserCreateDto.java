package com.itwill.spring2.dto;

import org.springframework.stereotype.Service;

import com.itwill.spring2.repository.User;
import com.itwill.spring2.repository.UserDao;

import lombok.Data;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;

// 회원 가입 요청에서 요청 파라미터들을 저장하기 위한 DTO

@Data
public class UserCreateDto {
	private String userid;
	private String password;
	private String email;
	
	public User toEntity() {
		return User.builder()
				.userid(userid)
				.password(password)
				.email(email)
				.build();
	}

}

