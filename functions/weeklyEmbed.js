const axios = require("axios");

const today = new Date().toISOString().slice(0, 10);

async function weeklyEmbed(webhookUrl, botId) {
  const wumpusStatsRequest = await axios.get(
    `https://stats.wumpus.store/api/stats/wumpus.store/top-stats?period=7d&date=${today}&filters=%7B%22page%22%3A%22%2Fbot%2F${botId}%22%7D&with_imported=true&auth=oQLzDx_H5lHWjQ6YkEFhe&comparison=previous_period&compare_from=undefined&compare_to=undefined&match_day_of_week=true`
  );

  const botInfoRequest = await axios.get(
    `https://japi.rest/discord/v1/user/${botId}`
  );

  const embed = {
    username: `${botInfoRequest.data.data.username}・Wumpus Store Campaign`,
    avatar_url: `https://cdn.discordapp.com/avatars/${botId}/${botInfoRequest.data.data.avatar}.png`,
    embeds: [
      {
        title: `Weekly Campaign Report for ${botInfoRequest.data.data.username}`,
        url: `https://wumpus.store/bot/${botId}`,
        description: `📊 Here is your weekly campaign report for ${botInfoRequest.data.data.username} on [Wumpus.store](https://wumpus.store/bot/${botId})!`,
        color: parseInt("ffffff", 16),
        fields: [
          {
            name: "Unique visitors",
            value: `${wumpusStatsRequest.data.top_stats[0].value}`,
            inline: true,
          },
          {
            name: "Total visits",
            value: `${wumpusStatsRequest.data.top_stats[1].value}`,
            inline: true,
          },
          {
            name: "Total pageviews",
            value: `${wumpusStatsRequest.data.top_stats[2].value}`,
            inline: true,
          },
          {
            name: "Bounce rate",
            value: `${wumpusStatsRequest.data.top_stats[3].value}%`,
            inline: true,
          },
          {
            name: "Time on page",
            value: `${wumpusStatsRequest.data.top_stats[4].value}s`,
            inline: true,
          },
        ],
      },
    ],
  };

  await axios.post(webhookUrl, embed);
}

module.exports = {
  weeklyEmbed,
};
