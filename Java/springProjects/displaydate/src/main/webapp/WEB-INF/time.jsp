<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Time</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">
</head>
<body onload="checkTimePage()">
    <div class="container">
        <div>
            <h1>Time template</h1>
        </div>
        <div >
            <h1 class="timecolor">${time}</h1>
        </div>
    </div>
    <script src="/js/time.js"></script>
</body>
</html>