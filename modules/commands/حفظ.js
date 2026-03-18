if (!global.nameSave) global.nameSave = new Map();
if (!global.saveIntervalStarted) global.saveIntervalStarted = false;

module.exports.config = {
  name: "حفظ",
  version: "1.0.0",
  hasPermission: 2,
  credits: "لحواك",
  description: "تغيير اسم المجموعة مع تأثير النقطة المتحركة",
  commandCategory: "نظام",
  usages: "[تفعيل/ايقاف] [الاسم]",
  cooldowns: 5
};

module.exports.onLoad = function () {
  if (global.saveIntervalStarted) return;
  global.saveIntervalStarted = true;


  setInterval(async () => {
    if (!global.client?.api) return;

    for (const [threadID, originalName] of global.nameSave.entries()) {
      try {
        
        const nameWithDot = originalName + ".";
        await global.client.api.setTitle(nameWithDot, threadID);

        setTimeout(async () => {
          if (global.nameSave.has(threadID)) {
            await global.client.api.setTitle(originalName, threadID);
          }
        }, 3000);

      } catch (e) {
        console.log("خطأ في تحديث الاسم: " + e);
      }
    }
  }, 13000); // 10 ثوانٍ انتظار + 3 ثوانٍ مدة ظهور النقطة
};

module.exports.run = async function ({ api, event, args }) {
  const { threadID, senderID } = event;


  const botAdmins = [
    ...(global.config.ADMINBOT || []),
    ...(global.config.OPERATOR || []),
    ...(global.config.OWNER || [])
  ].map(String);

  if (!botAdmins.includes(String(senderID))) {
    return api.sendMessage("❌ هذا الأمر خاص بإدارة البوت فقط.", threadID);
  }

  const action = args[0];

  if (action === "تفعيل") {
    const name = args.slice(1).join(" ");
    if (!name) return api.sendMessage("⚠️ الرجاء إدخال الاسم المراد حفظه.\nمثال: حفظ تفعيل [الاسم]", threadID);
    
    global.nameSave.set(threadID, name);
    await api.setTitle(name, threadID);
    return api.sendMessage(`✅ تم تفعيل حفظ الاسم مع تأثير النقطة:\n📌 الاسم: ${name}`, threadID);
  } 

  else if (action === "ايقاف") {
    if (!global.nameSave.has(threadID)) {
      return api.sendMessage("⚠️ الميزة ليست مفعلة في هذه المجموعة.", threadID);
    }
    global.nameSave.delete(threadID);
    return api.sendMessage("🔓 تم إيقاف الميزة بنجاح.", threadID);
  }

  else {
    return api.sendMessage(
      "📌 طريقة استخدام أمر (حفظ):\n" +
      "• حفظ تفعيل [الاسم] — لحفظ الاسم مع تأثير النقطة\n" +
      "• حفظ ايقاف — لإلغاء الميزة",
      threadID
    );
  }
};
