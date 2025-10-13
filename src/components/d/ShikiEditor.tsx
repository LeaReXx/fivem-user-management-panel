'use client';

import { useEffect, useState, useRef } from 'react';
import { createHighlighter, Highlighter } from 'shiki';
import { Button } from '@/components/ui/button';
import { Loader2, CheckCircle, XCircle } from 'lucide-react';

export default function ShikiEditor() {
  const [code, setCode] = useState('');
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState<'idle' | 'saving' | 'saved' | 'error'>('idle');
  const [highlighter, setHighlighter] = useState<Highlighter | null>(null);
  const previewRef = useRef<HTMLDivElement>(null);

  /** 🧩 Load CSS File */
  useEffect(() => {
    (async () => {
      try {
        const res = await fetch('/variables.css');
        const text = await res.text();
        setCode(text);
      } catch (err) {
        console.error('❌ Failed to load CSS:', err);
      }
    })();
  }, []);

  /** 🎨 Initialize Shiki */
  useEffect(() => {
    (async () => {
      try {
        const highlighterInstance = await createHighlighter({
          themes: ['github-dark'],
          langs: ['css'],
        });
        setHighlighter(highlighterInstance);
      } catch (err) {
        console.error('❌ Failed to initialize Shiki:', err);
      }
    })();
  }, []);

  /** 🪄 Update Highlight Preview when code or highlighter changes */
  useEffect(() => {
    if (!highlighter || !previewRef.current) return;
    const html = highlighter.codeToHtml(code, {
      lang: 'css',
      theme: 'github-dark',
    });
    previewRef.current.innerHTML = html;
  }, [code, highlighter]);

  /** 💾 Save Handler */
  const handleSave = async () => {
    setIsSaving(true);
    setSaveStatus('saving');

    try {
      const response = await fetch('/api/save-css', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ content: code }),
      });

      if (response.ok) {
        setSaveStatus('saved');
        setTimeout(() => setSaveStatus('idle'), 2000);
      } else {
        setSaveStatus('error');
      }
    } catch (err) {
      console.error('❌ Save failed:', err);
      setSaveStatus('error');
    } finally {
      setIsSaving(false);
    }
  };

  /** ⌨️ Tab Key Handler */
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.target as HTMLTextAreaElement;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const newText = code.substring(0, start) + '  ' + code.substring(end);
      setCode(newText);
      requestAnimationFrame(() => {
        target.selectionStart = target.selectionEnd = start + 2;
      });
    }
  };

  return (
    <div className="flex flex-col w-full max-w-5xl mx-auto p-6 h-full space-y-4" dir="ltr">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
          Variables.css Editor
        </h2>

        <div className="flex items-center gap-3">
          <Button
            onClick={handleSave}
            disabled={isSaving}
            className="flex items-center gap-2"
          >
            {isSaving ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                Saving...
              </>
            ) : (
              <>
                <span>Save Changes</span>
              </>
            )}
          </Button>

          {saveStatus === 'saved' && (
            <div className="flex items-center text-green-500 text-sm font-medium gap-1">
              <CheckCircle className="w-4 h-4" /> Saved
            </div>
          )}
          {saveStatus === 'error' && (
            <div className="flex items-center text-red-500 text-sm font-medium gap-1">
              <XCircle className="w-4 h-4" /> Error
            </div>
          )}
        </div>
      </div>

      {/* Editor + Preview */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 flex-grow">
        {/* Editable Textarea */}
        <div className="relative">
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            onKeyDown={handleKeyDown}
            spellCheck="false"
            className="w-full h-full min-h-[500px] font-mono text-sm leading-relaxed 
                       bg-zinc-950 text-gray-100 border border-zinc-700 
                       rounded-xl p-4 resize-none outline-none 
                       focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Highlighted Preview */}
        <div
          ref={previewRef}
          className="w-full h-full min-h-[500px] p-4 rounded-xl border border-zinc-700 
                     bg-[#0d1117] overflow-auto font-mono text-sm leading-relaxed"
        />
      </div>
    </div>
  );
}
