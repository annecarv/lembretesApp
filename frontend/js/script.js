const tbody = document.querySelector('tbody')
const addForm = document.querySelector('.add-form')
const inputTask = document.querySelector('.input-task')

const fetchNotes = async () => {
  const response = await fetch('http://localhost:5500/lembretes')
  const notes = await response.json()
  return notes
}

const addNotes = async (event) => {
  event.preventDefault()

  const notes = { note: inputTask.value }

  await fetch('http://localhost:5500/lembretes', {
    method: 'post',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(notes),
  })


  loadNotes()
  inputTask.value = ''
}

const deleteTask = async (id) => {
  await fetch(`http://localhost:5500/lembretes/${id}`, {
    method: 'delete',
  })

  loadNotes()
}

const updateTask = async ({ id, note, status }) => {

  await fetch(`http://localhost:5500/lembretes/${id}`, {
    method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ note, status }),
  })

  loadNotes()
}



const formatDate = (dateUTC) => {
  const options = { dateStyle: 'long', timeStyle: 'short' }
  const date = new Date(dateUTC).toLocaleString('pt-br', options)
  return date
}

const createElement = (tag, innerText = '', innerHTML = '') => {
  const element = document.createElement(tag)

  if (innerText) {
    element.innerText = innerText
  }

  if (innerHTML) {
    element.innerHTML = innerHTML
  }

  return element
}

const createSelect = (value) => {
  const options = `
    <option value="pendente">pendente</option>
    <option value="em andamento">em andamento</option>
    <option value="concluída">concluída</option>
  `

  const select = createElement('select', '', options)

  select.value = value

  return select
}

const createRow = (task) => {

  const { id, note, created_at, status } = task

  const tr = createElement('tr')
  const tdnote = createElement('td', note)
  const tdCreatedAt = createElement('td', formatDate(created_at))
  const tdStatus = createElement('td')
  const tdActions = createElement('td')

  const select = createSelect(status)

  select.addEventListener('change', ({ target }) => updateTask({ ...task, status: target.value }))

  const editButton = createElement('button', '', '<span class="material-symbols-outlined">edit</span>')
  const deleteButton = createElement('button', '', '<span class="material-symbols-outlined">delete</span>')
  
  const editForm = createElement('form')
  const editInput = createElement('input')

  editInput.value = note
  editForm.appendChild(editInput)
  
  editForm.addEventListener('submit', (event) => {
    event.preventDefault()
    
    updateTask({ id, note: editInput.value, status })
  })

  editButton.addEventListener('click', () => {
    tdnote.innerText = ''
    tdnote.appendChild(editForm)
  })

  editButton.classList.add('btn-action')
  deleteButton.classList.add('btn-action')

  deleteButton.addEventListener('click', () => deleteTask(id))
  
  tdStatus.appendChild(select)

  tdActions.appendChild(editButton)
  tdActions.appendChild(deleteButton)

  tr.appendChild(tdnote)
  tr.appendChild(tdCreatedAt)
  tr.appendChild(tdStatus)
  tr.appendChild(tdActions)

  return tr
}

const loadNotes = async () => {
  const tasks = await fetchNotes()

  tbody.innerHTML = ''

  tasks.forEach((task) => {
    const tr = createRow(task)
    tbody.appendChild(tr)
  })
}


addForm.addEventListener('submit', addNotes)

loadNotes()