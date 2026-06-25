
export default function Navbar(){
  return(
    <div>
      <nav className="bg-green-800 p-7 rounded-xl flex flex-col items-center justify-evenly sm:flex-row sm:p-1">
        <a className="text-xl font-medium text-white sm:text-sm" href="/">Home</a>
        <a className="text-xl font-medium text-white sm:text-sm" href="/child">Child</a>
        <a className="text-xl font-medium text-white sm:text-sm" href="/handler">Handle It</a>
        <a className="text-xl font-medium text-white sm:text-sm" href="/login">Login</a>
        <a className="text-xl font-medium text-white sm:text-sm" href="/register">Get Started</a>
      </nav>
    </div>
  )
}