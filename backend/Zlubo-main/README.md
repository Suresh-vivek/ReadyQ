<h1>ZLUBO : Integration Bot 🤖</h1>
<h3>🚀 Welcome to ZLUBO - a microservices-based full-stack project developed during the GenAi Zluri Hackathon 2023 in Bangalore. ZLUBO is designed to streamline the integration check process within companies, significantly reducing internal integration check time by over 60%.
</h3>
<h2>Overview</h2>
ZLUBO utilizes a variety of technologies including Python, JavaScript, Node.js, LangChain, OpenAI API, and Express.js. The project is microservices-based and employs crawling technology on the web, recursion, sets, and other advanced techniques.

<h2>Key Features:</h2>
<table>
  <tr>
    <td><strong>AI-Powered Integration Check</strong></td>
    <td>ZLUBO bypasses the need to read lengthy documentation for implementing various basic key features and checking API integrations for clients.</td>
  </tr>
  <tr>
    <td><strong>B2B Selling Model</strong></td>
    <td>Offers a B2B selling model allowing customers to self-integrate basic features and integrations.</td>
  </tr>
  <tr>
    <td><strong>Figma Design</strong></td>
    <td>Frontend design was crafted using Figma, with implementation involving HTML, DOM manipulation, JavaScript, and custom CSS.</td>
  </tr>
  <tr>
    <td><strong>Efficiency Boost</strong></td>
    <td>Reduces company's internal integration check time by more than 60%.</td>
  </tr>
</table>

<h2>Repository Information</h2>

Repository Link: ZLUBO Repository
Code Samples
Python Microservice
python
Copy code
    from flask import Flask, jsonify, request
    
    app = Flask(__name__)
    
    @app.route('/api/v1/integration_check', methods=['POST'])
    def integration_check():
        # Implementation of integration check logic
        return jsonify({'message': 'Integration check successful'})
    
    if __name__ == '__main__':
        app.run(debug=True)
Frontend JavaScript
javascript
    
    // Function to perform integration check
    function performIntegrationCheck() {
        fetch('/api/v1/integration_check', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ /* request body */ })
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);
            // Handle response
        })
        .catch(error => {
            console.error('Error:', error);
            // Handle error
        });
    }

<h3>Getting Started</h3>    
To set up the ZLUBO project on your machine, follow these steps:

Clone the repository:
      
    bash
      
Copy code:

    git clone https://github.com/theMitocondria/Zlubo.git
    
Navigate to the project directory:

    bash      
    cd Zlubo
      
Install dependencies:

    npm install
    
Start the server:

    npm start
    Open your browser and visit http://localhost:3000

<h2>Contribution</h2>
<h3>Contributions to ZLUBO are welcome! Feel free to submit pull requests with any improvements or fixes.</h3>

<h2>Let's make ZLUBO even more powerful and efficient together! 💪</h2>
