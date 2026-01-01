import svgPaths from "./svg-2djscqddle";
import imgLogo from "../assets/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "../assets/9066d0c3e92d7f448f496f9762ca0285553bd417.png";
import imgExpandArrow from "../assets/906a062ffd8bdf48dac39c6336f0fb9c5756e6d1.png";

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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Projects / Project Monitor`}</p>
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Projects</p>
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
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">Project Monitor</p>
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

function Heading() {
  return (
    <div className="relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#101828] text-[20px] text-nowrap">See Projects per Barangay</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[148px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[10px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap">2025</p>
        <div className="relative shrink-0 size-[24px]" data-name="Expand Arrow">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgExpandArrow} />
        </div>
      </div>
    </div>
  );
}

function Dropdown1() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[148px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-between p-[10px] relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[14px] text-black text-nowrap">Calauag</p>
        <div className="relative shrink-0 size-[24px]" data-name="Expand Arrow">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-contain pointer-events-none size-full" src={imgExpandArrow} />
        </div>
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="bg-white h-[38px] relative rounded-[10px] shrink-0 w-[260px]" data-name="Text Input">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center overflow-clip px-[12px] py-[8px] relative rounded-[inherit] size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">Search projects...</p>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] h-full items-center relative">
        <Dropdown />
        <Dropdown1 />
        <TextInput />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex h-[40px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Heading />
      <Container1 />
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white h-[89px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[rgba(96,96,96,0.2)] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return <div className="h-[52.5px] shrink-0 w-[56px]" data-name="Header Cell" />;
}

function HeaderCell1() {
  return (
    <div className="content-stretch flex h-[53px] items-start px-[24px] py-[16px] relative shrink-0 w-[160px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Proponent</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="content-stretch flex h-[53px] items-start px-[24px] py-[16px] relative shrink-0 w-[415px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Project Title</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[273.969px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Line Item Information</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[199.063px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Budgeting Information</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[209px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Date Information</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="content-stretch flex h-[53px] items-start px-[24px] py-[16px] relative shrink-0 w-[185px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">{`Progress & Status`}</p>
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

function Icon7() {
  return <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon" />;
}

function Button5() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon7 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Melody Marks</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[415px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Dengue Seminar</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` LI-20250910-26ZQ`}</span>
      </p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Health`}</span>
      </p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[273.969px]" data-name="Table Cell">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱500,000`}</span>
      </p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Spent:</span>
        <span>{` ₱300,000`}</span>
      </p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[199.063px]" data-name="Table Cell">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Started:</span>
        <span>{` Jan 15, 2025`}</span>
      </p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Due Date:</span>
        <span>{` Dec 15, 2025`}</span>
      </p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[166px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Accomplished:</span>
        <span>{` Dec 15, 2025`}</span>
      </p>
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container8 />
      <Container9 />
      <Container10 />
    </div>
  );
}

function Text() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="basis-0 bg-[#e5e7eb] content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container11 />
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text />
      <Container12 />
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container13 />
      <Text2 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[19px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell6 />
      </div>
    </div>
  );
}

function Icon8() {
  return <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon" />;
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Teddy Tarantino</p>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[415px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Self Defense Seminar</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` LI-20250911-43XR`}</span>
      </p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Public Safety`}</span>
      </p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[273.969px]" data-name="Table Cell">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱1,200,000`}</span>
      </p>
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Spent:</span>
        <span>{` ₱800,000`}</span>
      </p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[199.063px]" data-name="Table Cell">
      <Container17 />
      <Container18 />
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Started:</span>
        <span>{` Feb 1, 2025`}</span>
      </p>
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Due Date:</span>
        <span>{` Mar 30, 2025`}</span>
      </p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[167px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Accomplished:</span>
        <span>{` Mar 30, 2025`}</span>
      </p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container19 />
      <Container20 />
      <Container21 />
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container22() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container23() {
  return (
    <div className="basis-0 bg-[#e5e7eb] content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container22 />
    </div>
  );
}

function Container24() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text3 />
      <Container23 />
    </div>
  );
}

function Text4() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text5() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text4 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container24 />
      <Text5 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[19px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell13 />
      </div>
    </div>
  );
}

function Icon9() {
  return <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon" />;
}

function Button7() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon9 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Max Fills</p>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[415px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Leadership Training Camp</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` LI-20250912-78MP`}</span>
      </p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Education`}</span>
      </p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[273.969px]" data-name="Table Cell">
      <Container26 />
      <Container27 />
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱750,000`}</span>
      </p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Spent:</span>
        <span>{` ₱750,000`}</span>
      </p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[199.063px]" data-name="Table Cell">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Started:</span>
        <span>{` Mar 10, 2025`}</span>
      </p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Due Date:</span>
        <span>{` Nov 10, 2025`}</span>
      </p>
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[167px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Accomplished:</span>
        <span>{` Nov 10, 2025`}</span>
      </p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container30 />
      <Container31 />
      <Container32 />
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container33() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container34() {
  return (
    <div className="basis-0 bg-[#e5e7eb] content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container33 />
    </div>
  );
}

function Container35() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text6 />
      <Container34 />
    </div>
  );
}

function Text7() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text8() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text7 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container35 />
      <Text8 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex flex-col items-center justify-center px-[24px] py-[19px] relative self-stretch shrink-0 w-[185px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-start relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
    </div>
  );
}

function Icon10() {
  return <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon" />;
}

function Button8() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Hazel Moore</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[415px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Inter-Barangay Sports League</p>
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` LI-20250913-91KL`}</span>
      </p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Sports`}</span>
      </p>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[273.969px]" data-name="Table Cell">
      <Container37 />
      <Container38 />
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱900,000`}</span>
      </p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Spent:</span>
        <span>{` ₱450,000`}</span>
      </p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[199.063px]" data-name="Table Cell">
      <Container39 />
      <Container40 />
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Started:</span>
        <span>{` Apr 20, 2025`}</span>
      </p>
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Due Date:</span>
        <span>{` Apr 20, 2025`}</span>
      </p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[168px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Accomplished:</span>
        <span>{` Apr 20, 2025`}</span>
      </p>
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container41 />
      <Container42 />
      <Container43 />
    </div>
  );
}

function Text9() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container44() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container45() {
  return (
    <div className="basis-0 bg-[#e5e7eb] content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container44 />
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text9 />
      <Container45 />
    </div>
  );
}

function Text10() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text11() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text10 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function Container47() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container46 />
      <Text11 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[19px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container47 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell27 />
      </div>
    </div>
  );
}

function Icon11() {
  return <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon" />;
}

function Button9() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[160px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Eden Ivy</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[415px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Youth Development Workshop</p>
    </div>
  );
}

function Container48() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">ID:</span>
        <span>{` LI-20250914-52ND`}</span>
      </p>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Area of Participation:</span>
        <span>{` Social Services`}</span>
      </p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[273.969px]" data-name="Table Cell">
      <Container48 />
      <Container49 />
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Budget:</span>
        <span>{` ₱350,000`}</span>
      </p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Spent:</span>
        <span>{` ₱100,000`}</span>
      </p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[199.063px]" data-name="Table Cell">
      <Container50 />
      <Container51 />
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Started:</span>
        <span>{` Jun 1, 2025`}</span>
      </p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">Due Date:</span>
        <span>{` Dec 31, 2025`}</span>
      </p>
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#4a5565] text-[14px] w-[167px]">
        <span className="font-['Source_Sans_3:Bold',sans-serif] font-bold">{`Accomplished: `}</span>Dec 31, 2025
      </p>
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container52 />
      <Container53 />
      <Container54 />
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container55() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container56() {
  return (
    <div className="basis-0 bg-[#e5e7eb] content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container55 />
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text12 />
      <Container56 />
    </div>
  );
}

function Text13() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text14() {
  return (
    <div className="bg-[#f0fdf4] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text13 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px]">Completed</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container57 />
      <Text14 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex flex-col h-full items-center justify-center px-[24px] py-[19px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container58 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <div className="flex flex-row items-center self-stretch">
        <TableCell34 />
      </div>
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1536px]" data-name="Table Body">
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
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="2024">
      <Table />
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="table">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end p-[32px] relative w-full">
          <Container3 />
          <Component />
        </div>
      </div>
    </div>
  );
}

function Bottom() {
  return (
    <div className="basis-0 content-stretch flex flex-col gap-[10px] grow items-center min-h-px min-w-px relative shrink-0 w-full" data-name="bottom">
      <Container />
      <Table1 />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow h-full min-h-px min-w-px relative rounded-tl-[24px] shrink-0" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start p-[32px] relative size-full">
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

export default function Module1BarangaysDashboard() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 1 - Barangays Dashboard">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}