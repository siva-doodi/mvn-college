const newsItems = [
  "AP OAMDC – Degree admissions are available now!",
  "2026–2027 Academic Year admissions in progress",
  "Applications are invited for the academic year 2026–2027",
];

export default function FlashNews() {
  return (
    <section
      aria-label="Flash news"
      className="relative flex min-h-[62px] w-full items-center overflow-hidden border-y-2 border-[#c3a365] bg-[#fffdf8]"
    >
      {/* SCROLLING NEWS: full width, sits underneath the label */}
      <div className="flash-viewport absolute inset-0 overflow-hidden">
        <div className="flash-track">
          {newsItems.map((news) => (
            <div
              key={news}
              className="flex shrink-0 items-center gap-3 pr-10 sm:gap-4 sm:pr-14"
            >
              <span className="rounded-full bg-[#f5e9c9] px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-[#075e59] sm:text-xs">
                New
              </span>
              <span className="whitespace-nowrap text-[15px] font-semibold text-[#075e59] sm:text-lg">
                {news}
              </span>
              <span className="text-lg font-bold leading-none text-[#c3a365]">
                •
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* LABEL: on top, hides the text as it slides behind */}
      <div className="relative z-10 flex items-center self-stretch bg-[#fffdf8] py-2 pl-3 pr-4 sm:pl-4">
        <div className="flex h-[52px] items-center justify-center gap-2.5 rounded-l-[18px] rounded-r-[40px] bg-[#00645f] px-5 shadow-md sm:h-[58px] sm:px-8">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#e6c477] opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#e6c477]" />
          </span>
          <h2 className="whitespace-nowrap font-serif text-xl font-bold text-white sm:text-3xl">
            Flash News
          </h2>
        </div>
      </div>

      <style>{`
        .flash-track {
          position: absolute;
          top: 50%;
          left: 0;
          display: inline-flex;
          align-items: center;
          white-space: nowrap;
          padding-left: 100%;              /* start at the far right edge */
          transform: translateY(-50%);
          animation: flash-rtl 30s linear infinite;
          will-change: transform;
        }
        .flash-viewport:hover .flash-track {
          animation-play-state: paused;    /* pause on hover */
        }
        @keyframes flash-rtl {
          from { transform: translate(0, -50%); }
          to   { transform: translate(-100%, -50%); }  /* right to left */
        }
      `}</style>
    </section>
  );
}