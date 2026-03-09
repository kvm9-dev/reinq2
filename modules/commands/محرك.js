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
      api.sendMessage(`𝖨 𝗂𝗆 𝖺 𝖸𝗼𝘂𝗿 𝗸𝗶𝗻𝗴 
ــــــــــــــــــــــــــــــــــــــــــــــــــــــــــــ، 
𝗜 𝗶𝗺 𝗮𝘁𝗼𝗺𝗶𝗰 🟣💥🌆

➟ ࿇ ┋𝕯𝖎𝖛𝖑⛕𝖋𝖚𝖈𝖐 𝖞𝖔𝖚┋


𝕻𝖊𝖗𝖘𝖔𝖓𝖆𝖑𝖎𝖙𝖞 ⛂➥ 𓃶 ‎⠀⤷  𝐿𝑈𝑋𝑈𝑅𝐼𝑂𝑈𝑆 𝐵𝐿𝑂𝑂𝐷 𝐺𝑂𝐵𝐿𝐼𝑁𝑆  ┋𓄂┋


𝑇𝐸𝐶𝐻𝑁𝐼𝑄𝑈𝐸 ♢✘┊🕸┊ 𝙋𝙡𝙖𝙮𝙞𝙣𝙜 𝙬𝙤𝙩𝙝 𝙢𝙮 𝙚𝙢𝙤𝙩𝙞𝙤𝙣𝙨 ❴𓃬 ❵

➫ 𝑁┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐼┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐾┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐾┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝑆┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝑀┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐾┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝑌┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐴┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝐵┋𖠄┋↝ ❪𒄆❫↬〖𓃵〗𝑁 ✗

➫ 𝑁┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐼┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐾 𝐾┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝑆┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝑀┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐾┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐾 𝑁┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐼┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗 𝑌┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐴 𝑊┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐿┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐷┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐸 𝐴┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐿 𝑁┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗𝐼┋🥷🏻┋↝ ❪🩸❫↬〖☠️〗✗

➫ 𝑌┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐴 𝑊┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐿┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐷┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐸 𝐴┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐿┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐶┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐻┋࿊┋↝ ❪𓃭❫↬〖✇〗𝐴┋࿊┋↝ ❪𓃭❫↬〖✇〗𝑅┋࿊┋↝ ❪𓃭❫↬〖✇〗𝑀 ✗

➫ 𝐾┋🗯┋↝ ❪🔴❫↬〖🧧〗𝑆┋🗯┋↝ ❪🔴❫↬〖🧧〗𝑀┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐾 𝑌┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐴 𝑊┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐿┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐷┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐸 𝐴┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐿 𝐾┋🗯┋↝ ❪🔴❫↬〖🧧〗𝑆┋🗯┋↝ ❪🔴❫↬〖🧧〗 9┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐴┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐻┋🗯┋↝ ❪🔴❫↬〖🧧〗𝐵 𝐾┋🗯┋↝ ❪🔴❫↬〖🧧〗𝑆┋🗯┋↝ ❪🔴❫↬〖🧧〗 ✗

➫ 𝑁┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐼┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐾 𝐴┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐿 𝑄┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐴┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐻┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐵┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐴 𝑀┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝑂┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐾 𝑁┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐼┋𖣔┋↝ ❪𓄂❫↬〖⛃〗𝐾 ✗

➫  𝐻┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑊┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴┋🧧┋↝ ❪𖣐❫↬〖𖣁🏮〗𝑌 𝑂┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑀┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐾 𝐻┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑂┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑁┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴 𝑌┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴 𝑀┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑆┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑆 𝑍┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑂┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐵┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝑂┋┋↝ ❪𖣐❫↬〖🏮〗𝐵 𝑌┋🧧┋↝ ❪𖣐❫↬〖🏮〗𝐴 ✗


࿋   ➥   [  𝗉𝘰𝘸𝘦𝘳, 𝘴𝘪𝘯𝘤𝘦𝘳𝘪𝘵𝘺 -- 𝘵𝘩𝘢𝘵’𝘴  ➠ 𝗬𝗢𝗨𝗡𝗘𝗦┋  𝗬𝗢𝗨𝗥 𝗗𝗔𝗗𝗬 ]  
         

𝑇𝐸𝐶𝐻𝑁𝐼𝑄𝑈𝐸 ♢✘ ┋㊕┋𝔗𝔥𝔢 𝔣𝔦𝔯𝔢𝔰︱


[🖕🏻] 𝙁𝙖𝙘𝙚𝙗𝙤𝙤𝙠 𝙘𝙝𝙞𝙡𝙙 𝙖𝙗𝙪𝙨𝙚𝙧 ┊𝑌𝑂𝑈𝑅 ✗ 𝑀𝑂𝑇𝐻𝐸𝑅 ❪👅😍💋🔥❫`, threadID);
    }, 30 * 1000);

    global.engineIntervals.set(threadID, interval);
  } else {
    return api.sendMessage("⚠️ الاستخدام: !محرك [تفعيل/ايقاف]", threadID);
  }
};
