function Btn(props) {
    return (
        <button className={`btn ${props.type || 'primary'}`}>
            {props.children}
        </button>
    );
}

export default Btn;