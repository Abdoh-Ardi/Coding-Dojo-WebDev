<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>
        <!DOCTYPE html>
        <html lang="en">

        <head>
            <!-- for Bootstrap CSS -->
            <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
            <link rel="stylesheet" href="/css/style.css" />
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>

        <body>


            <p>You have visited <a href="./">http://localhost/</a>
                <c:out value="${(empty count)? 0:count}"/> times
            </p>
            <a href="./">Test Another Visit?</a>



            <!-- For any Bootstrap that uses JS or jQuery-->
            <script src="/webjars/jquery/jquery.min.js"></script>
            <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>

        </body>

        </html>