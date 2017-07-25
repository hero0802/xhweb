var TCA = {
    config: function(a) {
        TCACore.getInstance(a)
    },
    SM1: "SM1",
    SM4: "SM4",
    DES: "DES",
    DES3: "3DES",
    AES: "AES",
    RC4: "RC4",
    SM2: "SM2",
    RSA1024: "RSA1024",
    RSA2048: "RSA2048",
    SHA256: "SHA256",
    SHA1: "SHA1",
    SM3: "SM3",
    MD5: "MD5",
    digitalSignature: 128,
    nonRepudiation: 64,
    keyEncipherment: 32,
    dataEncipherment: 16,
    keyAgreement: 8,
    keyCertSign: 4,
    cRLSign: 2,
    encipherOnly: 1,
    decipherOnly: 32768,
    contentCommitment: 64,
    serverAuth: "1.3.6.1.5.5.7.3.1",
    clientAuth: "1.3.6.1.5.5.7.3.2",
    codeSigning: "1.3.6.1.5.5.7.3.3",
    emailProtection: "1.3.6.1.5.5.7.3.4",
    ipsecEndSystem: "1.3.6.1.5.5.7.3.5",
    ipsecTunnel: "1.3.6.1.5.5.7.3.6",
    ipsecUser: "1.3.6.1.5.5.7.3.7",
    timeStamping: "1.3.6.1.5.5.7.3.8",
    OCSPSigning: "1.3.6.1.5.5.7.3.9",
    dvcs: "1.3.6.1.5.5.7.3.10",
    sbgpCertAAServerAuth: "1.3.6.1.5.5.7.3.11",
    scvpResponder: "1.3.6.1.5.5.7.3.12",
    eapOverPPP: "1.3.6.1.5.5.7.3.13",
    eapOverLAN: "1.3.6.1.5.5.7.3.14",
    scvpServer: "1.3.6.1.5.5.7.3.15",
    scvpClient: "1.3.6.1.5.5.7.3.16",
    ipsecIKE: "1.3.6.1.5.5.7.3.17",
    capwapAC: "1.3.6.1.5.5.7.3.18",
    capwapWTP: "1.3.6.1.5.5.7.3.19",
    smartcardlogon: "1.3.6.1.4.1.311.20.2.2",
    EX: {}
};
TCA.EX.szOID_RSA_MD5RSA = "1.2.840.113549.1.1.4";
TCA.EX.szOID_RSA_SHA1RSA = "1.2.840.113549.1.1.5";
TCA.EX.szOID_SM2_SM3SM2 = "1.2.156.10197.1.501";
TCA.EX.INPUT_BASE64 = 1;
TCA.EX.INPUT_HEX = 2;
TCA.EX.OUTPUT_BASE64 = 4;
TCA.EX.OUTPUT_HEX = 8;
TCA.EX.INNER_CONTENT = 16;
TCA.EX.PLAINTEXT_UTF8 = 32;
TCA.EX.ONLY_SIGNATURE = 512;
TCA.EX._pta_OverlapPeriod = 30;
TCA.EX.FUNCOPT_NOALERT = 2147483648;
TCA.EX.PARAM_FILENAME = 4096;
TCA.EX.PARAM_STRING = 8192;
TCA.EX.PTA_CALG_SHA256 = 2097152;
TCA.EX.PFX_BASE64 = 8;
TCA.EX.SIGNOPTION_P7 = 1;
TCA.EX.SIGNOPTION_RAW = 2;
TCA.EX.SIGNOPTION_P7_INNER_CONTEXT = 256;
TCA.EX.SIGNOPTION_P7_INNER_CERT = 512;
TCA.EX.SIGNOPTION_P7_INNER_AUTHATTR = 1024;
TCA.EX.PARAM_IN_FILE = 1;
TCA.EX.PARAM_IN_MSG = 2;
TCA.EX.PARAM_OUT_FILE = 4;
TCA.EX.PARAM_OUT_MSG = 8;
TCA.EX.PARAM_TO_U16 = 256;
TCA.EX.PARAM_TO_U8 = 512;
TCA.EX.PARAM_IN_B64 = 1024;
TCA.EX.PARAM_OUT_B64 = 2048;
TCA.EX.PARAM_INC_CERT = 16777216;
TCA.EX.PARAM_INC_CONTEXT = 33554432;
TCA.EX.SM2_SOFT_CSP_NAME = "iTrusChina Cryptographic Service Provider v1.0.0";
TCA.EX.CRYPT_EXPORTABLE = 1;
TCA.IO = {};
TCA.IO.MSG = 1;
TCA.IO.FILE = 2;
TCA.IO.SELFILE = 4;
TCA.IO.BIN = 65536;
TCA.IO.B64 = 131072;
TCA.IO.HEX = 262144;
TCA.IO.U8 = 524288;
TCA.VERIFYOPT = {};
TCA.VERIFYOPT.CONTEXT_IN_P7 = 1;
TCA.VERIFYOPT.CONTEXT_IN_INPUT = 2;
TCA.VERIFYOPT.CERT_IN_P7 = 16;
TCA.VERIFYOPT.CERT_IN_INPUT = 32;
TCA.EX.exkeyusagemap = {
    "1.3.6.1.5.5.7.3.1": "serverAuth",
    "1.3.6.1.5.5.7.3.2": "clientAuth",
    "1.3.6.1.5.5.7.3.3": "codeSigning",
    "1.3.6.1.5.5.7.3.4": "emailProtection",
    "1.3.6.1.5.5.7.3.5": "ipsecEndSystem",
    "1.3.6.1.5.5.7.3.6": "ipsecTunnel",
    "1.3.6.1.5.5.7.3.7": "ipsecUser",
    "1.3.6.1.5.5.7.3.8": "timeStamping",
    "1.3.6.1.5.5.7.3.9": "OCSPSigning",
    "1.3.6.1.5.5.7.3.10": "dvcs",
    "1.3.6.1.5.5.7.3.11": "sbgpCertAAServerAuth",
    "1.3.6.1.5.5.7.3.12": "scvpResponder",
    "1.3.6.1.5.5.7.3.13": "eapOverPPP",
    "1.3.6.1.5.5.7.3.14": "eapOverLAN",
    "1.3.6.1.5.5.7.3.15": "scvpServer",
    "1.3.6.1.5.5.7.3.16": "scvpClient",
    "1.3.6.1.5.5.7.3.17": "ipsecIKE",
    "1.3.6.1.5.5.7.3.18": "capwapAC",
    "1.3.6.1.5.5.7.3.19": "capwapWTP",
    "1.3.6.1.4.1.311.20.2.2": "smartcardlogon"
};
function tcu() {}
tcu.extKeyUsageMap = {
    "1.3.6.1.5.5.7.3.1": "serverAuth",
    "1.3.6.1.5.5.7.3.2": "clientAuth",
    "1.3.6.1.5.5.7.3.3": "codeSigning",
    "1.3.6.1.5.5.7.3.4": "emailProtection",
    "1.3.6.1.5.5.7.3.5": "ipsecEndSystem",
    "1.3.6.1.5.5.7.3.6": "ipsecTunnel",
    "1.3.6.1.5.5.7.3.7": "ipsecUser",
    "1.3.6.1.5.5.7.3.8": "timeStamping",
    "1.3.6.1.5.5.7.3.9": "OCSPSigning",
    "1.3.6.1.5.5.7.3.10": "dvcs",
    "1.3.6.1.5.5.7.3.11": "sbgpCertAAServerAuth",
    "1.3.6.1.5.5.7.3.12": "scvpResponder",
    "1.3.6.1.5.5.7.3.13": "eapOverPPP",
    "1.3.6.1.5.5.7.3.14": "eapOverLAN",
    "1.3.6.1.5.5.7.3.15": "scvpServer",
    "1.3.6.1.5.5.7.3.16": "scvpClient",
    "1.3.6.1.5.5.7.3.17": "ipsecIKE",
    "1.3.6.1.5.5.7.3.18": "capwapAC",
    "1.3.6.1.5.5.7.3.19": "capwapWTP",
    "1.3.6.1.4.1.311.20.2.2": "smartcardlogon"
};
tcu.isStr = function(a) {
    return "string" === typeof a
};
tcu.isNum = function(a) {
    return "number" === typeof a
};
tcu.isBool = function(a) {
    return "Boolean" === typeof a
};
tcu.isUndef = function(a) {
    return "undefined" === typeof a
};
tcu.isNull = function(a) {
    return "null" === typeof a
};
tcu.isObj = function(a) {
    return "object" === typeof a
};
tcu.urlDec = function(a) {
    return decodeURI(a.replace(/\+/g, " "))
};
tcu.convKeyUsageArr2Num = function(a) {
    for (var b = 0,
    c = 0; c < a.length; c++)"digitalSignature" == a[c] ? b |= TCA.digitalSignature: "nonRepudiation" == a[c] ? b |= TCA.nonRepudiation: "keyEncipherment" == a[c] ? b |= TCA.keyEncipherment: "dataEncipherment" == a[c] ? b |= TCA.dataEncipherment: "keyAgreement" == a[c] ? b |= TCA.keyAgreement: "keyCertSign" == a[c] ? b |= TCA.keyCertSign: "cRLSign" == a[c] ? b |= TCA.cRLSign: "encipherOnly" == a[c] ? b |= TCA.encipherOnly: "decipherOnly" == a[c] ? b |= TCA.decipherOnly: "contentCommitment" == a[c] && (b |= TCA.contentCommitment);
    return b
};
tcu.convKeyUsageNum2Arr = function(a) {
    var b = [];
    if (0 === a) return b;
    a & TCA.digitalSignature && b.push("digitalSignature");
    a & TCA.nonRepudiation && b.push("nonRepudiation");
    a & TCA.keyEncipherment && b.push("keyEncipherment");
    a & TCA.dataEncipherment && b.push("dataEncipherment");
    a & TCA.keyAgreement && b.push("keyAgreement");
    a & TCA.keyCertSign && b.push("keyCertSign");
    a & TCA.cRLSign && b.push("cRLSign");
    a & TCA.encipherOnly && b.push("encipherOnly");
    a & TCA.decipherOnly && b.push("decipherOnly");
    a & TCA.contentCommitment && b.push("contentCommitment");
    return b
};
tcu.convSignAlg2Str = function(a) {
    switch (a) {
    case 81:
        return "SM3WithSM2";
    case 98:
        return "SHA1WithRSA"
    }
    return "UnknownSignAlg"
};
tcu.convAlg2SignAlgId = function(a) {
    return a == TCA.RSA1024 || a == TCA.RSA2048 ? 98 : a == TCA.SM2 ? 81 : -1
};
tcu.convPubKeyAlg2Str = function(a) {
    switch (a) {
    case 1:
    case 2:
    case 3:
    case 16:
        return "RSA";
    case 17:
        return "SM2"
    }
    return "UnknownAlg"
};
tcu.convPubKeyAlg2Size = function(a) {
    switch (a) {
    case 1:
        return 1024;
    case 2:
        return 2048;
    case 3:
        return 4096;
    case 17:
        return 256
    }
    return - 1
};
tcu.convExtKeyUsageOID2Name = function(a) {
    for (var b = [], c = 0; c < a.length; c++) b.push(tcu.extKeyUsageMap[a[c]]);
    return b
};
tcu.convStr2Json = function(a) {
    return eval("(" + a + ")")
};
tcu.convKeySize2CSP = function(a) {
    return a == TCA.RSA1024 ? 67108864 : a == TCA.RSA2048 ? 134217728 : a == TCA.SM2 ? 16777216 : -1
};
tcu.strInList = function(a, b) {
    if (0 >= b.length) return ! 1;
    for (var c = 0; c < b.length; c++) if (a === b[c]) return ! 0;
    return ! 1
};
tcu.tcaAlg2SDKAlg = function(a) {
    switch (a) {
    case TCA.SM4:
        return 65;
    case TCA.DES:
        return 67;
    case TCA.DES3:
        return 68;
    case TCA.AES:
        return 69;
    case TCA.RC4:
        return 70;
    case TCA.SM2:
        return 17;
    case TCA.RSA1024:
        return 1;
    case TCA.RSA2048:
        return 2;
    case TCA.SHA256:
        return 50;
    case TCA.SHA1:
        return 49;
    case TCA.SM3:
        return 33;
    case TCA.MD5:
        return 51;
    default:
        return 0
    }
};
tcu.arr2Str = function(a) {
    for (var b = "",
    c = 0; c < a.length; c++) b = b + '"' + a[c] + '", ';
    0 < b.length && (b = b.substr(0, b.length - 2));
    return "[" + b + "]"
};
tcu.sign = function(a, b, c, h, e, d, f, g, k, l, m, n) {
    a = '{"certStore" : ' + tcu.arr2Str(a) + ',"certIDArr" : ' + tcu.arr2Str(b) + ',"hash" :' + c + ',"bSignHash" : ' + h + ',"bSignP7" : ' + e + ',"bAttr" :' + d + ',"bIncCtx" : ' + f + ',"bIncCert" : ' + g + ',"inType" : ' + k + ',"inParam" : "' + l + '","outType" : ' + m + ',"outParam" : "' + n + '"}';
    b = TCACore.getInstance();
    var q;
    try {
        q = b.call("Sign/sign", a)
    } catch(p) {
        return TCACErr.throwErr(p, ERRMAP.SIGN_ERROR),
        null
    }
    return q
};
tcu.verify = function(a, b, c, h, e, d, f, g, k) {
    a = '{"b64Cert" : "' + a + '", "isHashSign" : ' + b + ', "isPkcs7" : ' + c + ', "hash" :' + h + ',"verifyOption" : ' + e + ', "signInType" : ' + d + ', "signInParam" : "' + f + '", "plainInType" : ' + g + ', "plainInParam" : "' + k + '"}';
    b = TCACore.getInstance();
    var l;
    try {
        l = b.call("Verify/verify", a)
    } catch(m) {
        return TCACErr.throwErr(m, ERRMAP.VERIFY_ERROR),
        null
    }
    return l
};
tcu.enc = function(a, b, c, h, e, d, f) {
    a = '{"certArr" : ' + tcu.arr2Str(a) + ',"symmAlg" : ' + b + ', "bEncP7" : ' + c + ', "inType" : ' + h + ', "inParam" : "' + e + '", "outType" : ' + d + ', "outParam" : "' + f + '"}';
    b = TCACore.getInstance();
    var g;
    try {
        g = b.call("Enc/enc", a)
    } catch(k) {
        return TCACErr.throwErr(k, ERRMAP.ENCRYPT_ERROR),
        null
    }
    return g
};
tcu.dec = function(a, b, c, h, e, d, f) {
    a = '{"certStore" : ' + tcu.arr2Str(a) + ',"certIDArr" : ' + tcu.arr2Str(b) + ',"bIsP7" : ' + c + ',"inType" : ' + h + ',"inParam" : "' + e + '","outType" : ' + d + ',"outParam" : "' + f + '"}';
    b = TCACore.getInstance();
    var g;
    try {
        g = b.call("Dec/dec", a)
    } catch(k) {
        return TCACErr.throwErr(k, ERRMAP.DECRYPT_ERROR),
        null
    }
    return g
};
tcu.checkHashAlg = function(a, b) {
    if ("SM2" === this.publicKeyAlg() && b != TCA.SM3 || "RSA" === this.publicKeyAlg() && b === TCA.SM3) return TCACErr.throwErr(ERRMAP.SIGN_ERROR_HASH_ALG),
    null
};
tcu.getSrvVersion = function() {
    var a = '{"outType" :' + TCA.IO.MSG + "}",
    b = TCACore.getInstance(),
    c;
    try {
        c = b.call("Server/version", a)
    } catch(h) {
        return TCACErr.throwErr(h, ERRMAP.HASH_ERROR),
        null
    }
    return c
};
function CertStore(a, b) {
    if (!tcu.isStr(a) || !tcu.isNum(b)) return TCACErr.throwErr(ERRMAP.CERTSTORE_INIT_WRONGTYPE),
    null;
    var c = TCACore.getInstance();
    a = c.getCfg("useAlias") ? c.alias2Full(a) : a;
    var h;
    h = a;
    this.genCsr = function(a, c) {
        var f = TCACore.getInstance(),
        g = 1,
        k = "topca",
        l = f.getCfg("genKeySpec"),
        m,
        n,
        q = f.getCfg("exportKeyAble") ? 1 : 0,
        p = "noSet";
        n = f.getCfg("genCsrUseSHA256") ? TCA.SHA256: TCA.SHA1;
        if (1 === arguments.length) if (tcu.isStr(a)) g = 1,
        m = tcu.tcaAlg2SDKAlg(a),
        n = a == TCA.SM2 ? tcu.tcaAlg2SDKAlg(TCA.SM3) : tcu.tcaAlg2SDKAlg(n);
        else if (a instanceof Certificate) {
            g = a.publicKeyAlg();
            m = a.publicKeySize();
            if ("RSA" === g && 1024 === m) l = TCA.RSA1024;
            else if ("RSA" == g && 2048 === m) l = TCA.RSA2048;
            else if ("SM2" == g) l = TCA.SM2;
            else return TCACErr.throwErr(ERRMAP.GEN_CSR_ERR_PUBKEY_ALG),
            null;
            g = 2;
            m = tcu.tcaAlg2SDKAlg(l);
            n = l == TCA.SM2 ? tcu.tcaAlg2SDKAlg(TCA.SM3) : tcu.tcaAlg2SDKAlg(n);
            l = a._keySpec;
            p = a._keyStoreContainer
        } else return TCACErr.throwErr(ERRMAP.GEN_CSR_ERROR_PARAMS),
        null;
        else if (2 === arguments.length) g = 1,
        k = c,
        m = tcu.tcaAlg2SDKAlg(a),
        n = a == TCA.SM2 ? tcu.tcaAlg2SDKAlg(TCA.SM3) : tcu.tcaAlg2SDKAlg(n);
        else if (0 === arguments.length) g = 1,
        m = tcu.tcaAlg2SDKAlg(TCA.SM2),
        n = tcu.tcaAlg2SDKAlg(TCA.SM3);
        else return TCACErr.throwErr(ERRMAP.GEN_CSR_ERROR_PARAMS),
        null;
        var k = '{"mode" : ' + g + ',"subject" : "' + k + '","provName" : "' + h + '","provType" : ' + b + ',"containerName" : "' + p + '","keySpec" :' + l + ',"keyAlg" :' + m + ',"hashAlg" : ' + n + ',"opation" : ' + q + "}",
        r;
        try {
            r = f.call("Csr/genCsr", k)
        } catch(s) {
            return TCACErr.throwErr(s, ERRMAP.GEN_CSR_ERROR),
            null
        }
        return new Csr(r.csrInfo)
    };
    this.listCerts = function() {
        for (var a = CertStore.listAllCerts(), b = [], c = 0; c < a.length; c++) {
            var g = a[c];
            g._keyStoreName === h && b.push(g)
        }
        return new CertSet(b)
    };
    this.getSupportedKeyAlgs = function() {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.importPFX = function(a, b) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.importPFXFile = function(a, b) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    }
}
CertStore.listAllCerts = function() {
    for (var a = TCACore.getInstance(), b = ["MY", "Address"], c = [], h = 0; h < b.length; h++) {
        var e = '{"certStoreName" : "' + b[h] + '", "needB64" : true}',
        d = null;
        try {
            d = a.call("CertStore/listCerts", e)
        } catch(f) {
            return TCACErr.throwErr(f, ERRMAP.LIST_CERT_ERROR),
            new CertSet
        }
        e = d.certArr;
        for (d = 0; d < e.length; d++) {
            e[d].notBefore = new Date(e[d].notBefore);
            e[d].notAfter = new Date(e[d].notAfter);
            var g = new Certificate(e[d]);
            a.certInLic(g) && c.push(g)
        }
    }
    return new CertSet(c)
};
CertStore.listStore = function(a) {
    a = CertStore.listKeyStore(a);
    for (var b = [], c = 0; c < a.length; c++) b.push(a[c].name);
    return b
};
CertStore.byName = function(a) {
    for (var b = CertStore.listKeyStore(!1), c = 0; c < b.length; c++) if (a === b[c].name) return new CertStore(b[c].name, b[c].type);
    return null
};
CertStore.byCert = function(a) {
    return a instanceof Certificate ? new CertStore(a._keyStoreName, a._keyStoreType) : (TCACErr.throwErr(ERRMAP.BY_CERT_ERR_TYPE), null)
};
CertStore.installCert = function(a, b, c) {
    var h = TCACore.getInstance(),
    e,
    d;
    if (1 === arguments.length) e = "InstallSignCert/installSignCert",
    d = '{"certStoreName"   : "MY", "caCertStoreName" : "Ca", "b64SignCertP7"   : "' + a + '"}';
    else if (3 === arguments.length) {
        e = "InstallEncCert/installEncCert";
        var f = c.split("&");
        d = {};
        for (var g = 0; g < f.length; g++) {
            var k = f[g].split("=");
            d[k[0]] = TCA.EX.URLDecode(k[1])
        }
        f = d.userSeal;
        g = d.encPrivateKeyUser;
        k = d.userIV;
        switch (d.userCipher) {
        case "AES":
        case "AES_128":
            d = TCA.AES;
            break;
        case "DES":
            d = TCA.DES;
            break;
        case "DESEDE":
        case "DES3":
        case "3DES":
            d = TCA.DES3;
            break;
        case "SM4":
        case "SMS4":
            d = TCA.SM4;
            break;
        case "SM1":
            d = TCA.SM1;
            break;
        case "rc2":
        case "AES_192":
        case "AES_256":
            return TCACErr.throwErr(ERRMAP.INSTALL_CERT_ERR_UNKNOWN_SYMMALG),
            null;
        default:
            d = TCA.AES
        }
        var l = (new Certificate(a))._keyStoreName;
        d = '{"certStoreName" : "MY", "mode" : ' + (0 <= l.indexOf("Microsoft") || 0 <= l.indexOf("iTrus") || "RSA" == l ? 1 : h.getCfg("installMode") ? 2 : 1) + ', "b64SignCert" : "' + a + '", "b64UserSeal" : "' + f + '", "b64EncUserCert" : "' + g + '", "symmAlg" : ' + d + ', "b64IV" : "' + k + '"}'
    } else return TCACErr.throwErr(ERRMAP.INSTALL_CERT_ERR_PARAMS),
    null;
    var m;
    try {
        m = h.call(e, d)
    } catch(n) {
        return TCACErr.throwErr(n, ERRMAP.INSTALL_CERT_ERR),
        null
    }
    return new Certificate(m.certInfo)
};
CertStore.listKeyStore = function(a) {
    var b = TCACore.getInstance(),
    c = null;
    try {
        c = b.call("KeyStore/listKeyStore", '{"mode" : 1 }')
    } catch(h) {
        return TCACErr.throwErr(h, ERRMAP.LIST_STORE_ERROR),
        []
    }
    c = c.keyStoreArr;
    b.setKeyStoreListCache(c);
    a = b.getCfg("disableWhiteList") ? !1 : a;
    for (var e = b.getCfg("whiteList"), d = b.getCfg("useAlias"), f = [], g = 0; g < c.length; g++) {
        var k = c[g].name;
        a ? tcu.strInList(k, e) && f.push({
            name: d ? b.full2Alias(k) : k,
            type: c[g].type
        }) : f.push({
            name: d ? b.full2Alias(k) : k,
            type: c[g].type
        })
    }
    return f
};
function CertSet(a) {
    var b;
    b = [];
    if (a instanceof Array) {
        if (0 != a.length) if (a[0] instanceof Certificate) b = a;
        else if (tcu.isStr(a[0])) for (var c = 0; c < a.length; c++) b.push(new Certificate(a[c]));
        else return TCACErr.throwErr(ERRMAP.CERT_SET_INIT_ERROR_TYPE),
        null
    } else if (tcu.isStr(a)) b.push(new Certificate(a));
    else {
        if (a instanceof Pkcs7) return TCACErr.throwErr(ERRMAP.CERT_SET_INIT_ERROR_TYPE_2),
        null;
        if (a instanceof Certificate) b.push(a);
        else if (0 != arguments.length) return TCACErr.throwErr(ERRMAP.CERT_SET_INIT_ERROR_TYPE_3),
        null
    }
    this.size = function() {
        return b.length
    };
    this.get = function(a) {
        return b[a]
    };
    this.bySerialnumber = function(a) {
        for (var c = 0; c < b.length; c++) if (b[c].serialNumber() === a.toUpperCase()) return new CertSet(b[c]);
        return new CertSet
    };
    this.bySubject = function(a) {
        for (var c = [], d = 0; d < b.length; d++) 0 <= b[d].subject().search(a) && c.push(b[d]);
        return 0 == c.length ? new CertSet: new CertSet(c)
    };
    this.byIssuer = function(a) {
        for (var c = [], d = 0; d < b.length; d++) 0 <= b[d].issuer().search(a) && c.push(b[d]);
        return 0 == c.length ? new CertSet: new CertSet(c)
    };
    this.byValidity = function(a) {
        for (var c = 0 == arguments.length ? new Date: new Date(date), d = [], f = 0; f < b.length; f++) b[f].notBefore() <= c && c <= b[f].notAfter() && d.push(b[f]);
        return 0 == d.length ? new CertSet: new CertSet(d)
    };
    this.byKeyUsage = function(a) {
        var c = 0;
        if (a instanceof Array) c = tcu.convKeyUsageArr2Num(a);
        else if (tcu.isNum(a)) c = a;
        else return TCACErr.throwErr(ERRMAP.CERT_SET_FILTER_KEYUSAGE_ERROR),
        null;
        a = [];
        for (var d = 0; d < b.length; d++)(tcu.convKeyUsageArr2Num(b[d].keyUsage()) & c) == c && a.push(b[d]);
        return 0 == a.length ? new CertSet: new CertSet(a)
    };
    this.forSign = function() {
        return this.byKeyUsage(128)
    };
    this.forEncrypt = function() {
        return this.byKeyUsage(32)
    };
    this.bySubjcet = this.bySubject;
    this.encryptMessage = function(a, b) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.encryptFile = function(a, b, c, f) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.uiSelect = function() {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    }
}
function Certificate(a) {
    var b = {
        certInfo: null,
        _parseCert: function(a) {
            var b = TCACore.getInstance(),
            e;
            try {
                e = b.call("Certificate/parseCert", '{"certStoreNameArr" : ["MY", "Address"], "b64Cert" : "' + a + '"}')
            } catch(d) {
                return TCACErr.throwErr(d, ERRMAP.CERTIFICATE_PARSE_ERROR),
                null
            }
            return e.certInfo
        }
    };
    this._keyStoreContainer = this._keyStoreType = this._keyStoreName = "";
    this._keySpec = 0;
    this._certStoreName = "";
    if (tcu.isStr(a)) b.certInfo = b._parseCert(a),
    b.certInfo.b64 = a;
    else if (tcu.isObj(a)) b.certInfo = a;
    else return TCACErr.throwErr(ERRMAP.CERTIFICATE_INIT_WRONGTYPE),
    null;
    this._keyStoreName = b.certInfo.keyStoreName;
    this._keyStoreType = b.certInfo.keyStoreType;
    this._keyStoreContainer = b.certInfo.certContainerName;
    this._keySpec = b.certInfo.certKeySpec;
    this._certStoreName = b.certInfo.certStoreName;
    this.serialNumber = function() {
        return b.certInfo.SN
    };
    this.subject = function() {
        return b.certInfo.subject.winDn
    };
    this.issuer = function() {
        return b.certInfo.issuer.winDn
    };
    this.notBefore = function() {
        return b.certInfo.notBefore
    };
    this.notAfter = function() {
        return b.certInfo.notAfter
    };
    this.crlUrl = function() {
        return b.certInfo.crlUrl
    };
    this.signAlg = function() {
        return tcu.convSignAlg2Str(b.certInfo.signAlg)
    };
    this.publicKeyAlg = function() {
        return tcu.convPubKeyAlg2Str(b.certInfo.pubKeyAlg)
    };
    this.publicKeySize = function() {
        return tcu.convPubKeyAlg2Size(b.certInfo.pubKeyAlg)
    };
    this.keyUsage = function() {
        return tcu.convKeyUsageNum2Arr(b.certInfo.keyUsage)
    };
    this.extededKeyUsage = function() {
        return tcu.convExtKeyUsageOID2Name(b.certInfo.extKeyUsage)
    };
    this.b64str = this.toBase64 = function() {
        return b.certInfo.b64
    };
    this.signMessage = function(a, h, e) {
        h = void 0 === h ? !0 : h;
        if (void 0 === e) e = "RSA" === this.publicKeyAlg() ? TCA.SHA1: TCA.SM3;
        else if (!tcu.checkHashAlg(this.publicKeyAlg(), e)) return null;
        var d = TCACore.getInstance(),
        f = TCA.IO.MSG | TCA.IO.U8,
        g = TCA.IO.MSG | TCA.IO.B64;
        e = tcu.tcaAlg2SDKAlg(e);
        d = d.getCfg("signPkcs7WithAttr");
        a = tcu.sign(["MY", "Address"], [b.certInfo.certID], e, !1, !0, d, h, !0, f, a, g, "noSet");
        return null != a ? a.result: null
    };
    this.signHashRaw = function(a) {
        var h = TCA.IO.MSG | TCA.IO.B64,
        e = TCA.IO.MSG | TCA.IO.B64,
        d = [b.certInfo.certID],
        f = tcu.tcaAlg2SDKAlg(TCA.SHA1);
        a = tcu.sign(["MY", "Address"], d, f, !0, !1, !1, !1, !1, h, a, e, "noSet");
        return null != a ? a.result: null
    };
    this.verifyHashSignRaw = function(a, b) {
        var e = this.toBase64(),
        d = TCA.VERIFYOPT.CONTEXT_IN_INPUT | TCA.VERIFYOPT.CERT_IN_INPUT,
        f = TCA.IO.MSG | TCA.IO.B64,
        g = TCA.IO.MSG | TCA.IO.B64,
        k = tcu.tcaAlg2SDKAlg(TCA.SHA1),
        e = tcu.verify(e, !0, !1, k, d, f, a, g, b);
        return null != e ? e.result: null
    };
    this.setPin = function(a) {
        a = tcu.setPin(a);
        return null != a ? a.result: null
    };
    this.signMessageRaw = function(a, h) {
        if (void 0 === h) h = "RSA" === this.publicKeyAlg() ? TCA.SHA1: TCA.SM3;
        else if (!tcu.checkHashAlg(this.publicKeyAlg(), h)) return null;
        var e = TCA.IO.MSG | TCA.IO.U8,
        d = TCA.IO.MSG | TCA.IO.B64,
        f = tcu.tcaAlg2SDKAlg(h),
        e = tcu.sign(["MY", "Address"], [b.certInfo.certID], f, !1, !1, !1, !1, !1, e, a, d, "noSet");
        return null != e ? e.result: null
    };
    this.signFile = function(a, h, e, d, f) {
        e = void 0 === e ? !0 : e;
        d = void 0 === d ? TCA.IO.BIN: d;
        if (void 0 === f) f = "RSA" === this.publicKeyAlg() ? TCA.SHA1: TCA.SM3;
        else if (!tcu.checkHashAlg(this.publicKeyAlg(), f)) return null;
        var g = TCACore.getInstance(),
        k = TCA.IO.FILE | d;
        d |= TCA.IO.FILE;
        f = tcu.tcaAlg2SDKAlg(f);
        g = g.getCfg("signPkcs7WithAttr");
        return null != tcu.sign(["MY", "Address"], [b.certInfo.certID], f, !0, g, e, !0, k, a, d, h)
    };
    this.signFileRaw = function(a, h, e) {
        h = void 0 === h ? TCA.IO.BIN: h;
        if (void 0 === e) e = "RSA" === this.publicKeyAlg() ? TCA.SHA1: TCA.SHA256;
        else if (!tcu.checkHashAlg(this.publicKeyAlg(), e)) return null;
        h |= TCA.IO.FILE;
        var d = TCA.IO.MSG | TCA.IO.B64;
        e = tcu.tcaAlg2SDKAlg(e);
        a = tcu.sign(["MY", "Address"], [b.certInfo.certID], e, !0, !1, !1, !1, h, a, d, "noSet");
        return null != a ? a.result: null
    };
    this.signLogonData = function(a) {
        return this.signMessage("LOGONDATA:" + a)
    };
    this.signFile2File = this.signFile;
    this.signLogondata = this.signLogonData;
    this.encryptMessage = function(a, b) {
        void 0 === b && (b = "SM2" == this.publicKeyAlg() ? TCA.SM4: TCA.DES3, b = tcu.tcaAlg2SDKAlg(b));
        var e = [this.toBase64()],
        e = tcu.enc(e, b, !0, TCA.IO.MSG | TCA.IO.U8, a, TCA.IO.MSG | TCA.IO.B64, "noSet");
        return null != e ? e.result: null
    };
    this.encryptMessageRaw = function(a) {
        var b = [this.toBase64()],
        e = TCA.IO.MSG | TCA.IO.U8,
        d = TCA.IO.MSG | TCA.IO.B64,
        f = tcu.tcaAlg2SDKAlg(TCA.SM4);
        a = tcu.enc(b, f, !1, e, a, d, "noSet");
        return null != a ? a.result: null
    };
    this.encryptFile = function(a, b, e, d) {
        var f = [this.toBase64()];
        a = tcu.enc(f, d, !0, TCA.IO.MSG | e, a, TCA.IO.MSG | e, b);
        return null != a ? a.result: null
    };
    this.encryptRaw = this.encryptMessageRaw;
    this.verifyMessageRaw = function(a, b, e) {
        if (void 0 === e) e = "RSA" === this.publicKeyAlg() ? TCA.SHA1: TCA.SHA256;
        else if (!tcu.checkHashAlg(this.publicKeyAlg(), e)) return null;
        var d = this.toBase64(),
        f = TCA.VERIFYOPT.CONTEXT_IN_INPUT | TCA.VERIFYOPT.CERT_IN_INPUT,
        g = TCA.IO.MSG | TCA.IO.B64,
        k = TCA.IO.MSG | TCA.IO.U8;
        e = tcu.tcaAlg2SDKAlg(e);
        a = tcu.verify(d, !1, !1, e, f, g, a, k, b);
        return null != a ? a.verifyResult: !1
    };
    this.verifyFileRaw = function(a, b, e, d) {
        var f = this.toBase64(),
        g = TCA.VERIFYOPT.CONTEXT_IN_INPUT | TCA.VERIFYOPT.CERT_IN_INPUT,
        k = TCA.IO.FILE | e;
        e |= TCA.IO.FILE;
        d = tcu.tcaAlg2SDKAlg(d);
        return null != tcu.verify(f, !1, !1, d, g, k, a, e, b)
    };
    this.decryptMessageRaw = function(a) {
        a = tcu.dec(["MY", "Address"], [b.certInfo.certID], !1, TCA.IO.MSG | TCA.IO.B64, a, TCA.IO.MSG | TCA.IO.U8, "noSet");
        return null != a ? a.result: null
    };
    this.verifyFile = function(a, b, e) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.verifyRaw = this.verifyMessageRaw;
    this.Delete = this.deleteCert = function() {
        var a = [b.certInfo.certID],
        h = TCACore.getInstance(),
        e;
        try {
            e = h.call("Certificate/delete", '{"certStore" : ["MY", "Address"], "certIdArr" : "' + a + '"}')
        } catch(d) {
            return TCACErr.throwErr(d, ERRMAP.CERTIFICATE_DELETE_ERROR),
            !1
        }
        return null != e
    };
    this.exportPFX = function(a) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.exportPFX2File = function(a, b) {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    };
    this.show = function() {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    }
}
function Pkcs7(a) {
    var b;
    b = null;
    if (tcu.isStr(a)) {
        var c = '{"inType" : ' + (TCA.IO.MSG | TCA.IO.B64) + ', "inParam" : "' + a + '", "certs" : true, "content" : true, "b64" : false}',
        h = TCACore.getInstance(),
        e;
        try {
            e = h.call("Pkcs7/parsePkcs7", c)
        } catch(d) {
            return TCACErr.throwErr(d, ERRMAP.LIST_CERT_ERROR),
            null
        }
        b = e.pkcs7Info;
        b.b64 = a
    } else return TCACErr.throwErr(ERRMAP.PKCS7_INIT_ERROR_TYPE),
    null;
    this.verifyMessage = function(a) {
        var c = TCA.VERIFYOPT.CERT_IN_P7,
        d = TCA.IO.MSG | TCA.IO.U8;
        void 0 != a ? c |= TCA.VERIFYOPT.CONTEXT_IN_INPUT: (c |= TCA.VERIFYOPT.CONTEXT_IN_P7, a = "noSet");
        c = tcu.verify("", !1, !0, 1, c, TCA.IO.MSG | TCA.IO.B64, b.b64, d, a);
        return null === c ? null: c.verifyResult ? new Certificate(c.b64Cert) : null
    };
    this.decryptMessage = function() {
        var a = tcu.dec(["MY", "Address"], [], !0, TCA.IO.MSG | TCA.IO.B64, b.b64, TCA.IO.MSG | TCA.IO.U8, "noSet");
        return null != a ? a.result: null
    };
    this.contentMessage = function() {
        return b.isSigned && b.hasContent ? b.content: null
    };
    this.verify = this.verifyMessage;
    this.toBase64 = function() {
        return b.b64
    }
}
Pkcs7.verifyFile = function(a, b, c, h) {
    TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
    return null
};
Pkcs7.contentFile = function(a, b, c) {
    TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
    return null
};
Pkcs7.decryptFile = function(a, b, c, h) {
    TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
    return null
};
function Csr(a) {
    var b;
    b = null;
    if (tcu.isObj(a)) b = a;
    else return TCACErr.throwErr(ERRMAP.CSR_INIT_ERROR_TYPE),
    null;
    this.subject = function() {
        return b.subject.winDN
    };
    this.toBase64 = function() {
        return b.b64
    };
    this.toPEM = function() {
        TCACErr.throwErr(ERRMAP.UNIMPLEMENTED);
        return null
    }
}
var TCACore = function() {
    var a, b, c;
    function h(b) {
        a = {};
        a.ajaxHdl = void 0 !== b.ajaxHdl ? b.ajaxHdl: jQuery.ajax;
        a.str2JsonHdl = void 0 !== b.str2JsonHdl ? b.str2JsonHdl: tcu.convStr2Json;
        a.certkitClsID = "40CAB063-EF31-4ff6-B512-E1E4E454EB19";
        a.certKitSrvHost = "127.0.0.1";
        a.certKitSrvPort = "9655";
        a.certKitSrvUrl = "http://" + a.certKitSrvHost + ":" + a.certKitSrvPort + "/";
        a.certKitSrvVer = "3.6.0.1";
        a.certKitActiveXVer = "3.6.0.1";
        a.licver = "3.6.0.1";
        a.licsoftver = "3.6.0.1";
        a.selfNameFmt = "TopCertKit-\\d+(\\.\\d+)*.js";
        for (var c = a,
        d, e = document.getElementsByTagName("script"), f = /(.*\/)+/, h = 0; h < e.length; h++) if (d = e[h].getAttribute("src"), null !== d && !(0 > d.search("TopCertKit-\\d{5}.js"))) {
            d = d.match(f)[0];
            break
        }
        c.selfPath = d;
        a.useAlias = void 0 !== b.useAlias ? b.useAlias: !0;
        a.disableExeUrl = void 0 !== b.disableExeUrl ? b.disableExeUrl: !1;
        a.cspAlias = void 0 !== b.cspAlias ? b.cspAlias: {
            "RSA\u8f6f\u8bc1\u4e66": "Microsoft Enhanced Cryptographic Provider v1.0",
            "\u98de\u5929 ePass 3000 GM": "EnterSafe ePass3000GM CSP v1.0",
            "\u534e\u5927\u667a\u5b9d SJK102": "CIDC Cryptographic Service Provider v3.0.0",
            "SM2\u8f6f\u8bc1\u4e66": "iTrusChina Cryptographic Service Provider v1.0.0",
            "\u795e\u5dde\u9f99\u82af": "ChinaCpu USB Key CSP v1.0"
        };
        a.addCspAlias = void 0 !== b.addCspAlias ? b.addCspAlias: {};
        for (var g in a.addCspAlias) a.cspAlias[g] = a.addCspAlias[g];
        a.disableWhiteList = void 0 !== b.disableWhiteList ? b.disableWhiteList: !1;
        a.whiteList = void 0 !== b.whiteList ? b.whiteList: ["Microsoft Enhanced Cryptographic Provider v1.0", "iTrusChina Cryptographic Service Provider v1.0.0"];
        a.addWhiteList = void 0 !== b.addWhiteList ? b.addWhiteList: [];
        for (c = 0; c < a.addWhiteList.length; c++) a.whiteList.push(a.addWhiteList[c]);
        a.lic = void 0 !== b.license ? b.license: null;
        a.licinfo = null;
        a.urlArr = null;
        a.autoExePath = void 0 !== b.autoExePath ? b.autoExePath: !1;
        a.installMode = void 0 !== b.installMode ? b.installMode: !0;
        a.exportKeyAble = void 0 !== b.exportKeyAble ? b.exportKeyAble: !0;
        a.exepath = void 0 === b.exepath ? a.selfPath + "TopCertKit-" + a.exeVer + ".exe": b.exepath;
        a.genKeySpec = void 0 !== b.genKeySpec ? b.genKeySpec: 1;
        1 != a.genKeySpec && 2 != a.genKeySpec && (a.genKeySpec = 1);
        a.genCsrUseSHA256 = void 0 !== b.genCsrUseSHA256 ? b.genCsrUseSHA256: !1;
        a.signPkcs7WithAttr = void 0 !== b.signPkcs7WithAttr ? b.signPkcs7WithAttr: !1
    }
    function e() {
        var b = new Pkcs7(a.lic);
        "5F259CDACC82BB7EF305B3007B8B8EC9BDF9B5F2" != b.verifyMessage().serialNumber() && TCACErr.throwErr(ERRMAP.INVALID_LICENSE_2);
        b = b.contentMessage();
        a.licinfo = eval("(" + b + ")")
    }
    function d() {
        var a = navigator.userAgent;
        return 0 < a.indexOf("MSIE") || -1 < a.toLocaleLowerCase().indexOf("trident")
    }
    function f(b, c) {
        var d = {},
        e = !1;
        a.ajaxHdl({
            type: "POST",
            url: a.certKitSrvUrl + b,
            async: !1,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: c,
            success: function(a) {
                e = !0;
                d = a
            },
            error: function(a, b, c) {
                e = !1;
                d.request = a;
                d.status = b;
                d.err = c
            }
        });
        if (!e) throw new TCACErr(4278190081, "[" + d.request.readyState + "][" + d.request.status + "][" + d.status + "][" + d.err.toString() + "]");
        d.retCode != ERRMAP.SUPER_SUCCESS.code && TCACErr.throwErr(TCACErr.newErr(ERRMAP.CALL_HTTP_CLIENT_ERR), {
            code: d.retCode,
            msg: d.retMsg
        });
        return d
    }
    function g(c, d) {
        var e = null;
        try {
            e = b.reqHdl("/" + c, d)
        } catch(f) {
            return e = TCACErr.newErr({
                code: f.number,
                msg: f.description
            }),
            TCACErr.throwErr(e, ERRMAP.CALL_ACTIVEX_ERR),
            null
        }
        e = a.str2JsonHdl(e);
        if (0 != e.retCode) {
            var h = TCACErr.newErr(ERRMAP.CALL_ACTIVEX_ERR_METHOD);
            TCACErr.throwErr(h, {
                code: e.retCode,
                msg: e.retMsg
            });
            return null
        }
        return e
    }
    c = b = a = void 0;
    b = c = a = null;
    h({});
    var k = function() {
        this.getCfg = function(b) {
            return a[b]
        };
        this.setKeyStoreListCache = function(a) {
            c = a
        };
        this.getKeyStoreListCache = function() {
            return c
        };
        this.getLicInfo = function(b) {
            return a.licinfo[b]
        };
        this.full2Alias = function(b) {
            for (var c in a.cspAlias) if (a.cspAlias.hasOwnProperty(c) && a.cspAlias[c] == b) return c;
            return b
        };
        this.alias2Full = function(b) {
            var c = a.cspAlias[b];
            return void 0 === c ? b: c
        };
        this.certInLic = function(a) {
            return (new RegExp(this.getLicInfo("Issuer"))).test(a.issuer())
        };
        var b = {};
        b.query = d() ? g: f;
        this.call = function(a, c) {
            return b.query(a, c)
        }
    },
    l = null;
    return {
        getInstance: function(c) {
            void 0 !== c && null !== c && h(c);
            if (null === l) {
                l = new k;
                if (d()) try {
                    var f = "<object id='TopCertKit' classid='clsid:" + a.certkitClsID + "' ",
                    f = f + "></object>",
                    g = document.getElementById("CertKitDiv");
                    if (null === g || "" === g) g = document.createElement("div"),
                    g.setAttribute("id", "CertKitDiv"),
                    g.innerHTML = f,
                    document.body.appendChild(g);
                    b = document.getElementById("TopCertKit")
                } catch(p) {
                    throw p;
                }
                c = !1;
                c = d() ? b.ver == a.certKitActiveXVer: !0;
                if (!c) {
                    if (a.disableExeUrl) throw TCACErr.throwErr(ERRMAP.INSTALL_ACTIVEX_ERR);
                    window.location = a.exepath;
                    return
                }
                e()
            }
            return l
        }
    }
} ();
function TCACErr(a) {
    this._errarr = [];
    a instanceof TCACErr && (this._errarr = a._errarr);
    this.addErr = function(a) {
        var c = a.code;
        a = a.msg;
        this.number = 0 < c ? c: 4294967296 + c;
        this.description = a;
        this._errarr.push({
            code: this.number.toString(16).toUpperCase(),
            msg: a
        })
    };
    this.toStr = function() {
        for (var a = "",
        c = 0; c < this._errarr.length; c++) a += this._errarr[c].msg + ", \u9519\u8bef\u7801\uff1a0x" + this._errarr[c].code + ", \r\n";
        return a.substr(0, a.length - 4)
    }
}
TCACErr.newErr = function(a, b) {
    var c = null;
    a instanceof TCACErr ? (c = new TCACErr(a), c.addErr(b)) : (c = new TCACErr, c.addErr(a));
    return c
};
TCACErr.throwErr = function(a, b) {
    if (a instanceof TCACErr) throw TCACErr.newErr(a, b);
    throw TCACErr.newErr(a);
};
var ERRMAP_ZHCN = {
    CERTSTORE_INIT_WRONGTYPE: {
        code: 16777217,
        msg: "CertStore\u5b9e\u4f8b\u521d\u59cb\u5316\u5931\u8d25\uff0c\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d"
    },
    LIST_STORE_ERROR: {
        code: 16777218,
        msg: "\u5217\u4e3e\u5bc6\u94a5\u5e93\u9519\u8bef"
    },
    BY_CERT_ERR_TYPE: {
        code: 16777219,
        msg: "\u6839\u636e\u8bc1\u4e66\u83b7\u53d6CertStore\u5b9e\u4f8b\u65f6\u5931\u8d25\uff0c\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d"
    },
    LIST_CERT_ERROR: {
        code: 16777220,
        msg: "\u5217\u4e3e\u8bc1\u4e66\u9519\u8bef"
    },
    GEN_CSR_ERROR_PARAMS: {
        code: 16777221,
        msg: "\u4ea7\u751fCSR\u5931\u8d25\uff0c\u8f93\u5165\u53c2\u6570\u9519\u8bef"
    },
    GEN_CSR_ERR_PUBKEY_ALG: {
        code: 16777222,
        msg: "\u4ea7\u751fCSR\u5931\u8d25\uff0c\u672a\u77e5\u7684\u8bc1\u4e66\u516c\u94a5\u7b97\u6cd5"
    },
    GEN_CSR_ERROR: {
        code: 16777223,
        msg: "\u4ea7\u751fCSR\u5931\u8d25"
    },
    INSTALL_CERT_ERR_PARAMS: {
        code: 16777224,
        msg: "\u5b89\u88c5\u8bc1\u4e66\u5931\u8d25\uff0c\u8f93\u5165\u53c2\u6570\u9519\u8bef"
    },
    INSTALL_CERT_ERR_UNKNOWN_SYMMALG: {
        code: 16777225,
        msg: "\u5b89\u88c5\u52a0\u5bc6\u8bc1\u4e66\u5931\u8d25\uff0c\u672a\u77e5\u7684\u5bf9\u79f0\u52a0\u5bc6\u7b97\u6cd5"
    },
    INSTALL_CERT_ERR: {
        code: 16777226,
        msg: "\u5b89\u88c5\u8bc1\u4e66\u5931\u8d25"
    },
    CERTIFICATE_INIT_WRONGTYPE: {
        code: 33554433,
        msg: "Certificate\u5b9e\u4f8b\u521d\u59cb\u5316\u5931\u8d25\uff0c\u53c2\u6570\u7c7b\u578b\u4e0d\u5339\u914d"
    },
    CERTIFICATE_PARSE_ERROR: {
        code: 33554434,
        msg: "\u4eceBase64\u89e3\u6790\u8bc1\u4e66\u5931\u8d25"
    },
    CERTIFICATE_DELETE_ERROR: {
        code: 33554435,
        msg: "\u5220\u9664\u8bc1\u4e66\u5931\u8d25"
    },
    CERT_SET_INIT_ERROR_TYPE: {
        code: 50331649,
        msg: "\u521d\u59cb\u5316CertSet\u5b9e\u4f8b\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    CERT_SET_INIT_ERROR_TYPE_2: {
        code: 50331650,
        msg: "\u521d\u59cb\u5316CertSet\u5b9e\u4f8b\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    CERT_SET_INIT_ERROR_TYPE_3: {
        code: 50331651,
        msg: "\u521d\u59cb\u5316CertSet\u5b9e\u4f8b\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    CERT_SET_FILTER_KEYUSAGE_ERROR: {
        code: 50331652,
        msg: "\u901a\u8fc7\u5bc6\u94a5\u7528\u6cd5\u8fc7\u6ee4\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    CSR_INIT_ERROR_TYPE: {
        code: 67108865,
        msg: "\u521d\u59cb\u5316Csr\u5b9e\u4f8b\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    PKCS7_INIT_ERROR_TYPE: {
        code: 83886081,
        msg: "\u521d\u59cb\u5316Pkcs7\u5b9e\u4f8b\u5931\u8d25\uff0c\u9519\u8bef\u7684\u8f93\u5165\u7c7b\u578b"
    },
    PKCS7_INIT_PARSE_ERROR: {
        code: 83886082,
        msg: "\u521d\u59cb\u5316Pkcs7\u5b9e\u4f8b\u5931\u8d25\uff0c\u89e3\u6790Pkcs7\u6570\u636e\u5931\u8d25"
    },
    SIGN_ERROR: {
        code: 2684354561,
        msg: "\u7b7e\u540d\u64cd\u4f5c\u5931\u8d25"
    },
    SIGN_ERROR_HASH_ALG: {
        code: 100663297,
        msg: "\u54c8\u5e0c\u7b97\u6cd5\u4e0e\u7b7e\u540d\u7b97\u6cd5\u4e0d\u5339\u914d"
    },
    VERIFY_ERROR: {
        code: 2684354562,
        msg: "\u9a8c\u8bc1\u7b7e\u540d\u64cd\u4f5c\u5931\u8d25"
    },
    ENCRYPT_ERROR: {
        code: 2684354563,
        msg: "\u52a0\u5bc6\u64cd\u4f5c\u5931\u8d25"
    },
    DECRYPT_ERROR: {
        code: 2684354564,
        msg: "\u89e3\u5bc6\u64cd\u4f5c\u5931\u8d25"
    },
    ERROR_HASH_ALG: {
        code: 2952790017,
        msg: "\u6307\u5b9a\u4e86\u9519\u8bef\u7684Hash\u7b97\u6cd5\u7b97\u6cd5"
    },
    CALL_HTTP_CLIENT_ERR: {
        code: 4026531841,
        msg: "\u6267\u884c\u672c\u5730\u65b9\u6cd5\u5931\u8d25"
    },
    INVALID_LICENSE: {
        code: 4026531842,
        msg: "\u4f7f\u7528\u4e86\u65e0\u6548\u7684License"
    },
    INVALID_CERTKIT_VER: {
        code: 4026531843,
        msg: "\u4e0d\u5339\u914d\u7684CertKit\u7248\u672c"
    },
    CALL_ACTIVEX_ERR: {
        code: 4026531844,
        msg: "\u6267\u884c\u672c\u5730\u65b9\u6cd5\u5931\u8d25"
    },
    CALL_ACTIVEX_ERR_METHOD: {
        code: 4026531845,
        msg: "\u6267\u884c\u64cd\u4f5c\u5931\u8d25"
    },
    INSTALL_ACTIVEX_ERR: {
        code: 4026531846,
        msg: "\u65e0\u6cd5\u52a0\u8f7dActiveX\u63a7\u4ef6"
    },
    INVALID_LICENSE_2: {
        code: 4026531847,
        msg: "\u4f7f\u7528\u4e86\u65e0\u6548\u7684License"
    },
    UNIMPLEMENTED: {
        code: 1,
        msg: "\u672a\u5b9e\u73b0\u7684\u65b9\u6cd5"
    },
    BIG_ERROR: {
        code: 4294967295,
        msg: "\u9519\u8bef"
    },
    SUPER_SUCCESS: {
        code: 0,
        msg: "\u6210\u529f"
    }
},
ERRMAP = ERRMAP_ZHCN;
TCACErr.prototype = Error();