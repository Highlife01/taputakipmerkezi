import { useState, useEffect } from 'react';
import { Download, X, Smartphone, Wifi, Bell, Share } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>;
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

const InstallPWA = () => {
    const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
    const [showBanner, setShowBanner] = useState(false);
    const [isIOS, setIsIOS] = useState(false);
    const [isStandalone, setIsStandalone] = useState(false);

    useEffect(() => {
        // 1. Zaten yüklü mü kontrol et
        const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches
            || (window.navigator as any).standalone
            || document.referrer.includes('android-app://');

        setIsStandalone(isInStandaloneMode);

        // 2. iOS kontrolü
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
        setIsIOS(isIOSDevice);

        // 3. Android/Desktop Chrome için yükleme olayını yakala
        const handleBeforeInstall = (e: Event) => {
            e.preventDefault();
            setDeferredPrompt(e as BeforeInstallPromptEvent);

            // Daha önce kapatılmadıysa banner'ı göster
            const dismissed = localStorage.getItem('pwa-banner-dismissed');
            if (!dismissed) {
                setTimeout(() => setShowBanner(true), 3000);
            }
        };

        window.addEventListener('beforeinstallprompt', handleBeforeInstall);

        // 4. iOS için banner göster (otomatik prompt olmadığı için)
        if (isIOSDevice && !isInStandaloneMode) {
            const dismissed = localStorage.getItem('pwa-banner-dismissed');
            if (!dismissed) {
                setTimeout(() => setShowBanner(true), 5000);
            }
        }

        return () => {
            window.removeEventListener('beforeinstallprompt', handleBeforeInstall);
        };
    }, []);

    const handleInstall = async () => {
        if (!deferredPrompt) return;

        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;

        if (outcome === 'accepted') {
            // PWA installed successfully
        }

        setDeferredPrompt(null);
        setShowBanner(false);
    };

    const handleDismiss = () => {
        setShowBanner(false);
        localStorage.setItem('pwa-banner-dismissed', 'true');
    };

    if (isStandalone || !showBanner) return null;

    return (
        <div className="fixed bottom-4 left-4 right-4 z-50 md:left-auto md:right-4 md:w-96">
            <Card className="shadow-2xl border-blue-200 overflow-hidden bg-white">
                <div className="h-1 bg-gradient-to-r from-blue-500 to-blue-600" />
                <CardContent className="p-4 relative">
                    <button
                        onClick={handleDismiss}
                        className="absolute top-2 right-2 p-1 hover:bg-gray-100 rounded-full"
                    >
                        <X size={18} className="text-gray-400" />
                    </button>

                    <div className="flex items-start gap-4">
                        <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                            <Smartphone size={28} className="text-white" />
                        </div>

                        <div className="flex-1">
                            <h3 className="font-bold text-gray-900 mb-1">Uygulamayı Yükle</h3>
                            <p className="text-sm text-gray-600 mb-3">
                                Tapu Takip Merkezi'ni ana ekranınıza ekleyin, daha hızlı erişin!
                            </p>

                            {/* Faydalar */}
                            <div className="flex flex-wrap gap-2 mb-4">
                                <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                    <Wifi size={12} /> Çevrimdışı
                                </span>
                                <span className="inline-flex items-center gap-1 text-xs bg-blue-50 text-blue-700 px-2 py-1 rounded-full">
                                    <Bell size={12} /> Bildirimler
                                </span>
                            </div>

                            {isIOS ? (
                                <div className="text-sm text-gray-600 bg-gray-50 p-2 rounded">
                                    <p className="flex items-center gap-2 mb-1">
                                        <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">1</span>
                                        Safari'de <Share size={14} className="text-blue-500" /> paylaş butonuna tıklayın
                                    </p>
                                    <p className="flex items-center gap-2">
                                        <span className="w-5 h-5 bg-gray-200 rounded flex items-center justify-center text-xs font-bold">2</span>
                                        "Ana Ekrana Ekle" seçeneğini seçin
                                    </p>
                                </div>
                            ) : (
                                <Button
                                    onClick={handleInstall}
                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white"
                                >
                                    <Download size={18} className="mr-2" />
                                    Uygulamayı Yükle
                                </Button>
                            )}
                        </div>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default InstallPWA;
