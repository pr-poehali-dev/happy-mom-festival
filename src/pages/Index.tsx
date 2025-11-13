import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { Badge } from "@/components/ui/badge";
import { useState, useEffect } from "react";

const Index = () => {
  const [snowflakes, setSnowflakes] = useState<{ id: number; x: number; y: number }[]>([]);
  const [daysLeft, setDaysLeft] = useState(0);

  useEffect(() => {
    const festivalDate = new Date('2025-11-30T00:00:00');
    const updateCounter = () => {
      const now = new Date();
      const distance = festivalDate.getTime() - now.getTime();
      const days = Math.ceil(distance / (1000 * 60 * 60 * 24));
      setDaysLeft(days > 0 ? days : 0);
    };
    updateCounter();
    const interval = setInterval(updateCounter, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

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
    { icon: "TreeDeciduous", title: "Древо семьи", time: "12:00 - 17:00" },
    { icon: "Mail", title: "Письмо маме", time: "12:00 - 17:00" },
    { icon: "Shirt", title: "Стильная мама", time: "12:00 - 14:30" },
    { icon: "Sparkles", title: "Мамин макияж", time: "12:00 - 14:30" }
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
    },
    { 
      icon: "UtensilsCrossed", 
      title: "Русский стол",
      description: "Русские угощения для гостей фестиваля"
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

            <div className="bg-white rounded-3xl p-6 md:p-12 shadow-2xl border-8 border-primary animate-scale-in">
              <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-8 mb-6 md:mb-8">
                <div className="flex items-center gap-4 md:gap-8">
                  <div className="text-5xl md:text-8xl font-bold text-primary">30</div>
                  <div className="text-2xl md:text-4xl font-bold text-foreground">ноября</div>
                </div>
                <div className="hidden md:block h-24 w-1 bg-primary"></div>
                <div className="text-3xl md:text-5xl font-bold text-primary">12:00-17:00</div>
              </div>
              
              <div className="bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl p-4 md:p-6 mb-6 md:mb-8 border-2 border-primary/30">
                <div className="text-center">
                  <div className="text-base md:text-lg font-semibold text-muted-foreground mb-2">До фестиваля осталось</div>
                  <div className="flex items-center justify-center gap-4">
                    <div className="bg-primary text-primary-foreground rounded-xl px-6 md:px-8 py-3 md:py-4">
                      <div className="text-4xl md:text-5xl font-bold">{daysLeft}</div>
                      <div className="text-xs md:text-sm mt-1 opacity-90">{daysLeft === 1 ? 'день' : daysLeft < 5 ? 'дня' : 'дней'}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="text-xl md:text-2xl font-semibold text-muted-foreground mb-3 md:mb-4 text-center">Фестиваль</div>
              <h2 className="text-4xl md:text-7xl font-bold leading-tight text-primary text-center mb-6 md:mb-8">
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

              <div className="bg-primary text-primary-foreground px-6 md:px-8 py-4 md:py-5 rounded-xl font-bold text-xl md:text-3xl text-center mb-6">
                ВХОД СВОБОДНЫЙ
              </div>

              <div className="flex flex-col items-start md:items-center gap-3 md:gap-4">
                <Button size="lg" className="text-base md:text-xl px-6 md:px-12 py-4 md:py-6 bg-white text-primary hover:bg-white/90 border-4 border-primary w-auto" onClick={() => scrollToSection("contacts")}>
                  Контакты
                  <Icon name="Phone" className="ml-2" size={20} />
                </Button>
                <Button size="lg" className="text-base md:text-xl px-6 md:px-12 py-4 md:py-6 bg-primary text-primary-foreground hover:bg-primary/90 w-auto" onClick={() => scrollToSection("program")}>
                  Смотреть программу
                  <Icon name="ArrowRight" className="ml-2" size={20} />
                </Button>
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
                  На фестивале вы сможете: <strong>создать семейное дерево</strong>, 
                  <strong>принять участие в конкурсах</strong>, <strong>получить совет от стилиста и визажиста</strong> и многое другое!
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
                    <Icon name="UtensilsCrossed" className="mx-auto mb-3 text-primary" size={40} />
                    <h4 className="font-bold text-lg mb-2">Русский стол</h4>
                    <p className="text-sm text-muted-foreground">
                      Дегустация русских блюд
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
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground px-4 md:px-8 py-4 md:py-6 rounded-xl font-bold text-base md:text-2xl transition-all duration-300 hover:scale-105 hover:shadow-2xl flex items-center justify-between"
                >
                  <div className="flex items-center gap-2 md:gap-4">
                    <div className="bg-white/20 p-2 md:p-3 rounded-lg group-hover:bg-white/30 transition-colors">
                      <Icon name={activity.icon as any} size={24} className="md:w-8 md:h-8" />
                    </div>
                    <span className="text-left">{activity.title}</span>
                  </div>
                  <Icon name="ChevronDown" size={24} className="group-hover:translate-y-1 transition-transform md:w-8 md:h-8" />
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
                <h3 className="text-4xl font-bold mb-6 text-primary">Кёрлинг-тренировка!</h3>
                
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

                <div className="flex justify-start">
                  <Button 
                    size="lg" 
                    className="text-sm md:text-xl px-4 md:px-12 py-3 md:py-6 bg-primary hover:bg-primary/90 text-primary-foreground w-auto"
                    onClick={() => window.open('https://t.me/fahece_bot', '_blank')}
                  >
                    <Icon name="Send" className="mr-2 md:mr-3" size={18} />
                    <span className="whitespace-nowrap">Записаться на тренировку</span>
                  </Button>
                </div>
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
            <h3 className="text-4xl font-bold mb-4">Партнеры фестиваля</h3>
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/3e47104c-8941-42c9-a766-385b9451ca7c.jpg" 
                    alt="Warpoint VR арена" 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-xl">Warpoint VR арена</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/2f731876-8b47-4854-a20f-44940b060ed5.jpg" 
                    alt="TinyLand магазин игрушек" 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-xl">TinyLand магазин игрушек</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/b4ae2a5e-14d4-428e-adc3-bc6ab763a3dd.jpeg" 
                    alt="Центр ИНИЦИАТИВА" 
                    className="w-48 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg">Информационный партнер<br/>Центр развития и поддержки многодетных семей ИНИЦИАТИВА</h4>
                </div>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/13e4fb92-fab7-468e-8c82-88d8e542645c.jpeg" 
                    alt="Дом со льдом" 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg">Информационный партнер<br/>Кёрлинг-центр «Дом со льдом»</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/7ac10ad4-f4f0-4fa5-911d-86c948ae26ed.jpeg" 
                    alt="Приморская ферма альпак" 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg">Приморская ферма альпак</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="w-32 h-32 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="Baby" className="text-primary" size={48} />
                  </div>
                  <h4 className="font-bold text-lg">Грация мама<br/>Магазин для мам и детей</h4>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-all">
              <CardContent className="p-8">
                <div className="text-center">
                  <img 
                    src="https://cdn.poehali.dev/files/5cd12fd5-b4f8-4d2d-8ffe-fd74b8af3768.jpeg" 
                    alt="Ферма ДВ" 
                    className="w-32 h-32 object-contain mx-auto mb-4"
                  />
                  <h4 className="font-bold text-lg">Ферма ДВ</h4>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="py-16 px-4 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="bg-gradient-to-r from-primary to-primary/80 text-primary-foreground rounded-2xl p-12">
            <Icon name="ShoppingBag" className="mx-auto mb-6" size={64} />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">Предновогодний маркет</h3>
            <p className="text-base md:text-lg mb-6 opacity-90">
              Уникальные подарки, украшения ручной работы, сладости и всё для праздничного настроения.
              Поддержите местных мастеров и найдите особенные подарки!
            </p>
            <Badge className="bg-white text-primary text-sm md:text-base px-4 md:px-6 py-2 md:py-3">
              Работает весь день 12:00 - 17:00
            </Badge>
          </div>
        </div>
      </section>

      <section id="contacts" className="py-16 px-4 bg-gradient-to-b from-white/60 to-primary/5">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h3 className="text-4xl font-bold mb-4 text-primary">Контакты</h3>
            <p className="text-lg text-primary font-semibold">Свяжитесь с нами по любым вопросам</p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="Handshake" className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3 text-primary">По вопросам партнерства</h4>
                    <div className="space-y-2">
                      <a href="tel:+79242174080" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Icon name="Phone" size={18} />
                        <span>+7 (924) 217-40-80</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-6">
                  <div className="bg-primary/10 p-3 rounded-full">
                    <Icon name="UserCircle" className="text-primary" size={28} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-xl mb-3 text-primary">Администратор</h4>
                    <div className="space-y-2">
                      <a href="tel:+79140661026" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Icon name="Phone" size={18} />
                        <span>+7 (914) 066-10-26</span>
                      </a>
                      <a href="https://t.me/abministratorCSN" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-foreground hover:text-primary transition-colors">
                        <Icon name="Send" size={18} />
                        <span>@abministratorCSN</span>
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mb-8 hover:shadow-lg transition-shadow">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Icon name="Mail" className="text-primary" size={28} />
                </div>
                <div className="flex-1">
                  <h4 className="font-bold text-xl mb-3 text-primary">Электронная почта</h4>
                  <a href="mailto:centrsemejnogonasledia@gmail.com" className="text-foreground hover:text-primary transition-colors break-all">
                    centrsemejnogonasledia@gmail.com
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-8">
              <div className="text-center mb-6">
                <h4 className="text-2xl font-bold mb-2 text-primary">Как добраться</h4>
              </div>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="MapPin" className="text-primary mt-1" size={24} />
                      <div>
                        <h5 className="font-bold mb-1">Адрес</h5>
                        <p className="text-muted-foreground">Кёрлинг-центр "Дом со льдом"</p>
                        <p className="text-muted-foreground">г. Владивосток, ул. Тюменская, 18</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Calendar" className="text-primary mt-1" size={24} />
                      <div>
                        <h5 className="font-bold mb-1">Дата и время</h5>
                        <p className="text-muted-foreground">30 ноября 2025</p>
                        <p className="text-muted-foreground">12:00 - 17:00</p>
                      </div>
                    </div>
                  </div>
                  <div>
                    <div className="flex items-start gap-3 mb-2">
                      <Icon name="Ticket" className="text-primary mt-1" size={24} />
                      <div>
                        <h5 className="font-bold mb-1">Вход</h5>
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

      <a
        href="https://t.me/fahece_bot"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 left-8 z-50 bg-[#0088cc] hover:bg-[#006699] text-white px-6 py-4 shadow-2xl transition-all duration-300 hover:scale-110 flex items-center gap-3 font-bold text-lg group rounded-sm mx-0"
      >
        <svg
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-8 h-8"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.009-1.252-.242-1.865-.442-.752-.245-1.349-.374-1.297-.789.027-.216.324-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.14.121.099.155.232.171.326.016.094.036.308.02.475z"/>
        </svg>
        <span className="whitespace-nowrap">Записаться на фестиваль</span>
      </a>

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