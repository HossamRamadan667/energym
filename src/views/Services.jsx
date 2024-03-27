import Footer from "../Components/Footer";

function Services(props) {
    return (
        <>
            {!props.noFooter && <Footer />}
        </>
    );
}

export default Services;