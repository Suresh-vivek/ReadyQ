from langchain.document_loaders import DirectoryLoader, TextLoader

def load_data():
    loader = DirectoryLoader("data.txt")
    return loader.load()
