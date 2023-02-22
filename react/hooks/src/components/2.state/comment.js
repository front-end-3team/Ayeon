import { useState } from 'react';
import styled from 'styled-components';

function Comment({ post, onRemoveComment, onUpdateComment }) {
    const [isEdit, setIsEdit] = useState();

    return (
        <>
            {post.map((el) => (
                <S.CommentItem>
                    <p>
                        작성자: <span>{el.User.nickname}</span>
                    </p>
                    <p>
                        댓글 내용: <span>{el.content}</span>
                    </p>
                    <button onClick={() => onUpdateComment(el.id, el.content)}>수정</button>
                    <button onClick={() => onRemoveComment(el.User.nickname, el.myComment)}>
                        삭제
                    </button>
                </S.CommentItem>
            ))}
        </>
    );
}
export default Comment;

const CommentItem = styled.div`
    border: 1px solid #000;
    margin: 10px;
    padding: 10px;

    & button {
        margin: 3px;
    }
`;

const S = {
    CommentItem,
};
