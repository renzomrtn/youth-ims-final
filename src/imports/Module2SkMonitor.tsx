import svgPaths from "./svg-tg4ezcupua";
import imgLogo from "../assets/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "../assets/9066d0c3e92d7f448f496f9762ca0285553bd417.png";

function Frame6() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap">YOUTH</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame6 />
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
      <Frame5 />
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Budget / Budget Monitor`}</p>
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

function Frame1() {
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
      <Frame1 />
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
    <div className="[grid-area:1_/_1] bg-white content-stretch flex items-center justify-between ml-0 mt-0 overflow-clip px-[36px] py-[20px] relative w-[1920px]" data-name="navbar">
      <LogoAndSlug />
      <Right />
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

function Frame7() {
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
      <Frame7 />
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

function Frame9() {
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
          <Frame9 />
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

function Frame8() {
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
          <Frame8 />
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

function Frame10() {
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
          <Frame10 />
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

function Frame11() {
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
          <Frame11 />
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Line Items</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Needs Assessments</p>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">SK Monitor</p>
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
    <div className="h-[24px] relative shrink-0 w-[1557px]" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[20px] text-nowrap top-0">SK Budget Monitor</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="relative shrink-0 w-full" data-name="title">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center p-[10px] relative w-full">
          <p className="font-['Source_Sans_3:SemiBold',sans-serif] font-semibold leading-[normal] relative shrink-0 text-[32px] text-black w-[270px]">Expenditure per Areas of Advocacy</p>
        </div>
      </div>
    </div>
  );
}

function Dataset() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Dataset">
      <div className="bg-[#ff83d5] h-[30px] shrink-0 w-[70px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#474747] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Health and Wellness
      </p>
    </div>
  );
}

function Dataset1() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Dataset">
      <div className="bg-[#6db8ff] h-[30px] shrink-0 w-[70px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#474747] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Education and Youth Development
      </p>
    </div>
  );
}

function Dataset2() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Dataset">
      <div className="bg-[#ffaf5b] h-[30px] shrink-0 w-[70px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#474747] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Peace and Order
      </p>
    </div>
  );
}

function Dataset3() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Dataset">
      <div className="bg-[#57ffae] h-[30px] shrink-0 w-[70px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#474747] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Recreational
      </p>
    </div>
  );
}

function Dataset4() {
  return (
    <div className="content-stretch flex gap-[14px] items-center relative shrink-0" data-name="Dataset">
      <div className="bg-[rgba(154,137,255,0.7)] h-[30px] shrink-0 w-[70px]" />
      <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#474747] text-[12px] text-nowrap" style={{ fontVariationSettings: "'wdth' 100" }}>
        Civic Engagement and Youth Governance
      </p>
    </div>
  );
}

function Legend() {
  return (
    <div className="content-stretch flex flex-col gap-[31px] items-start relative shrink-0 w-full" data-name="legend">
      <Dataset />
      <Dataset1 />
      <Dataset2 />
      <Dataset3 />
      <Dataset4 />
    </div>
  );
}

function Left1() {
  return (
    <div className="content-stretch flex flex-col gap-[117px] items-start justify-center relative shrink-0 w-[304px]" data-name="left">
      <Title />
      <Legend />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[40px] relative rounded-[5px] shrink-0 w-[200px]">
      <div className="absolute bg-white border border-[#cbcbcb] border-solid inset-0 rounded-[5px]" />
      <div className="absolute flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[#636363] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
        <p className="leading-[normal]">Select Year</p>
      </div>
      <div className="absolute h-[6px] right-[9px] top-[17px] w-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <path d="M4.99998 6L0 0H10L4.99998 6Z" fill="var(--fill-0, #636363)" id="Vector 25" />
        </svg>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[40px] relative rounded-[5px] shrink-0 w-[200px]">
      <div className="absolute bg-white border border-[#cbcbcb] border-solid inset-0 rounded-[5px]" />
      <div className="absolute flex flex-col font-['Source_Sans_3:Regular',sans-serif] font-normal justify-center leading-[0] left-[8px] text-[#636363] text-[16px] text-nowrap top-[calc(50%+0.5px)] translate-y-[-50%]">
        <p className="leading-[normal]">Select Barangay</p>
      </div>
      <div className="absolute h-[6px] right-[9px] top-[17px] w-[10px]">
        <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 10 6">
          <path d="M4.99998 6L0 0H10L4.99998 6Z" fill="var(--fill-0, #636363)" id="Vector 25" />
        </svg>
      </div>
    </div>
  );
}

function Group() {
  return (
    <div className="h-[427px] relative shrink-0 w-[464px]">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 464 427">
        <g id="Group 4">
          <path d={svgPaths.p1aafa940} fill="var(--fill-0, #57FFAE)" id="Ellipse 20" />
          <path d={svgPaths.p18984b80} fill="var(--fill-0, #DBAEFF)" id="Ellipse 19" />
          <path d={svgPaths.p1dfa6c80} fill="var(--fill-0, #FFAF5B)" id="Ellipse 18" />
          <path d={svgPaths.p3463ac00} fill="var(--fill-0, #FF83D5)" id="Ellipse 17" />
          <path d={svgPaths.pc0cd910} fill="var(--fill-0, #6DB8FF)" id="Ellipse 16" />
        </g>
      </svg>
    </div>
  );
}

function Right1() {
  return (
    <div className="content-stretch flex flex-col gap-[14px] h-[535px] items-end relative shrink-0 w-[523px]" data-name="right">
      <Frame3 />
      <Frame4 />
      <Group />
    </div>
  );
}

function ExpenditureChart() {
  return (
    <div className="bg-[rgba(151,151,151,0.13)] content-stretch flex gap-[10px] h-[658px] items-start p-[24px] relative rounded-[24px] shrink-0" data-name="expenditure chart">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[24px] shadow-[0px_4px_25px_0px_rgba(0,0,0,0.25)]" />
      <Left1 />
      <Right1 />
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[568px]" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] w-[172px]">Total Annual Budget F/Y 2026</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph15 />
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="content-stretch flex h-[26px] items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[25px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="bg-[#eee] h-[110px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[5px] items-start p-[25px] relative size-full">
          <Frame12 />
          <Paragraph16 />
        </div>
      </div>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[568px]" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] w-[172px]">Total Supplemental Budget</p>
    </div>
  );
}

function Frame13() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph17 />
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-[#eee] h-[113px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative size-full">
          <Frame13 />
          <Paragraph18 />
        </div>
      </div>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[568px]" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] w-[172px]">Total Committed</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph19 />
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#eee] h-[113px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative size-full">
          <Frame14 />
          <Paragraph20 />
        </div>
      </div>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[568px]" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] w-[172px]">Total Spent</p>
    </div>
  );
}

function Frame15() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph21 />
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-[#eee] h-[113px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative size-full">
          <Frame15 />
          <Paragraph22 />
        </div>
      </div>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-[568px]" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#155dfc] text-[14px] w-[172px]">Total Remaining</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full">
      <Paragraph23 />
    </div>
  );
}

function Paragraph24() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[36px] relative shrink-0 text-[#101828] text-[30px] text-nowrap">₱0.00</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="bg-[#eee] h-[113px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(0,0,0,0.25)] border-solid inset-0 pointer-events-none rounded-[10px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[10px] items-start p-[25px] relative size-full">
          <Frame16 />
          <Paragraph24 />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col gap-[24px] h-[678px] items-start ml-0 mt-0 relative w-[607px]" data-name="Frame">
      <Container7 />
      <Container8 />
      <Container9 />
      <Container10 />
      <Container11 />
    </div>
  );
}

function Group1() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Frame />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0">
      <Group1 />
    </div>
  );
}

function Container12() {
  return (
    <div className="content-stretch flex gap-[32px] items-start pb-[162px] pl-[58px] pr-[30px] pt-[29px] relative shrink-0" data-name="Container">
      <ExpenditureChart />
      <Frame2 />
    </div>
  );
}

function Container13() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[800px] items-start p-px relative rounded-[10px] shrink-0 w-[1619px]" data-name="container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container6 />
      <Container12 />
    </div>
  );
}

function BudgetMonitor() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0" data-name="budget monitor">
      <Container13 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col gap-[10px] h-[1279px] items-start overflow-clip p-[32px] relative rounded-tl-[24px] shrink-0 w-[1694px]" data-name="content">
      <TopCards />
      <TopCards1 />
      <Container5 />
      <BudgetMonitor />
    </div>
  );
}

function BottomOfNav() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex h-[1279px] items-center ml-0 mt-[94px] relative w-[1920px]" data-name="bottom of nav">
      <Sidebar />
      <Content />
    </div>
  );
}

function Group2() {
  return (
    <div className="grid-cols-[max-content] grid-rows-[max-content] inline-grid leading-[0] place-items-start relative shrink-0">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}

export default function Module2SkMonitor() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 2 (SK Monitor)">
      <Group2 />
    </div>
  );
}