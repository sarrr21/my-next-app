import Navbar from "@/components/navbar";
import DonationForm from "../../components/donationForm";
import FooterSection from "@/components/footer1";

const Donate = () => {
  return (
    <div>
      <Navbar />

      <div className="p-8">
        {/* Page Title */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Make a Difference Today
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Your generous donation helps us support communities, provide aid,
            and create lasting impact. Every contribution counts.
          </p>
        </div>

        {/* Flexbox layout */}
        <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto ">
          {/* Left side - Form */}
          <div className="flex-1 flex">
            <div className="w-full bg-white/80 backdrop-blur-lg shadow-xl rounded-2xl p-8 border border-gray-100 flex flex-col justify-center h-full">
              <DonationForm />
            </div>
          </div>

          {/* Right side - Illustration (hidden on mobile) */}
          <div className="hidden lg:flex flex-1">
            <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl h-full">
              <img
                src="/images/image2.png"
                alt="People volunteering and donating to charity"
                className="w-full h-full object-cover rounded-2xl"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>
        </div>
      </div>
      <FooterSection />
    </div>
  );
};

export default Donate;
