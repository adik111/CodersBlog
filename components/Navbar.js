import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div>
      <style jsx>
        {`
          .mainNav {
            margin-top: 40px;
          }

          .mainNav ul {
            display: flex;

            justify-content: center;
          }
          .mainNav ul li {
            margin: 0 20px;
            list-style: none;
            cursor: pointer;
            font-weight: bold;
          }
        `}
      </style>
      <nav className="mainNav">
        <ul>
          <Link href="/">
            <li>Home</li>
          </Link>
          <Link href="/blog">
            <li>Blogs</li>
          </Link>
          <Link href="/about">
            <li>About</li>
          </Link>
          <Link href="/contact">
            <li>Contacts</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}
