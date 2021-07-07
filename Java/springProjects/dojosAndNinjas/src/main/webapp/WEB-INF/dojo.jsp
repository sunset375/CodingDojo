<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>.
    <%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Dojo Pages</h1>
    <h1>Ninja lists below</h1>
    <h1>${dojoObj.name} Location Ninjas</h1>
    <h1>${dojoObj.ninjas}</h1>
    <ul>
        <c:forEach items="${dojoObj.ninjas}" var="ninja">
            <li>${ninja.firstName}, ${ninja.lastName}, ${ninja.age}</li>
        </c:forEach>

    </ul>

</html>