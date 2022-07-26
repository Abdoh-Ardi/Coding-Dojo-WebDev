<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

            <!DOCTYPE html>
            <html>

            <head>
                <!-- for Bootstrap CSS -->
                <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
                <!-- YOUR own local CSS -->
                <link rel="stylesheet" href="/css/main.css" />
                <meta charset="UTF-8">
                <title>Omikuji</title>
            </head>

            <body>

                <div class="container w-25">
                    <h1 class="text-center">Send an Omikuji</h1>
                    <div class="container border p-5">
                        <form action="/Omikuji/submit" method="post">
                            <div class="form-group">
                                <p>Pick any number from 5 to 25</p>
                                <select class="form-control" name="numbers">
                                    <c:forEach var="i" begin="5" end="25">
                                        <option value="${i}">
                                            <c:out value="${i}" />
                                        </option>
                                    </c:forEach>
                                </select>
                            </div>
                            <div class="form-group mt-2">
                                <p>Enter the name of any city</p>
                                <input type="text" class="form-control" name="cityName" placeholder="Nairobi">
                            </div>
                            <div class="form-group mt-2">
                                <p>Enter the name of any real person</p>
                                <input type="text" class="form-control" name="personName" placeholder="Bob dylan">
                            </div>
                            <div class="form-group mt-2">
                                <p>Enter professional endeavaor or hobby</p>
                                <input type="text" class="form-control" name="hobby" placeholder="selling origamis">
                            </div>
                            <div class="form-group mt-2">
                                <p>Enter any type of living thing.</p>
                                <input type="text" class="form-control" name="livingThing" placeholder="ferret">
                            </div>
                            <div class="form-group mt-2">
                                <p> Say something nice to someone:</p>
                                <textarea class="form-control" name="somethingNice" rows="3"></textarea>
                            </div>
                            <small>Send and show a friend</small>
                            <div class="d-flex justify-content-end">
                                <button type="submit" class="btn btn-primary">Submit</button>
                            </div>
                        </form>

                    </div>

                </div>
                </div>


                <!-- For any Bootstrap that uses JS or jQuery-->
                <script src="/webjars/jquery/jquery.min.js"></script>
                <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
            </body>

            </html>