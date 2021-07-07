<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
    <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%> 
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
    <h1>Welcome, ${loggedInUser.userName}</h1>

    <a class="btn btn-warning" href="/logout">Log out</a>
    
    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Menu Item</th>
            <th scope="col">Created By</th>
            <th scope="col">Likes</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            <c:forEach items="${allIdeas}" var="idea">
                <tr>
                    <th scope="row">${idea.id}</th>
                    <td><a href="/ideas/${idea.id}">${idea.ideaName}</a></td>
                    <td>${idea.creator.userName}</td>
                    <td></td>
                    <td><a href="/ideas/${idea.id}/like">Like</a> || <a href="/ideas/${idea.id}/edit">Edit</a>|| <a href="/ideas/${idea.id}/delete">Delete</a></td>
                </tr>
            </c:forEach>
      </table>

    <a href="/ideas/new">Crate an Idea</a>

  </div>
</body>
</html>