from flask_app import app
from flask_app.controllers import users


# app = Flask(__name__)    
# app.secret_key = 'myung'




if __name__=="__main__":
    app.run(debug=True)










# from flask import Flask, render_template, redirect, request, session
# from mysqlconnection import connectToMySQL

# app = Flask(__name__)    
# app.secret_key = 'myung'

# @app.route("/")
# def index():
#     mysql = connectToMySQL('twitter')	        # call the function, passing in the name of our db
#     users = mysql.query_db('SELECT * FROM users;')  # call the query_db function, pass in the query as a string
#     print(users)
#     return render_template("index.html", all_users = users)


# @app.route("/show/<id>")
# def show(id):
#     mysql = connectToMySQL('twitter')
#     query = "SELECT * FROM users WHERE id=%(id)s;"
#     data = {
#         "id" : int(id)
#     }
#     user = mysql.query_db(query, data)
#     return render_template("show.html", user = user)


# @app.route("/create")
# def create():
#     return render_template("create.html")



# @app.route("/delete/<id>")
# def delete(id):
#     mysql = connectToMySQL('twitter')
#     query = "DELETE FROM users WHERE id=%(id)s SET SQL+SAFE_UPDATES = 0;"
#     data = {
#         "id" :int(id)
#     }
#     mysql.query_db(query, data)
#     return redirect("/")


# if __name__=="__main__":
#     app.run(debug=True)



