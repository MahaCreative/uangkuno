<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Video Lucah Malaysia</title>
    <link rel="shortcut icon" href="{{asset('favicon.png')}}" type="image/x-icon">
    <!-- Fonts -->
    <link rel="preconnect" href="https://fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=figtree:400,500,600&display=swap" rel="stylesheet" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Nunito:ital,wght@0,200..1000;1,200..1000&display=swap" rel="stylesheet">
    <!-- Meta Open Graph untuk WhatsApp dan Telegram -->
    <meta property="og:title" content="Live dan Group Private">
    <meta property="og:description" content="Join Live dan Group Private Malaysia">
    <meta property="og:image" content="{{asset('rhmtt/utama1.jpg')}}"> <!-- URL logo yang akan ditampilkan -->
    <meta property="og:type" content="website">


    <!-- Scripts -->

    @routes
    @viteReactRefresh
    @vite(['resources/js/app.jsx', "resources/js/Pages/{$page['component']}.jsx"])
    @inertiaHead
</head>

<body class="font-nunito antialiased">
    @inertia
</body>

</html>