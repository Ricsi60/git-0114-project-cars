const btn = document.getElementById("btn");
const result = document.getElementById(".result");

btn.addEventListener("click", async () => {

    const res = await fetch("cars.json");
    const data = await res.json();
    console.log(data);

    let output ="";

    data.map(car =>{

        output += `
        
        <div class="car">
            <h2>Márka: ${car.marka}</h2>
            <h2>Típus: ${car.tipus}</h2>
            <h3>Évjára: ${car.evjarat}</h3>`;
    })
    result.innerHTML = output;
})