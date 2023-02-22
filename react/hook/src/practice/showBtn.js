import { useState } from 'react';

/* 
보이기, 안 보이기 버튼
    1. 보이기 버튼은 항상 보여야 함
    2. 첫 화면에선 버튼 제외 아무것도 안 보임
    3. 보이기 버튼을 눌렀을 때 글씨가 보여야 함
        -> 렌더링이 되면서 변화가 생김
        -> useState 사용
        const [ state, setState(배열에 담아서 useState 함수에 초기값 넣고 사용) ] = useState('state 초기값');
        state -> 변화가 일어날 컴포넌트가 변수로
        초기값이 중요.
        -> 글씨 부분을 리렌더링..해야 한다?
        -> 상태를 감지해서 돔처럼 이용하자 state로 감지
        - 글씨를 state에
*/

function OnClickBtn() {
    const [state, setState] = useState(false);

    const onShowText = () => {
        setState((prev) => !prev);
    };

    return (
        <>
            <button onClick={onShowText}>영원히 보여라</button>
            {state ? <h2>아 퇴사하고 싶다...</h2> : <div></div>}
            {/* false 일 땐 안 보이게 true 일 때는 보이게 */}
        </>
    );
}

export default OnClickBtn;
