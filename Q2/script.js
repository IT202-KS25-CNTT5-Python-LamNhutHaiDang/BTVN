const users = [
    {id: 1, role: 'admin', active: true},
    {id: 2, role: 'user', active: false},
    {id: 3, role: 'admin', active: true}
]
/*
    Nhận định trên sai vì:

    Hàm map() sẽ duyệt qua tất cả các phần tử của mảng và luôn tạo ra
    một mảng mới có số lượng phần tử bằng với mảng ban đầu.

    Nếu phần tử thỏa mãn điều kiện:
        role === "admin" && active === true
    thì sẽ return id.

    Nếu không thỏa mãn điều kiện thì sẽ không return gì,
    nên giá trị của phần tử đó sẽ là undefined.

    kết quả nếu dùng map():
        [1, undefined, 3]

    Vì vậy chỉ dùng map() kết hợp if sẽ không tạo được
    một mảng "nguyên sạch" chỉ chứa id.
*/

// Hàm chuẩn:
// Trả về object:
const objects = users.filter(user => {
    if (user.role == 'admin' && user.active) {
        return user.id;
    }
});

console.log(objects);

// Trả về mỗi id:
const ids = users.filter(user => {
    if (user.role == 'admin' && user.active) {
        return user.id;
    }
}).map(user => {
    user.id;
});
console.log(ids);
