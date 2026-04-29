const BOOK_COVER_FRONT = "https://cdn.poehali.dev/projects/a429683c-9af0-409b-bee5-5c281ceb1d25/bucket/e31806e8-1a1c-446e-97df-da316e4a4de3.jpg";

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

      {/* Обложка книги — 3D */}
      <section className="relative flex justify-center px-6 py-12">
        <style>{`
          .book-scene {
            perspective: 1200px;
          }
          .book-3d {
            position: relative;
            transform-style: preserve-3d;
            transform: rotateY(-25deg);
            transition: transform 1.4s cubic-bezier(0.4, 0, 0.2, 1);
            cursor: pointer;
          }
          .book-scene:hover .book-3d {
            transform: rotateY(160deg);
          }
          .book-face {
            position: absolute;
            top: 0; left: 0;
            width: 100%; height: 100%;
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            overflow: hidden;
            border-radius: 2px;
          }
          .book-back {
            transform: rotateY(180deg);
          }
          .book-spine {
            position: absolute;
            top: 0;
            left: 0;
            height: 100%;
            transform-origin: left center;
            transform: rotateY(-90deg) translateX(-50%);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background: linear-gradient(180deg, #1a0e2e 0%, #0d0818 50%, #1a0e2e 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
          }
          .book-pages-top {
            position: absolute;
            top: 0; left: 28px; right: 0;
            height: 10px;
            transform-origin: top center;
            transform: rotateX(-90deg) translateY(-5px);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background: repeating-linear-gradient(
              90deg,
              #f0ebe3 0px, #f0ebe3 1px,
              #e4ddd4 1px, #e4ddd4 2px
            );
          }
          .book-pages-bottom {
            position: absolute;
            bottom: 0; left: 28px; right: 0;
            height: 10px;
            transform-origin: bottom center;
            transform: rotateX(90deg) translateY(5px);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background: repeating-linear-gradient(
              90deg,
              #ede7df 0px, #ede7df 1px,
              #e0d9d0 1px, #e0d9d0 2px
            );
          }
          .book-pages-right {
            position: absolute;
            top: 0; right: 0;
            width: 10px; height: 100%;
            transform-origin: right center;
            transform: rotateY(90deg) translateX(5px);
            backface-visibility: hidden;
            -webkit-backface-visibility: hidden;
            background: repeating-linear-gradient(
              180deg,
              #f5f0ea 0px, #f5f0ea 1px,
              #e8e2d8 1px, #e8e2d8 2px
            );
          }
        `}</style>

        <div className="opacity-0 animate-scale-in" style={{ animationFillMode: "forwards" }}>
          {/* Тень под книгой */}
          <div
            className="absolute -bottom-6 left-1/2 -translate-x-1/2 blur-3xl rounded-full pointer-events-none"
            style={{
              width: "70%",
              height: "50px",
              background: "radial-gradient(ellipse, rgba(40,20,100,0.6) 0%, transparent 70%)",
            }}
          />

          <div className="book-scene" style={{ width: "clamp(260px, 52vw, 360px)" }}>
            <div
              className="book-3d"
              style={{
                width: "clamp(260px, 52vw, 360px)",
                height: "clamp(347px, 69vw, 480px)",
              }}
            >
              {/* Передняя обложка */}
              <div
                className="book-face"
                style={{
                  boxShadow: "6px 0 20px rgba(0,0,0,0.8), -2px 0 8px rgba(0,0,0,0.4)",
                }}
              >
                <img
                  src={BOOK_COVER_FRONT}
                  alt="Иллюзия реальности — передняя обложка"
                  style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                />
                {/* Корешок-тень на передней */}
                <div
                  style={{
                    position: "absolute", left: 0, top: 0, bottom: 0, width: "18px",
                    background: "linear-gradient(90deg, rgba(0,0,0,0.55), transparent)",
                  }}
                />
              </div>

              {/* Задняя обложка */}
              <div
                className="book-face book-back"
                style={{
                  background: "linear-gradient(160deg, #0d0a1a 0%, #10081f 40%, #080612 100%)",
                  boxShadow: "-6px 0 20px rgba(0,0,0,0.8)",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "2rem 1.5rem",
                  gap: "1.2rem",
                }}
              >
                {/* Декоративный верхний орнамент */}
                <div style={{ textAlign: "center" }}>
                  <div style={{
                    width: "40px", height: "1px", margin: "0 auto 8px",
                    background: "linear-gradient(90deg, transparent, rgba(100,80,200,0.6), transparent)",
                  }} />
                  <span style={{ color: "rgba(130,100,210,0.5)", fontSize: "10px", letterSpacing: "0.3em" }}>◈</span>
                  <div style={{
                    width: "40px", height: "1px", margin: "8px auto 0",
                    background: "linear-gradient(90deg, transparent, rgba(100,80,200,0.6), transparent)",
                  }} />
                </div>

                {/* Цитата */}
                <p style={{
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "clamp(0.75rem, 2vw, 0.9rem)",
                  fontStyle: "italic",
                  fontWeight: 300,
                  color: "rgba(200,195,230,0.7)",
                  textAlign: "center",
                  lineHeight: "1.8",
                }}>
                  «Что если всё, что ты видишь — лишь отражение того, во что ты решил поверить?»
                </p>

                {/* Разделитель */}
                <div style={{ display: "flex", alignItems: "center", gap: "8px", width: "80%" }}>
                  <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, transparent, rgba(80,60,160,0.4))" }} />
                  <div style={{ width: "4px", height: "4px", borderRadius: "50%", background: "rgba(100,80,180,0.4)" }} />
                  <div style={{ flex: 1, height: "1px", background: "linear-gradient(90deg, rgba(80,60,160,0.4), transparent)" }} />
                </div>

                {/* Аннотация */}
                <p style={{
                  fontFamily: '"IBM Plex Sans", sans-serif',
                  fontSize: "clamp(0.62rem, 1.6vw, 0.75rem)",
                  fontWeight: 300,
                  color: "rgba(170,165,200,0.55)",
                  textAlign: "center",
                  lineHeight: "1.75",
                }}>
                  Алчный предприниматель узнаёт об изобретении, способном изменить мир.
                  Не обернётся ли охотник жертвой в этой опасной игре?
                </p>

                {/* Жанры */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", justifyContent: "center" }}>
                  {["Фантастика", "Детектив", "Триллер"].map(g => (
                    <span key={g} style={{
                      fontFamily: '"IBM Plex Sans", sans-serif',
                      fontSize: "0.55rem",
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(150,130,210,0.7)",
                      border: "1px solid rgba(90,70,170,0.3)",
                      borderRadius: "100px",
                      padding: "3px 10px",
                      background: "rgba(50,30,100,0.12)",
                    }}>{g}</span>
                  ))}
                </div>

                {/* Автор внизу */}
                <div style={{ marginTop: "auto", textAlign: "center" }}>
                  <div style={{
                    width: "30px", height: "1px", margin: "0 auto 10px",
                    background: "linear-gradient(90deg, transparent, rgba(80,60,160,0.4), transparent)",
                  }} />
                  <p style={{
                    fontFamily: '"Cormorant Garamond", Georgia, serif',
                    fontSize: "clamp(0.7rem, 1.8vw, 0.85rem)",
                    letterSpacing: "0.25em",
                    textTransform: "uppercase",
                    color: "rgba(180,170,220,0.5)",
                    fontWeight: 300,
                  }}>Фаргат Закиров</p>
                </div>
              </div>

              {/* Обрез сверху — страницы */}
              <div className="book-pages-top" style={{ left: "28px", right: "0" }} />
              {/* Обрез снизу — страницы */}
              <div className="book-pages-bottom" style={{ left: "28px", right: "0" }} />
              {/* Обрез справа — страницы */}
              <div className="book-pages-right" />

              {/* Корешок */}
              <div
                className="book-spine"
                style={{ width: "28px" }}
              >
                <div style={{
                  transform: "rotate(180deg)",
                  writingMode: "vertical-rl",
                  fontFamily: '"Cormorant Garamond", Georgia, serif',
                  fontSize: "0.65rem",
                  letterSpacing: "0.2em",
                  color: "rgba(180,165,230,0.6)",
                  textTransform: "uppercase",
                  whiteSpace: "nowrap",
                }}>
                  Иллюзия реальности · Фаргат Закиров
                </div>
                {/* Блики корешка */}
                <div style={{
                  position: "absolute", top: 0, left: 0, right: 0, height: "100%",
                  background: "linear-gradient(90deg, rgba(255,255,255,0.06) 0%, transparent 30%, transparent 70%, rgba(0,0,0,0.3) 100%)",
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Текст от автора */}
      <section
        className="relative px-6 py-10 text-center opacity-0 animate-fade-up-2"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-xl mx-auto flex flex-col gap-4">
          <p
            className="font-display text-lg md:text-xl font-light leading-relaxed"
            style={{ color: "rgba(220,222,235,0.8)" }}
          >
            Я создал этот сайт, потому что пишу книгу.
          </p>
          <p
            className="font-display text-base md:text-lg font-light italic leading-relaxed"
            style={{ color: "rgba(185,188,210,0.6)" }}
          >
            У меня нет громких рекламных кампаний. Только я, текст и желание, чтобы меня услышали.
            Книга рождается прямо сейчас. Вы видите всё, как есть.
          </p>
          <p
            className="font-display text-lg md:text-xl font-light leading-relaxed"
            style={{ color: "rgba(210,208,230,0.7)" }}
          >
            Мне удалось вас заинтриговать?
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
              href="https://proza.ru/2025/11/30/1566"
              target="_blank"
              rel="noopener noreferrer"
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
              href="https://vk.com/illusion_real"
              target="_blank"
              rel="noopener noreferrer"
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