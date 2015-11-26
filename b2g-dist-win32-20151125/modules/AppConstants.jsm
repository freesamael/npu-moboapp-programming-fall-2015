//@line 2 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

Components.utils.import("resource://gre/modules/XPCOMUtils.jsm");
XPCOMUtils.defineLazyModuleGetter(this, "Services", "resource://gre/modules/Services.jsm");

this.EXPORTED_SYMBOLS = ["AppConstants"];

// Immutable for export.
this.AppConstants = Object.freeze({
  // See this wiki page for more details about channel specific build
  // defines: https://wiki.mozilla.org/Platform/Channel-specific_build_defines
  NIGHTLY_BUILD:
//@line 19 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 23 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  RELEASE_BUILD:
//@line 28 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 30 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  ACCESSIBILITY:
//@line 33 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 37 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  // Official corresponds, roughly, to whether this build is performed
  // on Mozilla's continuous integration infrastructure. You should
  // disable developer-only functionality when this flag is set.
  MOZILLA_OFFICIAL:
//@line 45 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 47 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_OFFICIAL_BRANDING:
//@line 52 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 54 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_SERVICES_HEALTHREPORT:
//@line 59 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 61 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_DEVICES:
//@line 66 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 68 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_NATIVE_ACCOUNT_UI:
//@line 73 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 75 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_SAFE_BROWSING:
//@line 78 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 82 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_SANDBOX:
//@line 85 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 89 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_TELEMETRY_REPORTING:
//@line 94 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 96 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_UPDATER:
//@line 101 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 103 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_SWITCHBOARD:
//@line 108 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 110 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_WEBRTC:
//@line 113 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 117 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

//@line 119 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  MOZ_B2G:
//@line 121 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 125 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

//@line 128 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  platform:
//@line 134 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  "win",
//@line 146 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  isPlatformAndVersionAtLeast(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) >= 0;
  },

  isPlatformAndVersionAtMost(platform, version) {
    let platformVersion = Services.sysinfo.getProperty("version");
    return platform == this.platform &&
           Services.vc.compare(platformVersion, version) <= 0;
  },

  MOZ_CRASHREPORTER:
//@line 161 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 165 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_VERIFY_MAR_SIGNATURE:
//@line 170 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 172 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_MAINTENANCE_SERVICE:
//@line 177 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 179 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  E10S_TESTING_ONLY:
//@line 182 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 186 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  DEBUG:
//@line 191 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 193 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_B2G:
//@line 196 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  true,
//@line 200 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_B2GDROID:
//@line 205 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 207 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_PLACES:
//@line 212 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 214 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  MOZ_ANDROID_HISTORY:
//@line 219 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  false,
//@line 221 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"

  DLL_PREFIX: "",
  DLL_SUFFIX: ".dll",

  MOZ_APP_NAME: "b2g",
  MOZ_APP_VERSION: "45.0a1",
  MOZ_APP_VERSION_DISPLAY: "45.0a1",
  MOZ_BUILD_APP: "b2g",
  MOZ_UPDATE_CHANNEL: "default",
  INSTALL_LOCALE: "en-US",
  MOZ_WIDGET_TOOLKIT: "windows",
  ANDROID_PACKAGE_NAME: "",

  MOZ_ANDROID_APZ:
//@line 238 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
    false,
//@line 240 "c:\mozilla-source\toolkit\modules\AppConstants.jsm"
  DEBUG_JS_MODULES: "",

  // URL to the hg revision this was built from (e.g.
  // "https://hg.mozilla.org/mozilla-central/rev/6256ec9113c1")
  // On unofficial builds, this is an empty string.
  SOURCE_REVISION_URL: ""
});
