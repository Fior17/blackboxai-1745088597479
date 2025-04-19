import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gray-100 py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl font-bold mb-4">Your Ride To Success</h1>
          <p className="mb-6 max-w-xl mx-auto">
            There are many variations of passages of worem Ipsum available, but the majority
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
          >
            View Services
          </a>
          {/* Hero shapes images */}
          <div className="absolute top-0 left-0">
            <img src="/assets/images/hero-shape.png" alt="Hero Shape" />
          </div>
          <div className="absolute top-0 right-0">
            <img src="/assets/images/hero-shape.png" alt="Hero Shape" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2">
            <img
              src="/assets/images/about-banner.jpg"
              alt="About Banner"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-12 mt-8 md:mt-0">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us</h2>
            <h3 className="text-xl font-semibold mb-4">We Are Professional Logistics & cargo Agency</h3>
            <p className="mb-6">
              Sed ut perspiciatis unde omnis iste natus error volup tatem accusantium dolorem que laudantium, totam inventore.
            </p>
            <ul className="list-disc list-inside space-y-2 mb-6">
              <li>Go beyond logistics, make the world go round and revolutionize business.</li>
              <li>Logistics through innovation, dedication, and technology. ready, set, done.</li>
              <li>We take pride in serving our customers safely. together with passion.</li>
              <li>Imagination what we can easily see is only a small percentage.</li>
              <li>Quality never goes out of style. safety, quality, professionalism.</li>
              <li>The quality shows in every move we make where business lives.</li>
            </ul>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
          {/* About shapes */}
          <img
            src="/assets/images/about-shape-1.png"
            alt="About Shape 1"
            className="absolute top-0 left-0 hidden md:block"
          />
          <img
            src="/assets/images/about-shape-2.png"
            alt="About Shape 2"
            className="absolute bottom-0 right-0 hidden md:block"
          />
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Trusted For Our Services</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {/* Service Item */}
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-1.png"
                alt="Air Freight"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">01 Air Freight</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
            {/* Repeat for other services */}
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-2.png"
                alt="Road Freight"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">02 Road Freight</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-3.png"
                alt="Ocean Freight"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">03 Ocean Freight</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-4.png"
                alt="Rail Freight"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">04 Rail Freight</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-5.png"
                alt="Warehousing"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">05 Warehousing</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
            <div className="bg-white p-6 rounded shadow text-center">
              <img
                src="/assets/images/service-icon-6.png"
                alt="Project Cargo"
                className="mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">06 Project Cargo</h3>
              <p className="mb-4">
                Our aim is to optimize and improve your supply chain so that we can give you the best service.
              </p>
              <a href="#" className="text-blue-600 hover:underline">
                View Detail
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Estimation Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-6">Has a wide range of solutions</h2>
          <p className="mb-12 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex flex-col items-center">
              <img
                src="/assets/images/feature-icon-1.png"
                alt="Solutions and specialized"
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Solutions and specialized</h3>
              <p>Our aim is to optimize and improve your supply chain so that we can give you the best service</p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/images/feature-icon-2.png"
                alt="Multiple warehouses"
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Multiple warehouses</h3>
              <p>
                We provide multiple drop off and pickup locations so you don't have to worry. And you should not face any kind...
              </p>
            </div>
            <div className="flex flex-col items-center">
              <img
                src="/assets/images/feature-icon-3.png"
                alt="Tracking made easy"
                className="mb-4"
              />
              <h3 className="text-xl font-semibold mb-2">Tracking made easy</h3>
              <p>
                A tracking number for the entire process. so that you can find the exact position. this process will help you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Project Item */}
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-1.jpg"
                alt="Warehouse inventory"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Warehousing , Distrbution</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Warehouse inventory</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            {/* Repeat for other projects */}
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-2.jpg"
                alt="Minimize Manufacturing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Logistics, Analytics</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-3.jpg"
                alt="Warehouse inventory"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Warehousing , Distrbution</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Warehouse inventory</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-4.jpg"
                alt="Minimize Manufacturing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Logistics, Analytics</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-5.jpg"
                alt="Warehouse inventory"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Warehousing , Distrbution</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Warehouse inventory</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
            <div className="bg-white rounded shadow overflow-hidden">
              <img
                src="/assets/images/project-6.jpg"
                alt="Minimize Manufacturing"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-2">Logistics, Analytics</p>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">Minimize Manufacturing</a>
                </h3>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Blogs Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">Recent news & events</h2>
          <p className="text-center mb-12 max-w-3xl mx-auto">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry the standard dummy text ever since the when an printer took.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <article className="bg-gray-100 rounded shadow overflow-hidden">
              <img
                src="/assets/images/blog-1.jpg"
                alt="At the end of the day, going forward, a new normal that has evolved from. your only logistic partner."
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">02 Aug</time>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">
                    At the end of the day, going forward, a new normal that has evolved from. your only logistic partner.
                  </a>
                </h3>
                <p className="mb-4">
                  New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard dummy text ever since the when an printer.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </article>
            <article className="bg-gray-100 rounded shadow overflow-hidden">
              <img
                src="/assets/images/blog-2.jpg"
                alt="Going forward, a new normal that has evolved from generation. moving your products across all borders."
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <time className="text-sm text-gray-500">21 Aug</time>
                <h3 className="text-xl font-semibold mb-2">
                  <a href="#" className="hover:underline">
                    Going forward, a new normal that has evolved from generation. moving your products across all borders.
                  </a>
                </h3>
                <p className="mb-4">
                  New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit. typesetting industry the standard dummy text ever since the when an printer.
                </p>
                <a href="#" className="text-blue-600 hover:underline">Read More</a>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-100">
        <div className="container mx-auto px-6 text-center">
          <img
            src="/assets/images/newsletter-banner.png"
            alt="newsletter banner"
            className="mx-auto mb-8"
          />
          <h2 className="text-3xl font-bold mb-6">Subscribe for offers and news</h2>
          <form className="max-w-md mx-auto flex">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-grow px-4 py-3 rounded-l border border-gray-300 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-3 rounded-r hover:bg-blue-700 transition"
            >
              Subscribe Now
            </button>
          </form>
        </div>
      </section>

      {/* Back to top */}
      <div className="text-center py-6">
        <a href="#top" className="text-blue-600 hover:underline">
          Back to Top
        </a>
      </div>
    </div>
  )
}

export default Home
