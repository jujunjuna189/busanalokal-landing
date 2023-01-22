import { LOGOBL } from "../../assets";

function Footer() {
    return (
        <>
            <section className="bg-white px-16 py-16 flex flex-wrap justify-between">
                <div className="flex flex-wrap items-center gap-9">
                    <div className="md:w-auto w-[100%] flex justify-center">
                        <div className="w-20 h-20 rounded-lg">
                            <img src={LOGOBL} alt="Logo Busanalokal" />
                        </div>
                    </div>
                    <div className="md:text-start text-center">
                        <div className="text-2xl font-semibold" data-aos="fade-up">PT Busanalokal Indonesia</div>
                        <div data-aos="fade-up" data-aos-delay="50">Jalan Sersan Idris, Kota Bekasi, Jawabarat</div>
                    </div>
                </div>
                <div className="md:w-auto md:mt-0 mt-5 w-[100%] flex justify-center items-center gap-3">
                    <div className="p-2 rounded-lg border border-dashed border-slate-700" data-aos="zoom-in">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-whatsapp" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 21l1.65 -3.8a9 9 0 1 1 3.4 2.9l-5.05 .9" />
                            <path d="M9 10a0.5 .5 0 0 0 1 0v-1a0.5 .5 0 0 0 -1 0v1a5 5 0 0 0 5 5h1a0.5 .5 0 0 0 0 -1h-1a0.5 .5 0 0 0 0 1" />
                        </svg>
                    </div>
                    <div className="p-2 rounded-lg border border-dashed border-slate-700" data-aos="zoom-in" data-aos-delay="100">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-instagram" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <rect x="4" y="4" width="16" height="16" rx="4" />
                            <circle cx="12" cy="12" r="3" />
                            <line x1="16.5" y1="7.5" x2="16.5" y2="7.501" />
                        </svg>
                    </div>
                    <div className="p-2 rounded-lg border border-dashed border-slate-700" data-aos="zoom-in" data-aos-delay="200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-brand-facebook" width="24" height="24" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#000000" fill="none" strokeLinecap="round" strokeLinejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                        </svg>
                    </div>
                </div>
            </section>
            <div className="md:text-start text-center px-16 py-2 bg-slate-800 text-white text-sm">
                <span>Copyright&copy;PT Busanalokal Indonesia 2022</span>
            </div>
        </>
    );
}

export default Footer;