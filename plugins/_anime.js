let handler = async (m, { command, text }) => m.reply(`*╔═╼─╾═【🕸️】═╼╾─╾═╗*
*رد تــلــقــائــي🧑🏻‍💻*
*╔⟐━───━┓🕸️┏━───━⟐╗*
*❆🎭┊الــلــقـب*
*〘〙*
*❆♟️┊مــن أنمي* 
*〘〙*
*❆♋┊لـقـب احـتـيـاطـي*
*〘〙*
*❆⁉️┊بـنـت او ولـد*
*〘〙*
*❆🧭┊مـن طـرف* 
*〘〙*
*رقم الواتس 📱*
*〘〙*
*❆📊┊افـضل ثلاث اعمال شاهدتها*
*🥇〘〙*
*🥈〘〙*
*🥉〘〙*
*╚⟐━───━┛🕸️┗━───━⟐╝*
*❈↲لملئ الإستمارة يرجى النسخ وملء الفراغات*
*❈↲بعد ملئ الاستمارة منشن احد المشرفين*
*❈↲يرجى ارفاق صورة للقب*
*✦━━━━━[ *لوفي-بوت* ]━━━━━✦`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})

handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|استماره|استمارة)$/i

export default handler
