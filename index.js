async function temp() {
    await fetch('https://movie-quote-api.herokuapp.com/v1/quote')
        .then(data => {
            return data.json();
        })
        .then(update => {
            console.log(update);
        });
}