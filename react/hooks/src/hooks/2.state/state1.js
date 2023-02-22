import { useState } from 'react';
import PlayListMock from '../../__mock__/playList.json';

function State1() {
    /* 
    문제 1.

    state를 다루기 위한 기초 문제입니다.
    음악 목록 10가지의 mock data가 있습니다.

    아래에 추가버튼을 눌러 목록에 리스트를 추가하고 
    삭제 버튼을 눌렀을 때 데이터가 삭제될 수 있도록 해주세요
  */

    const [list, setList] = useState(PlayListMock.playlist);
    const [input, setInput] = useState({
        title: '',
        singer: '',
    });

    const { title, singer } = input;

    const onChangeInput = (e) => {
        console.log(input);
        const { name, value } = e.target;
        setInput({ ...input, [name]: value });
    };

    const onAddList = () => {
        const newList = { title, singer };
        setList([...list, newList]);
    };

    const onRemoveBtn = (title) => {
        setList(list.filter((el) => title != el.title));
    };

    return (
        <>
            <h1>문제1</h1>
            <ul>
                {/* list */}
                {/* 예시 데이터입니다 */}
                {list.map((el) => (
                    <li>
                        <h3>{el.title}</h3>
                        <p>{el.singer}</p>
                        <button onClick={() => onRemoveBtn(el.title)}>Delete</button>
                    </li>
                ))}
            </ul>
            <div>
                <p>
                    곡명 : <input name="title" value={title} onChange={onChangeInput} />
                </p>
                <p>
                    가수/작곡 : <input name="singer" value={singer} onChange={onChangeInput} />
                </p>
                <p>
                    <button onClick={onAddList}>추가</button>
                </p>
            </div>
        </>
    );
}

export default State1;
