# Güncellenebilecek Placeholder'lar ve Referanslar

## ✅ Güncellenenler

### Adres Bilgileri
- ✅ **Ana Adres**: `site.ts` → `Perlavista Residance A Blok Kat: 6, Adnan Kahveci Mahallesi, Beykent, 34528 İstanbul, Türkiye`
- ✅ **Footer**: Otomatik olarak `site.ts`'den alınıyor
- ✅ **Contact Sayfası**: Otomatik olarak `site.ts`'den alınıyor
- ✅ **Legal Sayfalar**: Tüm legal sayfalarda telefon numarası güncellendi

### Telefon Numarası
- ✅ **Ana Telefon**: `site.ts` → `0538 307 86 35`
- ✅ **phoneHref**: `+905383078635` (tel: link için)
- ✅ **WhatsApp**: `0538 307 86 35` (site.ts'de güncellendi)
- ✅ **Contact Form Placeholder**: `0538 307 86 35`
- ✅ **Logistics Demo Form Placeholder**: `0538 307 86 35`
- ✅ **Legal Sayfalar**: Tüm legal sayfalarda `0538 307 86 35` olarak güncellendi

## 📋 Güncellenebilecek Diğer Placeholder'lar

### E-posta Adresleri
1. **Ana E-posta** (`site.ts`)
   - Mevcut: `info@sekersoft.com`
   - Durum: ✅ Aktif kullanımda

2. **Legal E-postalar** (Legal sayfalarda)
   - `legal@sekersoft.com` (Terms.tsx)
   - `privacy@sekersoft.com` (Privacy.tsx, CookiePolicy.tsx)
   - `kvkk@sekersoft.com` (KVKK.tsx)
   - Durum: ⚠️ Bu e-postalar gerçekten var mı kontrol edilmeli

### Form Placeholder'ları
1. **Contact Form** (`Contact.tsx`)
   - `"Adınız Soyadınız"` - ✅ Genel placeholder, değiştirmeye gerek yok
   - `"ornek@email.com"` - ✅ Genel placeholder, değiştirmeye gerek yok
   - `"0538 307 86 35"` - ✅ Güncellendi
   - `"Mesajınızı buraya yazın..."` - ✅ Genel placeholder, değiştirmeye gerek yok

2. **Logistics Demo Form** (`Logistics.tsx`)
   - `"Ahmet Yılmaz"` - ✅ Genel placeholder, değiştirmeye gerek yok
   - `"ornek@email.com"` - ✅ Genel placeholder, değiştirmeye gerek yok
   - `"0538 307 86 35"` - ✅ Güncellendi
   - `"Şirket Adınız"` - ✅ Genel placeholder, değiştirmeye gerek yok
   - `"Özel talepleriniz veya sorularınız varsa buraya yazabilirsiniz..."` - ✅ Genel placeholder, değiştirmeye gerek yok

3. **Newsletter Form** (`Footer.tsx`, `Blog.tsx`)
   - `"E-posta adresiniz"` - ✅ Genel placeholder, değiştirmeye gerek yok

4. **Blog Search** (`Blog.tsx`)
   - `"Blog yazılarında ara..."` - ✅ Genel placeholder, değiştirmeye gerek yok

### Sosyal Medya Linkleri (`site.ts`)
- `linkedin`: `https://www.linkedin.com/company/sekersoft`
- `instagram`: `https://www.instagram.com/sekersoft`
- `facebook`: `https://www.facebook.com/sekersoft`
- `twitter`: `https://x.com/sekersoft`
- Durum: ⚠️ Bu linkler gerçekten var mı kontrol edilmeli

### Çalışma Saatleri (`site.ts`)
- Mevcut: `Pazartesi - Cuma · 09:00 - 18:00`
- Durum: ✅ Genel, güncellenebilir

### Site Metadata (`site.ts`)
- `name`: `Sekersoft`
- `tagline`: `Özel Yazılım Çözümleri`
- `description`: Uzun açıklama metni
- Durum: ✅ Mevcut, güncellenebilir

### Form Endpoint'leri (`site.ts`)
- `VITE_CONTACT_FORM_ENDPOINT` - Environment variable
- `VITE_DEMO_FORM_ENDPOINT` - Environment variable
- `VITE_NEWSLETTER_FORM_ENDPOINT` - Environment variable
- Durum: ⚠️ Environment variable'lar, `.env` dosyasında kontrol edilmeli

## 🔍 Kontrol Edilmesi Gerekenler

1. **Legal E-postalar**: `legal@`, `privacy@`, `kvkk@` e-postaları gerçekten var mı?
2. **Sosyal Medya**: LinkedIn, Instagram, Facebook, Twitter hesapları aktif mi?
3. **Form Endpoint'leri**: `.env` dosyasında form endpoint'leri doğru mu?
4. **WhatsApp Link**: WhatsApp linki doğru formatta mı? (`https://wa.me/905383078635`)

## 📝 Öneriler

1. Legal e-postalar için yönlendirme kurulabilir (info@sekersoft.com'a yönlendirme)
2. Sosyal medya linkleri aktif değilse kaldırılabilir veya placeholder olarak bırakılabilir
3. Çalışma saatleri gerçek çalışma saatlerine göre güncellenebilir
4. Site açıklaması ve tagline iş modeline göre güncellenebilir

