import type { Config } from 'tailwindcss';
const config: Config = {darkMode:'class',content:['./app/**/*.{ts,tsx}','./components/**/*.{ts,tsx}'],theme:{extend:{colors:{brand:{50:'#eef8ff',100:'#d9f0ff',500:'#0b84ff',600:'#0067d6',900:'#05254d'},saffron:'#ff9933',indiaGreen:'#138808'},boxShadow:{soft:'0 24px 80px rgba(5,37,77,.12)'}}},plugins:[]};
export default config;
