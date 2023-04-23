export default{
	pageSettings :  {
		lang : ['lang-Ru'],
		pubLang : ['publicLangRu'],
		style : ['classic'],
	},
	postList : [
		{
			id : 1, 
			blog: 'Yandex',
			author : 'Anon',
			date : '122.02',
			title : 'Как тестировать в Databricks: Nutter Framework', 
			level : 'Простой',
			timeRead : '3 мин',
			views : '204',
			thopic : "Блог компании OTUS Big Data Тестирование веб-сервисов", 
			status: 'Туториал', 
			image : 'https://hsto.org/getpro/habr/upload_files/e69/b33/502/e69b33502b55fff8dace91c0b6d4ff0a.png',
			body : {
				text1 : 
				`
				Если с тестированием привычных программных продуктов более-менее ясно, то вот с BigData возникает множество вопросов. 
				Если у вас Java - у вас есть как минимум JUnit, а абсолютное большинство фреймворков заботятся о простоте тестирования. Например Spring посвящает этому очень много документации. 
				Тестирование фронтенда тоже хорошо проработано: от Selenium до JestJs. Тестировать блокчейн и смарт-контракты одно удовольствие (хотя бы на Ethereum сети благодаря Truffle Suite)
				`,
				text2: 
				`
				Что делать, если вы используете Databricks? Обычные библиотеки для тестирования туда плохо заходят, 
				и даже несколько официальных руководств по тестированию не отвечают на все вопросы. Ответ, который нашла наша команда, 
				- Nutter Framework.
				`
			},
			rating : 122, 
			link_text : 'Как же его использовать?',
			favorite : 28,
			comments : 43,
		},
		{
			id : 2, 
			blog: 'Google',
			author : 'Бьёрн Страуструп',
			date : '23.02',
			title : 'Как стать резидентом Сколково? Наш опыт с детальным разбором заявки', 
			level : 'Сложный',
			timeRead : '6 мин',
			views : '318',
			thopic : "Блог компании OTUS Big Data Тестирование веб-сервисов", 
			status: 'Перевод', 
			image : 'https://hsto.org/getpro/habr/upload_files/4a6/b73/b6f/4a6b73b6f8666e1ce7c288f8d10ebabc.png',
			body : {
				text1 : `
				Меня зовут Вито Скалетте, и моя компания занимается защитой от скликивания контекстной рекламы в «Яндекс.Директ».
				Мы получили статус резидента Сколково в конце прошлого года, и я хочу поделиться опытом с разбором нашей заявки. Это не так уж и сложно, а плюсов довольно много.
				`,
				text2: 
				`
				Я не буду вам перечислять абсолютно всё, что дает статус резидента Сколково — вся информация есть на сайте фонда (sk.ru). 
				Ранее туда старались попасть ради налоговых льгот, но теперь, при наличии ИТ-аккредитации, это стало менее актуально в части сокращения налогов. 
				Сейчас фонд предоставляет другой, гораздо более широкий перечень возможностей для начинающих бизнесов (кстати, не только в ИТ). Релокация, отмечу, не требуется.
				`
			},
			rating : -512, 
			link_text : 'Читать далее',
			favorite : 24,
			comments : 113,
		},
		{
			id : 3, 
			blog : 'blog',
			author : 'Viktor Blud',
			date : '24.02',
			title : 'Тест дизайн методом Interface — Model — State', 
			level : 'Средний',
			timeRead : '9 мин',
			views : '250',
			thopic : "Тестирование IT-системТестирование веб-сервисов", 
			status: 'Из песочницы', 
			image : 'https://hsto.org/getpro/habr/upload_files/892/6c6/0cd/8926c60cdf64a58e943fc102457c273a.png',
			body : {
				text1 : `
				Yet another метод для разработки функциональных тест кейсов. Что будет, если отталкиваться от архитектурных схем тестируемой системы.
				`
			},
			rating : 114, 
			link_text : 'Пройти тест',
			favorite : 41,
			comments : 54,
		},
		{
			id : 4, 
			blog : 'blog',
			author : 'LastCEO',
			date : '25.02',
			title : 'Обработка естественного языка (NLP). Личный опыт — мой первый запуск BERT', 
			level : 'Простой',
			timeRead : '4 мин',
			views : '316',
			thopic : "Python, Программирование", 
			status: 'Из песочницы', 
			image : 'https://hsto.org/getpro/habr/upload_files/29e/f63/4b4/29ef634b4a2e72ef4525b5b25947cc62.jpg',
			body : {
				text1 : `
				BERT - Bidirectional Encoder Representations from Transformers
				`,
				text2 : `
				Здесь не будет рассказываться о том, что такое BERT, как это работает и для чего применяется - в сети об этом достаточно информации.
				Это статья про личный опыт - как конкретно у меня получилось запустить BERT с чистого Colab по конкретным описаниям.
				`
			},
			rating : 83, 
			link_text : 'Читать далее',
			favorite : 17,
			comments : 14,
		},
		{
			id : 5, 
			blog : 'blog',
			author : 'VersusCode',
			date : '28.02',
			title : 'Своя альтернатива Google Maps: хостим сервер OpenStreetMap', 
			level : 'Средный',
			timeRead : '7 мин',
			views : '1.5К',
			thopic : "Блог компании QIWI, Хостинг, Open source, OpenStreetMap", 
			status: 'Туториал', 
			image : 'https://habrastorage.org/webt/ff/pj/ms/ffpjms4e4siyf1qjq9qi_o3adew.png',
			body : {
				text1 : `
				Зачем? Это странно...
				Нет, не странно! Google Maps — это, наверно, самый потрясающий сервис, который мы получаем бесплатно [в обмен на свои персональные данные].
				`,
				text2 : `
				OpenStreetMap бесплатно предоставляет всему миру данные карт, собранные при помощи краудсорсинга. 
				Но я не имею в виду, что можно просто воспользоваться OSM. Эта организация предоставляет данные, 
				однако политика использования стимулирует пользователей не полагаться на её серверы при личном пользовании, 
				а брать на себя ответственность за хостинг. И глядя на этот проект, я понимаю, почему. 
				Его аппаратные требования не для слабонервных.
				`
			},
			rating : +764, 
			link_text : 'Читать дальше ->',
			favorite : 109,
			comments : 58,
		},
		{
			id : 6, 
			blog : 'blog',
			author : 'VersusCode',
			date : '01.03',
			title : 'Навыки, которые пригодятся фрилансеру', 
			level : 'Простой',
			timeRead : '8 мин',	
			views : '128',
			thopic : "Фриланс", 
			image : '',
			body : {
				text1 : `
				Когда я выходил на фриланс, то думал, что мне будет достаточно хорошего владения своей профессией, 
				чтобы уверенно предоставлять услугу. И да, профессия всё ещё на первом месте в моём списке. 
				Но оказалось, что есть ещё ряд вещей, без которых я бы не стал нормальным фрилансером.
				`,
			},
			rating : +751, 
			link_text : 'Читать далее',
			favorite : 119,
			comments : 78,
		},
		{
			id : 7, 
			blog : 'blog',
			author : 'VersusCode',
			date : '01.03',
			title : 'Иерархические пространства имен в Kubernetes: объясняем на примере', 
			level : 'Простой',
			timeRead : '7 мин',	
			status: 'Перевод', 
			views : '723',
			thopic : "Блог компании VK", 
			image : 'https://habrastorage.org/webt/wz/gy/nv/wzgynv9d4npxsb8fye0wzlif94i.png',
			body : {
				text1 : `
				Пространства имен — критически важный ресурс для поддержки мультитенантной архитектуры кластера Kubernetes. 
				Но ими трудно управлять при работе с крупномасштабными мультитенантными кластерами. 
				К счастью, процесс можно упростить, добавив в Kubernetes функцию иерархических пространств имен. 
				Команда VK Cloud перевела статью о том, как это сделать.
				`,
				text2 : `
				Это статья для тех, у кого есть общее представление о Kubernetes, кластерах, контейнерах и подах. 
				Также потребуются базовые знания о пространствах имен в Kubernetes.
				`
			},
			rating : +2, 
			link_text : 'Читать далее',
			favorite : 17,
			comments : 0,
		},
		{
			id : 8, 
			blog : 'blog',
			author : 'Andrew_Ops',
			date : '02.03',
			title : 'Краткий обзор Layout XML в Android. Часть 1', 
			level : 'Простой',
			timeRead : '3 мин',	
			status: 'Из песочницы', 
			views : '250',
			thopic : "Разработка мобильных приложений, XML, Разработка под Android", 
			image : 'https://habrastorage.org/getpro/habr/upload_files/35a/4a3/d96/35a4a3d96a37a815d2455ff5b8ea7900.PNG',
			body : {
				text1 : `
				Пока модные и современные тестируют Jetpack Compose в новых проектах, мы с вами поговорим о старой доброй XML разметке.
				Буквально по паре предложений о каждом Layout, чтобы составить общее представление об их применении. Для тех, кто хочет подробностей - ссылки будут под спойлерами.
				`,
				text2 : `
				Статья рассчитана на тех, кто только начинает разработку на Android, но возможно и более опытные разработчики почерпнут для себя полезные сведения.
				`
			},
			rating : -1, 
			link_text : 'Читать далее',
			favorite : 0,
			comments : 1,
		},
		{
			id : 9, 
			blog : 'blog',
			author : 'Vasyan',
			date : '04.03',
			title : 'Проверяем работает ли full-RBF в Bitcoin', 
			level : 'Средний',
			timeRead : '5 мин',	
			status: 'Туториал', 
			views : '653',
			thopic : "Децентрализованные сети, DevOps", 
			image : 'https://habrastorage.org/getpro/habr/upload_files/9b6/3ea/11c/9b63ea11cdbd8194f5eda251509c0ffb.png',
			body : {
				text1 : `
				В декабре 2022 года вышло обновление Bitcoin Core 24.0, 
				которое позволяет заменять неподтвержденные транзакции (full-RBF или replace-by-fee). 
				Это может коснуться всех, кто принимает оплату в биткоине по неподтвержденным транзакциям из мемпула: криптоматы, криптообменники, мерчанты и тд.
				`,
				text2 : `
				В статье я описал пошаговую инструкцию: как я разворачивал свою Bitcoin ноду и проверял, действительно ли можно заменить транзакцию.
				`
			},
			rating : +2, 
			link_text : 'Читать далее',
			favorite : 17,
			comments : 0,
		},
		{
			id : 10, 
			blog : 'blog',
			author : 'Tugcasf',
			date : '05.03',
			title : 'Создание модуля WebAssembly с помощью Emscripten, AssemblyScript и Rust', 
			level : 'Средний',
			timeRead : '56 мин',	
			status: 'Из песочницы', 
			views : '1.1К',
			thopic : "Python, C++, RUST", 
			image : 'https://habrastorage.org/getpro/habr/upload_files/6c1/ace/e2d/6c1acee2dd57b057ca7ffb0b33689600.png',
			body : {
				text1 : `
				В этой небольшой заметке предлагается рассмотреть несколько способов компиляции модуля для WebAssembly, 
				используя три разных подхода. Мы реализуем решение одной и той же задачки на трёх языках и скомпилируем полученный код в модуль WebAssembly. 
				Будем использовать:
				`,
				text2 : `
				Emscripten для компиляции кода, написанного на С++
				AssemblyScript для компиляции кода, написанного на, собственно, AssemblyScript
				wasm-pack для компиляции кода, написанного на Rust
				`
			},
			rating : +16, 
			link_text : 'Читать далее',
			favorite : 11,
			comments : 5,
		},
		{
			id : 11, 
			blog : 'blog',
			author : 'ViktorU',
			date : '08.03',
			title : 'Насколько точную информацию выдает ChatGPT?', 
			level : 'Простой',
			timeRead : '2 мин',	
			status: '', 
			views : '11К',
			thopic : "Искусственный интеллект", 
			image : 'https://hsto.org/getpro/habr/upload_files/017/fb3/05d/017fb305dc13c342607c2d3a132a4654.png',
			body : {
				text1 : `
				Может ли 8-летний мальчик чему-то научить ChatGPT?
				Будет ли ChatGPT использовать полученные знания от этого мальчика только в диалоге с ним или будет транслировать полученную информацию другим пользователям?
				Что будет, если модель ChatGPT обманули?
				`,
				text2 : `
				Ниже полный лог беседы.
				`
			},
			rating : +117, 
			link_text : 'Читать далее',
			favorite : 43,
			comments : 17,
		},
		{
			id : 12, 
			blog : 'blog',
			author : 'AnnaS',
			date : '09.03',
			title : 'Как разработчику стать тимлидом и что это ему даст', 
			level : 'Простой',
			timeRead : '5 мин',	
			status: 'Туториал', 
			views : '781',
			thopic : "Блог компании Хекслет, Работа в айти компании, Карьера в IT", 
			image : 'https://hsto.org/getpro/habr/upload_files/94f/198/a80/94f198a804f887dbdcaeda071d346054.png',
			body : {
				text1 : `
				Тимлид (или ведущий разработчик, team leader) — это должность, в обязанности которой входит огромное количество задач. 
				И в различных компаниях тимлиды занимаются разными вещами — кто-то больше развивает команду и планирует спринты, 
				другие — проектируют системы или коммуницируют с другими отделами и даже заказчиками.
				`,
				text2 : `
				27 февраля 2023 года Хекслет запускает бесплатную Школу Тимлида — это курс, 
				который поможет начинающему или будущему руководителю правильно работать со своей командой разработчиков. 
				Преподаватель Школы Саша Толокнов подробно разобрал программу Школы тимлида и объяснил, 
				как эффективно работать с разработчиками, быть классным лидом и при этом не сгореть.
				`
			},
			rating : +1, 
			link_text : 'Читать далее',
			favorite : 20,
			comments : 5,
		},
		{
			id : 13, 
			blog : 'blog',
			author : 'qmzs',
			date : '11.03',
			title : 'Что такое Style Queries?', 
			level : 'Простой',
			timeRead : '5 мин',	
			status: 'Из песочницы', 
			views : '1.2К',
			thopic : "CSS, JavaScript, HTML", 
			image : 'https://hsto.org/getpro/habr/upload_files/ae1/e4a/1ad/ae1e4a1ad88a2cbfba39f96cce978033.png',
			body : {
				text1 : `
				Size container queries и container query units недавно достигли стабильной поддержки во всех современных браузерных движках.
				`
			},
			rating : +112, 
			link_text : 'Читать далее',
			favorite : 211,
			comments : 42,
		},
	],
	newsList : [
		{
			title : 'Маск продолжил увольнять сотрудников Twitter после заявления об остановке сокращений',
			timePublication : '12:57',
			comments : 497,
		},
		{
			title : 'Wilson показала прототип баскетбольного мяча из 3D-принтера',
			timePublication : '12:23',
			comments : 856,
		},
		{
			title : 'Школьник сорвал рейс American Airlines, поменяв в настройках AirDrop наименование своего iPhone на «I have a bomb»',
			timePublication : '12:02',
			comments : 734,
		},
		{
			title : 'Bethesda представила мобильную игру по вселенной DOOM',
			timePublication : '11:34',
			comments : 1246
		},
		{
			title : 'Ювелирная сеть Sunlight разработала сервис знакомств',
			timePublication : '11:21',
			comments : 513
		},
		{
			title : 'МТС купила 67% платформы для размещения нативной рекламы Buzzoola',
			timePublication : '10:56',
			comments : 819
		},
		{
			title : 'Sci-Fi-журнал Clarkesworld приостанавливает выпуск материалов из-за потока историй, написанных ИИ',
			timePublication : '10:14',
			comments : 127
		},
		{
			title : 'Написанные нейросетью ChatGPT книги появились в продаже на Amazon',
			timePublication : '10:07',
			comments : 894
		},
		{
			title : 'Маск продолжил увольнять сотрудников Twitter после заявления об остановке сокращений',
			timePublication : '10:02',
			comments : 201
		},
		{
			title : 'Wilson показала прототип баскетбольного мяча из 3D-принтера',
			timePublication : '09:54',
			comments : 194
		},
	],
	stories : [
		{
			id : 1,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/412/447/e40/412447e40a7f9d7d0bc3def931a8f531.png',
			title : 'Карьерная неделя с победителями рейтинга',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/9f9/e16/aa3/9f9e16aa3959d9417693b87b33b5960a.png'
		},
		{
			id : 2,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/1e5/39c/d83/1e539cd8310dbe3ebcb14cffc293a7ff.png',
			title : 'Снимок мощной солнечной вспышки',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/7ca/d19/564/7cad19564e3da01131c205970297efed.png',
		},
		{
			id : 3,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/506/188/83b/50618883bc97ce517531018d3290d961.jpg',
			title : 'Где искать северное сияние в России',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/f19/48d/d15/f1948dd155701f88d36e11387c1660ef.png',
		},
		{
			id : 4,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/f8d/1f4/cc3/f8d1f4cc328fb5308a64c97976ad821a.jpg',
			title : 'Лучшее из блогов компаний за неделю',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/09c/0f6/15d/09c0f615db74086a1611243d250411eb.png',
		},
		{
			id : 5,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/be2/07d/19f/be207d19f3cdc4b89e3618025c071ea0.png',
			title : 'Зарплаты в It во второй половине 2022',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/c41/8cc/ca9/c418ccca924faf05c11530c5071e627b.png',
		},
		{
			id : 6,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/d35/ce5/716/d35ce5716f14544be26d53e05dc155ab.jpg',
			title : 'Любовь, Хабр и роботы',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/312/abe/d4c/312abed4c2617f05f485c19ae101de7e.png',
		},
		{
			id : 7,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/2b0/5e8/ffb/2b05e8ffb30634f0f7f5c9602d8e43e6.png',
			title : 'Столкнуться с кубом',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/b6b/720/180/b6b72018041811571246ddf5ef07bd33.png',
		},
		{
			id : 8,
			image : 'https://habrastorage.org/r/w390/getpro/habr/upload_files/bbb/901/063/bbb9010630ae483ed1f41ec4e2572c13.png',
			title : 'Сеньоры - очень странные люди',
			icon : 'https://habrastorage.org/getpro/habr/upload_files/312/abe/d4c/312abed4c2617f05f485c19ae101de7e.png',
		},
	],
	ofItems : [
		{
			id : 1, title : 'Глупым вопросам и ошибкам — быть! IT-менторство на ХК', status : 'Интересно' , 
			image : 'https://hsto.org/getpro/effect/d61/5e8/ab7/eb6/94d/41c8d110bc003318a7f45e0a1/1.png'
		},
		{
			id : 1, title : 'Помогите джунам: напишите для них статью, а Хабр вычитает пост', status : 'Промо' , 
			image : 'https://hsto.org/getpro/effect/690/127/f5e/ff4/04a/3d4f6d3adb42c9276cf7df177/460296.jpg'
		},
		{
			id : 1, title : 'Как небольшой компании расцвести на Хабре за полгода', status : 'Турбо' , 
			image : 'https://hsto.org/getpro/effect/50d/e65/6f1/140/1be/586b1f5e3314db16f6619fc7a/460x296112.jpg'
		},
	],
	statistics : [
		{
			id : 1,
			name : 'СРЕДНЯЯ ЗАРПЛАТА В IT',
			title : '180 880 ₽/мес.',
			suptitle : '— средняя зарплата во всех IT-специализациях по данным из 3 191 анкеты, за 1-ое пол. 2023 года. Проверьте «в рынке» ли ваша зарплата или нет!',
			linkText : 'Проверить свою зарплату',
		}
	],
	ordersList : [
		{
			id : 1, topic : 'Парсинг YouTube', price : '15000 руб.', priceTo : '/за проект', feedback : 2, views : 108
		},
		{
			id : 2, topic : 'Nginx, FastCGI проксирование сайта с .onion (tor) на клирнет', price : '20000 руб.', priceTo : '/в час', feedback : 11, views : 124
		},
		{
			id : 3, topic : 'Поправить авторизацию', price : '20000 руб.', priceTo : '/за проект', feedback : 15, views : 97
		},
		{
			id : 4, topic : 'Дизайн стильной презентации', price : '2000 руб.', priceTo : '/в час', feedback : 5, views : 203
		},
		{
			id : 5, topic : 'Доработка существующих и создание новых обработок для 1С:УТ', price : '15000 руб.', priceTo : '/за проект', feedback : 8, views : 71
		},
	],
	questionsList : [
		{
			id : 1, title : 'Как добиться завершения фразы в OpenAI API?', topic : 'Машинное обучение', level : 'Простой', feedback : 5,
		},
		{
			id : 2, title : 'Как установить Windows 10 в gpt диск рядом с Linux?', topic : 'Linux', level : 'Средний', feedback : 4, 
		},
		{
			id : 3, title : 'Как преобразовать диск размером динамический GPT размером 2Тб+ в базовый GPT?', topic : 'NTFS', level : 'Простой', feedback : 11, 
		},
		{
			id : 4, title : 'Не устанавливается windows 11 в режиме UEFI. Что делать?', topic : 'Windows', level : 'Простой', feedback : 7, 
		},
		{
			id : 5, title : 'Как расширить диск Linux?', topic : 'Linux', level : 'Простой', feedback : 13,
		},
	]
}