class Currency{
    constructor(){
        this.url = "https://api.freecurrencyapi.com/v1/latest?apikey=fca_live_sIsilPxLQWClEfr9AYOAxD7Zu9DINMKUP0N5RABM&base_currency="
    }

 async exchange(amount,firstCurrency, secondCurrency){
    const response=await fetch(`${this.url}${firstCurrency}`)
    const result = await response.json();
    const exchangeresult= amount*result.data[secondCurrency]
    return exchangeresult;
}
}
