from flask_app.config.mysqlconnection import connectToMySQL
# from flask_app.models.dog import Dog
from flask import flash, session
from flask_app import app



class Pie:
    def __init__(self, data):
        self.id = data['id']
        self.pie_name = data['pie_name']
        self.filling = data['filling']
        self.crust = data['crust']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']
        self.vote = data['vote']
        self.user = []



    @staticmethod
    def validate_pie(data):
        is_valid = True
        if len(data['pie_name']) < 2:
            flash("Pie name must be at least 2 characters long")
            is_valid = False
        if len(data['filling']) < 2:
            flash("Filling must be at least 2 characters long")
            is_valid = False
        if len(data['crust']) < 2:
            flash("Crust must be at least 2 characters long")
            is_valid = False

        return is_valid

    @classmethod
    def save_pie(cls, data):
        query = "INSERT INTO pypie (pie_name, filling, crust, user_id, created_at) VALUES (%(pie_name)s, %(filling)s, %(crust)s, %(user_id)s, NOW());"
        return connectToMySQL('pypie_derby').query_db(query, data)

    @classmethod
    def all_pies(cls):
        query = "SELECT * FROM pypie JOIN users ON user_id = users.id;"
        pies_from_db = connectToMySQL('pypie_derby').query_db(query)

        all_pies = []

        for pie in pies_from_db:
            all_pies.append(pie)
        # retrun new list, which will be used but controller
        print(all_pies)
        return all_pies


    @classmethod
    def get_one_pie(cls, data):

        query = "SELECT * FROM pypie WHERE id = %(id)s;"
        pie_from_db = connectToMySQL('pypie_derby').query_db(query, data)

        return pie_from_db[0]


    @classmethod
    def show_pie(cls, data):
        query = "SELECT * FROM pypie JOIN users ON user_id = users.id WHERE pypie.id = %(id)s;"
        pie_from_db = connectToMySQL('pypie_derby').query_db(query, data)

        return pie_from_db[0]



    @classmethod
    def update_pie_info(cls, data):

        query = "UPDATE pypie SET pie_name = %(pie_name)s, filling = %(filling)s, crust = %(crust)s WHERE id = %(id)s;"

        updated_pie = connectToMySQL('pypie_derby').query_db(query, data)

        return updated_pie


    @classmethod
    def delete_pie(cls, data):

        query = "DELETE FROM pypie WHERE id = %(id)s;"
        connectToMySQL('pypie_derby').query_db(query, data)



    @staticmethod
    def vote_count(data):
        query = "UPDATE pypie SET vote = %(vote)s WHERE id = %(id)s;"
        updated_vote = connectToMySQL('pypie_derby').query_db(query, data)

        return updated_vote
