const DOCUMENTS = [
    'Паспорт РФ',
    'Трудовая книжка либо форма СТД-Р',
    'СНИЛС',
    'ИНН',
    'Военный билет (для военнообязанных)',
    'Диплом об образовании',
    'Фактический адрес (если отличается от прописки)',
    'Номер телефона',
    'Адрес личной электронной почты',
    'Реквизиты банковской карты',
    'Свидетельство о заключении брака',
    'Свидетельство о рождении ребёнка',
    'Справка по форме 2-НДФЛ',
]

export const data = [{
    employee: {
        firstName: "Анна",
        secondName: "Петрова",
        lastName: "Сергеевна",
        position: "Frontend-разработчик",
        department: "Департамент веб-разработки",
        officeAddress: "г. Санкт-Петербург, Невский пр-т, д. 42, офис 501",
        phone: "+7 (921) 123-45-67",
        about: "Специализация: React и Vue.js. Участвую в разработке клиентской части CRM-системы.",
        photo: "https://example.com/photos/anna-petrova.jpg",
        organization: "ООО ТехноСофт"
    },
    documents: DOCUMENTS, // Предполагается существование переменной
    mentors: [
        {
            email: "dmitry.volkov@example.com",
            role: "Технический наставник",
            fullName: "Волков Дмитрий Олегович",
            position: "Lead Frontend Developer",
            officeAddress: "г. Санкт-Петербург, Невский пр-т, д. 42, офис 601",
            phone: "+7 (911) 765-43-21",
            telegram: "@dvolkov_tech",
            mattermost: "dvolkov",
            description: "Помогаю с архитектурой сложных SPA, код-ревью и оптимизацией"
        }
    ],
    helpContacts: [
        {
            email: "hr-support@example.com",
            role: "HR-специалист",
            fullName: "Смирнова Екатерина Викторовна",
            position: "HR Business Partner",
            officeAddress: "г. Санкт-Петербург, Невский пр-т, д. 42, офис 101",
            phone: "+7 (812) 333-44-55",
            telegram: "@hr_support_tech",
            mattermost: "hr_ekaterina",
            description: "Консультации по оформлению документов, отпускам и льготам",
            questions: ["Оформление больничных", "Учебный отпуск", "Релокация"]
        }
    ]
},
    {
        employee: {
            firstName: "Максим",
            secondName: "Сидоров",
            lastName: "Андреевич",
            position: "Инженер DevOps",
            department: "Команда облачной инфраструктуры",
            officeAddress: "г. Новосибирск, ул. Ленина, д. 24, коворкинг 'ИТ-Парк'",
            phone: "+7 (383) 222-33-44",
            about: "Автоматизация развертывания, мониторинг Kubernetes-кластеров, CI/CD",
            photo: "",
            organization: "ОАО CloudTech Solutions"
        },
        documents: DOCUMENTS,
        mentors: [
            {
                email: "alexey.ivanov@cloudtech.ru",
                role: "Главный наставник",
                fullName: "Иванов Алексей Петрович",
                position: "Head of Infrastructure",
                officeAddress: "г. Новосибирск, ул. Ленина, д. 24, офис 200",
                phone: "+7 (913) 456-78-90",
                telegram: "@alexey_devops",
                mattermost: "aivanov",
                description: "Контроль выполнения плана развития, оценка прогресса"
            },
            {
                email: "ekaterina.smirnova@cloudtech.ru",
                role: "Технический эксперт",
                fullName: "Смирнова Екатерина Романовна",
                position: "Senior DevOps Engineer",
                officeAddress: "г. Новосибирск, ул. Ленина, д. 24, офис 210",
                phone: "+7 (923) 111-22-33",
                telegram: "@ekaterina_cloud",
                mattermost: "esmirnova",
                description: "Помощь с настройкой GitLab CI, Terraform и Ansible"
            }
        ],
        helpContacts: [
            {
                email: "it-helpdesk@cloudtech.ru",
                role: "IT-поддержка",
                fullName: "Козлов Артем Игоревич",
                position: "Системный администратор",
                officeAddress: "г. Новосибирск, ул. Ленина, д. 24, серверная №3",
                phone: "+7 (383) 444-55-66 (доб. 120)",
                telegram: "",
                mattermost: "helpdesk_support",
                description: "Выдача оборудования, настройка ПО, сброс паролей",
                questions: ["Получение ноутбука", "Настройка VPN", "Проблемы с доступом"]
            }
        ]
    }, {
        employee: {
            firstName: "Ольга",
            secondName: "Кузнецова",
            lastName: "Дмитриевна",
            position: "Стажёр-аналитик",
            department: "Отдел бизнес-аналитики",
            officeAddress: "г. Екатеринбург, ул. Мамина-Сибиряка, д. 101, этаж 5",
            phone: "+7 (922) 555-44-33",
            about: "Изучаю SQL и Power BI, помогаю в сборе требований к ПО",
            photo: "https://hrportal.example.com/photo/4567.jpg",
            organization: "ПАО Банк Финанс"
        },
        documents: DOCUMENTS,
        mentors: [
            {
                email: "irina.nikolaeva@bfinance.ru",
                role: "Наставник",
                fullName: "Николаева Ирина Владимировна",
                position: "Руководитель отдела аналитики",
                phone: "+7 (922) 777-88-99",
                telegram: "",
                mattermost: "inikolaeva",
                description: "Основной контакт по рабочим задачам и стажировке"
            }
        ],
        helpContacts: [
            {
                email: "hr-onboarding@bfinance.ru",
                role: "Адаптация",
                fullName: "Соколова Мария Павловна",
                position: "Специалист по адаптации",
                phone: "+7 (343) 222-11-00",
                description: "Ответы на вопросы по корпоративной культуре и процедурам",
                questions: ["График работы", "Дресс-код", "Корпоративные мероприятия"]
            }
        ]
    }, {
        employee: {
            firstName: "Александр",
            secondName: "Жуков",
            lastName: "Викторович",
            position: "Руководитель отдела разработки",
            department: "Департамент цифровых решений",
            officeAddress: "г. Казань, ул. Кремлёвская, д. 35, этаж 15",
            phone: "+7 (917) 888-77-66",
            about: "Управление командой из 20 разработчиков, планирование спринтов",
            photo: "https://corpcdn.example.com/avatars/zukov_av.jpg",
            organization: "ООО Цифровые Технологии"
        },
        documents: DOCUMENTS,
        mentors: [
            {
                email: "svetlana.ivanova@digitaltech.ru",
                role: "Карьерный коуч",
                fullName: "Иванова Светлана Юрьевна",
                position: "HRD",
                phone: "+7 (843) 500-40-30",
                telegram: "@hr_svetlana",
                description: "Помощь в развитии управленческих компетенций"
            }
        ],
        helpContacts: [
            {
                email: "finance-dep@digitaltech.ru",
                role: "Финансовый отдел",
                fullName: "Гарифуллин Рамиль Фаритович",
                position: "Финансовый менеджер",
                phone: "+7 (843) 500-40-41",
                questions: ["Бюджет отдела", "Закупка оборудования"]
            },
            {
                email: "legal-support@digitaltech.ru",
                role: "Юридическая поддержка",
                fullName: "Васильева Анна Константиновна",
                position: "Юрист",
                phone: "+7 (843) 500-40-42",
                questions: ["Составление договоров", "Авторские права"]
            }
        ]
    }, {
        employee: {
            firstName: "Андрей",
            secondName: "Смирнов",
            lastName: "Алексеевич",
            position: "Backend Developer",
            department: "Департамент бэкенд-разработки",
            officeAddress: "г. Москва, ул. Тверская, д. 10, этаж 7",
            phone: "+7 (495) 123-45-67",
            about: "Разрабатываю микросервисы на Java и Spring Boot. Интересуюсь Kubernetes.",
            photo: "https://company.com/photos/asmirnov.jpg",
            organization: "ООО ТехноПрогресс"
        },
        documents: [
            'Паспорт РФ',
            'Трудовая книжка либо форма СТД-Р',
            'СНИЛС',
            'ИНН',
            'Военный билет (для военнообязанных)',
            'Диплом об образовании',
            'Фактический адрес (если отличается от прописки)',
            'Номер телефона',
            'Адрес личной электронной почты',
            'Реквизиты банковской карты',
            'Свидетельство о заключении брака',
            'Свидетельство о рождении ребёнка',
            'Справка по форме 2-НДФЛ',
        ],
        mentors: [
            {
                email: "ivanov.tech@company.com",
                role: "Старший разработчик",
                fullName: "Иванов Петр Сергеевич",
                position: "Team Lead",
                officeAddress: "г. Москва, ул. Тверская, д. 10, этаж 9",
                phone: "+7 (916) 555-12-34",
                telegram: "@pivanov_tech",
                mattermost: "pivanov",
                description: "Помощь в проектировании архитектуры и код-ревью"
            }
        ],
        helpContacts: [
            {
                email: "hr-support@company.com",
                role: "HR-менеджер",
                fullName: "Козлова Мария Викторовна",
                position: "HR Business Partner",
                officeAddress: "г. Москва, ул. Тверская, д. 10, этаж 3",
                phone: "+7 (495) 987-65-43",
                telegram: "@hr_mary",
                mattermost: "hr_kozlova",
                description: "Консультации по кадровым вопросам и документам",
                questions: ["Оформление отпуска", "Больничные листы", "Обучение"]
            }
        ]
    }, {
        employee: {
            firstName: "Екатерина",
            secondName: "Волкова",
            lastName: "Олеговна",
            position: "Team Lead",
            department: "Отдел мобильной разработки",
            officeAddress: "г. Санкт-Петербург, Невский пр-т, д. 100, офис 1501",
            phone: "+7 (812) 444-55-66",
            about: "Руковожу командой из 10 разработчиков. Специализация: iOS, Swift.",
            photo: "",
            organization: "ОАО Digital Solutions"
        },
        documents: [
            'Паспорт РФ',
            'Трудовая книжка либо форма СТД-Р',
            'СНИЛС',
            'ИНН',
            'Военный билет (для военнообязанных)',
            'Диплом об образовании',
            'Фактический адрес (если отличается от прописки)',
            'Номер телефона',
            'Адрес личной электронной почты',
            'Реквизиты банковской карты',
            'Свидетельство о заключении брака',
            'Свидетельство о рождении ребёнка',
            'Справка по форме 2-НДФЛ',
        ],
        mentors: [
            {
                email: "cto@digitalsolutions.ru",
                role: "Карьерный наставник",
                fullName: "Соколов Артем Игоревич",
                position: "CTO",
                officeAddress: "г. Санкт-Петербург, Невский пр-т, д. 100, офис 2001",
                phone: "+7 (921) 999-88-77",
                telegram: "@artem_cto",
                mattermost: "asokolov",
                description: "Помощь в управленческих решениях и стратегии развития команды"
            }
        ],
        helpContacts: [
            {
                email: "finance@digitalsolutions.ru",
                role: "Финансовый отдел",
                fullName: "Петрова Ольга Дмитриевна",
                position: "Финансовый менеджер",
                phone: "+7 (812) 333-22-11 (доб. 450)",
                telegram: "",
                mattermost: "fin_support",
                description: "Вопросы по зарплате и бюджету команды",
                questions: ["Премии", "Командировочные", "Отчеты"]
            },
            {
                email: "it-support@digitalsolutions.ru",
                role: "IT Support",
                fullName: "Никитин Алексей Юрьевич",
                position: "Старший системный администратор",
                phone: "+7 (812) 333-22-11 (доб. 100)",
                telegram: "@itsupport_alex",
                description: "Технические проблемы с оборудованием и доступом",
                questions: ["Выдача ноутбуков", "VPN", "Почта"]
            }
        ]
    }, {
        employee: {
            firstName: "Дмитрий",
            secondName: "Кузнецов",
            lastName: "Андреевич",
            position: "Стажёр-тестировщик",
            department: "QA отдел",
            officeAddress: "г. Новосибирск, ул. Советская, д. 5, коворкинг 'ИТ-Град'",
            phone: "+7 (383) 111-22-33",
            about: "Прохожу стажировку по автоматизации тестирования. Изучаю Python и Selenium.",
            photo: "https://hrportal.ru/photos/dkuznetsov.jpg",
            organization: "ООО СофтТех"
        },
        documents: [
            'Паспорт РФ',
            'Трудовая книжка либо форма СТД-Р',
            'СНИЛС',
            'ИНН',
            'Военный билет (для военнообязанных)',
            'Диплом об образовании',
            'Фактический адрес (если отличается от прописки)',
            'Номер телефона',
            'Адрес личной электронной почты',
            'Реквизиты банковской карты',
            'Справка по форме 2-НДФЛ',
        ],
        mentors: [
            {
                email: "qa_lead@softtech.ru",
                role: "Наставник",
                fullName: "Федорова Анна Кирилловна",
                position: "Lead QA Engineer",
                phone: "+7 (913) 456-78-90",
                mattermost: "qa_mentor",
                description: "Обучение процессам тестирования и написанию автотестов"
            }
        ],
        helpContacts: [
            {
                email: "hr-onboarding@softtech.ru",
                role: "Специалист по адаптации",
                fullName: "Григорьева Елена Владимировна",
                position: "HR-специалист",
                phone: "+7 (383) 444-55-66",
                description: "Вопросы по стажировке и корпоративным процедурам",
                questions: ["График работы", "Дресс-код", "Оформление пропуска"]
            }
        ]
    }];
