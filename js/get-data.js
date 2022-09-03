// Price
const httpPrice = new XMLHttpRequest();
httpPrice.onload = function() {
  const data = this.responseText;
  document.getElementById("price").innerHTML = Number(data).toFixed(4);
  document.getElementById('usd').classList.remove('d-none');
  document.getElementById('price').classList.add('indicator-data');
}
httpPrice.open("GET", "https://chainz.cryptoid.info/boli/api.dws?q=ticker.usd");
httpPrice.send();

// Hashrate

const httpHashrate = new XMLHttpRequest();
httpHashrate.onload = function() {
  const data = this.responseText;
  document.getElementById("hashrate").innerHTML = Number(data).toFixed(2);
  document.getElementById('ghs').classList.remove('d-none');
  document.getElementById('hashrate').classList.add('indicator-data');
}
httpHashrate.open("GET", "https://chainz.cryptoid.info/boli/api.dws?q=hashrate");
httpHashrate.send();

// Master Nodes

const httpMasterNodes = new XMLHttpRequest();
httpMasterNodes.onload = function() {
  const data = JSON.parse(this.responseText);
  document.getElementById("masterNodes").innerHTML = data.masterNodeCount;
  document.getElementById('masterNodes').classList.add('indicator-data');
}
httpMasterNodes.open("GET", "https://chainz.cryptoid.info/boli/api.dws?q=masternodeinfo");
httpMasterNodes.send();