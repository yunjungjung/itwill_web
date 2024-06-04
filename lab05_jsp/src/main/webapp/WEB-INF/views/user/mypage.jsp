<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"
    trimDirectiveWhitespaces="true" 
    %>
    
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
 <meta name="viewport" content="width=device-width, initial-scale=1"><!--initial-scale=1는 브라우저 기본 비율 이용 -->
<title>Insert title here</title>
 <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
 rel="stylesheet" 
 integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
 crossorigin="anonymous">
 
 <!-- integrity 보안 -->
 
</head>

<body>
    <h1>내 정보</h1>
    
                    <c:url var="myPage" value="/user/mypage" />
                    <form method="post" action="${myPage}">
        <main>
            <div class="mt-2 card">
                <div class="card-header">
                    <h2>마이 페이지</h2>
                </div>
                <div class="card-body">
                    <form>
                        <div class="mt-2">
                            <label for="userid" class="form-label">아이디</label>
                            <input id="id" class="form-control" type="text" value="" readonly />
                        </div>
                        <div class="mt-2">
                            <label for="password" class="form-label">비밀번호</label>
                            <input id="password" class="form-control" type="text" value="" readonly />
                        </div>
                        <div class="mt-2">
                            <label for="email" class="form-label">이메일</label>
                            <input id="email" class="form-control" type="text" value="" readonly />
                        </div>
                    </form>
                </div>
            </div>
        </main>
    </div></main>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
    integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
    crossorigin="anonymous">
    </script>
</body>
</html>