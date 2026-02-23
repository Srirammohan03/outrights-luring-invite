"use client";

import { useEffect, useState } from "react";

export default function SiteProtection() {
  const [showWarning, setShowWarning] = useState(false);
  const [locked, setLocked] = useState(false);
  const [attempts, setAttempts] = useState(0);

  const triggerWarning = () => {
    setAttempts((prev) => {
      const next = prev + 1;

      if (next >= 3) {
        setShowWarning(true);

        setTimeout(() => {
          setShowWarning(false);
        }, 4000);
      }

      if (next >= 6) {
        setLocked(true);

        setTimeout(() => {
          setLocked(false);
        }, 6000);
      }

      return next;
    });
  };

  useEffect(() => {
    // 🚫 Right Click
    const onRightClick = (e: MouseEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    // 🚫 Drag images
    const onDrag = (e: DragEvent) => {
      e.preventDefault();
    };

    // 🚫 Keyboard shortcuts
    const onKeyDown = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (
        key === "f12" ||
        (e.ctrlKey && e.shiftKey && ["i", "j", "c"].includes(key)) ||
        (e.ctrlKey && ["u", "s", "p", "c"].includes(key))
      ) {
        e.preventDefault();
        triggerWarning();
      }
    };

    // 🚫 Copy text
    const onCopy = (e: ClipboardEvent) => {
      e.preventDefault();
      triggerWarning();
    };

    // 🔥 DevTools detection
    const detectDevTools = () => {
      const threshold = 160;

      if (
        window.outerWidth - window.innerWidth > threshold ||
        window.outerHeight - window.innerHeight > threshold
      ) {
        setLocked(true);
      } else {
        setLocked(false);
      }
    };

    const interval = setInterval(detectDevTools, 1000);

    document.addEventListener("contextmenu", onRightClick);
    document.addEventListener("dragstart", onDrag);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("copy", onCopy);

    return () => {
      clearInterval(interval);
      document.removeEventListener("contextmenu", onRightClick);
      document.removeEventListener("dragstart", onDrag);
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("copy", onCopy);
    };
  }, []);

  return (
    <>
      {/* 🔥 DevTools Lock Overlay */}
      {locked && (
        <div className="fixed inset-0 z-[99999] bg-black/95 backdrop-blur-md flex items-center justify-center text-center px-6">
          <div className="max-w-md">
            <h2 className="text-white text-2xl font-bold mb-3">
              ⚠️ Protected Content
            </h2>
            <p className="text-gray-300">
              Developer tools detected.  
              Please close inspection tools to continue viewing.
            </p>
          </div>
        </div>
      )}

      {/* Warning popup */}
      {showWarning && (
        <div className="fixed top-6 left-1/2 -translate-x-1/2 z-[99999] bg-red-600 text-white px-6 py-3 rounded-full shadow-xl">
          Content protection enabled ⚠️
        </div>
      )}
    </>
  );
}