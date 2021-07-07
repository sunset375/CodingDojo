<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
</head>
<body>
    <h1>Details about menu item number ${menuObj.id}</h1>
    <h3>${menuObj.name}</h3>
    <h3>Uploaded by: ${menuObj.uploader.userName}</h3>
    <h4>Description: ${menuObj.description}</h4>


    <a href="/menu/${menuObj.id}/edit">Edit</a>
</body>
</html>