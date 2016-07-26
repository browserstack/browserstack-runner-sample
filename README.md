 BrowserStack-runner code sample
=========

Sample for using browserstack-runner to run Javascript tests (QUnit framework) on BrowserStack infrastructure.

###Clone this repository
- `git clone https://github.com/browserstack/browserstack-runner-sample.git`

###Install browserstack-runner
- `npm install`

###Configuring the json
 - Open `browserstack.json`
 - Add `username` and `key` with your BrowserStack credentials. Don't have one? Get one on BrowserStack [dashboard]
 - You can further customize configuration in browserstack.json. For detailed reference, visit browserstack-runner github repository [here].

###Sample test
 - To run: `browserstack-runner`

[here]:http://github.com/browserstack/browserstack-runner
[nightwatch]:http://nightwatchjs.org/guide
[capabilities]:http://www.browserstack.com/automate/capabilities
[dashboard]:https://www.browserstack.com/automate