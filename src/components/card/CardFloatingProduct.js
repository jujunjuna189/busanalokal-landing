function CardFloatingProduct(props) {
    return (
        <div className={`${props.className}`}>
            <div className="bg-white inline-block p-3 shadow-md rounded-lg px-14 relative" data-aos={props.aos} data-aos-delay={props.aosDelay}>
                <div className="rounded-full w-16 h-16 absolute bg-green-200 border border-dashed border-slate-600 -top-7 -left-6">
                    <img src={props.source} alt="Product" className="rounded-full" />
                </div>
                <div className="font-semibold">{props.title}</div>
            </div>
        </div>
    );
}

export default CardFloatingProduct;