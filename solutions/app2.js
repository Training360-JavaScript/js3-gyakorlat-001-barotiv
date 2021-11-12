const HU = {
    date: (hunDate) => new Intl.DateTimeFormat('hu-HU').format(hunDate),
    curreny: (hunCurrency) => new Intl.NumberFormat('hu-HU', {
        style: 'currency',
        currency: 'HUF'
    }).format(hunCurrency),
    list: (array) => `${array[0]}, ${array[1]} és ${array[2]}`
}

export default HU