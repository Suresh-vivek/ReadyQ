# backend.py (Flask server)

from flask import Flask, request
from subprocess import run

app = Flask(__name__)

@app.route('/process-url', methods=['POST'])
def process_url():
    data = request.get_json()
    url = data['url']
    print("Received URL:", url)  # Print the received URL
    print("Received data:", data)  # Print the received JSON data
    result = run(['python3', 'get-data.py', url], capture_output=True, text=True)
    if result.returncode == 0:
        return {'message': 'Processing started'}, 200
    else:
        return {'error': result.stderr}, 500

if __name__ == "__main__":
    app.run(debug=True)
