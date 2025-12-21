import svgPaths from "./svg-976tu6e3e0";
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Archives / Resolutions`}</p>
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
          <path d={svgPaths.p6b45080} id="Vector" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d={svgPaths.p2962b330} id="Vector_2" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          <path d="M10 12H14" id="Vector_3" stroke="var(--stroke-0, #174499)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
        </g>
      </svg>
    </div>
  );
}

function Archives() {
  return (
    <div className="content-stretch flex gap-[12px] items-center relative shrink-0" data-name="archives">
      <Icon4 />
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">Archives</p>
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
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[283px] w-[6px]">
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

function Icon7() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g id="Icon">
          <path d={svgPaths.p203476e0} id="Vector" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          <path d="M12.6667 8H3.33333" id="Vector_2" stroke="var(--stroke-0, #364153)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="content-stretch flex gap-[8px] items-center px-[16px] py-[8px] relative rounded-[10px] shrink-0" data-name="Button">
      <Icon7 />
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#364153] text-[16px] text-center text-nowrap">Back to Categories</p>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[4px] py-0 relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">2025</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">2024</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">2023</p>
      </div>
    </div>
  );
}

function Button5() {
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
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[32px] items-center p-[20px] relative w-full">
          <Button2 />
          <Button3 />
          <Button4 />
          <Button5 />
        </div>
      </div>
    </div>
  );
}

function Frame4() {
  return (
    <div className="content-stretch flex gap-[42px] items-center justify-center relative shrink-0 w-full">
      <Button1 />
      <Container />
    </div>
  );
}

function Icon8() {
  return (
    <div className="basis-0 grow h-[20px] min-h-px min-w-px relative shrink-0" data-name="Icon">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <div className="absolute inset-[8.33%_16.67%]" data-name="Vector">
          <div className="absolute inset-[-5%_-6.25%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 19">
              <path d={svgPaths.p2b8e5100} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[8.33%_16.67%_66.67%_58.33%]" data-name="Vector">
          <div className="absolute inset-[-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 7">
              <path d={svgPaths.p3b6dc480} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
        <div className="absolute inset-[54.17%_37.5%_29.17%_37.5%]" data-name="Vector">
          <div className="absolute inset-[-25%_-16.67%]">
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 7 5">
              <path d={svgPaths.p184c5900} id="Vector" stroke="var(--stroke-0, white)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[36px]" data-name="Container" style={{ backgroundImage: "linear-gradient(135deg, rgb(43, 127, 255) 0%, rgb(21, 93, 252) 100%)" }}>
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon8 />
      </div>
    </div>
  );
}

function Heading() {
  return (
    <div className="basis-0 grow h-[24px] min-h-px min-w-px relative shrink-0" data-name="Heading 2">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolutions</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="h-[36px] relative shrink-0 w-[126.531px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <Container1 />
        <Heading />
      </div>
    </div>
  );
}

function TextInput() {
  return (
    <div className="basis-0 bg-white grow h-[38px] min-h-px min-w-px relative rounded-[10px] shrink-0" data-name="Text Input">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center px-[12px] py-[8px] relative size-full">
          <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#6a7282] text-[14px] text-nowrap">Search documents...</p>
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
    <div className="bg-[#3b5998] h-[36px] relative rounded-[10px] shrink-0 w-[143.094px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon9 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] left-[84px] text-[14px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]">Add Document</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="h-[38px] relative shrink-0 w-[411.094px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[12px] items-center relative size-full">
        <TextInput />
        <Button6 />
      </div>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex h-[38px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function Container5() {
  return (
    <div className="h-[87px] relative shrink-0 w-full" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <div className="size-full">
        <div className="content-stretch flex flex-col items-start pb-px pt-[24px] px-[24px] relative size-full">
          <Container4 />
        </div>
      </div>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-0 px-[24px] py-[16px] top-0 w-[131.938px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Number</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[131.94px] px-[24px] py-[16px] top-0 w-[210.922px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Record ID</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[342.86px] px-[24px] py-[16px] top-0 w-[630.641px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Title</p>
    </div>
  );
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[973.5px] px-[24px] py-[16px] top-0 w-[270.922px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Document Details</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[1244.42px] px-[24px] py-[16px] top-0 w-[179.156px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">File</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[52.5px] items-start left-[1423.58px] px-[24px] py-[16px] top-0 w-[161.422px]" data-name="Header Cell">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px] text-right">Action</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="h-[52.5px] relative shrink-0 w-[1585px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex flex-col items-start relative shrink-0" data-name="Table Header">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableRow />
    </div>
  );
}

function TableCell() {
  return (
    <div className="absolute h-[88.5px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">8</p>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="absolute h-[88.5px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-1271BPUI21</p>
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[24px] relative shrink-0 w-[330.75px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Educational Aid for Disaster Victims</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon10 />
      <Text />
    </div>
  );
}

function TableCell2() {
  return (
    <div className="absolute h-[88.5px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container6 />
    </div>
  );
}

function Text1() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text1 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[47.47px] text-[#4a5565] text-[12px] top-[-1px] w-[60px]">Luis Gomez</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text2 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[62.06px] text-[#4a5565] text-[12px] top-[-1px] w-[102px]">September 05, 2024</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text3 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[83px] text-[#4a5565] text-[12px] top-[-1px] w-[55px]">Elena Diaz</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph />
      <Paragraph1 />
      <Paragraph2 />
    </div>
  );
}

function TableCell3() {
  return (
    <div className="absolute h-[88.5px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text5() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">1.4 MB</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text4 />
      <Text5 />
    </div>
  );
}

function TableCell4() {
  return (
    <div className="absolute h-[88.5px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container8 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon11 />
      </div>
    </div>
  );
}

function Icon12() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon12 />
      </div>
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button7 />
      <Button8 />
    </div>
  );
}

function TableCell5() {
  return (
    <div className="absolute h-[88.5px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container9 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="h-[88.5px] relative shrink-0 w-[1585px]" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell />
      <TableCell1 />
      <TableCell2 />
      <TableCell3 />
      <TableCell4 />
      <TableCell5 />
    </div>
  );
}

function TableCell6() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">7</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-1271ASR21</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text6() {
  return (
    <div className="h-[24px] relative shrink-0 w-[388.922px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution opposing House Bill 10747 and Senate Bill 2707</p>
      </div>
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon13 />
      <Text6 />
    </div>
  );
}

function TableCell8() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container10 />
    </div>
  );
}

function Text7() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text7 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[78px]">John Dela Cruz</p>
    </div>
  );
}

function Text8() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text8 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[99px]">November 15, 2024</p>
    </div>
  );
}

function Text9() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph5() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text9 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[68px]">Maria Santos</p>
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph3 />
      <Paragraph4 />
      <Paragraph5 />
    </div>
  );
}

function TableCell9() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container11 />
    </div>
  );
}

function Text10() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text11() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">1.2 MB</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text10 />
      <Text11 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container12 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon14 />
      </div>
    </div>
  );
}

function Icon15() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon15 />
      </div>
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button9 />
      <Button10 />
    </div>
  );
}

function TableCell11() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container13 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
      <TableCell10 />
      <TableCell11 />
    </div>
  );
}

function TableCell12() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">6</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-150271B21</p>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text12() {
  return (
    <div className="h-[24px] relative shrink-0 w-[306.875px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Youth-Focused Drug Prevention</p>
      </div>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon16 />
      <Text12 />
    </div>
  );
}

function TableCell14() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container14 />
    </div>
  );
}

function Text13() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph6() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text13 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[64px]">Pedro Reyes</p>
    </div>
  );
}

function Text14() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph7() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text14 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[87px]">October 22, 2024</p>
    </div>
  );
}

function Text15() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph8() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text15 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[63px]">Anna Garcia</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph6 />
      <Paragraph7 />
      <Paragraph8 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container15 />
    </div>
  );
}

function Text16() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text17() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">0.9 MB</p>
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text16 />
      <Text17 />
    </div>
  );
}

function TableCell16() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container16 />
    </div>
  );
}

function Icon17() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button11() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon17 />
      </div>
    </div>
  );
}

function Icon18() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button12() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon18 />
      </div>
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function TableCell17() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container17 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
    </div>
  );
}

function TableCell18() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">5</p>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-1FF271A21</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text18() {
  return (
    <div className="h-[24px] relative shrink-0 w-[263.438px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Free HIV/AIDS Medication</p>
      </div>
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon19 />
      <Text18 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container18 />
    </div>
  );
}

function Text19() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph9() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text19 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[82px]">Carlos Mendoza</p>
    </div>
  );
}

function Text20() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph10() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text20 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[102px]">September 18, 2024</p>
    </div>
  );
}

function Text21() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph11() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text21 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[56px]">Linda Cruz</p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph9 />
      <Paragraph10 />
      <Paragraph11 />
    </div>
  );
}

function TableCell21() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container19 />
    </div>
  );
}

function Text22() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text23() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">1.1 MB</p>
    </div>
  );
}

function Container20() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text22 />
      <Text23 />
    </div>
  );
}

function TableCell22() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container20 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button13() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon20 />
      </div>
    </div>
  );
}

function Icon21() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon21 />
      </div>
    </div>
  );
}

function Container21() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button13 />
      <Button14 />
    </div>
  );
}

function TableCell23() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container21 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
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
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">4</p>
    </div>
  );
}

function TableCell25() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-1SW271B21</p>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text24() {
  return (
    <div className="h-[24px] relative shrink-0 w-[311.953px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Support for Youth Sports League</p>
      </div>
    </div>
  );
}

function Container22() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon22 />
      <Text24 />
    </div>
  );
}

function TableCell26() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container22 />
    </div>
  );
}

function Text25() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph12() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text25 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[57px]">Robert Tan</p>
    </div>
  );
}

function Text26() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph13() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text26 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[81px]">August 30, 2024</p>
    </div>
  );
}

function Text27() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph14() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text27 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[64px]">Sarah Lopez</p>
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph12 />
      <Paragraph13 />
      <Paragraph14 />
    </div>
  );
}

function TableCell27() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container23 />
    </div>
  );
}

function Text28() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text29() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">1.0 MB</p>
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text28 />
      <Text29 />
    </div>
  );
}

function TableCell28() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container24 />
    </div>
  );
}

function Icon23() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button15() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon23 />
      </div>
    </div>
  );
}

function Icon24() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon24 />
      </div>
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button15 />
      <Button16 />
    </div>
  );
}

function TableCell29() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container25 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell24 />
      <TableCell25 />
      <TableCell26 />
      <TableCell27 />
      <TableCell28 />
      <TableCell29 />
    </div>
  );
}

function TableCell30() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">3</p>
    </div>
  );
}

function TableCell31() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-12716ER1</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text30() {
  return (
    <div className="h-[24px] relative shrink-0 w-[319.969px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Mental Health Programs for Youth</p>
      </div>
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon25 />
      <Text30 />
    </div>
  );
}

function TableCell32() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container26 />
    </div>
  );
}

function Text31() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph15() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text31 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[82px]">Jennifer Aquino</p>
    </div>
  );
}

function Text32() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph16() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text32 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[99px]">November 28, 2024</p>
    </div>
  );
}

function Text33() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph17() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text33 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[78px]">Michael Ramos</p>
    </div>
  );
}

function Container27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph15 />
      <Paragraph16 />
      <Paragraph17 />
    </div>
  );
}

function TableCell33() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container27 />
    </div>
  );
}

function Text34() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text35() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">1.3 MB</p>
    </div>
  );
}

function Container28() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text34 />
      <Text35 />
    </div>
  );
}

function TableCell34() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container28 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button17() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon26 />
      </div>
    </div>
  );
}

function Icon27() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button18() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon27 />
      </div>
    </div>
  );
}

function Container29() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button17 />
      <Button18 />
    </div>
  );
}

function TableCell35() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container29 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell30 />
      <TableCell31 />
      <TableCell32 />
      <TableCell33 />
      <TableCell34 />
      <TableCell35 />
    </div>
  );
}

function TableCell36() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">2</p>
    </div>
  );
}

function TableCell37() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-1271VCR21</p>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text36() {
  return (
    <div className="h-[24px] relative shrink-0 w-[266.125px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution on Financial Aid for Students</p>
      </div>
    </div>
  );
}

function Container30() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon28 />
      <Text36 />
    </div>
  );
}

function TableCell38() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container30 />
    </div>
  );
}

function Text37() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph18() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text37 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[58px]">David Silva</p>
    </div>
  );
}

function Text38() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph19() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text38 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[102px]">September 10, 2024</p>
    </div>
  );
}

function Text39() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph20() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text39 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[66px]">Patricia Cruz</p>
    </div>
  );
}

function Container31() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph18 />
      <Paragraph19 />
      <Paragraph20 />
    </div>
  );
}

function TableCell39() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container31 />
    </div>
  );
}

function Text40() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text41() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">0.8 MB</p>
    </div>
  );
}

function Container32() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text40 />
      <Text41 />
    </div>
  );
}

function TableCell40() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container32 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button19() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon29 />
      </div>
    </div>
  );
}

function Icon30() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button20() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon30 />
      </div>
    </div>
  );
}

function Container33() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button19 />
      <Button20 />
    </div>
  );
}

function TableCell41() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container33 />
    </div>
  );
}

function TableRow7() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell36 />
      <TableCell37 />
      <TableCell38 />
      <TableCell39 />
      <TableCell40 />
      <TableCell41 />
    </div>
  );
}

function TableCell42() {
  return (
    <div className="absolute h-[89px] left-0 top-0 w-[131.938px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">1</p>
    </div>
  );
}

function TableCell43() {
  return (
    <div className="absolute h-[89px] left-[131.94px] top-0 w-[210.922px]" data-name="Table Cell">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[24px] text-[#4a5565] text-[16px] text-nowrap top-[32.5px]">RID-121071B21</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[20px]" data-name="Icon">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 20">
        <g id="Icon">
          <path d={svgPaths.p31172880} id="Vector" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d={svgPaths.p3abdf300} id="Vector_2" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M8.33333 7.5H6.66667" id="Vector_3" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 10.8333H6.66667" id="Vector_4" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
          <path d="M13.3333 14.1667H6.66667" id="Vector_5" stroke="var(--stroke-0, #155DFC)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.66667" />
        </g>
      </svg>
    </div>
  );
}

function Text42() {
  return (
    <div className="h-[24px] relative shrink-0 w-[71.828px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-0 text-[#101828] text-[16px] text-nowrap top-0">Resolution</p>
      </div>
    </div>
  );
}

function Container34() {
  return (
    <div className="absolute content-stretch flex gap-[12px] h-[24px] items-center left-[24px] top-[32.5px] w-[582.641px]" data-name="Container">
      <Icon31 />
      <Text42 />
    </div>
  );
}

function TableCell44() {
  return (
    <div className="absolute h-[89px] left-[342.86px] top-0 w-[630.641px]" data-name="Table Cell">
      <Container34 />
    </div>
  );
}

function Text43() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[37.516px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Author:</p>
    </div>
  );
}

function Paragraph21() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text43 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[45.47px] text-[#4a5565] text-[12px] top-[-0.5px] w-[75px]">Antonio Flores</p>
    </div>
  );
}

function Text44() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[52.109px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Uploaded:</p>
    </div>
  );
}

function Paragraph22() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text44 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[60.06px] text-[#4a5565] text-[12px] top-[-0.5px] w-[81px]">August 20, 2024</p>
    </div>
  );
}

function Text45() {
  return (
    <div className="absolute content-stretch flex h-[17px] items-start left-0 top-[-1px] w-[73.047px]" data-name="Text">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[16px] relative shrink-0 text-[#6a7282] text-[12px] text-nowrap">Last Edited by:</p>
    </div>
  );
}

function Paragraph23() {
  return (
    <div className="h-[16px] relative shrink-0 w-full" data-name="Paragraph">
      <Text45 />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[81px] text-[#4a5565] text-[12px] top-[-0.5px] w-[73px]">Rosa Martinez</p>
    </div>
  );
}

function Container35() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4px] h-[56px] items-start left-[24px] top-[16.5px] w-[222.922px]" data-name="Container">
      <Paragraph21 />
      <Paragraph22 />
      <Paragraph23 />
    </div>
  );
}

function TableCell45() {
  return (
    <div className="absolute h-[89px] left-[973.5px] top-0 w-[270.922px]" data-name="Table Cell">
      <Container35 />
    </div>
  );
}

function Text46() {
  return (
    <div className="absolute h-[16px] left-[12px] top-[4px] w-[20.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#364153] text-[12px] text-nowrap top-[-1px]">PDF</p>
    </div>
  );
}

function Text47() {
  return (
    <div className="absolute h-[16px] left-[40.11px] top-[4px] w-[33.109px]" data-name="Text">
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-0 text-[#6a7282] text-[12px] text-nowrap top-[-1px]">0.7 MB</p>
    </div>
  );
}

function Container36() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[24px] left-[24px] rounded-[10px] top-[33.5px] w-[85.219px]" data-name="Container">
      <Text46 />
      <Text47 />
    </div>
  );
}

function TableCell46() {
  return (
    <div className="absolute h-[89px] left-[1244.42px] top-0 w-[179.156px]" data-name="Table Cell">
      <Container36 />
    </div>
  );
}

function Icon32() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[20.84%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-7.14%_-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 11">
            <path d={svgPaths.pb85f580} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[37.5%]" data-name="Vector">
        <div className="absolute inset-[-16.67%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 6 6">
            <path d={svgPaths.p36446d40} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button21() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon32 />
      </div>
    </div>
  );
}

function Icon33() {
  return (
    <div className="h-[16px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[8.33%_8.33%_8.34%_8.33%]" data-name="Vector">
        <div className="absolute inset-[-5%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
            <path d={svgPaths.p4290a20} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[20.83%_20.83%_62.5%_62.5%]" data-name="Vector">
        <div className="absolute inset-[-25%]">
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 4 4">
            <path d={svgPaths.p17db7800} id="Vector" stroke="var(--stroke-0, #4A5565)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33333" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button22() {
  return (
    <div className="relative rounded-[10px] shrink-0 size-[32px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pb-0 pt-[8px] px-[8px] relative size-full">
        <Icon33 />
      </div>
    </div>
  );
}

function Container37() {
  return (
    <div className="absolute content-stretch flex gap-[8px] h-[32px] items-center justify-end left-[24px] top-[28.5px] w-[113.422px]" data-name="Container">
      <Button21 />
      <Button22 />
    </div>
  );
}

function TableCell47() {
  return (
    <div className="absolute h-[89px] left-[1423.58px] top-0 w-[161.422px]" data-name="Table Cell">
      <Container37 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="h-[89px] relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell42 />
      <TableCell43 />
      <TableCell44 />
      <TableCell45 />
      <TableCell46 />
      <TableCell47 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[1585px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
      <TableRow7 />
      <TableRow8 />
    </div>
  );
}

function Table() {
  return (
    <div className="content-stretch flex flex-col gap-px items-start relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Icon34() {
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

function Button23() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[113.984px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon34 />
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[69px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Previous</p>
      </div>
    </div>
  );
}

function Button24() {
  return (
    <div className="bg-[#155dfc] relative rounded-[10px] shrink-0 size-[40px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[20.02px] text-[16px] text-center text-nowrap text-white top-[8px] translate-x-[-50%]">1</p>
      </div>
    </div>
  );
}

function Icon35() {
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

function Button25() {
  return (
    <div className="h-[40px] relative rounded-[10px] shrink-0 w-[86.344px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] left-[31.5px] text-[#99a1af] text-[16px] text-center text-nowrap top-[8px] translate-x-[-50%]">Next</p>
        <Icon35 />
      </div>
    </div>
  );
}

function Container38() {
  return (
    <div className="h-[40px] relative shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex gap-[4px] items-center justify-center pl-0 pr-[0.016px] py-0 relative size-full">
          <Button23 />
          <Button24 />
          <Button25 />
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
          <Container38 />
        </div>
      </div>
    </div>
  );
}

function Container39() {
  return (
    <div className="bg-white relative rounded-[10px] shrink-0 w-[1587px]" data-name="Container">
      <div className="content-stretch flex flex-col items-start overflow-clip p-px relative rounded-[inherit] w-full">
        <Container5 />
        <Table />
        <Pagination />
      </div>
      <div aria-hidden="true" className="absolute border border-[#e5e7eb] border-solid inset-0 pointer-events-none rounded-[10px]" />
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col gap-[20px] items-center overflow-clip relative rounded-tl-[16px] shrink-0 w-full" data-name="App">
      <Frame4 />
      <Container39 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col items-start overflow-clip p-[32px] relative rounded-tl-[24px] shrink-0 w-[1694px]" data-name="content">
      <App />
    </div>
  );
}

function BottomOfNav() {
  return (
    <div className="content-stretch flex items-center relative shrink-0" data-name="bottom of nav">
      <div className="flex flex-row items-center self-stretch">
        <Sidebar />
      </div>
      <Content />
    </div>
  );
}

export default function ArchivesResolutions() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="ARCHIVES - Resolutions">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}