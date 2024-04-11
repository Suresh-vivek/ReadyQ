import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

base_url = "https://reactrouter.com/en/main"
max_depth = 1000

visited_links = set()

def scrape_page(url, depth):
    if url in visited_links or depth > max_depth:
        return

    visited_links.add(url)
    response = requests.get(url)

    if response.status_code == 200:
        page_content = response.content
        soup = BeautifulSoup(page_content, 'html.parser')
        extracted_text = soup.get_text()
        store_page(extracted_text)

        links = [link.get('href') for link in soup.find_all('a')]
        print(f"Depth {depth} - Visiting {url}, Found {len(links)} links")

        for link in links:
            if link:
                full_link = urljoin(url, link)  # Convert relative URLs to absolute URLs
                parsed_url = urlparse(full_link)
                if parsed_url.hostname == urlparse(base_url).hostname:
                    scrape_page(full_link, depth + 1)

    else:
        print(f"Error retrieving {url}: {response.status_code}")

def store_page(html):
    with open("data.txt", "a") as file:
        file.write(html + "\n\n")

if __name__ == "__main__":
    scrape_page(base_url, 0)
