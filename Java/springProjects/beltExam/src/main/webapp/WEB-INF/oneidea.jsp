<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    
    <h1>${idea.ideaName}</h1>
    <h2>Created By: ${idea.creator.userName}</h2>


    <a href="/ideas/${idea.id}/edit">Edit</a>

</body>
</html>