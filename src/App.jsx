import React from "react";

const heroImg = "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1600&q=80";
const darjeelingImg = "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=800&q=80";
const sikkimImg = "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=800&q=80";
const kurseongImg = "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?auto=format&fit=crop&w=800&q=80";
const kalimpongImg = "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=800&q=80";
const guestImgs = [
  "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80"
];

function Section({ children, ...props }) {
  return <section {...props} className={"my-12 max-w-6xl mx-auto px-4 " + (props.className || "")}>{children}</section>;
}

export default function HimalayanHomestay() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-100 via-blue-50 to-brown-100 font-sans">
      <nav className="flex justify-between items-center px-8 py-4 bg-white/80 shadow-md sticky top-0 z-50">
        <div className="font-bold text-2xl text-green-800">Himalayan Homestay Future</div>
        <div className="hidden md:flex gap-6 text-md text-gray-700">
          <a href="#current" className="hover:text-green-700">Current State</a>
          <a href="#quality" className="hover:text-green-700">Quality</a>
          <a href="#roadmap" className="hover:text-green-700">10-Year Roadmap</a>
          <a href="#resources" className="hover:text-green-700">For Owners</a>
          <a href="#guests" className="hover:text-green-700">For Guests</a>
          <a href="#community" className="hover:text-green-700">Community</a>
        </div>
        <button className="bg-green-700 text-white px-5 py-2 rounded-xl">Join Us</button>
      </nav>

      <header className="relative h-[60vh] flex items-center justify-center">
        <img src={heroImg} alt="Himalayas" className="absolute w-full h-full object-cover object-center top-0 left-0 z-0 opacity-70" />
        <div className="z-10 text-center bg-white/80 px-8 py-10 rounded-2xl shadow-xl max-w-2xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-green-900 mb-2">Discover the Heart & Soul of the Eastern Himalayas</h1>
          <p className="text-lg text-green-800 mb-4">Darjeeling | Sikkim | Kurseong | Kalimpong</p>
          <div className="text-xl md:text-2xl font-bold text-blue-800 mb-2">A 10-Year Vision: Sustainable, High-Quality Homestays by 2035</div>
          <p className="text-md text-gray-700">Step into a new era—where every guest is family and every host is a legend.</p>
        </div>
      </header>

      <Section className="bg-green-50 py-8">
        <h2 className="text-3xl font-bold text-center mb-2">What Guests Are Saying</h2>
        <div className="flex gap-4 justify-center mb-4 flex-wrap">
          {guestImgs.map((src, i) => (
            <img key={i} src={src} className="rounded-2xl shadow-lg w-40 h-40 object-cover border-4 border-brown-300" alt="Guest" />
          ))}
        </div>
        <div className="mx-auto max-w-xl">
          <div className="p-4 text-center">“Felt like a home away from home in Darjeeling!”</div>
          <div className="p-4 text-center">“Yoga at sunrise in Sikkim—unreal experience.”</div>
          <div className="p-4 text-center">“The best food, family, and WiFi in the hills.”</div>
        </div>
      </Section>

      <Section id="current" className="bg-white">
        <h2 className="text-2xl font-bold mb-6 text-green-900 text-center">The Current State of Homestays</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="rounded-2xl bg-green-50 shadow-md overflow-hidden">
            <img src={darjeelingImg} alt="Darjeeling" className="rounded-t-2xl h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-green-800">Darjeeling</h3>
              <ul className="text-sm text-gray-700 mb-2">
                <li>Homestays: 700+</li>
                <li>Services: Tea tours, guides, WiFi, Nepali food</li>
                <li>Guests: 50% OTA, 30% social, 20% walk-in/community</li>
              </ul>
              <span className="italic text-green-700">“Guests love our chai by the fire.”</span>
            </div>
          </div>
          <div className="rounded-2xl bg-blue-50 shadow-md overflow-hidden">
            <img src={sikkimImg} alt="Sikkim" className="rounded-t-2xl h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-blue-800">Sikkim</h3>
              <ul className="text-sm text-gray-700 mb-2">
                <li>Homestays: 500+</li>
                <li>Services: Organic food, hikes, fast WiFi</li>
                <li>Guests: 40% OTA, 40% social, 20% tour ops</li>
              </ul>
              <span className="italic text-blue-700">“Started with 1 room, now 12+ countries.”</span>
            </div>
          </div>
          <div className="rounded-2xl bg-brown-50 shadow-md overflow-hidden">
            <img src={kurseongImg} alt="Kurseong" className="rounded-t-2xl h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-brown-800">Kurseong</h3>
              <ul className="text-sm text-gray-700 mb-2">
                <li>Homestays: 200+</li>
                <li>Services: Toy train rides, storytelling, WiFi</li>
                <li>Guests: 60% OTA, 20% community, 20% walk-in</li>
              </ul>
              <span className="italic text-brown-700">“Our guests come as tourists, leave as friends.”</span>
            </div>
          </div>
          <div className="rounded-2xl bg-green-50 shadow-md overflow-hidden">
            <img src={kalimpongImg} alt="Kalimpong" className="rounded-t-2xl h-40 w-full object-cover" />
            <div className="p-4">
              <h3 className="font-bold text-lg text-green-800">Kalimpong</h3>
              <ul className="text-sm text-gray-700 mb-2">
                <li>Homestays: 300+</li>
                <li>Services: Flower farms, art, organic food</li>
                <li>Guests: 35% OTA, 35% social, 30% tour ops</li>
              </ul>
              <span className="italic text-green-700">“Art workshops are our guest favorite.”</span>
            </div>
          </div>
        </div>
      </Section>

      <Section id="quality" className="bg-blue-50">
        <h2 className="text-2xl font-bold text-center text-blue-900 mb-8">Quality & Service Improvements</h2>
        <div className="grid md:grid-cols-4 gap-8">
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-bold text-md mb-2 text-green-700">Service Standards</h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>Cleanliness</li>
              <li>Hospitality training</li>
              <li>Guest care 24/7</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-bold text-md mb-2 text-blue-700">Modernization</h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>Fast WiFi everywhere</li>
              <li>Comfort amenities</li>
              <li>Secure online payments</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-bold text-md mb-2 text-brown-700">Certification</h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>Sustainability badges</li>
              <li>Local culture certification</li>
              <li>Hygiene</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-white p-6 shadow">
            <h3 className="font-bold text-md mb-2 text-green-700">Local Experiences</h3>
            <ul className="list-disc ml-4 text-gray-700">
              <li>Workshops & festivals</li>
              <li>Storytelling, farm visits</li>
              <li>Art & cuisine tours</li>
            </ul>
          </div>
        </div>
      </Section>

      <Section id="mindmap">
        <h2 className="text-2xl font-bold mb-6 text-green-900 text-center">Growth Strategy: Mind Map & Action Plan</h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
          <div className="rounded-2xl bg-green-50 p-6 shadow-lg">
            <h3 className="font-bold text-green-700 text-center mb-2">Growth Mind Map</h3>
            <ul className="flex flex-wrap gap-4 justify-center">
              <li className="bg-green-200 rounded-xl px-4 py-2">Acquisition</li>
              <li className="bg-blue-200 rounded-xl px-4 py-2">Service</li>
              <li className="bg-brown-200 rounded-xl px-4 py-2">Revenue</li>
              <li className="bg-green-200 rounded-xl px-4 py-2">Sustainability</li>
              <li className="bg-blue-200 rounded-xl px-4 py-2">Marketing</li>
              <li className="bg-brown-200 rounded-xl px-4 py-2">Future</li>
            </ul>
          </div>
          <div className="rounded-2xl bg-blue-50 p-6 shadow-lg">
            <h3 className="font-bold text-blue-700 text-center mb-2">5-Step Owner Action Plan</h3>
            <ol className="list-decimal ml-6 text-gray-700">
              <li>Assess current state</li>
              <li>Upgrade services & training</li>
              <li>List on best-fit OTAs & direct channels</li>
              <li>Engage in community partnerships</li>
              <li>Monitor impact, reinvest, iterate</li>
            </ol>
          </div>
        </div>
      </Section>

      <Section id="roadmap" className="bg-green-50">
        <h2 className="text-2xl font-bold text-center text-green-900 mb-8">10-Year Roadmap (2025–2035)</h2>
        <div className="space-y-2 max-w-2xl mx-auto">
          <div className="p-4 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="font-semibold">2025: Digital Basics</div>
            <div className="text-gray-600">WiFi, listings, hospitality training</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="font-semibold">2027: Community Uplift</div>
            <div className="text-gray-600">Group marketing, sustainable practices</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="font-semibold">2029: Certification Boom</div>
            <div className="text-gray-600">Eco, culture, hygiene certifications</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="font-semibold">2032: Experience Packages</div>
            <div className="text-gray-600">Wellness, adventure, workation</div>
          </div>
          <div className="p-4 bg-white rounded-xl shadow flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="font-semibold">2035: Regional Leadership</div>
            <div className="text-gray-600">Top-10 eco-tourism destination</div>
          </div>
        </div>
        <div className="mt-8 mx-auto max-w-3xl">
          <table className="w-full border text-center text-sm bg-white rounded-xl">
            <thead>
              <tr className="bg-green-200">
                <th className="p-2">Year</th>
                <th className="p-2">Revenue (₹ Cr)</th>
                <th className="p-2">Jobs</th>
                <th className="p-2">Guest Reviews</th>
                <th className="p-2">Eco Wins</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2025</td><td>75</td><td>1800</td><td>8.0/10 avg</td><td>10+</td>
              </tr>
              <tr className="bg-green-50">
                <td>2027</td><td>120</td><td>2500</td><td>8.3/10 avg</td><td>25+</td>
              </tr>
              <tr>
                <td>2030</td><td>210</td><td>3500</td><td>8.8/10 avg</td><td>50+</td>
              </tr>
              <tr className="bg-green-50">
                <td>2035</td><td>300</td><td>5000</td><td>9.2/10 avg</td><td>80+</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Section>
    </div>
  );
}
