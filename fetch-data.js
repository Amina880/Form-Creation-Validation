async function fetchUserData(){
    const  apiUrl = 'https://jsonplaceholder.typicode.com/users'
    const dataContainer = document.getElementById('api-data')
    try{
        const response = await fetch(apiUrl);
        const users = await response.json();
        dataContainer.innerHTML = '';
        const userList = document.createElement('ul');
        users.array.forEach(user => {
            const list1 = document.createElement('li');
            list1.textContent = user.name;
            userList.appendChild(list1);
        });
        dataContainer.appendChild(userList);
    }
    catch(error){
        dataContainer.innerHTML = '';
        dataContainer.textContent = 'Failed to load user data.';
    }
}
document.addEventListener('DOMContentLoaded', function(){
    fetchUserData();
})