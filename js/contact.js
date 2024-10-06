function validateContactForm(username, email, phoneNum, message) {
    if (!username || !email || !phoneNum || !message) {
      // khong nhap du cac truong
      alert("Vui lòng điền đầy đủ thông tin!");
      return false;
    } else if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
      // email khong dung dinh dang
      alert("Vui lòng nhập email đúng định dạng!");
      return false;
    } else if (phoneNum.length < 10) {
      // phone num khong dung dinh dang
      alert("Vui lòng nhập số điện thoại đúng định dạng!");
      return false;
    } else {
      return true;
    }
  }
  
  // bat su kien cho nut contact
  document.getElementById("contact-btn").onclick = function (e) {
    // chan luong xu ly mac dinh cua form
    e.preventDefault();
    // lay thong tin tu form nhap
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const phoneNum = document.getElementById("phoneNum").value.trim();
    const message = document.getElementById("message").value.trim();
    //   kiem tra thong tin nhap vao
    if (validateContactForm(username, email, phoneNum, message)) {
      // thong bao da nhan duoc msg tu nguoi dung
      alert(
        "Chúng tôi đã nhận được mail của bạn với nội dung: '" + message + "'"
      );
      // reload lai form
      location.reload();
    }
  };

// Get the button:
  mybutton = document.getElementById("myBtn");
  
  //Khi người dùng cuộn xuống 20px từ đầu trang, hiển thị các nút
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction(){
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	  mybutton.style.display = "block";
	} else {
	  mybutton.style.display = "none";
	}
  }
  //Khi người dùng nhấp vào nút,  chuyển lên đầu trang
  function topFunction(){
	document.body.scrollTop = 0; // For Safari
	document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
