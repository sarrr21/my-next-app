import Navbar from "@/components/navbar";
import DonationForm from "../../components/donationForm";
import FooterSection from "@/components/footer1";

const Donate = () => {
  return (
    <div>
      <Navbar />

      <div className="px-4 py-6 sm:px-6 sm:py-8 lg:p-8">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900">
            Make a Difference Today
          </h1>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Every donation helps us create lasting impact. Donate securely
            through Zeffy below.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-stretch justify-center max-w-6xl mx-auto">
          <div className="flex-1 flex">
            <div className="w-full bg-white rounded-2xl p-4 sm:p-6 lg:p-8 border border-gray-100">
              <h2 className="text-2xl font-bold mb-2">Donate Now</h2>
              <p className="text-gray-600 mb-6">
                Scan the QR code or visit our Zeffy page to complete your
                donation.
              </p>
              <DonationForm />
            </div>
          </div>

          <div className="hidden lg:flex flex-1">
            <div className="relative w-full rounded-2xl overflow-hidden">
              <img
                src="/images/image2.png"
                alt="Volunteers"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <p className="mt-10 text-center text-sm text-gray-600 max-w-xl mx-auto">
          Questions about sponsorships or other ways to give?{" "}
          <a href="/contact" className="text-[#0070BA] hover:underline">
            Contact us
          </a>
          .
        </p>
      </div>

      <FooterSection />
    </div>
  );
};

export default Donate;
