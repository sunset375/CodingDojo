<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>  

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Edit Pet Info</h1>
    <form:form action="/pets/${pet.id}/update" method="post" modelAttribute="pet">
            <p>
                <form:label path="name">Name</form:label>
                <form:errors path="name"/>
                <form:input path="name"/>
            </p>
            <p>
                <form:label path="age">Age</form:label>
                <form:errors path="age"/>
                <form:input type="number" path="age"/>
            </p>
            <p>
                <form:label path="ownerName">Owner Name</form:label>
                <form:errors path="ownerName"/>
                <form:input path="ownerName"/>
            </p>    
            <input type="submit" value="Submit"/>
        </form:form>  
</body>
</html>