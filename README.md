> [!IMPORTANT]  
> This thing was never finished lol. I initially wanted to make it an NPM package but I got lazy (that's why there's still an official readme with details of how to use it, even if it's not on NPM).
> <br>Got the idea by inspecting the requests Wumpus.store made when the "Insights" tab was clicked on a bot's page and I found this endpoint 

# Wumpus Store Campaign Stats

This package provides functions to retrieve campaign statistics for bots on Wumpus Store, including daily, weekly, and monthly reports.
<p align="center">
  <img src="https://github.com/blurwind/wumpus-store-campaign-report/assets/96443442/3593db5e-2934-4697-8e64-53880c8ffe80" alt="lol">
</p>


## Installation

You can install the package via npm:

```bash
npm install wumpus-store-campaign-report
```

## Usage

### Importing Functions

```js
const { dailyEmbed, weeklyEmbed, monthlyEmbed } = require('wumpus-store-campaign-report');
```

### Receive a daily report

```js
const cron = require('node-cron');

const webhookUrl = 'YOUR_WEBHOOK_URL';
const botId = 'YOUR_BOT_ID';

cron.schedule('0 0 * * *', () => {
  dailyEmbed(webhookUrl, botId);
});
```

### Receive a weekly report

```js
const cron = require('node-cron');

const webhookUrl = 'YOUR_WEBHOOK_URL';
const botId = 'YOUR_BOT_ID';

cron.schedule('0 0 * * 0', () => {
  weeklyEmbed(webhookUrl, botId);
});
```

### Receive a monthly report

```js
const cron = require('node-cron');

const webhookUrl = 'YOUR_WEBHOOK_URL';
const botId = 'YOUR_BOT_ID';

cron.schedule('0 0 1 * *', () => {
  monthlyEmbed(webhookUrl, botId);
});
```

## Parameters

```js
- webhookUrl (string): The URL of the Discord webhook to which the stats will be posted.
- botId (string): The ID of the bot for which the stats are being retrieved.
```

## License

This project is licensed under the MIT License - see the LICENSE file for details.
