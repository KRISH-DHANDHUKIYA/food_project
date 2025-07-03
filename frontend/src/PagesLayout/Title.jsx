const Title = ({ title1, title2, titleStyles, title1Styles, paraStyles }) => {
    return (
        <div className={`mb-4 ${titleStyles}`}>
            <h2 className={`h2 fw-bold mb-2 ${title1Styles}`}>
                {title1} <span style={{ color: "rgb(73, 145, 0)" }}>{title2}</span>
            </h2>
            <p className={`text-muted d-none d-md-block ${paraStyles}`}>
                Customer satisfaction drives us — from prompt delivery to mouth-watering flavors, we make every meal memorable.
            </p>
        </div>
    );
};

export default Title;
