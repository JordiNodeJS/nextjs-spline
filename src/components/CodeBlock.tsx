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
    <div className={`relative bg-gray-900 rounded-lg overflow-hidden w-full ${className}`}>
      {showCopyButton && (
        <button 
          className="absolute top-2 right-2 p-2 bg-gray-700 hover:bg-gray-600 text-white transition-all duration-200 rounded-md border border-gray-500 hover:border-gray-400 z-20 shadow-md"
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
        {({ className: highlightClassName, style, tokens, getLineProps, getTokenProps }) => (
          <pre 
            className={`${highlightClassName} p-6 pr-12 text-sm overflow-auto font-mono max-h-96 w-full`} 
            style={{
              ...style,
              backgroundColor: '#1e1e1e',
              color: '#d4d4d4',
              fontSize: '14px',
              lineHeight: '1.5',
              maxWidth: '100%',
              wordBreak: 'break-word',
            }}
          >
            {tokens.map((line, i) => (
              <div key={i} {...getLineProps({ line })} className="whitespace-pre-wrap break-words">
                {line.map((token, key) => (
                  <span 
                    key={key} 
                    {...getTokenProps({ token })}
                    style={{
                      ...getTokenProps({ token }).style,
                      // Asegurar que los colores se apliquen correctamente
                      color: token.color || getTokenProps({ token }).style?.color || '#d4d4d4'
                    }}
                  />
                ))}
              </div>
            ))}
          </pre>
        )}
      </Highlight>
    </div>
  );
}
