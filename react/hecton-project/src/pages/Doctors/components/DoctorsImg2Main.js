import DoctorsImg2 from './DoctorsImg2';

function DoctorsImg2Main() {
    return (
        <>
            <DoctorsImg2
                title="시장점유율"
                text="36%"
                rank="(1위)"
                content="요양병원51%/한방병원66%/병원15%"
                image={'https://www.hectonproject.com/img/doctors0.jpg'}
            />

            <DoctorsImg2
                image={'https://www.hectonproject.com/img/doctors1.jpg'}
                title="고객수"
                text="1,300처"
                rank="(1위)"
                content="병원 전문가 100명의 차별화된 서비스"
            />

            <DoctorsImg2
                title="대리점"
                text="17개"
                rank="(1위)"
                content="병원 전문가 100명의 차별화된 서비스"
                image={'https://www.hectonproject.com/img/doctors2.jpg'}
            />

            <DoctorsImg2
                image={'https://www.hectonproject.com/img/doctors3.jpg'}
                title="역사"
                text="40년"
                content="제품 안정성 확보"
            />
        </>
    );
}

export default DoctorsImg2Main;
