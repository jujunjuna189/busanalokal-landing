import { LOGOBL } from "../../assets";

function Navbar() {
    return (
        <div className="flex items-center pl-12 pt-6">
            <div className="mr-10 rounded-full w-10 py-5">
                <img src={LOGOBL} alt="Logo Busanalokal" />
            </div>
            <ul className="flex gap-3 font-semibold">
                <li>Home</li>
                <li>About</li>
            </ul>
        </div>
    );
}

export default Navbar;