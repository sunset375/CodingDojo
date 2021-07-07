from flask import Flask  # Import Flask to allow us to create our app
app = Flask(__name__)    # Create a new instance of the Flask class called "app"
@app.route('/')          # The "@" decorator associates this route with the function immediately following
def hello_world():
    return 'Hello World!'  # Return the string 'Hello World!' as a response



@app.route('/dojo')          # The "@" decorator associates this route with the function immediately following
def hiya():
    return 'Dojo!!'  # Return the string 'Hello World!' as a response


@app.route('/say/<name>') # for a route '/hello/____' anything after '/hello/' gets passed as a variable 'name'
def hello(name):
    print(name)
    return "Hi, " + name



@app.route('/repeat/<num>/<word>')
def repeat(num, word):
    num = int(num)
    for i in range(num):
        print(word)
    return num * (word + "\n")


@app.errorhandler(404)
def not_found(e):
    return "Sorry! No response. Try again."

if __name__=="__main__":

    app.run(debug=True)    # Run the app in debug mode.

