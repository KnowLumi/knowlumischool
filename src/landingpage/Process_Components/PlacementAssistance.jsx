const PlacementAssistance = () => {
  return (
    <div className="flex flex-col h-fit mb-20">
      <h1 className="font-normal text-5xl">Placement Assistance</h1>
      <p className="w-[32rem] text-xs font-light tracking-wider mt-8">
        Gain Access to Top Companies and Personalized Training with Our
        Comprehensive Placement Assistance Program!
      </p>
      <div className="flex flex-col mt-9 gap-4">
        <h3 className="text-[#4258BE] font-semibold text-xl">
          Referrals to top companies
        </h3>
        <div className="flex items-center gap-7">
          <div className="bg-white rounded-2xl w-[8.25rem] h-20 border border-[#0101011A]"></div>
          <p className="w-[16.5rem] text-xs font-light tracking-wider">
            Unlock Referral Opportunities to Top Companies and Propel Your
            Career Forward
          </p>
        </div>
      </div>
    </div>
  );
};

export default PlacementAssistance;
