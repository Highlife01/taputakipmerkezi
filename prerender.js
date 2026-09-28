/**
 * Prerender Script
 * Build sonrası önemli sayfaları statik HTML olarak oluşturur
 * 
 * Kullanım: npm run build && npm run prerender
 */

import puppeteer from 'puppeteer';
import { createServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
    '/',
    '/hizmetler',
    '/tapu-islemleri',
    '/tapu-sureci',
    '/veraset-intikal',
    '/kvkk',
    '/hizmet-sartlari',
    // Hizmetler
    '/tapu-islemleri/tapu-devri',
    '/tapu-islemleri/satis-tapusu',
    '/tapu-islemleri/miras-tapu-islemleri',
    '/tapu-islemleri/hisseli-tapu',
    '/tapu-islemleri/ipotek-kaldirma',
    '/tapu-islemleri/iskan-sorgulama',
    '/tapu-islemleri/veraset-intikal',
    '/tapu-islemleri/vergi-ilisik-kesme',
    // Büyük şehirler
    '/tapu-takip/istanbul',
    '/tapu-takip/ankara', 
    '/tapu-takip/izmir',
    '/tapu-takip/bursa',
    '/tapu-takip/antalya',
    '/tapu-takip/adana',
    '/tapu-takip/konya',
    '/tapu-takip/gaziantep',
    '/tapu-takip/mersin',
    '/tapu-takip/kocaeli',
    '/istanbul-iskan-sorgulama',
    '/ankara-iskan-sorgulama',
    '/izmir-iskan-sorgulama',
];

const DIST_DIR = './dist';
const PORT = 4173;

async function prerender() {
    console.log('🚀 Prerender başlatılıyor...\n');
    
    // Preview server'ı başlat
    const { preview } = await import('vite');
    const server = await preview({
        preview: { port: PORT, strictPort: true },
        build: { outDir: DIST_DIR }
    });
    
    const baseUrl = `http://localhost:${PORT}`;
    
    // Puppeteer'ı başlat
    const browser = await puppeteer.launch({
        headless: 'new',
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    
    const page = await browser.newPage();
    
    let success = 0;
    let failed = 0;
    
    for (const route of routes) {
        try {
            const url = `${baseUrl}${route}`;
            console.log(`📄 Rendering: ${route}`);
            
            await page.goto(url, { 
                waitUntil: 'networkidle0',
                timeout: 30000 
            });
            
            // React'in render etmesini bekle
            await page.waitForSelector('#root > *', { timeout: 10000 });
            
            // HTML'i al
            const html = await page.content();
            
            // Dosya yolunu oluştur
            const filePath = route === '/' 
                ? path.join(DIST_DIR, 'index.html')
                : path.join(DIST_DIR, route, 'index.html');
            
            // Klasörü oluştur
            const dir = path.dirname(filePath);
            if (!fs.existsSync(dir)) {
                fs.mkdirSync(dir, { recursive: true });
            }
            
            // HTML'i yaz (UTF-8 encoding ile)
            fs.writeFileSync(filePath, html, { encoding: 'utf8' });
            console.log(`   ✅ Saved: ${filePath}`);
            success++;
            
        } catch (error) {
            console.error(`   ❌ Error: ${route} - ${error.message}`);
            failed++;
        }
    }
    
    await browser.close();
    server.httpServer.close();
    
    console.log(`\n📊 Sonuç: ${success} başarılı, ${failed} başarısız`);
    console.log('✨ Prerender tamamlandı!');
}

prerender().catch(console.error);
