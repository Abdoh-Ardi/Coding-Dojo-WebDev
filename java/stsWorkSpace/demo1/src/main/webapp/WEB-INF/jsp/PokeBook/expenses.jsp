<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

            <!DOCTYPE html>
            <html>

            <head>
                <!-- for Bootstrap CSS -->
                <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
                <!-- YOUR own local CSS -->
                <link rel="stylesheet" href="/css/main.css" />
                <meta charset="UTF-8">
                <title>PokeBook</title>
            </head>

            <body>
                <div class="container">
                    <h1>PokeBook</h1>
                    <table class="table">
                        <thead>
                            <tr>
                                <th>Expense</th>
                                <th>Vendor</th>
                                <th>Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <c:forEach items="${pokeBooksList}" var="book">
                                <tr>
                                    <td scope="row">${book.name}</td>
                                    <td>${book.vendor}</td>
                                    <td>${book.amount}</td>
                                </tr>
                            </c:forEach>
                        </tbody>
                    </table>
                </div>
                <div class="container w-50">
                    <h1>PokeBook</h1>

                    <form:form action="/expenses" method="post" modelAttribute="pokeBook">
                        <p>
                            <form:errors class="text-danger" path="name" />
                        </p>
                        <p>
                            <form:errors class="text-danger" path="vendor" />
                        </p>
                        <p>
                            <form:errors class="text-danger" path="amount" />
                        </p>
                        <p>
                            <form:errors class="text-danger" path="description" />
                        </p>
                        <table class="table w-25 table-borderless">
                            <tbody>
                                <tr>
                                    <td scope="row">
                                        <form:label path="name">Expense Name</form:label>
                                    </td>
                                    <td>
                                        <form:input path="name" />
                                    </td>
                                </tr>
                                <tr>
                                    <td scope="row">
                                        <form:label path="vendor">Vendor</form:label>
                                    </td>
                                    <td>
                                        <form:input path="vendor" />
                                    </td>

                                </tr>

                                <tr>
                                    <td>
                                        <form:label path="amount">Amount</form:label>
                                    </td>
                                    <td>
                                        <form:input path="amount" />
                                    </td>
                                </tr>
                                <tr>
                                    <td>
                                        <form:label path="description">Description</form:label>
                                    </td>
                                    <td>
                                        <form:textarea path="description" cols="40" rows="3" />
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                        <input type="submit" class="btn btn-primary" value="Submit">
                    </form:form>


                </div>
                <!-- For any Bootstrap that uses JS or jQuery-->
                <script src="/webjars/jquery/jquery.min.js"></script>
                <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
            </body>

            </html>