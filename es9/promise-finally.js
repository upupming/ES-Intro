new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('hi')), 300); //If value should be retured, do it inside resolve()
})
    .then(data => console.log(data))
    .catch(error => console.log(error))
    .finally(() => console.log('finished'));

//es9 allows you to use finally to run code after a promise, regardless if it's resolved or rejected