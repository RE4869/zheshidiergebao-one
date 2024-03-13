
const supportTickets = [];


const tickets = [];


window.addEventListener('load', () => {
    const supportForm = document.getElementById('support-form');
    supportForm.addEventListener('submit', handleSupportRequest); 

    displaySupportTickets(); 
});


function handleSupportRequest(event) {
    event.preventDefault(); 

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const issueInput = document.getElementById('issue');

    const name = nameInput.value.trim(); 
    const email = emailInput.value.trim(); 
    const issue = issueInput.value.trim(); 

    if (name !== '' && email !== '' && issue !== '') {
        
        const newSupportTicket = { name, email, issue };
        supportTickets.push(newSupportTicket);

        displaySupportTickets(); 
        nameInput.value = ''; 
        emailInput.value = ''; 
        issueInput.value = ''; 
    }
}


function displaySupportTickets() {
    const supportListElement = document.getElementById('support-list');
    supportListElement.innerHTML = ''; 

    supportTickets.forEach((ticket, index) => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `Name: ${ticket.name}, Email: ${ticket.email}, Issue: ${ticket.issue}`;
        supportListElement.appendChild(listItemElement);
    });
}
