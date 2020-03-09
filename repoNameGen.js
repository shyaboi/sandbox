repoNamePrefixArr = ['Rad', 'Dope', 'Gnarly','Sweet','Electric','Ledgendary','Hott','Cool','Nifty','Spiffy','Tubular']
repoNameSuffixArr = ['Radness', 'Dopeness', 'Gnar','Sweetness','Electric','Ledgend','Hottness','Coolness','Niftyness','Spiffyness']
pword = prompt("What Is the Theme Of your Project?")

var namer = function(pword){
 dong = repoNamePrefixArr[Math.floor(Math.random()*repoNamePrefixArr.length)]
 ding = repoNameSuffixArr[Math.floor(Math.random()*repoNameSuffixArr.length)]

    console.log(`${dong} ` + pword + ` ${ding}`)
}

function cap(string) 
{
    return string.charAt(0).toUpperCase() + string.slice(1);
}


namer(cap(pword))
var para = document.createElement("P")
para.innerText = `${dong} ` + cap(pword) + ` ${ding}`
document.body.appendChild(para)