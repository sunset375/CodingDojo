<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Date</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous">
<link rel="stylesheet" href="css/style.css">
</head>
<body onload="checkDatePage()">
    <div class="container">
        <div>
            <h1>Date template</h1>
        </div>
        <div >
            <h1 class="datecolor">${date}</h1>
        </div>
    </div>
    <script src="/js/date.js"></script>
</body>
</html>