import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  const services = [
    {
      title: "Монтаж кровли",
      description: "Профессиональный монтаж всех видов кровельных материалов",
      price: "от 1 200 ₽/м²",
      features: ["Металлочерепица", "Профнастил", "Мягкая кровля", "Натуральная черепица"]
    },
    {
      title: "Ремонт кровли",
      description: "Устранение протечек и восстановление кровельного покрытия",
      price: "от 800 ₽/м²",
      features: ["Устранение протечек", "Замена поврежденных элементов", "Герметизация", "Профилактика"]
    },
    {
      title: "Утепление кровли",
      description: "Комплексное утепление для энергоэффективности дома",
      price: "от 950 ₽/м²",
      features: ["Минеральная вата", "Пенополистирол", "Пароизоляция", "Вентиляция"]
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
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6">Заказать</Button>
                </CardContent>
              </Card>
            ))}
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