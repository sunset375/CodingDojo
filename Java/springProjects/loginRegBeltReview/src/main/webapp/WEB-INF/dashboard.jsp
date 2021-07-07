<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="ISO-8859-1">
<title>Insert title here</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
</head>
<body>
    <h1>Welcome to the Dashboard (${loggedInUser.userName})</h1>
    <a href="/logout">logout</a>

    <table class="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Menu Item</th>
            <th scope="col">Uploaded By</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>
            <c:forEach items="${allMenuItems}" var="m">
                <tr>
                    <th scope="row">${m.id}</th>
                    <td><a href="/menu/${m.id}/info"></a>${m.name}</td>
                    <td>${m.uploader.userName}</td>
                    <td><a href="/menu/{m.id}/edit">Edit</a>|| <a href="/menu/${m.id}/delete">Delete</a></td>
                </tr>
            </c:forEach>
      </table>
      <a href="/menu/new">Add a new item</a>
</body>
</html>