javascript
const state = {
    user: "Admin",
    privileges: ["read", "write"]
};

/*
    Nhận định trên sai vì:

    Spread Operator (...) không tạo deep copy.

    Nếu thuộc tính là number, string,...
    thì sẽ sao chép giá trị.

    Nhưng nếu là object hoặc array lồng nhau
    thì chỉ sao chép địa chỉ.

    Nghĩa là object cũ và object mới
    vẫn dùng chung object/array bên trong.

    Nếu sửa trực tiếp array đó
    thì cả hai đều sẽ bị thay đổi.

    Muốn không ảnh hưởng object cũ
    thì phải tạo một array mới.
*/

// Cách làm đúng:

const newState = {
    ...state,
    privileges: [...state.privileges, "delete"]
};

console.log(state);

console.log(newState);
