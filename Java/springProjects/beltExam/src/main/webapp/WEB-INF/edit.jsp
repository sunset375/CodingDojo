<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@ taglib prefix="form" uri="http://www.springframework.org/tags/form"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>Edit ${idea.ideaName}</h1>
        <form:form action="/ideas/${idea.id}/update" method="post" modelAttribute="idea">
        <p>
            <form:label path="ideaName">Content: </form:label>
            <form:errors path="ideaName"/>
            <form:input path="ideaName"/>
        </p>
    
        <input type="submit" value="Update"/>
        </form:form>    
        <a class="btn btn-danger" href="/ideas/${idea.id}/delete">Delete</a>

    </div>
</body>
</html>