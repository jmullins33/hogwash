import Image from "next/image";
import CleanReveal from "./CleanReveal";
import HeroSlideshow from "./HeroSlideshow";
import QuoteForm from "./QuoteForm";
import SurfaceTabs from "./SurfaceTabs";

const phoneDisplay = "562-324-6588";
const phoneHref = "tel:+15623246588";
const facebookUrl = "https://www.facebook.com/hogwashexteriorcleaning";
const facebookEmbedUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookUrl
)}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

const services = [
  "Driveways",
  "Sidewalks",
  "Patios",
  "Decks",
  "House washing",
  "Fences",
  "Containers",
  "RVs + trailers",
];

const stats = [
  ["1", "Owner on every job — the person you call is the person who shows up"],
  ["100%", "Free quotes, zero pressure (on you, anyway)"],
  ["0", "Grime left behind"],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hogwash Exterior Cleaning home">
          <Image
            className="brand__logo"
            src="/hogwash/logo.jpg"
            alt=""
            width={76}
            height={76}
            priority
          />
          <span>Hogwash</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#quote">Quote</a>
        </nav>
        <a className="call-link" href={phoneHref} aria-label={`Call or text Hogwash at ${phoneDisplay}`}>
          {phoneDisplay}
        </a>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero-grand" id="top" aria-labelledby="hero-title">
          <HeroSlideshow />
          <div className="hero-grand__content">
            <Image
              className="hero-grand__logo"
              src="/hogwash/logo.jpg"
              alt=""
              width={148}
              height={148}
              priority
            />
            <p className="eyebrow eyebrow--light">
              Professional exterior cleaning — homes, driveways, decks &amp; rigs
            </p>
            <h1 id="hero-title">Bring back the curb appeal.</h1>
            <p className="hero-grand__lede">
              Hogwash strips away years of dirt, algae, and grime from the
              surfaces people notice first — with professional equipment and
              the right pressure for every surface. You&apos;ll see the
              difference from the street.
            </p>
            <div className="hero__actions hero__actions--center">
              <a className="button button--dark" href={phoneHref}>
                Call or text for a free quote
              </a>
              <a className="button button--frost" href="#quote">
                Request a quote online
              </a>
            </div>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div>
            <p className="eyebrow">Local &amp; owner-operated</p>
            <h2 id="intro-title">Grime costs more than a wash does.</h2>
          </div>
          <p>
            Dirt, mold, and algae don&apos;t just look bad — left alone, they
            slowly break down concrete, wood, and siding. A professional wash
            prevents costly repairs, protects what you&apos;ve invested in your
            property, and makes the whole place feel cared for again. Drag the
            slider below and see for yourself.
          </p>
        </section>

        <section className="reveal-section" aria-label="Interactive dirty to clean reveal">
          <CleanReveal />
        </section>

        <section className="image-band" aria-label="Hogwash brand statement">
          <div className="image-band__statement">
            <Image
              className="image-band__logo"
              src="/hogwash/logo.jpg"
              alt=""
              width={220}
              height={220}
            />
            <p>
              A cleaner driveway. A brighter deck. A property that looks looked after.
            </p>
          </div>
        </section>

      <section className="services" id="services" aria-labelledby="services-title">
        <p className="eyebrow">Services</p>
        <div className="services__heading">
          <h2 id="services-title">The clean-up list.</h2>
          <p>
              Residential and light commercial washing for every surface that
              takes a beating from weather, algae, and everyday traffic.
            </p>
          </div>
          <ul className="service-grid" aria-label="Exterior cleaning services">
            {services.map((service) => (
              <li className="service-card" key={service}>
                <span>{service}</span>
            </li>
          ))}
        </ul>
      </section>

        <section className="surface-fit" aria-labelledby="surface-fit-title">
          <div className="surface-fit__top">
            <p className="eyebrow">The right pressure for every surface</p>
            <h2 id="surface-fit-title">Power where it helps. Care where it counts.</h2>
          </div>
          <SurfaceTabs />
          <dl className="stats-band" aria-label="Hogwash service highlights">
            {stats.map(([value, label]) => (
              <div key={label}>
                <dt>{value}</dt>
                <dd>{label}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="quote" id="quote" aria-labelledby="quote-title">
          <div className="quote__copy">
            <p className="eyebrow">Free quote</p>
            <h2 id="quote-title">Tell us what&apos;s dirty. We&apos;ll handle the rest.</h2>
            <p>
              Call or text and we can usually price it right over the phone.
              Prefer to type? Leave a few details below and Hogwash will follow
              up with pricing and timing.
            </p>
            <a className="quote__phone" href={phoneHref} aria-label={`Call or text Hogwash at ${phoneDisplay}`}>
              {phoneDisplay}
            </a>
          </div>
          <QuoteForm />
        </section>

        <section className="facebook-section" aria-labelledby="facebook-title">
          <div className="facebook-section__copy">
            <p className="eyebrow">Follow the work</p>
            <h2 id="facebook-title">The proof is on the page.</h2>
            <p>
              Fresh before-and-afters, availability notes, and updates straight
              from the Hogwash Facebook page — the work speaks for itself.
            </p>
            <a className="button button--light" href={facebookUrl} target="_blank" rel="noreferrer">
              Open Facebook
            </a>
          </div>
          <div className="facebook-embed">
            <iframe
              title="Hogwash Exterior Cleaning Facebook page"
              src={facebookEmbedUrl}
              width="500"
              height="620"
              style={{ border: "none", overflow: "hidden" }}
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
            />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div>
          <Image
            className="footer__logo"
            src="/hogwash/logo.jpg"
            alt=""
            width={92}
            height={92}
          />
          <p>Hogwash Exterior Cleaning</p>
        </div>
        <p>Serving local homes and businesses.</p>
        <a href={phoneHref} aria-label={`Call or text Hogwash at ${phoneDisplay}`}>
          {phoneDisplay}
        </a>
      </footer>
    </>
  );
}
