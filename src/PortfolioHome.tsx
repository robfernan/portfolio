import React from 'react';

export default function PortfolioHome() {
  return (
    <section className="max-w-5xl mx-auto py-16 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      {/* Hero/About Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
        <div className="md:col-span-2">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-3 text-theme-primary dark:text-theme-primary-dark">Robert Fernandez</h1>
          <h2 className="text-xl md:text-2xl font-semibold mb-4 text-theme-accent dark:text-theme-accent-dark">About Me</h2>
          <p className="mb-3 text-base md:text-lg text-theme-secondary dark:text-theme-secondary-dark leading-relaxed">
            I’m a passionate developer with expertise in SFML and Love2D, constantly exploring new ways to bring my ideas to life through code and design. Whether it’s creating immersive games or building digital art, I strive to blend creativity and functionality in everything I do.
          </p>
          <p className="mb-3 text-base md:text-lg text-theme-secondary dark:text-theme-secondary-dark leading-relaxed">
            Beyond the screen, I embrace adventure in real life as well—I’m a private pilot in training, a certified scuba diver, an avid fisherman, and a hunter. My love for exploration extends into my hobbies, which include playing adventure, survival, and horror games.
          </p>

          {/* Featured Work Card inserted here so it appears directly after the intro */}
          <div className="mt-4 grid grid-cols-1 gap-6">
            <div className="p-6 bg-theme-card dark:bg-theme-card-dark rounded-xl shadow-lg flex flex-col justify-between transition-colors duration-300">
              <div>
                <h3 className="text-xl font-bold mb-2 text-theme-primary dark:text-theme-primary-dark">AviationPro</h3>
                <p className="mb-4 text-theme-secondary dark:text-theme-secondary-dark">A professional-grade flight planning suite for pilots and enthusiasts.</p>
              </div>
              <a href="/aviationpro" className="inline-block px-4 py-2 bg-theme-action dark:bg-theme-action-dark text-white rounded hover:bg-theme-secondary dark:hover:bg-theme-secondary-dark transition-colors duration-300">View AviationPro</a>
            </div>
          </div>
        </div>

        {/* Right column: thumbnails / highlights */}
        <aside className="md:col-span-1 flex flex-col gap-4">
          <figure className="overflow-hidden rounded-lg border border-theme-accent dark:border-theme-accent-dark shadow-sm">
            <img loading="lazy" decoding="async" src="/car-art.jpg" alt="Car Art" className="w-full h-44 object-cover" />
          </figure>

          <figure className="overflow-hidden rounded-lg border border-theme-accent dark:border-theme-accent-dark shadow-sm">
            <img loading="lazy" decoding="async" src="/love2d_music_player.png" alt="Music Player" className="w-full h-44 object-cover" />
          </figure>

          <figure className="overflow-hidden rounded-lg border border-theme-accent dark:border-theme-accent-dark shadow-sm">
            <img loading="lazy" decoding="async" src="/comic_book_reader_sfml.png" alt="Comic Reader" className="w-full h-44 object-cover" />
          </figure>
        </aside>
      </div>

  {/* Featured Work Grid removed — AviationPro card is now placed under the intro to avoid duplication. */}

      {/* Timeline Section */}
      <div className="mt-16">
        <h2 className="text-3xl font-bold mb-8 text-theme-primary dark:text-theme-primary-dark text-center">My Journey</h2>
        <ol className="relative border-l-4 border-theme-accent dark:border-theme-accent-dark max-w-2xl mx-auto">
          {/* Timeline Item */}
          <li className="mb-10 ml-6 animate-fade-in-up">
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
            </span>
            <h3 className="flex items-center mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Started Coding <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">2012</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Began my journey into programming, exploring C++, game engines, and creative coding.</p>
          </li>
          

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.102s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14v2H3zM3 7h14v10H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Forest Hill Community High School — Digital Design (Entered) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Aug 2015</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Began Digital Design studies at Forest Hill Community High School — focused on graphic and multimedia design fundamentals.</p>
          </li>

          
          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.105s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 2c1.1 0 2 .9 2 2v1h3v2a6 6 0 01-6 6 6 6 0 01-6-6V5h3V4c0-1.1.9-2 2-2zm6 16v2H6v-2a4 4 0 014-4h4a4 4 0 014 4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">ACE Mentor Program — 2nd Place <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">May 2018</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Issued by ACE Mentor Program — 2nd Place in the ACE (Architect, Construction & Engineering) Mentor Program.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.108s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Senior Awards Night — Forest Hill Community High School <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">May 2018</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Recognized at Senior Awards Night — issued by Forest Hill Community High School.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.103s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Forest Hill Community High School — Left / Senior Finish <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">May 2019</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed senior year and left Forest Hill Community High School in May 2019.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.11s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a1 1 0 00-1 1v2H7a1 1 0 000 2h2v2a1 1 0 001 1h0a1 1 0 001-1V7h2a1 1 0 000-2h-2V3a1 1 0 00-1-1z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Entered Florida Atlantic University <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Aug 2019</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Started studies at FAU, pursuing interests in software, hardware, and applied computing.</p>
          </li>

          

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.116s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M12 2a1 1 0 00-1 1v2H9a1 1 0 000 2h2v2a1 1 0 001 1h0a1 1 0 001-1V7h2a1 1 0 000-2h-2V3a1 1 0 00-1-1z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">COP3014 — Programming Concepts & Logic <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Feb 24 2020</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed COP3014 coursework focusing on programming fundamentals and problem solving.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.1165s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14v2H3zM3 7h14v10H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">CDA3201 — Intro to Logic Design (Arduino Nano Microprocessor) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jul 24 2020</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed introductory logic design coursework using Arduino Nano microprocessors and basic digital circuits.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.117s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">CDA3331C — Intro to Microprocessors (MSP430 TI) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Aug 16 2020</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Covered MSP430 microcontroller programming, MIPS assembly basics, and embedded C for microprocessor applications.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.115s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4zM4 8h12v8H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">FAU Associations — Aerospace Experimental & Google Developer Student Club <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">2020–2021</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Active member of FAU Aerospace Experimental Association and FAU GDSC — collaborated on projects and learning events.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.117s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5h14v2H3zM3 9h14v10H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">COP3813 — Intro to Internet Computing (Web Dev: HTML/CSS/JS) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jan 24 2021</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Introduced to web development concepts including HTML, CSS, and JavaScript through COP3813.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.118s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4zM4 8h12v8H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">COP4045 — Python Programming <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 5 2021</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed COP4045 focusing on Python programming and applied scripting techniques.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M5 4h10v2H5zM5 8h10v8H5z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Left Florida Atlantic University <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 2022</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed coursework and transitioned to focus on professional projects and independent development.</p>
          </li>
          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.11s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M2 2h16v2H2zM4 6h12v10H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Learned SFML & Love2D <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jan 2023</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Studied and practiced SFML and Love2D for game development, which informed later game prototypes and jams.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.111s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C7 2 6 4 6 6s1 4 4 4 4-2 4-4-1-4-4-4zM4 18c0-3 4-5 8-5s8 2 8 5v1H4v-1z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Started SSI Open Water Diver Course <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Feb 13 2023</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Began SSI Open Water Diver training to pursue recreational scuba certification.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.11s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4zM4 8h12v8H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Android Watch Face Studio — First Watch Face <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jun 8 2023</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Created a first watch face using Android Watch Face Studio — a minimalist, readable design for wearable screens.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.113s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Graduate SSI Open Water Diver & Enriched Air Nitrox Level 2 <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 31 2023</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed SSI Open Water Diver certification and Enriched Air Nitrox Level 2 training.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.115s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12l18-8-4 8 4 8-18-8z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">First Discovery Flight for Private Pilot <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Feb 4 2024</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed first discovery flight towards private pilot training — an important step into aviation.</p>
          </li>
          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.112s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12l18-8-4 8 4 8-18-8z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">First Solo Flight — Student Pilot (Private Pilot Course) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 21 2024</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed my first solo flight as part of private pilot training — milestone flight toward certification.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.1115s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M12 2C9 2 8 4 8 6s1 4 4 4 4-2 4-4-1-4-4-4zM4 18c0-3 4-5 8-5s8 2 8 5v1H4v-1z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Christmas Horror Game — Love2D <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 26 2024</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Released a short horror-themed Love2D game built over the holiday — jam entry and experimental prototype.</p>
          </li>
          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3h12v2H4zM4 7h12v2H4zM4 11h12v6H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">XMB Wave Menu — HTML/CSS/JS (PlayStation XMB style) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Dec 29 2024</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Built a web-based PlayStation XMB-style home page and shortcut launcher with familiar wave menu navigation.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.12s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 5h14v2H3zM3 9h14v10H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Desktop Environment — Web-based OS-like UI <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jan 23 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Created an all-in-one web desktop environment that mimics an operating system with app shortcuts and windowed interfaces.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.125s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14v2H3zM3 7h14v2H3zM3 11h14v6H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Unity - Car Simulation Test <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Apr 8 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Built a car simulation prototype in Unity to test physics, steering, and suspension behaviors for game prototypes.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.125s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M3 3h14v2H3zM3 7h14v2H3zM3 11h14v6H3z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">PSP Development — Minimalist PSPSDK (Tutorial) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jul 22 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Followed a PSP PSPSDK tutorial; added custom font colors, 'Hello world', polygon drawing, a 3D cube, and PSP debug controls mapping.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.13s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 3h12v2H4zM4 7h12v2H4zM4 11h12v6H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">PS1 Development — MIPS/Assembly (Pikuma Course) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jul 25 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed Pikuma's PS1 development course covering Changing Background Color, Triangle & Quads, and Gouraud shading using MIPS-Assembly concepts.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.14s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M2 12l18-8-4 8 4 8-18-8z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Towered Solos Finished — FT Pierce (Full stop & taxi-backs) <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Jul 30 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Completed towered solo operations at Ft Pierce — full-stop landings and taxi-back procedures.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M5 3v6a7 7 0 007 7h3v1H9a8 8 0 01-8-8V3h4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Hopeless Catch — Fishing Horror Game Jam <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Aug 28 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Released the Hopeless Catch demo for the Fishing Horror Game Jam — my first game jam; playable build, screenshots, and dev notes. Play it on <a href="https://mungdaal321.itch.io/hopeless-catch" target="_blank" rel="noopener noreferrer" className="text-theme-accent dark:text-theme-accent-dark font-medium underline" aria-label="Hopeless Catch on itch.io">itch.io</a>.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M4 4h12v2H4zM4 9h12v2H4zM4 14h8v2H4z"/></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">Defold Music Player <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Sep 3 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Released a Defold-based music player demo showcasing UI and playback features.</p>
          </li>

          <li className="mb-10 ml-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="absolute flex items-center justify-center w-8 h-8 bg-theme-action dark:bg-theme-action-dark rounded-full -left-4 ring-4 ring-theme-bg dark:ring-theme-bg-dark">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm1 12H9v-2h2v2zm0-4H9V6h2v4z" /></svg>
            </span>
            <h3 className="mb-1 text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">AviationPro Launch <span className="bg-theme-accent dark:bg-theme-accent-dark text-white text-xs font-medium mr-2 px-2.5 py-0.5 rounded ml-2">Sep 7 2025</span></h3>
            <p className="mb-2 text-theme-secondary dark:text-theme-secondary-dark">Released AviationPro on Sept 7, 2025 — a professional-grade flight planning suite for pilots and enthusiasts.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
