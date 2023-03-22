const tbody = document.querySelector('tbody')

const fetchNotes = async () => {
    const data = await fetch('http://localhost:3333/lembretes') 

    constdataConvertJson = await data.json()

    return data
}

const createElement = (tag, innerText = '') => {
    const element = document.createElement(tag)
    element.innerText = innerText
    return element
}

const note = {
    id
}

const createRowTr = (note) => {
    const tr = createElement('tr')
    const tdTitle = createElement('td', 'Lembrete')
    const tdStatus = createElement('td')
    const tdActions = createElement('td')
    
    const editButton = createElement('button')

    tr.appendChild(tdTitle)
    tr.appendChild(editButton)
    tbody.appendChild(tr)
    tbody.appendChild(tr)
}