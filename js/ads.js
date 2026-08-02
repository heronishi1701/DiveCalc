let menuReturnCount = 0;

function initAds(){

    showBannerAd();

}

function showBannerAd(){

    document.getElementById(

        "adArea"

    ).style.display = "block";

    // AdMob Banner

}

function showNativeAd(){

    document.getElementById(

        "nativeAdArea"

    ).style.display = "block";

    // AdMob Native

}

function showInterstitialAd(){

    document.getElementById(

        "interstitialAd"

    ).style.display="flex";

}

function shouldShowInterstitial(){

    menuReturnCount++;

    return menuReturnCount % 5 === 0;

}

function closeInterstitialAd(){

    document.getElementById(

        "interstitialAd"

    ).style.display="none";

}