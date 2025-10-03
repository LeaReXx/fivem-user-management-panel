// NewCharacterModal.tsx
"use client";
import { Button } from "@/components/ui/button";
import Modal from "@/components/ui/modal";
import { BookAlert } from "lucide-react";
import React, { useState } from "react";

interface NewCharacterModalProps {
  isOpenModal: boolean;
  onClose: () => void;
}

const NewCharacterModal: React.FC<NewCharacterModalProps> = ({
  isOpenModal,
  onClose,
}) => {
  const [isAcceptedRules, setIsAcceptedRules] = useState(false);

  const acceptRulesBtnHandler = () => {
    setIsAcceptedRules(true);
  };
  const characterModalOnClose = () => {
    onClose();
    setIsAcceptedRules(false);
  };
  return (
    <Modal
      isOpen={isOpenModal}
      onClose={characterModalOnClose}
      size="xl"
      title="افزودن کاراکتر جدید"
    >
      {/* Character create rules  */}
      {isAcceptedRules ? (
        <div className="text-center">
          <p>فرم ثبت کاراکتر</p>
        </div>
      ) : (
        <div>
          <div className="text-lg font-medium flex gap-2">
            <BookAlert />
            <h2>قوانین ثبت کاراکتر</h2>
          </div>

          <div className="mt-4 bg-secondary-box-background p-2 rounded-md">
            <ul className="list-decimal space-y-2 list-inside">
              <li>هر شخص مجاز به ساخت تنها دو کاراکتر می‌باشد.</li>
              <li>سن کاراکتر حتما باید +۱۸ سال باشد.</li>
              <li>از اسامی مناسب برای کاراکتر استفاده کنید.</li>
              <li>
                از انتخاب اسم یا فامیل افراد مطرح، مشهور فیلم / سریال / انیمه /
                NP و ... پرهیز نمایید.
              </li>
              <li>در انتخاب ملیت کاراکتر دقت کنید.</li>
              <li>اگر در ثبت اطلاعات OOC به مشکل خوردید تیکت باز کنید.</li>
              <li>
                وظیفه‌ی ویرایش در اسم و فامیل تا قبل از تایید، به‌عهده‌ی کاربر
                می‌باشد، لطفا از باز کردن تیکت در دیسکورد پرهیز کنید.
              </li>
              <li>
                دلایل عدم تایید کاراکتر در بخش توضیحات توسط تیم سایت ساپورت
                اعلام خواهد شد.
              </li>
              <li>
                حتما از اسم و فامیل واقعی خود در بخش نام و نام خانوادگی استفاده
                کنید.
              </li>
            </ul>
          </div>
          <div className="mt-4 text-end">
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-md"
              onClick={acceptRulesBtnHandler}
            >
              تایید و ادامه
            </Button>
          </div>
        </div>
      )}
    </Modal>
  );
};

export default NewCharacterModal;
