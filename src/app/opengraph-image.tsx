export const dynamic = 'force-static';
import { ImageResponse } from 'next/og';
export const alt = 'Abhilash Mishra — Enterprise Product Manager';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';
export default function Image() {
  return new ImageResponse(
    <div style={{ width: '100%', height: '100%', background: '#f5f3ed', color: '#252b26', display: 'flex', flexDirection: 'column', padding: 72, justifyContent: 'space-between', fontFamily: 'Arial, sans-serif' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 24, color: '#49534b' }}><span>AM.</span><span>PRODUCT MANAGEMENT / SELECTED WORK</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 22 }}><div style={{ fontSize: 77, fontWeight: 600, lineHeight: 1.08 }}>Abhilash Mishra</div><div style={{ fontSize: 30, color: '#657168' }}>Enterprise Product Manager</div></div>
      <div style={{ width: '100%', borderTop: '2px solid #9ba89c', paddingTop: 25, fontSize: 24, display: 'flex' }}>B2B SaaS   /   APIs   /   IoT   /   UCaaS   /   AI</div>
    </div>, { ...size }
  );
}
