
from flask_app import app
from flask import render_template,redirect,request,session,flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User

#######################################################################

#######################################################################
# Show route
#######################################################################

@app.route("/")
def index():
    mysql = connectToMySQL('first_flask')	        # call the function, passing in the name of our db
    friends = mysql.query_db('SELECT * FROM friends;')  # call the query_db function, pass in the query as a string
    print(friends)
    return render_template("index.html", all_friends = friends)

#######################################################################
# Show one route
#######################################################################
@app.route("/show/<id>")
def show(id):
    mysql = connectToMySQL('first_flask')
    query = "SELECT * FROM friends WHERE id=%(id)s;"
    data = {
        "id" : int(id)
    }
    user = mysql.query_db(query, data)
    return render_template("show.html", user = user)

#######################################################################
# Create route
#######################################################################

@app.route("/create")
def creat():
    return render_template("create.html")


# render the create.html which house the form
# process the info from our form on create.html, then redirect elsewhere
@app.route("/create_friend", methods=["POST"])
def create_friend():
    mysql = connectToMySQL('first_flask')
    print(request.form)


    query = "INSERT INTO friends (first_name, last_name, occupation) VALUES (%(fname)s, %(lname)s, %(occupation)s);"

    data = {
        "fname":request.form['fname'],
        "lname":request.form['lname'],
        "occupation":request.form['occ']
    }
    mysql.query_db(query, data)
    return redirect('/')

#######################################################################
# Delete one route
#######################################################################


@app.route("/delete/<id>")
def delete(id):
    mysql = connectToMySQL('first_flask')
    query = "DELETE FROM friends WHERE id=%(id)s;"
    data = {
        "id" :int(id)
    }
    mysql.query_db(query, data)
    return redirect("/")


#######################################################################
# edit one route
#######################################################################
@app.route("/edit/<id>")
def edit(id):
    mysql = connectToMySQL('first_flask')
    query = "SELECT * FROM friends WHERE id=%(id)s;"
    data = {
        "id" : int(id)
    }
    user = mysql.query_db(query, data)
    return render_template("edit.html", user = user)

@app.route("/update/<id>", methods=["POST"])
def update(id):
    mysql = connectToMySQL('first_flask')
    query = "UPDATE friends SET first_name = %()s, last_name = %()s, occupation = %()s WHERE id = %();"
    data = {
        "first_name" : request.form['fname'],
        "last_name" : request.form['lname'],
        "occupation" : request.form['occ'],
        "id" : int(id)
    }
    return redirect(f"/show/{id}")

