import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Images = ({ item, showMore, onLoad }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <div>
      {showMore && (
        <motion.div
          initial={{ opacity: 0, translateX: -50, translateY: -50 }}
          animate={{
            opacity: inView ? 1 : 0,
            translateX: inView ? 0 : -50,
            translateY: inView ? 0 : -50,
          }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="portfolioCard_subItem"
          style={{ width: "300px" }}
          ref={ref}
        >
          <div>
            <div>
              <img
                src={item}
                alt="..."
                style={{ borderRadius: "5px" }}
                onLoad={onLoad}
              />
            </div>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Images;
