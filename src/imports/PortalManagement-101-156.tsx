import svgPaths from "./svg-g22b7o5anj";
import imgYouthImsLogo11 from "figma:asset/8060f7b70ee64910a3764658a3aaf192cdf1a596.png";
import imgAnalytics from "figma:asset/9066d0c3e92d7f448f496f9762ca0285553bd417.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap">YOUTH</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame2 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-black text-nowrap">Youth Officials’ Unified Tracking Hub</p>
    </div>
  );
}

function Branding() {
  return (
    <div className="content-stretch flex gap-[6px] items-center relative shrink-0" data-name="branding">
      <div className="relative shrink-0 size-[54px]" data-name="youth ims logo (1) 1">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgYouthImsLogo11} />
      </div>
      <div className="bg-[#040404] h-[54px] rounded-[5px] shrink-0 w-[3px]" />
      <Frame1 />
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Portal Management`}</p>
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
          <path d={svgPaths.p24403780} id="Vector" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M8 10V14" id="Vector_2" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M12 10V12" id="Vector_3" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M16 10V16" id="Vector_4" stroke="var(--stroke-0, #606060)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function M() {
  return (
    <div className="content-stretch flex gap-[9px] items-end relative shrink-0" data-name="m1">
      <Icon2 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Projects</p>
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
          <path d={svgPaths.p11d16a80} id="Vector" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M3 9H21" id="Vector_2" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M9 21V9" id="Vector_3" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">Portal Management</p>
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

function Frame3() {
  return (
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[326px] w-[6px]">
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
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[28px] text-[#606060] text-[12px] text-nowrap top-[267px]">------------------ Utility ------------------</p>
      <Frame3 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Portal Management</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Select a section to manage portal content</p>
    </div>
  );
}

function Container() {
  return (
    <div className="h-[97px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start p-[24px] relative size-full">
          <Heading />
          <Paragraph />
        </div>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Annual Budget</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-1px]">₱500,000.00</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-5.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <path d={svgPaths.p13f3c500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p15cf0c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Container4() {
  return (
    <div className="[grid-area:1_/_1] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
          <Container3 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Line Items</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-1px]">50</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_33.33%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-7.69%_-5.26%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 21 15">
            <path d={svgPaths.p13f3c500} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_12.5%_12.5%_12.5%]" data-name="Vector">
        <div className="absolute inset-[-6.25%_-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 18">
            <path d={svgPaths.p15cf0c00} id="Vector" stroke="var(--stroke-0, #00A63E)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[#f0fdf4] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="[grid-area:1_/_2] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Verified Expenses</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-1px]">45</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph5 />
        <Paragraph6 />
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.32%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
            <path d={svgPaths.p370d6680} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#eff6ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-full">
        <Icon9 />
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_3] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
          <Container11 />
        </div>
      </div>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Archived Documents</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[32px] left-0 text-[#101828] text-[24px] text-nowrap top-[-1px]">156</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[8px] items-start relative size-full">
        <Paragraph7 />
        <Paragraph8 />
      </div>
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-5%_-6.25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 22">
            <path d={svgPaths.p1c7ce390} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d={svgPaths.p35746cc0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[33.33%] right-[66.67%] top-[45.83%]" data-name="Vector">
        <div className="absolute inset-[-100%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
            <path d="M1 2V1" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/4 left-[33.33%] right-[66.67%] top-[66.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M1 3V1" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[70.83%] left-[33.33%] right-[66.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-100%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 3">
            <path d="M1 2V1" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[8.33%] left-1/4 right-[58.33%] top-3/4" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.pafef4f0} id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#faf5ff] relative rounded-[10px] shrink-0 size-[48px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[12px] px-[12px] relative size-full">
        <Icon10 />
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[60px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="[grid-area:2_/_1] bg-white place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[21px] px-[21px] relative size-full">
          <Container15 />
        </div>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="gap-[16px] grid grid-cols-[repeat(3,_minmax(0px,_1fr))] grid-rows-[repeat(2,_minmax(0px,_1fr))] h-[220px] relative shrink-0 w-full" data-name="Container">
      <Container4 />
      <Container8 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="h-[270px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative size-full">
          <Container17 />
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-[24px] size-[48px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p3b835ff2} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[88px] w-[279.656px]" data-name="Heading 3">
      <p className="basis-0 font-['Source_Sans_3:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-white">Verified Expenses</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(155.692deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon11 />
      <Heading1 />
    </div>
  );
}

function Button1() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col h-[196px] items-start pb-0 pt-[24px] px-[24px] relative rounded-[10px] shrink-0 w-[375.656px]" data-name="Button">
      <Container19 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[24px] size-[48px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p3b835ff2} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[88px] w-[279.656px]" data-name="Heading 3">
      <p className="basis-0 font-['Source_Sans_3:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-white">Line Items</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(155.692deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon12 />
      <Heading2 />
    </div>
  );
}

function Button2() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col h-[196px] items-start pb-0 pt-[24px] px-[24px] relative rounded-[10px] shrink-0 w-[375.656px]" data-name="Button">
      <Container20 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-[24px] size-[48px] top-[24px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 48 48">
        <g id="Icon">
          <path d={svgPaths.p3b835ff2} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="4" />
        </g>
      </svg>
    </div>
  );
}

function Heading3() {
  return (
    <div className="absolute content-stretch flex h-[28px] items-start left-[24px] top-[88px] w-[279.656px]" data-name="Heading 3">
      <p className="basis-0 font-['Source_Sans_3:Medium',sans-serif] font-medium grow leading-[28px] min-h-px min-w-px relative shrink-0 text-[20px] text-white">Archives</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="Container" style={{ backgroundImage: "linear-gradient(155.692deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <Icon13 />
      <Heading3 />
    </div>
  );
}

function Button3() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col h-[196px] items-start pb-0 pt-[24px] px-[24px] relative rounded-[10px] shrink-0 w-[375.656px]" data-name="Button">
      <Container21 />
    </div>
  );
}

function Container22() {
  return (
    <div className="gap-[10px] grid-cols-[repeat(3,_fit-content(100%))] grid-rows-[fit-content(100%)_196px] inline-grid relative shrink-0" data-name="Container">
      <Button1 />
      <Button2 />
      <Button3 />
    </div>
  );
}

function Container23() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-col items-center justify-center size-full">
        <div className="content-stretch flex flex-col items-center justify-center p-[24px] relative w-full">
          <Container22 />
        </div>
      </div>
    </div>
  );
}

function PortalManagement() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0 w-full" data-name="PortalManagement">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="flex flex-col items-center size-full">
        <div className="content-stretch flex flex-col gap-[15px] items-center p-px relative size-full">
          <Container />
          <Container18 />
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col h-full items-start overflow-clip p-[32px] relative rounded-tl-[24px] shrink-0 w-[1694px]" data-name="content">
      <PortalManagement />
    </div>
  );
}

function BottomOfNav() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="bottom of nav">
      <Sidebar />
      <Content />
    </div>
  );
}

export default function PortalManagement1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="PORTAL MANAGEMENT">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}