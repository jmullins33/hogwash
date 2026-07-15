import CleanReveal from "./CleanReveal";
import HeroSlideshow from "./HeroSlideshow";
import ImageSlot from "./ImageSlot";
import QuoteForm from "./QuoteForm";
import SurfaceTabs from "./SurfaceTabs";

const phoneDisplay = "562-324-6588";
const phoneHref = "tel:+15623246588";
const facebookUrl = "https://www.facebook.com/hogwashexteriorcleaning";
const facebookEmbedUrl = `https://www.facebook.com/plugins/page.php?href=${encodeURIComponent(
  facebookUrl
)}&tabs=timeline&width=500&height=620&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true`;

const trustChips = ["Owner-operated", "Free quotes", "Fully equipped rig"];

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

const steps = [
  ["01", "Reach out", "Call, text, or send the form. Share a couple details about what needs cleaning."],
  ["02", "Quick quote", "We price most jobs right over the phone, or after a fast look. No pressure, ever."],
  ["03", "We show up", "The owner arrives with the right gear and pressure for your surfaces."],
  ["04", "See the difference", "Grime gone, curb appeal back. You'll notice it from the street."],
];

const stats = [
  ["1", "Owner on every job. The person you call is the person who shows up."],
  ["100%", "Free quotes, zero pressure (on you, anyway)."],
  ["0", "Grime left behind."],
];

export default function Home() {
  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to main content
      </a>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Hogwash Exterior Cleaning home">
          <ImageSlot
            className="brand__logo"
            src="/hogwash/logo.jpg"
            alt="Hogwash logo"
            label="Logo"
            rounded
            priority
          />
          <span>Hogwash</span>
        </a>
        <nav className="nav" aria-label="Primary navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#quote">Quote</a>
        </nav>
        <div className="site-header__actions">
          <a className="call-link" href={phoneHref} aria-label={`Call or text Hogwash at ${phoneDisplay}`}>
            {phoneDisplay}
          </a>
          <a className="button button--dark button--sm" href="#quote">
            Free quote
          </a>
        </div>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero-grand" id="top" aria-labelledby="hero-title">
          <HeroSlideshow />
          <div className="hero-grand__content">
            <p className="eyebrow eyebrow--light">
              Professional exterior cleaning for homes, driveways, decks &amp; rigs
            </p>
            <h1 id="hero-title">Bring back the curb appeal.</h1>
            <p className="hero-grand__lede">
              Hogwash strips away years of dirt, algae, and grime from the
              surfaces people notice first, using professional equipment and the
              right pressure for every surface. You&apos;ll see the difference
              from the street.
            </p>
            <div className="hero__actions hero__actions--center">
              <a className="button button--dark" href={phoneHref}>
                Call or text for a free quote
              </a>
              <a className="button button--frost" href="#quote">
                Request a quote online
              </a>
            </div>
            <ul className="trust-chips" aria-label="Why homeowners choose Hogwash">
              {trustChips.map((chip) => (
                <li key={chip}>{chip}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="intro" aria-labelledby="intro-title">
          <div className="intro__copy">
            <p className="eyebrow">Local &amp; owner-operated</p>
            <h2 id="intro-title">Grime costs more than a wash does.</h2>
            <p>
              Dirt, mold, and algae don&apos;t just look bad. Left alone, they
              slowly break down concrete, wood, and siding. A good wash protects
              what you&apos;ve put into your property and saves you from repairs
              down the road. Drag the slider below and see for yourself.
            </p>
          </div>
          <ImageSlot
            className="intro__photo"
            src="/hogwash/intro.jpg"
            alt="Close-up of a driveway being pressure washed, dirt lifting away"
            label="Action photo"
            rounded
          />
        </section>

        <section className="reveal-section" aria-label="Interactive dirty to clean reveal">
          <CleanReveal />
        </section>

        <section className="image-band" aria-label="Hogwash brand statement">
          <ImageSlot
            className="image-band__bg"
            src="/hogwash/band.jpg"
            alt=""
            label="Full-width photo"
          />
          <div className="image-band__statement">
            <p>A cleaner driveway. A brighter deck. A property that looks looked after.</p>
          </div>
        </section>

        <section className="services" id="services" aria-labelledby="services-title">
          <div className="services__heading">
            <div>
              <p className="eyebrow">Services</p>
              <h2 id="services-title">The clean-up list.</h2>
            </div>
            <p>
              Residential and light commercial washing for every surface that
              takes a beating from weather, algae, and everyday traffic.
            </p>
          </div>
          <ul className="service-grid" aria-label="Exterior cleaning services">
            {services.map((service) => (
              <li className="service-card" key={service}>
                <span className="service-card__label">{service}</span>
                <span className="service-card__arrow" aria-hidden="true">
                  &rarr;
                </span>
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

        <section className="process" id="process" aria-labelledby="process-title">
          <div className="process__top">
            <p className="eyebrow">How it works</p>
            <h2 id="process-title">Simple from hello to spotless.</h2>
          </div>
          <ol className="process-grid" aria-label="How Hogwash works">
            {steps.map(([num, title, text]) => (
              <li className="process-card" key={num}>
                <span className="process-card__num">{num}</span>
                <h3>{title}</h3>
                <p>{text}</p>
              </li>
            ))}
          </ol>
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
              Fresh before and afters, availability notes, and updates straight
              from the Hogwash Facebook page. The work speaks for itself.
            </p>
            <a className="button button--dark" href={facebookUrl} target="_blank" rel="noreferrer">
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
        <div className="footer__brand">
          <ImageSlot
            className="footer__logo"
            src="/hogwash/logo.jpg"
            alt="Hogwash logo"
            label="Logo"
            rounded
          />
          <div>
            <p className="footer__name">Hogwash Exterior Cleaning</p>
            <p className="footer__tag">Serving local homes and businesses.</p>
          </div>
        </div>
        <nav className="footer__nav" aria-label="Footer navigation">
          <a href="#services">Services</a>
          <a href="#process">How it works</a>
          <a href="#quote">Quote</a>
        </nav>
        <a className="footer__phone" href={phoneHref} aria-label={`Call or text Hogwash at ${phoneDisplay}`}>
          {phoneDisplay}
        </a>
      </footer>
    </>
  );
}
