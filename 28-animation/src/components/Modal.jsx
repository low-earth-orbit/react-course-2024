import { createPortal } from "react-dom";
import { motion } from "framer-motion";

export default function Modal({ title, children, onClose }) {
  return createPortal(
    <>
      <div className="backdrop" onClick={onClose} />
      <motion.dialog
        open
        className="modal"
        animate={{ opacity: 1, y: 0 }} // eventual state
        initial={{ opacity: 0, y: -30 }} // initial state
        exit={{ opacity: 0, y: -30 }} // exit state
      >
        <h2>{title}</h2>
        {children}
      </motion.dialog>
    </>,
    document.getElementById("modal")
  );
}
