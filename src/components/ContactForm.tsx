import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import MagneticWrapper from "./MagneticWrapper";
import { Send, Check, Sparkles, Sliders, Globe, ShieldCheck } from "lucide-react";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [vibeFrequency, setVibeFrequency] = useState("528Hz");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    setLoading(true);
    setErrorMsg("");

    try {
      const response = await fetch("https://formsubmit.co/ajax/gokulan.rkivln@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          "Tuning Frequency": vibeFrequency,
          Message: message,
          _subject: `🌌 PARADAM STUDIOS: New Intention Synapse from ${name}`,
          _captcha: "false",
          _template: "table"
        })
      });

      const data = await response.json();

      if (response.ok && data.success === "true") {
        setSubmitted(true);
        // reset form
        setName("");
        setEmail("");
        setMessage("");
      } else {
        throw new Error(data.message || "Celestial transmission failed. Please retry.");
      }
    } catch (err: any) {
      console.error("Transmission error:", err);
      setErrorMsg(err.message || "Failed to establish a direct connection to gokulan.rkivln@gmail.com. Check your network vectors.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="relative py-28 px-6 md:px-24 bg-[#050505]/75 z-30" id="contact">
      <div className="max-w-7xl mx-auto">
        
        {/* Massive Headline Banner */}
        <div className="w-full text-center md:text-left mb-16 relative overflow-hidden select-none pointer-events-none">
          <h2 className="text-[9vw] font-display font-black leading-none uppercase text-zinc-800 tracking-tighter hover:text-white transition-colors duration-700">
            Expansion
          </h2>
          <h2 className="text-[10vw] font-display font-black leading-none uppercase text-stroke-neon text-neon-pink tracking-tight">
            Guaranteed.
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start mt-10">
          
          {/* Left Column: Coordinates & System links */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-neon-yellow" />
                <span className="font-mono text-zinc-400 text-xs tracking-wider uppercase">ENERGETIC INGRESS</span>
              </div>
              <h3 className="text-3xl font-display font-bold uppercase text-white tracking-tight">
                Establish Direct Alignment
              </h3>
              <p className="mt-4 font-space text-sm text-zinc-400 leading-relaxed max-w-md">
                We do not receive standard briefs. We synchronize intention fields. Fill in the sequence below to establish a dynamic connection with local nodes.
              </p>
            </div>

            {/* Micro Coordinates list */}
            <div className="mt-12 space-y-6">
              <div className="border-l border-neon-blue pl-4 py-1">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">TELEMETRY PATHWAY</span>
                <a href="mailto:expansion@paradam.studios" className="font-space text-white font-medium hover:text-neon-blue transition-colors duration-300">
                  expansion@paradam.studios
                </a>
              </div>

              <div className="border-l border-neon-pink pl-4 py-1">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">PHYSICAL VECTOR POINT</span>
                <span className="font-space text-zinc-300">
                  Brooklyn, New York // [40.7128° N, 74.0060° W]
                </span>
              </div>

              <div className="border-l border-neon-green pl-4 py-1">
                <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest block">STEWARDSHIP PROTOCOLS</span>
                <span className="font-space text-zinc-400 text-xs flex items-center gap-2 mt-1">
                  <ShieldCheck className="w-3.5 h-3.5 text-neon-green" />
                  Quantum-encrypted data processing
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Liquid Glass Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="liquid-glass p-8 md:p-12 rounded-3xl relative overflow-hidden">
              
              {/* Dynamic status corner */}
              <div className="absolute top-4 right-4 font-mono text-[8px] text-zinc-600 uppercase tracking-widest">
                STREAM_PORT: LOCAL_PORT_3000
              </div>

              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {/* Name input */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span>[01] Identity Origin Name</span>
                        <span className="text-neon-pink">*</span>
                      </label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="E.g. Captain Vance"
                        className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] focus:border-neon-blue focus:bg-white/[0.04] text-white font-space px-5 py-4 rounded-xl transition-all duration-300 outline-none placeholder:text-zinc-650"
                      />
                    </div>

                    {/* Email input */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span>[02] Quantum Email Node</span>
                        <span className="text-neon-pink">*</span>
                      </label>
                      <input
                        type="email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="E.g. vance@neutral.co"
                        className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] focus:border-neon-blue focus:bg-white/[0.04] text-white font-space px-5 py-4 rounded-xl transition-all duration-300 outline-none placeholder:text-zinc-650"
                      />
                    </div>

                    {/* Alignment frequency dropdown */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <Sliders className="w-3.5 h-3.5 text-neon-pink" />
                        <span>[03] Vibe Frequency Tuning Alignment</span>
                      </label>
                      <select
                        value={vibeFrequency}
                        onChange={(e) => setVibeFrequency(e.target.value)}
                        className="w-full bg-zinc-950/90 border border-white/[0.08] focus:border-neon-pink text-white font-space px-5 py-4 rounded-xl transition-all outline-none"
                      >
                        <option value="963Hz">963 Hz // Absolute Consciousness (Brand Strategy)</option>
                        <option value="528Hz">528 Hz // Genesis Transformation (Creative Engineering)</option>
                        <option value="432Hz">432 Hz // Healing Solfeggio Scale (Art & Production)</option>
                        <option value="741Hz">741 Hz // Dimensional Cleansing (Digital Growth)</option>
                      </select>
                    </div>

                    {/* Message / Intention textarea */}
                    <div className="flex flex-col">
                      <label className="font-mono text-[10px] text-zinc-500 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <span>[04] Metaphysical Intention / Project Statement</span>
                        <span className="text-neon-pink">*</span>
                      </label>
                      <textarea
                        required
                        rows={4}
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        placeholder="Map your vision onto our digital coordinates..."
                        className="w-full bg-white/[0.02] border border-white/[0.08] hover:border-white/[0.18] focus:border-neon-blue focus:bg-white/[0.04] text-white font-space px-5 py-4 rounded-xl transition-all duration-305 outline-none resize-none placeholder:text-zinc-650"
                      />
                    </div>

                    {/* Magnetic Submit button */}
                    <div className="pt-4">
                      <MagneticWrapper pullFactor={0.2}>
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 bg-[#f3f4f6] text-[#050505] font-space font-bold rounded-xl flex items-center justify-center gap-3 hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] transition-transform duration-300 active:scale-95 cursor-pointer"
                        >
                          {loading ? (
                            <>
                              <span>MODULATING TRANSMISSION...</span>
                              <div className="w-5 h-5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                            </>
                          ) : (
                            <>
                              <span>INITIATE CONNECTION SYNAPSE</span>
                              <Send className="w-4 h-4 text-[#050505]" />
                            </>
                          )}
                        </button>
                      </MagneticWrapper>
                    </div>

                    {errorMsg && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mt-4 p-4 border border-neon-pink/20 bg-neon-pink/5 rounded-xl text-center text-xs text-neon-pink font-mono tracking-wide"
                      >
                        [TRANSMISSION ERROR] : {errorMsg}
                      </motion.div>
                    )}
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <div className="w-16 h-16 rounded-full bg-neon-green/10 border border-neon-green/30 flex items-center justify-center mb-6 animate-pulse">
                      <Check className="w-8 h-8 text-neon-green" />
                    </div>
                    <h4 className="text-2xl font-display font-bold uppercase text-white tracking-tight">
                      Transmission Encrypted & Sent
                    </h4>
                    <p className="mt-4 font-space text-zinc-400 text-sm max-w-sm leading-relaxed">
                      Your energy vector has been registered on the <b>{vibeFrequency}</b> spectrum and routed to <b>gokulan.rkivln@gmail.com</b>. We will reach back once cosmic vectors align.
                    </p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-8 font-mono text-xs text-neon-blue uppercase tracking-widest border-b border-neon-blue pb-1 hover:text-white hover:border-white transition-colors duration-300"
                    >
                      SEND RE-ALIGNMENT COMMAND
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>

        </div>

        {/* Global Footer Subtext */}
        <div className="mt-28 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between gap-6 font-mono text-[10px] text-zinc-600 text-center md:text-left">
          <div>
            <span>© 2026 PARADAM STUDIOS AGENCY LLC // ALL SHIELD RIGHTS RESERVED</span>
          </div>
          <div className="flex gap-6">
            <a href="#work" className="hover:text-white transition-colors">WORKINDEX</a>
            <a href="#services" className="hover:text-white transition-colors">D-FREQ</a>
            <a href="#team" className="hover:text-white transition-colors">ASTRO_SYS</a>
            <a href="#contact" className="hover:text-white transition-colors text-neon-pink">ENGAGE_PORT</a>
          </div>
          <div>
            <span>CODED FOR ECLIPSED GROWTH SPEC</span>
          </div>
        </div>

      </div>
    </section>
  );
}
