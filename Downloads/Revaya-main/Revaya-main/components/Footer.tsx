// "use client"

// import React from "react"
// import Image from "next/image"
// import Link from "next/link"

// export default function Footer() {
//   const currentYear = new Date().getFullYear()

//   const corporateLinks = [
//     { label: "About", href: "#hero" },
//     { label: "Services", href: "#services" },
//     { label: "Case Studies", href: "#portfolio" },
//     { label: "Why us", href: "#insights" },
//     { label: "Contact us", href: "#contact" },
//   ]

//   const serviceLinks = [
//     { label: "Custom ERP Solutions", href: "#services" },
//     { label: "SaaS Platforms", href: "#services" },
//     { label: "Web Applications", href: "#services" },
//     { label: "Automation Systems", href: "#services" },
//     { label: "UI/UX Design", href: "#services" },
//     { label: "Mobile Development", href: "#services" },
//   ]

//   const legalLinks = [
//     { label: "Privacy Policy", href: "#" },
//     { label: "Terms of Service", href: "#" },
//   ]

//   return (
//     <footer 
//       style={{
//         width: "100%",
//         backgroundColor: "#000000",
//         borderTop: "1px solid rgba(255, 255, 255, 0.08)",
//         position: "relative",
//         zIndex: 50,
//       }}
//     >
//       {/* Central Wrapper Grid */}
//       <div
//         style={{
//           maxWidth: "1340px",
//           margin: "0 auto",
//           padding: "5rem 2rem 2.5rem 2rem",
//         }}
//       >
//         <div
//           style={{
//             display: "grid",
//             gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
//             gap: "3.5rem",
//             marginBottom: "4rem",
//           }}
//         >
//           {/* Logo & Corporate Vision Block */}
//           <div style={{ display: "flex", flexDirection: "column", gap: "1.4rem" }}>
//             <Link href="/" style={{ display: "inline-block" }}>
//               <Image
//                 src="/loogo.png" 
//                 alt="Revaya Logo"
//                 width={124}
//                 height={42}
//                 style={{ objectFit: "contain" }}
//                 priority
//               />
//             </Link>
//             <p
//               style={{
//                 fontFamily: "var(--font-inter)",
//                 fontSize: "14px",
//                 color: "rgba(255, 255, 255, 0.52)",
//                 lineHeight: "1.65",
//                 maxWidth: "280px",
//                 margin: 0,
//               }}
//             >
//               Architecting production-ready custom business platforms, automations, and enterprise frameworks.
//             </p>
//           </div>

//           {/* Navigation Links Column */}
//           <div>
//             <h4
//               style={{
//                 fontFamily: "var(--font-space-grotesk)",
//                 fontSize: "15px",
//                 fontWeight: 600,
//                 color: "#ffffff",
//                 letterSpacing: "0.06em",
//                 textTransform: "uppercase",
//                 marginBottom: "1.25rem",
//                 marginTop: 0,
//               }}
//             >
//               Navigation
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
//               {corporateLinks.map((link, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={link.href}
//                     style={{
//                       fontFamily: "var(--font-inter)",
//                       fontSize: "14px",
//                       color: "rgba(255, 255, 255, 0.6)",
//                       textDecoration: "none",
//                       transition: "color 0.2s ease, transform 0.2s ease",
//                       display: "inline-block"
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = "#0190F9"
//                       e.currentTarget.style.transform = "translateX(3px)"
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"
//                       e.currentTarget.style.transform = "translateX(0px)"
//                     }}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>

//           {/* Targeted System Solutions Column */}
//           <div>
//             <h4
//               style={{
//                 fontFamily: "var(--font-space-grotesk)",
//                 fontSize: "15px",
//                 fontWeight: 600,
//                 color: "#ffffff",
//                 letterSpacing: "0.06em",
//                 textTransform: "uppercase",
//                 marginBottom: "1.25rem",
//                 marginTop: 0,
//               }}
//             >
//               Services
//             </h4>
//             <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: "0.8rem" }}>
//               {serviceLinks.map((link, idx) => (
//                 <li key={idx}>
//                   <Link
//                     href={link.href}
//                     style={{
//                       fontFamily: "var(--font-inter)",
//                       fontSize: "14px",
//                       color: "rgba(255, 255, 255, 0.6)",
//                       textDecoration: "none",
//                       transition: "color 0.2s ease, transform 0.2s ease",
//                       display: "inline-block"
//                     }}
//                     onMouseEnter={(e) => {
//                       e.currentTarget.style.color = "#0190F9"
//                       e.currentTarget.style.transform = "translateX(3px)"
//                     }}
//                     onMouseLeave={(e) => {
//                       e.currentTarget.style.color = "rgba(255, 255, 255, 0.6)"
//                       e.currentTarget.style.transform = "translateX(0px)"
//                     }}
//                   >
//                     {link.label}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         </div>

//         {/* Clean Isolation Border Line */}
//         <div 
//           style={{ 
//             width: "100%", 
//             height: "1px", 
//             backgroundColor: "rgba(255, 255, 255, 0.08)",
//             marginBottom: "1.75rem"
//           }} 
//         />

//         {/* Copyright Metadata and Legal Links */}
//         <div
//           style={{
//             display: "flex",
//             flexWrap: "wrap",
//             justifyContent: "space-between",
//             alignItems: "center",
//             gap: "1.5rem",
//           }}
//         >
//           <p
//             style={{
//               fontFamily: "var(--font-inter)",
//               fontSize: "13px",
//               color: "rgba(255, 255, 255, 0.45)",
//               margin: 0,
//             }}
//           >
//             &copy; {currentYear} Revaya. All rights reserved.
//           </p>

//           <div style={{ display: "flex", gap: "1.75rem" }}>
//             {legalLinks.map((link, idx) => (
//               <Link
//                 key={idx}
//                 href={link.href}
//                 style={{
//                   fontFamily: "var(--font-inter)",
//                   fontSize: "13px",
//                   color: "rgba(255, 255, 255, 0.45)",
//                   textDecoration: "none",
//                   transition: "color 0.2s ease",
//                 }}
//                 onMouseEnter={(e) => (e.currentTarget.style.color = "#ffffff")}
//                 onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255, 255, 255, 0.45)")}
//               >
//                 {link.label}
//               </Link>
//             ))}
//           </div>
//         </div>
//       </div>
//     </footer>
//   )
// }





"use client"

import React from "react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const navLinks = [
    { label: "About", href: "#hero" },
    { label: "Services", href: "#services" },
    { label: "Case Studies", href: "#portfolio" },
    { label: "Why Us", href: "#insights" },
    { label: "Contact Us", href: "#contact" },
  ]

  // Updated paths for icons including correct Twitter (X) and functional links
  const socialIcons = [
    { name: "Facebook", href: "https://facebook.com", d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" },
    { name: "LinkedIn", href: "https://linkedin.com", d: "M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z M2 9h4v12H2z M4 2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z" },
    { name: "Email", href: "mailto:hello@revaya.com", d: "M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z M22 6l-10 7L2 6" },
    { name: "Twitter", href: "https://twitter.com", d: "M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" }
  ]

  return (
    <footer style={{ backgroundColor: "#000000", padding: "4rem 2rem", textAlign: "center", borderTop: "1px solid rgba(255, 255, 255, 0.08)" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        
        {/* Logo & Description - Subtext width restricted */}
        <div style={{ marginBottom: "2rem" }}>
          <Image src="/loogo.png" alt="Revaya Logo" width={110} height={35} style={{ margin: "0 auto 1rem auto", objectFit: "contain" }} />
          <p style={{ color: "rgba(255, 255, 255, 0.5)", fontSize: "13px", lineHeight: "1.5", maxWidth: "400px", margin: "0 auto" }}>
            Architecting production-ready custom business platforms, automations, and enterprise frameworks.
          </p>
        </div>

        {/* Navigation Links */}
        <nav style={{ display: "flex", justifyContent: "center", gap: "1.5rem", flexWrap: "wrap", marginBottom: "2rem" }}>
          {navLinks.map((link, i) => (
            <Link key={i} href={link.href} style={{ color: "#ffffff", textDecoration: "none", fontSize: "13px", display: "flex", alignItems: "center", gap: "6px" }}>
              <span style={{ width: "5px", height: "5px", borderRadius: "50%", backgroundColor: "#0190F9" }} />
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons - Now all clickable */}
        <div style={{ display: "flex", justifyContent: "center", gap: "1.2rem", marginBottom: "2rem" }}>
          {socialIcons.map((item, i) => (
            <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" 
               style={{ width: "40px", height: "40px", borderRadius: "50%", backgroundColor: "#111111", display: "flex", alignItems: "center", justifyContent: "center", color: "#ffffff", transition: "0.3s" }}
               onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = "#0190F9" }}
               onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = "#111111" }}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d={item.d} /></svg>
            </a>
          ))}
        </div>

        {/* Copyright */}
        <div style={{ color: "rgba(255, 255, 255, 0.3)", fontSize: "12px" }}>
          &copy; {currentYear} Revaya. All rights reserved.
        </div>
      </div>
    </footer>
  )
}