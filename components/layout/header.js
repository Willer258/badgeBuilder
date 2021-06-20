import Link from 'next/link'
function Header() {
  return (
    <header className="flex justify-around p-5 bg-gray-200">
      <div><Link href="/"><label className="text-3xl text-blue-700">Page Builder</label></Link></div>
      <div><ul className="text-blue-500 uppercase flex space-x-10">
        <li className="p-5 rounded hover:text-white hover:bg-gray-500 transition"><Link href="/badges">Tout les badges</Link> </li>
        <li className="p-5 rounded hover:text-white hover:bg-gray-500 transition"><Link href="/makebadge">Creer un badge</Link></li>
        <li className="p-5 rounded hover:text-white hover:bg-gray-500 transition"><Link href="/about">About</Link></li>
      </ul></div>
    </header>
  )
}
export default Header;