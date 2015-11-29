/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this file,
 * You can obtain one at http://mozilla.org/MPL/2.0/. */

"use strict";

this.EXPORTED_SYMBOLS = ["MobileIdentitySmsVerificationFlow"];

const { classes: Cc, interfaces: Ci, utils: Cu } = Components;

Cu.import("resource://gre/modules/MobileIdentityCommon.jsm");
Cu.import("resource://gre/modules/MobileIdentityVerificationFlow.jsm");
Cu.import("resource://gre/modules/Promise.jsm");
Cu.import("resource://gre/modules/XPCOMUtils.jsm");

//@line 21 "c:\mozilla-source\services\mobileid\MobileIdentitySmsVerificationFlow.jsm"

this.MobileIdentitySmsVerificationFlow = function(aVerificationOptions,
                                                  aUI,
                                                  aClient,
                                                  aVerifyStrategy) {

  // SMS MT or SMS MO+MT specific verify strategy.
  this.smsVerifyStrategy = aVerifyStrategy;

  log.debug("aVerificationOptions ${}", aVerificationOptions);
  MobileIdentityVerificationFlow.call(this, aVerificationOptions, aUI, aClient,
                                      this._verifyStrategy, this._cleanupStrategy);
};

this.MobileIdentitySmsVerificationFlow.prototype = {

  __proto__: MobileIdentityVerificationFlow.prototype,

  observedSilentNumber: null,

  onSilentSms: null,

  _verifyStrategy: function() {
    if (!this.smsVerifyStrategy) {
      return Promise.reject(ERROR_INTERNAL_UNEXPECTED);
    }

    // Even if the user selection is given to us as a possible external phone
    // number, it is also possible that the phone number introduced by the
    // user belongs to one of the SIMs inserted in the device which MSISDN
    // is unknown for us, so we always observe for incoming messages coming
    // from the given mtSender.

//@line 95 "c:\mozilla-source\services\mobileid\MobileIdentitySmsVerificationFlow.jsm"

    return this.smsVerifyStrategy();
  },

  _cleanupStrategy: function() {
//@line 107 "c:\mozilla-source\services\mobileid\MobileIdentitySmsVerificationFlow.jsm"
  }
};
