import svgPaths from "./svg-lsyyv5picy";
import imgLogo from "figma:asset/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
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
      <div className="relative shrink-0 size-[54px]" data-name="Logo">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={imgLogo} />
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Budget / Line Items`}</p>
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
          <path d="M12 2V22" id="Vector" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2ba0dca0} id="Vector_2" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function M1() {
  return (
    <div className="content-stretch flex gap-[9px] items-center justify-center relative shrink-0" data-name="m2">
      <Icon3 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">Budget Preparation</p>
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

function Frame3() {
  return (
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[161px] w-[6px]">
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

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[234.5px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#155dfc] text-[14px]">Total Annual Budget F/Y 2026</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
            <path d="M0.666667 0.666667V10" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph />
      <Button1 />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱845,000.00</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#155dfc] text-[12px] text-nowrap">Base allocation for this year</p>
    </div>
  );
}

function Container() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(169.67deg, rgb(239, 246, 255) 0%, rgb(219, 234, 254) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative w-full">
          <Frame5 />
          <Paragraph1 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[336px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9810fa] text-[14px]">Total Supplemental Budget</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.67px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 2">
            <path d="M0.666667 0.666667H10" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/2 right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-0.67px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 11">
            <path d="M0.666667 0.666667V10" id="Vector" stroke="var(--stroke-0, #9810FA)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[4px] px-[4px] relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph3 />
      <Button2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9810fa] text-[12px] text-nowrap">Certified available funds for release</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container" style={{ backgroundImage: "linear-gradient(169.67deg, rgb(250, 245, 255) 0%, rgb(243, 232, 255) 100%)" }}>
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative w-full">
          <Frame4 />
          <Paragraph4 />
          <Paragraph5 />
        </div>
      </div>
    </div>
  );
}

function TopCards() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-center relative shrink-0 w-full" data-name="top cards">
      <Container />
      <Container1 />
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[474px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#155dfc] text-[14px]">Total Committed</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph6 />
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#155dfc] text-[12px] text-nowrap">Promised amounts per Line Items</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#bedbff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative w-full">
          <Frame6 />
          <Paragraph7 />
          <Paragraph8 />
        </div>
      </div>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[472px]" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#9810fa] text-[14px]">Total Spent</p>
    </div>
  );
}

function Frame7() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph9 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#9810fa] text-[12px] text-nowrap">Total amount spent across all categories (PS, MOOE, and CO)</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e9d4ff] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative w-full">
          <Frame7 />
          <Paragraph10 />
          <Paragraph11 />
        </div>
      </div>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#ff070c] text-[14px]">Total Remaining</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[36px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] left-0 text-[#101828] text-[30px] text-nowrap top-0">₱845,000.00</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#ff070c] text-[12px] text-nowrap top-[-1px]">Remaining funds</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#ffd6a7] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start p-[25px] relative w-full">
          <Paragraph12 />
          <Paragraph13 />
          <Paragraph14 />
        </div>
      </div>
    </div>
  );
}

function TopCards1() {
  return (
    <div className="content-stretch flex gap-[28px] items-center justify-center relative shrink-0 w-full" data-name="top cards">
      <Container2 />
      <Container3 />
      <Container4 />
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">Line Items</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Needs Assessment</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">SK Monitor</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[20px] relative w-full">
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-[68.922px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[20px] text-nowrap top-0">Line Items</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[126px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-925.609px] pr-[1051.609px] pt-[-393px] relative size-full">
        {[...Array(5).keys()].map((_, i) => (
          <Option key={i} />
        ))}
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-white grow h-[38px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">Search line items...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[10px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#3b5998] h-[36px] relative rounded-[10px] shrink-0 w-[139.391px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] left-[82px] text-[14px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]">New Line Item</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[40px] relative shrink-0 w-[545.391px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Dropdown />
        <TextInput />
        <Button6 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container6 />
    </div>
  );
}

function Container8() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-[24px] relative w-full">
          <Container7 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[26px] relative shrink-0 w-[233px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Line Item ID</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[26px] relative shrink-0 w-[195px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Needs ID</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[26px] relative shrink-0 w-[257px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Line Items</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="content-stretch flex items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[194px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Category</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[26px] relative shrink-0 w-[199px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Budget</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative shrink-0 w-[284px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Implementation Date</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[26px] relative shrink-0 w-[168px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap">Status</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[23px] py-[26px] relative shrink-0 w-[100px]" data-name="Header Cell">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[20px] relative shrink-0 text-[#364153] text-[14px] text-nowrap text-right">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[233px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">LI-20250910-26ZQ</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">NID-20250910-26ZQ</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">HIV/AIDS Awareness Seminar</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">{`Area of Participation: Health & Wellness`}</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container9 />
      <Container10 />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[33px] relative shrink-0 w-[257px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[194px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">PPA</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Budget:</span> <span className="text-[#6a7282]">₱55,555.56</span>
      </p>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Remaining:</span>
        <span>{` ₱1,032.56`}</span>
      </p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container13 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[199px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[284px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">September 2025</p>
    </div>
  );
}

function Text() {
  return <div className="bg-[#fe9a00] h-[8px] rounded-[3.35544e+07px] shrink-0 w-[7.984px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[3.35544e+07px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#e17100] text-[12px] text-nowrap">In Progress</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative shrink-0 w-[168px]" data-name="Table Cell">
      <Text1 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p47c19f0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function Group() {
  return (
    <div className="relative shrink-0 size-[21.5px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2d1bdd00} fill="var(--fill-0, #3B5998)" id="Vector" />
          <path d={svgPaths.p28896980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd97d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p284d78c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[37px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Button7 />
      <Group />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[233px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">LI-20250909-W5CY</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">NID-20250909-W5CY</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Anti-Illegal Drugs Seminar</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Area of Participation: Peace and Order</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[33px] relative shrink-0 w-[257px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[194px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">PPA</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Budget:</span> <span className="text-[#6a7282]">₱55,555.56</span>
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Remaining:</span>
        <span>{` ₱1,032.56`}</span>
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container19 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[199px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[284px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">January 2025</p>
    </div>
  );
}

function Text2() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text3() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text2 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative shrink-0 w-[168px]" data-name="Table Cell">
      <Text3 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p47c19f0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="relative shrink-0 size-[21.5px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2d1bdd00} fill="var(--fill-0, #3B5998)" id="Vector" />
          <path d={svgPaths.p28896980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd97d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p284d78c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[37px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Button8 />
      <Group1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[233px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">LI-20250908-L7TC</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">NID-20250908-KUV1</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Leadership Training Camp</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[32px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[190px]">Area of Participation: Active Citizenship</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="content-stretch flex flex-col h-[56px] items-start relative shrink-0 w-full" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[25px] relative shrink-0 w-[257px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[194px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">PPA</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Budget:</span> <span className="text-[#6a7282]">₱55,555.56</span>
      </p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Remaining:</span>
        <span>{` ₱1,032.56`}</span>
      </p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Container25 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[199px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[284px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">March 2025</p>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text4 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative shrink-0 w-[168px]" data-name="Table Cell">
      <Text5 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p47c19f0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function Group2() {
  return (
    <div className="relative shrink-0 size-[21.5px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2d1bdd00} fill="var(--fill-0, #3B5998)" id="Vector" />
          <path d={svgPaths.p28896980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd97d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p284d78c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[37px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Button9 />
      <Group2 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[233px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">LI-20250907-K9MN</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[29px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">NID-20250907-K9MN</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Environmental Cleanup Drive</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">Area of Participation: Environment</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container27 />
      <Container28 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[33px] relative shrink-0 w-[257px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[194px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">PPA</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Budget:</span> <span className="text-[#6a7282]">₱55,555.56</span>
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Remaining:</span>
        <span>{` ₱1,032.56`}</span>
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container30 />
      <Container31 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[199px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[41px] relative shrink-0 w-[284px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">April 2025</p>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text6 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[40px] relative shrink-0 w-[168px]" data-name="Table Cell">
      <Text7 />
    </div>
  );
}

function Icon13() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p47c19f0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function Group3() {
  return (
    <div className="relative shrink-0 size-[21.5px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2d1bdd00} fill="var(--fill-0, #3B5998)" id="Vector" />
          <path d={svgPaths.p28896980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd97d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p284d78c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[37px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Button10 />
      <Group3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[28px] relative shrink-0 w-[233px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">LI-20250906-P4RT</p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[28px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">NID-20250906-P4RT</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Youth Sports Festival</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">{`Area of Participation: Sports & Recreation`}</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex flex-col h-[40px] items-start relative shrink-0 w-full" data-name="Container">
      <Container33 />
      <Container34 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[32px] relative shrink-0 w-[257px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[40px] relative shrink-0 w-[194px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center w-full">PPA</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Budget:</span> <span className="text-[#6a7282]">₱55,555.56</span>
      </p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold text-[#4a5565]">Remaining:</span>
        <span>{` ₱1,032.56`}</span>
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col h-[72px] items-start justify-center relative shrink-0 w-full" data-name="Container">
      <Container36 />
      <Container37 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[199px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[40px] relative shrink-0 w-[284px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-nowrap">May 2025</p>
    </div>
  );
}

function Text8() {
  return <div className="bg-[#fe9a00] h-[8px] rounded-[3.35544e+07px] shrink-0 w-[7.984px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="bg-[#fffbeb] content-stretch flex gap-[8px] items-center px-[13px] py-[4px] relative rounded-[3.35544e+07px] shrink-0 w-[105px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text8 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#e17100] text-[12px] text-nowrap">In Progress</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[31px] relative shrink-0 w-[168px]" data-name="Table Cell">
      <Text9 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%]" data-name="Vector">
        <div className="absolute inset-[-5.56%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 14">
            <path d={svgPaths.p73e95c0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[8.35%_8.35%_33.32%_33.32%]" data-name="Vector">
        <div className="absolute inset-[-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 11 11">
            <path d={svgPaths.p47c19f0} id="Vector" stroke="var(--stroke-0, #3B5998)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function Group4() {
  return (
    <div className="relative shrink-0 size-[21.5px]" data-name="Group">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
        <g id="Group">
          <path d={svgPaths.p2d1bdd00} fill="var(--fill-0, #3B5998)" id="Vector" />
          <path d={svgPaths.p28896980} fill="var(--fill-0, white)" id="Vector_2" />
          <path d={svgPaths.p1cd97d00} fill="var(--fill-0, white)" id="Vector_3" />
          <path d={svgPaths.p284d78c0} fill="var(--fill-0, white)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[36px] relative shrink-0 w-[100px]" data-name="Table Cell">
      <Button11 />
      <Group4 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="Table Row">
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col h-[524.5px] items-start relative shrink-0 w-full" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-[16px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M10 12L6 8L10 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[113.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon15 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[69px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Previous</p>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[16px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]">1</p>
      </div>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[54.34px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #99A1AF)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[86.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[31.5px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Next</p>
        <Icon16 />
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
          <Button12 />
          <Button13 />
          <Button14 />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[17px] px-[16px] relative w-full">
          <Container39 />
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-center relative rounded-[10px] shrink-0 w-full" data-name="table">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container8 />
      <Table />
      <Pagination />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col gap-[10px] h-full items-start overflow-clip p-[32px] relative rounded-tl-[24px] shrink-0 w-[1694px]" data-name="content">
      <TopCards />
      <TopCards1 />
      <Container5 />
      <Table1 />
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

export default function Module() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 2">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}