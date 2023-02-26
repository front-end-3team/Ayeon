import { useState } from 'react';
import styled from 'styled-components';

function Comment({ comment, onRemoveComment }) {
    /* 댓글 수정 */
    const [updateContent, setUpdateContent] = useState('');

    const onNewContent = (e) => {
        setUpdateContent(e.target.value);
    };

    return (
        <>
            {comment.map((el) => (
                <S.CommentItem>
                    <p>
                        작성자: <span>{el.User.nickname}</span>
                    </p>
                    <p>
                        댓글 내용:
                        <span>{el.content}</span>
                        <button>수정</button>
                        <button onClick={() => onRemoveComment(el.User.nickname, el.myComment)}>
                            삭제
                        </button>
                    </p>
                    {/* <input onChange={onNewContent} />
                        <button>수정하기</button> */}
                </S.CommentItem>
            ))}
        </>
    );
}
export default Comment;

const CommentItem = styled.li`
    border: 1px solid #000;
    margin: 10px;
    padding: 10px;
    list-style: none;

    & button {
        margin: 3px;
    }
`;

const S = {
    CommentItem,
};
