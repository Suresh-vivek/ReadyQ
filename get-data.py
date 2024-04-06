import sys
import requests
from bs4 import BeautifulSoup
from urllib.parse import urlparse, urljoin

def scrape_website(url, max_depth=500):
    visited_links = set()

    def is_social_media_link(url):
        parsed_url = urlparse(url)
        social_media_domains = [
            "facebook.com",
            "twitter.com",
            "instagram.com",
            "linkedin.com",
            "pinterest.com",
      
        ]
        return any(domain in parsed_url.netloc for domain in social_media_domains)

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
                    if parsed_url.hostname == urlparse(base_url).hostname and not is_social_media_link(full_link):
                        scrape_page(full_link, depth + 1)

        else:
            print(f"Error retrieving {url}: {response.status_code}")

    def store_page(html):
        with open("1.txt", "a") as file:
            file.write(html)

    scrape_page(url, 0)

if __name__ == "__main__":
    if len(sys.argv) < 2:
        print("Usage: python3 get-data.py <url>")
        sys.exit(1)

    base_url = sys.argv[1]
    
    scrape_website(base_url)
