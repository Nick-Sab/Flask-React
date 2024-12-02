from flask import Flask, jsonify
from flask_cors import CORS
app = Flask("Name")
CORS(app)
@app.route('/quote', methods=['GET'])
def quote():
    return "Quote"
