/// <reference path="fourslash.ts" />

// @noLib: true
//// interface Foo {
////   _0: 0;
////   _1: 1;
////   _2: 2;
////   _3: 3;
////   _4: 4;
////   _5: 5;
////   _6: 6;
////   _7: 7;
////   _8: 8;
////   _9: 9;
////   _10: 10;
////   _11: 11;
////   _12: 12;
////   _13: 13;
////   _14: 14;
////   _15: 15;
////   _16: 16;
////   _17: 17;
////   _18: 18;
////   _19: 19;
////   _20: 20;
////   _21: 21;
////   _22: 22;
////   _23: 23;
////   _24: 24;
////   _25: 25;
////   _26: 26;
////   _27: 27;
////   _28: 28;
////   _29: 29;
////   _30: 30;
////   _31: 31;
////   _32: 32;
////   _33: 33;
////   _34: 34;
////   _35: 35;
////   _36: 36;
////   _37: 37;
////   _38: 38;
////   _39: 39;
////   _40: 40;
////   _41: 41;
////   _42: 42;
////   _43: 43;
////   _44: 44;
////   _45: 45;
////   _46: 46;
////   _47: 47;
////   _48: 48;
////   _49: 49;
////   _50: 50;
////   _51: 51;
////   _52: 52;
////   _53: 53;
////   _54: 54;
////   _55: 55;
////   _56: 56;
////   _57: 57;
////   _58: 58;
////   _59: 59;
////   _60: 60;
////   _61: 61;
////   _62: 62;
////   _63: 63;
////   _64: 64;
////   _65: 65;
////   _66: 66;
////   _67: 67;
////   _68: 68;
////   _69: 69;
////   _70: 70;
////   _71: 71;
////   _72: 72;
////   _73: 73;
////   _74: 74;
////   _75: 75;
////   _76: 76;
////   _77: 77;
////   _78: 78;
////   _79: 79;
////   _80: 80;
////   _81: 81;
////   _82: 82;
////   _83: 83;
////   _84: 84;
////   _85: 85;
////   _86: 86;
////   _87: 87;
////   _88: 88;
////   _89: 89;
////   _90: 90;
////   _91: 91;
////   _92: 92;
////   _93: 93;
////   _94: 94;
////   _95: 95;
////   _96: 96;
////   _97: 97;
////   _98: 98;
////   _99: 99;
////   _100: 100;
////   _101: 101;
////   _102: 102;
////   _103: 103;
////   _104: 104;
////   _105: 105;
////   _106: 106;
////   _107: 107;
////   _108: 108;
////   _109: 109;
////   _110: 110;
////   _111: 111;
////   _112: 112;
////   _113: 113;
////   _114: 114;
////   _115: 115;
////   _116: 116;
////   _117: 117;
////   _118: 118;
////   _119: 119;
////   _120: 120;
////   _121: 121;
////   _122: 122;
////   _123: 123;
////   _124: 124;
////   _125: 125;
////   _126: 126;
////   _127: 127;
////   _128: 128;
////   _129: 129;
////   _130: 130;
////   _131: 131;
////   _132: 132;
////   _133: 133;
////   _134: 134;
////   _135: 135;
////   _136: 136;
////   _137: 137;
////   _138: 138;
////   _139: 139;
////   _140: 140;
////   _141: 141;
////   _142: 142;
////   _143: 143;
////   _144: 144;
////   _145: 145;
////   _146: 146;
////   _147: 147;
////   _148: 148;
////   _149: 149;
////   _150: 150;
////   _151: 151;
////   _152: 152;
////   _153: 153;
////   _154: 154;
////   _155: 155;
////   _156: 156;
////   _157: 157;
////   _158: 158;
////   _159: 159;
////   _160: 160;
////   _161: 161;
////   _162: 162;
////   _163: 163;
////   _164: 164;
////   _165: 165;
////   _166: 166;
////   _167: 167;
////   _168: 168;
////   _169: 169;
////   _170: 170;
////   _171: 171;
////   _172: 172;
////   _173: 173;
////   _174: 174;
////   _175: 175;
////   _176: 176;
////   _177: 177;
////   _178: 178;
////   _179: 179;
////   _180: 180;
////   _181: 181;
////   _182: 182;
////   _183: 183;
////   _184: 184;
////   _185: 185;
////   _186: 186;
////   _187: 187;
////   _188: 188;
////   _189: 189;
////   _190: 190;
////   _191: 191;
////   _192: 192;
////   _193: 193;
////   _194: 194;
////   _195: 195;
////   _196: 196;
////   _197: 197;
////   _198: 198;
////   _199: 199;
////   _200: 200;
////   _201: 201;
////   _202: 202;
////   _203: 203;
////   _204: 204;
////   _205: 205;
////   _206: 206;
////   _207: 207;
////   _208: 208;
////   _209: 209;
////   _210: 210;
////   _211: 211;
////   _212: 212;
////   _213: 213;
////   _214: 214;
////   _215: 215;
////   _216: 216;
////   _217: 217;
////   _218: 218;
////   _219: 219;
////   _220: 220;
////   _221: 221;
////   _222: 222;
////   _223: 223;
////   _224: 224;
////   _225: 225;
////   _226: 226;
////   _227: 227;
////   _228: 228;
////   _229: 229;
////   _230: 230;
////   _231: 231;
////   _232: 232;
////   _233: 233;
////   _234: 234;
////   _235: 235;
////   _236: 236;
////   _237: 237;
////   _238: 238;
////   _239: 239;
////   _240: 240;
////   _241: 241;
////   _242: 242;
////   _243: 243;
////   _244: 244;
////   _245: 245;
////   _246: 246;
////   _247: 247;
////   _248: 248;
////   _249: 249;
////   _250: 250;
////   _251: 251;
////   _252: 252;
////   _253: 253;
////   _254: 254;
////   _255: 255;
////   _256: 256;
////   _257: 257;
////   _258: 258;
////   _259: 259;
////   _260: 260;
////   _261: 261;
////   _262: 262;
////   _263: 263;
////   _264: 264;
////   _265: 265;
////   _266: 266;
////   _267: 267;
////   _268: 268;
////   _269: 269;
////   _270: 270;
////   _271: 271;
////   _272: 272;
////   _273: 273;
////   _274: 274;
////   _275: 275;
////   _276: 276;
////   _277: 277;
////   _278: 278;
////   _279: 279;
////   _280: 280;
////   _281: 281;
////   _282: 282;
////   _283: 283;
////   _284: 284;
////   _285: 285;
////   _286: 286;
////   _287: 287;
////   _288: 288;
////   _289: 289;
////   _290: 290;
////   _291: 291;
////   _292: 292;
////   _293: 293;
////   _294: 294;
////   _295: 295;
////   _296: 296;
////   _297: 297;
////   _298: 298;
////   _299: 299;
////   _300: 300;
////   _301: 301;
////   _302: 302;
////   _303: 303;
////   _304: 304;
////   _305: 305;
////   _306: 306;
////   _307: 307;
////   _308: 308;
////   _309: 309;
////   _310: 310;
////   _311: 311;
////   _312: 312;
////   _313: 313;
////   _314: 314;
////   _315: 315;
////   _316: 316;
////   _317: 317;
////   _318: 318;
////   _319: 319;
////   _320: 320;
////   _321: 321;
////   _322: 322;
////   _323: 323;
////   _324: 324;
////   _325: 325;
////   _326: 326;
////   _327: 327;
////   _328: 328;
////   _329: 329;
////   _330: 330;
////   _331: 331;
////   _332: 332;
////   _333: 333;
////   _334: 334;
////   _335: 335;
////   _336: 336;
////   _337: 337;
////   _338: 338;
////   _339: 339;
////   _340: 340;
////   _341: 341;
////   _342: 342;
////   _343: 343;
////   _344: 344;
////   _345: 345;
////   _346: 346;
////   _347: 347;
////   _348: 348;
////   _349: 349;
////   _350: 350;
////   _351: 351;
////   _352: 352;
////   _353: 353;
////   _354: 354;
////   _355: 355;
////   _356: 356;
////   _357: 357;
////   _358: 358;
////   _359: 359;
////   _360: 360;
////   _361: 361;
////   _362: 362;
////   _363: 363;
////   _364: 364;
////   _365: 365;
////   _366: 366;
////   _367: 367;
////   _368: 368;
////   _369: 369;
////   _370: 370;
////   _371: 371;
////   _372: 372;
////   _373: 373;
////   _374: 374;
////   _375: 375;
////   _376: 376;
////   _377: 377;
////   _378: 378;
////   _379: 379;
////   _380: 380;
////   _381: 381;
////   _382: 382;
////   _383: 383;
////   _384: 384;
////   _385: 385;
////   _386: 386;
////   _387: 387;
////   _388: 388;
////   _389: 389;
////   _390: 390;
////   _391: 391;
////   _392: 392;
////   _393: 393;
////   _394: 394;
////   _395: 395;
////   _396: 396;
////   _397: 397;
////   _398: 398;
////   _399: 399;
////   _400: 400;
////   _401: 401;
////   _402: 402;
////   _403: 403;
////   _404: 404;
////   _405: 405;
////   _406: 406;
////   _407: 407;
////   _408: 408;
////   _409: 409;
////   _410: 410;
////   _411: 411;
////   _412: 412;
////   _413: 413;
////   _414: 414;
////   _415: 415;
////   _416: 416;
////   _417: 417;
////   _418: 418;
////   _419: 419;
////   _420: 420;
////   _421: 421;
////   _422: 422;
////   _423: 423;
////   _424: 424;
////   _425: 425;
////   _426: 426;
////   _427: 427;
////   _428: 428;
////   _429: 429;
////   _430: 430;
////   _431: 431;
////   _432: 432;
////   _433: 433;
////   _434: 434;
////   _435: 435;
////   _436: 436;
////   _437: 437;
////   _438: 438;
////   _439: 439;
////   _440: 440;
////   _441: 441;
////   _442: 442;
////   _443: 443;
////   _444: 444;
////   _445: 445;
////   _446: 446;
////   _447: 447;
////   _448: 448;
////   _449: 449;
////   _450: 450;
////   _451: 451;
////   _452: 452;
////   _453: 453;
////   _454: 454;
////   _455: 455;
////   _456: 456;
////   _457: 457;
////   _458: 458;
////   _459: 459;
////   _460: 460;
////   _461: 461;
////   _462: 462;
////   _463: 463;
////   _464: 464;
////   _465: 465;
////   _466: 466;
////   _467: 467;
////   _468: 468;
////   _469: 469;
////   _470: 470;
////   _471: 471;
////   _472: 472;
////   _473: 473;
////   _474: 474;
////   _475: 475;
////   _476: 476;
////   _477: 477;
////   _478: 478;
////   _479: 479;
////   _480: 480;
////   _481: 481;
////   _482: 482;
////   _483: 483;
////   _484: 484;
////   _485: 485;
////   _486: 486;
////   _487: 487;
////   _488: 488;
////   _489: 489;
////   _490: 490;
////   _491: 491;
////   _492: 492;
////   _493: 493;
////   _494: 494;
////   _495: 495;
////   _496: 496;
////   _497: 497;
////   _498: 498;
////   _499: 499;
//// }
//// type A/*1*/ = keyof Foo;
//// type Exclude<T, U> = T extends U ? never : T;
//// type Less/*2*/ = Exclude<A, "_0">;
//// function f<T extends A>(s: T, x: Exclude<A, T>, y: string) {}
//// f("_499", /*3*/);
//// type Decomposed/*4*/ = {[K in A]: Foo[K]}
//// type LongTuple/*5*/ = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17.18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70];
//// type DeeplyMapped/*6*/ = {[K in keyof Foo]: {[K2 in keyof Foo]: [K, K2, Foo[K], Foo[K2]]}}

goTo.marker("1");
verify.quickInfoIs(`type A = "_0" | "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7" | "_8" | "_9" | "_10" | "_11" | "_12" | "_13" | "_14" | "_15" | "_16" | "_17" | "_18" | "_19" | "_20" | "_21" | "_22" | "_23" | "_24" | ... 474 more ... | "_499"`);
goTo.marker("2");
verify.quickInfoIs(`type Less = "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7" | "_8" | "_9" | "_10" | "_11" | "_12" | "_13" | "_14" | "_15" | "_16" | "_17" | "_18" | "_19" | "_20" | "_21" | "_22" | "_23" | "_24" | "_25" | ... 473 more ... | "_499"`);
goTo.marker("3");
verify.signatureHelp({
    marker: "3",
    text: `f(s: "_0" | "_1" | "_2" | "_3" | "_4" | "_5" | "_6" | "_7" | "_8" | "_9" | "_10" | "_11" | "_12" | "_13" | "_14" | "_15" | "_16" | "_17" | "_18" | "_19" | "_20" | "_21" | "_22" | "_23" | "_24" | ... 474 more ... | "_499", x: never, y: string): void`
});
goTo.marker("4");
verify.quickInfoIs(`type Decomposed = {
    _0: 0;
    _1: 1;
    _2: 2;
    _3: 3;
    _4: 4;
    _5: 5;
    _6: 6;
    _7: 7;
    _8: 8;
    _9: 9;
    _10: 10;
    _11: 11;
    _12: 12;
    _13: 13;
    _14: 14;
    _15: 15;
    _16: 16;
    _17: 17;
    _18: 18;
    _19: 19;
    _20: 20;
    _21: 21;
    _22: 22;
    _23: 23;
    _24: 24;
    _25: 25;
    _26: 26;
    _27: 27;
    _28: 28;
    _29: 29;
    _30: 30;
    ... 468 more ...;
    _499: 499;
}`);
goTo.marker("5");
verify.quickInfoIs(`type LongTuple = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17.18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, ... 27 more ..., 70]`);
goTo.marker("6");
verify.quickInfoIs(`type DeeplyMapped = {
    _0: {
        _0: ["_0", "_0", 0, 0];
        _1: ["_0", "_1", 0, 1];
        _2: ["_0", "_2", 0, 2];
        _3: ["_0", "_3", 0, 3];
        _4: ["_0", "_4", 0, 4];
        _5: ["_0", "_5", 0, 5];
        _6: ["_0", "_6", 0, 6];
        _7: ["_0", "_7", 0, 7];
        ... 491 more ...;
        _499: [...];
    };
    ... 498 more ...;
    _499: {
        ...;
    };
}`);
