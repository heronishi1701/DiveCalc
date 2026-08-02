function showMenu(){

    document.getElementById(
        "menuScreen"
    ).style.display = "block";

    document.getElementById(
        "calculatorScreen"
    ).style.display = "none";

    showNativeAd();

    if(shouldShowInterstitial()){

        setTimeout(function(){

            showInterstitialAd();

        },300);

    }

}

// 分間空気消費量（SAC）
function showSacCalculator(){

    document.getElementById(
        "menuScreen"
    ).style.display = "none";

    document.getElementById(
        "calculatorScreen"
    ).style.display = "block";

    // 前回の設定を取得
    let lastTankType =
        localStorage.getItem("lastTankType") ?? "tank10";

    let lastTankVolume =
        localStorage.getItem("lastTankVolume") ?? "10";

    let lastTankUnit =
        localStorage.getItem("lastTankUnit") ?? "L";

    document.getElementById(
        "calculatorArea"
    ).innerHTML =

        "<button class='backButton' onclick='showMenu()'>"

        +

        "← Back"

        +

        "</button>"

        +

        "<br>"

        +

        "<b>分間空気消費量（SAC）</b>"

        +

        "<br><br>"

        +

        "エントリー"

        +

        "<br>"

        +

        "<input id='entryHour' type='number' value='10' class='w60'> : "

        +

        "<input id='entryMinute' type='number' value='00' class='w60'>"

        +

        "<br><br>"

        +

        "エグジット"

        +

        "<br>"

        +

        "<input id='exitHour' type='number' value='10' class='w60'> : "

        +

        "<input id='exitMinute' type='number' value='40' class='w60'>"

        +

        "<br><br>"

        +

        "開始圧力"

        +

        "<br>"

        +

        "<input id='startBar' type='number' value='200' class='w90'> bar"

        +

        "<br><br>"

        +

        "終了圧力"

        +

        "<br>"

        +

        "<input id='endBar' type='number' value='50' class='w90'> bar"

        +

        "<br><br>"

        +

        "平均水深"

        +

        "<br>"

        +

        "<input id='avgDepth' type='number' step='0.1' value='18' class='w90'> m"

        +

        "<br><br>"

        +

        "タンク"

        +

        "<br>"

        +

        "<select id='tankType' onchange='changeTankType()' class='w230'>"

        +

        "<optgroup label='一般タンク'>"+
        "<option value='tank6'" + (lastTankType==="tank6" ? " selected" : "") + ">6L</option>"+
        "<option value='tank7'" + (lastTankType==="tank7" ? " selected" : "") + ">7L</option>"+
        "<option value='tank8'" + (lastTankType==="tank8" ? " selected" : "") + ">8L</option>"+
        "<option value='tank9'" + (lastTankType==="tank9" ? " selected" : "") + ">9L</option>"+
        "<option value='tank10'" + (lastTankType==="tank10" ? " selected" : "") + ">10L（標準）</option>"+
        "<option value='tank11'" + (lastTankType==="tank11" ? " selected" : "") + ">11L</option>"+
        "<option value='tank12'" + (lastTankType==="tank12" ? " selected" : "") + ">12L</option>"+
        "<option value='tank13'" + (lastTankType==="tank13" ? " selected" : "") + ">13L</option>"+
        "<option value='tank14'" + (lastTankType==="tank14" ? " selected" : "") + ">14L</option>"+
        "<option value='tank15'" + (lastTankType==="tank15" ? " selected" : "") + ">15L</option>"+
        "<option value='tank16'" + (lastTankType==="tank16" ? " selected" : "") + ">16L</option>"+
        "<option value='tank17'" + (lastTankType==="tank17" ? " selected" : "") + ">17L</option>"+
        "<option value='tank18'" + (lastTankType==="tank18" ? " selected" : "") + ">18L</option>"+
        "<option value='tank19'" + (lastTankType==="tank19" ? " selected" : "") + ">19L</option>"+
        "<option value='tank20'" + (lastTankType==="tank20" ? " selected" : "") + ">20L</option>"+
        "</optgroup>"+

        "<optgroup label='アルミタンク（cf）'>"+
        "<option value='al30'" + (lastTankType==="al30" ? " selected" : "") + ">AL30（30cf / 4.7L）</option>"+
        "<option value='al40'" + (lastTankType==="al40" ? " selected" : "") + ">AL40（40cf / 5.7L）</option>"+
        "<option value='al50'" + (lastTankType==="al50" ? " selected" : "") + ">AL50（50cf / 7.0L）</option>"+
        "<option value='al63'" + (lastTankType==="al63" ? " selected" : "") + ">AL63（63cf / 9.0L）</option>"+
        "<option value='al80'" + (lastTankType==="al80" ? " selected" : "") + ">AL80（80cf / 11.1L）</option>"+
        "<option value='al100'" + (lastTankType==="al100" ? " selected" : "") + ">AL100（100cf / 13.0L）</option>"+
        "<option value='al117'" + (lastTankType==="al117" ? " selected" : "") + ">AL117（117cf / 15.0L）</option>"+
        "</optgroup>"+

        "<optgroup label='ダブルタンク'>"+
        "<option value='double7'" + (lastTankType==="double7" ? " selected" : "") + ">ダブル7L×2（14L）</option>"+
        "<option value='double8'" + (lastTankType==="double8" ? " selected" : "") + ">ダブル8L×2（16L）</option>"+
        "<option value='double10'" + (lastTankType==="double10" ? " selected" : "") + ">ダブル10L×2（20L）</option>"+
        "<option value='double12'" + (lastTankType==="double12" ? " selected" : "") + ">ダブル12L×2（24L）</option>"+
        "<option value='double15'" + (lastTankType==="double15" ? " selected" : "") + ">ダブル15L×2（30L）</option>"+
        "</optgroup>"+

        "<optgroup label='ステージ・デコ'>"+
        "<option value='stage40'" + (lastTankType==="stage40" ? " selected" : "") + ">ステージ40cf（5.7L）</option>"+
        "<option value='stage80'" + (lastTankType==="stage80" ? " selected" : "") + ">ステージ80cf（11.1L）</option>"+
        "<option value='deco7'" + (lastTankType==="deco7" ? " selected" : "") + ">デコボトル7L</option>"+
        "<option value='deco11'" + (lastTankType==="deco11" ? " selected" : "") + ">デコボトル11L</option>"+
        "</optgroup>"

        +

        "<optgroup label='その他'>"

        +

        "<option value='custom'" +
        (lastTankType==="custom" ? " selected" : "") +
        ">自由入力…</option>"

        +

        "</optgroup>"

        +

        "</select>"

        +

        "<div id='tankVolumeArea' class='hidden mt10'>"

        +

        "容量"

        +

        "<br>"

        +

        "<input id='tankVolume' type='number' step='0.1' value='" +
        lastTankVolume +
        "' class='w90'>"

        +

        "<select id='tankUnit' class='ml6'>"

        +

        "<option value='L'" +
        (lastTankUnit==="L" ? " selected" : "") +
        ">L</option>"

        +

        "<option value='cf'" +
        (lastTankUnit==="cf" ? " selected" : "") +
        ">cf</option>"

        +

        "</select>"

        +

        "</div>"

        +

        "<br><br>"

        +

        "<button class='calcButton' onclick='calculateSac()'>"

        +

        "計算する"

        +

        "</button>"

        +

        "<hr>"

        +

        "<div id='sacResult'></div>";

    changeTankType();

}
// エンリッチドエア(MOD)
function showModCalculator(){

    document.getElementById(
        "menuScreen"
    ).style.display = "none";

    document.getElementById(
        "calculatorScreen"
    ).style.display = "block";

    document.getElementById(
        "calculatorArea"
    ).innerHTML =
        "<button class='backButton' onclick='showMenu()'>"

        +

        "← Back"

        +

        "</button>"

        +

        "<br>"

        +

        "<b>EANx:エンリッチドエア（MOD:最大深度）</b>"

        +

        "<br><br>"

        +

        "実測酸素濃度を入力"

        +

        "<br>"

        +

        "<input id='nitroxPercent' type='number' value='32.0' step='0.01' class='w90'> %"

        +

        "<br><br>"

        +

        "<button class='calcButton' onclick='calculateMod()'>"

        +

        "計算する"

        +

        "</button>"

        +

        "<hr>"

        +

        "<div id='nitroxResult'></div>";

}

function changeTankType(){

    let type =
        document.getElementById(
            "tankType"
        ).value;

    document.getElementById(
        "tankVolumeArea"
    ).style.display =

        type === "custom"
        ? "block"
        : "none";

}

function calculateSac(){

    let entryHour =
        Number(document.getElementById("entryHour").value);

    let entryMinute =
        Number(document.getElementById("entryMinute").value);

    let exitHour =
        Number(document.getElementById("exitHour").value);

    let exitMinute =
        Number(document.getElementById("exitMinute").value);

    let startBar =
        Number(document.getElementById("startBar").value);

    let endBar =
        Number(document.getElementById("endBar").value);

    let avgDepth =
        Number(document.getElementById("avgDepth").value);

    if(avgDepth < 0){

        alert("平均水深を確認してください。");

        return;

    }

    // タンク容量取得
    let tankType =
        document.getElementById(
            "tankType"
        ).value;

    let tankUnit =
        document.getElementById(
            "tankUnit"
        ).value;

    let tankVolume;

    switch(tankType){

        case "tank6": tankVolume=6; break;
        case "tank7": tankVolume=7; break;
        case "tank8": tankVolume=8; break;
        case "tank9": tankVolume=9; break;
        case "tank10": tankVolume=10; break;
        case "tank11": tankVolume=11; break;
        case "tank12": tankVolume=12; break;
        case "tank13": tankVolume=13; break;
        case "tank14": tankVolume=14; break;
        case "tank15": tankVolume=15; break;
        case "tank16": tankVolume=16; break;
        case "tank17": tankVolume=17; break;
        case "tank18": tankVolume=18; break;
        case "tank19": tankVolume=19; break;
        case "tank20": tankVolume=20; break;

        case "al30": tankVolume=4.7; break;
        case "al40": tankVolume=5.7; break;
        case "al50": tankVolume=7.0; break;
        case "al63": tankVolume=9.0; break;
        case "al80": tankVolume=11.1; break;
        case "al100": tankVolume=13.0; break;
        case "al117": tankVolume=15.0; break;

        case "double7": tankVolume=14; break;
        case "double8": tankVolume=16; break;
        case "double10": tankVolume=20; break;
        case "double12": tankVolume=24; break;
        case "double15": tankVolume=30; break;

        case "stage40": tankVolume=5.7; break;
        case "stage80": tankVolume=11.1; break;
        case "deco7": tankVolume=7; break;
        case "deco11": tankVolume=11; break;

        case "custom":

            tankVolume =
                Number(
                    document.getElementById(
                        "tankVolume"
                    ).value
                );

            if(tankUnit === "cf"){

                tankVolume *= 0.139;

            }

            if(tankVolume <= 0){

                alert("タンク容量を確認してください。");

                return;

            }

            break;

    }

    let startTime =
        entryHour * 60 +
        entryMinute;

    let endTime =
        exitHour * 60 +
        exitMinute;

    let diveTime =
        endTime -
        startTime;

    if(diveTime <= 0){

        alert("時刻を確認してください。");

        return;

    }

    let usedBar =
        startBar -
        endBar;

    if(usedBar <= 0){

        alert("圧力を確認してください。");

        return;

    }

    let ata =
        avgDepth / 10 + 1;

    localStorage.setItem(
        "lastTankType",
        tankType
    );

    localStorage.setItem(
        "lastTankVolume",
        document.getElementById(
            "tankVolume"
        ).value
    );

    localStorage.setItem(
        "lastTankUnit",
        tankUnit
    );

    let sac =
        usedBar *
        tankVolume /
        ata /
        diveTime;

    document.getElementById(
        "sacResult"
    ).innerHTML =

        "<b>平均空気消費量</b>"

        +

        "<br><span class='resultLarge'>"

        +

        sac.toFixed(2)

        +

        " L/min</span>"

        +

        "<hr>"

        +

        "<table class='resultTable'>"

        +

        "<tr><td>使用時間</td><td class='right'>"

        +

        diveTime

        +

        "分</td></tr>"

        +

        "<tr><td>使用圧力</td><td class='right'>"

        +

        usedBar

        +

        "bar</td></tr>"

        +

        "<tr><td>平均絶対圧</td><td class='right'>"

        +

        ata.toFixed(2)

        +

        "ata</td></tr>"

        +

        "</table>";

}
// MOD計算
function calculateMod(){

    let percent =
        Number(
            document.getElementById(
                "nitroxPercent"
            ).value
        );

    if(

        percent <= 0 ||

        percent >= 100

    ){

        alert(
            "酸素濃度を確認してください。"
        );

        return;

    }

    // FO2
    let fo2 =
        percent / 100;

    // 最大深度
    let mod14 =

        (

            1.4 /

            fo2

            - 1

        ) * 10;

    let mod16 =

        (

            1.6 /

            fo2

            - 1

        ) * 10;

    document.getElementById(

        "nitroxResult"

    ).innerHTML =

        "<b>最大深度</b>"

        +

        "<br><br>"

        +

        "<table class='resultTable'>"

        +

        "<tr>"

        +

        "<td>通常（PO₂=1.4）</td>"

        +

        "<td class='right'>"

        +

        mod14.toFixed(1)

        +

        "m</td>"

        +

        "</tr>"

        +

        "<tr>"

        +

        "<td class='red'>緊急（PO₂=1.6）</td>"

        +

        "<td class='right red'>"

        +

        mod16.toFixed(1)

        +

        "m</td>"

        +

        "</tr>"

        +

        "</table>";

}
// ベストミックス
function showBestMixCalculator(){

    document.getElementById(
        "menuScreen"
    ).style.display = "none";

    document.getElementById(
        "calculatorScreen"
    ).style.display = "block";

    document.getElementById(
        "calculatorArea"
    ).innerHTML =

        "<button class='backButton' onclick='showMenu()'>"

        +

        "← Back"

        +

        "</button>"

        +

        "<br>"

        +

        "<b>ベストミックス</b>"

        +

        "<br><br>"

        +

        "予定最大深度"

        +

        "<br>"

        +

        "<input id='bestMixDepth' type='number' value='30' step='0.1' class='w90'> m"

        +

        "<br><br>"

        +

        "<button class='calcButton' onclick='calculateBestMix()'>"

        +

        "計算する"

        +

        "</button>"

        +

        "<hr>"

        +

        "<div id='bestMixResult'></div>";

}
// ベストミックス計算
function calculateBestMix(){

    let depth =
        Number(
            document.getElementById(
                "bestMixDepth"
            ).value
        );

    if(depth < 0){

        alert("深度を確認してください。");

        return;

    }

    // 絶対圧
    let ata =
        depth / 10 + 1;

    // PO2=1.4 推奨
    let best =
        1.4 / ata * 100;

    // PO2=1.6 上限
    let emergency =
        1.6 / ata * 100;

    // 空気より高濃度にはできても100%まで
    best =
        Math.min(best,100);

    emergency =
        Math.min(emergency,100);

    document.getElementById(
        "bestMixResult"
    ).innerHTML =

        "<b>推奨酸素濃度</b>"

        +

        "<br>"

        +

        "<span class='resultLarge'>"

        +

        best.toFixed(2)

        +

        "%</span>"

        +

        "<br>"

        +

        "(PO₂=1.4)"

        +

        "<hr>"

        +

        "<span class='red'>"

        +

        "上限 "

        +

        emergency.toFixed(2)

        +

        "%"

        +

        "</span>"

        +

        "<br>"

        +

        "<span class='red'>"

        +

        "(PO₂=1.6)"

        +

        "</span>";

}

function showSettings(){

    document.getElementById(

        "settingsModal"

    ).style.display="flex";

}

function closeSettings(){

    document.getElementById(

        "settingsModal"

    ).style.display="none";

}

window.addEventListener(

    "load",

    function(){

        setTimeout(function(){

            const splash =
                document.getElementById(
                    "splashScreen"
                );

            splash.style.opacity = "0";

            setTimeout(function(){

                splash.style.display = "none";

            },500);

        },1000);

    }

);