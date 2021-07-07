from flask import Flask, render_template, redirect, request, session
app = Flask(__name__)    
app.secret_key = 'myung'


@app.route('/')          
def hello_world():
    return render_template("index.html")


@app.route('/red')
def makeItRed():
    print("Made it to the red route!")

    if 'color' not in session:
        session['color'] = 'danger'
    elif(session['color'] != 'danger'):
        session['color'] = 'danger'
    else:
        session.clear()

    # if session['color'] == "danger":
    #     session.clear()
    # else:
    #     session['color'] = ""
    return redirect("/")

@app.route('/yellow')
def makeItYellow():
    print("Made it to the yellow route!")

    if 'color' not in session:
        session['color'] = 'warning'
    elif(session['color'] != 'warning'):
        session['color'] = 'warning'

    else:
        session.clear()
    return redirect("/")



@app.route('/green')
def makeItGreen():
    print("Made it to the green route!")

    if 'color' not in session:
        session['color'] = 'success'
    elif(session['color'] != 'success'):
        session['color'] = 'success'

    else:
        session.clear()



@app.route('/blue')
def makeItBlue():
    print("Made it to the blue route!")

    if 'color' not in session:
        session['color'] = 'primary'
    elif(session['color'] != 'primary'):
        session['color'] = 'primary'

    else:
        session.clear()


@app.route('/teal')
def makeItTeal():
    print("Made it to the blue route!")

    if 'color' not in session:
        session['color'] = 'info'
    elif(session['color'] != 'info'):
        session['color'] = 'info'

    else:
        session.clear()





@app.route('/clear_session')
def clearSession():
    session.clear()
    return request("/")






if __name__=="__main__":
    app.run(debug=True)