import { IMGPSmall1, IMGPSmall2, IMGPSmall3 } from "../../assets";
import CardFloatingProduct from "../card/CardFloatingProduct";

function HeroFloatingCard() {
    return (
        <div className="relative w-[485px] h-[371px]">
            <div className="h-full w-72 bg-cyan-100 opacity-40 rounded-3xl absolute right-10"></div>
            <CardFloatingProduct title="Qualitas Tinggi" source={IMGPSmall1} className="absolute top-7 left-24" aos="zoom-in" />
            <CardFloatingProduct title="Tampilan Menarik" source={IMGPSmall2} className="absolute right-0 bottom-32" aos="zoom-in" aosDelay="300" />
            <CardFloatingProduct title="Nyaman Dipakai" source={IMGPSmall3} className="absolute bottom-7" aos="zoom-in" aosDelay="400" />
        </div>
    );
}

export default HeroFloatingCard;