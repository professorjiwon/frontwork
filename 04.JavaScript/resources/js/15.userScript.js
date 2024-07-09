function validate() {
    const idInput = document.getElementById('userId');
    const pwdInput = document.getElementById('userPw');
    const chPwdInput = document.getElementById('checkPw');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // id
    // 첫글자는 반드시 영문자로 시작하고, 영문자, 숫자 포함 총 4~12자로 입력하시오.
    // let reg = /^[a-z][a-z0-9]{3,11}$/
    let reg = /^[a-z][a-z\d]{3,11}$/;
    if(!reg.test(idInput.value)) {
        alert("유효한 아이디가 아닙니다.");
        idInput.value ="";
        idInput.focus();
        return false;
    }

    // 비밀번호
    // 영문자, 숫자, 특수문자(!@#$%^&*)로 총 8~15자로 입력하시오.
    let pwReg = /^[a-z\d!@#$%^&*]{8,15}$/i;
    if(!pwReg.test(pwdInput.value)) {
        alert("유효한 비밀번호가 아닙니다.");
        pwdInput.value = "";
        pwdInput.focus();
        return false;
    }

    // 비밀번호 일치 여부
    if(pwdInput.value != chPwdInput.value) {
        alert("동일한 비밀번호가 아닙니다.");
        chPwdInput.value = "";
        chPwdInput.focus();
        return false;
    }

    // 이름
    let nameReg = /^[가-힣]{2,}$/;
    if(!nameReg.test(nameInput.value)) {
        alert("유효한 이름이 아닙니다.");
        nameInput.value = "";
        nameInput.focus();
        return false;
    }

    // 이메일
    // let emailReg = /^[a-zA-Z0-9_]+@[a-zA-Z0-9_]+\.[a-zA-Z0-9_]+(\.[a-zA-Z0-9_]+)?/;
    // emailReg = /^\w+@\w+\.\w+(\.\w+)?/;
    let emailReg = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}(\.[a-z]{2})?/;
    if(!emailReg.test(emailInput.value)) {
        alert("유효한 이메일이 아닙니다.");
        emailInput.value = "";
        emailInput.focus();
        return false;
    }
    frm.submit();
}