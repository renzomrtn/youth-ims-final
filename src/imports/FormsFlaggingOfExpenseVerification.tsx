import svgPaths from "./svg-xu9h2exnin";

function CloseCircle() {
  return (
    <button className="absolute block cursor-pointer left-[728px] size-[24px] top-[32px]" data-name="close-circle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="close-circle 1">
          <path d={svgPaths.p211dc000} fill="var(--fill-0, white)" id="Vector" />
        </g>
      </svg>
    </button>
  );
}

function Frame1() {
  return (
    <div className="absolute bg-[#eee] h-[38px] left-[39px] rounded-[5px] top-[126px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal inset-[21.05%_70.48%_18.42%_2.26%] leading-[normal] text-[#515151] text-[16px] text-nowrap">HIV/AIDS Awareness Seminar</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[197px] left-[39px] rounded-[5px] top-[509px] w-[707px]">
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button() {
  return (
    <button className="absolute bg-[rgba(224,108,110,0.2)] content-stretch cursor-pointer flex h-[45px] items-center justify-center left-[512px] p-[10px] rounded-[6px] top-[738px] w-[110px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e06c6e] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#e06c6e] text-[14px] text-left text-nowrap">Cancel</p>
    </button>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#174499] content-stretch flex h-[45px] items-center justify-center left-[638px] p-[10px] rounded-[6px] top-[738px] w-[110px]" data-name="Button">
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Confirm</p>
    </div>
  );
}

export default function FormsFlaggingOfExpenseVerification() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Forms - Flagging of Expense Verification">
      <div className="absolute bg-[#334870] h-[88px] left-0 top-0 w-[788px]" />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">Flagging</p>
      <CloseCircle />
      <Frame1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[39px] text-[16px] text-black text-nowrap top-[103px]">Line Item:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[39px] text-[16px] text-black text-nowrap top-[192px]">Selected Entries:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[39px] text-[16px] text-black text-nowrap top-[305px]">Which field(s) needs to be corrected?</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[73px] text-[16px] text-black text-nowrap top-[336px]">Particular</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[73px] text-[16px] text-black text-nowrap top-[369px]">Amount</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[73px] text-[16px] text-black text-nowrap top-[402px]">Date of Expense</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[73px] text-[16px] text-black text-nowrap top-[435px]">Attachment</p>
      <div className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[39px] text-[16px] text-black text-nowrap top-[230px]">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold mb-0">Venue Rental (1-day seminar)</p>
        <p>₱12,000.00 - September 1, 2025</p>
      </div>
      <Frame />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[39px] text-[16px] text-black top-[486px] w-[125px]">Remarks:</p>
      <div className="absolute flex items-center justify-center left-[40px] size-[18px] top-[338px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white border border-[#7b7b7b] border-solid size-[18px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[40px] size-[18px] top-[371px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white border border-[#7b7b7b] border-solid size-[18px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[40px] size-[18px] top-[404px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white border border-[#7b7b7b] border-solid size-[18px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[39px] size-[18px] top-[437px]">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white border border-[#7b7b7b] border-solid size-[18px]" />
        </div>
      </div>
      <Button />
      <Button1 />
    </div>
  );
}