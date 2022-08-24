<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
        <%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8" %>



<form:form action="/expenses" method="post" modelAttribute="pokeBook">
                        <form:errors path="name"/>
                        <form:errors path="vendor"/>
                        <form:errors path="amount"/>
                        <form:errors path="description"/>

                        <div class="form-group">
                            <form:label path="name">Expense Name</form:label>
                            <form:input path="name" />
                        </div>
                        <div class="form-group">
                            <form:label path="vendor">Vendor</form:label>
                            <form:input path="vendor" />
                        </div>

                        <div class="form-group">
                            <form:label path="amount">Amount</form:label>
                            <form:input path="amount" type="number" />
                        </div>


                        <div class="form-group">
                            <form:label path="description">Description</form:label>
                            <form:textarea path="description" cols="30" rows="10"/>
                        </div>
                        <input type="submit" value="Submit">
                    </form:form>