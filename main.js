function send() {
    let check = true;
    let hoten = document.getElementById("hoten").value;
    if (hoten == '') {
      alert("Họ tên không được để trống");
      
      flag_success = false;
    }
    let email = document.getElementById("email").value;
    if (email == '') {
      alert("Email không được để trống");
      check = false;
    } else if (!email.endsWith("@gmail.com")) {
      alert("Email phải kết thúc bằng @gmail.com");
      check = false;
    }

    let pass = document.getElementById("pass").value;
    if (pass.length  < 8 ) {
      alert("Pass phải nhập 8 kí tự trở lên");
      check = false;
    }
    let re_pass = document.getElementById("re_pass").value;
    if (re_pass != pass ) {
      alert("Nhập sai re_pass");
      check = false;
    }
    if (check) {
      alert("Đăng ký thành công");
    }
  }
