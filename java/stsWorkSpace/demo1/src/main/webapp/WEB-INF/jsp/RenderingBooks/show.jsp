<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

            <!DOCTYPE html>
            <html>

            <head>
                <!-- for Bootstrap CSS -->
                <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
                <!--local CSS -->
                <link rel="stylesheet" href="/css/main.css" />
                <meta charset="UTF-8">
                <title>Show Books</title>
            </head>

            <body>
                
                <h1>${(empty book)?"No Book by this ID":book.title}</h1>
                <h4>Description: ${(empty book)?"No Book by this ID":book.description}</h4>
                <h4>Language: ${(empty book)?"No Book by this ID":book.language}</h4>
                <h4>Number Of Pages: ${(empty book)?"No Book by this ID":book.numberOfPages}</h4>

                <!-- For any Bootstrap that uses JS or jQuery-->
                <script src="/webjars/jquery/jquery.min.js"></script>
                <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
            </body>

            </html>