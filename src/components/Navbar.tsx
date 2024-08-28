import Link from 'next/link';

export function Navbar() {
    return (
        <nav className="bg-gray-800 text-white p-4">
            <ul className="flex space-x-4">
                <li><Link href="/" className="hover:text-gray-300">หน้าหลัก</Link></li>
                {/* เพิ่มลิงก์ไปยังหน้า About ตรงนี้ */}
                <li><Link href="/about" className="hover:text-gray-300">เกี่ยวกับเรา</Link></li>
                {/* เมนูอื่นๆ ที่มีอยู่แล้ว */}
            </ul>
        </nav>
    );
}