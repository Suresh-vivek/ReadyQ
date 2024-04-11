from flask import Flask, request, jsonify
import os
import sys

from langchain.chains import ConversationalRetrievalChain
from langchain_openai import ChatOpenAI
from langchain_community.document_loaders import DirectoryLoader, TextLoader

from langchain_openai import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain_community.llms import OpenAI
from langchain_community.vectorstores import Chroma
from dotenv import load_dotenv
from flask_cors import CORS

load_dotenv()
openai_api_key = os.getenv("OPENAI_API_KEY")
# Enable to save to disk & reuse the model (for repeated queries on the same data)

app = Flask(__name__)
CORS(app)

query = None

PERSIST = "TRUE"

if PERSIST and os.path.exists("persist"):
    print("Reusing index...\n")
    vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
    index = VectorStoreIndexWrapper(vectorstore=vectorstore)
else:
    # loader = TextLoader("data/data.txt") # Use this line if you only need data.txt
    loader = TextLoader("1.txt")
    if PERSIST:
        index = VectorstoreIndexCreator(vectorstore_kwargs={"persist_directory": "persist"}).from_loaders([loader])
    else:
        index = VectorstoreIndexCreator().from_loaders([loader])

chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=index.vectorstore.as_retriever(search_kwargs={"k": 1}),
)

chat_history = []

@app.route('/process-message', methods=['POST'])
def process_message():
    global query
    if request.method == 'POST':
        data = request.get_json()
        query = data['message']
        result = chain({"question": query, "chat_history": chat_history})
        chat_history.append((query, result['answer']))
        return jsonify({'answer': result['answer']}), 200

if __name__ == '__main__':
    app.run(port=5001)