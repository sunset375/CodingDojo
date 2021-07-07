from flask import Flask, render_template, request, redirect, session
from mysqlconnection import connectToMySQL
app = Flask(__name__)
app.secret_key = 'myung'



@app.route('/')
def index():
    mysql = connectToMySQL('users')
    users = mysql.query_db("SELECT * FROM users;")
    print(users)
    return render_template('index.html', users = users)

###############################################
# Show User
###############################################
@app.route("/show/<id>")
def show(id):
    mysql = connectToMySQL('users')
    query = "SELECT * FROM users WHERE id=%(id)s;"
    data = {
        "id" : int(id)
    }
    user = mysql.query_db(query, data)
    print(user)
    return render_template("show.html" , user = user[0])


@app.route('/create')
def create():
    return render_template("create.html")



@app.route('/create_user', methods=['POST'])
def create_user():
    mysql = connectToMySQL('users')
    print(request.form)
    query = "INSERT INTO users (first_name, last_name, email) VALUES (%(fname)s, %(lname)s, %(email)s);"
    data = {
        "fname" : request.form['fname'],
        "lname" : request.form['lname'],
        "email" : request.form['email'],
    }
    new_user = mysql.query_db(query, data)
    return redirect(f"/show/{new_user}")

# renders edit.html with the form
@app.route('/edit/<id>')
def edit_user(id):
    mysql = connectToMySQL('users')
    query = "SELECT * FROM users WHERE id=%(id)s;"
    data = {
        "id" : int(id)
    }
    user = mysql.query_db(query, data)

    return render_template("edit.html", user = user[0])
    

# processes the info attained from the form
@app.route("/update/<id>", methods=["POST"])
def update(id):
    mysql = connectToMySQL('users')
    query = "UPDATE users SET first_name = %(first_name)s, last_name = %(last_name)s, email = %(email)s WHERE id = %(id)s;"
    data = {
        "first_name" : request.form['fname'],
        "last_name" : request.form['lname'],
        "email" : request.form['email'],
        "id" : int(id)
    }
    mysql.query_db(query, data)
    return redirect(f"/show/{id}")

############################################
# Delete one route
############################################

@app.route("/delete/<id>")
def delete(id):
    mysql = connectToMySQL('users')
    query = "DELETE FROM users WHERE id=%(id)s;"
    data = {
        "id" : int(id)
    }
    user = mysql.query_db(query, data)
    return redirect("/")





if __name__ == "__main__":
    app.run(debug=True)