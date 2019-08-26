# Durum çubuğu renk ayarı için:
1-) Expo kullanılıyorsa :
    app.json dosyası içinde expo altında "androidStatusBar": {
      "backgroundColor": "#fff"
   } eklenmesi gerekmekte.
2-) StatusBar App.js içinde ayarlanması gerekiyor. backgroundColor, hidden, translucent, barStyle değişkenleri ile kişiselleştirilebilir.