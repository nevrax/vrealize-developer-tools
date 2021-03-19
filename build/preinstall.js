/*
 * Copyright 2018-2019 VMware, Inc.
 * SPDX-License-Identifier: MIT
 */

const major = parseInt(/^(\d+)\./.exec(process.versions.node)[1]);

if (major < 12) {
    console.error('\033[1;31m*** Please use node >=12.0.0.\033[0;0m');
    process.exit(1);
}

const cp = require('child_process');
const yarnVersion = cp.execSync('yarn -v', {
    encoding: 'utf8'
}).trim();

const parsedYarnVersion = /^(\d+)\.(\d+)\./.exec(yarnVersion);
const majorYarnVersion = parseInt(parsedYarnVersion[1]);

if (majorYarnVersion < 2) {
    console.error('\033[1;31m*** Please use yarn >=2.0.0.\033[0;0m');
    process.exit(1);
}

if (!/yarn(\.js|pkg)?$/.test(process.env['npm_execpath'])) {
    console.error('\033[1;31m*** Please use yarn to install dependencies.\033[0;0m');
    process.exit(1);
}
