const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
    return (
        <>
            <div className={`${title1Styles} pb-1`}>
                <h2 className={`${title1Styles} h2`}> {title1} <span style={{ color: "rgb(73, 145, 0)" }}>{title2}</span></h2>
                <p className={`${paraStyles} hidden text-dark`}>
                    Our food products are crafted with the deliver exceptional taste and quality.
                </p>
            </div>
        </>
    );
};

export default Title