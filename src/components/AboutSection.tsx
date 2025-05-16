// components/AboutSection.tsx
import { FaQuoteLeft, FaStar } from "react-icons/fa";

const AboutSection = () => {
  const teamMembers = [
    {
      name: "John Doe",
      role: "Founder & CEO",
      bio: "10+ years of experience in e-commerce and fashion retail.",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      name: "Jane Smith",
      role: "Head Designer",
      bio: "Specialized in sustainable fashion and modern trends.",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
    },
  ];

  const testimonials = [
    {
      quote: "The best shopping experience I've ever had!",
      author: "Sarah Johnson",
      rating: 5,
    },
    {
      quote: "Fast delivery and amazing customer service.",
      author: "Michael Brown",
      rating: 4,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Story</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Founded in 2025, we're passionate about bringing you the latest
            fashion trends with sustainable practices and exceptional customer
            service.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Mission Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Mission
            </h3>
            <p className="text-gray-600 mb-6">
              To revolutionize online shopping by combining cutting-edge fashion
              with eco-friendly practices and personalized customer experiences.
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Our Team
            </h3>
            <div className="space-y-6">
              {teamMembers.map((member, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <img
                    src={member.img}
                    alt={member.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-medium text-gray-800">{member.name}</h4>
                    <p className="text-orange-500 text-sm">{member.role}</p>
                    <p className="text-gray-600 text-sm mt-1">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonials Section */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-6">
              What Our Customers Say
            </h3>
            <div className="space-y-6">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <FaQuoteLeft className="text-orange-500 text-2xl mb-4" />
                  <p className="text-gray-700 italic mb-4">
                    {testimonial.quote}
                  </p>
                  <div className="flex justify-between items-center">
                    <span className="font-medium text-gray-800">
                      {testimonial.author}
                    </span>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          className={`${
                            i < testimonial.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
