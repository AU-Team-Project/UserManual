'use client'
import React from 'react';
import Link from "next/link";

const Navbar = () => {
    return (
        <nav>
            <div>
                <ul>
                    <h1>Get Started</h1>
                    <li><Link href='/'>시작하기</Link></li>
                </ul>
                <ul>
                    <h1>User Manual</h1>
                    <li><Link href='/'>로그인/회원가입</Link></li>
                    <li><Link href='/'>메인 대시보드</Link></li>
                    <li><Link href='/'>메뉴 페이지</Link></li>
                    <li><Link href='/'>식권 결제 페이지</Link></li>
                    <li><Link href='/'>식권 사용 페이지</Link></li>
                    <li><Link href='/'>공지사항</Link></li>
                </ul>
                <ul>
                    <h1>Admin Manual</h1>
                    <li><Link href='/'>로그인/회원가입</Link></li>
                    <li><Link href='/'>어드민 대시보드</Link></li>
                    <li><Link href='/'>공지사항 관리</Link></li>
                    <li><Link href='/'>주문 내역 관리</Link></li>
                    <li><Link href='/'>QR Code 스캐너</Link></li>
                    <li><Link href='/'>공지사항</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;