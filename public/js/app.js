const messageOne = document.querySelector('#tasks-main')
const url = '/tasks'

fetch(url).then((response) => {
    response.json().then((data) => {
        
        var tasksBody = '';
        for (i = 0; i < data.length; i++) {
            tasksBody += '<tr> <td id="' + data[i]._id + '" onclick="deleteTask(' + "'" + data[i]._id + "'" + ')" class="delete">' + 
                        '<img src="/img/close.png" width="10" height="10"></td> <td> ' + data[i].description + ' </td> </tr>'
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
    }).then((data) => {
        console.log(data)
        window.location.href = ""
    })
})

const deleteTask = (id) => {
    fetch('/deleteTask', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            '_id': id
        })
    }).then((result) => {
        return result.json()
    }).then((data) => {
        console.log(data)
        window.location.href = ""
    })
}