import { Link } from "react-router-dom";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  HeadphonesIcon,
  Building2,
  ArrowRight,
  Users
} from "lucide-react";
import SEO from "../components/SEO";
import PageHeader from "../components/PageHeader";
import DualContactForm from "../components/DualContactForm";
import { contactInfo } from "../data/siteData";

const heroImage = "/contact.png";

export default function Contact() {
  return (
    <>
      <SEO
        title="Contact — Farmer Helpdesk & Factory Enquiries"
        description="Get in touch: farmer support requests, general product enquiries, distributor partnerships. Cooperative office address, phone, email, and working hours for Sanjivani Agriculture Division, Buldhana, Maharashtra."
        keywords="sanjivani sugar factory address buldhana, farmer helpdesk sugar factory contact, juice to ethanol distillery enquiry, sugar cooperative maharashtra email"
        path="/contact"
      />

      <PageHeader
        eyebrow="Contact & Farmer Helpdesk"
        title="One factory. Two teams. Every question answered."
        lead="Choose the track that fits — sales & partnership, or our Cane Development helpdesk. Average response under 48 hours."
        backgroundImage={heroImage}
        tone="neutral"
      />

      <section className="relative py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div id="general" className="mb-20 md:mb-24">
            <DualContactForm />
          </div>

          <div className="grid lg:grid-cols-5 gap-5 md:gap-7">
            <div className="lg:col-span-3 rounded-[32px] md:rounded-[36px] overflow-hidden border border-neutral-dark/8 bg-neutral-light aspect-[16/10] md:aspect-auto md:min-h-[480px]">
              <iframe
                title="Sanjivani Sugar Factory Location"
                src={contactInfo.mapEmbed}
                className="w-full h-full border-0 min-h-[360px] md:min-h-[480px] grayscale contrast-[1.05] hover:grayscale-0 transition-all duration-500"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            <div className="lg:col-span-2 space-y-4 md:space-y-5">
              <ContactCard
                Icon={Building2}
                tone="cane"
                eyebrow="Registered Factory"
                title={contactInfo.factory.name}
                rows={[
                  ["Address", contactInfo.factory.address],
                  ["Phone", contactInfo.factory.phone.join(" · ")],
                  ["Email", contactInfo.factory.email[0]]
                ]}
              />
              <ContactCard
                Icon={HeadphonesIcon}
                tone="harvest"
                eyebrow="Farmer Helpdesk"
                title={contactInfo.caneDevelopmentOffice.name}
                rows={[
                  ["Officer", contactInfo.caneDevelopmentOffice.officer],
                  ["Phone", contactInfo.caneDevelopmentOffice.phone[0]],
                  ["Email", contactInfo.caneDevelopmentOffice.email[0]]
                ]}
              />
              <ContactCard
                Icon={Clock}
                tone="neutral"
                eyebrow="Working Hours"
                title="Seasonal & year-round operations"
                rows={[
                  ["Crushing Season", "Nov – Feb · 24×7"],
                  ["Cane Dev Office", "Mon – Sat · 9 AM – 6 PM"],
                  ["Emergency", contactInfo.factory.phone[1]]
                ]}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="relative pb-20 md:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-[40px] md:rounded-[48px] overflow-hidden bg-gradient-to-br from-cane-green-dark via-cane-green to-cane-green-dark text-neutral-light p-8 md:p-14 lg:p-18">
            <div
              aria-hidden
              className="absolute -top-20 -right-20 w-[420px] h-[420px] rounded-full bg-harvest-gold/20 blur-3xl"
            />
            <div className="relative grid lg:grid-cols-5 gap-10 items-center">
              <div className="lg:col-span-3">
                <p className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/10 border border-white/15 text-[11px] font-semibold uppercase tracking-[0.2em] mb-6">
                  <Users size={13} />
                  Walk-ins Welcome
                </p>
                <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold leading-[1.05] tracking-tight max-w-3xl">
                  Prefer a visit? Doors open to every farmer-member.
                </h2>
                <p className="mt-5 text-sm md:text-base text-white/80 leading-relaxed max-w-xl">
                  Head office is on factory premises — follow the 'Sugar Receipt Yard' gate to the
                  admin building. Cane Development desk on ground floor, no appointment needed.
                  Guest rooms available for outstation delegates.
                </p>
              </div>
              <div className="lg:col-span-2 md:pl-6 space-y-3.5">
                <div className="rounded-[24px] bg-white/[0.07] border border-white/10 backdrop-blur p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-white/55 mb-3">
                    Directions
                  </p>
                  <ul className="space-y-2.5">
                    {[
                      ["Airport", "Nagpur 155km · Aurangabad 170km"],
                      ["Railhead", "Jalamb Jn · 18km · 25min"],
                      ["Highway", "NH-53 (Nagpur-Surat) · 12km"]
                    ].map(([k, v]) => (
                      <li
                        key={k}
                        className="flex items-start justify-between gap-4 pb-2.5 border-b border-white/10 last:border-0 last:pb-0"
                      >
                        <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55 mt-0.5">
                          {k}
                        </p>
                        <p className="text-sm font-medium text-right">{v}</p>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={`tel:${contactInfo.factory.phone[0].replace(/\s/g, "")}`}
                    className="group inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-harvest-gold hover:bg-harvest-gold-light text-neutral-dark text-sm font-semibold transition-colors"
                  >
                    <Phone size={14} />
                    Call Factory
                  </a>
                  <Link
                    to="/cane-development"
                    className="inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-white/10 border border-white/15 hover:bg-white/15 text-white text-sm font-semibold transition-colors"
                  >
                    <MapPin size={14} />
                    Farmer Programs
                    <ArrowRight size={12} />
                  </Link>
                </div>
                <div className="rounded-[24px] bg-white/[0.05] border border-white/10 p-4 flex items-start gap-3">
                  <Mail size={15} className="mt-0.5 text-white/60 shrink-0" />
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-white/55 mb-1">
                      General Correspondence
                    </p>
                    <p className="text-sm text-white/85">{contactInfo.factory.email[0]}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function ContactCard({ Icon, eyebrow, title, rows, tone = "neutral" }) {
  const tones = {
    cane: {
      ring: "bg-cane-green/10 text-cane-green-dark border-cane-green/15",
      tag: "text-cane-green-dark"
    },
    harvest: {
      ring: "bg-harvest-gold/15 text-harvest-gold-dark border-harvest-gold/20",
      tag: "text-harvest-gold-dark"
    },
    neutral: {
      ring: "bg-neutral-dark/[0.06] text-neutral-dark border-neutral-dark/10",
      tag: "text-neutral-mid"
    }
  }[tone];

  return (
    <div className="relative bg-white rounded-[28px] md:rounded-[32px] border border-neutral-dark/6 p-6 md:p-7 overflow-hidden">
      <div
        aria-hidden
        className="absolute -top-16 -right-16 w-44 h-44 rounded-full bg-neutral-dark/[0.03]"
      />
      <div className="relative">
        <div className="flex items-start gap-4 mb-5">
          <span className={`w-12 h-12 md:w-13 md:h-13 rounded-2xl border flex items-center justify-center shrink-0 ${tones.ring}`}>
            <Icon size={20} strokeWidth={2} />
          </span>
          <div className="flex-1 pt-1">
            <p className={`text-[11px] font-semibold uppercase tracking-[0.18em] mb-1.5 ${tones.tag}`}>
              {eyebrow}
            </p>
            <h3 className="font-display text-xl md:text-2xl font-semibold text-neutral-dark leading-tight tracking-tight">
              {title}
            </h3>
          </div>
        </div>
        <dl className="space-y-3">
          {rows.map(([k, v]) => (
            <div
              key={k}
              className="flex items-start justify-between gap-4 py-2.5 border-b border-neutral-dark/5 last:border-0 last:pb-0"
            >
              <dt className="text-[11px] font-semibold uppercase tracking-[0.14em] text-neutral-mid mt-0.5 shrink-0">
                {k}
              </dt>
              <dd className="text-sm md:text-[14px] font-medium text-neutral-dark leading-relaxed text-right">
                {v}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
