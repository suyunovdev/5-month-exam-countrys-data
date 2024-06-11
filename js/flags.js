function getQueryParams() {
  let params = new URLSearchParams(window.location.search);
  return {
    name: params.get("name"),
    population: params.get("population"),
    region: params.get("region"),
    capital: params.get("capital"),
    flag: params.get("flag"),
    subregion: params.get("subregion"),
    nativeName: params.get("nativeName"),
    official: params.get("official"),
  };
}

function displayDetails(details) {
  const container = document.getElementById("details-container");
  container.innerHTML = `
    <img src="${details.flag}"alt="Flag of ${details.name}">
    <div class="words">
      <div class="words1">
        <div class="word1">
          <h1>${details.name}</h1>
          <p><strong>Native Name:</strong> ${details.common}</p>
          <p><strong>Population:</strong> ${details.population}</p>
          <p><strong>Region:</strong> ${details.region}</p>
          <p><strong>Subregion Region:</strong> ${details.subregion}</p>
          <p><strong>Capital:</strong> ${details.capital}</p>
        </div>
        <div class="word2">
          <p><strong>Top Level Domain:</strong> ${details.tld}</p>
          <p><strong>Currencies:</strong> ${details.currencies}</p>
          <p><strong>Languages:</strong> ${details.languages}</p>
        </div>
      </div>
      <div class="ones">
        <p><strong>Border Countries:</strong> ${details.borders}</p>
      </div>
    </div>
  `;
}

document.addEventListener("DOMContentLoaded", () => {
  const details = getQueryParams();
  displayDetails(details);
});

// function displayDetails(details) {
//   const container = document.getElementById("details-container");

//   if (details.name) { // Ma'lumotlar mavjudligini tekshiramiz
//     container.innerHTML = `
//       <img src="${details.flag}" width="500px" height="351px" alt="Flag of ${details.name}">
//       <div class="words">
//         <div class="words1">
//           <div class="word1">
//             <h1>${details.name}</h1>
//             <p><strong>Native Name:</strong> ${details.nativeName}</p>
//             <p><strong>Population:</strong> ${details.population}</p>
//             <p><strong>Region:</strong> ${details.region}</p>
//             <p><strong>Subregion Region:</strong> ${details.subregion}</p>
//             <p><strong>Capital:</strong> ${details.capital}</p>
//           </div>
//           <div class="word2">
//             <p><strong>Top Level Domain:</strong> ${details.tld}</p>
//             <p><strong>Currencies:</strong> ${details.currencies}</p>
//             <p><strong>Languages:</strong> ${details.languages}</p>
//           </div>
//         </div>
//         <div class="ones">
//           <p><strong>Border Countries:</strong> ${details.borders}</p>
//         </div>
//       </div>
//     `;
//   } else {
//     container.innerHTML = "<p>No details available.</p>"; // Agar malumotlar mavjud emas bo'lsa
//   }
// }
