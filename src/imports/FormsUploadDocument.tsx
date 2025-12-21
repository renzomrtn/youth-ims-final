import svgPaths from "./svg-65tmb9nnu5";

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

function Frame() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[136px] w-[708px]">
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[215px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[34.21%_2.14%_32.02%_96.05%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 13 13">
            <path d={svgPaths.p284e7f80} fill="var(--fill-0, #6D798E)" id="Vector" />
          </svg>
        </div>
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal inset-[21.05%_81.92%_18.42%_2.26%] leading-[normal] text-[#515151] text-[16px] text-nowrap">Select an Official</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[38px] left-[40px] rounded-[5px] top-[278px] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <p className="absolute bottom-[18.42%] font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[normal] left-[calc(50%-72px)] text-[#515151] text-[16px] top-[21.05%] w-[143.63px]">Add another Author</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-dashed inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#dedede] h-[38px] left-1/2 rounded-[5px] top-[341px] translate-x-[-50%] w-[708px]">
      <div className="overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[23.68%_39.97%_23.68%_57.77%]" data-name="Vector">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
            <path d={svgPaths.p10bea700} fill="var(--fill-0, #6D798E)" id="Vector" />
          </svg>
        </div>
        <p className="absolute bottom-[18.42%] font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-1/2 text-[#515151] text-[16px] text-center top-[21.05%] translate-x-[-50%] w-[324px]">Upload File</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#939393] border-solid inset-[-1px] pointer-events-none rounded-[6px]" />
    </div>
  );
}

function Button() {
  return (
    <div className="absolute bg-[#174499] content-stretch flex h-[45px] items-center justify-center left-[638px] p-[10px] rounded-[6px] top-[420px] w-[110px]" data-name="Button">
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Confirm</p>
    </div>
  );
}

function Button1() {
  return (
    <button className="absolute bg-[rgba(224,108,110,0.2)] content-stretch cursor-pointer flex h-[45px] items-center justify-center left-[508px] p-[10px] rounded-[6px] top-[420px] w-[110px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e06c6e] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[#e06c6e] text-[14px] text-left text-nowrap">Cancel</p>
    </button>
  );
}

export default function FormsUploadDocument() {
  return (
    <div className="bg-white overflow-clip relative rounded-[24px] size-full" data-name="Forms - Upload Document">
      <div className="absolute bg-[#334870] h-[88px] left-0 top-0 w-[788px]" />
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] left-[40px] text-[24px] text-nowrap text-white top-[27px]">Upload Document</p>
      <CloseCircle />
      <Frame />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[113px]">Title</p>
      <Frame1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[40px] text-[16px] text-black text-nowrap top-[192px]">Author</p>
      <Frame2 />
      <Frame3 />
      <Button />
      <Button1 />
    </div>
  );
}