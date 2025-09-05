let users = JSON.parse(localStorage.getItem('users')) || [
    { username: "student1", password: "pass123", role: "student" },
    { username: "teacher1", password: "pass456", role: "teacher" },
    { username: "admin1", password: "admin789", role: "admin" }
];

let schedule = JSON.parse(localStorage.getItem('schedule')) || [];

let timetables = JSON.parse(localStorage.getItem('timetables')) || {
    "9": {
        "A": [
            { period: "1", time: "08:00-09:00", subject: "Math" },
            { period: "2", time: "09:00-10:00", subject: "Science" },
            { period: "3", time: "10:00-11:00", subject: "English" },
            { period: "4", time: "11:00-12:00", subject: "History" },
            { period: "5", time: "12:00-13:00", subject: "Geography" }
        ],
        "B": [
            { period: "1", time: "08:00-09:00", subject: "English" },
            { period: "2", time: "09:00-10:00", subject: "Math" },
            { period: "3", time: "10:00-11:00", subject: "Science" },
            { period: "4", time: "11:00-12:00", subject: "Geography" },
            { period: "5", time: "12:00-13:00", subject: "History" }
        ],
        "C": [
            { period: "1", time: "08:00-09:00", subject: "Science" },
            { period: "2", time: "09:00-10:00", subject: "History" },
            { period: "3", time: "10:00-11:00", subject: "Math" },
            { period: "4", time: "11:00-12:00", subject: "English" },
            { period: "5", time: "12:00-13:00", subject: "Geography" }
        ]
    },
    "10": {
        "A": [
            { period: "1", time: "08:00-09:00", subject: "Physics" },
            { period: "2", time: "09:00-10:00", subject: "Chemistry" },
            { period: "3", time: "10:00-11:00", subject: "Math" },
            { period: "4", time: "11:00-12:00", subject: "English" },
            { period: "5", time: "12:00-13:00", subject: "Biology" }
        ],
        "B": [
            { period: "1", time: "08:00-09:00", subject: "Math" },
            { period: "2", time: "09:00-10:00", subject: "English" },
            { period: "3", time: "10:00-11:00", subject: "Physics" },
            { period: "4", time: "11:00-12:00", subject: "Biology" },
            { period: "5", time: "12:00-13:00", subject: "Chemistry" }
        ],
        "C": [
            { period: "1", time: "08:00-09:00", subject: "Chemistry" },
            { period: "2", time: "09:00-10:00", subject: "Math" },
            { period: "3", time: "10:00-11:00", subject: "Biology" },
            { period: "4", time: "11:00-12:00", subject: "Physics" },
            { period: "5", time: "12:00-13:00", subject: "English" }
        ]
    },
    "11": {
        "A": [
            { period: "1", time: "08:00-09:00", subject: "Calculus" },
            { period: "2", time: "09:00-10:00", subject: "Physics" },
            { period: "3", time: "10:00-11:00", subject: "Chemistry" },
            { period: "4", time: "11:00-12:00", subject: "English" },
            { period: "5", time: "12:00-13:00", subject: "Computer Science" }
        ],
        "B": [
            { period: "1", time: "08:00-09:00", subject: "English" },
            { period: "2", time: "09:00-10:00", subject: "Calculus" },
            { period: "3", time: "10:00-11:00", subject: "Physics" },
            { period: "4", time: "11:00-12:00", subject: "Computer Science" },
            { period: "5", time: "12:00-13:00", subject: "Chemistry" }
        ],
        "C": [
            { period: "1", time: "08:00-09:00", subject: "Chemistry" },
            { period: "2", time: "09:00-10:00", subject: "English" },
            { period: "3", time: "10:00-11:00", subject: "Calculus" },
            { period: "4", time: "11:00-12:00", subject: "Physics" },
            { period: "5", time: "12:00-13:00", subject: "Computer Science" }
        ]
    },
    "12": {
        "A": [
            { period: "1", time: "08:00-09:00", subject: "Advanced Math" },
            { period: "2", time: "09:00-10:00", subject: "Physics" },
            { period: "3", time: "10:00-11:00", subject: "Chemistry" },
            { period: "4", time: "11:00-12:00", subject: "English" },
            { period: "5", time: "12:00-13:00", subject: "Economics" }
        ],
        "B": [
            { period: "1", time: "08:00-09:00", subject: "English" },
            { period: "2", time: "09:00-10:00", subject: "Advanced Math" },
            { period: "3", time: "10:00-11:00", subject: "Physics" },
            { period: "4", time: "11:00-12:00", subject: "Economics" },
            { period: "5", time: "12:00-13:00", subject: "Chemistry" }
        ],
        "C": [
            { period: "1", time: "08:00-09:00", subject: "Chemistry" },
            { period: "2", time: "09:00-10:00", subject: "English" },
            { period: "3", time: "10:00-11:00", subject: "Advanced Math" },
            { period: "4", time: "11:00-12:00", subject: "Physics" },
            { period: "5", time: "12:00-13:00", subject: "Economics" }
        ]
    }
};

let calendarEvents = JSON.parse(localStorage.getItem('calendarEvents')) || [
    { title: "New Year's Day", date: "2025-01-01", type: "holiday" },
    { title: "Sports Day", date: "2025-03-15", type: "event" }
];

let currentUserRole = null;

const loginButton = document.getElementById('login-button');
const loginDropdown = document.getElementById('login-dropdown');
const userOptions = document.getElementById('user-options');
const optionSchedule = document.getElementById('option-schedule');
const optionViewSchedule = document.getElementById('option-view-schedule');
const optionManageUsers = document.getElementById('option-manage-users');
const optionLogout = document.getElementById('option-logout');

const sidebarHome = document.getElementById('sidebar-home');
const sidebarAbout = document.getElementById('sidebar-about');
const sidebarEvents = document.getElementById('sidebar-events');
const sidebarCalendar = document.getElementById('sidebar-calendar');
const sidebarTimetable = document.getElementById('sidebar-timetable');

function updateLoginButton() {
    if (!loginButton || !userOptions || !loginDropdown) return;
    loginButton.textContent = currentUserRole ? `Logged in as ${currentUserRole.charAt(0).toUpperCase() + currentUserRole.slice(1)}` : 'Login';
    userOptions.style.display = currentUserRole ? 'block' : 'none';
    loginDropdown.querySelector('form').style.display = currentUserRole ? 'none' : 'block';
    optionSchedule.style.display = currentUserRole === 'teacher' ? 'block' : 'none';
    optionViewSchedule.style.display = currentUserRole === 'student' ? 'block' : 'none';
    optionManageUsers.style.display = currentUserRole === 'admin' ? 'block' : 'none';
    optionLogout.style.display = currentUserRole ? 'block' : 'none';
}

function setActiveSidebar(item) {
    document.querySelectorAll('.sidebar-menu li').forEach(li => li.classList.remove('active'));
    if (item) item.classList.add('active');
}

function hideAllSections() {
    document.getElementById('home-section').style.display = 'none';
    document.getElementById('about-section').style.display = 'none';
    document.getElementById('events-section').style.display = 'none';
    document.getElementById('calendar-section').style.display = 'none';
    document.getElementById('timetable-section').style.display = 'none';
    document.getElementById('schedule-section').style.display = 'none';
    document.getElementById('view-schedule').style.display = 'none';
    document.getElementById('manage-users-section').style.display = 'none';
    loginDropdown.style.display = 'none';
    const editForm = document.getElementById('edit-user-form');
    if (editForm) editForm.style.display = 'none';
}

function showHome() {
    hideAllSections();
    document.getElementById('home-section').style.display = 'block';
    setActiveSidebar(sidebarHome);
}

function showAbout() {
    hideAllSections();
    document.getElementById('about-section').style.display = 'block';
    setActiveSidebar(sidebarAbout);
}

function showEvents() {
    hideAllSections();
    document.getElementById('events-section').style.display = 'block';
    setActiveSidebar(sidebarEvents);
}

function showCalendar() {
    hideAllSections();
    document.getElementById('calendar-section').style.display = 'block';
    document.getElementById('calendar-error').style.display = 'none';
    document.getElementById('add-event-form').style.display = currentUserRole === 'admin' ? 'block' : 'none';
    renderCalendar();
    setActiveSidebar(sidebarCalendar);
}

function showTimetable() {
    hideAllSections();
    document.getElementById('timetable-section').style.display = 'block';
    document.getElementById('timetable-display').innerHTML = '';
    document.getElementById('timetable-download').style.display = 'none';
    document.getElementById('timetable-error').style.display = 'none';
    populateSections();
    setActiveSidebar(sidebarTimetable);
}

function showSchedule() {
    hideAllSections();
    document.getElementById('schedule-section').style.display = 'block';
    setActiveSidebar(null);
}

function showViewSchedule() {
    hideAllSections();
    document.getElementById('view-schedule').style.display = 'block';
    displaySchedule();
    setActiveSidebar(null);
}

function showManageUsers() {
    hideAllSections();
    document.getElementById('manage-users-section').style.display = 'block';
    displayUsers();
    setActiveSidebar(null);
}

function populateSections() {
    const classSelect = document.getElementById('timetable-class');
    const sectionSelect = document.getElementById('timetable-section');
    const errorMessage = document.getElementById('timetable-error');
    
    sectionSelect.innerHTML = '<option value="">Select Section</option>';
    sectionSelect.disabled = !classSelect.value;

    if (classSelect.value && timetables[classSelect.value]) {
        Object.keys(timetables[classSelect.value]).forEach(section => {
            const option = document.createElement('option');
            option.value = section;
            option.textContent = `Section ${section}`;
            sectionSelect.appendChild(option);
        });
        errorMessage.style.display = 'none';
    } else if (classSelect.value) {
        errorMessage.textContent = 'No sections available for this class.';
        errorMessage.style.display = 'block';
    }
}

function displayTimetable(classId, section) {
    const timetableDisplay = document.getElementById('timetable-display');
    const downloadButton = document.getElementById('timetable-download');
    const errorMessage = document.getElementById('timetable-error');
    timetableDisplay.innerHTML = '';
    errorMessage.style.display = 'none';

    if (!timetables[classId] || !timetables[classId][section]) {
        timetableDisplay.innerHTML = '<p>No timetable available for this class and section.</p>';
        downloadButton.style.display = 'none';
        errorMessage.textContent = 'No timetable available for this class and section.';
        errorMessage.style.display = 'block';
        return;
    }

    const timetable = timetables[classId][section];
    let table = `
        <table>
            <tr>
                <th>Period</th>
                <th>Time</th>
                <th>Subject</th>
            </tr>
    `;
    timetable.forEach(slot => {
        table += `
            <tr>
                <td>${slot.period}</td>
                <td>${slot.time}</td>
                <td>${slot.subject}</td>
            </tr>
        `;
    });
    table += '</table>';
    timetableDisplay.innerHTML = table;
    downloadButton.style.display = 'block';
}

function generateTimetablePDF(classId, section) {
    const timetable = timetables[classId][section];
    let latexContent = `
\\documentclass{article}
\\usepackage{geometry}
\\usepackage{array}
\\usepackage{booktabs}
\\geometry{a4paper, margin=1in}
\\begin{document}
\\begin{center}
{\\large \\textbf{Springfield High School Time Table for Class ${classId} Section ${section}}}
\\vspace{0.5cm}
\\begin{tabular}{|c|c|c|}
\\hline
\\textbf{Period} & \\textbf{Time} & \\textbf{Subject} \\\\
\\hline
`;
    timetable.forEach(slot => {
        latexContent += `${slot.period} & ${slot.time} & ${slot.subject} \\\\ \\hline\n`;
    });
    latexContent += `
\\end{tabular}
\\end{center}
\\end{document}
`;

    const blob = new Blob([latexContent], { type: 'text/latex' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `timetable_class_${classId}_section_${section}.tex`;
    a.click();
    URL.revokeObjectURL(url);
}

let currentDate = new Date(2025, 8, 5); // Set to September 5, 2025

function renderCalendar() {
    const monthYear = document.getElementById('current-month-year');
    const calendarGrid = document.getElementById('calendar-grid');
    calendarGrid.innerHTML = '';

    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    monthYear.textContent = `${currentDate.toLocaleString('default', { month: 'long' })} ${year}`;

    // Days of the week
    const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    days.forEach(day => {
        const div = document.createElement('div');
        div.className = 'header';
        div.textContent = day;
        calendarGrid.appendChild(div);
    });

    // Get first day and number of days in month
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Add empty cells
    for (let i = 0; i < firstDay; i++) {
        const div = document.createElement('div');
        div.className = 'empty';
        calendarGrid.appendChild(div);
    }

    // Add days
    const today = new Date(2025, 8, 5);
    for (let day = 1; day <= daysInMonth; day++) {
        const div = document.createElement('div');
        const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
        div.textContent = day;

        // Highlight today
        if (year === today.getFullYear() && month === today.getMonth() && day === today.getDate()) {
            div.classList.add('today');
        }

        // Highlight holidays and events
        const events = calendarEvents.filter(e => e.date === dateStr);
        if (events.length > 0) {
            const type = events[0].type;
            div.classList.add(type);
            div.title = events.map(e => e.title).join(', ');
        }

        calendarGrid.appendChild(div);
    }
}

loginButton.addEventListener('click', () => {
    loginDropdown.style.display = loginDropdown.style.display === 'block' ? 'none' : 'block';
});

document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;
    const errorMessage = document.getElementById('error-message');

    const user = users.find(u => u.username === username && u.password === password && u.role === role);

    if (user) {
        currentUserRole = role;
        updateLoginButton();
        document.getElementById('login-form').reset();
        document.getElementById('error-message').style.display = 'none';
        if (role === 'teacher') {
            showSchedule();
        } else if (role === 'student') {
            showViewSchedule();
        } else if (role === 'admin') {
            showManageUsers();
        }
    } else {
        errorMessage.textContent = 'Invalid credentials or role';
        errorMessage.style.display = 'block';
    }
});

document.getElementById('schedule-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('class-title').value;
    const date = document.getElementById('class-date').value;
    const time = document.getElementById('class-time').value;

    schedule.push({ title, date, time });
    localStorage.setItem('schedule', JSON.stringify(schedule));
    alert('Class scheduled successfully!');
    document.getElementById('schedule-form').reset();
});

document.getElementById('add-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = document.getElementById('new-username').value;
    const password = document.getElementById('new-password').value;
    const role = document.getElementById('new-role').value;

    if (users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    users.push({ username, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    alert('User added successfully!');
    document.getElementById('add-user-form').reset();
    displayUsers();
});

document.getElementById('edit-user-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const originalUsername = document.getElementById('edit-username-original').value;
    const username = document.getElementById('edit-username').value;
    const password = document.getElementById('edit-password').value;
    const role = document.getElementById('edit-role').value;

    if (username !== originalUsername && users.find(u => u.username === username)) {
        alert('Username already exists!');
        return;
    }

    const index = users.findIndex(u => u.username === originalUsername);
    if (index !== -1) {
        users[index] = { username, password, role };
        localStorage.setItem('users', JSON.stringify(users));
        alert('User updated successfully!');
        document.getElementById('edit-user-form').style.display = 'none';
        document.getElementById('edit-user-form').reset();
        displayUsers();
    }
});

document.getElementById('cancel-edit').addEventListener('click', () => {
    document.getElementById('edit-user-form').style.display = 'none';
    document.getElementById('edit-user-form').reset();
});

document.getElementById('timetable-class').addEventListener('change', () => {
    populateSections();
    document.getElementById('timetable-display').innerHTML = '';
    document.getElementById('timetable-download').style.display = 'none';
    document.getElementById('timetable-error').style.display = 'none';
});

document.getElementById('timetable-submit').addEventListener('click', () => {
    const classId = document.getElementById('timetable-class').value;
    const section = document.getElementById('timetable-section').value;
    const errorMessage = document.getElementById('timetable-error');

    if (!classId) {
        errorMessage.textContent = 'Please select a class.';
        errorMessage.style.display = 'block';
        return;
    }
    if (!section) {
        errorMessage.textContent = 'Please select a section.';
        errorMessage.style.display = 'block';
        return;
    }
    displayTimetable(classId, section);
});

document.getElementById('timetable-download').addEventListener('click', () => {
    const classId = document.getElementById('timetable-class').value;
    const section = document.getElementById('timetable-section').value;
    if (classId && section) {
        generateTimetablePDF(classId, section);
    }
});

document.getElementById('event-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const title = document.getElementById('event-title').value;
    const date = document.getElementById('event-date').value;
    const type = document.getElementById('event-type').value;
    const errorMessage = document.getElementById('calendar-error');

    if (!title || !date) {
        errorMessage.textContent = 'Please fill in all fields.';
        errorMessage.style.display = 'block';
        return;
    }

    calendarEvents.push({ title, date, type });
    localStorage.setItem('calendarEvents', JSON.stringify(calendarEvents));
    alert('Holiday/Event added successfully!');
    document.getElementById('event-form').reset();
    errorMessage.style.display = 'none';
    renderCalendar();
});

document.getElementById('prev-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

document.getElementById('next-month').addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

function displaySchedule() {
    const scheduleList = document.getElementById('schedule-list');
    scheduleList.innerHTML = '';
    schedule.forEach(s => {
        const div = document.createElement('div');
        div.className = 'schedule-item';
        div.textContent = `${s.title} - ${s.date} at ${s.time}`;
        scheduleList.appendChild(div);
    });
}

function displayUsers() {
    const userList = document.getElementById('user-list');
    userList.innerHTML = '';
    users.forEach(u => {
        if (u.role !== 'admin') {
            const div = document.createElement('div');
            div.className = 'user-item';
            div.innerHTML = `${u.username} (${u.role}) <button class="edit" onclick="editUser('${u.username}')">Edit</button><button onclick="deleteUser('${u.username}')">Delete</button>`;
            userList.appendChild(div);
        }
    });
}

function editUser(username) {
    const user = users.find(u => u.username === username);
    if (user) {
        document.getElementById('edit-username-original').value = user.username;
        document.getElementById('edit-username').value = user.username;
        document.getElementById('edit-password').value = user.password;
        document.getElementById('edit-role').value = user.role;
        document.getElementById('edit-user-form').style.display = 'block';
    }
}

function deleteUser(username) {
    const index = users.findIndex(u => u.username === username);
    if (index !== -1) {
        users.splice(index, 1);
        localStorage.setItem('users', JSON.stringify(users));
        document.getElementById('edit-user-form').style.display = 'none';
        displayUsers();
    }
}

function logout() {
    currentUserRole = null;
    updateLoginButton();
    showHome();
}

optionSchedule.addEventListener('click', showSchedule);
optionViewSchedule.addEventListener('click', showViewSchedule);
optionManageUsers.addEventListener('click', showManageUsers);
optionLogout.addEventListener('click', logout);

sidebarHome.addEventListener('click', showHome);
sidebarAbout.addEventListener('click', showAbout);
sidebarEvents.addEventListener('click', showEvents);
sidebarCalendar.addEventListener('click', showCalendar);
sidebarTimetable.addEventListener('click', showTimetable);

updateLoginButton();
showHome();