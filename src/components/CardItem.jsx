import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { TbArrowUpRight } from "react-icons/tb"

const CardItem = ({ to, thumbnail, title, label }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={to} className="relative border border-zinc-300/90 md:rounded-[1.5rem] rounded-[1.2rem] md:h-88 h-50 overflow-hidden block">
      <motion.div
        onHoverStart={() => setHovered(true)}
        onHoverEnd={() => setHovered(false)}
        className="w-full h-full"
      >
        <img src={thumbnail} alt={label} className="object-cover w-full h-full" draggable="false" />
        <div className="absolute w-full top-0 left-0 p-1 pointer-events-none">
          <motion.div
            initial={false}
            animate={
              hovered
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -20, scale: 0.95 }
            }
            transition={{
              type: 'spring',
              stiffness: 200,
              damping: 14,
            }}
            className="relative flex-start px-4 pt-2 pb-4.5 bg-zinc-100/50 rounded-[20px] border border-zinc-400/20 backdrop-blur-xl"
          >
            <div>
              <h3>{title}</h3>
              <p>{label}</p>
            </div>
            <TbArrowUpRight className="absolute -translate-y-1/2 top-1/2 right-2.5 size-12 stroke-[0.8] text-zinc-900" />
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default CardItem
