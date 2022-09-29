const addToDb = (data) => {
    localStorage.setItem('breakTime', JSON.stringify(data));
}

export {addToDb};