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
      api.sendMessage(`➥ 𝐁𝐎𝐓 𝐒𝐏𝐈𝐃𝐄𝐑𝐒 ⛕

𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-𖭝-⚪-𒋡-⛕-𝗫₎-𒑐-𖭳-🕸-𒄬-⛕-𝗩₎-𒑐-𖮁-⚪-𒋙-⛕-𝗞₎-𒑐-𖭜-🕸-𒄬-⛕-𝗭₎-𒑐-☭-⚪-𒋙-⛕-




 ‌           ⏤͟͟͞͞⚪                       

     𝗥𝗲𝘁𝘂𝗿𝗻 𝗼𝗳 𝘁𝗵𝗲 𝗗𝗲𝗮𝗱      
 ‌ ‌   ─⃝͎̽𝗠𖦜،𝗹ə⃪໋⃔͜͡𝚾⃟⃗ʌ⃕ɨ𝗡🦇𝆺𝅥⃝𝗦✬      

 ➣  𝆺𝅥⃝𝗔𝗡𝗚𝗘𝗟 ۬༐ 𝗨҉𝗿𝗶𝗲𝗹 ⚪𒁂/`, threadID);
    }, 30 * 1000);

    global.engineIntervals.set(threadID, interval);
  } else {
    return api.sendMessage("⚠️ الاستخدام: !محرك [تفعيل/ايقاف]", threadID);
  }
};
