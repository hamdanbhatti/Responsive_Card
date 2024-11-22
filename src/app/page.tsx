import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto p-6 bg-gray-900 min-h-screen">
      <div className="flex flex-wrap gap-8 justify-center">
        <div className="flex-1 min-w-[280px] max-w-[400px] bg-gray-800 rounded-xl p-6 
          border border-gray-700 transform transition-all duration-300 
          hover:scale-105 hover:bg-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
          <div className="flex justify-center">
            <Image
              src={"/images/3459.png_1200.png"}
              alt={"iPhone 14 Pro"}
              width={200}
              height={200}
              className="object-contain h-48 transform transition-transform hover:scale-110"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">iPhone 14 Pro</h1>
            <p className="text-xl font-semibold text-blue-400 mt-2">RS 15,000</p>
            <p className="mt-3 text-gray-300">
              Experience the cutting-edge technology with the iPhone 14 Pro. 
              Featuring a stunning ProMotion display, advanced camera system, 
              and powerful A16 Bionic chip. Perfect for photography enthusiasts 
              and power users who demand the best in mobile technology.
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] max-w-[400px] bg-gray-800 rounded-xl p-6 
          border border-gray-700 transform transition-all duration-300 
          hover:scale-105 hover:bg-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
          <div className="flex justify-center">
            <Image
              src={"/images/headphonepng.parspng.com-6.png"}
              alt={"Premium Wireless Headphones"}
              width={200}
              height={200}
              className="object-contain h-48 transform transition-transform hover:scale-110"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">Premium Wireless Headphones</h1>
            <p className="text-xl font-semibold text-blue-400 mt-2">Rs 2,000</p>
            <p className="mt-3 text-gray-300">
              Immerse yourself in crystal-clear audio with our premium wireless headphones. 
              Featuring active noise cancellation, 30-hour battery life, and 
              comfortable over-ear design. Perfect for music lovers and professionals 
              seeking high-quality sound experience.
            </p>
          </div>
        </div>

        <div className="flex-1 min-w-[280px] max-w-[400px] bg-gray-800 rounded-xl p-6 
          border border-gray-700 transform transition-all duration-300 
          hover:scale-105 hover:bg-gray-700 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/20">
          <div className="flex justify-center">
            <Image
              src={"/images/Laptop-computer-with-apps-icons-interface-on-transparent-background-PNG.png"}
              alt={"Ultra-Slim Laptop"}
              width={200}
              height={200}
              className="object-contain h-48 transform transition-transform hover:scale-110"
            />
          </div>
          <div className="mt-4">
            <h1 className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">Ultra-Slim Laptop</h1>
            <p className="text-xl font-semibold text-blue-400 mt-2">Rs 40,000</p>
            <p className="mt-3 text-gray-300">
              Power through your tasks with this high-performance laptop. 
              Featuring the latest processor, stunning 4K display, and all-day 
              battery life. Ideal for professionals, creators, and students who 
              need reliable performance on the go.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
