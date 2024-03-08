# Lexia XSS Vulnerability
* You can use the `logoutUrl` url parameter to execute arbitrary JavaScript code (such as bookmarklets) in Lexia PowerUp, and there's virtually no type of CSP to prevent unsafe `eval`. You can also use this for `apiUrl` as that is also encoded in the URL, as long as you're logged in (it also stores your auth token in the url params too :skull:).
* When you try it, it will give an error, click "Return to Login" to trigger the XSS code <br>
Example: https://www.lexiapowerup.com/?siteId=_&logoutUrl=%6A%61%76%61%73%63%72%69%70%74%3A%61%6C%65%72%74%28%27%72%65%61%6C%27%29

**Note**: `siteId` can be anything, it will not matter. Only `logoutUrl` matters.
* You may need to percent encode the entire code snipper, go to 
<https://onlinetexttools.com/url-encode-text> and paste in the code and click Escape All Text Characters for it to work properly, then paste the output into the URL
