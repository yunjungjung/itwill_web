<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8" trimDirectiveWhitespaces="true" %>
<%@ taglib prefix="c" uri="jakarta.tags.core" %>
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Lab 5</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        rel="stylesheet" 
        integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
        crossorigin="anonymous" />
     
</head>
<body>

    
    <div class="container-fluid">
        <c:set var="pageTitle" value="오늘 점심 = 떡볶이" scope="page" />
        <%-- pageContext.setAttribute("pageTitle", "Home"); --%>
        <%@ include file="./fragments/header.jspf" %>
        
             <!-- 이미지 삽입 -->
        <div class="row">
            <div class="col-md-12 text-center"><br/>
                <img src="image/이제훈.jpg" alt="Example Image" class="img-fluid" />
            </div>
        <div class="col-md-12 text-center">
        <br/>💜제훈제훈💜
        </div>
        <div><br/>
            <center><iframe width="560" height="315" 
            src="https://www.youtube.com/embed/3670oCA5t1Y?si=GlOcIPmqtTom1HDP&amp;controls=0&amp;autoplay=1&amp;mute=1&loop=1" 
            title="YouTube video player" frameborder="0" 
            allow="autoplay"
            referrerpolicy="strict-origin-when-cross-origin" 
            allowfullscreen></iframe></center>
        </div>
    </div>
    
    </div>
    
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
        crossorigin="anonymous"></script>
        
        
</body>
</html>