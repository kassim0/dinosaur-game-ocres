// This uses a modified version of https://cs.chromium.org/chromium/src/components/neterror/resources/offline.js
// License for the code bellow:
// Copyright (c) 2014 The Chromium Authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file here: https://cs.chromium.org/chromium/src/LICENSE.

const DinoStyle = `
/* Copyright 2013 The Chromium Authors. All rights reserved.
 * Use of this source code is governed by a BSD-style license that can be
 * found in the LICENSE file. */

html, body {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}

.icon {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
}

.icon-offline {
  content: -webkit-image-set( url(assets/default_100_percent/100-error-offline.png) 1x, url(assets/default_200_percent/200-error-offline.png) 2x);
  position: relative;
}

.hidden {
  display: none;
}


/* Offline page */

.offline .interstitial-wrapper {
  color: #2b2b2b;
  font-size: 1em;
  line-height: 1.55;
  margin: 0 auto;
  max-width: 600px;
  padding-top: 100px;
  width: 100%;
}

.offline .runner-container {
  height: 150px;
  max-width: 600px;
  overflow: hidden;
  position: absolute;
  top: 35px;
  width: 44px;
}

.offline .runner-canvas {
  height: 150px;
  max-width: 600px;
  opacity: 1;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 2;
}

.offline .controller {
  background: rgba(247, 247, 247, .1);
  height: 100vh;
  left: 0;
  position: absolute;
  top: 0;
  width: 100vw;
  z-index: 1;
}

#offline-resources {
  display: none;
}

@media (max-width: 420px) {
  .suggested-left > #control-buttons, .suggested-right > #control-buttons {
    float: none;
  }
  .snackbar {
    left: 0;
    bottom: 0;
    width: 100%;
    border-radius: 0;
  }
}

@media (max-height: 350px) {
  h1 {
    margin: 0 0 15px;
  }
  .icon-offline {
    margin: 0 0 10px;
  }
  .interstitial-wrapper {
    margin-top: 5%;
  }
  .nav-wrapper {
    margin-top: 30px;
  }
}

@media (min-width: 600px) and (max-width: 736px) and (orientation: landscape) {
  .offline .interstitial-wrapper {
    margin-left: 0;
    margin-right: 0;
  }
}

@media (min-width: 420px) and (max-width: 736px) and (min-height: 240px) and (max-height: 420px) and (orientation:landscape) {
  .interstitial-wrapper {
    margin-bottom: 100px;
  }
}

@media (min-height: 240px) and (orientation: landscape) {
  .offline .interstitial-wrapper {
    margin-bottom: 90px;
  }
  .icon-offline {
    margin-bottom: 20px;
  }
}

@media (max-height: 320px) and (orientation: landscape) {
  .icon-offline {
    margin-bottom: 0;
  }
  .offline .runner-container {
    top: 10px;
  }
}

@media (max-width: 240px) {
  .interstitial-wrapper {
    overflow: inherit;
    padding: 0 8px;
  }
}
`;

export default DinoStyle;