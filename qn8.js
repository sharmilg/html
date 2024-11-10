 'use script'
    const startyear = parseInt(prompt('Enter the start year'));
    const endyear = parseInt(prompt('Enter the end year'));
    for (let year = startyear; year <= endyear; year++)
    {
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            alert(`<li>${year}</li>`)
        }
    }