"use client";
import { X } from "lucide-react";
import { DynamicIcon, type IconName } from "lucide-react/dynamic";
import type React from "react";
import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  titleIconName?: IconName;
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
  titleIconName,
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
        className={`fixed top-0 start-0 inset-0 z-50 flex items-start 2xl:items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn overflow-y-auto ${overlayClassName}`}
        onClick={handleOverlayClick}
      >
        <div
          ref={modalRef}
          className={`relative w-full ${sizeClasses[size]} bg-content-box-bg-color-1 rounded-2xl shadow-2xl border border-white/10 overflow-hidden ${animationClasses[animation]} ${modalClassName}`}
        >
          {/* Header */}
          {(title || showCloseButton) && (
            <div
              className={`flex items-center justify-between px-4 py-2 border-b border-main-text-color/10 bg-linear-to-r from-transparent to-white/5 ${headerClassName}`}
            >
              {title && (
                <h2 className="text-lg font-medium text-main-text-color flex items-center gap-1">
                  {titleIconName && (
                    <DynamicIcon
                      name={titleIconName}
                      scale={28}
                      strokeWidth={1.5}
                    />
                  )}
                  {title}
                </h2>
              )}
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="p-2 rounded-lg cursor-pointer hover:bg-input-color/50 transition-all duration-200"
                  aria-label="بستن"
                >
                  <X
                    size={24}
                    className="text-main-text-color/50 transition-colors"
                  />
                </button>
              )}
            </div>
          )}

          {/* Body */}
          <div className={`p-4 ${bodyClassName}`}>{children}</div>

          {/* Footer */}
          {footer && (
            <div className="flex items-center justify-end gap-3 px-4 py-2 border-t border-main-text-color/10 bg-linear-to-r from-transparent to-white/5">
              {footer}
            </div>
          )}
        </div>
      </div>

      <style>{`
      `}</style>
    </>
  );

  // Use Portal to render modal at document body level
  return createPortal(modalContent, document.body);
};

export default Modal;
