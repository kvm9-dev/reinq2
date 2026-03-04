if (!global.engineIntervals) global.engineIntervals = new Map();

module.exports.config = {
  name: "محرك",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "Replit Agent",
  description: "يرسل رسالة كل 30 ثانية (تفعيل/ايقاف)",
  commandCategory: "نظام",
  prefix: true,
  usages: "[تفعيل/ايقاف]",
  cooldowns: 5
};

console.log("DEBUG: Loaded 'محرك' command config.");

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;
  const action = args[0]?.toLowerCase();

  // Admin Check
  const admins = (global.config.ADMINBOT || []).map(String);
  if (!admins.includes(String(senderID))) {
    return api.sendMessage("❌ هذا الأمر مخصص لأدمن البوت فقط.", threadID);
  }

  // Handle "ايقاف" or "stop" or "off"
  if (action === "ايقاف" || action === "off" || action === "stop") {
    if (global.engineIntervals.has(threadID)) {
      clearInterval(global.engineIntervals.get(threadID));
      global.engineIntervals.delete(threadID);
      return api.sendMessage("⏹️ تم إيقاف المحرك في هذه المجموعة.", threadID);
    } else {
      return api.sendMessage("⚠️ المحرك ليس قيد التشغيل في هذه المجموعة.", threadID);
    }
  }

  // Handle "تفعيل" or "on" or "start"
  if (action === "تفعيل" || action === "on" || action === "start") {
    if (global.engineIntervals.has(threadID)) {
      return api.sendMessage("⚠️ المحرك قيد التشغيل بالفعل.", threadID);
    }

    api.sendMessage("🚀 تم تفعيل المحرك بنجاح (رسالة كل 30 ثانية).", threadID);

    const interval = setInterval(() => {
      api.sendMessage(`⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨📰⇒┊𝙎┊𒋨🌫⇒┊𝙆┊
⇒┊ 𝙆 ┊𒋨🌫⇒┊𝙎┊𒋨📰⇒┊𝙆┊
〘📰┊🌫〙

⇣

『 ⌫ 』 ..⃗.┊⇢『𝖫𝖮𝖠𝖣𝖨𝖭𝖦...』

 - 𝙐𝙇𝙏𝙍𝘼 ¦ 𝘿𝙀𝙑𝙄𝙇  𖣘


𖣔 |  ᭄ 𝙇𝙊𝙍𝘿 𝙎𝘼𝙄 🩶🪽 ʿ 𔖱۪𔖱.`, threadID);
    }, 90 * 1000);

    global.engineIntervals.set(threadID, interval);
  } else {
    return api.sendMessage("⚠️ الاستخدام: !محرك [تفعيل/ايقاف]", threadID);
  }
};
