const ZEFFY_DONATION_URL =
  process.env.NEXT_PUBLIC_ZEFFY_URL || "YOUR_ZEFFY_LINK";

const DonationForm = () => {
  return (
    <div className="w-full">
      <div className="flex flex-col md:flex-row items-center gap-8">
        <img
          src="/images/qrcode.jpg"
          alt="Donate with Zeffy"
          className="w-48 h-48 rounded-md border border-input object-contain"
        />

        <div className="flex-1 text-center md:text-left">
          

          <a
            href={ZEFFY_DONATION_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-2.5 rounded-md bg-[#0070BA] hover:bg-[#005EA6] text-white text-sm font-medium transition-colors shadow-sm"
          >
            Donate with Zeffy
          </a>

          <p className="text-xs text-gray-500 mt-6 leading-5">
            The Tausi Likokola Global Empowerment Foundation (TLGEF) is
            recognized by the IRS as a 501(c)(3) public charity (EIN:
            39-3688816). Contributions are tax-deductible to the fullest extent
            permitted by law.
          </p>
        </div>
      </div>
    </div>
  );
};

export default DonationForm;
