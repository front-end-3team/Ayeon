import styled from 'styled-components';

function ProductCard({ list, onNavigate }) {
    return (
        <>
            {list.map((el) => (
                <S.Item onClick={onNavigate}>
                    <h4>{el.productName}</h4>
                    <p>상품번호: {el.productNumber}</p>
                    <p>가격: {Number(el.productPrice).toLocaleString()}원</p>
                    <p>사이즈: {el.productSize}</p>
                    <p>평점: {el.productRating}</p>
                    <p>리뷰: {el.productReview}</p>
                </S.Item>
            ))}
        </>
    );
}

export default ProductCard;

const Item = styled.li`
    border: 1px solid #000;
    cursor: pointer;
    width: 300px;
    margin: 16px auto;
    list-style: none;
    padding: 5px;
`;

const S = {
    Item,
};
