## Inspiration
- We took inspiration from existing marketplaces, such as Angur and Polymarket, to build an easy-to-use predictive NFT software. Even in today's crypto-heavy environment, there isn't a marketplace that provides a quick generalization of specific attributes (background, colors, characteristics, etc), which hinders consumer use and overall interest. Our project aimed to tackle this issue by providing a simple generalizing application for top NFTs. 

## What it does
- Our project generalizes the different attributes of NFTs to simplify the way our predictive software displays future pricing. Given an NFT, you can get an idea about what attributes play a role in the pricing of that token, making it easy to understand and get involved in the up-and-coming market.

## How we built it
- Frontend:
      - The frontend takes the data processed by the backend, establishing necessary connections between files to organize and relate the information. Subsequently, it displays this data in a table format for user-friendly visualization.
- Backend: 
     - Python scraper to get data from [CryptoSlam](https://www.cryptoslam.io/)
     - Once data was processed, we chose the top 100 Token IDs and their attributes
     - We then processed these attributes for each token within different collections to determine future pricing

## Challenges we ran into
- Figuring out how to obtain data from Cryptoslam (data scraping)
- Ensuring that we use Starknet to complement the entire project, not just one part of it

## Accomplishments that we're proud of
- We spent a lot of time building up the ML logic and there was a lot of data to sort through, which required us to minimize our scope to make the project feasible

## What we learned
- Getting data dependent on attributes from each NFT (CollectionID) was a challenge because our scope was too large, so we had to make changes
- To obtain the full breadth of data possible for the software, we would need significantly more resources (memory and money) than we have

## What's next for the AI-NFT prediction market
- There is room for enhancement to encompass more than just the top 100 NFT collections

## Deploy Website
https://hackathon-frontend-xi.vercel.app/

### Data: 
https://drive.google.com/drive/folders/1INSjMUsGR6k0fhRFqyrCqvgsNdTNqEO4