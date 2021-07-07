<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>

<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" integrity="undefined" crossorigin="anonymous">
</head>
<body>
    <div class="container">
        <h1>This is Form page</h1>
        <form action="/process" method="post">
            <div class="form-group">
                <label for="name">Your Name: </label>
                <input type="text" class="form-control" id="" name="name">
            </div>
            <div class="form-group">
                <label for="location">Dojo Location</label>
                <select class="form-control" id="" name="location">
                    <option>San Jose</option>
                    <option>Seattle</option>
                    <option>Arlington</option>
                    <option>Chicago</option>
                    <option>Austin</option>
                </select>
            </div>
            <div class="form-group">
                <label for="language">Favorite Language</label>
                <select class="form-control" id="" name="language">
                    <option>Python</option>
                    <option>Java</option>
                    <option>C++</option>
                    <option>C#</option>
                    <option>Ruby</option>
                </select>
            </div>
            </div>
            <div class="form-group">
              <label for="">Comment (optional</label>
              <textarea class="form-control" id="" rows="3" name="comment"></textarea>
            </div>
            <input type="submit" value="Submit">
          </form>
    </div>
</body>
</html>