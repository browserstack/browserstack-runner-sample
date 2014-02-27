 BrowserStack-runner code sample
=========

Sample for using browserstack-runner to run Javascript tests (QUnit framework) on BrowserStack infrastructure.
For a detailed reference on how to use browserstack-runner, visit its github [repository] here.

###Install nightwatch.js
*Starting and pre-requite: [browserstack-runner]*
- `npm -g install browserstack-runner`

###Configuring the json
 - Open `browserstack.json`
 - Add `username` and `key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]

###Sample test
 - To run: `browserstack-runner`

[repository]:http://github.com/browserstack/browserstack-runner
[nightwatch]:http://nightwatchjs.org/guide
[capabilities]:http://www.browserstack.com/automate/capabilities
[dashboard]:https://www.browserstack.com/automate