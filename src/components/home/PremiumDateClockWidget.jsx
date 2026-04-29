import React, { useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { CalendarDays, Clock3, MapPin } from 'lucide-react';

const WEEK_DAYS = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

export default function PremiumDateClockWidget() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const calendarDays = useMemo(() => {
    const year = now.getFullYear();
    const month = now.getMonth();
    const firstDay = new Date(year, month, 1).getDay();
    const totalDays = new Date(year, month + 1, 0).getDate();
    return [...Array(firstDay).fill(null), ...Array.from({ length: totalDays }, (_, index) => index + 1)];
  }, [now]);

  const time = now.toLocaleTimeString('en-AE', { hour: '2-digit', minute: '2-digit', second: '2-digit' });
  const date = now.toLocaleDateString('en-AE', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' });
  const monthTitle = now.toLocaleDateString('en-AE', { month: 'long', year: 'numeric' });
  const today = now.getDate();

  return (
    <section className="relative -mt-10 z-10 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
        className="max-w-7xl mx-auto premium-card rounded-[2rem] border border-white/70 p-5 md:p-7 shadow-2xl shadow-navy/10 backdrop-blur-xl"
      >
        <div className="grid lg:grid-cols-[1fr_1.25fr] gap-6 items-stretch">
          <div className="relative overflow-hidden rounded-3xl bg-navy p-7 text-white">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(248,184,88,0.30),transparent_36%),linear-gradient(135deg,rgba(255,255,255,0.10),transparent_45%)]" />
            <div className="relative">
              <div className="flex items-center gap-2 text-white/70 text-xs font-bold uppercase tracking-widest mb-8">
                <Clock3 className="w-4 h-4 text-gold" />
                Live UAE Project Time
              </div>
              <div className="text-5xl md:text-6xl font-extrabold tracking-tight mb-4 text-gold">{time}</div>
              <p className="text-lg font-semibold text-white">{date}</p>
              <div className="mt-8 flex items-center gap-2 text-sm text-white/70">
                <MapPin className="w-4 h-4 text-gold" />
                Dubai, United Arab Emirates
              </div>
            </div>
          </div>

          <div className="rounded-3xl border border-gray-200 bg-white/80 p-6">
            <div className="flex items-center justify-between mb-5">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-text-secondary mb-1">
                  <CalendarDays className="w-4 h-4 text-gold" />
                  Calendar
                </div>
                <h3 className="text-2xl font-extrabold text-navy">{monthTitle}</h3>
              </div>
              <div className="rounded-2xl bg-gold/15 px-4 py-2 text-sm font-bold text-navy">Today {today}</div>
            </div>

            <div className="grid grid-cols-7 gap-2 text-center">
              {WEEK_DAYS.map((day) => (
                <div key={day} className="text-[11px] font-bold uppercase tracking-widest text-text-secondary py-2">{day}</div>
              ))}
              {calendarDays.map((day, index) => (
                <div
                  key={`${day || 'empty'}-${index}`}
                  className={`aspect-square rounded-xl flex items-center justify-center text-sm font-bold transition-all ${day === today ? 'bg-navy text-white shadow-lg shadow-navy/20' : day ? 'bg-gray-50 text-text-primary hover:bg-gold/15' : 'bg-transparent'}`}
                >
                  {day || ''}
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}