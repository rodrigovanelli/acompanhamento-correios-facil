const btnAcompanhar = document.getElementById('link-to-see')

btnAcompanhar.addEventListener('click', (e) => {
    btnAcompanhar.preventDefault
    let melhorRastreio = "https://melhorrastreio.com.br/rastreio/"
    var cod = document.querySelector('input#cod-rastreamento').value
    if (cod) {
        let rastreio = melhorRastreio + cod
        btnAcompanhar.setAttribute('href', rastreio)
    } else {
        btnAcompanhar.setAttribute('href', '#')
    }
})
const linkAcomp = document.querySelector('#btn-ir-link')
setTimeout(() => {
    linkAcomp.style.opacity = 1;
}, 1000)