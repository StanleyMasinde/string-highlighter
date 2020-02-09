let input = document.querySelector('textarea')
let search = document.querySelector('input')
let output = document.querySelector('p')
let button = document.querySelector('button')

output.innerHTML = 'This is your word'

input.addEventListener('keyup', () => {
    output.innerHTML = input.value
})

const matchText = (query) => {
    let qr = new RegExp(query, "gi")
    let match = input.value.replace(qr, `<span class="highlight">${query}</span>`)
    output.innerHTML = match
}

button.addEventListener('click', () => {
    matchText(search.value)
})