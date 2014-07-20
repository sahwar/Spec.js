(function(global) {
"use strict";

// --- dependency modules ----------------------------------
// --- define / local variables ----------------------------
//var _runOnNode = "process" in global;
//var _runOnWorker = "WorkerLocation" in global;
//var _runOnBrowser = "document" in global;

// --- class / interfaces ----------------------------------
var methods = {
    "isGoodByeAndroidBrowser":  Spec_isGoodByeAndroidBrowser,  // Spec#isGoodByeAndroidBrowser():Boolean
    "getHardwareConcurrency":   Spec_getHardwareConcurrency,   // Spec#getHardwareConcurrency():Integer
    "getMaxConnections":        Spec_getMaxConnections,        // Spec#getMaxConnections():Integer
    "getConnectionsPerHost":    Spec_getConnectionsPerHost,    // Spec#getConnectionsPerHost():Integer
    "isMobileDevice":           Spec_isMobileDevice            // Spec#isMobileDevice():Boolean
};

for (var name in methods) {
    global["Spec_" in global ? "Spec_" : "Spec"]["prototype"][name] = methods[name];
}

// --- implements ------------------------------------------
function Spec_isGoodByeAndroidBrowser() { // @ret Boolean
                                          // @desc is Android 4.0-4.3 Browser
    var osVer = parseFloat(this["OS_VERSION"]);

    if (!this["WEB_VIEW"]) {
        if (this["OS"] === "Android") {
            if (osVer >= 4.0 && osVer < 4.4) {
                var ua = this["USER_AGENT"];

                if ( /Chrome/.test(ua) ) {
                    if ( /Version/.test(ua) ) {
                        return true;
                    }
                } else if ( !/Silk|Firefox/.test(ua) ) {
                    return true;
                }
            }
        }
    }
    return false;
}

function Spec_getHardwareConcurrency() { // @ret Integer - from 1
    var nav = global["navigator"] || {};
    var cores = nav[ this.prefix(nav, "hardwareConcurrency") ] || this["CPU_CORES"] || 1;

    return cores;
}

function Spec_getMaxConnections() { // @ret Integer - max connections.
    var ver = parseFloat(this["OS_VERSION"]);
    var max = 16;

    if ( this["BROWSER_NAME"] === "Browser" ) { // Android Browser
        max = ver < 4.0 ? 10 : 16;
    }
    return max;
}

function Spec_getConnectionsPerHost() { // @ret Integer - connections per host.
    var ver = parseFloat(this["OS_VERSION"]);
    var cph = 6;

    switch ( this["BROWSER_NAME"] ) {
    case "Browser":
        cph = ver < 4.0 ?  8 :  6;
        break;
    case "IE":
        cph = (ver < 10) ? 6
            : (ver < 11) ? 8
                         : 13;
    }
    return cph;
}

function Spec_isMobileDevice() { // @ret Boolean
                                 // @desc Mobile/Tablet Device.
    var isMobile = /Android|iOS|Windows Phone/;

    return isMobile.test(this["OS"]);
}

// --- validate / assertions -------------------------------
//{@dev
//function $valid(val, fn, hint) { if (global["Valid"]) { global["Valid"](val, fn, hint); } }
//function $type(obj, type) { return global["Valid"] ? global["Valid"].type(obj, type) : true; }
//function $keys(obj, str) { return global["Valid"] ? global["Valid"].keys(obj, str) : true; }
//function $some(val, str, ignore) { return global["Valid"] ? global["Valid"].some(val, str, ignore) : true; }
//function $args(fn, args) { if (global["Valid"]) { global["Valid"].args(fn, args); } }
//}@dev

// --- exports ---------------------------------------------

})((this || 0).self || global); // WebModule idiom. http://git.io/WebModule
