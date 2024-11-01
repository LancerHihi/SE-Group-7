const dropZone = document.getElementById('dropZone');
const fileInput = document.getElementById('fileInput');
const dropText = document.getElementById('dropText');
const fileList = document.getElementById('fileList');
const dropOverlay = document.getElementById('dropOverlay');
const deleteButton = document.getElementById('deleteButton');
const attachButton = document.getElementById('attachButton');
let files = new Set();
let isContainFile = false;

const button = document.querySelector('.confirm-button');
// Hàm tạo icon dựa vào loại file
function getFileIcon(fileName) {
    const ext = fileName.split('.').pop().toLowerCase();
    switch(ext) {
        case 'pdf': return '📄';
        case 'doc':
        case 'docx': return '📝';
        case 'txt': return '📃';
        default: return '📎';
    }
}

// Hàm thêm file vào danh sách
function addFileToList(file) {
    const fileId = `file-${Date.now()}-${file.name}`;
    const li = document.createElement('li');
    li.className = 'file-item';
    li.setAttribute('data-file-id', fileId);
    
    li.innerHTML = `
        <div class="file-info">
            <span class="file-icon">${getFileIcon(file.name)}</span>
            <p class="file-name">${file.name}</p>
        </div>
    `;
    
    fileList.appendChild(li);
    files.add({id: fileId, file: file});
    button.classList.add("button-trigger");
    button.disabled = false;
    updateDropText();
}

// Cập nhật text hiển thị
function updateDropText() {
    dropText.style.display = files.size === 0 ? 'block' : 'none';
}

// Xóa tất cả file
function clearAllFiles() {
    fileList.innerHTML = '';
    files.clear();
    button.classList.remove("button-trigger");
    button.disabled = true;
    updateDropText();
}

// Xử lý khi chọn file
fileInput.addEventListener('change', function(e) {
    Array.from(e.target.files).forEach(file => addFileToList(file));
    fileInput.value = ''; // Reset input để có thể chọn lại file đã xóa
});

// Xử lý nút delete
deleteButton.addEventListener('click', function(e) {
    e.stopPropagation();
    clearAllFiles();
});

// Xử lý nút attach
attachButton.addEventListener('click', function(e) {
    e.stopPropagation();
    fileInput.click();
});

// Xử lý khi click vào vùng drop
dropZone.addEventListener('click', function(e) {
    if (e.target === dropZone || e.target === dropText) {
        fileInput.click();
    }
});

// Xử lý kéo thả
dropZone.addEventListener('dragover', function(e) {
    e.preventDefault();
    dropOverlay.style.display = 'block';
});

dropZone.addEventListener('dragleave', function(e) {
    e.preventDefault();
    dropOverlay.style.display = 'none';
});

dropZone.addEventListener('drop', function(e) {
    e.preventDefault();
    dropOverlay.style.display = 'none';
    Array.from(e.dataTransfer.files).forEach(file => addFileToList(file));
});

button.addEventListener('click', () => {
    if(!button.disabled) {
        console.log("ok");
    }
})