"use client"
import React, { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { X } from "lucide-react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  showCloseButton?: boolean;
  closeOnOverlayClick?: boolean;
  closeOnEscape?: boolean;
  overlayClassName?: string;
  modalClassName?: string;
  headerClassName?: string;
  bodyClassName?: string;
  animation?: "fade" | "scale" | "slideUp" | "slideDown";
  footer?: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  showCloseButton = true,
  closeOnOverlayClick = true,
  closeOnEscape = true,
  overlayClassName = "",
  modalClassName = "",
  headerClassName = "",
  bodyClassName = "",
  animation = "scale",
  footer,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle Escape key
  useEffect(() => {
    if (!closeOnEscape || !isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [closeOnEscape, isOpen, onClose]);

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Handle overlay click
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (closeOnOverlayClick && e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  // Size classes
  const sizeClasses = {
    sm: "max-w-sm",
    md: "max-w-md",
    lg: "max-w-lg",
    xl: "max-w-xl",
    full: "max-w-full mx-4",
  };

  // Animation classes
  const animationClasses = {
    fade: "animate-fadeIn",
    scale: "animate-scaleIn",
    slideUp: "animate-slideUp",
    slideDown: "animate-slideDown",
  };

  const modalContent = (
    <>
      <div
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn ${overlayClassName}`}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          className={`relative w-full ${sizeClasses[size]} bg-gradient-to-br to-main-box-background from-secondary-box-background rounded-2xl shadow-2xl border border-white/10 overflow-hidden ${animationClasses[animation]} ${modalClassName}`}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              className={`flex items-center justify-between px-4 py-2 border-b border-white/10 bg-gradient-to-r from-transparent to-white/5 ${headerClassName}`}
            >
              {title && (
                <h2 className="text-xl font-semibold bg-gradient-to-l from-white to-gray-300 bg-clip-text text-transparent">
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg cursor-pointer hover:bg-white/10 transition-all duration-200"
                  aria-label="بستن"
                >
                  <X size={24} className="text-gray-400 transition-colors" />
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className={`p-4 ${bodyClassName}`}>{children}</div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end gap-3 p-6 border-t border-white/10 bg-gradient-to-r from-transparent to-white/5">
              {footer}
            </div>
          )}
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }

        @keyframes slideUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }

        .animate-scaleIn {
          animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
        }

        .animate-slideUp {
          animation: slideUp 0.3s ease-out;
        }

        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </>
  );

  // Use Portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default Modal;
