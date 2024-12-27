function checkPassword() {
    const correctPassword = "MIRACULOUS"; // To'g'ri parol
    const userPassword = prompt("Parolni kiriting:");

    if (userPassword === correctPassword) {
      alert("Qoyil, yozgan paroling to'g'ri");
      window.location.href = "matem.html"; // Yo'naltiriladigan sahifa
      } else {
          alert("Parol noto'g'ri! Qaytadan urinib ko'ring.");
            }
        }
