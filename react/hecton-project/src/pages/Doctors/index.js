import Header from '../../components/Footer';
import Footer from '../../components/Header';
import DoctorsHead from './components/DoctorsHead';
import DoctorsImg1 from './components/DoctorsImg1';
import DoctorsSolutionTop from './components/DoctorsSolutionTop';
import DoctorsSolutionBottom from './components/DoctorsSolutionBottom';
import DoctorsUnderBtn from './components/DoctorsUnderBtn';
import DoctorsImg2Main from './components/DoctorsImg2Main';

function Doctors() {
    return (
        <>
            <Header />
            <main>
                <DoctorsHead />
                <DoctorsImg1 />
                <DoctorsImg2Main />
                <DoctorsSolutionTop />
                <DoctorsSolutionBottom />
                <DoctorsUnderBtn />
            </main>
            <Footer />
        </>
    );
}

export default Doctors;
