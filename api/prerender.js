/**
 * Vercel Edge Function - Prerender Proxy
 * Botları Prerender.io'ya yönlendirir
 */

export const config = {
    runtime: 'edge',
};

const BOT_AGENTS = [
    'googlebot', 'bingbot', 'yandex', 'baiduspider',
    'facebookexternalhit', 'twitterbot', 'linkedinbot',
    'slackbot', 'whatsapp', 'telegrambot', 'applebot'
];

export default async function handler(request) {
    const userAgent = request.headers.get('user-agent')?.toLowerCase() || '';
    const url = new URL(request.url);
    const path = url.searchParams.get('path') || '/';
    
    // Bot kontrolü
    const isBot = BOT_AGENTS.some(bot => userAgent.includes(bot));
    
    if (!isBot) {
        return new Response('Not a bot', { status: 400 });
    }
    
    const token = process.env.PRERENDER_TOKEN;
    if (!token) {
        return new Response('Prerender token not configured', { status: 500 });
    }
    
    const targetUrl = `https://www.taputakipmerkezi.com.tr${path}`;
    const prerenderUrl = `https://service.prerender.io/${targetUrl}`;
    
    try {
        const response = await fetch(prerenderUrl, {
            headers: {
                'X-Prerender-Token': token,
            },
        });
        
        if (response.ok) {
            const html = await response.text();
            return new Response(html, {
                status: 200,
                headers: {
                    'Content-Type': 'text/html; charset=utf-8',
                    'X-Prerendered': 'true',
                    'Cache-Control': 'public, max-age=3600',
                },
            });
        }
        
        return new Response('Prerender failed', { status: response.status });
    } catch (error) {
        return new Response('Prerender error', { status: 500 });
    }
}
