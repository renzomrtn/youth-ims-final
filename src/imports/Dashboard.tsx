import svgPaths from "./svg-77emg1ig3n";
import imgLogo from "figma:asset/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "figma:asset/9066d0c3e92d7f448f496f9762ca0285553bd417.png";
import imgSettings from "figma:asset/eae5ff2af6ada8ad757597d1df5d7dd1f937b3dc.png";

function Frame2() {
  return (
    <div className="content-stretch flex items-center justify-center relative shrink-0">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[24px] text-black text-nowrap whitespace-pre">YOUTH</p>
    </div>
  );
}

function Frame1() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center relative shrink-0">
      <Frame2 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[10px] text-black text-nowrap whitespace-pre">Youth Officials’ Unified Tracking Hub</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap whitespace-pre">{`/  Home`}</p>
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
          <path d={svgPaths.p13b4cd00} fill="var(--fill-0, #174499)" id="Vector" />
          <path d={svgPaths.p32939e80} fill="var(--fill-0, #174499)" id="Vector_2" />
          <path d={svgPaths.pdc9c900} fill="var(--fill-0, #174499)" id="Vector_3" />
          <path d={svgPaths.p20de0972} fill="var(--fill-0, #174499)" id="Vector_4" />
        </g>
      </svg>
    </div>
  );
}

function Dashboard() {
  return (
    <div className="content-stretch flex gap-[9px] items-center relative shrink-0" data-name="dashboard">
      <Icon1 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap whitespace-pre">Dashboard</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Projects</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Budget</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">M3</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Archives</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Portal Management</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">{`Personnel `}</p>
    </div>
  );
}

function PersonLinesFill() {
  return (
    <div className="content-stretch flex items-center overflow-clip relative shrink-0 size-[24px]" data-name="person-lines-fill 1">
      <div className="relative shrink-0 size-[24px]" data-name="Settings">
        <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgSettings} />
      </div>
    </div>
  );
}

function Settings() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="settings">
      <PersonLinesFill />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Settings</p>
    </div>
  );
}

function Utility() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-start relative shrink-0" data-name="utility">
      <Archives />
      <Portal />
      <Personnel />
      <Settings />
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[41px] w-[6px]">
      <div className="size-full">
        <div className="h-[45px] w-[6px]" />
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
      <Frame3 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[28px] text-[#606060] text-[12px] text-nowrap top-[267px] whitespace-pre">------------------ Utility ------------------</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[12.5%_8.33%_16.67%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5.88%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 19">
            <path d={svgPaths.p1741be00} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_66.67%_41.67%_33.33%]" data-name="Vector">
        <div className="absolute inset-[-25%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 6">
            <path d="M1 1V5" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-1/2 right-1/2 top-[41.67%]" data-name="Vector">
        <div className="absolute inset-[-50%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 4">
            <path d="M1 1V3" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[41.67%_33.33%_33.33%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 8">
            <path d="M1 1V7" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <Icon7 />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[32.422px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#00a63e] text-[18px] text-nowrap whitespace-pre">+12%</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container />
      <Text />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[18px]">Active Projects</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#606060] text-[16px] text-nowrap top-0 whitespace-pre">24</p>
    </div>
  );
}

function Container2() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <Container1 />
          <Paragraph />
          <Paragraph1 />
        </div>
      </div>
    </div>
  );
}

function Icon8() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[8.33%] left-1/2 right-1/2 top-[8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%_-1px]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 2 22">
            <path d="M1 1V21" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-[20.83%] left-1/4 right-1/4 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-8.33%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 16">
            <path d={svgPaths.p30498f48} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <Icon8 />
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[20px] relative shrink-0 w-[22.859px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[22.859px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#e7000b] text-[18px] text-nowrap whitespace-pre">-3%</p>
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container3 />
      <Text1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[18px]">Budget Utilization</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#606060] text-[16px] text-nowrap top-0 whitespace-pre">68%</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <Container4 />
          <Paragraph2 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Icon9() {
  return (
    <div className="h-[24px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[29.17%_8.33%_45.83%_66.67%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 8">
            <path d="M1 1H7V7" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[29.17%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-10%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 12">
            <path d="M21 1L12.5 9.5L7.5 4.5L1 11" id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-blue-50 relative rounded-[10px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-[40px]">
        <Icon9 />
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[32.422px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[32.422px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#00a63e] text-[18px] text-nowrap whitespace-pre">+24%</p>
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container6 />
      <Text2 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[18px]">Documents</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#606060] text-[16px] text-nowrap top-0 whitespace-pre">1,247</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="basis-0 bg-white grow min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[16px] items-start p-[25px] relative w-full">
          <Container7 />
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
      <Container2 />
      {[...Array(2).keys()].map((_, i) => (
        <Container5 key={i} />
      ))}
      <Container8 />
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[30px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Medium',sans-serif] font-medium leading-[30px] left-0 text-[#101828] text-[20px] text-nowrap top-0 whitespace-pre">Recent Activity</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="h-[79px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[79px] items-start pb-px pt-[24px] px-[24px] relative w-full">
          <Heading />
        </div>
      </div>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">New project created</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Website Redesign</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="h-[48px] relative shrink-0 w-[133.906px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[133.906px]">
        <Paragraph6 />
        <Paragraph7 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[67.563px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">2 hours ago</p>
      </div>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container10 />
      <Text3 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[24px] px-[24px] top-0 w-[1223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container11 />
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Budget approved</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap whitespace-pre">Marketing Campaign Q4</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="h-[48px] relative shrink-0 w-[139.797px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[139.797px]">
        <Paragraph8 />
        <Paragraph9 />
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[20px] relative shrink-0 w-[67.563px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[67.563px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">5 hours ago</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Text4 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[24px] px-[24px] top-[97px] w-[1223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container14 />
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Document generated</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Contract Agreement</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[48px] relative shrink-0 w-[140.578px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[140.578px]">
        <Paragraph10 />
        <Paragraph11 />
      </div>
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[20px] relative shrink-0 w-[55.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[55.438px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">1 day ago</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[48px] items-start justify-between relative shrink-0 w-full" data-name="Container">
      <Container16 />
      <Text5 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-0 pb-px pt-[24px] px-[24px] top-[194px] w-[1223px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <Container17 />
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0 whitespace-pre">Team member added</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Development Team</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="h-[48px] relative shrink-0 w-[142.406px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] h-[48px] items-start relative w-[142.406px]">
        <Paragraph12 />
        <Paragraph13 />
      </div>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[20px] relative shrink-0 w-[61.297px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex h-[20px] items-start relative w-[61.297px]">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">2 days ago</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex h-[48px] items-start justify-between left-[24px] top-[315px] w-[1175px]" data-name="Container">
      <Container19 />
      <Text6 />
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[387px] relative shrink-0 w-full" data-name="Container">
      <Container12 />
      <Container15 />
      <Container18 />
      <Container20 />
    </div>
  );
}

function Container22() {
  return (
    <div className="basis-0 bg-white grow h-[468px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col h-[468px] items-start p-px relative w-full">
          <Container9 />
          <Container21 />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="basis-0 content-stretch flex grow items-start justify-center min-h-px min-w-px relative shrink-0 w-full" data-name="bottom">
      <Container22 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow h-full min-h-px min-w-px relative rounded-tl-[24px] shrink-0" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[42px] items-start p-[32px] relative size-full">
          <TopCards />
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

export default function Dashboard1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="DASHBOARD">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}