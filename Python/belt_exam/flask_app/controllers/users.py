import re
from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.user import User
from flask_app.models.pie import Pie

from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)



#####################################################
# default
#####################################################

@app.route("/")
def index():
    return render_template("index.html")



@app.route("/register", methods=["POST"])
def register():

    if not User.validate_register(request.form):
        return redirect("/")
    
    data = {
        "email" : request.form["email"]
    }
    user_in_db = User.get_by_email(data)
    if user_in_db:
        flash("Plesae create a new account! Email already in use!")
        return redirect("/")


    hashed_pw = bcrypt.generate_password_hash(request.form['password'])

    data = {
        "first_name" : request.form['first_name'],
        "last_name" : request.form['last_name'],
        "email" : request.form['email'],
        "password" : hashed_pw
    }

    user_id = User.register_user(data)

    session['user_id'] = user_id
    return redirect("/dashboard")




@app.route('/login', methods=['POST'])
def login():
    # see if the username provided exists in the database
    data = {
        "email" : request.form["email"]
    }
    user_in_db = User.get_by_email(data)
    # user is not registered in the db
    if not user_in_db:
        flash("Invalid Credentials")
        return redirect("/")
    if not bcrypt.check_password_hash(user_in_db.password, request.form['password']):
        # if we get False after checking the password
        flash("Invalid Credentials")
        return redirect('/')
    # if the passwords matched, we set the user_id into session
    session['user_id'] = user_in_db.id
    # never render on a post!!!
    return redirect("/dashboard")

@app.route("/dashboard")
def dashboard():
    if "user_id" not in session:
        flash("Please login to continue to site!")
        return redirect("/")
    data = {
        "id" : session["user_id"]
    }
    
    user_in_session = User.one_user(data)

    all_pies = Pie.all_pies()
    print(all_pies)
    return render_template("dashboard.html", user = user_in_session, pies = all_pies)



@app.route("/logout")
def logout():
    session.clear()
    return redirect("/")



# @app.route("/show/<int:id>")
# def show_pie(id):

#     data = {
#         "id" : id
#     }
#     Pie.get_one_pie(data)
#     return render_template("show_pie.html", pie = pie)


@app.route("/pies")
def pie_list():
    if "user_id" not in session:
        flash("Please login to continue to site!")
        return redirect("/")
    data = {
        "id" : session["user_id"]
    }
    
    user_in_session = User.one_user(data)

    all_pies = Pie.all_pies()
    return render_template("pies.html", user = user_in_session, pies = all_pies)



