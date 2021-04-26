const BASE_URL = 'https://jsonplaceholder.typicode.com/users'
const userTable = document.getElementById('users-table')

fetch(BASE_URL)
    .then((data) => data.json())
    .then((users) => {
        users.map((user) => {
            createTableRow(`
                <td>${user.id}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.website}</td>
            `)
        })
    })
    .catch((err) => {
        createTableRow(
            `<td colspan="4" style="color: red;font-weight: 600;">Internal Server Error</td>`
        )
        console.error(err.message)
    })

/**
 * @function createTableRow
 * @description create a table row with <tr> tag and push text with innerHTML
 * @param { string } text
 * @return { void }
 */
const createTableRow = (text) => {
    const tableRow = document.createElement('tr')
    userTable.appendChild(tableRow)
    tableRow.innerHTML = text
}
