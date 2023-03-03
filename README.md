# Veri Kalıcılığı(Data Persistence) Ekleme Sprint Challenge

## Proje Kurulumu

- Fork, klon, ve `npm install`.
- `npm test`.

## Proje Talimatları

### Giriş

Bu projede size bir dizi gereksinim verilecek ve bunları karşılamak için bir veritabanı tasarlamanız gerekecek. Bu sürecin bir parçası olarak, verilere erişmek için uç noktaları olan bir API de oluşturacaksınız.

### Tamamlanacak Dosyalar

1. `package.json`
2. `index.js`
3. `api/server.js`
4. `model.js`, `api/project` içinde, `api/resource` ve `api/task`
5. `router.js`, `api/project` içinde, `api/resource` ve `api/task`
6. migration dosya(ları)
7. seed dosya(ları) **opsiyonel**

### Gerekli Bağımlılıklar

Projenin çalışması için bazı ek NPM bağımlılıklarına ihtiyacın olabilir.

### Gerekli Komut Dosyaları

`"start"` ekleyin. `"server"`, `"migrate"` ve `"rollback"` komut dosyalarını `package.json` dosyasına aktarın. Testler, bu komut dosyalarının doğru olmasına bağlıdır!

### Gerekli Tablolar

Uygun veri türlerini ve kısıtlamaları kullanarak migrationları Knex'te "data/migrations" klasörü içinde oluşturun. **Aşağıda açıklanan tablo adlarını ve sütun adlarını kullanmalısınız.**
İpucu: Birincil anahtara "id"den farklı bir ad vermek için "table.increments()" yerine "table.increments("project_id")" yapabilirsin.

- [x] Bir **proje**, yapılması gereken şeydir ve aşağıdaki sütunları içeren bir "projects" tablosunda saklanır:

  - [x] `project_id` - primary key
  - [x] `project_name` - required
  - [x] `project_description` - opsiyonel
  - [x] `project_completed` - sağlanmadığı takdirde, veritabanı bunu varsayılan olarak "false" (tamsayı 0) olarak ayarlar

- [x] **kaynak**, bir projeyi tamamlamak için gereken her şeydir ve aşağıdaki sütunlarla bir "resources" tablosunda saklanır:

  - [x] `resource_id` - primary key
  - [x] `resource_name` - required ve unique
  - [x] `resource_description` - opsiyonel

- [x] **görev**, bir projeyi tamamlamak için gereken adımlardan biridir ve aşağıdaki sütunlarla bir "tasks" tablosunda saklanır:

  - [x] `task_id` - primary key
  - [x] `task_description` - required
  - [x] `task_notes` - opsiyonel
  - [x] `task_completed` - sağlanmadığı takdirde, veritabanı bunu varsayılan olarak "false" (tamsayı 0) olarak ayarlar
  - [x] `project_id` - gereklidir ve "projects" tablosunda gerçek bir "project_id"ye işaret eder

- [x] Bir **kaynak ataması**, bir kaynağı ve bir projeyi birbirine bağlar ve bir "project_resources" tablosunda depolanır. Hangi sütunların kullanılacağına siz karar verirsiniz.

### Gerekli Uç Noktalar

"api" klasörünün içinde aşağıdakiler için uç noktaları olan bir API oluşturun:

- [x] `[POST] /api/resources`

  - Yanıt gövdesi örneği: `{"resource_id":1,"resource_name":"foo","resource_description":null}`

- [x] `[GET] /api/resources`

  - Yanıt gövdesi örneği: `[{"resource_id":1,"resource_name":"foo","resource_description":null}]`

- [x] `[POST] /api/projects`

  - `project_completed` bir tamsayı olarak saklansa da API, istemciyle etkileşim kurarken boolean'lar kullanır.
  - Yanıt gövdesi örneği: `{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}`

- [x] `[GET] /api/projects`

  - `project_completed` bir tamsayı olarak saklansa da API, istemciyle etkileşim kurarken boolean'lar kullanır.
  - Yanıt gövdesi örneği: `[{"project_id":1,"project_name":"bar","project_description":null,"project_completed":false}]`

- [x] `[POST] /api/tasks`

  - `task_completed` bir tamsayı olarak saklansa da API, istemciyle etkileşim kurarken boolean'lar kullanır.
  - Yanıt gövdesi örneği: `{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_id:1}`

- [x] `[GET] /api/tasks`
  - `task_completed` bir tamsayı olarak saklansa da API, istemciyle etkileşim kurarken boolean'lar kullanır.
  - Her task bir `project_name` ve `project_description` içermelidir
  - Yanıt gövdesi örneği: `[{"task_id":1,"task_description":"baz","task_notes":null,"task_completed":false,"project_name:"bar","project_description":null}]`

**Önemli Notlar:**

- "npm run test" yürüterek testleri yerel olarak çalıştırın. (Projeyi yeterince detaylandırana kadar testler çok bozulacak.)
- middleware vb. için ek dosyalar oluşturabilirsiniz, ancak **mevcut dosyaları veya klasörleri taşımayın veya yeniden adlandırmayın.**
- **ek** bağımlılıklar(dependencies) ve betikler(scripts) eklemek dışında `package.json` dosyanızda değişiklik yapmayın. Mevcut paketleri güncellemeyin.
- Yarı tamamlanmış kodun veritabanlarınızı bozuk durumda bıraktığından şüpheleniyorsanız, "test.db3" ve "database.db3" dosyalarını silin ve migrationları ve testleri yeniden çalıştırın.
- Çözümünüzde en iyi pratikleri takip etmeniz, temiz ve profesyonel sonuçlar üretmeniz esastır.
- Çalışmanızı gözden geçirmek, iyileştirmek ve değerlendirmek için zaman planlayın ve temel profesyonel kontrollerinizi gerçekleştirin.
