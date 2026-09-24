import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { FaGithub } from 'react-icons/fa';
import profileImage from '../assets/profile.webp'
import { STATS, RESUME_URL } from '../data'

export default function Hero() {
  return (
    <section
      id="hero"
      className="
        min-h-screen
        flex items-center
        px-6 lg:px-16
        pt-24 lg:pt-20
        pb-16
      "
    >
      <div className="max-w-6xl mx-auto w-full">
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-[1.2fr_0.8fr]
            gap-12
            lg:gap-16
            items-center
          "
        >
          {/* =========================================================
              LEFT — CONTENT
          ========================================================= */}
          <div>
            {/* Specialization badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-7"
            >
              <span
                className="
                  inline-flex
                  items-center
                  gap-2
                  px-3
                  py-1.5
                  rounded-full

                  text-xs
                  font-mono
                  font-medium

                  text-emerald-700
                  dark:text-emerald-400
                  bg-emerald-400/10
                  border
                  border-emerald-400/20
                "
              >
                <span
                  className="
                    w-1.5
                    h-1.5
                    rounded-full
                    bg-emerald-400
                    animate-pulse
                  "
                />
                Backend · Full-stack · Automation
              </span>
            </motion.div>

            {/* =====================================================
                HEADLINE
            ===================================================== */}
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.7,
                delay: 0.15,
                ease: "easeOut",
              }}
              className="
                text-5xl
                lg:text-6xl
                xl:text-7xl

                font-extrabold
                tracking-tight

                leading-[1.05]

                mb-7

                max-w-2xl
              "
            >
              {/* Line 1 */}
              <span className="text-gray-900 dark:text-white">
                Software Engineer
              </span>

              <br />

              {/* Line 2 */}
              <span className="gradient-text">building platforms</span>

              <br />

              {/* Line 3 */}
              <span className="text-gray-900 dark:text-white">teams depend on.</span>
            </motion.h1>

            {/* =====================================================
                DESCRIPTION
            ===================================================== */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.3,
                ease: "easeOut",
              }}
              className="
                text-base
                lg:text-lg
                text-gray-500
                dark:text-gray-400
                leading-relaxed
                max-w-xl
                mb-9
              "
            >
              At Bosch Global Software Technologies I've worked on a Kafka
              event-driven platform serving 500+ internal teams, vulnerability
              automation covering 1,500+ GitHub repositories, and Azure AD SSO
              for 100K+ users. Outside work, I build full-stack products and
              open-source infrastructure.
            </motion.p>

            {/* =====================================================
                CTA BUTTONS
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.44,
                ease: "easeOut",
              }}
              className="
                flex
                flex-wrap
                items-center
                gap-3
                mb-12
              "
            >
              {/* Primary CTA */}
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  px-6
                  py-3
                  rounded-xl
                  bg-accent
                  text-white
                  font-semibold
                  text-sm
                  hover:shadow-lg
                  hover:shadow-accent/25
                  transition-shadow
                  flex
                  items-center
                  gap-2
                "
              >
                View Engineering Work
                <span className="text-base">↓</span>
              </motion.a>

              {/* Resume */}
              <motion.a
                href={RESUME_URL}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="
                  px-6
                  py-3
                  rounded-xl
                  border
                  border-gray-200
                  dark:border-dark-border2
                  text-gray-600
                  dark:text-gray-400
                  font-medium
                  text-sm
                  hover:border-accent
                  hover:text-accent
                  hover:bg-accent/5
                  transition-all
                  flex
                  items-center
                  gap-2
                "
              >
                View Resume
                <ArrowUpRight size={15} />
              </motion.a>

              {/* GitHub */}
              <motion.a
                href="https://github.com/AnantDuhan"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -2 }}
                className="
                  px-2
                  py-2
                  text-sm
                  text-gray-500
                  dark:text-gray-400
                  hover:text-accent
                  transition-colors
                  flex
                  items-center
                  gap-1.5
                "
              >
                <FaGithub size={16} />
                GitHub
                <ArrowUpRight size={13} />
              </motion.a>
            </motion.div>

            {/* =====================================================
                SMALL DIVIDER
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{
                duration: 0.7,
                delay: 0.55,
              }}
              className="
                origin-left
                w-full
                max-w-xl
                h-px
                bg-gray-200
                dark:bg-dark-border2
                mb-7
              "
            />

            {/* =====================================================
                IMPACT STATS
            ===================================================== */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.65,
              }}
              className="
                grid
                grid-cols-2
                sm:grid-cols-4

                gap-x-6
                gap-y-5

                max-w-xl
              "
            >
              {STATS.map((stat) => (
                <div key={stat.label}>
                  <div className="text-xl lg:text-2xl font-extrabold text-gray-900 dark:text-white whitespace-nowrap">
                    {stat.value}
                  </div>
                  <div className="text-xs text-gray-500 mt-1">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* =========================================================
              RIGHT — PROFILE IMAGE
          ========================================================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.94, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.25,
              ease: "easeOut",
            }}
            className="
              flex
              justify-center
              lg:justify-end

              relative
            "
          >
            {/* Ambient glow */}
            <div
              className="
                absolute
                inset-0
                bg-accent/10
                blur-3xl
                rounded-full
                scale-75
                pointer-events-none
              "
            />

            {/* Image wrapper */}
            <div
              className="
                relative
                w-64
                h-72
                lg:w-72
                lg:h-80
                rounded-[2rem]
                overflow-hidden
                border
                border-accent/40
                bg-gray-100
                dark:bg-dark-surface
                shadow-2xl
                shadow-accent/10
              "
            >
              <img
                src={profileImage}
                alt="Anant Duhan"
                width={640}
                height={640}
                fetchPriority="high"
                className="
                  w-full
                  h-full
                  object-cover
                  object-center
                "
              />

              {/* Image overlay */}
              <div
                className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black/20
                  via-transparent
                  to-transparent
                  pointer-events-none
                "
              />
            </div>

            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: 0.9,
              }}
              className="
                absolute
                -bottom-4
                right-0
                lg:right-[-1rem]
                px-4
                py-2.5
                rounded-xl
                bg-gray-900
                dark:bg-dark-surface
                border
                border-gray-700
                dark:border-dark-border2
                shadow-xl
                flex
                items-center
                gap-2
              "
            >
              <span
                className="
                  w-2
                  h-2
                  rounded-full
                  bg-emerald-400
                "
              />

              <span
                className="
                  text-xs
                  font-semibold
                  text-white
                  dark:text-gray-200
                "
              >
                Open to conversations
              </span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
