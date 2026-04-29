const BOOK_COVER = "https://cdn.poehali.dev/projects/a429683c-9af0-409b-bee5-5c281ceb1d25/files/f01445d0-6517-44da-89f9-eb077a9f6336.jpg";

const Index = () => {
  return (
    <div
      className="min-h-screen font-body overflow-x-hidden"
      style={{
        background: "#07070f",
        color: "#b8bcc8",
      }}
    >
      {/* Тёмно-синее свечение сверху */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 90% 50% at 50% -10%, rgba(10,15,60,0.9) 0%, transparent 70%)",
        }}
      />
      {/* Фиолетовый отлив слева */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 70% at -5% 50%, rgba(60,20,100,0.18) 0%, transparent 60%)",
        }}
      />
      {/* Фиолетовый отлив справа */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 40% 70% at 105% 50%, rgba(50,15,90,0.15) 0%, transparent 60%)",
        }}
      />
      {/* Глубокий тёмный туман снизу */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 100% 45% at 50% 110%, rgba(20,10,50,0.6) 0%, transparent 60%)",
        }}
      />

      {/* Шапка */}
      <header className="relative pt-16 pb-6 text-center px-6">
        <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <p
            className="font-display text-xs uppercase mb-5"
            style={{ color: "rgba(160,165,185,0.55)", letterSpacing: "0.45em" }}
          >
            Фаргат Закиров
          </p>

          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, transparent, rgba(80,70,140,0.5))" }} />
            <div className="w-1 h-1 rounded-full" style={{ background: "rgba(110,100,180,0.7)" }} />
            <div className="h-px w-16" style={{ background: "linear-gradient(90deg, rgba(80,70,140,0.5), transparent)" }} />
          </div>

          <h1
            className="font-display font-light leading-tight"
            style={{
              color: "#ffffff",
              fontSize: "clamp(3rem, 10vw, 6.5rem)",
              textShadow: "0 0 40px rgba(80,70,160,0.25), 0 0 100px rgba(50,40,120,0.12)",
            }}
          >
            Иллюзия реальности
          </h1>

          <div className="flex items-center justify-center gap-2 mt-6">
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, transparent, rgba(80,70,140,0.45))" }} />
            <span style={{ color: "rgba(110,100,180,0.5)", fontSize: "10px", letterSpacing: "0.2em" }}>◈</span>
            <div className="h-px w-20" style={{ background: "linear-gradient(90deg, rgba(80,70,140,0.45), transparent)" }} />
          </div>
        </div>
      </header>

      {/* Обложка книги */}
      <section className="relative flex justify-center px-6 py-8">
        <div className="opacity-0 animate-scale-in" style={{ animationFillMode: "forwards" }}>
          <div className="relative group">
            <div
              className="absolute -bottom-8 left-1/2 -translate-x-1/2 blur-3xl rounded-full"
              style={{
                width: "80%",
                height: "60px",
                background: "radial-gradient(ellipse, rgba(40,20,100,0.5) 0%, rgba(20,10,60,0.2) 50%, transparent 70%)",
              }}
            />
            <div
              className="absolute -inset-6 blur-3xl opacity-20 group-hover:opacity-35 transition-opacity duration-700 pointer-events-none"
              style={{ background: "radial-gradient(ellipse, rgba(50,30,120,0.5) 0%, transparent 70%)" }}
            />
            <div
              className="relative overflow-hidden transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                width: "clamp(280px, 58vw, 400px)",
                borderRadius: "2px",
                boxShadow:
                  "-12px 16px 60px rgba(0,0,0,0.97), 0 0 50px rgba(40,20,100,0.2), 2px 0 0 rgba(255,255,255,0.04) inset",
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
                  background: "linear-gradient(135deg, rgba(60,30,120,0.1) 0%, transparent 40%, rgba(30,10,80,0.07) 100%)",
                }}
              />
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{ background: "linear-gradient(90deg, transparent, rgba(100,80,200,0.3), transparent)" }}
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
            style={{ color: "rgba(190,192,210,0.65)" }}
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
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, transparent, rgba(80,70,140,0.4))" }} />
            <span style={{ color: "rgba(110,100,180,0.5)", fontSize: "10px", letterSpacing: "0.3em" }}>◈ ◈ ◈</span>
            <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg, rgba(80,70,140,0.4), transparent)" }} />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Фантастика", "Детектив", "Психологический триллер"].map((genre) => (
              <span
                key={genre}
                className="px-4 py-1.5 text-xs font-body font-light border rounded-full uppercase"
                style={{
                  borderColor: "rgba(80,70,150,0.35)",
                  color: "rgba(170,165,210,0.8)",
                  background: "rgba(30,20,70,0.15)",
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
              background: "rgba(15,12,35,0.4)",
              border: "1px solid rgba(70,60,130,0.15)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(90,75,170,0.4), transparent)" }}
            />
            <div className="absolute top-2 left-2 w-3 h-3" style={{ borderTop: "1px solid rgba(80,70,150,0.4)", borderLeft: "1px solid rgba(80,70,150,0.4)" }} />
            <div className="absolute top-2 right-2 w-3 h-3" style={{ borderTop: "1px solid rgba(80,70,150,0.4)", borderRight: "1px solid rgba(80,70,150,0.4)" }} />
            <div className="absolute bottom-2 left-2 w-3 h-3" style={{ borderBottom: "1px solid rgba(80,70,150,0.4)", borderLeft: "1px solid rgba(80,70,150,0.4)" }} />
            <div className="absolute bottom-2 right-2 w-3 h-3" style={{ borderBottom: "1px solid rgba(80,70,150,0.4)", borderRight: "1px solid rgba(80,70,150,0.4)" }} />
            <p
              className="font-body text-base font-light text-center"
              style={{ color: "rgba(185,188,205,0.7)", lineHeight: "1.95" }}
            >
              Алчный предприниматель узнаёт об изобретении, способном изменить мир. Он хочет завладеть им любой ценой. Но так ли прост его создатель?
              <br /><br />
              Не обернётся ли охотник жертвой в этой опасной игре?
              <br /><br />
              Реальность переплетается с иллюзией, а человечность выворачивается наизнанку и проверяется на прочность.
            </p>
          </div>
        </div>
      </section>

      {/* Кнопки */}
      <section className="relative px-6 pt-10 pb-20 text-center">
        <div className="max-w-lg mx-auto">

          <p
            className="font-display italic mb-2"
            style={{
              color: "rgba(210,212,228,0.6)",
              fontSize: "clamp(0.95rem, 2.5vw, 1.15rem)",
              lineHeight: "1.7",
            }}
          >
            Выбор за вами.
          </p>
          <p
            className="font-display italic mb-10"
            style={{
              color: "rgba(160,162,185,0.35)",
              fontSize: "clamp(0.8rem, 2vw, 0.95rem)",
              letterSpacing: "0.03em",
            }}
          >
            Но помните: реальность — всего лишь иллюзия.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 justify-center items-center">
            {/* Синяя таблетка */}
            <a
              href="#"
              className="relative group flex items-center justify-center px-10 py-4 font-body text-sm font-light tracking-wider transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #1a1acc 0%, #0000CD 50%, #00008a 100%)",
                color: "#c8d4ff",
                letterSpacing: "0.12em",
                borderRadius: "100px",
                boxShadow:
                  "0 0 14px rgba(0,0,180,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,40,0.4)",
                border: "1px solid rgba(60,60,220,0.4)",
                minWidth: "185px",
                transition: "box-shadow 0.5s ease, transform 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 28px rgba(0,0,205,0.8), 0 0 60px rgba(0,0,205,0.35), inset 0 1px 0 rgba(255,255,255,0.18)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 14px rgba(0,0,180,0.4), inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -1px 0 rgba(0,0,40,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span className="relative z-10">Читать книгу</span>
            </a>

            {/* Красная таблетка */}
            <a
              href="#"
              className="relative group flex items-center justify-center px-10 py-4 font-body text-sm font-light tracking-wider transition-all duration-500"
              style={{
                background: "linear-gradient(180deg, #cc2020 0%, #B22222 50%, #7a1515 100%)",
                color: "#ffd0d0",
                letterSpacing: "0.12em",
                borderRadius: "100px",
                boxShadow:
                  "0 0 14px rgba(178,34,34,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(40,0,0,0.4)",
                border: "1px solid rgba(220,60,60,0.4)",
                minWidth: "185px",
                transition: "box-shadow 0.5s ease, transform 0.3s ease",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 28px rgba(178,34,34,0.85), 0 0 60px rgba(178,34,34,0.35), inset 0 1px 0 rgba(255,255,255,0.15)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.boxShadow =
                  "0 0 14px rgba(178,34,34,0.4), inset 0 1px 0 rgba(255,255,255,0.15), inset 0 -1px 0 rgba(40,0,0,0.4)";
                (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
              }}
            >
              <span className="relative z-10">Узнать больше</span>
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-center gap-3">
          <div className="h-px w-12" style={{ background: "linear-gradient(90deg, transparent, rgba(70,60,130,0.3), transparent)" }} />
          <p className="font-display italic text-xs" style={{ color: "rgba(90,80,140,0.4)" }}>
            Фаргат Закиров · {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
