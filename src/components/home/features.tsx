import { motion } from 'framer-motion';
import { TiTick } from 'react-icons/ti';

const features = [
  "Intel x86_64 Assembly Support (other architecture support coming soon)",
  "Built-in hex editor to edit memory in real-time as the code executes",
  "Built-in stack editor to see and modify the stack",
  "Built-in register editor",
  "Beginner-friendly - easy to use",
  "Modern and clean UI",
  "Works out of the box - no need to configure anything"
];

const containerVariants = {
  hidden: { opacity: 0},
  show: {
    opacity: 1,
    transition: {
      duration: .4,
      staggerChildren: 0.1, // delay between each child
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Features = () => {
  return (
    <motion.div
      className="w-full pt-10 relative pointer-events-none sm:px-20 flex flex-col justify-center items-center"
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      <div className="flex flex-col items-start justify-center">
        {features.map((feature, index) => (
          <motion.p
            key={index}
            className="flex items-center cursor-pointer hover:bg-zinc-100 gap-1 py-4 border-b w-full px-3"
            variants={itemVariants}
          >
            <TiTick />
            {feature}
          </motion.p>
        ))}
      </div>
    </motion.div>
  );
};

export default Features;
