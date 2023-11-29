import {MenuSection} from '@/app/types/menu';

export const NAVBAR_ITEMS: MenuSection[] = [
    {
        title: 'Get Started',
        items: [
            { name: '시작하기', link: '/' }
        ]
    },
    {
        title: 'User Manual',
        items: [
            { name: '로그인/회원가입', link: '/' },
            { name: '메인 대시보드', link: '/' },
            { name: '메뉴 페이지', link: '/' },
            { name: '식권 결제 페이지', link: '/' },
            { name: '식권 사용 페이지', link: '/' },
            { name: '공지사항', link: '/' }
        ]
    },
    {
        title: 'Admin Manual',
        items: [
            { name: '로그인/회원가입', link: '/' },
            { name: '어드민 대시보드', link: '/' },
            { name: '공지사항 관리', link: '/' },
            { name: '주문 내역 관리', link: '/' },
            { name: 'QR Code 스캐너', link: '/' },
            { name: '공지사항', link: '/' }
        ]
    }
];