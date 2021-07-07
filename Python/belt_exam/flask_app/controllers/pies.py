from flask_app import app
from flask import render_template, redirect, request, session, flash
from flask_app.config.mysqlconnection import connectToMySQL
from flask_app.models.pie import Pie




@app.route("/pies")
def pies():
    if "user_id" not in session:
        flash("Please login to continue to site!")
        return redirect("/")
    return render_template("pies.html")


@app.route("/add_pie_to_db", methods=["POST"])
def add_pie_to_db():
    if not Pie.validate_pie(request.form):
        return redirect("/dashboard")


    data = {
        "pie_name" : request.form['pie_name'],
        "filling" : request.form['filling'],
        "crust" : request.form['crust'],
        "user_id" : session["user_id"]
    }

    Pie.save_pie(data)
    return redirect("/dashboard")



###########################################
# show pie info
##########################################

@app.route("/show/<int:id>")
def show(id):

    data = {
        "id" : id
    }
    pie = Pie.show_pie(data)
    return render_template("show.html", pie = pie)


#################################
# edit pie info
#################################

@app.route("/edit/<int:id>")
def edit_pie(id):
    if "user_id" not in session:
        flash("Please login to continue to site!")
        return redirect("/")

    data ={
        "id" : id
    }
    pie = Pie.get_one_pie(data)
    return render_template("edit_pie.html", pie = pie)


@app.route("/update_pie/<int:id>", methods=["POST"])
def update_pie(id):

    if not Pie.validate_pie(request.form):
        return redirect(f"/edit/{id}")

    data = {
        "id" : id,
        "pie_name" : request.form['pie_name'],
        "filling" : request.form['filling'],
        "crust" : request.form['crust'],
    }

    Pie.update_pie_info(data)
    return redirect("/dashboard")


#####################################
# Delete Pie
#####################################

@app.route("/delete/<int:id>")
def delete_pie(id):

    data = {
        "id" : id
    }

    Pie.delete_pie(data)
    return redirect("/dashboard")


@app.route("/voteup/<int:id>", methods=["POST"])
def voteup(id):
    count = int(request.form['voteup']) + 1
    data ={
        "id": id,
        "vote": count
    }
        
    Pie.vote_count(data)
    
    return redirect("/pies")