import { ImageResponse } from 'next/og';
import { site } from './site';

export const ogSize = { width: 1200, height: 630 };

// Shared 1200×630 social card in brand colours.
export function ogImage({ eyebrow, title, subtitle }: { eyebrow: string; title: string; subtitle: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: 72,
          background: 'linear-gradient(135deg, #0a2230 0%, #0e2b3a 60%, #0b5463 100%)',
          color: 'white',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <div
            style={{
              width: 64,
              height: 64,
              borderRadius: 16,
              background: '#1fc9d9',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#0a2230',
              fontSize: 36,
              fontWeight: 800,
            }}
          >
            CL
          </div>
          <div style={{ fontSize: 34, fontWeight: 700 }}>{site.name}</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <div style={{ fontSize: 28, color: '#67e3ee', textTransform: 'uppercase', letterSpacing: 4 }}>{eyebrow}</div>
          <div style={{ fontSize: 72, fontWeight: 800, lineHeight: 1.05, marginTop: 16, maxWidth: 1000 }}>{title}</div>
          <div style={{ fontSize: 32, color: '#d3e1e7', marginTop: 24 }}>{subtitle}</div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 30, color: '#d3e1e7' }}>
          <div>{site.phone.display}</div>
          <div>cleanlabdetailing.com</div>
        </div>
      </div>
    ),
    ogSize,
  );
}
