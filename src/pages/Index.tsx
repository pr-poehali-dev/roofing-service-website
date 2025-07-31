import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Монтаж кровли",
      description: "Профессиональный монтаж всех видов кровельных материалов с гарантией качества",
      price: "от 1 200 ₽/м²",
      features: ["Металлочерепица", "Профнастил", "Мягкая кровля", "Натуральная черепица", "Фальцевая кровля"],
      details: "Полный цикл работ: от демонтажа старого покрытия до финишной отделки. Включает установку стропильной системы, обрешетки, гидроизоляции и самого кровельного материала."
    },
    {
      title: "Ремонт кровли",
      description: "Устранение протечек и восстановление кровельного покрытия любой сложности",
      price: "от 800 ₽/м²",
      features: ["Устранение протечек", "Замена поврежденных элементов", "Герметизация", "Профилактика", "Экстренный ремонт"],
      details: "Диагностика состояния кровли, локальный или капитальный ремонт. Работаем с любыми материалами, включая сложные архитектурные формы."
    },
    {
      title: "Утепление кровли",
      description: "Комплексное утепление для повышения энергоэффективности дома",
      price: "от 950 ₽/м²",
      features: ["Минеральная вата", "Пенополистирол", "Пароизоляция", "Вентиляция", "Экструдированный пенополистирол"],
      details: "Профессиональное утепление с расчетом точки росы. Монтаж пароизоляции, утеплителя и ветрозащиты по всем строительным нормам."
    },
    {
      title: "Водосточные системы",
      description: "Проектирование и монтаж водосточных систем",
      price: "от 600 ₽/м.п.",
      features: ["Пластиковые системы", "Металлические желоба", "Обогрев водостоков", "Снегозадержатели"],
      details: "Расчет пропускной способности, монтаж желобов, труб и элементов крепления. Установка систем антиобледенения."
    },
    {
      title: "Кровельные работы под ключ",
      description: "Полный комплекс работ от проекта до сдачи объекта",
      price: "от 2 500 ₽/м²",
      features: ["Проектирование", "Материалы", "Монтаж", "Гарантия", "Сервисное обслуживание"],
      details: "Комплексное решение: замеры, проект, поставка материалов, выполнение работ и последующее обслуживание."
    },
    {
      title: "Мансардные окна",
      description: "Установка мансардных окон и люков",
      price: "от 15 000 ₽/шт",
      features: ["VELUX", "FAKRO", "Люки на кровлю", "Дымоходы"],
      details: "Профессиональная установка мансардных окон с правильной гидроизоляцией и утеплением монтажного шва."
    }
  ];

  const materials = [
    {
      category: "Металлочерепица",
      brands: ["Grand Line", "Металл Профиль", "Ruukki", "Tegola"],
      description: "Долговечность до 50 лет, широкая цветовая гамма"
    },
    {
      category: "Мягкая кровля",
      brands: ["Технониколь", "Ruflex", "Katepal", "IKO"],
      description: "Бесшумность, гибкость форм, высокая герметичность"
    },
    {
      category: "Профнастил",
      brands: ["Металл Профиль", "Grand Line", "СинарПрофиль"],
      description: "Экономичность, быстрый монтаж, надежность"
    },
    {
      category: "Композитная черепица",
      brands: ["Luxard", "Decra", "Gerard", "Metrotile"],
      description: "Элитный материал, имитация натуральной черепицы"
    }
  ];

  const faqData = [
    {
      question: "Сколько времени занимает монтаж кровли?",
      answer: "Время монтажа зависит от площади и сложности кровли. Обычно на дом 100-150 м² уходит 5-7 рабочих дней. Сложные архитектурные формы могут потребовать до 2 недель."
    },
    {
      question: "Какая гарантия на кровельные работы?",
      answer: "Мы предоставляем гарантию на монтажные работы до 15 лет, на материалы - согласно гарантии производителя (от 15 до 50 лет в зависимости от типа кровли)."
    },
    {
      question: "В какое время года лучше делать кровлю?",
      answer: "Кровельные работы можно выполнять круглогодично при температуре не ниже -15°C. Оптимальное время - весна-осень, когда нет сильных осадков."
    },
    {
      question: "Нужно ли разрешение на замену кровли?",
      answer: "Для замены кровли частного дома без изменения конструкции разрешение не требуется. При изменении угла наклона или конструкции стропил может потребоваться согласование."
    },
    {
      question: "Какой материал кровли лучше выбрать?",
      answer: "Выбор зависит от бюджета, архитектуры дома и личных предпочтений. Металлочерепица - оптимальный баланс цены и качества, мягкая кровля - для сложных форм, композитная - премиум вариант."
    },
    {
      question: "Можно ли делать кровлю зимой?",
      answer: "Да, при соблюдении технологии. Используем морозостойкие материалы, обеспечиваем правильные условия хранения. Некоторые работы (например, с мягкой кровлей) ограничены температурным режимом."
    }
  ];

  const reviews = [
    {
      name: "Дмитрий Петров",
      text: "Отличная работа! Крышу делали быстро и качественно. Рекомендую!",
      rating: 5,
      location: "Москва"
    },
    {
      name: "Елена Сидорова",
      text: "Профессиональная команда. Все сделали в срок, убрали за собой.",
      rating: 5,
      location: "Подмосковье"
    },
    {
      name: "Александр Иванов",
      text: "Устранили протечку за один день. Работой доволен, цены адекватные.",
      rating: 5,
      location: "Мытищи"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Icon name="Home" size={28} />
              <h1 className="text-xl font-bold">КровляПро</h1>
            </div>
            <div className="hidden md:flex items-center space-x-6">
              <span className="flex items-center space-x-2">
                <Icon name="Phone" size={16} />
                <span>+7 (495) 123-45-67</span>
              </span>
              <span className="flex items-center space-x-2">
                <Icon name="MapPin" size={16} />
                <span>Москва и МО</span>
              </span>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/5 to-primary/10 py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Надежные кровельные работы
            <br />
            <span className="text-primary">в Москве и области</span>
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Профессиональный монтаж, ремонт и утепление кровли. 
            Гарантия до 15 лет. Работаем с 2010 года.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="text-lg px-8">
              Получить расчет
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8">
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon name="Shield" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Гарантия до 15 лет</h3>
              <p className="text-sm text-muted-foreground">На все виды работ</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon name="Clock" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Работаем с 2010 года</h3>
              <p className="text-sm text-muted-foreground">Более 1000 объектов</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-lg p-6 text-center">
              <Icon name="Users" size={40} className="mx-auto mb-3 text-primary" />
              <h3 className="font-semibold mb-2">Опытная команда</h3>
              <p className="text-sm text-muted-foreground">Сертифицированные мастера</p>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Примеры наших работ</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Фотографии выполненных проектов по монтажу и ремонту кровли
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/img/6816f079-d3de-4a60-aeb8-a1abd5634ec5.jpg" 
                alt="Процесс монтажа кровли"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-2">Монтаж металлочерепицы</h3>
                <p className="text-sm text-muted-foreground">Частный дом в Подмосковье</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/img/2e3a2ae1-6cb6-419e-ba78-f5485ae750d6.jpg" 
                alt="Готовый дом с новой кровлей"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-2">Завершенный проект</h3>
                <p className="text-sm text-muted-foreground">Дом с современной кровлей</p>
              </div>
            </div>
            <div className="group overflow-hidden rounded-lg shadow-lg">
              <img 
                src="/img/f8b5534b-85a2-4e84-9e7c-fa3a2c763230.jpg" 
                alt="Качественные материалы"
                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 bg-white">
                <h3 className="font-semibold mb-2">Качественные материалы</h3>
                <p className="text-sm text-muted-foreground">Только проверenные поставщики</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Наши услуги</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Полный спектр кровельных работ с использованием качественных материалов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    {service.title}
                    <Badge variant="secondary" className="text-lg font-bold">
                      {service.price}
                    </Badge>
                  </CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">{service.details}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Заказать</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Company Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">О компании КровляПро</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Более 14 лет мы специализируемся на кровельных работах в Москве и Московской области. 
                За это время выполнили более 1200 проектов - от небольших коттеджей до крупных промышленных объектов.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Icon name="Award" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Сертифицированные специалисты</h3>
                    <p className="text-sm text-muted-foreground">Все мастера имеют профильное образование и регулярно проходят обучение</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Shield" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Страхование ответственности</h3>
                    <p className="text-sm text-muted-foreground">Все работы застрахованы на сумму до 5 млн рублей</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Truck" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Собственный автопарк</h3>
                    <p className="text-sm text-muted-foreground">Доставляем материалы и оборудование собственным транспортом</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Icon name="Wrench" size={24} className="text-primary mt-1" />
                  <div>
                    <h3 className="font-semibold mb-1">Современное оборудование</h3>
                    <p className="text-sm text-muted-foreground">Используем профессиональные инструменты и спецтехнику</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">1200+</div>
                <div className="text-sm">Выполненных проектов</div>
              </div>
              <div className="bg-secondary text-secondary-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">14</div>
                <div className="text-sm">Лет на рынке</div>
              </div>
              <div className="bg-accent text-accent-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">24</div>
                <div className="text-sm">Специалиста в команде</div>
              </div>
              <div className="bg-muted text-muted-foreground p-6 rounded-lg text-center">
                <div className="text-3xl font-bold mb-2">98%</div>
                <div className="text-sm">Довольных клиентов</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Материалы и производители</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Работаем только с проверенными производителями кровельных материалов
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {materials.map((material, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <CardTitle className="text-lg">{material.category}</CardTitle>
                  <CardDescription>{material.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {material.brands.map((brand, idx) => (
                      <Badge key={idx} variant="outline" className="mr-2">
                        {brand}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Частые вопросы</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Ответы на самые популярные вопросы о кровельных работах
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqData.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border px-6">
                  <AccordionTrigger className="text-left font-semibold">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Как мы работаем</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Прозрачный процесс работы от заявки до сдачи объекта
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">1</div>
              <h3 className="font-semibold mb-2">Заявка</h3>
              <p className="text-sm text-muted-foreground">Оставляете заявку на сайте или звоните по телефону</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">2</div>
              <h3 className="font-semibold mb-2">Выезд замерщика</h3>
              <p className="text-sm text-muted-foreground">Бесплатный выезд специалиста для осмотра и замеров</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">3</div>
              <h3 className="font-semibold mb-2">Договор</h3>
              <p className="text-sm text-muted-foreground">Заключение договора с фиксированными сроками и стоимостью</p>
            </div>
            <div className="text-center">
              <div className="bg-primary text-primary-foreground w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">4</div>
              <h3 className="font-semibold mb-2">Выполнение работ</h3>
              <p className="text-sm text-muted-foreground">Профессиональное выполнение работ с ежедневными отчетами</p>
            </div>
          </div>
        </div>
      </section>

      {/* Price Calculator Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Калькулятор стоимости</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Получите предварительный расчет стоимости кровельных работ
            </p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card>
              <CardContent className="p-8">
                <Tabs defaultValue="roof-type" className="space-y-6">
                  <TabsList className="grid w-full grid-cols-4">
                    <TabsTrigger value="roof-type">Тип кровли</TabsTrigger>
                    <TabsTrigger value="area">Площадь</TabsTrigger>
                    <TabsTrigger value="material">Материал</TabsTrigger>
                    <TabsTrigger value="result">Результат</TabsTrigger>
                  </TabsList>
                  <TabsContent value="roof-type" className="space-y-4">
                    <h3 className="text-lg font-semibold">Выберите тип кровли</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Icon name="Home" size={40} className="mb-3 mx-auto" />
                          <h4 className="font-semibold">Двускатная</h4>
                          <p className="text-sm text-muted-foreground">Самый популярный тип</p>
                        </CardContent>
                      </Card>
                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Icon name="Triangle" size={40} className="mb-3 mx-auto" />
                          <h4 className="font-semibold">Четырехскатная</h4>
                          <p className="text-sm text-muted-foreground">Вальмовая кровля</p>
                        </CardContent>
                      </Card>
                      <Card className="cursor-pointer hover:bg-muted/50 transition-colors">
                        <CardContent className="p-6 text-center">
                          <Icon name="Square" size={40} className="mb-3 mx-auto" />
                          <h4 className="font-semibold">Сложная</h4>
                          <p className="text-sm text-muted-foreground">Многоуровневая</p>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                  <TabsContent value="area" className="space-y-4">
                    <h3 className="text-lg font-semibold">Укажите площадь кровли</h3>
                    <Input placeholder="Площадь в м²" type="number" />
                    <p className="text-sm text-muted-foreground">Если не знаете точную площадь, наш замерщик произведет расчет бесплатно</p>
                  </TabsContent>
                  <TabsContent value="material" className="space-y-4">
                    <h3 className="text-lg font-semibold">Выберите материал</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {materials.map((material, index) => (
                        <Card key={index} className="cursor-pointer hover:bg-muted/50 transition-colors">
                          <CardContent className="p-4">
                            <h4 className="font-semibold mb-2">{material.category}</h4>
                            <p className="text-sm text-muted-foreground">{material.description}</p>
                          </CardContent>
                        </Card>
                      ))}
                    </div>
                  </TabsContent>
                  <TabsContent value="result" className="space-y-4">
                    <div className="text-center p-8 bg-primary/5 rounded-lg">
                      <h3 className="text-2xl font-bold mb-4">Предварительная стоимость</h3>
                      <div className="text-4xl font-bold text-primary mb-4">от 180 000 ₽</div>
                      <p className="text-muted-foreground mb-6">Точную стоимость сможем рассчитать после выезда замерщика</p>
                      <Button size="lg">Вызвать замерщика бесплатно</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Оставить заявку</h2>
              <p className="text-muted-foreground">
                Получите бесплатную консультацию и расчет стоимости работ
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium mb-2 block">Ваше имя</label>
                      <Input placeholder="Введите ваше имя" />
                    </div>
                    <div>
                      <label className="text-sm font-medium mb-2 block">Телефон</label>
                      <Input placeholder="+7 (___) ___-__-__" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Email</label>
                    <Input type="email" placeholder="your@email.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-2 block">Опишите задачу</label>
                    <Textarea 
                      placeholder="Расскажите о вашем объекте и требуемых работах"
                      rows={4}
                    />
                  </div>
                  <Button className="w-full" size="lg">
                    <Icon name="Send" size={20} className="mr-2" />
                    Отправить заявку
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Отзывы клиентов</h2>
            <p className="text-muted-foreground">
              Что говорят о нас наши клиенты
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-1">
                      {[...Array(review.rating)].map((_, i) => (
                        <Icon key={i} name="Star" size={16} className="text-yellow-400 fill-current" />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">"{review.text}"</p>
                  <div>
                    <p className="font-semibold">{review.name}</p>
                    <p className="text-sm text-muted-foreground">{review.location}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Icon name="Phone" size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Телефон</h3>
              <p className="text-lg">+7 (495) 123-45-67</p>
              <p>Звоните с 8:00 до 20:00</p>
            </div>
            <div className="text-center">
              <Icon name="Mail" size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-lg">info@krovlyapro.ru</p>
              <p>Ответим в течение часа</p>
            </div>
            <div className="text-center">
              <Icon name="MapPin" size={40} className="mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">География работ</h3>
              <p className="text-lg">Москва и область</p>
              <p>Выезд в день обращения</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-8">
        <div className="container mx-auto px-4">
          <div className="text-center text-muted-foreground">
            <p>&copy; 2024 КровляПро. Все права защищены.</p>
            <p className="mt-2">Лицензия на строительные работы №12345</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;