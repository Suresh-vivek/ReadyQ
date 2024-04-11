from flask import Flask, request, jsonify
from flask_cors import CORS
import os
import sys
from langchain.chains import ConversationalRetrievalChain
from langchain.chat_models import ChatOpenAI
from langchain.document_loaders import DirectoryLoader, TextLoader
from langchain_openai import OpenAIEmbeddings
from langchain.indexes import VectorstoreIndexCreator
from langchain.indexes.vectorstore import VectorStoreIndexWrapper
from langchain.llms import OpenAI
from langchain.vectorstores import Chroma
from dotenv import load_dotenv
from data_loader import load_data

load_dotenv()
PERSIST = "FALSE"

app = Flask(__name__)
CORS(app)

query = None
if len(sys.argv) > 1:
    query = sys.argv[1]

if PERSIST and os.path.exists("persist"):
    print("Reusing index...\n")
    vectorstore = Chroma(persist_directory="persist", embedding_function=OpenAIEmbeddings())
    index = VectorStoreIndexWrapper(vectorstore=vectorstore)
else:
    data = load_data()  # Load data from data.txt
    index = VectorstoreIndexCreator().from_loaders([TextLoader(data)])

chain = ConversationalRetrievalChain.from_llm(
    llm=ChatOpenAI(model="gpt-3.5-turbo"),
    retriever=index.vectorstore.as_retriever(search_kwargs={"k": 1}),
)
chat_history = []

@app.route('/chatbot', methods=['POST'])
def process_data():
    response = chain({"question": request.get_json()['message'], "chat_history": chat_history})
    return jsonify({'response': response['answer']})

if __name__ == '__main__':
    app.run(debug=True)
