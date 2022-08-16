const messageOne = document.querySelector('#tasks-main')
const url = '/tasks'

fetch(url).then((response) => {
    response.json().then((data) => {
        
        var tasksBody = '';
        for (i = 0; i < data.length; i++) {
            tasksBody += '<div> ' + data[i].description + ' </div>'
        }

        messageOne.innerHTML = tasksBody
    })
}).then((result) => {
    
})
.catch((e) => {
    console.log('error', e)
})

document.querySelector('#addTask').addEventListener('click', () => {
    document.querySelector('#addTaskForm').style.display = 'block'
})

document.querySelector('#addTaskForm').addEventListener('submit', (e) => {
    e.preventDefault()

    const taskText = document.querySelector('#taskDescription').value
    console.log(taskText)
    fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            'description': taskText
        })
    }).then((result) => {
        return result.json()
    }).then((data) => console.log(data))

    
})