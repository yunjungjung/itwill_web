/**
 * /post/modify.jsp에 포함
 */

document.addEventListener('DOMContentLoaded', () => {
    const modifyForm = document.querySelector('form#modifyForm');
    const inputId = document.querySelector('input#id');
    const inputTitle = document.querySelector('input#title');
    const textContent = document.querySelector('textarea#content');
    const btnDelete = document.querySelector('button#btnDelete');
    const btnUpdate = document.querySelector('button#btnUpdate');
    // 나중에 호출하는 callde,
    
    // 삭제 버튼의 클릭 이벤트 리스너:
    btnDelete.addEventListener('click', () => {
        const result = confirm('정말 삭제할까요?');
        if (result) { //사용자가 확인을 선택했을 때
        location.href = `delete?id=${inputId.value}`; //문자열 안엔 `
    }
    
    console.log(result);
    });
    
    // 업데이트 버튼의 클릭 이벤트 리스너:
    btnUpdate.addEventListener('click', () => {
       // 제목과 내용이 비어있는 지 체크:
       if (inputTitle.value === '' || textContent.value === '') {
        alert('제목과 내용은 반드시 입력하세요.');
        return;
       }
       
       
       // 업데이트 내용 저장 확인:
       const result = confirm('업데이트를 할까요?');
       if (result) {
        modifyForm.action = 'update'; // 요청 주소
        modifyForm.method = 'POST' // 요청 방식
        modifyForm.submit(); // 폼 양식 데이터 제출(서버로 요청 보냄).
       }
        
    });
    
});