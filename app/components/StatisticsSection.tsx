import { motion } from 'framer-motion';
import { Clock, TrendingUp, Calendar, Star } from 'lucide-react';

const stats = [
  {
    title: 'Reclaim Your Time',
    value: '10',
    description: 'Hours saved per week through our automated systems.',
    suffix: '+ hrs/wk',
    icon: Clock
  },
  {
    title: 'Lead Growth',
    value: '25',
    description: 'Average increase in qualified lead generation.',
    suffix: '%+',
    icon: TrendingUp
  },
  {
    title: 'Fast Implementation',
    value: '4',
    description: 'Weeks from start to full implementation.',
    suffix: ' weeks',
    icon: Calendar
  },
  {
    title: 'Client Success Rate',
    value: '100',
    description: 'Of our clients achieve their automation goals.',
    suffix: '%',
    icon: Star
  }
];

export default function StatisticsSection() {
  return (
    <section className="relative py-8 sm:py-12 md:py-16 bg-[#0A0A0B]">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent">
            Our Impact
          </h2>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-4 sm:p-6 md:p-8 rounded-2xl bg-[#111112] border border-white/10 hover:border-white/20 transition-colors"
              >
                <div className="flex items-center gap-2 sm:gap-3 mb-2 sm:mb-3">
                  <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#8A7FFB]" />
                  <h3 className="text-base sm:text-lg text-white/60">{stat.title}</h3>
                </div>
                <div className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-[#8A7FFB] to-[#B4B0FF] bg-clip-text text-transparent mb-2 overflow-visible">
                  <span className="inline-flex items-baseline whitespace-nowrap">
                    <span>{stat.value}</span>
                    <span className="ml-1 text-[0.7em]">{stat.suffix}</span>
                  </span>
                </div>
                <p className="text-white/60 text-xs sm:text-sm">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
} 