"use client";

import React from "react";
import Modal from "./modal";
import { AlertCircle, Loader2 } from "lucide-react";
import { Button } from "./button";

interface ConfirmModalProps {
  isOpen: boolean;
  title?: string;
  description?: string;
  onClose: () => void;
  onConfirm: () => void;
  confirmText?: string;
  cancelText?: string;
  confirmType?: "delete" | "default";
  isLoading?: boolean;
}

const ConfirmModal: React.FC<ConfirmModalProps> = ({
  isOpen,
  title = "تایید عملیات",
  description = "آیا از انجام این عملیات اطمینان دارید؟",
  onClose,
  onConfirm,
  confirmText = "تایید",
  cancelText = "انصراف",
  confirmType = "default",
  isLoading = false,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title}
      size="sm"
      closeOnOverlayClick={!isLoading}
      showCloseButton={false}
      animation="scale"
      footer={
        <>
          <Button
            variant={confirmType === "delete" ? "destructive" : "default"}
            onClick={onConfirm}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>در حال پردازش...</span>
              </div>
            ) : (
              confirmText
            )}
          </Button>
          <Button variant="secondary" onClick={onClose} disabled={isLoading}>
            {cancelText}
          </Button>
        </>
      }
    >
      <div className="flex items-center gap-3">
        <div className="p-3 rounded-full bg-destructive/20">
          <AlertCircle className="w-6 h-6 text-destructive" />
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </Modal>
  );
};

export default ConfirmModal;