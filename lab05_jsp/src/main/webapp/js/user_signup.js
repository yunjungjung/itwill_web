document.addEventListener('DOMContentLoaded', () => {
    const SignUpForm = document.querySelector('form#SignUpForm');
    const inputUserid = document.querySelector('input#userid');
    const btnCheckDuplicateUserId = document.querySelector('button#btnCheckDuplicateUserId');
    const inputPassword = document.querySelector('input#password');
    const inputEmail = document.querySelector('input#email');
    const btnCheckDuplicateEmail = document.querySelector('button#btnCheckDuplicateEmail');
    const btnSignUp = document.querySelector('button#btnSignUp');
    const btnCancel = document.querySelector('button#btnCancel');

    btnCheckDuplicateUserId.addEventListener('click', () => {
        const userid = inputUserid.value;
        if (userid === "") {
            alert("아이디를 입력해주세요.");
            return;
        }

        // 중복 확인 로직 구현 (예: AJAX 요청)
        fetch(`/check-duplicate-userid?userid=${encodeURIComponent(userid)}`)
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    alert("이미 사용중인 아이디입니다.");
                } else {
                    alert("사용 가능한 아이디입니다.");
                }
            })
            .catch(error => {
                console.error("Error checking duplicate userid:", error);
                alert("아이디 중복 확인 중 오류가 발생했습니다.");
            });
    });

    btnCheckDuplicateEmail.addEventListener('click', () => {
        const email = inputEmail.value.trim();
        if (email === "") {
            alert("이메일을 입력해주세요.");
            return;
        }

        // 중복 확인 로직 구현 (예: AJAX 요청)
        fetch(`/check-duplicate-email?email=${encodeURIComponent(email)}`)
            .then(response => response.json())
            .then(data => {
                if (data.exists) {
                    alert("이미 사용중인 이메일입니다.");
                } else {
                    alert("사용 가능한 이메일입니다.");
                }
            })
            .catch(error => {
                console.error("Error checking duplicate email:", error);
                alert("이메일 중복 확인 중 오류가 발생했습니다.");
            });
    });

    btnSignUp.addEventListener('click', () => {
        const userid = inputUserid.value;
        const password = inputPassword.value;
        const email = inputEmail.value;

        if (userid === '') {
            alert('아이디를 입력하세요!');
            return;
        } else if (password === '') {
            alert('비밀번호를 입력하세요!');
            return;
        } else if (email === '') {
            alert('이메일을 입력하세요!');
            return;
        }

        const result = confirm('가입하시겠습니까?');
        if (result) {
            SignUpForm.method = 'post';
            SignUpForm.action = 'signup';
            SignUpForm.submit();
            alert("회원가입이 성공적으로 완료되었습니다.");
        }
    });

    btnCancel.addEventListener('click', () => {
        location.href = `/lab05/`;
    });
});
