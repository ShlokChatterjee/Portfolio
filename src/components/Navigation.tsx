// @ts-nocheck
"use client";
import React from 'react';
import StaggeredMenu from './StaggeredMenu';

const menuItems = [
  { label: 'HOME', link: '#' },
  { label: 'ABOUT ME', link: '#about' },
  { label: 'PROJECTS', link: '#projects' },
  { label: 'TECH SHOP', link: '#techshop' },
  { label: 'CERTIFICATION', link: '#certifications' },
  { label: 'EDUCATION', link: '#education' },
  { label: 'ECA', link: '#eca' }
];

export default function Navigation() {
  return (
    <StaggeredMenu
      items={menuItems}
      position="right"
      isFixed={true}
      accentColor="#5227FF"
      changeMenuColorOnOpen={true}
      colors={["#B19EEF", "#5227FF", "#ffffff"]}
      logoUrl=""
    />
  );
}
