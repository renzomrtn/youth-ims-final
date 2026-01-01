import svgPaths from "./svg-j484i8r6bc";
import imgLogo from "../assets/45d62b4154f72c9e869aa78a75208c48cc1accd0.png";
import imgAnalytics from "../assets/9066d0c3e92d7f448f496f9762ca0285553bd417.png";
import imgSettings from "../assets/eae5ff2af6ada8ad757597d1df5d7dd1f937b3dc.png";

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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap whitespace-pre">{`/  Projects`}</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Dashboard</p>
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
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap whitespace-pre">Projects</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Budget Preparation</p>
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[16px] text-nowrap whitespace-pre">Expense Verification</p>
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
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] left-[28px] text-[#606060] text-[12px] text-nowrap top-[267px] whitespace-pre">------------------ Utility ------------------</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap whitespace-pre">Projects</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap whitespace-pre">Certificate Generator</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap whitespace-pre">Projects per Year</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap whitespace-pre">Project Monitor</p>
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
    <div className="h-[24px] relative shrink-0 w-[138.406px]" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-0 text-[#101828] text-[20px] text-nowrap top-0 whitespace-pre">{`Projects  for 2025`}</p>
      </div>
    </div>
  );
}

function Option() {
  return <div className="h-0 shrink-0 w-full" data-name="Option" />;
}

function Dropdown() {
  return (
    <div className="bg-white h-[40px] relative rounded-[10px] shrink-0 w-[111px]" data-name="Dropdown">
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-px pl-[-1043.453px] pr-[1154.453px] pt-[-145px] relative size-full">
        {[...Array(4).keys()].map((_, i) => (
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
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap whitespace-pre">Search projects...</p>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#d1d5dc] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function Icon7() {
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

function Button5() {
  return (
    <div className="bg-[#3b5998] h-[36px] relative rounded-[10px] shrink-0 w-[126.547px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon7 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[75.5px] text-[14px] text-center text-nowrap text-white top-[8px] translate-x-[-50%] whitespace-pre">New Project</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[40px] relative shrink-0 w-[517.547px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Dropdown />
        <TextInput />
        <Button5 />
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
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Container2 />
        </div>
      </div>
    </div>
  );
}

function Spacer() {
  return <div className="h-[52.5px] shrink-0 w-[56px]" data-name="spacer" />;
}

function Proponent() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[159.27px]" data-name="proponent">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Proponent</p>
    </div>
  );
}

function ProjTit() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[260px]" data-name="proj tit">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Project Title</p>
    </div>
  );
}

function LiInfo() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[270px]" data-name="li info">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Line Item Information</p>
    </div>
  );
}

function BudgetInfo() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[195px]" data-name="budget info">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Budgeting Information</p>
    </div>
  );
}

function Date() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[209px]" data-name="date">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Date Information</p>
    </div>
  );
}

function ProgStat() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[185px]" data-name="prog stat">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">{`Progress & Status`}</p>
    </div>
  );
}

function Liquidation() {
  return (
    <div className="basis-0 grow h-[52.5px] min-h-px min-w-px relative shrink-0" data-name="liquidation">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[24px] py-[16px] relative size-full">
          <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] text-center">Expense Verification</p>
        </div>
      </div>
    </div>
  );
}

function Action() {
  return (
    <div className="content-stretch flex h-[52.5px] items-start px-[24px] py-[16px] relative shrink-0 w-[92.328px]" data-name="action">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] text-right">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <Spacer />
      <Proponent />
      <ProjTit />
      <LiInfo />
      <BudgetInfo />
      <Date />
      <ProgStat />
      <Liquidation />
      <Action />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-gray-50 content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button6() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon8 />
    </div>
  );
}

function TableCell() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button6 />
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[159.27px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">John Doe</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[260px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">HIV/AIDS Awareness Seminar</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">ID: LI-20250910-26ZQ</p>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Area of Participation: Health</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[270px]" data-name="Table Cell">
      <Container4 />
      <Container5 />
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Budget: ₱500,000</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Spent: ₱300,000</p>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <Container6 />
      <Container7 />
    </div>
  );
}

function Container8() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Started: Jan 15, 2024</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Due Date: Dec 15, 2024</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Accomplished: 11 months</p>
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
    <div className="h-[16px] relative shrink-0 w-[21.828px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[22px]">72%</p>
    </div>
  );
}

function Container11() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container12() {
  return (
    <div className="basis-0 bg-gray-200 grow h-[8px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[35.844px] py-0 relative size-full">
          <Container11 />
        </div>
      </div>
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
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text2() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">In Progress</p>
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
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Text3() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text4() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text3 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">Not Ready</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text4 />
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[17px] relative shrink-0 w-[137.4px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function Icon9() {
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
      <Icon9 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[32px] relative shrink-0 w-[92.33px]" data-name="Table Cell">
      <Button7 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon10 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button8 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[159.27px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Maria Garcia</p>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[260px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Anti-Illegal Drugs Seminar</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">ID: LI-20250911-43XR</p>
    </div>
  );
}

function Container17() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Area of Participation: Public Safety</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[270px]" data-name="Table Cell">
      <Container16 />
      <Container17 />
    </div>
  );
}

function Container18() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Budget: ₱1,200,000</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Spent: ₱800,000</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <Container18 />
      <Container19 />
    </div>
  );
}

function Container20() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Started: Feb 1, 2024</p>
    </div>
  );
}

function Container21() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Due Date: Mar 30, 2025</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Accomplished: 14 months</p>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container20 />
      <Container21 />
      <Container22 />
    </div>
  );
}

function Text5() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.828px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[22px]">50%</p>
    </div>
  );
}

function Container23() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container24() {
  return (
    <div className="basis-0 bg-gray-200 grow h-[8px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[64px] py-0 relative size-full">
          <Container23 />
        </div>
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text5 />
      <Container24 />
    </div>
  );
}

function Text6() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text7() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text6 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">In Progress</p>
    </div>
  );
}

function Container26() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container25 />
      <Text7 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function Text8() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text9() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text8 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">Not Ready</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text9 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[17px] relative shrink-0 w-[137.4px]" data-name="Table Cell">
      <Container27 />
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

function Button9() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon11 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[32px] relative shrink-0 w-[92.33px]" data-name="Table Cell">
      <Button9 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon12 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button10 />
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex h-[98px] items-center px-[24px] py-[36px] relative shrink-0 w-[159.27px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Roberto Santos</p>
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[260px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Leadership Training Camp</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">ID: LI-20250912-78MP</p>
    </div>
  );
}

function Container29() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Area of Participation: Education</p>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[270px]" data-name="Table Cell">
      <Container28 />
      <Container29 />
    </div>
  );
}

function Container30() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Budget: ₱750,000</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Spent: ₱750,000</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <Container30 />
      <Container31 />
    </div>
  );
}

function Container32() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Started: Mar 10, 2024</p>
    </div>
  );
}

function Container33() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Due Date: Nov 10, 2024</p>
    </div>
  );
}

function Container34() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Accomplished: 8 months</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container32 />
      <Container33 />
      <Container34 />
    </div>
  );
}

function Text10() {
  return (
    <div className="h-[16px] relative shrink-0 w-[27.797px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[28px]">100%</p>
    </div>
  );
}

function Container35() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container36() {
  return (
    <div className="basis-0 bg-gray-200 content-stretch flex flex-col grow h-[8px] items-start min-h-px min-w-px overflow-clip relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <Container35 />
    </div>
  );
}

function Container37() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text10 />
      <Container36 />
    </div>
  );
}

function Text11() {
  return <div className="absolute bg-[#00c950] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text12() {
  return (
    <div className="bg-green-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text11 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#00a63e] text-[12px] text-nowrap top-[4px] whitespace-pre">Completed</p>
    </div>
  );
}

function Container38() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container37 />
      <Text12 />
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container38 />
    </div>
  );
}

function Text13() {
  return <div className="bg-[#00c950] rounded-[3.35544e+07px] shrink-0 size-[8px]" data-name="Text" />;
}

function Text14() {
  return (
    <div className="bg-green-50 content-stretch flex gap-[8px] items-center justify-center px-[13px] py-[4px] relative rounded-[3.35544e+07px] shrink-0 w-[97.359px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#00c950] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text13 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] relative shrink-0 text-[#00a63e] text-[12px] text-nowrap whitespace-pre">Ready</p>
    </div>
  );
}

function Container39() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text14 />
    </div>
  );
}

function TableCell25() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[17px] relative shrink-0 w-[137.4px]" data-name="Table Cell">
      <Container39 />
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

function Button11() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon13 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[32px] relative shrink-0 w-[92.33px]" data-name="Table Cell">
      <Button11 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell18 />
      <TableCell19 />
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
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
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon14 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button12 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[159.27px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Sarah Johnson</p>
    </div>
  );
}

function TableCell29() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[260px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Inter-Barangay Sports League</p>
    </div>
  );
}

function Container40() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">ID: LI-20250913-91KL</p>
    </div>
  );
}

function Container41() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Area of Participation: Sports</p>
    </div>
  );
}

function TableCell30() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[270px]" data-name="Table Cell">
      <Container40 />
      <Container41 />
    </div>
  );
}

function Container42() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Budget: ₱900,000</p>
    </div>
  );
}

function Container43() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Spent: ₱450,000</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <Container42 />
      <Container43 />
    </div>
  );
}

function Container44() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Started: Apr 20, 2024</p>
    </div>
  );
}

function Container45() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Due Date: Apr 20, 2025</p>
    </div>
  );
}

function Container46() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Accomplished: 12 months</p>
    </div>
  );
}

function TableCell32() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[18px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container44 />
      <Container45 />
      <Container46 />
    </div>
  );
}

function Text15() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.828px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[22px]">63%</p>
    </div>
  );
}

function Container47() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container48() {
  return (
    <div className="basis-0 bg-gray-200 grow h-[8px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[47.375px] py-0 relative size-full">
          <Container47 />
        </div>
      </div>
    </div>
  );
}

function Container49() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text15 />
      <Container48 />
    </div>
  );
}

function Text16() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text17() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text16 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">In Progress</p>
    </div>
  );
}

function Container50() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container49 />
      <Text17 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container50 />
    </div>
  );
}

function Text18() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text19() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text18 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">Not Ready</p>
    </div>
  );
}

function Container51() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text19 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[17px] relative shrink-0 w-[137.4px]" data-name="Table Cell">
      <Container51 />
    </div>
  );
}

function Icon15() {
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

function Button13() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon15 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[32px] relative shrink-0 w-[92.33px]" data-name="Table Cell">
      <Button13 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[0px_0px_1px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function Icon16() {
  return (
    <div className="absolute left-[4px] size-[16px] top-[4px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d="M6 12L10 8L6 4" id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[4px] shrink-0 size-[24px]" data-name="Button">
      <Icon16 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="content-stretch flex items-center px-[16px] py-[34px] relative shrink-0" data-name="Table Cell">
      <Button14 />
    </div>
  );
}

function TableCell37() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[159.27px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Michael Brown</p>
    </div>
  );
}

function TableCell38() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[260px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap whitespace-pre">Youth Development Workshop</p>
    </div>
  );
}

function Container52() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">ID: LI-20250914-52ND</p>
    </div>
  );
}

function Container53() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Area of Participation: Social Services</p>
    </div>
  );
}

function TableCell39() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[270px]" data-name="Table Cell">
      <Container52 />
      <Container53 />
    </div>
  );
}

function Container54() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Budget: ₱350,000</p>
    </div>
  );
}

function Container55() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Spent: ₱100,000</p>
    </div>
  );
}

function TableCell40() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[195px]" data-name="Table Cell">
      <Container54 />
      <Container55 />
    </div>
  );
}

function Container56() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Started: Jun 1, 2024</p>
    </div>
  );
}

function Container57() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Due Date: Dec 31, 2024</p>
    </div>
  );
}

function Container58() {
  return (
    <div className="content-stretch flex h-[20px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="basis-0 font-['Source_Sans_3:Regular',sans-serif] font-normal grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#4a5565] text-[14px]">Accomplished: 7 months</p>
    </div>
  );
}

function TableCell41() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[17px] relative shrink-0 w-[209px]" data-name="Table Cell">
      <Container56 />
      <Container57 />
      <Container58 />
    </div>
  );
}

function Text20() {
  return (
    <div className="h-[16px] relative shrink-0 w-[21.828px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#4a5565] text-[12px] top-[-1px] w-[22px]">25%</p>
    </div>
  );
}

function Container59() {
  return <div className="bg-[#00c950] h-[8px] shrink-0 w-full" data-name="Container" />;
}

function Container60() {
  return (
    <div className="basis-0 bg-gray-200 grow h-[8px] min-h-px min-w-px relative rounded-[3.35544e+07px] shrink-0" data-name="Container">
      <div className="overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-start pl-0 pr-[96px] py-0 relative size-full">
          <Container59 />
        </div>
      </div>
    </div>
  );
}

function Container61() {
  return (
    <div className="content-stretch flex gap-[4px] items-center justify-center relative shrink-0 w-[128px]" data-name="Container">
      <Text20 />
      <Container60 />
    </div>
  );
}

function Text21() {
  return <div className="absolute bg-[#f0b100] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text22() {
  return <div className="absolute bg-[#fe9a00] left-[12px] rounded-[3.35544e+07px] size-[8px] top-[8px]" data-name="Text" />;
}

function Text23() {
  return (
    <div className="absolute bg-amber-50 border border-[#fe9a00] border-solid h-[26px] left-0 rounded-[3.35544e+07px] top-0 w-[97.563px]" data-name="Text">
      <Text22 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[28px] text-[#e17100] text-[12px] text-nowrap top-[3px] whitespace-pre">In Progress</p>
    </div>
  );
}

function Text24() {
  return (
    <div className="bg-yellow-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[86.594px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#f0b100] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text21 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#d08700] text-[12px] text-nowrap top-[4px] whitespace-pre">Planning</p>
      <Text23 />
    </div>
  );
}

function Container62() {
  return (
    <div className="content-stretch flex flex-col gap-[10px] items-start relative shrink-0 w-full" data-name="Container">
      <Container61 />
      <Text24 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[16px] relative shrink-0 w-[185px]" data-name="Table Cell">
      <Container62 />
    </div>
  );
}

function Text25() {
  return <div className="absolute bg-[#fe9a00] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text26() {
  return (
    <div className="bg-amber-50 h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[97.563px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe9a00] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text25 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[29px] text-[#e17100] text-[12px] text-nowrap top-[4px] whitespace-pre">Not Ready</p>
    </div>
  );
}

function Container63() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text26 />
    </div>
  );
}

function TableCell43() {
  return (
    <div className="content-stretch flex flex-col items-start justify-center px-[20px] py-[17px] relative shrink-0 w-[137.4px]" data-name="Table Cell">
      <Container63 />
    </div>
  );
}

function Icon17() {
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

function Button15() {
  return (
    <div className="content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <Icon17 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[31px] relative shrink-0 w-[92.33px]" data-name="Table Cell">
      <Button15 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
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
    <div className="content-stretch flex flex-col gap-px items-start overflow-clip relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function ProjectManagement() {
  return (
    <div className="bg-white h-[618px] relative rounded-[10px] shrink-0 w-full" data-name="ProjectManagement">
      <div aria-hidden="true" className="absolute border border-gray-200 border-solid inset-0 pointer-events-none rounded-[10px]" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start p-px relative size-full">
          <Container3 />
          <Table />
        </div>
      </div>
    </div>
  );
}

function Icon18() {
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

function Button16() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[113.953px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon18 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[69px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%] whitespace-pre">Previous</p>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[16px] text-center text-nowrap text-white top-[8px] translate-x-[-50%] whitespace-pre">1</p>
      </div>
    </div>
  );
}

function Icon19() {
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

function Button18() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[86.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[31.5px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%] whitespace-pre">Next</p>
        <Icon19 />
      </div>
    </div>
  );
}

function Container64() {
  return (
    <div className="h-[58px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
          <Button16 />
          <Button17 />
          <Button18 />
        </div>
      </div>
    </div>
  );
}

function Pagination() {
  return (
    <div className="h-[93px] relative shrink-0 w-full" data-name="Pagination">
      <div aria-hidden="true" className="absolute border-[1px_0px_0px] border-gray-200 border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-0 pt-[17px] px-[16px] relative size-full">
          <Container64 />
        </div>
      </div>
    </div>
  );
}

function Table1() {
  return (
    <div className="bg-white h-[743px] relative rounded-[10px] shrink-0 w-full" data-name="table">
      <div className="flex flex-col items-end overflow-clip rounded-[inherit] size-full">
        <div className="content-stretch flex flex-col items-end pb-0 pt-[32px] px-[32px] relative size-full">
          <ProjectManagement />
          <Pagination />
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

export default function Module() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="MODULE 1">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}