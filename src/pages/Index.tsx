import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-purple-50/30 to-background">
      <div className="max-w-4xl mx-auto px-6 py-12 space-y-16">
        
        <section className="text-center space-y-6 animate-fade-in">
          <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary p-1 animate-scale-in overflow-hidden">
            <img 
              src="https://cdn.poehali.dev/files/d962d983-6a55-4505-a1b0-5f00738f5273.jpg" 
              alt="Александра Петрова"
              className="w-full h-full rounded-full object-cover"
            />
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Кристина Веретильная
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">Дипломированный психолог, энерготерапевт, расстановщик, 
НЛП-практик, ментор женской силы и трансформации.
</p>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Помогаю женщинам восстановить баланс, вернуть энергию и любовь к себе.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Award" size={20} className="text-primary" />
              <span className="text-sm font-medium">15+ лет практики</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Users" size={20} className="text-primary" />
              <span className="text-sm font-medium">500+ клиентов</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full">
              <Icon name="Sparkles" size={20} className="text-primary" />
              <span className="text-sm font-medium">Авторский метод</span>
            </div>
          </div>
        </section>

        <section className="space-y-8 animate-fade-in">
          <div className="text-center space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground">
              4 ключа к свободе
            </h2>
            <p className="text-xl text-primary font-semibold">
              Авторский метод глубинной трансформации
            </p>
          </div>

          <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 shadow-xl">
            <div className="space-y-8">
              <div className="prose prose-lg max-w-none">
                <p className="text-lg leading-relaxed text-foreground/90">
                  Вас терзает тревога, которая не отпускает? Мучают страхи, от которых некуда деться? 
                  Чувствуете, что живете не свою жизнь, а по чужому сценарию?
                </p>
                <p className="text-lg leading-relaxed text-foreground/90 font-semibold text-primary">
                  Представьте, что через несколько сессий вы просыпаетесь спокойными, уверенными, 
                  свободными от прошлых травм и ограничивающих убеждений.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                {[
                  {
                    icon: "Target",
                    title: "Интегративный подход",
                    desc: "Соединяю лучшие техники телесной терапии, гештальта, когнитивной психологии для глубокой проработки"
                  },
                  {
                    icon: "Heart",
                    title: "Работа с симптомами",
                    desc: "Убираем тревогу, панические атаки, психосоматику — не маскируем, а устраняем причину"
                  },
                  {
                    icon: "Sparkles",
                    title: "Трансформация установок",
                    desc: "Меняем глубинные убеждения, которые годами держали вас в клетке страха и неуверенности"
                  },
                  {
                    icon: "Users",
                    title: "Инструмент для коллег",
                    desc: "Обучаю психологов методу для применения в практике и личной трансформации"
                  }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="flex gap-4 p-6 rounded-2xl bg-white/60 backdrop-blur border border-primary/10 hover:border-primary/30 transition-all hover:shadow-lg"
                  >
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                        <Icon name={item.icon} size={24} className="text-white" />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="p-6 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl border-l-4 border-primary">
                <p className="text-lg font-semibold text-foreground">
                  После работы со мной вы выйдете из кабинета другим человеком: 
                  спокойным, уверенным, знающим свою ценность и готовым строить жизнь по своим правилам.
                </p>
              </div>
            </div>
          </Card>
        </section>

        <section className="space-y-8 animate-fade-in">
          <h2 className="font-heading text-4xl md:text-5xl font-bold text-center text-foreground">
            С чем работаю
          </h2>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                icon: "MessageCircle",
                title: "Индивидуальная терапия",
                price: "15 000 ₽",
                url: "https://payform.ru/kd7f2rD/",
                desc: "Если ты чувствуешь: «мне плохо, но я не понимаю, с чего начать» — начни с одного шага. Одна сессия — и ты уже чувствуешь, что можешь дышать.",
                benefits: ["Найдём корень проблемы (он не там, где ты думаешь)", "Высвободим эмоции, которые тебя держат", "Активируем ресурсное состояние", "Почувствуешь облегчение, ясность и силу"]
              },
              {
                icon: "Users",
                title: "ПРАКТИКУМ «МОЙ РОД»",
                price: "1 499 ₽",
                url: "https://payform.ru/tk7f2wx/",
                desc: "Это не просто практикум. Это — точка взросления и выхода из боли прошлого. Для тех, кто устал жить обидами и чужими ожиданиями.",
                benefits: ["Исцеление отношений с родителями", "Выход в благодарность, отпускание вины и обид", "Получение энергии Рода и внутренней опоры", "Включение взрослой части, способной создавать и выбирать"]
              },
              {
                icon: "GraduationCap",
                title: "Обучение методу '4 ключа'",
                price: "индивидуально",
                url: "http://t.me/krisvluck",
                desc: "Это целостная система, которая возвращает человеку право на жизнь в достоинстве, любви и изобилии. Для психологов это мощный инструмент, объединяющий работу с родовыми программами, телом и подсознанием в рамках краткосрочной глубинной терапии.",
                benefits: ["Путь от боли и истощения к наполненности", "Работа с родовыми программами и подсознанием", "Краткосрочная глубинная терапия", "Авторская программа с супервизией"]
              },
              {
                icon: "Video",
                title: "Онлайн-консультации",
                price: "",
                url: "",
                desc: "Работаем из любой точки мира. Эффективность не уступает очным сессиям.",
                benefits: ["Удобный формат", "Экономия времени", "Та же эффективность"]
              }
            ].map((service, idx) => (
              <Card 
                key={idx} 
                className="p-8 hover:shadow-2xl transition-all hover:scale-[1.02] bg-white/80 backdrop-blur border-primary/10"
              >
                <div className="space-y-6">
                  <div className="flex items-start justify-between">
                    <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                      <Icon name={service.icon} size={28} className="text-white" />
                    </div>
                    {service.price && (
                      <div className="text-right">
                        <div className="text-2xl font-bold font-heading text-primary">
                          {service.price}
                        </div>
                      </div>
                    )}
                  </div>

                  <div className="space-y-3">
                    <h3 className="font-heading text-2xl font-bold text-foreground">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {service.desc}
                    </p>
                  </div>

                  <div className="space-y-2">
                    {service.benefits.map((benefit, bidx) => (
                      <div key={bidx} className="flex items-center gap-2">
                        <Icon name="Check" size={18} className="text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground/80">{benefit}</span>
                      </div>
                    ))}
                  </div>

                  {service.url ? (
                    <Button 
                      asChild
                      className="w-full font-heading font-semibold text-base h-12"
                    >
                      <a href={service.url} target="_blank" rel="noopener noreferrer">
                        Записаться
                      </a>
                    </Button>
                  ) : (
                    <Button className="w-full font-heading font-semibold text-base h-12">
                      Записаться
                    </Button>
                  )}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section className="text-center space-y-8 animate-fade-in">
          <Card className="p-12 bg-gradient-to-br from-primary via-primary/90 to-secondary text-white shadow-2xl">
            <div className="space-y-6 max-w-2xl mx-auto">
              <h2 className="font-heading text-4xl md:text-5xl font-bold">
                Готовы изменить свою жизнь?
              </h2>
              <p className="text-xl text-white/90 leading-relaxed">
                Запишитесь на первую консультацию и начните путь к свободе от тревоги, 
                страхов и ограничивающих убеждений
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  className="font-heading font-semibold text-lg h-14 px-8"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  Написать в Telegram
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="font-heading font-semibold text-lg h-14 px-8 bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white/20"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
            </div>
          </Card>
        </section>

        <section className="text-center space-y-6 pb-12 animate-fade-in">
          <div className="flex flex-wrap justify-center gap-6">
            <a 
              href="https://t.me/username" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Icon name="Send" size={20} className="text-primary" />
              <span className="font-medium">Telegram</span>
            </a>
            <a 
              href="https://wa.me/79999999999" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Icon name="MessageCircle" size={20} className="text-primary" />
              <span className="font-medium">WhatsApp</span>
            </a>
            <a 
              href="https://instagram.com/username" 
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors"
            >
              <Icon name="Instagram" size={20} className="text-primary" />
              <span className="font-medium">Instagram</span>
            </a>
          </div>

          <div className="text-sm text-muted-foreground">
            <p></p>
            <p className="mt-2">Индивидуальный предприниматель (ИП) Кристина Веретильная ‌
ИНН 780418691730 ‌
ОГРНИП 325784700047192</p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default Index;