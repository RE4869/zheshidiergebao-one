// 假设 supportTickets 是一个包含用户技术支持请求的数组
const supportTickets = [];

// 假设 tickets 是一个包含用户技术支持信息的数组
const tickets = [];

// 当页面加载完成时执行初始化操作
window.addEventListener('load', () => {
    const supportForm = document.getElementById('support-form');
    supportForm.addEventListener('submit', handleSupportRequest); // 监听技术支持表单提交事件

    displaySupportTickets(); // 初始化时显示技术支持请求列表
});

// 处理技术支持表单提交事件
function handleSupportRequest(event) {
    event.preventDefault(); // 阻止表单默认提交行为

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const issueInput = document.getElementById('issue');

    const name = nameInput.value.trim(); // 获取输入的姓名
    const email = emailInput.value.trim(); // 获取输入的邮箱
    const issue = issueInput.value.trim(); // 获取输入的问题描述

    if (name !== '' && email !== '' && issue !== '') {
        // 创建新的技术支持请求对象并添加到技术支持请求数组中
        const newSupportTicket = { name, email, issue };
        supportTickets.push(newSupportTicket);

        displaySupportTickets(); // 添加技术支持请求后刷新列表
        nameInput.value = ''; // 清空输入框
        emailInput.value = ''; // 清空输入框
        issueInput.value = ''; // 清空输入框
    }
}

// 显示技术支持请求列表
function displaySupportTickets() {
    const supportListElement = document.getElementById('support-list');
    supportListElement.innerHTML = ''; // 清空技术支持请求列表

    supportTickets.forEach((ticket, index) => {
        const listItemElement = document.createElement('li');
        listItemElement.textContent = `Name: ${ticket.name}, Email: ${ticket.email}, Issue: ${ticket.issue}`;
        supportListElement.appendChild(listItemElement);
    });
}
