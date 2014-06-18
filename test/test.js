var ModuleTestSpec = (function(global) {

var _inNode    = "process"        in global;
var _inWorker  = "WorkerLocation" in global;
var _inBrowser = "document"       in global;

return new Test("Spec", {
        disable:    false,
        browser:    true,
        worker:     true,
        node:       true,
        button:     true,
        both:       true,
    }).add([
        // ---
        testSpec,
        testSpecParamUserAgent,
        testSpecParamDeviceInfo,
        //testSpec_normalizeVersionString,
        // ---
        testDeviceiPhone5,
        testDeviceNexus5,
        testDeviceRevision_Nexus7_2013,
        testFirefoxMobileForAndroid,
        testDeviceFirefoxOS,
        testDevice_INFOBAR_A01,
        testDeviceWindowsPhone8S,
        testDeviceWindowsPhoneLumia920,
        testDeviceKindle,
        testDeviceGooglePlayEdition,
        // ---
        testOS,
        testMacPro,
        testIE11Preview,
        testIE10,
        testWindowsPhone75,
        testFirefox11,
    ]).run().clone();


function testSpec(test, pass, miss) {
    var spec = Spec();

    test.done(pass());
}

function testSpecParamUserAgent(test, pass, miss) {
    var ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25";
    var spec = Spec({ userAgent: ua });

    if (spec.USER_AGENT === ua) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testSpecParamDeviceInfo(test, pass, miss) {
    var ua = "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25";
    var spec = Spec({ userAgent: ua, dpr: 2 });

    if (spec.DISPLAY_DPR === 2) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

/*
function testSpec_normalizeVersionString(test, pass, miss) {
    var result = [
            "0.0.0",    Spec.normalizeVersionString("0.0.0"),
            "1.2.3",    Spec.normalizeVersionString("1.2.3"),
            "10.11.12", Spec.normalizeVersionString("10.11.12"),
            "10.11.12", Spec.normalizeVersionString("10.11.12a"),
            "0.0.0",    Spec.normalizeVersionString("0"),
            "0.1.0",    Spec.normalizeVersionString("0.1"),
            "0.0.1",    Spec.normalizeVersionString("0.0.1"),
        ];

    var ok = true;

    for (var i = 0, iz = result.length; i < iz; i += 2) {
        if ( result[i] !== result[i + 1] ) {
            ok = false;
            break;
        }
    }

    if (ok) {
        test.done(pass());
    } else {
        test.done(miss());
    }
}
 */

// ------------------------------------------
function testDeviceiPhone5(test, pass, miss) {
    var param = {
            dpr: 2,
            width: 320,
            height: 568,
            userAgent: "Mozilla/5.0 (iPhone; CPU iPhone OS 6_0 like Mac OS X) AppleWebKit/536.26 (KHTML, like Gecko) Version/6.0 Mobile/10A403 Safari/8536.25"
        };

    var spec = Spec(param);

    if (spec.ID === "iPhone 5" &&
        spec.OS_TYPE === "iOS") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceNexus5(test, pass, miss) {
    var userAgent = "Mozilla/5.0 (Linux; Android 4.4; Nexus 5 Build/BuildID) AppleWebKit/537.36 (KHTML, like Gecko) Version/4.0 Chrome/30.0.0.0 Mobile Safari/537.36";
    var spec = Spec({ userAgent: userAgent });

    if (spec.ID === "Nexus 5" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceRevision_Nexus7_2013(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Linux; Android 4.3; Nexus 7 Build/JWR66N) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/27.0.1453.111 Safari/537.36",
            dpr: 2
        };

    var spec = Spec(param);

    if (spec.ID === "Nexus 7 (2013)" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testFirefoxMobileForAndroid(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Android; Mobile; rv:13.0) Gecko/13.0 Firefox/13.0"
        };

    var spec = Spec(param);

    if (spec.ID === "" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceFirefoxOS(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Mobile; rv:18.0) Gecko/18.0 Firefox/18.0"
        };

    var spec = Spec(param);

    if (spec.ID === "" &&
        spec.OS_TYPE === "Firefox OS") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}


function testDevice_INFOBAR_A01(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Linux; U; Android 2.3.3; ja-jp; INFOBAR A01 Build/S6160) AppleWebKit/533.1 (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1"
        };

    var spec = Spec(param);

    if (spec.ID === "INFOBAR A01" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceWindowsPhone8S(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; HTC; Windows Phone 8S by HTC)"
        };

    var spec = Spec(param);

    if (spec.ID === "8S" &&
        spec.OS_TYPE === "Windows Phone") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceWindowsPhoneLumia920(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)"
        };

    var spec = Spec(param);

    if (spec.ID === "Lumia 920" &&
        spec.OS_TYPE === "Windows Phone") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceKindle(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Linux; U; Android 4.0.3; en-us; KFTT Build/IML74K) AppleWebKit/535.19 (KHTML, like Gecko) Silk/3.4 Mobile Safari/535.19 Silk-Accelerated=true"
        };

    var spec = Spec(param);

    if (spec.ID === "KFTT" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testDeviceGooglePlayEdition(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Linux; U; Android 4.2.2; en-us; HTC6500LVW 4G Build/JDQ39) AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30"
        };

    var spec = Spec(param);

    if (spec.ID === "HTC6500LVW" &&
        spec.OS_TYPE === "Android") {
        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testOS(test, pass, miss) {
    var spec = Spec();

    test.done(pass());
}

function testMacPro(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36"
        };
    var spec = Spec(param);

    if (spec.OS_TYPE === "Mac OS X" &&
        parseFloat(spec.OS_VERSION) === 10.8 &&
        spec.OS_VERSION === "10.8.5") {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testIE11Preview(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Windows NT 6.1; Trident/7.0; rv:11.0) like Gecko"
        };
    var spec = Spec(param);

    if (spec.OS_TYPE === "Windows" &&
        parseFloat(spec.OS_VERSION) === 6.1 &&
        spec.OS_VERSION === "6.1.0") {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testIE10(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.1; Trident/6.0)"
        };
    var spec = Spec(param);

    if (spec.OS_TYPE === "Windows" &&
        parseFloat(spec.OS_VERSION) === 6.1 &&
        spec.OS_VERSION === "6.1.0") {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testWindowsPhone75(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (compatible; MSIE 9.0; Windows Phone OS 7.5; Trident/5.0; IEMobile/9.0)"
        };
    var spec = Spec(param);

    if (spec.OS_TYPE === "Windows Phone" &&
        parseFloat(spec.OS_VERSION) === 7.5 &&
        spec.OS_VERSION === "7.5.0") {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

function testFirefox11(test, pass, miss) {
    var param = {
            userAgent: "Mozilla/5.0 (Windows NT 6.1; WOW64; rv:11.0) Gecko/20100101 Firefox/11.0"
        };
    var spec = Spec(param);

    if (spec.OS_TYPE == "Windows" &&
        parseFloat(spec.OS_VERSION) === 6.1 &&
        spec.OS_VERSION === "6.1.0") {

        test.done(pass());
    } else {
        test.done(miss());
    }
}

})((this || 0).self || global);

