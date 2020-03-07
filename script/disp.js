class Forecast {
  constructor() {
    this.leadURL = "http://127.0.0.1:5000/api/leads/";
  }

  async getLead(lang) {
    const query = `${lang}`;

    const response = await fetch(this.leadURL + query, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      }
    });
    const data = await response.json();
    return data[0];
  }
}
