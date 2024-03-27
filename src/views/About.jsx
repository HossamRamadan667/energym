import Footer from '../Components/Footer';
function About(props) {
    return (
        <>


            {!props.noFooter && <Footer />}
        </>
    )
}

export default About; 