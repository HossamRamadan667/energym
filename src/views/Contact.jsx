import Footer from "../Components/Footer";

function Contact(props) {
    return (
        <>
            {!props.noFooter && <Footer/>}
        </>
    );
}

export default Contact;