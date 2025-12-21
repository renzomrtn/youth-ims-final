import svgPaths from "./svg-opiwijqgtg";
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Personnel`}</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap">Budget</p>
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
          <path d={svgPaths.p1d820380} id="Vector" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p27451300} id="Vector_2" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2981fe00} id="Vector_3" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p161d4800} id="Vector_4" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
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
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">{`Personnel `}</p>
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
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[372px] w-[6px]">
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
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">2025</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">2024</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">2023</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">2022</p>
      </div>
    </div>
  );
}

function Container() {
  return (
    <div className="relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[20px] relative w-full">
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
    <div className="h-[24px] relative shrink-0 w-[67.016px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Current Personnel</p>
      </div>
    </div>
  );
}

function Dropdown() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[188px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid size-full" />
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-white grow h-[38px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">Search personnel...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[456px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Dropdown />
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
    <div className="h-[89px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-0 px-[24px] py-[16px] top-0 w-[289.359px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Name</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[289.36px] px-[24px] py-[16px] top-0 w-[339.844px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Position</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[629.2px] px-[24px] py-[16px] top-0 w-[273.531px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Barangay</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[902.73px] px-[24px] py-[16px] top-0 w-[320.266px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Contact</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-full" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
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

function Container4() {
  return (
    <div className="bg-[#3b5998] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">MS</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[86.359px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Maria Santos</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.5px] w-[241.359px]" data-name="Container">
      <Container4 />
      <Text />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[77px] left-0 top-0 w-[289.359px]" data-name="Table Cell">
      <Container5 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[77px] left-[289.36px] top-0 w-[339.844px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">SK Federation President</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[77px] left-[629.2px] top-0 w-[273.531px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">ABELLA</p>
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container6() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon7 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">maria.santos@sk.gov.ph</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_1159)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_38_1159">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon8 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">+63 912 345 6789</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.5px] w-[272.266px]" data-name="Container">
      <Container6 />
      <Container7 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[77px] left-[902.73px] top-0 w-[320.266px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
    </div>
  );
}

function Container9() {
  return (
    <div className="bg-[#3b5998] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">JDC</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[24px] relative shrink-0 w-[99.703px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Juan Dela Cruz</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.5px] w-[241.359px]" data-name="Container">
      <Container9 />
      <Text1 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[77px] left-0 top-0 w-[289.359px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[77px] left-[289.36px] top-0 w-[339.844px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">SK Federation Vice President</p>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[77px] left-[629.2px] top-0 w-[273.531px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">DAYANGDANG</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon9 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">juan.delacruz@sk.gov.ph</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_1159)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_38_1159">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container12() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon10 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">+63 923 456 7890</p>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.5px] w-[272.266px]" data-name="Container">
      <Container11 />
      <Container12 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[77px] left-[902.73px] top-0 w-[320.266px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
    </div>
  );
}

function Container14() {
  return (
    <div className="bg-[#3b5998] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">AR</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[24px] relative shrink-0 w-[76.484px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Anna Reyes</p>
      </div>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.5px] w-[241.359px]" data-name="Container">
      <Container14 />
      <Text2 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[77px] left-0 top-0 w-[289.359px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[77px] left-[289.36px] top-0 w-[339.844px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">SK Federation Secretary</p>
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[77px] left-[629.2px] top-0 w-[273.531px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">PENAFRANCIA</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container16() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon11 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">anna.reyes@sk.gov.ph</p>
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_1159)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_38_1159">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon12 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">+63 934 567 8901</p>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.5px] w-[272.266px]" data-name="Container">
      <Container16 />
      <Container17 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[77px] left-[902.73px] top-0 w-[320.266px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function Container19() {
  return (
    <div className="bg-[#3b5998] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">PG</p>
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="h-[24px] relative shrink-0 w-[103.281px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Pedro Gonzales</p>
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.5px] w-[241.359px]" data-name="Container">
      <Container19 />
      <Text3 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[77px] left-0 top-0 w-[289.359px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[77px] left-[289.36px] top-0 w-[339.844px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">SK Federation Treasurer</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[77px] left-[629.2px] top-0 w-[273.531px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">BAGUMBAYAN NORTE</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container21() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">pedro.gonzales@sk.gov.ph</p>
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_1159)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_38_1159">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container22() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon14 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">+63 945 678 9012</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.5px] w-[272.266px]" data-name="Container">
      <Container21 />
      <Container22 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[77px] left-[902.73px] top-0 w-[320.266px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="h-[77px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
    </div>
  );
}

function Container24() {
  return (
    <div className="bg-[#3b5998] relative rounded-[3.35544e+07px] shrink-0 size-[40px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[16px] text-nowrap text-white">RM</p>
      </div>
    </div>
  );
}

function Text4() {
  return (
    <div className="h-[24px] relative shrink-0 w-[93.656px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Rosa Martinez</p>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[40px] items-center left-[24px] top-[18.5px] w-[241.359px]" data-name="Container">
      <Container24 />
      <Text4 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[76.5px] left-0 top-0 w-[289.359px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[76.5px] left-[289.36px] top-0 w-[339.844px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">SK Federation Auditor</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[76.5px] left-[629.2px] top-0 w-[273.531px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[26.5px]">DEL ROSARIO</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g id="Icon">
          <path d={svgPaths.p583e000} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
          <path d={svgPaths.pcd45380} id="Vector_2" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
      </svg>
    </div>
  );
}

function Container26() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">rosa.martinez@sk.gov.ph</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-0 size-[12px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 12">
        <g clipPath="url(#clip0_38_1159)" id="Icon">
          <path d={svgPaths.p3d16e300} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" />
        </g>
        <defs>
          <clipPath id="clip0_38_1159">
            <rect fill="white" height="12" width="12" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container27() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Container">
      <Icon16 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[20px] text-[#4a5565] text-[14px] text-nowrap top-0">+63 956 789 0123</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[44px] items-start left-[24px] top-[16.5px] w-[272.266px]" data-name="Container">
      <Container26 />
      <Container27 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[76.5px] left-[902.73px] top-0 w-[320.266px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="h-[76.5px] relative shrink-0 w-full" data-name="Table Row">
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Body">
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
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon17() {
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

function Button5() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[113.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon17 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[69px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Previous</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[16px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]">1</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">2</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">3</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">4</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">5</p>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">6</p>
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[54.34px] size-[16px] top-[12px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[86.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[31.5px] text-[#364153] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Next</p>
        <Icon18 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
          <Button5 />
          <Button6 />
          <Button7 />
          <Button8 />
          <Button9 />
          <Button10 />
          <Button11 />
          <Button12 />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[73px] relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[1px_0px_0px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[17px] px-[16px] relative size-full">
          <Container29 />
        </div>
      </div>
    </div>
  );
}

function PersonnelManagement() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-full" data-name="PersonnelManagement">
      <div className="content-stretch flex flex-col items-start overflow-clip relative rounded-[inherit] w-full">
        <Container3 />
        <Table />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Content() {
  return (
    <div className="basis-0 bg-[#f3f3f3] grow h-full min-h-px min-w-px relative rounded-tl-[24px] shrink-0" data-name="content">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col gap-[20px] items-start p-[32px] relative size-full">
          <Container />
          <PersonnelManagement />
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

export default function Personnel1() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="PERSONNEL">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}