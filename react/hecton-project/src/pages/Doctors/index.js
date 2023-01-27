import Header from '../../components/Footer';
import Footer from '../../components/Header';
import DoctorsHead from './components/DoctorsHead';
import DoctorsImg1 from './components/DoctorsImg1';
import DoctorsImg2 from './components/DoctorsImg2';
import DoctorsSolutionTop from './components/DoctorsSolutionTop';
import DoctorsSolutionBottom from './components/DoctorsSolutionBottom';
import DoctorsUnderBtn from './components/DoctorsUnderBtn';

function Doctors() {
    return (
        <>
            <Header />
            <main>
                <DoctorsHead />
                <DoctorsImg1 />
                <DoctorsImg2 />
                <DoctorsSolutionTop />
                <DoctorsSolutionBottom />
                <DoctorsUnderBtn />
            </main>
            <Footer />
        </>
    );
}

export default Doctors;
