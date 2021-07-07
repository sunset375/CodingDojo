from flask import Flask, render_template, request, redirect
app = Flask(__name__)    
print(__name__)


@app.route('/')     
def index():
    return render_template("index.html")



@app.route('/result', methods = ['POST'])
def result():
    print(request.form)
    # print("Name: ", request.form['name'])
    # print("Dojo Location: ", request.form['location'])
    # print("Favorite Language: ", request.form['language'])
    # print("Comment: ", request.form['comment'])
    name = request.form['name']
    location = request.form['location']
    language = request.form['language']
    comment = request.form['comment']

    return render_template("result.html", name = name, location = location, language = language, comment = comment
)





if __name__ == "__main__":
    app.run(debug=True)