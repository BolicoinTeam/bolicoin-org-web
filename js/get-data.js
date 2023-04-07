function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.text())
    .then((data) => callback(data))
    .catch((error) => console.error('Error fetching data:', error));
}

function updateElement(elementId, value, classToAdd, classToRemove) {
  const element = document.getElementById(elementId);
  element.innerHTML = value;
  element.classList.add(classToAdd);

  if (classToRemove) {
    element.classList.remove(classToRemove);
  }
}

// Price
fetchData('https://chainz.cryptoid.info/boli/api.dws?q=ticker.usd', (data) => {
  const price = Number(data).toFixed(4);
  updateElement('price', price, 'indicator-data', 'd-none');
  document.getElementById('usd').classList.remove('d-none');
});

// Hashrate
fetchData('https://chainz.cryptoid.info/boli/api.dws?q=hashrate', (data) => {
  const hashrate = Number(data).toFixed(2);
  updateElement('hashrate', hashrate, 'indicator-data', 'd-none');
  document.getElementById('ghs').classList.remove('d-none');
});

// Master Nodes
fetchData('https://chainz.cryptoid.info/boli/api.dws?q=masternodeinfo', (data) => {
  const parsedData = JSON.parse(data);
  updateElement('masterNodes', parsedData.masterNodeCount, 'indicator-data');
});