import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  Building,
  Package,
  MessageSquare,
  Home,
  MapPin,
  Ruler,
  HeadphonesIcon,
  Send,
  CheckCircle2,
  Leaf
} from "lucide-react";
import { caneInitiatives, supportTypes } from "../data/caneDevelopment";

const tabs = [
  { key: "general", label: "General Enquiry", Icon: MessageSquare, hint: "Buyers, partners, media" },
  { key: "farmer", label: "Farmer Support Request", Icon: HeadphonesIcon, hint: "Seeds, finance, advisory, drones" }
];

export default function DualContactForm() {
  const [tab, setTab] = useState("general");
  const [submitted, setSubmitted] = useState(null);

  const general = useForm({
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      productInterest: "",
      message: ""
    }
  });

  const farmer = useForm({
    defaultValues: {
      name: "",
      village: "",
      taluka: "",
      district: "",
      phone: "",
      landArea: "",
      supportType: "",
      message: ""
    }
  });

  const onSubmitGeneral = (data) => {
    console.log("General Enquiry:", data);
    setSubmitted("general");
  };

  const onSubmitFarmer = (data) => {
    console.log("Farmer Support Request:", data);
    setSubmitted("farmer");
  };

  return (
    <div className="relative bg-white rounded-[32px] md:rounded-[40px] border border-neutral-dark/6 overflow-hidden shadow-[0_30px_80px_-30px_rgba(26,26,26,0.15)]">
      <div className="grid md:grid-cols-5">
        <aside className="relative md:col-span-2 bg-gradient-to-br from-cane-green-dark via-cane-green to-cane-green-dark text-neutral-light p-8 md:p-10 overflow-hidden">
          <div
            aria-hidden
            className="absolute -top-24 -right-24 w-80 h-80 rounded-full bg-harvest-gold/20 blur-3xl"
          />
          <div
            aria-hidden
            className="absolute -bottom-20 -left-12 w-72 h-72 rounded-full bg-cane-green-light/25 blur-3xl"
          />
          <div className="relative">
            <span className="w-12 h-12 rounded-2xl bg-white/10 border border-white/15 flex items-center justify-center mb-6">
              <Leaf size={22} />
            </span>
            <h3 className="font-display text-2xl md:text-3xl font-semibold tracking-tight leading-tight">
              Let's build the next harvest together.
            </h3>
            <p className="mt-3 text-sm md:text-[15px] text-white/80 leading-relaxed">
              Whether you're sourcing sugar or by-products, or a farmer looking for seeds, soil
              advice, or drone spraying — our team responds within 48 hours.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { k: "Farmer Helpdesk", v: "+91 7266 202 450" },
                { k: "Sales & Exports", v: "+91 7266 202 400" },
                { k: "Email", v: "cane.dev@sanjivani-agri.coop" }
              ].map((it) => (
                <div key={it.k} className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mt-0.5">
                    <MapPin size={14} className="opacity-80" />
                  </span>
                  <div>
                    <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/55">
                      {it.k}
                    </p>
                    <p className="text-sm font-medium mt-0.5">{it.v}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-harvest-gold mb-3">
                Cane Development Season
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Crushing season runs November–February. Pre-season planting and advisory camps are
                organized across every taluka in our command area from August onwards.
              </p>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3 p-7 md:p-10 lg:p-12">
          <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-neutral-light border border-neutral-dark/5">
            {tabs.map((t) => {
              const active = tab === t.key;
              return (
                <button
                  key={t.key}
                  type="button"
                  onClick={() => setTab(t.key)}
                  className={`relative flex-1 min-w-[180px] flex items-center gap-2.5 px-4 md:px-5 py-3 rounded-xl text-sm font-semibold transition-colors ${
                    active ? "text-neutral-dark" : "text-neutral-mid hover:text-neutral-dark/80"
                  }`}
                >
                  {active && (
                    <motion.span
                      layoutId="formtab"
                      className="absolute inset-0 rounded-xl bg-white shadow-sm border border-neutral-dark/6"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative flex items-center gap-2">
                    <t.Icon size={15} />
                    <span>{t.label}</span>
                  </span>
                </button>
              );
            })}
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="thanks"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="py-10 md:py-16 text-center max-w-md mx-auto"
              >
                <span className="inline-flex w-16 h-16 rounded-2xl bg-cane-green/10 text-cane-green-dark items-center justify-center mb-5">
                  <CheckCircle2 size={30} strokeWidth={2.2} />
                </span>
                <h4 className="font-display text-2xl md:text-3xl font-semibold text-neutral-dark tracking-tight">
                  Thank you. Message received.
                </h4>
                <p className="mt-3 text-sm md:text-[15px] text-neutral-dark/70 leading-relaxed">
                  {submitted === "farmer"
                    ? "A member of the Cane Development extension team will call you within 48 hours to schedule a visit or consultation."
                    : "Our sales or partnership team will respond with full specifications and pricing within two working days."}
                </p>
                <button
                  onClick={() => {
                    setSubmitted(null);
                    general.reset();
                    farmer.reset();
                  }}
                  className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full border border-neutral-dark/10 text-sm font-medium text-neutral-dark hover:bg-neutral-dark hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : tab === "general" ? (
              <motion.form
                key="general"
                onSubmit={general.handleSubmit(onSubmitGeneral)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4.5"
              >
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <Field
                    label="Full Name"
                    register={general.register("name", { required: true })}
                    Icon={User}
                    placeholder="Your full name"
                    error={general.formState.errors.name}
                  />
                  <Field
                    label="Company / Organization"
                    register={general.register("company")}
                    Icon={Building}
                    placeholder="Company name"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <Field
                    label="Email"
                    type="email"
                    register={general.register("email", { required: true })}
                    Icon={MessageSquare}
                    placeholder="you@company.com"
                    error={general.formState.errors.email}
                  />
                  <Field
                    label="Phone"
                    register={general.register("phone")}
                    Icon={Home}
                    placeholder="+91 XXXXX XXXXX"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-mid mb-2">
                    Product Interest
                  </label>
                  <div className="relative">
                    <Package
                      size={15}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-mid"
                    />
                    <select
                      {...general.register("productInterest")}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-neutral-light border border-neutral-dark/8 text-sm focus:outline-none focus:border-cane-green focus:bg-white transition-colors appearance-none"
                    >
                      <option value="">Select a product or service…</option>
                      <option>Refined Sugar (White / Raw / Brown)</option>
                      <option>Molasses (Industrial / Distillery Grade)</option>
                      <option>Bagasse</option>
                      <option>Press Mud / Organic Manure</option>
                      <option>Ethanol — Fuel or Industrial</option>
                      <option>Partnership & Export</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>
                <Textarea
                  label="Your Message"
                  register={general.register("message", { required: true })}
                  rows={5}
                  placeholder="Tell us about your requirement, volumes, and timelines…"
                  error={general.formState.errors.message}
                />
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-neutral-mid">
                    We respect your privacy. No spam, ever.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cane-green-dark hover:bg-cane-green text-white text-sm font-semibold transition-colors shadow-[0_10px_25px_-10px_rgba(46,125,50,0.5)]"
                  >
                    Send Enquiry
                    <Send size={14} />
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.form
                key="farmer"
                onSubmit={farmer.handleSubmit(onSubmitFarmer)}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.35 }}
                className="space-y-4.5"
              >
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <Field
                    label="Farmer Name"
                    register={farmer.register("name", { required: true })}
                    Icon={User}
                    placeholder="Full name"
                    error={farmer.formState.errors.name}
                  />
                  <Field
                    label="Village"
                    register={farmer.register("village", { required: true })}
                    Icon={MapPin}
                    placeholder="Village name"
                    error={farmer.formState.errors.village}
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <Field
                    label="Taluka"
                    register={farmer.register("taluka")}
                    Icon={MapPin}
                    placeholder="e.g. Sindkhed Raja"
                  />
                  <Field
                    label="District"
                    register={farmer.register("district")}
                    Icon={MapPin}
                    placeholder="e.g. Buldhana"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4.5">
                  <Field
                    label="Contact Number"
                    register={farmer.register("phone", { required: true })}
                    Icon={Home}
                    placeholder="+91 XXXXX XXXXX"
                    error={farmer.formState.errors.phone}
                  />
                  <Field
                    label="Land Area (Acres)"
                    register={farmer.register("landArea")}
                    Icon={Ruler}
                    placeholder="Total cane acreage"
                    type="number"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-mid mb-2">
                    Support Required
                  </label>
                  <div className="relative">
                    <Leaf size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-mid" />
                    <select
                      {...farmer.register("supportType", { required: true })}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-neutral-light border border-neutral-dark/8 text-sm focus:outline-none focus:border-cane-green focus:bg-white transition-colors appearance-none"
                    >
                      <option value="">Choose the support you need…</option>
                      {supportTypes.map((s) => (
                        <option key={s.value} value={s.value}>
                          {s.label}
                        </option>
                      ))}
                      <option value="other">Other — describe in message</option>
                    </select>
                  </div>
                </div>
                <div className="rounded-2xl bg-cane-green/[0.06] border border-cane-green/10 p-4">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-cane-green-dark mb-2">
                    Quick Reference — All 12 Initiatives
                  </p>
                  <ul className="grid grid-cols-2 gap-x-4 gap-y-1.5 text-[12px] text-neutral-dark/75">
                    {caneInitiatives.slice(0, 8).map((c) => (
                      <li key={c.id} className="flex items-center gap-1.5">
                        <span className="w-1 h-1 rounded-full bg-cane-green-dark/60" />
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <Textarea
                  label="Additional Details"
                  register={farmer.register("message")}
                  rows={4}
                  placeholder="Tell us about your crop cycle, any specific issues, or best time for our extension team to visit…"
                />
                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-neutral-mid">
                    Extension team visits are free for all member farmers.
                  </p>
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-cane-green-dark hover:bg-cane-green text-white text-sm font-semibold transition-colors shadow-[0_10px_25px_-10px_rgba(46,125,50,0.5)]"
                  >
                    Submit Support Request
                    <Send size={14} />
                  </button>
                </div>
              </motion.form>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function Field({ label, register, Icon, placeholder, type = "text", error }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-mid mb-2">
        {label}
      </label>
      <div className="relative">
        {Icon && <Icon size={15} className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-mid" />}
        <input
          type={type}
          placeholder={placeholder}
          {...register}
          className={`w-full ${
            Icon ? "pl-11" : "pl-4"
          } pr-4 py-3.5 rounded-2xl bg-neutral-light border text-sm focus:outline-none focus:bg-white transition-colors ${
            error
              ? "border-red-400/70 focus:border-red-500"
              : "border-neutral-dark/8 focus:border-cane-green"
          }`}
        />
      </div>
      {error && (
        <p className="mt-1 text-[11px] text-red-500 font-medium">
          This field is required
        </p>
      )}
    </div>
  );
}

function Textarea({ label, register, rows = 4, placeholder, error }) {
  return (
    <div>
      <label className="block text-xs font-semibold uppercase tracking-[0.14em] text-neutral-mid mb-2">
        {label}
      </label>
      <textarea
        rows={rows}
        placeholder={placeholder}
        {...register}
        className={`w-full px-4 py-3.5 rounded-2xl bg-neutral-light border text-sm focus:outline-none focus:bg-white transition-colors resize-none ${
          error
            ? "border-red-400/70 focus:border-red-500"
            : "border-neutral-dark/8 focus:border-cane-green"
        }`}
      />
      {error && (
        <p className="mt-1 text-[11px] text-red-500 font-medium">
          Please share a few details
        </p>
      )}
    </div>
  );
}
