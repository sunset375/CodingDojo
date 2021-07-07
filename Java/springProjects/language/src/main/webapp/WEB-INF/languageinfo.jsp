<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Language Info</h1>

    <p><a href="/languages">Dashboard</a></p>
    <p>${language.id}</p>
    <p>${language.name}</p>
    <p>${language.creator}</p>
    <p>${language.version}</p>
    <div>
        <a href="/languages/${language.id}/edit">Edit</a>
    </div>
    <div>
        <a href="/languages/${language.id}/delete">Delete</a>
    </div>
</body>
</html>