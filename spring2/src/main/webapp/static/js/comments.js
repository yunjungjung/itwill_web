document.addEventListener('DOMContentLoaded', () => {
    const btnToggleComment = document.querySelector('button#btnToggleComment');
    const bsCollapse = new bootstrap.Collapse('div#collapseComments', {toggle: false});
    const btnRegisterComment = document.querySelector('button#btnRegisterComment');
    const commentModal = new bootstrap.Modal('div#commentModal', {backdrop: true});
    const btnUpdateComment = document.querySelector('button#btnUpdateComment');

    btnToggleComment.addEventListener('click', () => {
        bsCollapse.toggle();
        btnToggleComment.innerHTML = btnToggleComment.innerHTML === '댓글 보기' ? '댓글 감추기' : '댓글 보기';
        if (btnToggleComment.innerHTML === '댓글 감추기') getAllComments();
    });

    btnRegisterComment.addEventListener('click', registerComment);
    btnUpdateComment.addEventListener('click', updateComment);

    function registerComment() {
        const postId = document.querySelector('input#id').value;
        const ctext = document.querySelector('textarea#ctext').value;
        const username = document.querySelector('input#username').value;

        if (!ctext || !username) {
            alert('댓글 내용과 작성자는 반드시 입력하세요.');
            return;
        }

        const data = {postId, ctext, username};
        axios.post('../api/comment', data)
            .then(response => {
                if (response.data === 1) {
                    alert('댓글 1개 등록 성공');
                    document.querySelector('textarea#ctext').value = '';
                    document.querySelector('input#username').value = '';
                    getAllComments();
                }
            })
            .catch(error => alert('댓글 등록 실패. 다시 시도해 주세요.'));
    }

    function getAllComments() {
        const postId = document.querySelector('input#id').value;
        const uri = `../api/comment/all/${postId}`;

        axios.get(uri)
            .then(response => makeCommentElements(response.data))
            .catch(error => alert('댓글 목록을 불러오는 데 실패했습니다.'));
    }

    function makeCommentElements(data) {
        const divComments = document.querySelector('div#comments');
        let htmlStr = '';

        data.forEach(comment => {
            const modifiedTime = new Date(comment.modifiedTime).toLocaleString();
            htmlStr += `
                <div class="card card-body my-1">
                    <div style="font-size: 0.825rem;">
                        <span>${comment.id}</span>
                        <span class="fw-bold">${comment.username}</span>
                        <span class="text-secondary">${modifiedTime}</span>
                    </div>
                    <div>${comment.ctext}</div>
                    <div>
                        <button class="btnDeleteComment btn btn-outline-danger btn-sm" data-id="${comment.id}">삭제</button>
                        <button class="btnModifyComment btn btn-outline-primary btn-sm" data-id="${comment.id}">수정</button>
                    </div>
                </div>
            `;
        });

        divComments.innerHTML = htmlStr;

        divComments.querySelectorAll('button.btnDeleteComment').forEach(btn => {
            btn.addEventListener('click', deleteComment);
        });

        divComments.querySelectorAll('button.btnModifyComment').forEach(btn => {
            btn.addEventListener('click', showCommentModal);
        });
    }

    function deleteComment(event) {
        const id = event.target.getAttribute('data-id');
        if (!confirm('댓글을 정말 삭제할까요?')) return;

        axios.delete(`../api/comment/${id}`)
            .then(response => {
                if (response.data === 1) {
                    alert(`댓글(${id}) 삭제 성공`);
                    getAllComments();
                }
            })
            .catch(error => alert('댓글 삭제에 실패했습니다.'));
    }

    function showCommentModal(event) {
        const id = event.target.getAttribute('data-id');
        axios.get(`../api/comment/${id}`)
            .then(response => {
                document.querySelector('input#modalCommentId').value = id;
                document.querySelector('textarea#modalCommentText').value = response.data.ctext;
                commentModal.show();
            })
            .catch(error => alert('댓글 정보를 불러오는 데 실패했습니다.'));
    }

    function updateComment() {
        const id = document.querySelector('input#modalCommentId').value;
        const ctext = document.querySelector('textarea#modalCommentText').value;
        
        if (!ctext) {
            alert('업데이트할 댓글 내용을 입력하세요');
            return;
        }

        axios.put(`../api/comment/${id}`, { ctext })
            .then(response => {
                if (response.data === 1) {
                    getAllComments();
                    alert('댓글이 성공적으로 업데이트되었습니다.');
                }
            })
            .catch(error => alert('댓글 업데이트에 실패했습니다.'))
            .finally(() => commentModal.hide());
    }
});
