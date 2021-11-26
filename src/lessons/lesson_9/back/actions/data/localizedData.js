
import ResponseService from "../../services/ResponseService";

const DATA = {
    uk: [
        {
            "userId": 1,
            "id": 1,
            "title": "Що таке Lorem Ipsum?",
            "body": "Lorem Ipsum - це текст-\"риба\", що використовується в друкарстві та дизайні. Lorem Ipsum є, фактично, стандартною \"рибою\" аж з XVI сторіччя, коли невідомий друкар взяв шрифтову гранку та склав на ній підбірку зразків шрифтів. \"Риба\" не тільки успішно пережила п'ять століть, але й прижилася в електронному верстуванні, залишаючись по суті незмінною."
        },
        {
            "userId": 1,
            "id": 2,
            "title": "Чому ми ним користуємось?",
            "body": "Вона популяризувалась в 60-их роках минулого сторіччя завдяки виданню зразків шрифтів Letraset, які містили уривки з Lorem Ipsum, і вдруге - нещодавно завдяки програмам комп'ютерного верстування на кшталт Aldus Pagemaker, які використовували різні версії Lorem Ipsum."
        },
        {
            "userId": 1,
            "id": 3,
            "title": "Вже давно відомо",
            "body": "що читабельний зміст буде заважати зосередитись людині, яка оцінює композицію сторінки. Сенс використання Lorem Ipsum полягає в тому, що цей текст має більш-менш нормальне розподілення літер на відміну від, наприклад, \"Тут іде текст. Тут іде текст.\" Це робить текст схожим на оповідний. Багато програм верстування та веб-дизайну використовують Lorem Ipsum як зразок і пошук за терміном \"lorem ipsum\" відкриє багато веб-сайтів, які знаходяться ще в зародковому стані. Різні версії Lorem Ipsum з'явились за минулі роки, деякі випадково, деякі було створено зумисно (зокрема, жартівливі)."
        },
        {
            "userId": 1,
            "id": 4,
            "title": "Звідки він походить?",
            "body": "а відміну від поширеної думки Lorem Ipsum не є випадковим набором літер. Він походить з уривку класичної латинської літератури 45 року до н.е., тобто має більш як 2000-річну історію. Річард Макклінток, професор латини з коледжу Хемпдін-Сидні, що у Вірджінії, вивчав одне з найменш зрозумілих латинських слів - consectetur - з уривку Lorem Ipsum, і у пошуку цього слова в класичній літературі знайшов безсумнівне джерело."
        },
        {
            "userId": 1,
            "id": 5,
            "title": "Про межі добра і зла",
            "body": "Lorem Ipsum походить з розділів 1.10.32 та 1.10.33 цицеронівського \"de Finibus Bonorum et Malorum\" (\"Про межі добра і зла\"), написаного у 45 році до н.е. Цей трактат з теорії етики був дуже популярним в епоху Відродження. Перший рядок Lorem Ipsum, \"Lorem ipsum dolor sit amet...\" походить з одного з рядків розділу 1.10.32."
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "Класичний текст, використовуваний з XVI ",
            "body": "Класичний текст, використовуваний з XVI сторіччя, наведено нижче для всіх зацікавлених. Також точно за оригіналом наведено розділи 1.10.32 та 1.10.33 цицеронівського \"de Finibus Bonorum et Malorum\" разом із перекладом англійською, виконаним 1914 року Х.Рекемом."
        },
        {
            "userId": 1,
            "id": 8,
            "title": "Де собі взяти трохи?",
            "body": "Існує багато варіацій уривків з Lorem Ipsum, але більшість з них зазнала певних змін на кшталт жартівливих вставок або змішування слів, які навіть не виглядають правдоподібно."
        },
        {
            "userId": 1,
            "id": 9,
            "title": "Якщо ви збираєтесь використовувати",
            "body": "Lorem Ipsum, ви маєте упевнитись в тому, що всередині тексту не приховано нічого, що могло б викликати у читача конфуз. Більшість відомих генераторів Lorem Ipsum в Мережі генерують текст шляхом повторення наперед заданих послідовностей Lorem Ipsum."
        },
        {
            "userId": 1,
            "id": 10,
            "title": "Принципова відмінність",
            "body": "Принципова відмінність цього генератора робить його першим справжнім генератором Lorem Ipsum. Він використовує словник з більш як 200 слів латини та цілий набір моделей речень - це дозволяє генерувати Lorem Ipsum, який виглядає осмислено. Таким чином, згенерований Lorem Ipsum не міститиме повторів, жартів, нехарактерних для латини слів і т.ін."
        },
    ],
    en: [
        {
            "userId": 1,
            "id": 1,
            "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "qui est esse",
            "body": "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "ea molestias quasi exercitationem repellat qui ipsa sit aut",
            "body": "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "eum et est occaecati",
            "body": "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "nesciunt quas odio",
            "body": "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "magnam facilis autem",
            "body": "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "dolorem dolore est ipsam",
            "body": "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "nesciunt iure omnis dolorem tempora et accusantium",
            "body": "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "optio molestias id quia eum",
            "body": "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
        },
    ],
    tr: [
        {
            "userId": 1,
            "id": 1,
            "title": "Lorem Ipsum nedir?",
            "body": "Lorem Ipsum, baskı ve tasarımda kullanılan bir \"balık\" metnidir. Lorem Ipsum, aslında, bilinmeyen bir yazıcının bir yazı tipi alıp bir yazı tipi örneklerinden bir seçki derlediği 16. yüzyıldan beri standart bir \"balık\" olmuştur. \"Balık\" sadece beş yüzyıl boyunca başarılı bir şekilde hayatta kalmakla kalmadı, aynı zamanda esasen değişmeden kalan elektronik düzende de kök saldı."
        },
        {
            "userId": 1,
            "id": 2,
            "title": "Neden kullanıyoruz?",
            "body": "larda Lorem Ipsum\'dan alıntılar içeren Letraset yazı tipi örneklerinin yayınlanmasıyla ve yakın zamanda ikinci kez Aldus Pagemaker gibi Lorem Ipsum\'un farklı sürümlerini kullanan bilgisayar dizgi programlarıyla popüler oldu."
        },
        {
            "userId": 1,
            "id": 3,
            "title": "Uzun zamandır bilinen",
            "body": "okunabilir içerik, sayfanın kompozisyonunu değerlendiren kişinin konsantre olmasını engeller. Lorem Ipsum kullanmanın amacı, bu metnin, örneğin \"İşte metin burada. Metin burada\" yerine, az çok normal bir harf dağılımına sahip olmasıdır. Bu, metnin bir anlatı gibi görünmesini sağlar. Birçok düzen ve web tasarım programı, Lorem Ipsum'u model olarak kullanır ve \"lorem ipsum\" terimi için yapılan arama, henüz emekleme aşamasında olan birçok web sitesini açacaktır. Lorem Ipsum'un farklı versiyonları son yıllarda ortaya çıktı, bazıları tesadüfen, bazıları kasıtlı olarak (özellikle mizahi) oluşturuldu."
        },
        {
            "userId": 1,
            "id": 4,
            "title": "Nereden geliyor?",
            "body": "ve yaygın inanışın aksine Lorem Ipsum rastgele bir harf dizisi değildir. 45 yılına ait klasik Latin edebiyatının bir parçasından gelmektedir, yani 2000 yılı aşkın bir geçmişe sahiptir. Virginia'daki Hampdin Sydney Koleji'nde Latince profesörü olan Richard McClintock, Lorem Ipsum'dan en az anlaşılan Latince sözcüklerden biri olan consectetur'u inceledi ve klasik edebiyatta şüphesiz bir kaynak buldu."
        },
        {
            "userId": 1,
            "id": 5,
            "title": "İyi ve kötünün sınırlarında",
            "body": "Lorem Ipsum, Cicero'nun MÖ 45 yılında yazdığı \"de Finibus Bonorum et Malorum\" (\"İyi ve Kötünün Sınırları Üzerine\") kitabının 1.10.32 ve 1.10.33 bölümlerinden gelmektedir. Etik teorisi üzerine bu inceleme Rönesans'ta çok popülerdi. Lorem Ipsum'un ilk satırı \"Lorem ipsum dolor sit amet ...\" 1.10.32 numaralı bölümdeki satırlardan birinden geliyor."
        },
        {
            "userId": 1,
            "id": 6,
            "title": "dolorem eum magni eos aperiam quia",
            "body": "mut aspernatur corporis harum nihil quis ihtiyat sequi \ nmollitia nobis aliquid molestiae \ nperspiciatis ve ea nemo ab rehenderit accusantium quas \ nvoluptate dolores velit ve doloremque molestiae"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "XVI'dan beri kullanılan klasik metin",
            "body": "16. yüzyıldan beri kullanılan klasik metin, ilgilenenler için aşağıda listelenmiştir. Cicero'nun \"de Finibus Bonorum et Malorum\" adlı eserinin 1.10.32 ve 1.10.33. bölümleri de, 1914'te H. Reckem tarafından yapılan İngilizce çevirisiyle birlikte, aslına uygun olarak verilmiştir."
        },
        {
            "userId": 1,
            "id": 8,
            "title": "Nereden alınır?",
            "body": "Lorem Ipsum'dan pasajların pek çok varyasyonu vardır, ancak bunların çoğu, mizahi ekler veya mantıklı görünmeyen kelimeleri karıştırma gibi bazı değişikliklerden geçmiştir."
        },
        {
            "userId": 1,
            "id": 9,
            "title": "Kullanacaksanız",
            "body": "Lorem Ipsum, metnin içinde okuyucunun kafasını karıştırabilecek gizli hiçbir şey olmadığından emin olmalısın. Web'deki en bilinen Lorem Ipsum oluşturucular, önceden tanımlanmış Lorem Ipsum dizilerini tekrarlayarak metin oluşturur."
        },
        {
            "userId": 1,
            "id": 10,
            "title": "Temel fark",
            "body": "Bu jeneratörün temel farkı onu ilk gerçek Lorem Ipsum jeneratörü yapıyor. 200'den fazla Latince sözcükten oluşan bir sözlük ve bir dizi cümle kalıbı kullanır - bu, anlamlı görünen bir Lorem Ipsum oluşturmanıza olanak tanır. Böylece, oluşturulan Lorem Ipsum tekrarları, şakaları, Latince'ye özgü olmayan kelimeleri vb. içermeyecektir."
        },
    ],
    jp: [
        {
            "userId": 1,
            "id": 1,
            "title": "Lorem Ipsumとは？",
            "body": "「LoremIpsumは、印刷やデザインで使用される「魚」のテキストです。 Lorem Ipsumは、実際、16世紀に未知のプリンターがフォントを取得し、フォントサンプルの選択をコンパイルして以来、標準的な「魚」でした。 「魚」は5世紀を生き延びただけでなく、電子レイアウトにも根付いており、基本的には変更されていません。"
        },
        {
            "userId": 1,
            "id": 2,
            "title": "なぜそれを使用するのですか？",
            "body": "1960年代に、Lorem Ipsumからの抜粋を含むLetrasetフォントサンプルがリリースされ、最近では、LoremIpsumのさまざまなバージョンを使用するAldusPagemakerなどのコンピューター植字プログラムで2度目の人気が出ました。"
        },
        {
            "userId": 1,
            "id": 3,
            "title": "古くから知られている",
            "body": "その読みやすいコンテンツは、ページの構成を評価する人が集中するのを防ぎます。 Lorem Ipsumを使用するポイントは、たとえば、「ここにテキストがあります。ここにテキストがあります」とは対照的に、このテキストには多かれ少なかれ正規分布の文字があるということです。これにより、テキストは物語のように見えます。多くのレイアウトおよびWebデザインプログラムは、モデルとしてLorem Ipsumを使用しており、「lorem ipsum」という用語を検索すると、まだ初期段階にある多くのWebサイトが開きます。近年、さまざまなバージョンのLorem Ipsumが登場しました。偶然のものもあれば、意図的に作成されたものもあります（特にユーモラスです）"
        },
        {
            "userId": 1,
            "id": 4,
            "title": "どこから来たの？",
            "body": "そして、一般的な信念に反して、LoremIpsumはランダムな文字のセットではありません。それは紀元前45年の古典ラテン文学の断片に由来します。つまり、2000年以上の歴史があります。バージニア州のハンプディンシドニー大学のラテン語教授であるリチャードマクリントックは、ローレムイプサムから最も理解されていないラテン語の1つであるconsecteturを研究し、古典文学に疑いの余地のない情報源を見つけました。"
        },
        {
            "userId": 1,
            "id": 5,
            "title": "善と悪の境界について",
            "body": "Lorem Ipsumは、紀元前45年に書かれたCiceroの\" de Finibus Bonorum et Malorum \"（\"善と悪の境界について \"）の1.10.32章と1.10.33章から来ています。倫理理論に関するこの論文は、ルネサンスで非常に人気がありました。 LoremIpsumの最初の行「Loremipsumdolor sit amet ...」は、セクション1.10.32の行の1つから来ています。"
        },
        {
            "userId": 1,
            "id": 6,
            "title": "典ラテン文学の断片に由来します",
            "body": "字のセットではありません。それは紀元前45年の古典ラテン文学の断片に由来します。つまり、2000年以上の歴史があります。バージニア州のハンプディンシドニー大学のラテン語教授であるリチャードマクリントックは、ローレムイプサムから最も理解されていないラテン語の1つであるconsecteturを研究し、古典文学に疑いの余地のない情報源を見つけました"
        },
        {
            "userId": 1,
            "id": 7,
            "title": "XVI以降に使用されている古典的なテキスト",
            "body": "16世紀以降に使用された古典的なテキストは、興味のある人のために以下にリストされています。 Ciceroの「deFinibusBonorum et Malorum」のセクション1.10.32と1.10.33も、1914年にH. Reckemによって作成された英語の翻訳とともに、オリジナルに従って正確に示されています。"
        },
        {
            "userId": 1,
            "id": 8,
            "title": "どこで入手できますか",
            "body": "Lorem Ipsumからのパッセージには多くのバリエーションがありますが、それらのほとんどは、ユーモラスな挿入や、もっともらしく見えない単語の混合など、いくつかの変更が加えられています。"
        },
        {
            "userId": 1,
            "id": 9,
            "title": "使用する場合",
            "body": "Lorem Ipsum、読者を混乱させる可能性のあるテキスト内に隠されたものがないことを確認する必要があります。 Web上で最もよく知られているLoremIpsumジェネレーターは、事前定義されたLoremIpsumシーケンスを繰り返すことによってテキストを生成します。"
        },
        {
            "userId": 1,
            "id": 10,
            "title": "根本的な違い",
            "body": "このジェネレーターの根本的な違いにより、最初の本物のLoremIpsumジェネレーターになります。 200を超えるラテン語の辞書と文型のセット全体を使用します。これにより、意味のあるLoremIpsumを生成できます。したがって、生成されたLorem Ipsumには、繰り返し、ジョーク、ラテン語に特徴のない単語などは含まれません。"
        },
    ]
};


export const localizedData = async ctx => {

    const { locale } = ctx.params;

    const supportedLocales = ["uk", "en", "tr", "jp"];

    if( !supportedLocales.some( loc => locale === loc ) ){
        ResponseService.error( ctx, "That locale does not supported");
        return;
    }



    ResponseService.success(ctx, {
        status: true,
        params: ctx.params,
        data: DATA[ locale ]
    });
};