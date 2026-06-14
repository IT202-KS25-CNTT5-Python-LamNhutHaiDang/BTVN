for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
/*
    Nhận định trên sai vì:
        Câu lệnh trên sẽ log ra lần lượt:
        3
        3
        3
        Bởi vì setTimeout sẽ làm hàm log chờ chứ không phải chương trình dừng lại 100ms rồi mới chạy
        thì trong lúc đó biến var i đã từ:
        i = 0
        i = 1
        i = 2
        i = 3
        và sau đó mới chạy hàm log
*/ 