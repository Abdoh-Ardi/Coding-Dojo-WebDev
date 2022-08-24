<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
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
                <div class="container">

                    <table class="table table-striped table-inverse table-responsive">
                        <thead class="thead-inverse">
                            <tr>
                                <th>ID</th>
                                <th>Title</th>
                                <th>Language</th>
                                <th># Pages</th>
                            </tr>
                        </thead>
                        <tbody>

                            <c:forEach items="${bookList}" var="book">
                                <tr>
                                    <td scope="row"> ${book.id}</td>
                                    <td> <a href="/books/${book.id}"> ${book.title}</a></td>
                                    <td> ${book.description}</td>
                                    <td> ${book.numberOfPages}</td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>

                <!-- For any Bootstrap that uses JS or jQuery-->
                <script src="/webjars/jquery/jquery.min.js"></script>
                <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
            </body>

            </html>