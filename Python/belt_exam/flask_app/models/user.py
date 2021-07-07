from flask_app.config.mysqlconnection import connectToMySQL
# from flask_app.models.dog import Dog
from flask import flash
from flask_app import app
import re
from flask_bcrypt import Bcrypt

bcrypt = Bcrypt(app)

EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
# Name_REGEX = re.compile(r'^[a-zA-Z`-]+$')


class User:
    def __init__(self, data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.email = data['email']
        self.password = data['password']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @staticmethod
    def validate_register(data):
        is_valid = True
        if len(data['first_name']) < 2:
            flash("First name must be at least 2 characters long!")
            is_valid = False
        if len(data['last_name']) < 2:
            flash("Last name must be at least 2 characters long!")
            is_valid = False
        if not EMAIL_REGEX.match(data['email']):
            flash("Email must be a valid format!")
            is_valid = False
        if len(data['email']) < 6:
            flash("email must be at least 6 characters long!")
            is_valid = False
        if len(data['password']) < 5:
            flash("Password must be at least 5 characters long!")
            is_valid = False
        if not data['password'] == data['conf_password']:
            flash("Password and Confirmation must be equal!")
            is_valid = False
        return is_valid




        #########################
        # create a new user and save to DB
        ##########################
    @classmethod
    def register_user(cls, data):
        query = "INSERT INTO users (first_name, last_name, email, password, created_at) VALUES (%(first_name)s,  %(last_name)s, %(email)s, %(password)s, NOW()); "

        return connectToMySQL('pypie_derby').query_db(query, data)


    @classmethod
    def get_by_email(cls,data):
        query = "SELECT * FROM users WHERE email = %(email)s;"
        result = connectToMySQL("pypie_derby").query_db(query,data)
        # Didn't find a matching user
        if len(result) < 1:
            return False
        return cls(result[0])

    @classmethod
    def one_user(cls, data):
        query = "SELECT * FROM users WHERE id = %(id)s;"
        only_user = connectToMySQL('pypie_derby').query_db(query, data)
        return cls(only_user[0])
    