import Gradients from "@/components/Gradients";
import Link from "next/link";

const Home = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">

      <Gradients />

      {/* Main content */} 
      <div className="relative z-10">
        <header className="flex items-center justify-between px-5 py-4 border-b border-white/10">
          <h1 className="text-3xl tracking-wide text-[#00FF9C]">Nimbus</h1>
          <div className="flex gap-4">
            <Link href={"/login"} className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 transition cursor-pointer">Login</Link>
            <button className="px-4 py-2 rounded-xl bg-[#00FF9C] text-black font-semibold hover:brightness-110 transition cursor-pointer">Get Started</button>
          </div>
        </header>

        <main className="flex flex-col items-center justify-center text-center px-6 py-40 gap-8">
          <h2 className="text-5xl font-extrabold leading-tight max-w-4xl">
            Build, Share & Explore Code Snippets with <span className="text-[#00FF9C]">Nimbus</span>
          </h2>
          <p className="text-lg text-white/70 max-w-2xl">
            An online IDE & snippet-sharing platform for developers and students. Run code, collaborate, and discover solutions effortlessly anytime anywhere.
          </p>
          <button className="mt-6 px-6 py-3 text-lg rounded-full bg-[#00FF9C] hover:bg-[#00FF9Cde] text-black hover:brightness-110 transition font-medium cursor-pointer">
            Try Playground
          </button>
        </main>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6 px-8 py-16">
          {[
            {
              title: "Multi-Language IDE",
              desc: "Write and run code in various languages with zero setup.",
            },
            {
              title: "Snippet Sharing",
              desc: "Create, save, and share code snippets with others.",
            },
            {
              title: "Star & Discover",
              desc: "Browse public snippets and star the ones you love.",
            },
            {
              title: "Extension Support",
              desc: "Install extensions to enhance your workflow.",
            },
            {
              title: "Rapid Development",
              desc: "Focus on building with powerful tools and no setup.",
            },
            {
              title: "Palmtop Support",
              desc: "Use Nimbus seamlessly on mobile and tablets.",
            },
          ].map((feature, idx) => (
            <div
              key={idx}
              className="bg-white/5 p-6 rounded-2xl shadow-md backdrop-blur border border-white/10"
            >
              <h3 className="text-2xl font-semibold text-[#00FF9C] mb-2">
                {feature.title}
              </h3>
              <p className="text-white/70">{feature.desc}</p>
            </div>
          ))}
        </section>

        <footer className="text-center py-8 border-t border-white/10 text-white/50">
          © 2025 Nimbus. Built for developers.
        </footer>
      </div>
    </div>
  );
};

export default Home;
