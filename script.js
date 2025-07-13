document.addEventListener('DOMContentLoaded', function() {
    // Particles.js konfigürasyonu
    particlesJS('particles-js', {
        particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            line_linked: { enable: true, distance: 150, color: "#ffffff", opacity: 0.3, width: 1 },
            move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onhover: { enable: true, mode: "repulse" },
                onclick: { enable: true, mode: "push" }
            }
        }
    });

    // Tema değiştirme butonu
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    document.documentElement.setAttribute('data-theme', currentTheme);
    updateThemeIcon(currentTheme);
    
    themeToggle.addEventListener('click', function() {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });

    // Sayfa yüklendiğinde görevleri yükle
    loadTasks();
    updateTaskCount();
    
    // Filtreleme butonlarına tıklama olayı ekle
    document.querySelectorAll('.filter').forEach(filter => {
        filter.addEventListener('click', function() {
            document.querySelectorAll('.filter').forEach(f => f.classList.remove('active'));
            this.classList.add('active');
            
            const filterType = this.getAttribute('data-filter');
            filterTasks(filterType);
        });
    });
    
    // Enter tuşu ile görev ekleme
    document.getElementById('input-box').addEventListener('keypress', function(e) {
        if (e.key === 'Enter') {
            addTask();
        }
    });
});

function updateThemeIcon(theme) {
    const icon = document.querySelector('#theme-toggle i');
    if (theme === 'dark') {
        icon.classList.replace('fa-moon', 'fa-sun');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
    }
}

function addTask() {
    const inputBox = document.getElementById('input-box');
    const taskText = inputBox.value.trim();
    
    // Eğer input boşsa uyarı ver ve fonksiyondan çık
    if (taskText === '') {
        alert("Lütfen bir görev girin!");
        return; // Fonksiyonu burada sonlandır
    }
    
    // Yeni görev öğesi oluştur
    const li = document.createElement('li');
    li.innerHTML = `
        <div class="task-content">
            <input type="checkbox" class="task-checkbox">
            <span class="task-text">${taskText}</span>
        </div>
        <span class="delete-task"><i class="fas fa-trash"></i></span>
    `;
    
    // Listeye ekle
    document.getElementById('list-container').appendChild(li);
    
    // Input'u temizle
    inputBox.value = '';
    
    // Checkbox için event listener ekle
    const checkbox = li.querySelector('.task-checkbox');
    checkbox.addEventListener('change', function() {
        li.classList.toggle('completed');
        saveTasks();
        updateTaskCount();
    });
    
    // Sil butonu için event listener ekle
    const deleteBtn = li.querySelector('.delete-task');
    deleteBtn.addEventListener('click', function() {
        li.remove();
        saveTasks();
        updateTaskCount();
    });
    
    // Görevleri kaydet
    saveTasks();
    updateTaskCount();
}
    
    const deleteBtn = li.querySelector('.delete-task');
    deleteBtn.addEventListener('click', function() {
        li.style.animation = 'slideOut 0.3s forwards';
        li.addEventListener('animationend', function() {
            li.remove();
            saveTasks();
            updateTaskCount();
        });
    });
    
    saveTasks();
    updateTaskCount();
    showAlert('Görev eklendi!', 'success');


function showAlert(message, type = 'error') {
    const alert = document.createElement('div');
    alert.className = `alert ${type}`;
    alert.textContent = message;
    document.body.appendChild(alert);
    
    setTimeout(() => {
        alert.style.animation = 'fadeOut 0.5s forwards';
        alert.addEventListener('animationend', () => alert.remove());
    }, 3000);
}

function saveTasks() {
    const tasks = [];
    document.querySelectorAll('#list-container li').forEach(task => {
        tasks.push({
            text: task.querySelector('.task-text').textContent,
            completed: task.classList.contains('completed')
        });
    });
    
    localStorage.setItem('todo-tasks', JSON.stringify(tasks));
}

function loadTasks() {
    const savedTasks = localStorage.getItem('todo-tasks');
    if (savedTasks) {
        const tasks = JSON.parse(savedTasks);
        
        tasks.forEach(task => {
            const li = document.createElement('li');
            if (task.completed) {
                li.classList.add('completed');
            }
            
            li.innerHTML = `
                <div class="task-content">
                    <input type="checkbox" class="task-checkbox" ${task.completed ? 'checked' : ''}>
                    <span class="task-text">${task.text}</span>
                </div>
                <span class="delete-task"><i class="fas fa-trash"></i></span>
            `;
            
            document.getElementById('list-container').appendChild(li);
            
            const checkbox = li.querySelector('.task-checkbox');
            checkbox.addEventListener('change', function() {
                li.classList.toggle('completed');
                saveTasks();
                updateTaskCount();
            });
            
            const deleteBtn = li.querySelector('.delete-task');
            deleteBtn.addEventListener('click', function() {
                li.style.animation = 'slideOut 0.3s forwards';
                li.addEventListener('animationend', function() {
                    li.remove();
                    saveTasks();
                    updateTaskCount();
                });
            });
        });
    }
}

function filterTasks(filterType) {
    const tasks = document.querySelectorAll('#list-container li');
    
    tasks.forEach(task => {
        switch(filterType) {
            case 'all':
                task.style.display = 'flex';
                break;
            case 'pending':
                task.style.display = task.classList.contains('completed') ? 'none' : 'flex';
                break;
            case 'completed':
                task.style.display = task.classList.contains('completed') ? 'flex' : 'none';
                break;
        }
    });
}

function updateTaskCount() {
    const pendingTasks = document.querySelectorAll('#list-container li:not(.completed)').length;
    document.getElementById('pending-count').textContent = pendingTasks;
}

function clearCompleted() {
    const completedTasks = document.querySelectorAll('#list-container li.completed');
    
    if (completedTasks.length === 0) {
        showAlert('Tamamlanmış görev bulunamadı!');
        return;
    }
    
    if (confirm('Tamamlanmış tüm görevleri silmek istediğinize emin misiniz?')) {
        completedTasks.forEach(task => {
            task.style.animation = 'slideOut 0.3s forwards';
            task.addEventListener('animationend', function() {
                task.remove();
                saveTasks();
                updateTaskCount();
            });
        });
        showAlert('Tamamlanmış görevler temizlendi!', 'success');
    }
}