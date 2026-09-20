export default function Navbar() {
    return (
        <nav className="flex items-center justify-between px8 py-6">
            <h2 className="text-xl font-bold text-white">
                nova 
                </h2>
                <div className="flex gap-6">
                    <a href="#features">Características</a> 
                    <a href="#about">Nosotros</a> 
                    <a href="#contact">Contacto</a>
                </div>
        </nav>
    )
}