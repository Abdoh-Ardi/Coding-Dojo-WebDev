<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>

            <!DOCTYPE html>
            <html lang="en">

            <head>
                <!-- for Bootstrap CSS -->
                <link rel="stylesheet" href="/webjars/bootstrap/css/bootstrap.min.css" />
                <!-- YOUR own local CSS -->
                <link rel="stylesheet" href="/css/main.css" />
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="IE=edge">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Show Omikuji</title>
            </head>

            <body>
                <div class="container w-25">
                    <h1 class="text-center">Here's Your Omikuji</h1>
                    <div class="container border p-5" style="background-color: lightblue;">
                        <p>in ${numbers} years, you will live in ${cityName} with ${personName} as your roomate, ${hobby} for a living.
                            The next time you see a ${livingThing} you will have good luck. Also, ${somethingNice}
                        </p>
                    </div>

                </div>
                <div class="d-flex container w-25 justify-content-center">
                    <a href="/Omikuji"> Go Back <- </a>
                </div>

                <!-- For any Bootstrap that uses JS or jQuery-->
                <script src="/webjars/jquery/jquery.min.js"></script>
                <script src="/webjars/bootstrap/js/bootstrap.min.js"></script>
            </body>

            </html>