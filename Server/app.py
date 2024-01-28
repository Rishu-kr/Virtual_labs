from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import matlab.engine
import json

app = Flask(__name__)
eng = matlab.engine.start_matlab()

cors = CORS(app, resources={r"/api/*": {"origins": "http://localhost:3000"}})
app.config['CORS_HEADERS'] = 'Content-Type'


@app.route('/api/')
def index():
    return ('Hey!!')


@app.route('/api/naturalconvection', methods=["POST"])
@cross_origin()
def allTemp():
    data = request.get_json()
    current = float(data['current'])
    Temp = eng.tmodel(current)
    h = eng.hmodel(current)
    STemp = [str(x) for x in Temp]
    h = json.dumps(h)
    Temp = json.dumps(STemp)
    return [Temp, h]


if __name__ == "__main__":
    app.run(debug=True)
