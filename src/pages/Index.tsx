import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; x: number; y: number }[]>([]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const createSnowflakes = (event: React.MouseEvent<HTMLButtonElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const newSnowflakes = Array.from({ length: 8 }, (_, i) => ({
      id: Date.now() + i,
      x: rect.left + Math.random() * rect.width,
      y: rect.top,
    }));
    
    setSnowflakes((prev) => [...prev, ...newSnowflakes]);
    
    setTimeout(() => {
      setSnowflakes((prev) => prev.filter((s) => !newSnowflakes.find((ns) => ns.id === s.id)));
    }, 2000);
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

  const programActivities = [
    { 
      icon: "PartyPopper", 
      title: "Развлекательная программа",
      description: "Яркое шоу с участием талантливого ведущего наполнит зал атмосферой волшебства. Концертные номера и перфоманс-спектакль подарят незабываемые впечатления, а показ новогодней коллекции одежды вдохновит на праздничные образы. В просторных зонах зала расположены творческие мастерские и игровые площадки, где каждый найдет занятие по душе. Каждый час проходит тренировка по кёрлингу для группы до 10 человек. Предварительная запись обязательна."
    },
    { 
      icon: "Award", 
      title: "Конкурсы",
      description: "Захватывающие конкурсы от ведущего, увлекательный квест с заданиями для всей семьи и беспроигрышная лотерея создадут атмосферу азарта и радости. Спонсорские призы и подарки станут приятным завершением каждого состязания."
    },
    { 
      icon: "Palette", 
      title: "Творческие мастерские",
      description: "Пространство, где рождается волшебство ручной работы. Дети смогут создать трогательный подарок для самого дорогого человека — мамы. Здесь каждый откроет в себе новые таланты и попробует то, о чём давно мечтал."
    },
    { 
      icon: "Sparkles", 
      title: "Бьюти зона для мам",
      description: "Именно мамы наполняют дом уютом, теплом и создают ту самую атмосферу праздника. Мы позаботились о том, чтобы их силы были восполнены. В бьюти зоне профессиональные визажисты подарят каждой маме преображение, подчеркнув её естественную красоту и обаяние."
    },
    { 
      icon: "Baby", 
      title: "Детская зона",
      description: "Заботливые аниматоры и педагоги окружат детей вниманием и создадут для них увлекательную программу. Пока малыши заняты играми и творчеством под присмотром профессионалов, мамы смогут насладиться заслуженным отдыхом."
    },
    { 
      icon: "ShoppingBag", 
      title: "Предновогодний маркет",
      description: "Партнёры фестиваля — талантливые мастера и проверенные компании — представят изделия и товары, которые помогут создать неповторимую атмосферу праздника в вашем доме."
    },
    { 
      icon: "Gift", 
      title: "Розыгрыши призов от партнёров",
      description: "Удача обязательно улыбнётся вам на фестивале. Участвуйте в розыгрышах и беспроигрышных лотереях. А помните ли вы, что уже стали обладателем ценного подарка — чек-листа со скидками от партнёров на всё необходимое к Новому году."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-secondary/40 to-background" style={{ backgroundImage: 'url(https://cdn.poehali.dev/projects/b606a9e3-1bff-4282-b79d-f92c42f8a03c/files/413edadd-9f26-4cfe-8cd1-263d00ea8153.jpg)', backgroundSize: '400px', backgroundRepeat: 'repeat', backgroundBlendMode: 'soft-light' }}>
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50 animate-fade-in">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-primary">Счастливая мама</h1>
            <div className="hidden md:flex gap-6">
              {["about", "program", "workshops", "partners", "curling"].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  {section === "about" && "О фестивале"}
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

      <section className="pt-24 pb-16 px-4 relative overflow-hidden">
        <div 
          className="absolute left-0 top-0 bottom-0 w-1/5 opacity-40"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/b606a9e3-1bff-4282-b79d-f92c42f8a03c/files/413edadd-9f26-4cfe-8cd1-263d00ea8153.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div 
          className="absolute right-0 top-0 bottom-0 w-1/5 opacity-40"
          style={{ 
            backgroundImage: 'url(https://cdn.poehali.dev/projects/b606a9e3-1bff-4282-b79d-f92c42f8a03c/files/413edadd-9f26-4cfe-8cd1-263d00ea8153.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        
        <div className="container mx-auto relative z-10">
          <div className="max-w-5xl mx-auto">
            <div className="bg-primary text-primary-foreground px-6 py-3 rounded-lg inline-flex items-center gap-3 font-bold text-xl mb-8 animate-fade-in">
              <Icon name="MapPin" size={28} />
              <div className="text-left">
                <div className="text-sm opacity-90">Кёрлинг-центр "Дом со льдом"</div>
                <div>г. Владивосток, ул. Тюменская, 18</div>
              </div>
            </div>

            <div className="bg-white rounded-3xl p-12 shadow-2xl border-8 border-primary animate-scale-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8 mb-8">
                <div className="flex items-center gap-8">
                  <div className="text-8xl font-bold text-primary">30</div>
                  <div className="text-4xl font-bold text-foreground">ноября</div>
                </div>
                <div className="hidden md:block h-24 w-1 bg-primary"></div>
                <div className="text-5xl font-bold text-primary">12:00-17:00</div>
              </div>
              
              <div className="text-2xl font-semibold text-muted-foreground mb-4 text-center">Фестиваль</div>
              <h2 className="text-6xl md:text-7xl font-bold leading-tight text-primary text-center mb-8">
                Счастливая мама
              </h2>

              <div className="mb-8">
                <img 
                  src="https://cdn.poehali.dev/files/230007ae-df78-4ae7-8ab7-866077744bd6.png"
                  alt="Счастливая семья"
                  className="w-full max-w-2xl mx-auto rounded-2xl shadow-lg border-4 border-primary/20"
                />
              </div>

              <p className="text-xl text-center text-muted-foreground mb-8 max-w-3xl mx-auto">
                Праздничный фестиваль для всей семьи с развлечениями, мастер-классами, 
                призами и уникальной возможностью попробовать кёрлинг!
              </p>

              <div className="bg-primary text-primary-foreground px-8 py-5 rounded-xl font-bold text-3xl text-center mb-6">
                ВХОД СВОБОДНЫЙ
              </div>

              <div className="text-center space-y-4">
                <Button size="lg" className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 border-4 border-primary" onClick={() => scrollToSection("about")}>
                  Узнать больше о фестивале
                  <Icon name="Heart" className="ml-2" size={24} />
                </Button>
                <div>
                  <Button size="lg" variant="outline" className="text-xl px-12 py-6 border-4 border-white text-white hover:bg-white/20" onClick={() => scrollToSection("program")}>
                    Смотреть программу
                    <Icon name="ArrowRight" className="ml-2" size={24} />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="py-16 px-4 bg-gradient-to-b from-primary/10 to-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-5xl font-bold mb-6 text-primary">О фестивале</h3>
            <div className="bg-white rounded-3xl p-10 shadow-xl border-4 border-primary/20">
              <div className="space-y-6 text-lg leading-relaxed text-foreground">
                <p>
                  Наш фестиваль объединил два важных события — <strong className="text-primary">День матери</strong> и <strong className="text-primary">подготовку к Новому году</strong>. 
                  В центре семейного наследия мы знаем, что самое важное время, требующее внимания и активного участия родителей, — это Новый год.
                </p>
                
                <div className="bg-accent/40 rounded-2xl p-8 my-8">
                  <p className="text-xl font-semibold text-primary mb-4">
                    Наша цель:
                  </p>
                  <p>
                    Наполнить мам счастьем в преддверии Нового года, дать возможность отдохнуть, провести время с пользой 
                    и получить заряд праздничного настроения!
                  </p>
                </div>

                <p>
                  На фестивале вы сможете попробовать что-то впервые: разрисовать <strong>семейную ёлочную игрушку</strong>, 
                  нарисовать <strong>нейрографику</strong>, создать <strong>3D-картину</strong>, научиться <strong>вязать</strong> и многое другое!
                </p>

                <div className="grid md:grid-cols-3 gap-6 my-8">
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <Icon name="Gift" className="mx-auto mb-3 text-primary" size={40} />
                    <h4 className="font-bold text-lg mb-2">Призы</h4>
                    <p className="text-sm text-muted-foreground">
                      Партнеры фестиваля подготовили призы, которые будут разыграны между участниками
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <Icon name="ShoppingBag" className="mx-auto mb-3 text-primary" size={40} />
                    <h4 className="font-bold text-lg mb-2">Маркет</h4>
                    <p className="text-sm text-muted-foreground">
                      Найдите уникальные предметы, которые украсят ваш дом к Новому году
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-xl p-6 text-center">
                    <Icon name="BadgePercent" className="mx-auto mb-3 text-primary" size={40} />
                    <h4 className="font-bold text-lg mb-2">Скидки</h4>
                    <p className="text-sm text-muted-foreground">
                      Специальный чек-лист со скидками от партнёров на всё, что нужно к празднику
                    </p>
                  </div>
                </div>

                <p className="text-xl text-center font-semibold text-primary pt-6">
                  Ждём вас и вашу семью на тёплом празднике, полном радости и творчества!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="program" className="py-16 px-4 bg-white/80 backdrop-blur-sm relative">
        {snowflakes.map((flake) => (
          <div
            key={flake.id}
            className="snowflake"
            style={{ left: `${flake.x}px`, top: `${flake.y}px` }}
          >
            ❄️
          </div>
        ))}
        
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Программа фестиваля</h3>
            <p className="text-2xl font-semibold text-foreground mb-4">
              Приходите всей семьёй на незабываемый праздник!
            </p>
            <p className="text-lg text-muted-foreground">
              Вас ждёт насыщенный день развлечений, творчества и праздничного настроения
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto space-y-4">
            {programActivities.map((activity, index) => (
              <div key={index} className="group">
                <button
                  onMouseEnter={createSnowflakes}
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 rounded-xl font-bold text-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-white/20 p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Icon name={activity.icon as any} size={32} />
                    </div>
                    <span>{activity.title}</span>
                  </div>
                  <Icon name="ChevronDown" size={32} className="group-hover:translate-y-1 transition-transform" />
                </button>
                <div className="opacity-0 group-hover:opacity-100 transition-all duration-300 max-h-0 group-hover:max-h-96 overflow-hidden">
                  <div className="bg-white/95 backdrop-blur-sm rounded-b-xl px-8 py-6 -mt-2 shadow-lg border-2 border-primary/20">
                    <p className="text-foreground text-base leading-relaxed">
                      {activity.description}
                    </p>
                  </div>
                </div>
              </div>
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
        <div className="container mx-auto max-w-5xl">
          <Card className="overflow-hidden">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <div className="w-32 h-32 bg-primary rounded-full flex items-center justify-center mx-auto mb-6">
                  <Icon name="Trophy" className="text-primary-foreground" size={64} />
                </div>
                <h3 className="text-4xl font-bold mb-6 text-primary">Бесплатная кёрлинг-тренировка!</h3>
                
                <div className="bg-accent/30 rounded-xl p-6 mb-6 text-left">
                  <h4 className="text-2xl font-bold mb-3 text-primary">Что такое кёрлинг?</h4>
                  <p className="text-lg text-foreground mb-4">
                    Кёрлинг — это зимняя командная игра на льду, где участники запускают специальные камни 
                    весом 20 кг по ледяной площадке к цели. Это спорт, требующий точности, стратегии и командной работы. 
                    Увлекательно для всех возрастов!
                  </p>
                  <p className="text-base text-muted-foreground">
                    Подробнее о центре:{" "}
                    <a 
                      href="https://domsoldom.ru/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-primary font-semibold hover:underline"
                    >
                      domsoldom.ru
                    </a>
                  </p>
                </div>

                <div className="bg-white rounded-xl p-6 mb-6 border-2 border-primary">
                  <div className="grid md:grid-cols-2 gap-6 text-left">
                    <div>
                      <div className="flex items-start gap-3 mb-3">
                        <Icon name="Clock" className="text-primary mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-lg mb-1">Расписание</h5>
                          <p className="text-muted-foreground">Тренировки каждый час в течение фестиваля</p>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <Icon name="Users" className="text-primary mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-lg mb-1">Группы</h5>
                          <p className="text-muted-foreground">До 10 человек на одну тренировку</p>
                        </div>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-start gap-3">
                        <Icon name="Footprints" className="text-primary mt-1" size={24} />
                        <div>
                          <h5 className="font-bold text-lg mb-1">Важно!</h5>
                          <p className="text-muted-foreground">С собой обязательно возьмите <strong className="text-primary">сменную обувь</strong></p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <Button 
                  size="lg" 
                  className="text-xl px-12 py-6 bg-primary hover:bg-primary/90 text-primary-foreground"
                  onClick={() => window.open('https://t.me/fahece_bot', '_blank')}
                >
                  <Icon name="Send" className="mr-3" size={24} />
                  Записаться на тренировку
                </Button>
                <p className="text-sm text-muted-foreground mt-3">
                  Запись через Telegram-бота
                </p>
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