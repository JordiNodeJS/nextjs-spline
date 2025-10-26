'use client';

import { Copy } from "lucide-react";
import { Highlight, themes } from 'prism-react-renderer';

interface CodeBlockProps {
  code: string;
  language?: string;
  showCopyButton?: boolean;
  className?: string;
}

export default function CodeBlock({ 
  code, 
  language = 'tsx', 
  showCopyButton = true,
  className = ''
}: CodeBlockProps) {
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('Error copying to clipboard:', err);
    }
  };

  return (
    <div className={`relative bg-gray-900 rounded-lg overflow-hidden ${className}`}>
      {showCopyButton && (
        <button 
          className="absolute top-4 right-4 p-2 text-gray-400 hover:text-white transition-colors z-10"
          onClick={copyToClipboard}
          title="Copiar código"
        >
          <Copy className="w-4 h-4" />
        </button>
      )}
      
      <Highlight
        theme={themes.vsDark}
        code={code}
        language={language}
      >
        {({ className, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={`${className} p-6 text-sm overflow-x-auto`} 
            style={style}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })}>
                {line.map((token, key) => (
                  <span key={key} {...getTokenProps({ token })} />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
