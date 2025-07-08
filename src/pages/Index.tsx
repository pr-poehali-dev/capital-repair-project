import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <Icon name="Building2" size={32} className="text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">СтройПроект</h1>
            </div>
            <nav className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                О компании
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Услуги
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Портфолио
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-blue-600 transition-colors"
              >
                Контакты
              </a>
            </nav>
            <Button className="bg-blue-600 hover:bg-blue-700">
              Получить консультацию
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <Badge className="mb-4 bg-blue-100 text-blue-800">
              4 года опыта • 100+ успешных проектов
            </Badge>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Капитальный ремонт <br />
              <span className="text-blue-600">любой сложности</span>
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Разрабатываем проектно-сметную документацию, создаем рабочие
              чертежи и реализуем работы по капитальному ремонту объектов
              различного назначения
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
                <Icon name="Calculator" className="mr-2" size={20} />
                Рассчитать стоимость
              </Button>
              <Button size="lg" variant="outline">
                <Icon name="Phone" className="mr-2" size={20} />
                Заказать звонок
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon
                  name="CheckCircle"
                  size={48}
                  className="text-green-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Гарантия качества</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Официальная гарантия на все виды работ. Качество без
                  компромиссов.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon
                  name="Clock"
                  size={48}
                  className="text-blue-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Точные сроки</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Строгий контроль сроков выполнения работ. Сдаем объекты
                  вовремя.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg">
              <CardHeader>
                <Icon
                  name="Target"
                  size={48}
                  className="text-purple-600 mx-auto mb-4"
                />
                <CardTitle className="text-xl">Точность расчетов</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Профессиональная смета без скрытых расходов. Прозрачное
                  ценообразование.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Наши услуги
            </h2>
            <p className="text-xl text-gray-600">
              Полный спектр услуг по капитальному ремонту
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="FileText"
                  className="text-blue-600 mb-3"
                  size={32}
                />
                <CardTitle>Проектно-сметная документация</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Разработка полного комплекта проектной документации для
                  капитального ремонта
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon name="Ruler" className="text-green-600 mb-3" size={32} />
                <CardTitle>Рабочие чертежи</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Создание детальных рабочих чертежей для всех видов
                  строительных работ
                </p>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Icon
                  name="Hammer"
                  className="text-orange-600 mb-3"
                  size={32}
                />
                <CardTitle>Капитальный ремонт</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Выполнение работ по капитальному ремонту объектов различного
                  назначения
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                О компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы специализируемся на капитальном ремонте и имеем богатый опыт
                работы с объектами различного назначения. Наша команда
                профессионалов обеспечивает качественное выполнение работ на
                всех этапах.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-600 mb-2">4</div>
                  <p className="text-gray-600">года опыта</p>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-green-600 mb-2">
                    100+
                  </div>
                  <p className="text-gray-600">проектов</p>
                </div>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Наши преимущества
              </h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-3"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Официальная гарантия на все работы
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-3"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Точность расчетов и прозрачность цен
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-3"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Соблюдение сроков выполнения
                  </span>
                </li>
                <li className="flex items-center">
                  <Icon
                    name="Check"
                    className="text-green-600 mr-3"
                    size={20}
                  />
                  <span className="text-gray-700">
                    Контроль качества на каждом этапе
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Портфолио</h2>
            <p className="text-xl text-gray-600">
              Примеры наших работ по капитальному ремонту
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="/img/96231eb4-6ed3-4435-b280-7c5855c087d5.jpg"
                  alt="Офисный комплекс под ремонтом"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Офисный комплекс</CardTitle>
                <CardDescription>
                  Капитальный ремонт административного здания
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Комплексный ремонт офисного здания площадью 2000 м²
                </p>
                <Badge variant="secondary">Завершен</Badge>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="/img/4319fd4f-4a07-4b24-87fa-9ae4269e8066.jpg"
                  alt="Жилой дом после ремонта"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Жилой дом</CardTitle>
                <CardDescription>
                  Капремонт многоквартирного дома
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Полный ремонт жилого дома с заменой коммуникаций
                </p>
                <Badge variant="secondary">Завершен</Badge>
              </CardContent>
            </Card>
            <Card className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img
                  src="/img/4ed56de0-fc94-46ba-a08a-452f0e2f3463.jpg"
                  alt="Школьное здание"
                  className="w-full h-full object-cover"
                />
              </div>
              <CardHeader>
                <CardTitle>Образовательное учреждение</CardTitle>
                <CardDescription>Ремонт школьного здания</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Капитальный ремонт школы с модернизацией
                </p>
                <Badge variant="secondary">В процессе</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Контакты</h2>
            <p className="text-xl text-gray-600">
              Свяжитесь с нами для получения консультации
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Наши контакты
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Icon name="Phone" className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">+7 (999) 123-45-67</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Mail" className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">info@stroyproekt.ru</span>
                </div>
                <div className="flex items-center">
                  <Icon
                    name="MapPin"
                    className="text-blue-600 mr-3"
                    size={20}
                  />
                  <span className="text-gray-700">
                    г. Москва, ул. Строительная, 10
                  </span>
                </div>
                <div className="flex items-center">
                  <Icon name="Clock" className="text-blue-600 mr-3" size={20} />
                  <span className="text-gray-700">Пн-Пт: 9:00-18:00</span>
                </div>
              </div>
            </div>
            <Card className="p-6">
              <CardHeader className="px-0 pt-0">
                <CardTitle>Получить консультацию</CardTitle>
                <CardDescription>
                  Оставьте заявку, и мы свяжемся с вами в течение часа
                </CardDescription>
              </CardHeader>
              <CardContent className="px-0 pb-0">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Имя
                    </label>
                    <div className="border rounded-md p-3 bg-gray-50">
                      <span className="text-gray-500">Ваше имя</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Телефон
                    </label>
                    <div className="border rounded-md p-3 bg-gray-50">
                      <span className="text-gray-500">+7 (999) 123-45-67</span>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Сообщение
                    </label>
                    <div className="border rounded-md p-3 bg-gray-50 h-20">
                      <span className="text-gray-500">
                        Опишите ваш проект...
                      </span>
                    </div>
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Отправить заявку
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <Icon name="Building2" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">СтройПроект</h3>
              </div>
              <p className="text-gray-400">
                Профессиональный капитальный ремонт объектов любой сложности
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Услуги</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Проектирование</li>
                <li>Сметные расчеты</li>
                <li>Капитальный ремонт</li>
                <li>Авторский надзор</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li>О нас</li>
                <li>Портфолио</li>
                <li>Лицензии</li>
                <li>Гарантии</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>+7 (999) 123-45-67</p>
                <p>info@stroyproekt.ru</p>
                <p>г. Москва, ул. Строительная, 10</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 СтройПроект. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
