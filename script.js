etf_site_array = [
  { site_name: "finviz.com", url: "https://finviz.com/quote.ashx?t=" },
  { site_name: "seekingalpha.com", url: "https://seekingalpha.com/symbol/" },
  { site_name: "gurufocus.com", url: "https://www.gurufocus.com/etf/" },
  { site_name: "tipranks.com", url: "https://www.tipranks.com/etf/" },
  { site_name: "etf.com", url: "https://www.etf.com/" },
  { site_name: "openinsider.com", url: "http://www.openinsider.com/search?q=" },
  { site_name: "etfdb.com", url: "https://etfdb.com/etf/" },
  { site_name: "etfrc.com", url: "https://www.etfrc.com/" },
  { site_name: "wsj.com", url: "https://www.wsj.com/market-data/quotes/" },
  { site_name: "money.cnn.com", url: "https://money.cnn.com/quote/forecast/forecast.html?symb=" },
  { site_name: "finance.yahoo.com", url: "https://finance.yahoo.com/quote/JPM/analysis?p=" },
];
stocks_site_array = [
  { site_name: "finviz.com", url: "https://finviz.com/quote.ashx?t=" },
  { site_name: "seekingalpha.com", url: "https://seekingalpha.com/symbol/" },
  { site_name: "gurufocus.com", url: "https://www.gurufocus.com/stock/" },
  { site_name: "tipranks.com", url: "https://www.tipranks.com/stocks/" },
  { site_name: "openinsider.com", url: "http://www.openinsider.com/search?q=" },
  { site_name: "wsj.com", url: "https://www.wsj.com/market-data/quotes/" },
  { site_name: "money.cnn.com", url: "https://money.cnn.com/quote/forecast/forecast.html?symb=" },
  { site_name: "finance.yahoo.com", url: "https://finance.yahoo.com/quote/JPM" },
];
function updateSearchResults(input_text) {
  //console.log(input_text.value)
  etf_site_array.forEach((site, index)=>{
    document.getElementById(`btn_${index}`).href = site.url + input_text.value;
    if(index==9) document.getElementById(`btn_${index}`).href = site.url + input_text.value + '/analysis?p=' + input_text.value;
  })
  stocks_site_array.forEach((site, index)=>{
    document.getElementById(`stock_btn_${index}`).href = site.url + input_text.value;
     if(index==7) document.getElementById(`stock_btn_${index}`).href = site.url + input_text.value + '/analysis?p=' + input_text.value;
  })
}
