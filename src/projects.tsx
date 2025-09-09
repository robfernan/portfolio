import React, { useState, useEffect } from 'react';

type Group = { title: string; items: Array<{ title: string; description?: string; link?: string }> };

const groups: Group[] = [
  {
    title: 'Web — HTML / CSS / JavaScript',
    items: [
      { title: 'XMB Wave Menu [Home Page]' },
      { title: 'FL Window & Door Maintenance Landing Page', description: 'Home / Services / Images' },
      { title: 'MG Gutters Landing Page' },
      { title: 'Personal Website', link: 'https://robertfernandez.dev/', description: 'Home / Coding Projects / Art / Aviation' },
      { title: 'Restaurant Website' },
      { title: 'Landing Page' },
      { title: 'Aviation Flight Planner' },
      { title: 'Music Player with Themes' },
      { title: 'Winamp Clone with Themes' },
      { title: 'Desktop Environment Simulation' },
      { title: 'Business Card Builder' },
      { title: 'Resume Generator' },
      { title: 'Invoice Generator' },
      { title: 'PDF Editor' },
      { title: 'Comic Reader' },
      { title: 'Game Templates: Platformer / Space Invader / Crossy Road' },
      { title: 'Free Code Camp / School Projects: calculator, tic tac toe, survey, technical documentation, landing page, menu' }
    ]
  },
  {
    title: 'Web Development with Bolt & Copilot',
    items: [
      { title: 'AviationPro — Professional Flight Planning Suite', description: 'React, TypeScript, Tailwind — Flight Planner | CX-6 | Weather | Performance | Navigation | Flight Logs' },
      { title: 'PSP Digital Comics (Bolt only so far)' },
      { title: 'PS3 XMB Layout with Animated Background (Bolt only so far)' },
      { title: 'Portfolio (two different style sites, Bolt only so far)' }
    ]
  },
  {
    title: 'Web Development with Lovable & Copilot',
    items: [
      { title: 'Music Player with Vinyl | Cassette | MiniDisc theme' },
      { title: 'Portfolio Modernized' }
    ]
  },
  {
    title: 'SFML with C++',
    items: [
      { title: 'Comic Reader (Functional Project)', description: 'Includes page navigation, zoom, and drag support.' },
      { title: 'Digital Comics Recreation (UI Project)', description: 'Browse Collection, Recently Added, Unread, Bookmarks, Options.' },
      { title: 'Music Player', description: 'Audio playback with playlist and themed UI.' },
      { title: 'XMB Menu (Wave Animation / Themes)' },
      { title: 'XMB Launcher (earlier version)' },
      { title: 'SFML / OpenGL experiments: rotating pyramid, triangle rendering, fluid simulation, wave animation' }
    ]
  },
  {
    title: 'Love2D with Lua',
    items: [
      { title: 'Note Editor (line numbering and text entry)' },
      { title: 'Music Player (Love2D)' },
      { title: 'Comic Reader (Two-page display)' },
      { title: 'Key Logger (input logging)' },
      { title: 'Christmas Top-Down Horror Game' },
      { title: 'Aviation Projects: Flight Log, Weather, Weight & Balance' },
      { title: 'Platformer Game' },
      { title: 'PSP Clock Screen Saver' },
      { title: 'Solitaire Style' },
      { title: 'Winamp Clone' },
      { title: 'Jet Pack Joy Ride Clone' },
      { title: 'Hopeless Catch (itch.io)', description: 'A peaceful fishing adventure with a subtle secret', link: 'https://mungdaal321.itch.io/hopeless-catch' }
    ]
  },
  {
    title: 'Unity / Godot / Defold',
    items: [
      { title: 'Unity: Music Player, Car Game' },
      { title: 'Godot: Music Player' },
      { title: 'Defold: Music Player (cross-platform)' }
    ]
  },
  {
    title: 'Tools, Embedded & Platform Experiments',
    items: [
      { title: 'Android Watch Face Studio (First Watch Face | June 8, 2023)' },
      { title: 'PSP Development with Minimalist SDK (Hello World, color strings)' },
      { title: 'PS1 MIPS Assembly tutorials (background, triangles, gouraud shading)' },
      { title: 'PS2 Bare Metal with C (early experiments)' },
      { title: 'Gameboy Assembly (loading screen)' }
    ]
  },
  {
    title: 'Graphic Design / Print Work',
    items: [
      { title: 'Invoices' },
      { title: 'Business Cards' },
      { title: 'Logos' },
      { title: 'Shirts' },
      { title: 'Menus' },
      { title: 'Business contracts' }
    ]
  }
];

function slugify(title: string) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function Projects() {
  const [openGroups, setOpenGroups] = useState(() => new Set(groups.map(g => g.title)));

  // Map exact project titles to existing filenames in public/assets/projects
  const filenameMap: Record<string, string> = {
    'XMB Wave Menu [Home Page]': 'home_page_xmb_launcher.png',
    'FL Window & Door Maintenance Landing Page': 'flwindow.png',
    'Personal Website': 'personal_website.png',
    'Music Player with Themes': 'music_player_web.png',
    'Winamp Clone with Themes': 'winamp_clone_web.png',
    'Desktop Environment Simulation': 'desktop_simulation.png',
    'Resume Generator': 'resume_generator.png',
    'Comic Reader': 'comic_book_reader_sfml.png',
    'Comic Reader (Functional Project)': 'comic_book_reader_sfml.png',
    'Digital Comics Recreation (UI Project)': 'digital_comics_recreation_sfml.png',
    'XMB Launcher (earlier version)': 'xmb_launcher_sfml.png',
    'XMB Menu (Wave Animation / Themes)': 'xmb_menu_wave.png',
    'Note Editor (line numbering and text entry)': 'note_editor_love2d.png',
    'Music Player': 'music_player_sfml.png',
    'Music Player (Love2D)': 'music_player_love2d.png',
    'Key Logger (input logging)': 'key_logger_love2d.png',
    'Christmas Top-Down Horror Game': 'christmas_topdown_horror_game.png',
    'PSP Clock Screen Saver': 'psp_clock_love2d.png',
    'Unity: Music Player, Car Game': 'music_player_unity.png',
    'Godot: Music Player': 'music_player_godot.png',
    'Defold: Music Player (cross-platform)': 'music_player_defold.png',
    'Android Watch Face Studio (First Watch Face | June 8, 2023)': 'watch_face_android.png',
    'Website Homepage': 'website_homepage.jpg'
  };

  function ProjectThumb({ mappedFilename, slug, alt }: { mappedFilename?: string; slug: string; alt: string }) {
    const placeholder = '/images/placeholder.svg';
    const [src, setSrc] = useState<string>(placeholder);

    useEffect(() => {
      let canceled = false;
      const candidates: string[] = [];
      if (mappedFilename) candidates.push(`/assets/projects/${mappedFilename}`);
      // try png then jpg for slug-based filenames
      candidates.push(`/assets/projects/${slug}.png`, `/assets/projects/${slug}.jpg`);

      (async () => {
        for (const c of candidates) {
          // attempt to preload
          try {
            await new Promise<void>((resolve, reject) => {
              const img = new Image();
              img.onload = () => resolve();
              img.onerror = () => reject();
              img.src = c;
            });
            if (!canceled) {
              setSrc(c);
              return;
            }
          } catch {
            // try next candidate
          }
        }
        // none loaded; leave placeholder
      })();

      return () => { canceled = true; };
    }, [mappedFilename, slug]);

    return <img loading="lazy" decoding="async" src={src} alt={alt} className="w-full h-full object-cover bg-theme-card/50" onError={(e) => { (e.currentTarget as HTMLImageElement).src = placeholder; }} />;
  }

  const toggleGroup = (title: string) => {
    setOpenGroups(prev => {
      const s = new Set(prev);
      if (s.has(title)) s.delete(title);
      else s.add(title);
      return s;
    });
  };
  return (
    <div className="max-w-6xl mx-auto py-12 px-4 bg-theme-bg dark:bg-theme-bg-dark transition-colors duration-300">
      <header className="mb-8">
        <h1 className="text-3xl font-bold text-theme-primary dark:text-theme-primary-dark">Projects</h1>
        <p className="text-theme-secondary dark:text-theme-secondary-dark mt-2">A consolidated list of completed, in-progress, and planned projects across web, desktop, and game development.</p>
      </header>

      <section className="mb-8 bg-theme-card dark:bg-theme-card-dark border border-theme-accent dark:border-theme-accent-dark p-4 rounded">
        <h2 className="text-xl font-semibold text-theme-primary dark:text-theme-primary-dark">About</h2>
        <p className="mt-2 text-theme-secondary dark:text-theme-secondary-dark">I blend systems programming, interactive design, and web development across many platforms: SFML/C++, Love2D/Lua, React/TypeScript, and experimental engine work. Below are representative projects grouped by platform and area. Thumbnails shown are inferred from <code>public/assets/coding/</code> — drop images with matching slugs to populate them.</p>
      </section>

      {groups.map(group => (
        <section key={group.title} className="mb-8">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold text-theme-primary dark:text-theme-primary-dark">{group.title}</h3>
            <button
              type="button"
              onClick={() => toggleGroup(group.title)}
              aria-expanded={openGroups.has(group.title)}
              className="ml-4 px-2 py-1 rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark text-theme-secondary dark:text-theme-secondary-dark"
            >
              {openGroups.has(group.title) ? 'Collapse' : `Expand (${group.items.length})`}
            </button>
          </div>

          {openGroups.has(group.title) && (
            <ul className="project-list mt-3">
              {group.items.map(item => {
                const slug = slugify(item.title);
                // Prefer a mapped filename in public/assets/projects when available
                const mapped = filenameMap[item.title];
                const imgBase = mapped ? `/assets/projects/${mapped.replace(/\.(png|jpg)$/, '')}` : `/assets/projects/${slug}`;
                const imgPathPng = `${imgBase}.png`;
                const imgPathJpg = `${imgBase}.jpg`;
                return (
                  <li key={item.title} className="project-item mb-4 p-3 rounded border border-theme-accent dark:border-theme-accent-dark bg-theme-card dark:bg-theme-card-dark flex items-start gap-4">
                    <div className="project-image flex-shrink-0 w-36 h-24 bg-theme-bg dark:bg-theme-bg-dark rounded overflow-hidden">
                      <ProjectThumb mappedFilename={mapped} slug={slug} alt={item.title} />
                    </div>
                    <div className="project-description text-theme-secondary dark:text-theme-secondary-dark flex-1">
                      <strong className="block text-theme-primary dark:text-theme-primary-dark">{item.title}</strong>
                      {item.description && <span className="block mt-1">{item.description}</span>}
                      {item.link && <a className="inline-block mt-2 text-theme-accent dark:text-theme-accent-dark" href={item.link} target="_blank" rel="noreferrer">Visit</a>}
                    </div>
                  </li>
                );
              })}
            </ul>
          )}
        </section>
      ))}

      <footer className="mt-8 text-theme-secondary dark:text-theme-secondary-dark">© Robert Fernandez</footer>
    </div>
  );
}
