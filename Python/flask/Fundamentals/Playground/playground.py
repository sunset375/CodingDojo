from flask import Flask, render_template  # Import Flask to allow us to create our app
app = Flask(__name__)    
@app.route('/')          
def hello_world():
    return 'Hello World!'  



# @app.route('/play')
# def index():
#     return render_template("index.html")	

# @app.route('/play/<number>')
# def index(number):
#     number = int(number)
#     return render_template("index.html", num = number)	


@app.route('/play/<number>/<col>')
def index(number, col):
    number = int(number)
    print(number)
    print(col)
    return render_template("index.html", num = number, color = col)	





if __name__=="__main__":
    app.run(debug=True)

