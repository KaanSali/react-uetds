# Durum çubuğu renk ayarı için:
- Expo kullanılıyorsa :
   app.json dosyası içinde expo altında "androidStatusBar": {
   "backgroundColor": "#fff"} eklenmesi gerekmekte.
- StatusBar App.js içinde ayarlanması gerekiyor. backgroundColor, hidden, translucent, barStyle değişkenleri ile kişiselleştirilebilir.
#Android'e build yapabilmek için: 
- app.json dosyası içinde expo altında "android": {
      "package": "com.sirketadi.programadi"
    } şeklinde tanımlama yapılmalıdır.
