import svgPaths from "./svg-xzyw5kakxl";
import imgLogo from "figma:asset/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "figma:asset/9066d0c3e92d7f448f496f9762ca0285553bd417.png";
import imgColorDropper from "figma:asset/a2eefe2444a0f679e759b9f210d7c39fe50da80f.png";
import imgGreenAndWhiteModernAppreciationCertificate1 from "figma:asset/1996eefae11a1ac4c59d838495e47499041af61b.png";

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap">YOUTH</p>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame5 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-black text-nowrap">Youth Officials’ Unified Tracking Hub</p>
    </div>
  );
}

function Branding() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="branding">
      <div className="relative shrink-0 size-[54px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
      </div>
      <div className="bg-[#040404] h-[54px] rounded-[5px] shrink-0 w-[3px]" />
      <Frame4 />
    </div>
  );
}

function Left() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="left">
      <div className="h-[15px] relative shrink-0 w-[18px]" data-name="Vector">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 15">
          <path d={svgPaths.p36118a00} fill="var(--fill-0, black)" id="Vector" />
        </svg>
      </div>
      <Branding />
    </div>
  );
}

function Slug() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="slug">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Projects / Certificate Generator`}</p>
    </div>
  );
}

function LogoAndSlug() {
  return (
    <div className="content-stretch flex gap-[20px] items-center relative shrink-0 w-[1032px]" data-name="logo and slug">
      <Left />
      <Slug />
    </div>
  );
}

function Icon() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.56%_12.56%_12.5%_12.49%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
            <path d={svgPaths.p11067680} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <Icon />
    </div>
  );
}

function AccountCircle() {
  return (
    <div className="relative shrink-0 size-[42px]" data-name="account-circle 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 42 42">
        <g id="account-circle 1">
          <path d={svgPaths.p3925a900} fill="var(--fill-0, #AEAEAE)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function ChevronDown() {
  return (
    <div className="h-[23.42px] mr-[-24px] relative shrink-0 w-[24px]" data-name="chevron-down (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down (1) 1">
          <path d={svgPaths.p1e8d6080} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center pl-0 pr-[24px] py-0 relative shrink-0 w-[120px]">
      <div className="font-['Source_Sans_3:Regular',sans-serif] font-normal h-[40px] leading-[normal] mr-[-24px] relative shrink-0 text-[0px] text-black w-[120px]">
        <p className="mb-0 text-[14px]">Welcome Back,</p>
        <p className="text-[16px]">SK President</p>
      </div>
      <ChevronDown />
    </div>
  );
}

function Profile() {
  return (
    <div className="content-stretch flex gap-[18px] items-center relative shrink-0" data-name="profile">
      <AccountCircle />
      <Frame />
    </div>
  );
}

function Right() {
  return (
    <div className="content-stretch flex gap-[20px] items-center justify-center relative shrink-0" data-name="right">
      <Button />
      <Profile />
    </div>
  );
}

function Navbar() {
  return (
    <div className="bg-white relative shrink-0 w-full" data-name="navbar">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex items-center justify-between px-[36px] py-[20px] relative w-full">
          <LogoAndSlug />
          <Right />
        </div>
      </div>
    </div>
  );
}

function Icon1() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p13b4cd00} fill="var(--fill-0, #606060)" id="Vector" />
          <path d={svgPaths.p32939e80} fill="var(--fill-0, #606060)" id="Vector_2" />
          <path d={svgPaths.pdc9c900} fill="var(--fill-0, #606060)" id="Vector_3" />
          <path d={svgPaths.p20de0972} fill="var(--fill-0, #606060)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="dashboard">
      <Icon1 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Dashboard</p>
    </div>
  );
}

function Icon2() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p24403780} id="Vector" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10V14" id="Vector_2" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 10V12" id="Vector_3" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 10V16" id="Vector_4" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function M() {
  return (
    <div className="content-stretch flex gap-[9px] items-end relative shrink-0" data-name="m1">
      <Icon2 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">Projects</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function M1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center justify-center relative shrink-0" data-name="m2">
      <Icon3 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Budget Preparation</p>
    </div>
  );
}

function ArchiveFill() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="archive-fill 1">
      <div className="relative shrink-0 size-[23px]" data-name="Analytics">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgAnalytics} />
      </div>
    </div>
  );
}

function M2() {
  return (
    <div className="content-stretch flex gap-[12px] items-end relative shrink-0" data-name="m3">
      <ArchiveFill />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Expense Verification</p>
    </div>
  );
}

function Mains() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="mains">
      <M />
      <M1 />
      <M2 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p6b45080} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2962b330} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 12H14" id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Archives() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="archives">
      <Icon4 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Archives</p>
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 9H21" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 21V9" id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Web() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="web 1">
      <Icon5 />
    </div>
  );
}

function Portal() {
  return (
    <div className="content-stretch flex gap-[11px] items-start relative shrink-0" data-name="portal">
      <Web />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Portal Management</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="Icon">
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Web1() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="web 1">
      <Icon6 />
    </div>
  );
}

function Personnel() {
  return (
    <div className="content-stretch flex gap-[11px] items-center relative shrink-0" data-name="personnel">
      <Web1 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">{`Personnel `}</p>
    </div>
  );
}

function Utility() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="utility">
      <Archives />
      <Portal />
      <Personnel />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[119px] w-[6px]">
      <div className="size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Sidebar() {
  return (
    <div className="bg-white content-stretch flex flex-col gap-[54px] h-full items-start overflow-clip px-[30px] py-[50px] relative rounded-br-[10px] shrink-0" data-name="sidebar">
      <Dashboard />
      <Mains />
      <Utility />
      <Frame6 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[28px] text-[#606060] text-[12px] text-nowrap top-[267px]">------------------ Utility ------------------</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">Certificate Generator</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Projects per Year</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Project Monitor</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex gap-[32px] items-end p-[20px] relative shrink-0 w-[1630px]" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
      <Button4 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Certificate Generator</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Upload your CSV data and certificate template, then position and resize the name field</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[97px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Heading />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="[grid-area:2_/_1] content-stretch flex h-[20px] items-start relative shrink-0 w-[82px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Line Item ID:</p>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="[grid-area:1_/_2] bg-white content-stretch flex flex-col items-start pb-px pl-[-1043.453px] pr-[1154.453px] pt-[-145px] relative rounded-[10px] self-stretch shrink-0 w-[195px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option key={i} />
      ))}
    </div>
  );
}

function Heading1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex items-center relative self-start shrink-0 w-[82px]" data-name="Heading 2">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Project</p>
    </div>
  );
}

function Option1() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown1() {
  return (
    <div className="[grid-area:2_/_2] bg-white content-stretch flex flex-col items-start pb-px pl-[-1043.453px] pr-[1154.453px] pt-[-145px] relative rounded-[10px] self-stretch shrink-0 w-[195px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      {[...Array(4).keys()].map((_, i) => (
        <Option1 key={i} />
      ))}
    </div>
  );
}

function Choose() {
  return (
    <div className="gap-[4px] grid-cols-[repeat(2,_fit-content(100%))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[97px] inline-grid p-[24px] relative shrink-0" data-name="choose">
      <Paragraph1 />
      <Dropdown />
      <Heading1 />
      <Dropdown1 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal h-[44px] items-start relative shrink-0 text-center w-full" data-name="Container">
      <p className="basis-0 grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[16px] w-full">Click to upload CSV</p>
      <p className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[14px] w-full">Columns: First Name, Last Name, Middle Name</p>
    </div>
  );
}

function Label() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <Icon7 />
      <Container2 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-full items-center justify-center p-[26px] relative rounded-[10px] shrink-0 w-[339px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Label />
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d="M10 2.5V12.5" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p320a7e80} id="Vector_2" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p3053b100} id="Vector_3" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal h-[44px] items-start relative shrink-0 text-center w-full" data-name="Container">
      <p className="basis-0 grow leading-[24px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[16px] w-full">Click to upload template</p>
      <p className="basis-0 grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#6a7282] text-[14px] w-full">PNG, JPG (max 10MB)</p>
    </div>
  );
}

function Label1() {
  return (
    <div className="content-stretch flex flex-col gap-[12px] items-center relative shrink-0 w-full" data-name="Label">
      <Icon8 />
      <Container4 />
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col h-full items-center justify-center p-[26px] relative rounded-[10px] shrink-0 w-[339px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-2 border-[#d1d5dc] border-dashed inset-0 pointer-events-none rounded-[10px]" />
      <Label1 />
    </div>
  );
}

function Upload() {
  return (
    <div className="content-stretch flex gap-[21px] h-full items-center justify-center relative shrink-0" data-name="upload">
      <Container3 />
      <Container5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="bg-[#3b5998] content-stretch flex items-center justify-center px-[16px] py-[8px] relative rounded-[10px] shrink-0 w-[141px]" data-name="Button">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[14px] text-center text-nowrap text-white">Generate</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Icon9 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap">Previous</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="bg-[#f3f5f6] content-stretch flex gap-[7px] items-center px-[16px] py-[8px] relative rounded-[10px] shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.2)] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#99a1af] text-[16px] text-center text-nowrap">Next</p>
      <Icon10 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex gap-[17px] items-center relative shrink-0">
      <Button6 />
      <Button7 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center justify-center relative shrink-0">
      <Button5 />
      <Frame12 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="basis-0 content-stretch flex gap-[44px] grow items-center min-h-px min-w-px relative shrink-0">
      <Choose />
      <div className="flex flex-row items-center self-stretch">
        <Upload />
      </div>
      <Frame13 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex items-center px-0 py-[12px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Frame7 />
    </div>
  );
}

function Button8() {
  return <div className="bg-black shrink-0 size-[24px]" data-name="Button" />;
}

function Button9() {
  return <div className="shrink-0 size-[24px]" data-name="Button" />;
}

function Button10() {
  return <div className="bg-[#155dfc] shrink-0 size-[24px]" data-name="Button" />;
}

function Button11() {
  return <div className="bg-[yellow] shrink-0 size-[24px]" data-name="Button" />;
}

function Button12() {
  return <div className="bg-[#00d9ff] shrink-0 size-[24px]" data-name="Button" />;
}

function Button13() {
  return <div className="bg-[red] shrink-0 size-[24px]" data-name="Button" />;
}

function Button14() {
  return <div className="bg-[#2aff00] shrink-0 size-[24px]" data-name="Button" />;
}

function Button15() {
  return <div className="bg-[#f0e] shrink-0 size-[24px]" data-name="Button" />;
}

function Button16() {
  return <div className="bg-[#00c950] shrink-0 size-[24px]" data-name="Button" />;
}

function Button17() {
  return <div className="bg-[#b107ff] shrink-0 size-[24px]" data-name="Button" />;
}

function Frame8() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <div aria-hidden="true" className="absolute border border-[rgba(96,96,96,0.5)] border-solid inset-[-1px] pointer-events-none" />
      <Button8 />
      <Button9 />
      <Button10 />
      <Button11 />
      <Button12 />
      <Button13 />
      <Button14 />
      <Button15 />
      <Button16 />
      <Button17 />
      <div className="relative shrink-0 size-[24px]" data-name="Color Dropper">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgColorDropper} />
      </div>
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-center relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(96,96,96,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#4a5565] text-[14px] text-center text-nowrap">
        <p className="leading-[20px]"># Input Color HEX</p>
      </div>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0">
      <Frame8 />
      <Frame9 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="bg-white h-[135px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap">
            <p className="leading-[20px]">Change Font Color</p>
          </div>
          <Frame10 />
        </div>
      </div>
    </div>
  );
}

function ChevronDown1() {
  return (
    <div className="h-[23.42px] relative shrink-0 w-[24px]" data-name="chevron-down (1) 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 24 24">
        <g id="chevron-down (1) 1">
          <path d={svgPaths.p1e8d6080} fill="var(--fill-0, black)" id="Vector" />
        </g>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[24px] relative rounded-[8px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(96,96,96,0.5)] border-solid inset-[-1px] pointer-events-none rounded-[9px]" />
      <div className="flex flex-row items-center justify-end size-full">
        <div className="content-stretch flex items-center justify-end px-[10px] py-0 relative size-full">
          <ChevronDown1 />
        </div>
      </div>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full">
      <Frame11 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="bg-white h-[135px] relative rounded-[16px] shrink-0 w-full">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[16px]" />
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative size-full">
          <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[#101828] text-[14px] text-center text-nowrap">
            <p className="leading-[20px]">Change Font Style</p>
          </div>
          <Frame14 />
        </div>
      </div>
    </div>
  );
}

function Controls() {
  return (
    <div className="content-stretch flex flex-col gap-[33px] items-start relative shrink-0" data-name="controls">
      <Frame2 />
      <Frame3 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[213.5px] p-[10px] top-[263px]">
      <div className="flex flex-col font-['Source_Sans_3:Medium',sans-serif] font-medium justify-center leading-[0] relative shrink-0 text-[40px] text-black text-center text-nowrap">
        <p className="leading-[20px]">{`{{ Name }}`}</p>
      </div>
    </div>
  );
}

function Output() {
  return (
    <div className="bg-[rgba(217,217,217,0.72)] content-stretch flex flex-col gap-[10px] items-center justify-center p-[10px] relative rounded-[16px] shrink-0" data-name="output">
      <div className="h-[664px] relative shrink-0 w-[939px]" data-name="Green and White Modern Appreciation Certificate 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgGreenAndWhiteModernAppreciationCertificate1} />
      </div>
      <Frame1 />
    </div>
  );
}

function Output1() {
  return (
    <div className="content-stretch flex gap-[145px] items-start relative shrink-0 w-[1366px]" data-name="output">
      <Controls />
      <Output />
    </div>
  );
}

function Upload1() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="upload">
      <Output1 />
    </div>
  );
}

function Container7() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <Upload1 />
        </div>
      </div>
    </div>
  );
}

function DocumentGenerator() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="DocumentGenerator">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative w-full">
          <Container1 />
          <Container6 />
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="bottom">
      <Container />
      <DocumentGenerator />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow h-full min-h-px min-w-px relative rounded-tl-[24px] shrink-0" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[30px] relative size-full">
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function BottomOfNav() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="bottom of nav">
      <Sidebar />
      <Content />
    </div>
  );
}

export default function Module1CertGenOutput() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 1 - Cert Gen - Output">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}