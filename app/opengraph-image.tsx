import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OG() {
    return new ImageResponse(
        (
            <div
                style={{
                    height: '100%',
                    width: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundImage:
                        'radial-gradient(1200px 600px at 100% 0%, rgba(168,85,247,.20), transparent 55%),' +
                        'radial-gradient(1200px 600px at 0% 100%, rgba(5,236,244,.18), transparent 55%),' +
                        'linear-gradient(135deg, #090a10 0%, #0b0d15 40%, #0d1020 100%)',
                    color: '#fff',
                    fontSize: 56,
                    letterSpacing: -0.5,
                    fontFamily: 'ui-sans-serif, system-ui, -apple-system, Segoe UI, Roboto, Inter, Arial',
                }}
            >
                <div style={{ display: 'flex', gap: 40, alignItems: 'center' }}>
                    <div
                        style={{
                            position: 'relative',
                            width: 170,
                            height: 170,
                            borderRadius: '50%',
                            background:
                                'radial-gradient(circle at 30% 30%, #6ee7f9 0%, #8b5cf6 60%, transparent 80%)',
                            boxShadow: '0 20px 120px rgba(139,92,246,0.55), 0 0 80px rgba(5,236,244,0.35) inset',
                            border: '1px solid rgba(255,255,255,0.08)',
                        }}
                    />

                    <div style={{ display: 'flex', flexDirection: 'column', gap: 10, maxWidth: 820 }}>
                        <div style={{ fontWeight: 800, fontSize: 68, lineHeight: 1.05 }}>
                            Soroosh&nbsp;Morshedi <span style={{ opacity: .8, fontWeight: 700 }}>| سروش&nbsp;مرشدی</span>
                        </div>

                        <div style={{ fontSize: 30, opacity: 0.95 }}>
                            Software Architect · Full-Stack Developer (Django / Go / FastAPI) · Next.js / React · Vue / Nuxt
                        </div>

                        <div style={{ fontSize: 28, opacity: 0.9 }}>
                            معمار نرم‌افزار و توسعه‌دهنده فول‌استک — سیستم‌های مقیاس‌پذیر، میکروسرویس، DevOps، فین‌تک و فروشگاهی
                        </div>

                        <div style={{ marginTop: 8, fontSize: 24, opacity: 0.75 }}>
                            sorooshmorshedi.ir
                        </div>
                    </div>
                </div>
            </div>
        ),
        size
    );
}
