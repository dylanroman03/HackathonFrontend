import requests
import json

coll_ids = ['axie-infinity', 'bored-ape-yacht-club', 'cryptopunks', 'mutant-ape-yacht-club', 'art-blocks', 'otherdeed', 'azuki', 'nba-top-shot', 'clonex', 'sorare', 'moonbirds', 'doodles', 'meebits', 'bored-ape-kennel-club', 'cool-cats', 'hashmasks', 'dmarket', 'gods-unchained-cards', 'pudgy-penguins', 'uncategorized-ordinals', 'loot', 'beanz', 'world-of-women', 'cryptoadz', 'draft-kings', 'veefriends', 'crabada', 'cyberkongz', 'zed-run-legacy', 'farmers-world', 'sats-brc-20-nfts', '0n1force', 'smb-gen2', 'degods', 'mekaverse4', 'nft-worlds', 'hape-prime', 'degenerate-ape-academy', 'captainz', 'mfer', 'wolf-game', 'emblem-vault-v4', 'nfl-all-day', 'okay-bears', 'rtfkt-clonex-mintvial', 'pixelmon', 'karafuru', 'invisible-friends', 'fluf-world', 'projectpxn', 'creatureworld', 'curio-cards', 'ice-poet', 'creature-world-nft', 'cyberkongz-vx-1', 'sewerpass', 'kaijukingz', 'cool-pets', 'cyberbrokers', 'book-games', 'prime-ape-planet', 'kaiju-kingz', 'deadfellaz', 'goblintown', 'rats-brc-20-nfts', 'world-of-women-galaxy', 'thedogepound', 'webbland1', 'chubbies', 'the-doge-pound', 'aurorians', '3landers', 'the-n-project', 'v1-cryptopunks-wrapped', 'alienfrens', 'vox-collectibles', 'psychedelics-anonymous-genesis', 'vox-series-1', 'impostors-genesis', 'mad-lads-1', 'superrare', 'veefriends-series-2', 'webbland', 'yield-hunt', 'capsule', 'coolmansuniverse', 'supducks', 'mooncats', 'milady', 'degods-ethereum', 'adam-bomb-squad', 'supernormalbyzipcy', 'the-currency-eth', 'neo-tokyo-outer-identities', '888-inner-circle', 'y00ts', 'cryptophunksv2', 'panini-america', 'cryptoskulls', 'hero']

def funct1():
    resp_dict = {}
    for collectionId in coll_ids:

        try:
            url = f"https://api.cryptoslam.io/9vtih9mrf0giktml/v1/collections/{collectionId}"
            headers = {
            "X-BLOBR-KEY": "WgopNYXIguUwSuOo0rK03uVsl6OVFUOl"
            }

            response = requests.get(url, headers=headers)
            
            resp_json = response.json()
            resp_dict[collectionId] = resp_json
        except Exception as e:
            print(e)
    with open('collections_on_collection_id.txt', 'w') as f:
        json.dump(resp_dict, f,sort_keys = True, indent = 4,
                        ensure_ascii = False)
        
def funct2():
    url = "https://api.cryptoslam.io/9vtih9mrf0giktml/v1/global-indexes/sales-summary?timeRange=all"
    headers = {
    "X-BLOBR-KEY": "WgopNYXIguUwSuOo0rK03uVsl6OVFUOl"
    }

    response = requests.get(url, headers=headers)
    resp_dict = response.json()
    with open('sales_summary_by_global_indexes.txt', 'w') as f:
        json.dump(resp_dict, f,sort_keys = True, indent = 4,
                        ensure_ascii = False)

def make_request(key, element):
        collectionId = key
        tokenId = element
        url = f"https://api.cryptoslam.io/9vtih9mrf0giktml/v2/collections/{collectionId}/tokens/{tokenId}/rarity-attributes"
        headers = {
            "X-BLOBR-KEY": "WgopNYXIguUwSuOo0rK03uVsl6OVFUOl"
            }
        response = requests.get(url, headers=headers)
        result = {
            "collectionId": key,
            "tokenId": element,
            "url": url,
            "status_code": response.status_code,
            "content": response.text
        }
        return result
       
def funct3():

    json_file = open('/Users/rishinigam/hackathon_codes/web3_hkth/tokenIds.json')
    data = json.load(json_file)


    
    all_results = []
    for key,elements in data.items():
        for element in elements:
            result = make_request(key, element)
            all_results.append(result)
    with open("rarity_attrs.txt", 'w') as file:
        for result in all_results:
            file.write(str(result) + '\n\n')
        
    json_file.close()

def main():
    funct1()
    funct2()
    funct3()

if __name__ == "__main__":
    main()