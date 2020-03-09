repoNamePrefixArr = ['Rad', 'Dope', 'Gnarly','Sweet','Electric','Ledgendary','Hott','Cool','Nifty','Spiffy']
repoNameSuffixArr = ['Radness', 'Dopeness', 'Gnar','Sweetness','Electric','Ledgend','Hottness','Coolness','Niftyness','Spiffyness']
pword = prompt("What Is the Theme Of your Project?")

var namer = function(pword){
 dong = repoNamePrefixArr[Math.floor(Math.random()*repoNamePrefixArr.length)]
 ding = repoNameSuffixArr[Math.floor(Math.random()*repoNameSuffixArr.length)]

    console.log(`${dong} ` + pword + ` ${ding}`)
}
console.log(namer(pword))
var para = document.createElement("P")
para.innerText = `${dong} ` + pword + ` ${ding}`
document.body.appendChild(para)