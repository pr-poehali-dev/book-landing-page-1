const BOOK_COVER = "https://cdn.poehali.dev/projects/a429683c-9af0-409b-bee5-5c281ceb1d25/files/f01445d0-6517-44da-89f9-eb077a9f6336.jpg";

const Index = () => {
  return (
    <div
      className="min-h-screen font-body overflow-x-hidden"
      style={{
        background: "linear-gradient(160deg, #030806 0%, #050f08 40%, #040806 100%)",
        color: "#d4f0e0",
      }}
    >
      {/* Мистическое фоновое свечение */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% -10%, rgba(0,180,80,0.12) 0%, transparent 60%), radial-gradient(ellipse 40% 30% at 20% 80%, rgba(0,200,100,0.05) 0%, transparent 50%), radial-gradient(ellipse 40% 30% at 80% 80%, rgba(0,160,80,0.05) 0%, transparent 50%)",
        }}
      />
      {/* Туман снизу */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 60% at 50% 100%, rgba(0,40,20,0.4) 0%, transparent 60%)",
        }}
      />
      {/* Тонкая сетка */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,200,80,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,200,80,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Шапка */}
      <header className="relative pt-16 pb-6 text-center px-6">
        <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <p
            className="font-display text-xs uppercase mb-5"
            style={{ color: "rgba(180,240,200,0.6)", letterSpacing: "0.45em" }}
          >
            Фаргат Закиров
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,80,0.4))" }} />
            <div className="w-1 h-1 rounded-full" style={{ background: "rgba(0,230,100,0.6)" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(0,200,80,0.4), transparent)" }} />
          </div>

          <h1
            className="font-display font-light leading-tight"
            style={{
              color: "#e8fff2",
              fontSize: "clamp(3rem, 10vw, 6.5rem)",
              textShadow: "0 0 40px rgba(0,200,80,0.25), 0 0 80px rgba(0,200,80,0.1)",
            }}
          >
            Иллюзия Реальности
          </h1>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,80,0.4))" }} />
            <span style={{ color: "rgba(0,220,90,0.5)", fontSize: "10px", letterSpacing: "0.2em" }}>◈</span>
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, rgba(0,200,80,0.4), transparent)" }} />
          </div>
        </div>
      </header>

      {/* Обложка книги — крупная */}
      <section className="relative flex justify-center px-6 py-8">
        <div className="opacity-0 animate-scale-in" style={{ animationFillMode: "forwards" }}>
          <div className="relative group">
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 blur-3xl rounded-full"
              style={{
                width: "80%",
                height: "60px",
                background: "radial-gradient(ellipse, rgba(100,40,200,0.4) 0%, rgba(180,0,60,0.15) 50%, transparent 70%)",
              }}
            />
            <div
              className="absolute -inset-4 blur-2xl opacity-30 group-hover:opacity-50 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(80,30,160,0.5) 0%, transparent 70%)" }}
            />
            <div
              className="relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                width: "clamp(280px, 58vw, 400px)",
                borderRadius: "2px",
                boxShadow:
                  "-12px 16px 60px rgba(0,0,0,0.9), 0 0 40px rgba(80,30,160,0.25), 2px 0 0 rgba(255,255,255,0.04) inset",
              }}
            >
              <img
                src={BOOK_COVER}
                alt="Обложка книги «Иллюзия реальности»"
                className="w-full block"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />
              <div
                className="absolute left-0 top-0 bottom-0 w-3"
                style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.7), transparent)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(100,50,200,0.15) 0%, transparent 40%, rgba(180,0,60,0.08) 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(150,80,255,0.3), transparent)" }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Цитата */}
      <section
        className="relative px-6 py-10 text-center opacity-0 animate-fade-up-2"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-xl mx-auto">
          <p
            className="font-display text-xl md:text-2xl font-light italic leading-relaxed"
            style={{ color: "rgba(200,240,215,0.75)" }}
          >
            «Что если всё, что ты видишь — лишь отражение
            того, во что ты решил поверить?»
          </p>
        </div>
      </section>

      {/* Аннотация и жанры */}
      <section
        className="relative px-6 py-8 opacity-0 animate-fade-up-3"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,80,0.35))" }} />
            <span style={{ color: "rgba(0,210,90,0.5)", fontSize: "10px", letterSpacing: "0.3em" }}>◈ ◈ ◈</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(0,200,80,0.35), transparent)" }} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Философский роман", "Мистика", "Психологический триллер", "Фантастика"].map((genre) => (
              <span
                key={genre}
                className="px-4 py-1.5 text-xs font-body font-light border rounded-full uppercase"
                style={{
                  borderColor: "rgba(0,180,70,0.35)",
                  color: "rgba(140,240,180,0.85)",
                  background: "rgba(0,60,30,0.15)",
                  letterSpacing: "0.12em",
                }}
              >
                {genre}
              </span>
            ))}
          </div>

          <div
            className="rounded-sm p-8 relative overflow-hidden"
            style={{
              background: "rgba(0,40,20,0.3)",
              border: "1px solid rgba(0,180,70,0.12)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(0,200,80,0.4), transparent)" }}
            />
            <div className="absolute top-2 left-2 w-3 h-3" style={{ borderTop: "1px solid rgba(0,180,70,0.4)", borderLeft: "1px solid rgba(0,180,70,0.4)" }} />
            <div className="absolute top-2 right-2 w-3 h-3" style={{ borderTop: "1px solid rgba(0,180,70,0.4)", borderRight: "1px solid rgba(0,180,70,0.4)" }} />
            <div className="absolute bottom-2 left-2 w-3 h-3" style={{ borderBottom: "1px solid rgba(0,180,70,0.4)", borderLeft: "1px solid rgba(0,180,70,0.4)" }} />
            <div className="absolute bottom-2 right-2 w-3 h-3" style={{ borderBottom: "1px solid rgba(0,180,70,0.4)", borderRight: "1px solid rgba(0,180,70,0.4)" }} />
            <p
              className="font-body text-base font-light text-center"
              style={{ color: "rgba(190,235,210,0.7)", lineHeight: "1.95" }}
            >
              Герой оказывается на грани двух миров — реального и иллюзорного.
              Каждый выбор меняет правила игры, каждая истина оборачивается ложью.
              Роман, который заставит усомниться в природе собственного восприятия
              и задать вопрос: а что, если граница между сном и явью — лишь договорённость?
            </p>
          </div>
        </div>
      </section>

      {/* Кнопки — таблетки из Матрицы */}
      <section className="relative px-6 pt-10 pb-20 text-center">
        <div className="max-w-md mx-auto">
          <p
            className="font-body text-xs uppercase mb-8 font-light"
            style={{ color: "rgba(100,200,130,0.4)", letterSpacing: "0.3em" }}
          >
            Сделай выбор
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Синяя таблетка */}
            <a
              href="#"
              className="relative group flex items-center justify-center px-10 py-4 font-body text-sm font-light tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(180deg, #2255e0 0%, #0d2fa0 60%, #0a1e70 100%)",
                color: "#c8d8ff",
                letterSpacing: "0.12em",
                borderRadius: "100px",
                boxShadow:
                  "0 0 18px rgba(30,80,220,0.5), 0 0 50px rgba(30,80,220,0.18), inset 0 1px 0 rgba(255,255,255,0.2), inset 0 -1px 0 rgba(0,0,30,0.4)",
                border: "1px solid rgba(80,120,255,0.4)",
                minWidth: "185px",
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "0 0 35px rgba(30,80,220,0.8), 0 0 80px rgba(30,80,220,0.35)" }}
              />
              <span className="relative z-10">Читать книгу</span>
            </a>

            {/* Красная таблетка */}
            <a
              href="#"
              className="relative group flex items-center justify-center px-10 py-4 font-body text-sm font-light tracking-wider transition-all duration-300"
              style={{
                background: "linear-gradient(180deg, #cc1830 0%, #8b0a1e 60%, #5a0010 100%)",
                color: "#ffc8ce",
                letterSpacing: "0.12em",
                borderRadius: "100px",
                boxShadow:
                  "0 0 18px rgba(200,20,40,0.5), 0 0 50px rgba(200,20,40,0.18), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(30,0,0,0.4)",
                border: "1px solid rgba(255,80,100,0.4)",
                minWidth: "185px",
              }}
            >
              <div
                className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{ boxShadow: "0 0 35px rgba(200,20,40,0.8), 0 0 80px rgba(200,20,40,0.35)" }}
              />
              <span className="relative z-10">Узнать больше</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(0,180,70,0.3), transparent)" }} />
          <p className="font-display italic text-xs" style={{ color: "rgba(80,160,100,0.4)" }}>
            Фаргат Закиров · {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;