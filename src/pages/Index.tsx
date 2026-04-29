const BOOK_COVER = "https://cdn.poehali.dev/projects/a429683c-9af0-409b-bee5-5c281ceb1d25/files/3b4aaa83-37a1-4d9f-9db6-7c2722150fa8.jpg";

const Index = () => {
  return (
    <div
      className="min-h-screen font-body"
      style={{
        background: "linear-gradient(160deg, #0a0a0f 0%, #0f0e18 40%, #0d0a0a 100%)",
        color: "#f0ece4",
      }}
    >
      {/* Фоновое свечение */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(201,168,76,0.07) 0%, transparent 70%)",
        }}
      />
      {/* Текстура фона */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.015'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
        }}
      />

      {/* Шапка */}
      <header className="relative pt-16 pb-8 text-center px-6">
        <div className="opacity-0 animate-fade-up" style={{ animationFillMode: "forwards" }}>
          <p
            className="font-display text-sm uppercase mb-4"
            style={{ color: "#C9A84C", letterSpacing: "0.35em" }}
          >
            Новая книга
          </p>
          <h1
            className="font-display text-6xl md:text-8xl font-light leading-none"
            style={{ color: "#f5f0e8" }}
          >
            Название
            <br />
            <em className="font-light italic" style={{ color: "#e8e0d0" }}>
              Вашей Книги
            </em>
          </h1>
          <div
            className="mx-auto mt-6 h-px w-24"
            style={{
              background: "linear-gradient(90deg, transparent, #C9A84C, transparent)",
            }}
          />
          <p
            className="font-body mt-5 text-base font-light"
            style={{ color: "#8a7a6a", letterSpacing: "0.3em" }}
          >
            Имя Автора
          </p>
        </div>
      </header>

      {/* Обложка книги */}
      <section className="relative flex justify-center px-6 py-10">
        <div className="opacity-0 animate-scale-in" style={{ animationFillMode: "forwards" }}>
          <div className="relative group">
            <div
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-4/5 h-8 rounded-full blur-2xl"
              style={{ background: "rgba(201,168,76,0.15)" }}
            />
            <div
              className="relative overflow-hidden rounded-sm transition-transform duration-700 group-hover:scale-[1.02]"
              style={{
                width: "260px",
                boxShadow: "-8px 8px 40px rgba(0,0,0,0.8), 2px 2px 0 rgba(255,255,255,0.05) inset",
              }}
            >
              <img
                src={BOOK_COVER}
                alt="Обложка книги"
                className="w-full block"
                style={{ aspectRatio: "3/4", objectFit: "cover" }}
              />
              <div
                className="absolute left-0 top-0 bottom-0 w-2"
                style={{ background: "linear-gradient(90deg, rgba(0,0,0,0.5), transparent)" }}
              />
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: "linear-gradient(135deg, rgba(201,168,76,0.12) 0%, transparent 50%)",
                }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Короткий текстовый блок — цитата */}
      <section
        className="relative px-6 py-10 text-center opacity-0 animate-fade-up-2"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-xl mx-auto">
          <div
            className="font-display text-4xl mb-4 leading-none"
            style={{ color: "#C9A84C" }}
          >
            "
          </div>
          <p
            className="font-display text-xl md:text-2xl font-light italic leading-relaxed"
            style={{ color: "#d4cdc4" }}
          >
            Краткая, цепляющая фраза из книги или слоган,
            который передаёт её суть и атмосферу
          </p>
          <div className="font-display text-4xl mt-2 leading-none" style={{ color: "#C9A84C" }}>
            "
          </div>
        </div>
      </section>

      {/* Аннотация и жанры */}
      <section
        className="relative px-6 py-10 opacity-0 animate-fade-up-3"
        style={{ animationFillMode: "forwards" }}
      >
        <div className="max-w-2xl mx-auto">
          <div className="flex items-center gap-4 mb-8">
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3))" }}
            />
            <div className="w-1.5 h-1.5 rotate-45" style={{ background: "#C9A84C" }} />
            <div
              className="flex-1 h-px"
              style={{ background: "linear-gradient(90deg, rgba(201,168,76,0.3), transparent)" }}
            />
          </div>

          <div className="flex flex-wrap gap-2 justify-center mb-8">
            {["Роман", "Фантастика", "Приключения", "Психологическая драма"].map((genre) => (
              <span
                key={genre}
                className="px-4 py-1.5 text-xs font-body font-light border rounded-full uppercase"
                style={{
                  borderColor: "rgba(201,168,76,0.3)",
                  color: "#C9A84C",
                  background: "rgba(201,168,76,0.05)",
                  letterSpacing: "0.15em",
                }}
              >
                {genre}
              </span>
            ))}
          </div>

          <div
            className="rounded-sm p-8 relative overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            <div
              className="absolute top-0 left-0 right-0 h-px"
              style={{
                background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.4), transparent)",
              }}
            />
            <p
              className="font-body text-base font-light text-center"
              style={{ color: "#b8b0a4", lineHeight: "1.9" }}
            >
              Здесь размещается аннотация к книге — краткое описание сюжета, которое
              заинтригует читателя и побудит его узнать больше. Расскажите о главном герое,
              конфликте или мире, который вы создали. Несколько предложений, которые
              захватят с первых слов.
            </p>
          </div>
        </div>
      </section>

      {/* Кнопки соцсетей */}
      <section className="relative px-6 pt-10 pb-20 text-center">
        <div className="max-w-sm mx-auto">
          <p
            className="font-body text-xs uppercase mb-8 font-light"
            style={{ color: "#5a5248", letterSpacing: "0.25em" }}
          >
            Читать и обсудить
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-body text-sm font-light uppercase transition-all duration-300"
              style={{
                background: "linear-gradient(135deg, #C9A84C, #8B6914)",
                color: "#0a0a0f",
                letterSpacing: "0.15em",
                boxShadow: "0 4px 24px rgba(201,168,76,0.25)",
              }}
            >
              <span>✈</span>
              Telegram
            </a>
            <a
              href="#"
              className="flex items-center justify-center gap-3 px-8 py-4 rounded-sm font-body text-sm font-light uppercase transition-all duration-300"
              style={{
                background: "transparent",
                color: "#d4cdc4",
                letterSpacing: "0.15em",
                border: "1px solid rgba(255,255,255,0.15)",
              }}
            >
              <span>🔵</span>
              ВКонтакте
            </a>
          </div>
        </div>

        <div className="mt-16">
          <div
            className="mx-auto h-px w-16"
            style={{
              background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3), transparent)",
            }}
          />
          <p
            className="font-display italic text-sm mt-4"
            style={{ color: "#3a342e" }}
          >
            {new Date().getFullYear()}
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
