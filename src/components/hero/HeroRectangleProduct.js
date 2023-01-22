import { IMGP1, IMGP2, IMGP3 } from "../../assets";

function HeroRectangleProduct() {
    return (
        <div className="inline-block h-[30rem] -mt-[2rem] -mb-[2rem] overflow-y-hidden rotate-12 relative">
            <div className="animate-[marquee_10s_linear_infinite]">
                <img src={IMGP1} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP2} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP3} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP1} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP2} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP1} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP2} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP3} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP1} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
                <img src={IMGP2} alt="Product" className="w-[7rem] rounded-[20px] mb-2 mx-2" />
            </div>
        </div>
    );
}

export default HeroRectangleProduct;