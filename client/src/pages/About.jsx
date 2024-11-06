import { HiOutlineGlobeAlt, HiOutlineCheckBadge, HiOutlineAcademicCap } from "react-icons/hi2";
export default function About() {

  const Values = [
    {
      title: "Sustainability",
      description: "We are committed to offering products that minimize environmental impact and promote sustainable living.",
      icon: <HiOutlineGlobeAlt className="h-10 w-10 text-green-500 me-4" />
    },
    {
      title: "Quality",
      description: "We carefully curate our product selection to ensure durability, functionality, and eco-friendliness.",
      icon: <HiOutlineCheckBadge className="h-10 w-10 text-blue-500 me-4" />
    },
    {
      title: "Education",
      description: "We strive to educate and inspire our community about sustainable living and environmental issues.",
      icon: <HiOutlineAcademicCap className="h-10 w-10 text-yellow-500 me-4" />
    }
  ];

  return <>
    <h1 className="text-4xl font-bold text-center mb-12">About EcoShop</h1>

    <section className="mb-16">
      <div className="flex flex-row items-center gap-8">
        <div className="w-1/2">
          <img
            src="https://images.unsplash.com/photo-1518352394508-ae7f820bf210?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="EcoShop Team"
            className="rounded-lg shadow-md"
          />
        </div>
        <div className="w-1/2 text-2xl">
          <h2 className="text-2xl font-semibold mb-4 text-center">Our Story</h2>
          <p className="text-gray-700 mb-4">
            Founded in 2020, EcoShop was born from a passion for sustainability and a desire to make eco-friendly products more accessible to everyone. Our journey began when our founders, Sarah and Mike, realized the challenge of finding high-quality, environmentally conscious goods in one place.
          </p>
          <p className="text-gray-700">
            What started as a small online store has grown into a community of like-minded individuals committed to reducing their environmental impact without compromising on quality or style.
          </p>
        </div>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Mission</h2>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-gray-700 text-center text-lg italic">
          "To provide sustainable, eco-friendly products that empower individuals to make environmentally conscious choices in their everyday lives, while fostering a community dedicated to protecting our planet."
        </p>
      </div>
    </section>

    <section className="mb-16">
      <h2 className="text-2xl font-semibold mb-6 text-center">Our Values</h2>
      <div className="grid grid-cols-3 gap-8">
        {Values.map((value, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">

            <h3 className="text-xl font-semibold mb-2 flex items-center">{value.icon} {value.title}</h3>
            <p className="text-gray-700">{value.description}</p>
          </div>
        ))}
      </div>
    </section>

    <section>
      <h2 className="text-2xl font-semibold mb-6 text-center">Join Our Mission</h2>
      <div className="bg-green-100 p-6 rounded-lg shadow-md text-center">
        <p className="text-gray-800 mb-4">
          We believe that every small action counts. By choosing eco-friendly products, you're contributing to a more sustainable future. Join us in our mission to make the world a greener place, one purchase at a time.
        </p>
        <button className="bg-green-600 text-white px-6 py-2 rounded-full hover:bg-green-700 transition duration-300">
          Shop Now
        </button>
      </div>
    </section>
  </>;
}
