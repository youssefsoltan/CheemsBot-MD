let handler = async (m, { conn, args,
usedPrefix, command }) => {
conn.relayMessage(m.chat, {
viewOnceMessage: {
message: {
interactiveMessage: {
header: {
title: '> ⧉┆مرحبا ياعزيزي 😍 ⤌⤈\n> ↝👋🏻↜\n> ⧉┆انا بوت واتساب'
 },
 body: {
 text: '> ♩☜ اعمل في الخاص وجروبات\n> ♩☜ وظيفتي حماية جروبك\n> ♩☜اوامر كلمه .الاوامر لمعرفه\> n♩☜ اوامر البوت وطريقه الاستخدام\n> ♩☜ مميزات البوت كثيره جدا\n> ♩☜ ويعمل بجودة فائقه وعاليه\n> 𓍹————————————𓍻\n> ↜★ اوامر سورس عفرتو و بلاك بوت ★↝\n> 𓍹————————————𓍻'
  },
  nativeFlowMessage: {
  buttons: [
   {
  name: 'single_select',
  buttonParamsJson: JSON.stringify({
  title: '❰ اختار من القائمه📄 ❱',
  sections: [
  {
  title: 'قسم الاوامر',
  highlight_label: 'بوت بلاك & عفروتو',
  rows: [
  {
  header: 'يعطيك اوامر الاعضاء',
  title: 'الاعضاء',
  description: '',
  id: '.م1'
  },
  {
  header: 'يعطيك اوامر الجروبات',
  title: 'الجروبات',
  description: '',
  id: '.م3'
  },
  {
   header: 'يعطيك اوامر التسليه',
  title: 'التسليه',
  description: '',
  id: '.م7'
  },
   {
    header: 'يعطيك اوامر البنك',
  title: 'البنك',
  description: '',
  id: '.م8'
  },
   {
    header: 'يعطيك اوامر القرآن',
  title: 'طـلـب ابـلاغ📨',
  description: '',
  id: '.م9'
  },
   {
    header: 'يعطيك كل الاوامر',
  title: 'جميع الاوامر',
  description: '',
  id: '.م10'
  },
   {
   header: 'يعطيك اوامر المالك',
  title: 'الجروبات',
  description: '',
  id: '.م2'
  },
  {
    header: 'يعطيك اوامر البحث و التنزيل',
  title: 'البحث و التنزيل',
  description: '',
  id: '.م4'
  },
  {
  header: 'يعطيك اوامر التحويل',
  title: 'التحويل',
  description: '',
  id: '.م5'
  },
  {
  header: 'يعطيك اوامر الملصقات',
  title: 'الملصقات',
  description: '',
  id: '.م6'
  }
  ]
  }
  ]
  }),
  messageParamsJson: ''
  }
  ]
  }
  }
  }
  }
  }, {})

  }

  handler.help = ['info']
  handler.tags = ['main']
  handler.command = ['مهام','ty','er','youssef','ui','op']

  export default handler
