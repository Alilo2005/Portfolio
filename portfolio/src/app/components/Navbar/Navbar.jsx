export default function Navbar() {
    return (
      <header className="bg-gray-900 p-4">
        <div className="container mx-auto flex items-center justify-between rounded-full bg-white shadow-lg px-6 py-3">
          {/* Left Section (Navigation Links) */}
          <div className="flex items-center space-x-6">
            <a
              href="#home"
              className="bg-blue-600 text-white px-4 py-2 rounded-full font-medium"
            >
              Home
            </a>
            <a
              href="#about"
              className="text-black hover:text-blue-600 font-medium"
            >
              About
            </a>
            <a
              href="#projects"
              className="text-black hover:text-blue-600 font-medium"
            >
              Services
            </a>
          </div>
  
          {/* Center Section (Logo) */}
          <div className="flex items-center space-x-2">
            <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
              JP
            </div>
            <span className="text-black font-medium">
              Made by <strong>Your Name</strong>
            </span>
          </div>
  
          {/* Right Section (Navigation Links) */}
          <div className="flex items-center space-x-6">
            <a
              href="#resume"
              className="text-black hover:text-blue-600 font-medium"
            >
              Resume
            </a>
            <a
              href="#projects"
              className="text-black hover:text-blue-600 font-medium"
            >
              Projects
            </a>
            <a
              href="#contact"
              className="text-black hover:text-blue-600 font-medium"
            >
              Contact
            </a>
          </div>
        </div>
      </header>
    );
  }
  