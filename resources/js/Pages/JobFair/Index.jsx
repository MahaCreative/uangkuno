import React from "react";

export default function Index() {
    return (
        <div className="w-full h-[720px] overflow-hidden flex justify-center items-center">
            <div className="w-[400px] h-full rounded-md shadow-sm shadow-gray-500/50">
                <img
                    src="/jobfair/Bantuan-Ramadhan-RM-500.jpg"
                    alt=""
                    className="w-full h-full"
                />
                <p className="font-light text-center">
                    To apply for job vacancies, Please enter an account
                </p>
                <p className="font-bold text-center">Your Telegram</p>
            </div>
        </div>
    );
}
