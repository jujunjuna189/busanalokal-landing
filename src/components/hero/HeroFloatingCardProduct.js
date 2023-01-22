import { IMGProduct1, IMGProduct2, IMGProduct3 } from "../../assets";

function HeroFloatingCardProduct(props) {
    return (
        <div className="relative w-[667px] h-[546px]">
            <div className="absolute bottom-5 right-12">
                <img src={IMGProduct3} alt="Product" className="h-[177px] w-[186px]" data-aos="zoom-in" data-aos-delay="600" />
            </div>
            <div className="absolute top-0 right-0">
                <img src={IMGProduct2} alt="Product" className="h-[284px] w-[304px]" data-aos="zoom-in" data-aos-delay="300" />
            </div>
            <div className="absolute bottom-0 left-0">
                <img src={IMGProduct1} alt="Product" className="h-[383px] w-[411px]" data-aos="zoom-in" />
            </div>
        </div>
    );
}

export default HeroFloatingCardProduct;