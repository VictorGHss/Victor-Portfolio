import { useState } from 'react';
import { Check, Copy } from 'lucide-react';

interface CopyEmailButtonProps {
  email: string;
  copyLabel: string;
  copiedLabel: string;
}

export default function CopyEmailButton({ email, copyLabel, copiedLabel }: CopyEmailButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      // Fallback: mailto link remains available next to this button
    }
  };

  return (
    <button
      type="button"
      onClick={handleCopy}
      className="p3-btn p3-btn--secondary"
      aria-live="polite"
    >
      <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.45rem' }}>
        {copied ? <Check size={16} aria-hidden="true" /> : <Copy size={16} aria-hidden="true" />}
        <span>{copied ? copiedLabel : copyLabel}</span>
      </span>
    </button>
  );
}
