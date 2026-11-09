import { useEffect, useState } from "react";

const ASSET = "/assets";

type IconName =
  | "calendar"
  | "search"
  | "menu"
  | "close"
  | "leaf"
  | "person"
  | "sparkle"
  | "clipboard"
  | "heart"
  | "clock"
  | "phone"
  | "pin"
  | "arrow";

type IconProps = {
  name: IconName;
  size?: number;
  strokeWidth?: number;
};

// 모든 인터페이스 아이콘은 같은 선 굵기와 둥근 모서리를 사용합니다.
function Icon({ name, size = 24, strokeWidth = 1.7 }: IconProps) {
  const paths: Record<IconName, React.ReactNode> = {
    calendar: (
      <>
        <path d="M7 3v3M17 3v3M4 9h16M5 5h14a1 1 0 0 1 1 1v14H4V6a1 1 0 0 1 1-1Z" />
        <path d="M8 13h3M13 13h3M8 17h3M13 17h3" />
      </>
    ),
    search: (
      <>
        <circle cx="10.5" cy="10.5" r="6.5" />
        <path d="m15.5 15.5 5 5" />
      </>
    ),
    menu: <path d="M4 7h16M4 12h16M4 17h16" />,
    close: <path d="m6 6 12 12M18 6 6 18" />,
    leaf: (
      <>
        <path d="M12 21v-8" />
        <path d="M12 14C5 14 4 9 5 5c4 0 8 1 8 7M12 17c6 0 8-4 7-8-4 0-7 1-7 6" />
      </>
    ),
    person: (
      <>
        <circle cx="12" cy="7.5" r="3.5" />
        <path d="M5.5 21v-3.5a6.5 6.5 0 0 1 13 0V21Z" />
      </>
    ),
    sparkle: (
      <path d="M12 2c.7 5.5 4.5 9.3 10 10-5.5.7-9.3 4.5-10 10-.7-5.5-4.5-9.3-10-10 5.5-.7 9.3-4.5 10-10Z" />
    ),
    clipboard: (
      <>
        <rect x="5" y="4" width="14" height="17" rx="1" />
        <path d="M9 4V2h6v2M8 9h8M8 13h8M8 17h8" />
      </>
    ),
    heart: (
      <path d="M20.8 5.8c-2-2-5.2-2-7.2 0L12 7.4l-1.6-1.6a5.1 5.1 0 0 0-7.2 7.2L12 21l8.8-8a5.1 5.1 0 0 0 0-7.2Z" />
    ),
    clock: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M12 7v5l3 2" />
      </>
    ),
    phone: (
      <path d="M7.2 3.5 4.5 5.2c-1.8 1.1 2.6 8 4 9.4 1.5 1.5 8.3 5.8 9.4 4l1.7-2.7-4.4-2.2-1.5 1.5c-2.2-1.1-3.8-2.7-4.9-4.9l1.5-1.5-2.1-4.4Z" />
    ),
    pin: (
      <>
        <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
        <circle cx="12" cy="10" r="2.5" />
      </>
    ),
    arrow: <path d="M4 12h15M14 7l5 5-5 5" />,
  };

  return (
    <svg
      aria-hidden="true"
      fill="none"
      height={size}
      viewBox="0 0 24 24"
      width={size}
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={strokeWidth}
    >
      {paths[name]}
    </svg>
  );
}

const navItems = [
  ["한의원 소개", "#about"],
  ["진료안내", "#guide"],
  ["치료프로그램", "#programs"],
  ["건강정보", "#process"],
  ["커뮤니티", "#reviews"],
];

const specialties = [
  {
    icon: "leaf" as IconName,
    title: "체질 맞춤 진료",
    lines: ["개인별 체질을 고려한", "맞춤 한방치료"],
  },
  {
    icon: "person" as IconName,
    title: "통증 클리닉",
    lines: ["목·허리·관절 등", "근골격계 통증 치료"],
  },
  {
    icon: "leaf" as IconName,
    title: "소화·위장 클리닉",
    lines: ["소화불량, 위장장애 등", "속 편한 치료"],
  },
  {
    icon: "sparkle" as IconName,
    title: "스트레스·수면 클리닉",
    lines: ["불면, 피로, 불안 개선", "마음까지 편안하게"],
  },
];

const programCards = [
  { image: "0eb09.png", title: "통증 치료 프로그램", detail: "목·어깨·허리·무릎 통증 개선" },
  { image: "9e176.png", title: "소화기 건강 프로그램", detail: "더부룩함, 위장불편, 장 건강 관리" },
  { image: "f9aa8.png", title: "수면·스트레스 프로그램", detail: "불면, 긴장, 만성 피로 개선" },
];

const processSteps = [
  { icon: "clipboard" as IconName, title: "상담 및 문진", detail: "생활습관과 증상 확인" },
  { icon: "search" as IconName, title: "체질·원인 분석", detail: "정확한 상태 진단" },
  { icon: "leaf" as IconName, title: "맞춤 치료 계획", detail: "개인별 치료법 제안" },
  { icon: "heart" as IconName, title: "치료 및 관리", detail: "한방치료와 생활관리 지도" },
];

const reviews = [
  {
    text: "만성적인 어깨 통증이 많이 좋아졌어요. 친절한 상담과 꼼꼼한 진료 덕분에 믿고 치료받을 수 있었습니다.",
    author: "40대 / 직장인",
  },
  {
    text: "늘 더부룩했던 속이 편안해졌어요. 제 생활 습관까지 세심하게 살펴주셔서 큰 도움이 되었습니다.",
    author: "30대 / 디자이너",
  },
  {
    text: "밤마다 뒤척이던 시간이 줄고 아침이 가벼워졌습니다. 차분한 진료 환경도 마음에 들었어요.",
    author: "50대 / 자영업",
  },
];

const heroSlides = [
  {
    eyebrow: "몸과 마음이 편안해지는",
    title: "나른한의원",
    copy: "전통 한의학의 지혜로\n당신의 일상을 더 건강하고 편안하게 만듭니다.",
  },
  {
    eyebrow: "일상의 균형을 되찾는 진료",
    title: "맞춤 한방치료",
    copy: "몸의 작은 신호까지 세심하게 살펴\n나에게 꼭 맞는 치료 방향을 제안합니다.",
  },
  {
    eyebrow: "쉼이 필요한 당신을 위해",
    title: "편안한 회복",
    copy: "차분한 공간과 따뜻한 진료로\n몸과 마음의 건강한 변화를 함께합니다.",
  },
];

function SectionHeading({
  label,
  title,
  description,
}: {
  label: string;
  title: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <span className="section-label">{label}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [reservationOpen, setReservationOpen] = useState(false);
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);
  const [reviewIndex, setReviewIndex] = useState(0);
  const [selectedProgram, setSelectedProgram] = useState<(typeof programCards)[number] | null>(
    null,
  );

  // 히어로 이미지는 6초마다 자동으로 넘어가며 수동 버튼도 함께 지원합니다.
  useEffect(() => {
    const timer = window.setInterval(
      () => setHeroIndex((index) => (index + 1) % heroSlides.length),
      6000,
    );
    return () => window.clearInterval(timer);
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      reservationOpen || galleryOpen || selectedProgram ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [reservationOpen, galleryOpen, selectedProgram]);

  const moveHero = (direction: number) => {
    setHeroIndex((index) => (index + direction + heroSlides.length) % heroSlides.length);
  };

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="logo" href="#top" aria-label="나른한의원 홈">
          <img src={`${ASSET}/fa7e9.png`} alt="나른한의원" />
        </a>

        <nav className="desktop-nav" aria-label="주요 메뉴">
          {navItems.map(([label, href]) => (
            <a href={href} key={href}>
              {label}
            </a>
          ))}
        </nav>

        <div className="header-actions">
          <button
            className="icon-button search-button"
            aria-label="검색 열기"
            onClick={() => setSearchOpen((open) => !open)}
          >
            <Icon name="search" size={21} />
          </button>
          <button
            className="pill-button header-reservation"
            onClick={() => setReservationOpen(true)}
          >
            <Icon name="calendar" size={15} />
            진료예약
          </button>
          <button
            className="icon-button menu-button"
            aria-expanded={menuOpen}
            aria-label={menuOpen ? "메뉴 닫기" : "메뉴 열기"}
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? "close" : "menu"} size={22} />
          </button>
        </div>

        {searchOpen && (
          <form
            className="search-panel"
            onSubmit={(event) => {
              event.preventDefault();
              const input = event.currentTarget.elements.namedItem("keyword") as HTMLInputElement;
              const match = navItems.find(([label]) => label.includes(input.value.trim()));
              if (match) window.location.hash = match[1];
              setSearchOpen(false);
            }}
          >
            <label htmlFor="keyword">사이트 검색</label>
            <input id="keyword" name="keyword" placeholder="메뉴명을 입력하세요" autoFocus />
            <button type="submit">검색</button>
          </form>
        )}

        <nav className={`mobile-nav ${menuOpen ? "is-open" : ""}`} aria-label="모바일 메뉴">
          {navItems.map(([label, href]) => (
            <a href={href} key={href} onClick={closeMenu}>
              {label}
              <span>›</span>
            </a>
          ))}
          <button
            onClick={() => {
              closeMenu();
              setReservationOpen(true);
            }}
          >
            진료예약
          </button>
        </nav>
      </header>

      <main id="top">
        <section className="hero" aria-label="나른한의원 소개 슬라이드">
          <img
            className="hero-image"
            src={`${ASSET}/98eaf.png`}
            alt="따뜻한 햇살이 드는 한방 치료 공간"
          />
          <div className="hero-content">
            <p className="hero-eyebrow">{heroSlides[heroIndex].eyebrow}</p>
            <h1>{heroSlides[heroIndex].title}</h1>
            <p className="hero-copy">{heroSlides[heroIndex].copy}</p>
            <div className="hero-buttons">
              <button className="pill-button" onClick={() => setReservationOpen(true)}>
                <Icon name="calendar" size={15} />
                진료예약하기
                <Icon name="arrow" size={14} />
              </button>
              <a className="outline-button" href="#programs">
                진료과목 보기
              </a>
            </div>
            <div className="hero-pagination">
              {heroSlides.map((_, index) => (
                <button
                  aria-label={`${index + 1}번째 슬라이드`}
                  className={index === heroIndex ? "active" : ""}
                  key={index}
                  onClick={() => setHeroIndex(index)}
                >
                  0{index + 1}
                </button>
              ))}
            </div>
          </div>
          <div className="hero-arrows">
            <button aria-label="이전 슬라이드" onClick={() => moveHero(-1)}>
              ‹
            </button>
            <button aria-label="다음 슬라이드" onClick={() => moveHero(1)}>
              ›
            </button>
          </div>
        </section>

        <section className="specialties" id="guide" aria-label="특화 진료">
          {specialties.map((item) => (
            <article className="specialty-card" key={item.title}>
              <span className="round-icon">
                <Icon name={item.icon} size={29} />
              </span>
              <h3>{item.title}</h3>
              <p>
                {item.lines[0]}
                <br />
                {item.lines[1]}
              </p>
            </article>
          ))}
        </section>

        <section className="program-section" id="programs">
          <button
            className="program-main-image"
            aria-label="치료 사진 크게 보기"
            onClick={() => setGalleryOpen(true)}
          >
            <img src={`${ASSET}/a7576.png`} alt="한방 치료를 받고 있는 환자" />
          </button>
          <div className="program-copy">
            <SectionHeading
              label="TREATMENT PROGRAM"
              title={
                <>
                  나른한의원의
                  <br />
                  특화 치료 프로그램
                </>
              }
              description={
                <>
                  오랜 경험과 노하우로 일상 속 불편함을
                  <br />
                  근본부터 개선합니다.
                </>
              }
            />
            <a className="pill-button" href="#guide">
              치료프로그램 자세히 보기 <Icon name="arrow" size={14} />
            </a>
          </div>
          <div className="program-list">
            {programCards.map((program) => (
              <button
                className="program-card"
                key={program.title}
                onClick={() => setSelectedProgram(program)}
              >
                <img src={`${ASSET}/${program.image}`} alt="" />
                <span>
                  <b>{program.title}</b>
                  <small>{program.detail}</small>
                </span>
                <b className="card-arrow">›</b>
              </button>
            ))}
          </div>
        </section>

        <section className="process-section" id="process">
          <SectionHeading
            label="NAREUN PROCESS"
            title={
              <>
                나른한의원의
                <br />
                맞춤 진료 과정
              </>
            }
            description={
              <>
                꼼꼼한 진단부터 체계적인 치료까지
                <br />
                당신만을 위한 맞춤 진료를 제공합니다.
              </>
            }
          />
          <div className="process-list">
            {processSteps.map((step, index) => (
              <article className="process-card" key={step.title}>
                <span className="process-icon">
                  <Icon name={step.icon} size={28} />
                </span>
                <b className="step-number">0{index + 1}</b>
                <h3>{step.title}</h3>
                <p>{step.detail}</p>
                {index < processSteps.length - 1 && <span className="process-arrow">›</span>}
              </article>
            ))}
          </div>
        </section>

        <section className="review-section" id="reviews">
          <div className="review-intro">
            <span>나른한의원 이야기</span>
            <h2>
              환자분들의
              <br />
              진심 어린 후기
            </h2>
            <p>
              나른한의원을 다녀가신 분들의
              <br />
              소중한 경험을 소개합니다.
            </p>
          </div>
          <article className="review-card">
            <q>{reviews[reviewIndex].text}</q>
            <div className="review-meta">
              <span>
                <Icon name="person" size={18} /> {reviews[reviewIndex].author}
              </span>
              <span>
                <button
                  aria-label="이전 후기"
                  onClick={() =>
                    setReviewIndex((reviewIndex - 1 + reviews.length) % reviews.length)
                  }
                >
                  ‹
                </button>
                {reviewIndex + 1} / {reviews.length}
                <button
                  aria-label="다음 후기"
                  onClick={() => setReviewIndex((reviewIndex + 1) % reviews.length)}
                >
                  ›
                </button>
              </span>
            </div>
          </article>
        </section>

        <section className="about-section" id="about">
          <div className="about-copy">
            <SectionHeading
              label="ABOUT NAREUN"
              title={
                <>
                  나른한의원은
                  <br />
                  이런 공간입니다
                </>
              }
              description={
                <>
                  편안함과 신뢰가 있는,
                  <br />
                  치유와 회복의 한의원입니다.
                </>
              }
            />
            <button className="outline-button" onClick={() => setGalleryOpen(true)}>
              한의원 소개 보기 <Icon name="arrow" size={13} />
            </button>
          </div>
          <button
            className="about-image"
            aria-label="한의원 내부 사진 크게 보기"
            onClick={() => setGalleryOpen(true)}
          >
            <img src={`${ASSET}/c79d1.png`} alt="나른한의원 내부 대기 공간" />
          </button>
          <div className="benefit-list">
            {[
              ["편안한 진료환경", "마음까지 쉬어가는 공간"],
              ["경험 많은 의료진", "풍부한 임상 경험과 전문성"],
              ["안전한 한약 관리", "엄선된 약재와 체계적인 조제"],
            ].map(([title, detail]) => (
              <article key={title}>
                <span className="round-icon">
                  <Icon name="leaf" size={21} />
                </span>
                <div>
                  <h3>{title}</h3>
                  <p>{detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="info-section" id="community">
          <article className="notice-panel">
            <div className="info-title">
              <h2>공지사항</h2>
              <a href="#community">더보기 +</a>
            </div>
            {[
              ["추석 연휴 진료 일정 안내", "2024.09.10"],
              ["가을철 건강관리 한방 팁", "2024.09.05"],
              ["진료예약 시스템 오픈 안내", "2024.08.28"],
            ].map(([title, date]) => (
              <button
                key={title}
                onClick={() =>
                  window.alert(`${title}\n자세한 안내는 055-123-4567로 문의해 주세요.`)
                }
              >
                <span>{title}</span>
                <time>{date}</time>
              </button>
            ))}
          </article>

          <article className="hours-panel">
            <h2>
              <Icon name="clock" size={18} /> 진료시간 안내
            </h2>
            <dl>
              <div>
                <dt>평일</dt>
                <dd>09:00 – 18:30</dd>
              </div>
              <div>
                <dt>토요일</dt>
                <dd>09:00 – 14:00</dd>
              </div>
              <div>
                <dt>점심시간</dt>
                <dd>13:00 – 14:00</dd>
              </div>
            </dl>
            <p>일요일 · 공휴일 휴진</p>
          </article>

          <article className="location-panel">
            <h2>
              <Icon name="pin" size={18} /> 오시는 길
            </h2>
            <img src={`${ASSET}/7307a.png`} alt="나른한의원 위치 지도" />
            <div>
              <address>
                경상남도 진주시 진주대로 123
                <br />
                나른한의원
              </address>
              <a className="phone-link" href="tel:0551234567">
                <Icon name="phone" size={17} />
                055-123-4567
              </a>
              <a
                className="outline-button direction-link"
                href="https://map.kakao.com/link/search/경상남도 진주시 진주대로 123"
                target="_blank"
                rel="noreferrer"
              >
                길찾기 <Icon name="arrow" size={12} />
              </a>
            </div>
          </article>
        </section>
      </main>

      {reservationOpen && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setReservationOpen(false)}
        >
          <section
            className="modal reservation-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="reservation-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="예약창 닫기"
              onClick={() => setReservationOpen(false)}
            >
              <Icon name="close" />
            </button>
            <span className="modal-icon">
              <Icon name="calendar" size={27} />
            </span>
            <h2 id="reservation-title">진료예약</h2>
            <p>원하시는 상담 방법을 선택해 주세요.</p>
            <a href="tel:0551234567">
              <Icon name="phone" size={18} /> 전화로 예약하기
            </a>
            <a href="sms:0551234567">
              <Icon name="calendar" size={18} /> 문자로 예약 문의하기
            </a>
          </section>
        </div>
      )}

      {galleryOpen && (
        <div
          className="modal-backdrop dark"
          role="presentation"
          onMouseDown={() => setGalleryOpen(false)}
        >
          <section
            className="gallery-modal"
            role="dialog"
            aria-modal="true"
            aria-label="한의원 이미지 크게 보기"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close light"
              aria-label="이미지 닫기"
              onClick={() => setGalleryOpen(false)}
            >
              <Icon name="close" />
            </button>
            <img src={`${ASSET}/c79d1.png`} alt="나른한의원 내부 대기 공간 크게 보기" />
          </section>
        </div>
      )}

      {selectedProgram && (
        <div
          className="modal-backdrop"
          role="presentation"
          onMouseDown={() => setSelectedProgram(null)}
        >
          <section
            className="modal program-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="program-title"
            onMouseDown={(event) => event.stopPropagation()}
          >
            <button
              className="modal-close"
              aria-label="프로그램 안내 닫기"
              onClick={() => setSelectedProgram(null)}
            >
              <Icon name="close" />
            </button>
            <img src={`${ASSET}/${selectedProgram.image}`} alt="" />
            <h2 id="program-title">{selectedProgram.title}</h2>
            <p>
              {selectedProgram.detail}을 위해 현재 상태를 세심하게 살피고 개인별 맞춤 치료 계획을
              안내합니다.
            </p>
            <button
              className="pill-button"
              onClick={() => {
                setSelectedProgram(null);
                setReservationOpen(true);
              }}
            >
              이 프로그램 상담하기
            </button>
          </section>
        </div>
      )}
    </div>
  );
}

export default App;
