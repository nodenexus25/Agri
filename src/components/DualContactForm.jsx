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
  Phone,
  Send,
  CheckCircle2,
  Leaf,
  Mail
} from "lucide-react";

export default function DualContactForm() {
  const [submitted, setSubmitted] = useState(false);

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

  const onSubmitGeneral = (data) => {
    console.log("General Enquiry:", data);
    setSubmitted(true);
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
              Whether you're sourcing sugar or by-products, partnering with us, or
              reaching out about membership — our cooperative team responds within
              two working days.
            </p>

            <div className="mt-8 space-y-4">
              {[
                { k: "Factory Reception", v: "+91 7266 202 400", Ico: Phone },
                { k: "Sales & Exports", v: "+91 7266 202 401", Ico: Phone },
                { k: "General Email", v: "info@sanjivani-agri.coop", Ico: Mail }
              ].map((it) => (
                <div key={it.k} className="flex items-start gap-3">
                  <span className="w-8 h-8 shrink-0 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center mt-0.5">
                    <it.Ico size={14} className="opacity-80" />
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
                Factory Operations
              </p>
              <p className="text-sm text-white/80 leading-relaxed">
                Crushing season runs November–February. Office reception open
                year-round, Mon–Sat, 9 AM – 6 PM IST. Guest rooms available for
                outstation delegates.
              </p>
            </div>
          </div>
        </aside>

        <div className="md:col-span-3 p-7 md:p-10 lg:p-12">
          <div className="mb-8">
            <p className="inline-flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-cane-green-dark mb-3">
              <MessageSquare size={12} />
              Send us a message
            </p>
            <h4 className="font-display text-2xl md:text-3xl font-semibold text-neutral-dark tracking-tight leading-tight">
              Tell us what you need. Right desk, first response.
            </h4>
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
                  Our sales, partnership, or member-services team will respond
                  with the information you need within two working days.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    general.reset();
                  }}
                  className="mt-6 inline-flex items-center px-5 py-2.5 rounded-full border border-neutral-dark/10 text-sm font-medium text-neutral-dark hover:bg-neutral-dark hover:text-white transition-colors"
                >
                  Send another message
                </button>
              </motion.div>
            ) : (
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
                      <option>Membership & Farmer Services</option>
                      <option>Media & Other</option>
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
