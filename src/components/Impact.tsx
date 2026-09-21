import { motion } from "framer-motion";
import { STATS } from "../data";

export default function Impact() {
  return (
    <section id="impact" className="px-6 lg:px-16 py-20">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <span
            className="
              font-mono
              text-xs
              font-medium
              tracking-widest
              text-accent
            "
          >
            // engineering impact
          </span>

          <h2
            className="
              mt-3
              text-3xl
              lg:text-4xl
              font-extrabold
              tracking-tight
              text-gray-900
              dark:text-white
            "
          >
            Results over buzzwords.
          </h2>

          <p
            className="
              mt-3
              max-w-2xl
              text-sm
              lg:text-base
              leading-relaxed
              text-gray-500
              dark:text-gray-400
            "
          >
            A few measurable outcomes from the systems and engineering workflows
            I've worked on.
          </p>
        </motion.div>

        {/* Impact cards */}
        <div
          className="
            grid
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-4
            gap-4
          "
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{
                opacity: 0,
                y: 24,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              whileHover={{
                y: -4,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                p-6
                bg-white
                dark:bg-dark-surface
                border
                border-gray-100
                dark:border-dark-border
                hover:border-accent/30
                transition-colors
              "
            >
              {/* Accent glow */}
              <div
                className="
                  absolute
                  -top-16
                  -right-16
                  w-32
                  h-32
                  rounded-full
                  bg-accent/5
                  blur-2xl
                  opacity-0
                  group-hover:opacity-100
                  transition-opacity
                "
              />

              <div className="relative">
                {/* Value */}
                <div
                  className="
                    text-3xl
                    lg:text-4xl
                    font-extrabold
                    tracking-tight
                    text-gray-900
                    dark:text-white
                    mb-3
                    whitespace-nowrap
                  "
                >
                  {stat.value}
                </div>

                {/* Label */}
                <div
                  className="
                    text-sm
                    font-semibold
                    text-gray-700
                    dark:text-gray-300
                  "
                >
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
