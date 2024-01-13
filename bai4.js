let classRoom = [
    "nguyễn tiến duẩn",
    "Hoàng Xuân Hiếu",
    "Hồ Sỹ Hưng",
    "Nguyễn Đức Thuận",
    "đoàn Minh Tùng",
    "Hồ Sỹ Hưng",
    "Lê Trung Hiếu",
    "đoàn vua dep trai vua hoc gioi Hữu Quý"
];

// Câu 1: Tách tên và họ riêng
function separateNameAndSurname(fullName) {
    const parts = fullName.split(' ');
    const lastName = parts.shift();
    const firstName = parts.join(' ');
    return { lastName, firstName };
}

// Câu 2: Thêm một sinh viên vào vị trí bất kỳ trong mảng
function addStudent(student, index) {
    classRoom.splice(index, 0, student);
}

// Câu 3: Xoá một sinh viên khỏi mảng
function deleteStudent(student) {
    const index = classRoom.indexOf(student);
    if (index !== -1) {
        classRoom.splice(index, 1);
    }
}

// Câu 4: Tìm kiếm theo tên (không chứa dấu)
function searchByName(name) {
    const normalizedSearchName = removeVietnameseDiacritics(name.toLowerCase());
    const result = classRoom.filter(student => removeVietnameseDiacritics(student.toLowerCase()).includes(normalizedSearchName));
    return result;
}

// Hàm loại bỏ dấu tiếng Việt
function removeVietnameseDiacritics(str) {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Sử dụng các hàm trên
console.log("Câu 1:", classRoom.map(separateNameAndSurname));
addStudent("Nguyễn Văn A", 2);
console.log("Câu 2:", classRoom);
deleteStudent("Hồ Sỹ Hưng");
console.log("Câu 3:", classRoom);
console.log("Câu 4:", searchByName("Doan Minh Tung"));