import svgPaths from "./svg-u8mtnpgcn3";
import imgLogo from "../assets/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "../assets/9066d0c3e92d7f448f496f9762ca0285553bd417.png";

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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">
        <span>{`/  Projects / HIV/AIDS Awareness Seminar / `}</span>Executive Committee Kanban View
      </p>
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

function Frame3() {
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
      <Frame3 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[28px] text-[#606060] text-[12px] text-nowrap top-[267px]">------------------ Utility ------------------</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">Projects</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Certificate Generator</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Projects by Year</p>
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
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-end size-full">
        <div className="content-stretch flex gap-[32px] items-end p-[20px] relative w-full">
          <Button1 />
          <Button2 />
          <Button3 />
          <Button4 />
        </div>
      </div>
    </div>
  );
}

function Icon7() {
  return (
    <div className="h-[20px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute bottom-[20.83%] left-[20.83%] right-1/2 top-[20.83%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-14.29%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 8 14">
            <path d={svgPaths.p37c3e100} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-1/2 left-[20.83%] right-[20.83%] top-1/2" data-name="Vector">
        <div className="absolute inset-[-0.83px_-7.14%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 2">
            <path d="M12.5 0.833333H0.833333" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button5() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon7 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 2">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[16px] top-0 w-[378px]">HIV/AIDS Awareness Seminar - Executive Committee</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-0 w-[285px]">Chairman: John Smith | Vice Chairman: Jane Doe</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="basis-0 grow h-[48px] min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4px] items-start relative size-full">
        <Heading />
        <Paragraph />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[16px] h-[48px] items-center relative shrink-0 w-full" data-name="Container">
      <Button5 />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[97px] items-start left-px pb-px pt-[24px] px-[24px] top-px w-[1249px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container2 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="absolute h-[24px] left-[25px] top-[25px] w-[1397px]" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">TASK PROGRESS</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Tasks To Do:</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">0</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="[grid-area:1_/_1] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Tasks In Progress:</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">2</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="[grid-area:1_/_2] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container7 />
      <Container8 />
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Tasks Finished:</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">5</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="[grid-area:1_/_3] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container10 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Late Tasks:</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">3</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="[grid-area:1_/_4] content-stretch flex flex-col items-start place-self-stretch relative shrink-0" data-name="Container">
      <Container13 />
      <Container14 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute gap-[24px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[44px] left-[25px] top-[65px] w-[1397px]" data-name="Container">
      <Container6 />
      <Container9 />
      <Container12 />
      <Container15 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[20px] relative shrink-0 w-[54.172px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">Progress:</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[29.094px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] top-0 w-[30px]">63%</p>
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[24px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Text />
      <Text1 />
    </div>
  );
}

function Container18() {
  return <div className="bg-[#00c950] h-[12px] shrink-0 w-full" data-name="Container" />;
}

function Container19() {
  return (
    <div className="bg-[#e5e7eb] h-[12px] relative rounded-[3.35544e+07px] shrink-0 w-full" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[425.875px] py-0 relative size-full">
          <Container18 />
        </div>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[8px] h-[44px] items-start left-[25px] top-[133px] w-[1397px]" data-name="Container">
      <Container17 />
      <Container19 />
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[20px] relative shrink-0 w-[80.141px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] text-nowrap">{`Project's Due:`}</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[85.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Oct. 21, 2025</p>
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex h-[24px] items-center justify-between left-[25px] top-[193px] w-[1397px]" data-name="Container">
      <Text2 />
      <Text3 />
    </div>
  );
}

function Container22() {
  return (
    <div className="bg-white h-[242px] relative rounded-[10px] shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading1 />
      <Container16 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[291px] items-start left-px pb-px pt-[24px] px-[24px] top-[98px] w-[1503px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Container22 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">To Do</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-0 w-[40px]">0 tasks</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[81px] items-start left-px pb-px pt-[16px] px-[16px] top-px w-[286.25px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <Heading3 />
      <Paragraph1 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[117.13px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M3.33333 8H12.6667" id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M8 3.33333V12.6667" id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute border-2 border-[#d1d5dc] border-solid h-[44px] left-[17px] rounded-[10px] top-[98px] w-[254.25px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function Container25() {
  return (
    <div className="[grid-area:1_/_1] bg-[#f9fafb] place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container24 />
      <Button6 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">In Progress</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-0 w-[40px]">2 tasks</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
          <Heading4 />
          <Paragraph2 />
        </div>
      </div>
    </div>
  );
}

function Heading2() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Design promotional materials</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Alice Brown</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[88px]">Due: Dec 15, 2024</p>
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#fb2c36] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="absolute bg-[#fef2f2] border border-[#fb2c36] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[65.375px]" data-name="Text">
      <Text4 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#e7000b] text-[12px] text-nowrap top-[3px]">High</p>
    </div>
  );
}

function TaskCard() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading2 />
      <Container27 />
      <Container28 />
      <Text5 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Contact speakers</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Bob Wilson</p>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[88px]">Due: Dec 10, 2024</p>
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#00c950] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="absolute bg-[#f0fdf4] border border-[#00c950] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[62.781px]" data-name="Text">
      <Text6 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#00a63e] text-[12px] text-nowrap top-[3px]">Low</p>
    </div>
  );
}

function TaskCard1() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading5 />
      <Container29 />
      <Container30 />
      <Text7 />
    </div>
  );
}

function ColumnDropZone() {
  return (
    <div className="h-[396px] relative shrink-0 w-full" data-name="ColumnDropZone">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <TaskCard />
          <TaskCard1 />
        </div>
      </div>
    </div>
  );
}

function Container31() {
  return (
    <div className="[grid-area:1_/_2] bg-[#f9fafb] place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container26 />
          <ColumnDropZone />
        </div>
      </div>
    </div>
  );
}

function Heading6() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Review</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-0 w-[40px]">1 tasks</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
          <Heading6 />
          <Paragraph3 />
        </div>
      </div>
    </div>
  );
}

function Heading7() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Review event timeline</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Charlie Davis</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[82px]">Due: Dec 5, 2024</p>
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#f0b100] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="absolute bg-[#fefce8] border border-[#f0b100] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[82.781px]" data-name="Text">
      <Text8 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#d08700] text-[12px] text-nowrap top-[3px]">Medium</p>
    </div>
  );
}

function TaskCard2() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading7 />
      <Container33 />
      <Container34 />
      <Text9 />
    </div>
  );
}

function ColumnDropZone1() {
  return (
    <div className="h-[236px] relative shrink-0 w-full" data-name="ColumnDropZone">
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <TaskCard2 />
        </div>
      </div>
    </div>
  );
}

function Container35() {
  return (
    <div className="[grid-area:1_/_3] bg-[#f9fafb] place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container32 />
          <ColumnDropZone1 />
        </div>
      </div>
    </div>
  );
}

function Heading8() {
  return (
    <div className="h-[24px] relative shrink-0 w-full" data-name="Heading 3">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Done</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-0 text-[#4a5565] text-[14px] top-0 w-[40px]">5 tasks</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="h-[81px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[4px] items-start pb-px pt-[16px] px-[16px] relative size-full">
          <Heading8 />
          <Paragraph4 />
        </div>
      </div>
    </div>
  );
}

function Heading9() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Finalize committee structure</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">John Smith</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[89px]">Due: Nov 28, 2024</p>
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-[#fb2c36] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="absolute bg-[#fef2f2] border border-[#fb2c36] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[65.375px]" data-name="Text">
      <Text10 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#e7000b] text-[12px] text-nowrap top-[3px]">High</p>
    </div>
  );
}

function TaskCard3() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading9 />
      <Container37 />
      <Container38 />
      <Text11 />
    </div>
  );
}

function Heading10() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Create attendance sheet</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Jane Doe</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[89px]">Due: Nov 30, 2024</p>
    </div>
  );
}

function Text12() {
  return <div className="absolute bg-[#00c950] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text13() {
  return (
    <div className="absolute bg-[#f0fdf4] border border-[#00c950] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[62.781px]" data-name="Text">
      <Text12 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#00a63e] text-[12px] text-nowrap top-[3px]">Low</p>
    </div>
  );
}

function TaskCard4() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading10 />
      <Container39 />
      <Container40 />
      <Text13 />
    </div>
  );
}

function Heading11() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Book conference room</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Alice Brown</p>
    </div>
  );
}

function Container42() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[89px]">Due: Nov 25, 2024</p>
    </div>
  );
}

function Text14() {
  return <div className="absolute bg-[#f0b100] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text15() {
  return (
    <div className="absolute bg-[#fefce8] border border-[#f0b100] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[82.781px]" data-name="Text">
      <Text14 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#d08700] text-[12px] text-nowrap top-[3px]">Medium</p>
    </div>
  );
}

function TaskCard5() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading11 />
      <Container41 />
      <Container42 />
      <Text15 />
    </div>
  );
}

function Heading12() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Send invitations</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Bob Wilson</p>
    </div>
  );
}

function Container44() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[89px]">Due: Nov 20, 2024</p>
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#fb2c36] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text17() {
  return (
    <div className="absolute bg-[#fef2f2] border border-[#fb2c36] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[65.375px]" data-name="Text">
      <Text16 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#e7000b] text-[12px] text-nowrap top-[3px]">High</p>
    </div>
  );
}

function TaskCard6() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading12 />
      <Container43 />
      <Container44 />
      <Text17 />
    </div>
  );
}

function Heading13() {
  return (
    <div className="absolute h-[24px] left-[17px] top-[17px] w-[220.25px]" data-name="Heading 4">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Order catering</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="absolute content-stretch flex h-[20px] items-start left-[17px] top-[49px] w-[220.25px]" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Charlie Davis</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="absolute h-[16px] left-[17px] top-[77px] w-[220.25px]" data-name="Container">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] top-[-1px] w-[89px]">Due: Nov 22, 2024</p>
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#f0b100] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text19() {
  return (
    <div className="absolute bg-[#fefce8] border border-[#f0b100] border-solid h-[26px] left-[17px] rounded-[3.35544e+07px] top-[105px] w-[82.781px]" data-name="Text">
      <Text18 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#d08700] text-[12px] text-nowrap top-[3px]">Medium</p>
    </div>
  );
}

function TaskCard7() {
  return (
    <div className="bg-white h-[148px] relative rounded-[10px] shrink-0 w-full" data-name="TaskCard">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Heading13 />
      <Container45 />
      <Container46 />
      <Text19 />
    </div>
  );
}

function ColumnDropZone2() {
  return (
    <div className="h-[876px] relative shrink-0 w-full" data-name="ColumnDropZone">
      <div className="size-full">
        <div className="content-stretch flex flex-col gap-[12px] items-start pb-0 pt-[16px] px-[16px] relative size-full">
          <TaskCard3 />
          <TaskCard4 />
          <TaskCard5 />
          <TaskCard6 />
          <TaskCard7 />
        </div>
      </div>
    </div>
  );
}

function Container47() {
  return (
    <div className="[grid-area:1_/_4] bg-[#f9fafb] place-self-stretch relative rounded-[10px] shrink-0" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container36 />
          <ColumnDropZone2 />
        </div>
      </div>
    </div>
  );
}

function Container48() {
  return (
    <div className="absolute gap-[16px] grid grid-cols-[repeat(4,_minmax(0px,_1fr))] grid-rows-[repeat(1,_minmax(0px,_1fr))] h-[959px] left-[43px] top-[410px] w-[1420px]" data-name="Container">
      <Container25 />
      <Container31 />
      <Container35 />
      <Container47 />
    </div>
  );
}

function ProjectManagement() {
  return (
    <div className="bg-white h-[1397px] relative rounded-[10px] shrink-0 w-full" data-name="ProjectManagement">
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <Container3 />
      <Container23 />
      <Container48 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip pb-0 pl-[32px] pr-[47px] pt-[32px] relative rounded-bl-[16px] rounded-br-[16px] shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] shrink-0 w-[1583px]" data-name="Main Content">
      <ProjectManagement />
    </div>
  );
}

function Bottom() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-center relative shrink-0 w-full" data-name="bottom">
      <Container />
      <MainContent />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow min-h-px min-w-px relative rounded-tl-[24px] shrink-0" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative w-full">
          <Bottom />
        </div>
      </div>
    </div>
  );
}

function BottomOfNav() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="bottom of nav">
      <div className="flex flex-row items-center self-stretch">
        <Sidebar />
      </div>
      <Content />
    </div>
  );
}

export default function Module1Kanban() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 1 - Kanban">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}