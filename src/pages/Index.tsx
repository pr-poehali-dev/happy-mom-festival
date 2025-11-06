import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const partners = [
    { name: "Детский мир", discount: "20% на игрушки" },
    { name: "Золотое яблоко", discount: "15% на косметику" },
    { name: "Лабиринт", discount: "25% на книги" },
    { name: "Спортмастер", discount: "30% на детскую одежду" },
    { name: "Mothercare", discount: "20% на всё" },
    { name: "Кондитерская", discount: "10% на торты" }
  ];

  const workshops = [
    { icon: "Palette", title: "Роспись елочных игрушек", time: "12:30 - 13:30" },
    { icon: "Cookie", title: "Мастер-класс по пряникам", time: "13:00 - 14:00" },
    { icon: "Sparkles", title: "Создание новогодних венков", time: "14:00 - 15:00" },
    { icon: "Gift", title: "Упаковка подарков", time: "15:00 - 16:00" },
    { icon: "Heart", title: "Бьюти-зона для мам", time: "12:00 - 17:00" },
    { icon: "Music", title: "Детская дискотека", time: "16:00 - 17:00" }
  ];

  const program = [
    { time: "12:00", event: "Открытие фестиваля", desc: "Приветствие гостей, начало работы площадок" },
    { time: "12:30", event: "Конкурсы с ведущим", desc: "Интерактивная программа с призами" },
    { time: "13:00", event: "Мастерские", desc: "Творческие активности для всей семьи" },
    { time: "14:00", event: "Розыгрыш призов", desc: "Главный розыгрыш от партнеров" },
    { time: "15:00", event: "Кёрлинг-тренировка", desc: "Уникальная возможность бесплатно попробовать кёрлинг" },
    { time: "16:30", event: "Финальный концерт", desc: "Праздничное выступление артистов" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/40 to-background" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/b606a9e3-1bff-4282-b79d-f92c42f8a03c/files/413edadd-9f26-4cfe-8cd1-263d00ea8153.jpg)', backgroundSize: '400px', backgroundRepeat: 'repeat', backgroundBlendMode: 'soft-light' }}>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Счастливая мама</h1>
            <div className="hidden md:flex gap-6">
              {["program", "workshops", "partners", "curling"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {section === "program" && "Программа"}
                  {section === "workshops" && "Мастерские"}
                  {section === "partners" && "Партнеры"}
                  {section === "curling" && "Кёрлинг"}
                </button>
              ))}
            </div>
            <Button onClick={() => scrollToSection("contacts")}>
              Контакты
            </Button>
          </div>
        </div>
      </nav>

      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6 animate-fade-in">
              <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg inline-flex items-center gap-3 font-bold text-xl">
                <Icon name="MapPin" size={28} />
                <div className="text-left">
                  <div className="text-sm opacity-90">Кёрлинг-центр "Дом со льдом"</div>
                  <div>г. Владивосток, ул. Тюменская, 18</div>
                </div>
              </div>
              <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg border-4 border-primary">
                <div className="flex items-center gap-6 mb-4">
                  <div className="text-7xl font-bold text-primary">30</div>
                  <div className="text-3xl font-bold text-foreground">ноября</div>
                  <div className="h-20 w-1 bg-primary"></div>
                  <div className="text-4xl font-bold text-primary">12:00-17:00</div>
                </div>
                <div className="text-xl font-semibold text-muted-foreground mb-2">Фестиваль</div>
                <h2 className="text-5xl md:text-6xl font-bold leading-tight text-primary">
                  Счастливая мама
                </h2>
              </div>
              <p className="text-lg text-muted-foreground">
                Праздничный фестиваль для всей семьи с развлечениями, мастер-классами, 
                призами и уникальной возможностью попробовать кёрлинг!
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="Clock" className="text-primary" size={24} />
                  <span>12:00 - 17:00</span>
                </div>
                <div className="flex items-center gap-3 text-lg">
                  <Icon name="MapPin" className="text-primary" size={24} />
                  <span>Кёрлинг-центр "Дом со льдом", Тюменская 18</span>
                </div>
              </div>
              <div className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-bold text-2xl text-center">
                ВХОД СВОБОДНЫЙ
              </div>
              <Button size="lg" className="text-lg px-8 bg-white text-primary hover:bg-white/90 border-2 border-primary" onClick={() => scrollToSection("program")}>
                Смотреть программу
                <Icon name="ArrowRight" className="ml-2" size={20} />
              </Button>
            </div>
            <div className="animate-scale-in">
              <img 
                src="https://cdn.poehali.dev/projects/b606a9e3-1bff-4282-b79d-f92c42f8a03c/files/0afa64ee-e0c5-461f-8954-008538301c0d.jpg"
                alt="Счастливая мама"
                className="rounded-2xl shadow-2xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Программа фестиваля</h3>
            <p className="text-lg text-muted-foreground">
              Насыщенный день развлечений, конкурсов и творчества
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {program.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary text-primary-foreground rounded-lg px-4 py-2 font-bold text-lg shrink-0">
                      {item.time}
                    </div>
                    <div>
                      <h4 className="font-bold text-lg mb-2">{item.event}</h4>
                      <p className="text-sm text-muted-foreground">{item.desc}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="workshops" className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Творческие мастерские</h3>
            <p className="text-lg text-muted-foreground">
              Создайте праздничное настроение своими руками
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {workshops.map((workshop, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={workshop.icon as any} className="text-primary" size={32} />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{workshop.title}</h4>
                  <div className="flex items-center justify-center gap-2 text-muted-foreground">
                    <Icon name="Clock" size={16} />
                    <span className="text-sm">{workshop.time}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="curling" className="py-16 px-4 bg-gradient-to-r from-primary/20 to-secondary/60 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="w-24 h-24 bg-primary rounded-full flex items-center justify-center shrink-0">
                  <Icon name="Trophy" className="text-primary-foreground" size={48} />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-3xl font-bold mb-4">Бесплатная кёрлинг-тренировка!</h3>
                  <p className="text-lg text-muted-foreground mb-4">
                    Уникальная возможность попробовать настоящий кёрлинг под руководством профессиональных тренеров.
                    Для всех желающих - бесплатно!
                  </p>
                  <Badge className="bg-secondary text-secondary-foreground text-base px-4 py-2">
                    15:00 - Запись на месте
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section id="partners" className="py-16 px-4 bg-white/60 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Партнеры со скидками</h3>
            <p className="text-lg text-muted-foreground">
              Чек-лист выгодных предложений для подготовки к Новому году
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {partners.map((partner, index) => (
              <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-lg mb-2">{partner.name}</h4>
                      <p className="text-primary font-semibold">{partner.discount}</p>
                    </div>
                    <Icon name="Gift" className="text-primary" size={32} />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Badge variant="outline" className="text-base px-6 py-3">
              🎁 Полный чек-лист получите на фестивале
            </Badge>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
            <Icon name="ShoppingBag" className="mx-auto mb-6" size={64} />
            <h3 className="text-3xl font-bold mb-4">Предновогодний маркет</h3>
            <p className="text-lg mb-6 opacity-90">
              Уникальные подарки, украшения ручной работы, сладости и всё для праздничного настроения.
              Поддержите местных мастеров и найдите особенные подарки!
            </p>
            <Badge className="bg-white text-primary text-base px-6 py-3">
              Работает весь день 12:00 - 17:00
            </Badge>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4">Как добраться</h3>
          </div>
          <Card>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Адрес</h4>
                        <p className="text-muted-foreground">Кёрлинг-центр "Дом со льдом"</p>
                        <p className="text-muted-foreground">ул. Тюменская, 18</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Calendar" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Дата и время</h4>
                        <p className="text-muted-foreground">30 ноября 2025</p>
                        <p className="text-muted-foreground">12:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Ticket" className="text-primary mt-1" size={24} />
                      <div>
                        <h4 className="font-bold mb-1">Вход</h4>
                        <p className="text-primary font-bold">Бесплатный</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-muted rounded-lg p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Icon name="Navigation" className="text-primary mx-auto mb-4" size={64} />
                    <p className="text-muted-foreground">
                      Удобная парковка<br />
                      Остановка транспорта рядом
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-12 px-4">
        <div className="container mx-auto text-center">
          <h3 className="text-2xl font-bold mb-2">До встречи на фестивале!</h3>
          <p className="opacity-90">Счастливая мама в счастливый Новый год 🎄✨</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;