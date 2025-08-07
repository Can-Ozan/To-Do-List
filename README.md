# 🚀 TaskFlow - Profesyonel To Do List Uygulaması

<div align="center">
  
  <h3>🎯 Modern, Kullanıcı Dostu ve Profesyonel To Do List Uygulaması </h3>
  
  [![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
  [![TypeScript](https://img.shields.io/badge/TypeScript-5.5.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
  [![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.1-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
  [![Vite](https://img.shields.io/badge/Vite-5.4.2-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
  [![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](LICENSE)
</div>

---

## 📋 İçindekiler

- [🌟 Özellikler](#-özellikler)
- [🛠️ Teknoloji Stack'i](#️-teknoloji-stacki)
- [📦 Kurulum](#-kurulum)
- [🚀 Kullanım](#-kullanım)
- [📱 Ekran Görüntüleri](#-ekran-görüntüleri)
- [🎨 Tasarım Özellikleri](#-tasarım-özellikleri)
- [📊 Proje Yapısı](#-proje-yapısı)
- [🔧 Geliştirme](#-geliştirme)
- [🤝 Katkıda Bulunma](#-katkıda-bulunma)
- [📄 Lisans](#-lisans)

---

## 🌟 Özellikler

### 🔐 **Kullanıcı Yönetimi**
- ✅ Güvenli kayıt/giriş sistemi
- ✅ Kullanıcı profili ve avatar yönetimi
- ✅ Oturum hatırlama ve güvenli çıkış
- ✅ LocalStorage tabanlı veri kalıcılığı

### 📋 **Görev Yönetimi**
- ✅ **CRUD İşlemleri**: Görev oluşturma, okuma, güncelleme ve silme
- ✅ **Öncelik Seviyeleri**: Düşük, Orta, Yüksek öncelik ataması
- ✅ **Kategori Sistemi**: İş, Kişisel, Alışveriş, Sağlık kategorileri
- ✅ **Son Tarih Takibi**: Takvim entegrasyonu ile tarih seçimi
- ✅ **Durum Yönetimi**: Tamamlanan/bekleyen görev durumları
- ✅ **Gecikme Uyarıları**: Otomatik gecikme ve yaklaşan tarih bildirimleri

### 🔍 **Gelişmiş Filtreleme & Arama**
- ✅ **Akıllı Arama**: Başlık ve açıklama bazlı gerçek zamanlı arama
- ✅ **Kategori Filtresi**: Kategoriye göre görev filtreleme
- ✅ **Öncelik Filtresi**: Öncelik seviyesine göre filtreleme
- ✅ **Durum Filtresi**: Tamamlanma durumuna göre filtreleme
- ✅ **Çoklu Sıralama**: Tarih, öncelik, başlık bazlı sıralama (artan/azalan)

### 🎨 **Modern Tasarım**
- ✅ **Responsive Design**: Mobil, tablet ve masaüstü uyumlu
- ✅ **Dark/Light Mode**: Karanlık ve aydınlık tema desteği
- ✅ **Glassmorphism**: Modern cam efekti tasarım
- ✅ **Smooth Animations**: Akıcı geçiş animasyonları
- ✅ **Micro-interactions**: Kullanıcı etkileşimi için küçük animasyonlar
- ✅ **Gradient Backgrounds**: Dinamik gradient arka planlar

### 📊 **İstatistikler ve Analiz**
- ✅ **Görev İstatistikleri**: Bekleyen, tamamlanan, yüksek öncelikli görev sayıları
- ✅ **Tamamlama Oranı**: Görev tamamlama yüzdesi
- ✅ **Görsel Göstergeler**: Renkli kartlar ile durum gösterimi
- ✅ **Gerçek Zamanlı Güncellemeler**: Anlık istatistik güncellemeleri

---

## 🛠️ Teknoloji Stack'i

### **Frontend**
| Teknoloji | Versiyon | Açıklama |
|-----------|----------|----------|
| **React** | 18.3.1 | Modern UI kütüphanesi |
| **TypeScript** | 5.5.3 | Tip güvenliği ve geliştirici deneyimi |
| **Tailwind CSS** | 3.4.1 | Utility-first CSS framework |
| **Vite** | 5.4.2 | Hızlı build tool ve dev server |
| **Lucide React** | 0.344.0 | Modern icon kütüphanesi |

### **State Management & Logic**
- **React Context API**: Global state yönetimi
- **Custom Hooks**: Yeniden kullanılabilir logic
- **LocalStorage**: Veri kalıcılığı
- **TypeScript Interfaces**: Güçlü tip sistemi

### **Development Tools**
- **ESLint**: Code linting ve kalite kontrolü
- **Prettier**: Code formatting
- **PostCSS**: CSS işleme ve optimizasyon
- **Autoprefixer**: CSS vendor prefix otomasyonu

---

## 📦 Kurulum

### **Gereksinimler**
- Node.js (v16 veya üzeri)
- npm veya yarn package manager
- Modern web tarayıcısı

### **Adım Adım Kurulum**

1. **Projeyi klonlayın**
```bash
git clone https://github.com/Can-Ozan/To-Do-List.git
cd To-Do-List
```

2. **Bağımlılıkları yükleyin**
```bash
npm install
# veya
yarn install
```

3. **Geliştirme sunucusunu başlatın**
```bash
npm run dev
# veya
yarn dev
```

4. **Tarayıcınızda açın**
```
http://localhost:3000
```

### **VSCode Kurulumu**

VSCode kullanıyorsanız, aşağıdaki eklentileri yükleyin:

```bash
# Önerilen VSCode eklentileri
- TypeScript and JavaScript Language Features
- ES7+ React/Redux/React-Native snippets
- Tailwind CSS IntelliSense
- Prettier - Code formatter
- ESLint
- Auto Rename Tag
- Path Intellisense
```

---

## 🚀 Kullanım

### **İlk Kullanım**
1. 🌐 Uygulamayı açın ve **"Hesap Oluştur"** butonuna tıklayın
2. 📝 Ad, email ve şifre bilgilerinizi girin
3. ✅ Başarılı kayıt sonrası otomatik olarak giriş yapılacaktır

### **Görev Oluşturma**
1. ➕ Sol paneldeki **"Yeni Görev"** butonuna tıklayın
2. 📋 Görev başlığı ve açıklamasını girin
3. 🎯 Öncelik seviyesi ve kategori seçin
4. 📅 İsteğe bağlı olarak son tarih belirleyin
5. 💾 **"Oluştur"** butonuna tıklayın

### **Görev Yönetimi**
- **✅ Tamamlama**: Görev kartındaki checkbox'ı işaretleyin
- **✏️ Düzenleme**: Görev kartındaki kalem ikonuna tıklayın
- **🗑️ Silme**: Görev kartındaki çöp kutusu ikonuna tıklayın

### **Filtreleme ve Arama**
1. 🔍 Sol paneldeki **"Filtrele & Sırala"** butonuna tıklayın
2. 🔎 Arama kutusuna anahtar kelime girin
3. 🏷️ Kategori, öncelik ve durum filtrelerini seçin
4. 📊 Sıralama kriterini belirleyin
5. ✅ **"Uygula"** butonuna tıklayın

---

## 📱 Ekran Görüntüleri

### **Giriş Sayfası**
- Modern glassmorphism tasarım
- Animasyonlu form elemanları
- Responsive layout

### **Ana Dashboard**
- İstatistik kartları
- Görev listesi
- Filtreleme paneli

### **Görev Oluşturma**
- Modal popup tasarım
- Form validasyonu
- Tarih seçici

---

## 🎨 Tasarım Özellikleri

### **Renk Paleti**
```css
/* Primary Colors */
Blue: #3B82F6
Purple: #8B5CF6
Green: #10B981
Red: #EF4444
Yellow: #F59E0B

/* Neutral Colors */
Gray-50: #F9FAFB
Gray-900: #111827
```

### **Animasyonlar**
- **Fade In**: Sayfa geçişleri
- **Slide Up**: Element girişleri
- **Scale In**: Modal açılışları
- **Bounce In**: Buton etkileşimleri
- **Float**: Arka plan elementleri

### **Responsive Breakpoints**
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

---

## 📊 Proje Yapısı

```
src/
├── components/              # React bileşenleri
│   ├── Auth/               # Kimlik doğrulama bileşenleri
│   │   ├── AuthPage.tsx    # Ana auth sayfası
│   │   ├── LoginForm.tsx   # Giriş formu
│   │   └── RegisterForm.tsx # Kayıt formu
│   ├── Layout/             # Layout bileşenleri
│   │   ├── Header.tsx      # Üst bar
│   │   └── Sidebar.tsx     # Yan panel
│   └── Tasks/              # Görev yönetimi bileşenleri
│       ├── TaskCard.tsx    # Görev kartı
│       ├── TaskForm.tsx    # Görev formu
│       ├── TaskList.tsx    # Görev listesi
│       └── FilterPanel.tsx # Filtreleme paneli
├── context/                # React Context providers
│   ├── AuthContext.tsx     # Kimlik doğrulama context
│   ├── TaskContext.tsx     # Görev yönetimi context
│   └── ThemeContext.tsx    # Tema yönetimi context
├── types/                  # TypeScript tip tanımları
│   └── index.ts           # Ana tip tanımları
├── index.css              # Global CSS stilleri
├── main.tsx              # Uygulama giriş noktası
└── App.tsx               # Ana uygulama bileşeni
```

---

## 🔧 Geliştirme

### **Available Scripts**

```bash
# Geliştirme sunucusu
npm run dev

# Production build
npm run build

# Linting
npm run lint

# Type checking
npm run type-check

# Preview build
npm run preview
```

### **Build ve Deploy**

```bash
# Production build oluştur
npm run build

# Build dosyaları dist/ klasöründe oluşturulur
# Herhangi bir static hosting servisine deploy edilebilir
```

### **Özelleştirme**

#### **Renk Paleti Değiştirme**
`tailwind.config.js` dosyasındaki `colors` bölümünü düzenleyin:

```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        // diğer tonlar...
      }
    }
  }
}
```

#### **Yeni Kategori Ekleme**
`src/context/TaskContext.tsx` dosyasındaki `defaultCategories` array'ini düzenleyin:

```typescript
const defaultCategories: Category[] = [
  { id: '5', name: 'Yeni Kategori', color: '#FF6B6B', icon: 'star', userId: user.id },
  // mevcut kategoriler...
];
```

---

## 🐛 Sorun Giderme

### **Yaygın Sorunlar**

#### **LocalStorage Temizleme**
Eğer uygulama beklenmedik davranış sergiliyorsa:
1. Tarayıcı geliştirici araçlarını açın (F12)
2. Application/Storage sekmesine gidin
3. LocalStorage'dan `taskflow_` ile başlayan tüm anahtarları silin

#### **TypeScript Hataları**
VSCode'da TypeScript hataları alıyorsanız:
1. `Ctrl+Shift+P` → "TypeScript: Restart TS Server"
2. Workspace'i reload edin: `Ctrl+Shift+P` → "Developer: Reload Window"

#### **Tema Değişikliği Sorunu**
Tema değişikliği çalışmıyorsa:
1. Tarayıcı cache'ini temizleyin
2. Sayfayı yenileyin (Ctrl+F5)

---

## 🤝 Katkıda Bulunma

Katkılarınızı memnuniyetle karşılıyoruz! 

### **Katkı Süreci**
1. 🍴 Bu repository'yi fork edin
2. 🌿 Feature branch oluşturun (`git checkout -b feature/amazing-feature`)
3. 💾 Değişikliklerinizi commit edin (`git commit -m 'Add amazing feature'`)
4. 📤 Branch'inizi push edin (`git push origin feature/amazing-feature`)
5. 🔄 Pull Request oluşturun

### **Geliştirme Kuralları**
- TypeScript kullanın
- ESLint kurallarına uyun
- Prettier ile kod formatlayın
- Commit mesajlarını açıklayıcı yazın
- Test ekleyin (gelecek güncellemelerde)

---

## 📈 Gelecek Özellikler

- [ ] 👥 Takım çalışması ve görev paylaşımı
- [ ] 📧 Email bildirimleri
- [ ] 📋 Görev şablonları
- [ ] 📊 Gelişmiş raporlama ve analitik
- [ ] 📱 PWA (Progressive Web App) desteği
- [ ] 🔄 Gerçek zamanlı senkronizasyon
- [ ] 📤 Veri export/import (JSON, CSV)
- [ ] 🎨 Özelleştirilebilir temalar
- [ ] 🔗 API entegrasyonları
- [ ] 📱 Mobil uygulama (React Native)

---

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için [LICENSE](LICENSE) dosyasına bakın.

```
MIT License

Copyright (c) 2024 TaskFlow

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
```

---

## 👨‍💻 Geliştirici

**TaskFlow Team**
- 🌐 GitHub: [@yourusername](https://github.com/Can-Ozan)
- 📧 Email: yusufcanozan9@gmail.com

---

## 🙏 Teşekkürler

Bu projeyi mümkün kılan harika teknolojiler ve kaynaklara teşekkürler:

- [⚛️ React](https://reactjs.org/) - UI kütüphanesi
- [🎨 Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [🎯 TypeScript](https://www.typescriptlang.org/) - Type safety
- [⚡ Vite](https://vitejs.dev/) - Build tool
- [🎨 Lucide](https://lucide.dev/) - Icon kütüphanesi
- [📸 Pexels](https://pexels.com/) - Ücretsiz fotoğraflar
- [🎨 Unsplash](https://unsplash.com/) - Görsel kaynaklar

---

<div align="center">
  <h3>⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!</h3>
  <p>Made with ❤️ by TaskFlow Team</p>
