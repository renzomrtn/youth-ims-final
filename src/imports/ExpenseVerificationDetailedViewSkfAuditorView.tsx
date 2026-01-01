import svgPaths from "./svg-kmswvudk54";
import imgYouthImsLogo11 from "../assets/8060f7b70ee64910a3764658a3aaf192cdf1a596.png";
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
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[normal] relative shrink-0 text-[#606060] text-[22px] text-nowrap">{`/  Expense Verification / Current Verifications /  HIV/AIDS Awareness Seminar `}</p>
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
        <p className="text-[16px]">SKF Auditor</p>
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
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[normal] relative shrink-0 text-[#174499] text-[16px] text-nowrap">Expense Verification</p>
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
    <div className="absolute bg-[#174499] h-[45px] left-0 rounded-br-[10px] rounded-tr-[10px] top-[208px] w-[6px]">
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

function Button1() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div aria-hidden="true" className="absolute border-[#155dfc] border-[0px_0px_2px] border-solid inset-0 pointer-events-none" />
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#155dfc] text-[16px] text-center text-nowrap">Current Verifications</p>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Past Verifications</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="relative shrink-0" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center px-[3px] py-px relative">
        <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Verifications Monitoring</p>
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
        </div>
      </div>
    </div>
  );
}

function ProjTit() {
  return <div className="h-[52px] shrink-0 w-[58px]" data-name="proj tit" />;
}

function ProjTit1() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[16px] relative shrink-0 w-[667px]" data-name="proj tit">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Particulars</p>
    </div>
  );
}

function LiInfo() {
  return (
    <div className="content-stretch flex h-[52px] items-start px-[24px] py-[16px] relative shrink-0 w-[157px]" data-name="li info">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Amount</p>
    </div>
  );
}

function ProjTit2() {
  return (
    <div className="content-stretch flex items-start px-[24px] py-[16px] relative shrink-0 w-[212px]" data-name="proj tit">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Date of Expense</p>
    </div>
  );
}

function Component() {
  return (
    <div className="content-stretch flex h-[53px] items-start px-[24px] py-[16px] relative shrink-0 w-[225px]" data-name="4">
      <p className="basis-0 font-['Source_Sans_3:Bold',sans-serif] font-bold grow leading-[20px] min-h-px min-w-px relative shrink-0 text-[#364153] text-[14px]">Attachment</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <ProjTit />
      <ProjTit1 />
      <LiInfo />
      <ProjTit2 />
      <Component />
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
    <div className="content-stretch flex items-center justify-center px-[24px] py-[36px] relative shrink-0 w-[58px]" data-name="Table Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white relative size-[18px]">
            <div aria-hidden="true" className="absolute border border-[#7b7b7b] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell1() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[667px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">Venue Rental (1-day seminar)</p>
    </div>
  );
}

function TableCell2() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱12,000.00</p>
    </div>
  );
}

function TableCell3() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">September 1, 2025</p>
    </div>
  );
}

function Container1() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Images() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_821)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_149_821">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell4() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[225px]" data-name="Table Cell">
      <Container1 />
      <Images />
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
    </div>
  );
}

function TableCell5() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[36px] relative shrink-0 w-[58px]" data-name="Table Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white relative size-[18px]">
            <div aria-hidden="true" className="absolute border border-[#7b7b7b] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell6() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[667px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[334px]">Meals and Snacks for Participants (80 pax)</p>
    </div>
  );
}

function TableCell7() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱15,000.00</p>
    </div>
  );
}

function TableCell8() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[334px]">September 1, 2025</p>
    </div>
  );
}

function Container2() {
  return <div className="h-[20px] shrink-0 w-full" data-name="Container" />;
}

function Images1() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_821)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_149_821">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell9() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[225px]" data-name="Table Cell">
      <Container2 />
      <Images1 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell5 />
      <TableCell6 />
      <TableCell7 />
      <TableCell8 />
      <TableCell9 />
    </div>
  );
}

function TableCell10() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[36px] relative shrink-0 w-[58px]" data-name="Table Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white relative size-[18px]">
            <div aria-hidden="true" className="absolute border border-[#7b7b7b] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell11() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[667px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[352px]">Honorarium for Speaker / Resource Person</p>
    </div>
  );
}

function TableCell12() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱8,000.00</p>
    </div>
  );
}

function TableCell13() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[352px]">September 1, 2025</p>
    </div>
  );
}

function Images2() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_821)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_149_821">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell14() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[225px]" data-name="Table Cell">
      <Images2 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell10 />
      <TableCell11 />
      <TableCell12 />
      <TableCell13 />
      <TableCell14 />
    </div>
  );
}

function TableCell15() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[36px] relative shrink-0 w-[58px]" data-name="Table Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white relative size-[18px]">
            <div aria-hidden="true" className="absolute border border-[#7b7b7b] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell16() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[667px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[304px]">Seminar Kits (IDs, pens, notebooks, folders)</p>
    </div>
  );
}

function TableCell17() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱11,000.00</p>
    </div>
  );
}

function TableCell18() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[36px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[304px]">September 1, 2025</p>
    </div>
  );
}

function Images3() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_821)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_149_821">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell19() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[28px] relative shrink-0 w-[225px]" data-name="Table Cell">
      <Images3 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <div aria-hidden="true" className="absolute border-[#e5e7eb] border-[0px_0px_1px] border-solid inset-0 pointer-events-none" />
      <TableCell15 />
      <TableCell16 />
      <TableCell17 />
      <TableCell18 />
      <TableCell19 />
    </div>
  );
}

function TableCell20() {
  return (
    <div className="content-stretch flex items-center justify-center px-[24px] py-[35px] relative shrink-0 w-[58px]" data-name="Table Cell">
      <div className="flex items-center justify-center relative shrink-0">
        <div className="flex-none scale-y-[-100%]">
          <div className="bg-white relative size-[18px]">
            <div aria-hidden="true" className="absolute border border-[#7b7b7b] border-solid inset-0 pointer-events-none" />
          </div>
        </div>
      </div>
    </div>
  );
}

function TableCell21() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[667px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[415px]">IEC Materials Printing (Tarpaulin, flyers, posters)</p>
    </div>
  );
}

function TableCell22() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[157px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[20px] relative shrink-0 text-[#101828] text-[16px] text-nowrap">₱9,555.56</p>
    </div>
  );
}

function TableCell23() {
  return (
    <div className="content-stretch flex items-center px-[24px] py-[35px] relative shrink-0 w-[212px]" data-name="Table Cell">
      <p className="font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[24px] relative shrink-0 text-[#101828] text-[16px] w-[415px]">September 1, 2025</p>
    </div>
  );
}

function Images4() {
  return (
    <div className="relative shrink-0 size-[16px]" data-name="images 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_821)" id="images 1">
          <path d={svgPaths.p2497780} fill="var(--fill-0, #6D798E)" id="Vector" />
          <path d={svgPaths.p2d0f8d00} fill="var(--fill-0, #6D798E)" id="Vector_2" />
        </g>
        <defs>
          <clipPath id="clip0_149_821">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function TableCell24() {
  return (
    <div className="content-stretch flex flex-col items-start px-[24px] py-[27px] relative shrink-0 w-[225px]" data-name="Table Cell">
      <Images4 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Table Row">
      <TableCell20 />
      <TableCell21 />
      <TableCell22 />
      <TableCell23 />
      <TableCell24 />
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
    <div className="absolute content-stretch flex flex-col gap-px h-[532px] items-start left-[317px] overflow-clip top-[23px] w-[1264px]" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function Container3() {
  return <div className="absolute h-[26px] left-[192px] top-[28px] w-[84px]" data-name="Container" />;
}

function Text() {
  return <div className="absolute bg-[#fe0000] left-[13px] rounded-[3.35544e+07px] size-[8px] top-[9px]" data-name="Text" />;
}

function Text1() {
  return (
    <div className="bg-[#fff7f7] h-[26px] relative rounded-[3.35544e+07px] shrink-0 w-[94px]" data-name="Text">
      <div aria-hidden="true" className="absolute border border-[#fe0000] border-solid inset-0 pointer-events-none rounded-[3.35544e+07px]" />
      <Text />
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal leading-[16px] left-[32px] text-[#e10000] text-[12px] text-nowrap top-[5px]">Flagged</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Container">
      <Text1 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-[183px] top-[34px] w-[114px]" data-name="Container">
      <Container4 />
    </div>
  );
}

function Button4() {
  return (
    <div className="absolute bg-[#e06c6e] content-stretch flex h-[45px] items-center justify-center left-[1292px] p-[10px] rounded-[6px] top-[796px] w-[110px]" data-name="Button">
      <div aria-hidden="true" className="absolute border border-[#e06c6e] border-solid inset-[-1px] pointer-events-none rounded-[7px]" />
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Flag</p>
    </div>
  );
}

function Button5() {
  return (
    <div className="absolute bg-[#174499] content-stretch flex h-[45px] items-center justify-center left-[1427px] p-[10px] rounded-[6px] top-[795px] w-[110px]" data-name="Button">
      <p className="font-['Source_Sans_3:Black',sans-serif] font-black leading-[normal] relative shrink-0 text-[14px] text-nowrap text-white">Approve</p>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex items-center justify-center left-[51px] px-[3px] py-px top-[34px]" data-name="Button">
      <p className="font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] relative shrink-0 text-[#4a5565] text-[16px] text-center text-nowrap">Back</p>
    </div>
  );
}

function ArrowLeftCircleFill() {
  return (
    <div className="absolute left-[25px] size-[16px] top-[39px]" data-name="arrow-left-circle-fill 1">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 16">
        <g clipPath="url(#clip0_149_825)" id="arrow-left-circle-fill 1">
          <path d={svgPaths.p26acc600} fill="var(--fill-0, #4A5565)" id="Vector" />
        </g>
        <defs>
          <clipPath id="clip0_149_825">
            <rect fill="white" height="16" width="16" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Frame4() {
  return (
    <div className="bg-[#fefeff] h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-black text-nowrap w-[702px]">
      <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold left-[23px] text-[20px] top-[13px]">Budget:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal left-[546px] text-[32px] top-0">₱55,555.56</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[798px] pb-px pt-[25px] px-[25px] rounded-[14px] top-[554px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame4 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="bg-[#fefeff] h-[46px] leading-[normal] overflow-clip relative rounded-[5px] shrink-0 text-black text-nowrap w-[702px]">
      <p className="absolute font-['Source_Sans_3:SemiBold',sans-serif] font-semibold left-[23px] text-[20px] top-[13px]">Total Amount Spent:</p>
      <p className="absolute font-['Source_Sans_3:Regular',sans-serif] font-normal left-[546px] text-[32px] top-0">₱55,555.56</p>
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col h-[99px] items-start left-[798px] pb-0 pt-[25px] px-[25px] rounded-[14px] top-[672px] w-[739px]" data-name="Container">
      <div aria-hidden="true" className="absolute border border-[#e2e8f0] border-solid inset-0 pointer-events-none rounded-[14px] shadow-[0px_1px_3px_0px_rgba(0,0,0,0.1),0px_1px_2px_-1px_rgba(0,0,0,0.1)]" />
      <Frame5 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="bg-white h-[870px] overflow-clip relative rounded-[10px] shrink-0 w-[1614px]">
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[33px] text-[16px] text-black text-nowrap top-[104px]">
        Line Item
        <span>
          :<br aria-hidden="true" />
        </span>
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">HIV/AIDS Awareness Seminar</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[33px] text-[16px] text-black text-nowrap top-[184px]">
        <span>
          Line Item Information:
          <br aria-hidden="true" />
          ID:
        </span>
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">
          {` LI-20250910-26ZQ`}
          <br aria-hidden="true" />
        </span>
        Area of Participation:
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">
          {` Health`}
          <br aria-hidden="true" />
        </span>
        Budget:<span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">{` ₱55,555.56`}</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[34px] text-[16px] text-black text-nowrap top-[307px]">
        <span>
          Total Amount Spent:
          <br aria-hidden="true" />
        </span>
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">₱55,555.56</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[34px] text-[16px] text-black text-nowrap top-[491px]">
        <span>
          Submitted By:
          <br aria-hidden="true" />
        </span>
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">Maria Garcia</span>
      </p>
      <p className="absolute font-['Source_Sans_3:Bold',sans-serif] font-bold leading-[24px] left-[34px] text-[16px] text-black text-nowrap top-[387px]">
        <span>
          Expenditure Period:
          <br aria-hidden="true" />
        </span>
        From:
        <span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">
          {` September 1, 2025`}
          <br aria-hidden="true" />
        </span>
        To:<span className="font-['Source_Sans_3:Regular',sans-serif] font-normal">{` September 1, 2025`}</span>
      </p>
      <div className="absolute bg-[#d9d9d9] h-[824px] left-[296px] top-[23px] w-px" />
      <Table />
      <Container3 />
      <Container5 />
      <Button4 />
      <Button5 />
      <Button6 />
      <ArrowLeftCircleFill />
      <Container6 />
      <Container7 />
    </div>
  );
}

function Content() {
  return (
    <div className="bg-[#f3f3f3] content-stretch flex flex-col gap-[10px] h-full items-start overflow-clip p-[32px] relative rounded-tl-[24px] shrink-0 w-[1694px]" data-name="content">
      <Container />
      <Frame6 />
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

export default function ExpenseVerificationDetailedViewSkfAuditorView() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Expense Verification - Detailed View (SKF Auditor View)">
      <Navbar />
      <BottomOfNav />
    </div>
  );
}