import { Navbar, Footer } from "@/components";

export default function AboutPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-4">เกี่ยวกับเรา</h1>
                <p className="mb-4">
                    ยินดีต้อนรับสู่หน้าเกี่ยวกับเรา ที่นี่คุณจะได้เรียนรู้เพิ่มเติมเกี่ยวกับบริษัทและบริการของเรา
                </p>
                <p>
                    เราทุ่มเทเพื่อมอบประสบการณ์ที่ดีที่สุดให้กับลูกค้าของเรา ด้วยโซลูชันที่เป็นนวัตกรรมและการบริการลูกค้าที่ยอดเยี่ยม
                </p>
            </main>
            <Footer />
        </div>
    );
}