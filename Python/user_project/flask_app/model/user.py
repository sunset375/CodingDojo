from flask_app.config.mysqlconnection import connectToMySQL

class User:
    def __init__(self,data):
        self.id = data['id']
        self.first_name = data['first_name']
        self.last_name = data['last_name']
        self.occupation = data['occupation']
        self.created_at = data['created_at']
        self.updated_at = data['updated_at']


    @classmethod
    def get_all_users(cls):
        #declare your query for this method
        query = "SELECT * FROM friends;"
        # run the query by calling on your db
        user_from_db = connectToMySQL('first_flask').query_db(query)

        # parse through the response data and add to new list that you can return to your controller
        all_users = []
        for user in users_from_db:
            all_users.append(cls(user))

        #return new list, which will be used but controller
        return all_users

    @classmethod
    def one_user(cls):
        query = "SELECT * FROM friends WHERE id =%(id)s;"
        data = {
            "id" : int(id)
        }
        only_user = connectToMySQL('first_flask').query_db(query)

        user = {}
        for u in only_user:
            user = cls(u)
        return user