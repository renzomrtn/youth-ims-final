import svgPaths from "./svg-wqbpw9jv6r";

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

function Group() {
  return (
    <div className="absolute inset-[10.53%_2.14%_8.42%_96.05%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
        <g id="Group 33">
          <path d={svgPaths.p133eaac0} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p10583a50} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[176px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <Group />
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[332px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[34.21%_2.14%_32.02%_96.05%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p284e7f80} fill="var(--fill-0, #6D798E)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal inset-[21.05%_71.47%_18.42%_2.26%] leading-[normal] text-[#515151] text-[16px] text-nowrap">Search or Select a Record ID</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Group1() {
  return (
    <div className="absolute inset-[10.53%_2.14%_8.42%_96.05%]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 31">
        <g id="Group 33">
          <path d={svgPaths.p133eaac0} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p10583a50} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
      </svg>
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[254px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal inset-[21.05%_92.66%_18.42%_2.26%] leading-[normal] text-[#515151] text-[16px] text-nowrap">₱0.00</p>
        <Group1 />
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#174499] content-stretch flex h-[45px] items-center justify-center left-[638px] p-[10px] rounded-[6px] top-[410px] w-[110px]" data-name="Button">
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Confirm</p>
    </div>
  );
}

function Button1() {
  return (
    <button className="absolute bg-[rgba(224,108,110,0.2)] content-stretch cursor-pointer flex h-[45px] items-center justify-center left-[508px] p-[10px] rounded-[6px] top-[410px] w-[110px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e06c6e] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#e06c6e] text-[14px] text-left text-nowrap">Cancel</p>
    </button>
  );
}

export default function FormsAddFundsAnnual() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Forms - Add Funds (Annual)">
      <div className="absolute bg-[#334870] h-[88px] left-0 top-0 w-[788px]" />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">Add Funds</p>
      <CloseCircle />
      <Frame />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[153px]">Fiscal Year:</p>
      <Frame2 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[309px]">Evidence (Record ID):</p>
      <Frame1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[231px]">Amount:</p>
      <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[normal] left-[40px] text-[24px] text-black text-nowrap top-[112px]">Annual Budget:</p>
      <Button />
      <Button1 />
    </div>
  );
}