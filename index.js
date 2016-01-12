var vozforums = require("sdk/page-mod").PageMod({
  include: "*.vozforums.com",
  // contentScript: "console.log('It's me', location.href)",
  contentScriptFile: "./vozforums-content.js",
  contentStyleFile: "./vozforums-responsive.css",
  contentScriptWhen: 'ready'
});
