### What do to as a victim?
If you've fallen victim to this silly script, but still have access to your account:

1. Remove Malicious Script.
2. Open HTML Dev Tools and head to 'console'
3. Clear your LocalStorage to get rid of any persisting saves
```js
localStorage.clear();
```
4. Open the current [comment section state](https://www.kogama.com/api/feed/31872096/comment/) of the feed and locate every object that has your username, eg.
```json
    "id": 55718581, <--- Here is the Comment ID that we will need in a second
      "profile_id": 111111,
      "_data": "{\"data\": \"VICTIMPASSWORD\"}", <--- Here is where your password would be 
      "created": "2025-04-27T23:59:39+00:00",
      "object_id": 31872096,
      "object_type": "news_feed",
      "profile_username": "VICTIM USERNAME", <--- This should have your username
      "images": {
        "original": "https://www.kogstatic.com/gen_images/6d/2c/6d2c29cf-12fd-46a8-a7e6-87802f4e3328.png",
        "micro": "https://www.kogstatic.com/gen_cache/6d/2c/6d2c29cf-12fd-46a8-a7e6-87802f4e3328_18x18.png",
        "small": "https://www.kogstatic.com/gen_cache/6d/2c/6d2c29cf-12fd-46a8-a7e6-87802f4e3328_46x46.png",
        "medium": "https://www.kogstatic.com/gen_cache/6d/2c/6d2c29cf-12fd-46a8-a7e6-87802f4e3328_64x64.png",
        "large": "https://www.kogstatic.com/gen_cache/6d/2c/6d2c29cf-12fd-46a8-a7e6-87802f4e3328_330x451.png"
      },
      "avatar_id": 111111,
      "is_subscriber": false,
      "can_delete": false
    
```

6. Gather all comment IDs of the objects that relate to your own account.
7.  Wrap them up in a list like this:
```js
["55844686", "55844678", "55844671", "55844667", "55844666", "55844665"]
```
8. Edit this snippet with your Comment IDs (CLIST variable):
```js
const FEED_ID = "31872096";
const CLIST = ["55844686", "55844678", "55844671", "55844667", "55844666", "55844665"];
const BASE_URL = "https://www.kogama.com";
const HEADERS = {"User-Agent": "Mozilla/5.0"};

async function deleteComments() {
  for (const id of CLIST) {
    const url = `${BASE_URL}/api/feed/${FEED_ID}/comment/${id}/`;
    try {
      const res = await fetch(url, {method: 'DELETE', headers: HEADERS, credentials: 'include'});
      console.log(`DELETE\n${"-".repeat(40)}\nscheme\n\thttps\nhost\n\twww.kogama.com\nfilename\n\t/api/feed/${FEED_ID}/comment/${id}/\nStatus\n${res.status}\n${res.statusText}\n`);
    } catch (e) {
      console.error(`Error deleting ${url}:`, e);
    }
  }
}

deleteComments();
```
9. Head over to the Dev Tools Console Tab and run the snippet.
10. Refresh the [comment section tab](https://www.kogama.com/api/feed/31872096/comment/) and make sure you've gotten rid of your tracks.
