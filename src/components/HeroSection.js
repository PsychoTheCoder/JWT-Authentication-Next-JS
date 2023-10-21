import Link from 'next/link'
import React from 'react'

function HeroSection() {
  return (
    <div className="hero " style={{background: 'linear-gradient(rgba(0,0,0,0.7), rgba(0,0,0,0.7)),url(https://daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.jpg)', height: "100vh"}}>
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div style={{
        color: "white"
    }} className="max-w-md">
      <h1 className="mb-5 text-5xl !text-white font-bold">Simplify Your Student Finances</h1>
      <p className="mb-5">Our Single-Student Hostel Expense Tracker empowers you to take control of your financial life, one expense at a time. Effortlessly track spending, set budgets, and achieve your financial goals with precision and peace of mind.</p>
      <Link href={"/signup"} className="btn btn-primary">Get Started</Link>
    </div>
  </div>
</div>
  )
}

export default HeroSection