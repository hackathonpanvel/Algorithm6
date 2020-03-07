const leadForm = document.querySelector(".formone");
const forecast = new Forecast();

const updateUI = data => {
  details.innerHTML = `
  <div class="card shadow border-primary mb-3" style="max-width: 18rem;">
  <div class="card-header"></div>
  <div class="card-body text-primary">
    <h5 class="card-title">Primary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
  `;
};

leadForm.addEventListener("submit", e => {
  e.preventDefault();

  const lang = leadForm.lang.value;
  leadForm.reset();

  forecast
    .getLead(lang)
    .then(data => console.log(data))
    .catch(err => console.log(err));
});
